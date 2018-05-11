'use strict';

import * as FileIO from '../fileIO';

export function Show(state, handle, offset, dialogue) {
  let length = 0;
  const blockIDInfo = FileIO.ReadVarBytes(handle, offset);
  length += blockIDInfo.length;
  const characterIndexInfo = FileIO.ReadVarInt(handle, offset + length);
  length += characterIndexInfo.length;
  state.characterIndex = characterIndexInfo.data;
  state.dialogueOffset = dialogue.offsetForSegment(blockIDInfo.data);
  return {length: length, data: null};
}