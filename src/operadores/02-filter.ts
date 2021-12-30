import { range, from, fromEvent } from 'rxjs';
import { filter, pluck, map } from 'rxjs/operators';

interface Personajes {
    tipo: string,
    nombre: string,
}

// range( 10, 30 ).pipe(
//     filter( ( val, i ) => {
//         console.log( 'index: ', i );
//         return val % 2 === 1;
//     })
// ).subscribe( console.log );

const personajes: Personajes[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman',
    },
    {
        tipo: 'heroe',
        nombre: 'Robin',
    },
    {
        tipo: 'villano',
        nombre: 'Joker',
    },
];

const personajes$ =  from<Personajes[]>(personajes).pipe(
    filter( ( val, i ) => {
        console.log( 'index: ', i );
        return val.tipo === 'heroe';
    })
);

// personajes$.subscribe( json => console.log( 'nombre: ', json.nombre ) );


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe(
    map<KeyboardEvent, string>( event => event.code ),
    filter<string>( key => key === 'Enter' )
);

keyup$.subscribe( keyup => console.log( 'Tecla: ', keyup ) );