import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';


// el operador tap nos sirve para debuggear y verificar que estamos mandando
const range$ = range( 1, 5 ).pipe(
    tap<number>( val => console.log( 'antes: ', val ) ),
    map<number, string>( val => (val * 10).toString() ) ,
    tap<string>( {
        next: val => console.log( 'despues: ', val ),
        complete: () => console.log( 'complete' )
    })
);

range$.subscribe( range => console.log( 'subs: ', range ) );
