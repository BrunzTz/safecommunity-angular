import { BehaviorSubject, Observable } from "rxjs";

export class StateCollection<T extends { id: number }>{

    private readonly _collection$;

    constructor(value: T[]){
        this._collection$ = new BehaviorSubject<T[]>(value);
    }

    public get collection$(): Observable<T[]> {
        return this._collection$.asObservable();
    }

    public get collection(): T[] {
        return this._collection$.getValue();
      }

    public set collection(value: T[]) {
        this._collection$.next(value);
    }

    public getById(id: number): T | undefined {
        return this.collection.find(t => t.id === id);
    }

    public add(value: T): T {
        const currentValue = this.collection;
        this.collection = [ ...currentValue, value ];
        return value;
    }

    public remove(id: number): void {
        this.collection = this.collection.filter(t => t.id !== id);
    }

    public updateById(id: number, value: T): T | undefined {
        const objFound = this.getById(id)
        if(!objFound) return undefined;

        const index = this.collection.indexOf(objFound);
        this.collection[index] = {
          ...value
        };
      
        this.collection = [...this.collection];
        return this.collection[index];
    }
}