import { Struct, Property } from "./Models";
import { Observable, BehaviorSubject, isObservable } from "rxjs";
import { getStructFullName, Solver } from "./Solver";

function isSubject(value: any): value is BehaviorSubject<any> {
  return typeof value.next === "function" && isObservable(value);
}

export type Instance = Observable<any> | StructInstance;

interface PropertyInstance {
  instance: Instance;
  property: Property;
}

export class StructInstance {
  typeFullname: string;
  private inited = false;
  private properties: { [key: string]: PropertyInstance } = {};

  constructor(private schema: Struct, private solver: Solver) {
    this.typeFullname = getStructFullName(schema);
  }

  init(initialValue: { [key: string]: StructInstance }) {
    this.inited = true;
    // create observable instances
    this.schema.properties.forEach(prop => {
      let instance: Instance;
      if (prop.defaultOption == null) {
        let _instance = initialValue[prop.name];
        if (_instance == null) throw new Error(`${prop.name} must be provided`);
        instance = _instance;
      } else {
        instance = new BehaviorSubject("");
      }
      const propInstance: PropertyInstance = {
        property: prop,
        instance: instance
      };
      this.properties[prop.name] = propInstance;
    });
  }
}
