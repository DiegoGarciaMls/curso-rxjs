import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement( 'div' );
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at dapibus est. Suspendisse tempus dignissim urna vitae feugiat. Curabitur sed leo vitae purus finibus feugiat. Sed a velit ultricies, gravida nisi a, bibendum quam. Nam risus nulla, vulputate sed dapibus at, condimentum non dolor. Donec molestie justo nisi, sed eleifend neque sodales non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed scelerisque dui. Sed suscipit maximus odio eget ullamcorper. Pellentesque ac nulla et leo commodo facilisis vitae eget eros. Curabitur dictum venenatis sagittis. Vestibulum quis massa nec lacus auctor faucibus et sed mi. Donec nec tortor tortor. Quisque nec velit et sapien feugiat bibendum.
<br/><br/><br/><br/>
Nullam ut lectus volutpat, dapibus odio vitae, viverra turpis. Suspendisse potenti. Praesent iaculis varius mattis. Nulla eget magna sit amet odio cursus pulvinar. Proin a lacus ac odio lobortis eleifend. Nullam at vulputate dui. Donec viverra eros ut arcu sodales pellentesque. Nullam diam ante, sagittis eu posuere in, consequat in dolor. Phasellus laoreet ante ut ipsum malesuada, nec vulputate est ultricies. Vestibulum mattis vestibulum condimentum. Phasellus quis enim ante. Quisque vel placerat risus. Cras scelerisque at diam eget euismod. Praesent mollis, erat vel porta tristique, enim mi scelerisque enim, eu facilisis elit enim nec lorem. Nullam venenatis nisi felis, luctus rhoncus velit imperdiet in.
<br/><br/><br/><br/>
Mauris sollicitudin, nibh vitae congue interdum, purus dolor rhoncus risus, ut dapibus neque dui quis ipsum. Quisque ac pharetra risus, eu dictum augue. Donec cursus tempor vulputate. Nullam a pulvinar ex. Integer lacinia a nisi in finibus. Nulla facilisi. Phasellus a sem id elit finibus pulvinar vel quis nisl.
<br/><br/><br/><br/>
Phasellus posuere augue vitae posuere interdum. Cras commodo neque dapibus, aliquet mauris ut, fermentum massa. Nam blandit augue et ullamcorper blandit. Vestibulum ac maximus mi, non ornare nibh. Nunc imperdiet tincidunt risus eu mattis. Suspendisse in nunc nisi. Vestibulum pharetra pharetra nisl feugiat molestie. Sed et turpis vitae nibh volutpat lobortis non et arcu. Integer in risus maximus, molestie mauris cursus, dapibus ante.
<br/><br/><br/><br/>
Vivamus in turpis lectus. Sed porttitor eleifend luctus. Nunc fringilla ipsum neque, in cursus orci pulvinar ac. Pellentesque mi ex, molestie et ex rhoncus, accumsan cursus urna. Donec vehicula faucibus eros, nec auctor dolor malesuada non. Phasellus eu urna dui. In consectetur velit in justo luctus faucibus. Phasellus egestas accumsan justo. Nam ipsum nibh, tristique in vestibulum eget, hendrerit in est. Suspendisse dictum, neque nec hendrerit venenatis, purus tellus lobortis nisi, sagittis dignissim lectus ipsum et felis. Proin placerat elementum lorem, sed mattis ligula congue sit amet. Nunc ut lorem in magna consequat aliquet. Quisque vulputate mauris in felis rutrum vestibulum. Fusce id risus ut metus fringilla tristique sed ac mauris. Donec posuere mollis urna, in semper urna finibus sed.
<br/><br/><br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at dapibus est. Suspendisse tempus dignissim urna vitae feugiat. Curabitur sed leo vitae purus finibus feugiat. Sed a velit ultricies, gravida nisi a, bibendum quam. Nam risus nulla, vulputate sed dapibus at, condimentum non dolor. Donec molestie justo nisi, sed eleifend neque sodales non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed scelerisque dui. Sed suscipit maximus odio eget ullamcorper. Pellentesque ac nulla et leo commodo facilisis vitae eget eros. Curabitur dictum venenatis sagittis. Vestibulum quis massa nec lacus auctor faucibus et sed mi. Donec nec tortor tortor. Quisque nec velit et sapien feugiat bibendum.
<br/><br/><br/><br/>
Nullam ut lectus volutpat, dapibus odio vitae, viverra turpis. Suspendisse potenti. Praesent iaculis varius mattis. Nulla eget magna sit amet odio cursus pulvinar. Proin a lacus ac odio lobortis eleifend. Nullam at vulputate dui. Donec viverra eros ut arcu sodales pellentesque. Nullam diam ante, sagittis eu posuere in, consequat in dolor. Phasellus laoreet ante ut ipsum malesuada, nec vulputate est ultricies. Vestibulum mattis vestibulum condimentum. Phasellus quis enim ante. Quisque vel placerat risus. Cras scelerisque at diam eget euismod. Praesent mollis, erat vel porta tristique, enim mi scelerisque enim, eu facilisis elit enim nec lorem. Nullam venenatis nisi felis, luctus rhoncus velit imperdiet in.
<br/><br/><br/><br/>
Mauris sollicitudin, nibh vitae congue interdum, purus dolor rhoncus risus, ut dapibus neque dui quis ipsum. Quisque ac pharetra risus, eu dictum augue. Donec cursus tempor vulputate. Nullam a pulvinar ex. Integer lacinia a nisi in finibus. Nulla facilisi. Phasellus a sem id elit finibus pulvinar vel quis nisl.
<br/><br/><br/><br/>
Phasellus posuere augue vitae posuere interdum. Cras commodo neque dapibus, aliquet mauris ut, fermentum massa. Nam blandit augue et ullamcorper blandit. Vestibulum ac maximus mi, non ornare nibh. Nunc imperdiet tincidunt risus eu mattis. Suspendisse in nunc nisi. Vestibulum pharetra pharetra nisl feugiat molestie. Sed et turpis vitae nibh volutpat lobortis non et arcu. Integer in risus maximus, molestie mauris cursus, dapibus ante.
<br/><br/><br/><br/>
Vivamus in turpis lectus. Sed porttitor eleifend luctus. Nunc fringilla ipsum neque, in cursus orci pulvinar ac. Pellentesque mi ex, molestie et ex rhoncus, accumsan cursus urna. Donec vehicula faucibus eros, nec auctor dolor malesuada non. Phasellus eu urna dui. In consectetur velit in justo luctus faucibus. Phasellus egestas accumsan justo. Nam ipsum nibh, tristique in vestibulum eget, hendrerit in est. Suspendisse dictum, neque nec hendrerit venenatis, purus tellus lobortis nisi, sagittis dignissim lectus ipsum et felis. Proin placerat elementum lorem, sed mattis ligula congue sit amet. Nunc ut lorem in magna consequat aliquet. Quisque vulputate mauris in felis rutrum vestibulum. Fusce id risus ut metus fringilla tristique sed ac mauris. Donec posuere mollis urna, in semper urna finibus sed.
<br/><br/><br/><br/>
`;

const body = document.querySelector( 'body' );
body.append( texto );

const progressBar = document.createElement( 'div' );
progressBar.setAttribute( 'class', 'progress-bar' );
body.append( progressBar );

// funcion que haga el calculo del scroll
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100;
}

// streams
const scroll$ = fromEvent<Event>( document, 'scroll' );

const progressBar$ = scroll$.pipe(
    map<any, number>( calcularPorcentajeScroll ),
    tap<number>( event => console.log( 'porcentaje: ', event ) )
);


progressBar$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});



