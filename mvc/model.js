//model

import { api } from './api.js'
import { view } from './view.js'

/*
{
    "content": "Build two lists, pending list and completed list",
    "isCompleted": true,
    "id": 3
  }
*/
export const model = ((Api,View) => {
    class ListContent{
        constructor(content){
            this.content = content;
            this.isCompleted = false;
            this.id = 1;
        }
    }

    class State{
        #listitems = [];

        get listitems(){
            return this.#listitems;
        }
        set listitems(newlistitems){
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
    const addList = api.deleteList;

    return{
        getTodo,
        deleteList,
        moveList,
        addList,
        State,
        ListContent,
    };
})(api,view);