import { of, from } from 'rxjs';
import { distinctUntilKeyChanged, distinctUntilChanged } from 'rxjs/operators';


const numeros$ = of( 1,1,'1',1,3,3,2,2,4,5,1,3,'3' );

numeros$.pipe(
    distinctUntilChanged()
)
.subscribe( console.log );


interface Personajes {
    nombre: string;
};


const personaje: Personajes[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    }
];


from(personaje).pipe(
    distinctUntilKeyChanged( 'nombre' )
)
.subscribe( console.log )

