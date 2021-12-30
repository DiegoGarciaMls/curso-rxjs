import { fromEvent } from 'rxjs';
import { map, sampleTime, tap } from 'rxjs/operators'


const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    sampleTime( 3000 ),
    map( ({ x, y }) => ({ x, y }) )
)
.subscribe( console.log )
