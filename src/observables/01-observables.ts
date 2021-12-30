import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next : value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [error]: ', error),
    complete: () => console.info('completado [obs]')
}

const obs$ = new Observable<String>( resp => {
    resp.next('Hola');
    resp.next('Mundo');

    resp.next('Hola');
    resp.next('Mundo');

    // Forzando error
    // const a  = undefined;
    // a.nombre = 'esto es un error';

    resp.complete();
});

obs$.subscribe( observer );