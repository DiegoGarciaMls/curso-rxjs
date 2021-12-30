import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next : value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [error]: ', error),
    complete: () => console.info('completado [obs]')
}

const intervalo$ = new Observable<number>( subs => {
    
    const intervalID = setInterval( 
        () => subs.next(Math.random()), 1000 
    );

    return () => {
        clearInterval( intervalID );
        console.log( 'Intervalo destruido' );
    }

});

/**
 * 1- Cateo multiple
 * 2- Tambien es un observer
 * 3- next, error y complete 
 */

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe( rand => console.log('subs1: ', rand) );
// const subs2 = intervalo$.subscribe( rand => console.log('subs2: ', rand) );

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setInterval( () => {

    subject$.next(10);
    subject$.complete();

    subscription.unsubscribe();

}, 3500 );

