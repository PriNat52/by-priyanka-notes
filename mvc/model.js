//model

import { api } from "./api.js";
import { view } from "./view.js";

export const model = ((Api, View) => {
  class ListContent {
    constructor(content) {
      this.content = content;
      this.isCompleted = false;
    }
  }

  class Content{
    constructor(contents) {
        this.content = contents;
        this.isCompleted = true;
      }
  }

  class State {
    #listitems = []; #content ={} ; #isCompleted = {};

    get listitems() {
      return this.#listitems;
    }
    set listitems(newlistitems) {
      this.#listitems = [...newlistitems];

      const listitemsEle = document.querySelector(view.domStr.pendinglist);
      const tmp = view.createTmp(this.listitems);
      view.render(listitemsEle, tmp);

      const listitemEle = document.querySelector(view.domStr.completedlist);
      const temp = view.createTemp(this.listitems);
      view.render(listitemEle, temp);
    }
  }

  const getTodo = api.getTodo;
  const deleteList = api.deleteList;
  const moveList = api.moveList;
  const addList = api.addList;

  return {
    getTodo,
    deleteList,
    moveList,
    addList,
    State,
    ListContent,
    Content,
  };
})(api, view);
