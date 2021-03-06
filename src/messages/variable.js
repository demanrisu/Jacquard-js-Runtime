'use strict';

const privates = new WeakMap();

/**
 * The base class for variable messages (not exported)
 */
class base {
  constructor(variableIndex, variableName, value) {
    privates.set(this, {index: variableIndex, name: variableName, value: value});
  }

  /**
   * @returns {string} the name of the variable
   */
  get variableName() { return privates.get(this).name; }
  
  /**
   * @returns the value of the variable / to set the variable
   */
  get value() { return privates.get(this).value; }

  /**
   * @returns the index of the variable name in the table
   */
  get index() { return privates.get(this).index; }
}

/**
 * A variable is being saved
 * @extends base
 */
export class Save extends base {
  constructor(variableIndex, variableName, value) { 
    super(variableIndex, variableName, value);
  }
}

/**
 * A variable is being loaded
 * @extends base
 */
export class Load extends base {
  constructor(variableIndex, variableName, value) {
    super(variableIndex, variableName, value);
  }
}
