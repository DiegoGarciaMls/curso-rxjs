import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';


// const url = 'https://api.github.com/users?per_page=5';
const url = 'https://httpbin.org/delay/1';


const manejaError = ( err: AjaxError ) => {
    console.warn( 'error: ', err.message );
    return of({
        ok: false,
        usuarios: []
    });
};


const obs1$ = ajax.getJSON( url );
// const obs2$ = ajax( url );

obs1$.pipe(
    catchError( manejaError ),
)
.subscribe( {
    next: val    => console.log( 'next: ', val ),
    error: err   => console.warn( 'error en subs: ', err ),
    complete: () => console.log( 'complete' )
});

// obs2$.subscribe( data => console.log( 'ajax: '   , data ) );


