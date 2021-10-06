import React from "react";

function ToDo() {
  return (
    <form>
      <h2>Learning React with Scrimba</h2>
      <div>
        <input type="checkbox" id="phase1" name="phase1" />
        <label for="phase1">To Do app -- phase 1</label>
      </div>
      <div>
        <input type="checkbox" id="phase2" name="phase2" />
        <label for="phase2">To Do app -- phase 2</label>
      </div>
      <div>
        <input type="checkbox" id="phase3" name="phase3" />
        <label for="phase3">To Do app -- phase 3</label>
      </div>
    </form>
  );
}

export default ToDo;
