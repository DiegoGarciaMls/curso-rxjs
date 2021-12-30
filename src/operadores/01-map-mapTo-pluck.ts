import { fromEvent, range } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// range( 1, 5 ).pipe(
//     map<number, string>( val => (val * 10).toString() )
// )
// .subscribe( console.log );


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const keyupCode$ = keyup$.pipe(
    map<KeyboardEvent, string>( evento => evento.code )
);

const keyupPluck$ = keyup$.pipe(
    pluck<KeyboardEvent>( 'target', 'baseURI' )
);

const keyupMapTo$ = keyup$.pipe(
    mapTo<string>( 'Tecla presionada' )
);


keyup$.subscribe( console.log );
keyupCode$.subscribe( code => console.log( 'map: ', code ) );
keyupPluck$.subscribe( pluck => console.log( 'pluck: ', pluck ) );
keyupMapTo$.subscribe( mapTo => console.log( 'mapTo: ', mapTo ) );