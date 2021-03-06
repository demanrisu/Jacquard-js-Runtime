'use strict';

import * as Base from './base';
import * as FileIO from '../fileIO';

const TableOrder = [
  {name: "functions", type: "stringArray"},
  {name: "characters", type: "stringArray"},
  {name: "variables", type: "stringArray"},
  {name: "strings", type: "stringArray"},
  {name: "nodes", type: "stringOffsetArray"},
  {name: "instructions", type: "instructionOffset"},
]

const privates = new WeakMap();

export default class Logic extends Base.BaseReader {
  constructor(handle) {
    super(handle);
    const priv = Base.ParseHeaderTables.call(this, TableOrder);
    privates.set(this, priv);
  }

  getOffsetForNode(name) {
    const offset = privates.get(this).nodes[name]
    return offset == null ? -1 : offset;
  }

  get characters() { return privates.get(this).characters; }
  get functions() { return privates.get(this).functions; }
  get variables() { return privates.get(this).variables; }
  get strings() { return privates.get(this).strings; }
  get nodeNames() { return Object.keys(privates.get(this).nodes); }


}