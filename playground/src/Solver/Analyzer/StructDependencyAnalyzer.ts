import { Namespace, Struct } from "../Models";
import { flatStructsFromNamespace } from "../Solver";
import { getAllNewStructCalls } from "./Utils";

export class StructDependencyAnalyzer {
  private structs: Struct[];

  constructor(private root: Namespace) {
    this.structs = flatStructsFromNamespace(root);
  }

  analyze(): string {
    // get all new struct calls from each struct's properties
    let result = "";
    this.structs.forEach(struct => {
      result += struct.name + " depends on :" + getAllNewStructCalls(struct).join(", ") + "\n";
    });
    return result;
  }
}
