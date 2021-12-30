import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next : value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [error]: ', error),
    complete: () => console.info('completado [obs]')
}


const intervalo$ = new Observable<number>( subscriber => {
    // Crear un contador por segundo 
    let count = 0;

    const interval = setInterval( () => {
        count++;
        subscriber.next( count );
        console.log( count );
    }, 1000 );

    setTimeout( () => {
        subscriber.complete();
    }, 2500 );

    return () => {
        clearInterval( interval );
        console.log( 'Intervalo destruido' );
    }

});

const subscription1 = intervalo$.subscribe( observer );
const subscription2 = intervalo$.subscribe( observer );
const subscription3 = intervalo$.subscribe( observer );

subscription1.add( subscription2 );
subscription2.add( subscription3 );


setTimeout( () => {
    subscription1.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();

    console.log( 'Observable completado' )
}, 3100 );