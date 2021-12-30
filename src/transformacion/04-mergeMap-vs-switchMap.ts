import { fromEvent, interval } from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';


const click$    = fromEvent<MouseEvent>(document, 'click');
const interval$ = interval(1000);

click$.pipe(
    // mergeMap(() => interval(1000)),  // crea un nuevo intervalo, pero no termina el anterior
    switchMap(() => interval$)     // crea un nuevo intervalo y termina el anterior
)
.subscribe(console.log)