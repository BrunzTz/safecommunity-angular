import { BehaviorSubject, Observable } from "rxjs";

export class StateDocument<T>{

    private readonly _document$;

    constructor(value: T){
        this._document$ = new BehaviorSubject<T>(value)
    }

    public get document$(): Observable<T> {
        return this._document$.asObservable();
    }

    public get document(): T {
        return this._document$.getValue();
      }

    public set document(value: T) {
        this._document$.next(value);
    }
}