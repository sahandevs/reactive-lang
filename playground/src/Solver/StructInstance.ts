import { Struct } from "./Models";

export class StructInstance {

    private inited = false;

    constructor(private schema: Struct) {
        
    }

    init(initialValue: any) {
        this.inited = true;
        
    }

}