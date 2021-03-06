import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { pluck, catchError } from 'rxjs/operators';


const url = 'https://api.github.com/users?per_page=5';

const fetchPromesa = fetch( url );


const manejaErrores = ( response: Response ) => {

    if ( !response.ok ) {
        throw new Error( response.statusText )
    }

    return response
};

const atrapaError = ( err: AjaxError ) => {
    console.warn( 'error en: ', err.message );
    return of([]);
};


// fetchPromesa
// .then( resp => resp.json() )
// .then( data => console.log( 'data: ', data ) )
// .catch( err => console.warn( 'error de usuarios: ', err ) );

// fetchPromesa
// .then( manejaErrores )
// .then( resp => resp.json() )
// .then( data => console.log( 'data: ', data ) )
// .catch( err => console.warn( 'error de usuarios: ', err ) );


ajax( url ).pipe(
    pluck( 'response' ),
    catchError( atrapaError )
)
.subscribe( console.log )

