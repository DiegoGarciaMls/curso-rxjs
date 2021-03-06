import { fromEvent, interval } from 'rxjs';
import { takeUntil, tap, skip } from 'rxjs/operators';

const button = document.createElement( 'button' );
button.innerHTML = 'Detener timer';

document.querySelector( 'body' ).append( button );


const counter$  = interval( 1000 );
// const clickBtn$ = fromEvent<Event>( button, 'click' );
const clickBtn$ = fromEvent<Event>( button, 'click' ).pipe(
    tap( () => console.log( 'tap antes del skip' ) ),
    skip( 1 ),
    tap( () => console.log( 'tap despues del skip' ) )
);


counter$.pipe(
    takeUntil( clickBtn$ )
)
.subscribe( {
    next: val    => console.log( 'next: ', val ),
    complete: () => console.log( 'complete' )
});
