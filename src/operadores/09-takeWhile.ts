import { fromEvent } from 'rxjs'
import { takeWhile, map } from 'rxjs/operators'


const click$ = fromEvent<MouseEvent>( document, 'click' );

click$.pipe(
    map( ({ x, y }) => ({ x, y }) ),
    takeWhile( ({ y }) => y <= 150, true )  // incluse? = true, envia next aparte del complete
)
.subscribe( {
    next: val    => console.log( 'next: ', val ),
    complete: () => console.log( 'complete:' )
});
