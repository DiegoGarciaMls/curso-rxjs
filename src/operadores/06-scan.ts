import { from } from 'rxjs'
import { scan, reduce, map } from 'rxjs/operators'


const numeros = [ 1, 2, 3, 4, 5 ];

const totalAcumulador = ( acc: number, cur: number ) => acc + cur;

//reduce
from( numeros ).pipe(
    reduce( totalAcumulador, 0 )
)
.subscribe( console.log );


// scan
from( numeros ).pipe(
    scan( totalAcumulador, 0 )
)
.subscribe( console.log );


// Redux
interface Usuario {
    id          ?: string,
    autenticado ?: boolean,
    token       ?: string,
    edad        ?: number
};

const user: Usuario[] = [
    { id: 'diego', autenticado: false, token: null },
    { id: 'diego', autenticado: true,  token: 'ABC' },
    { id: 'diego', autenticado: true,  token: 'ABC123' }
];


const state$ = from<Usuario[]>( user ).pipe(
    scan<Usuario, any>( (acc: any, cur: any) => {
        return { ...acc, ...cur };
    }, { edad: 25 } )
);

const id$ = state$.pipe(
    map( state => state.id )
);

id$.subscribe( console.log )