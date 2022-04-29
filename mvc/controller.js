//controller

import { model } from "./model.js";
import { view } from "./view.js";

export const controller = ((Model, View) => {
  const state = new Model.State();

  const addLists = () => {
    const inputbox = document.querySelector(View.domStr.inputBox);
    const submitInput = document.querySelector(View.domStr.submitbtn);

    submitInput.addEventListener("click", (e) => {
      const newInput = new Model.ListContent(inputbox.value);

      Model.addList(newInput).then((listitems) => {
        state.listitems = [listitems, ...state.listitems];
      });
    });
  };

  const movePenLists = () => {
    const moveBtn = document.querySelector(View.domStr.pendinglist);

    moveBtn.addEventListener("click", (event) => {
      const [className, id] = event.target.className.split(" ");
      if (className === "movbtn") {
        state.listitems
          .filter((ele) => +ele.id === +id)
          .forEach((obj) => (obj.isCompleted = true));

        const result = state.listitems.filter((ele) => +ele.id === +id);
        let res = new Model.Content(result[0].content);
        Model.moveList(id, res);
      }
    });
  };

  const moveCompLists = () => {
    const moveBtn = document.querySelector(View.domStr.completedlist);

    moveBtn.addEventListener("click", (event) => {
      const [className, id] = event.target.className.split(" ");
      if (className === "movbtn") {
        const result = state.listitems.filter((ele) => +ele.id === +id);
        let res = new Model.ListContent(result[0].content);
        Model.moveList(id, res);
      }
    });
  };
 
  const editCompLists = () => {
    const moveBtn = document.querySelector(View.domStr.completedlist);

    moveBtn.addEventListener("click", (event) => {
      const [className, id] = event.target.className.split(" ");
      if (className === "editbtn") {
        const textbox = document.querySelector(View.domStr.textinput);
        console.log(textbox.classList);
        console.log(id);
        let text = document.createElement("input");
        
        // text.setAttribute("type","text");

        const result = state.listitems
          .filter((ele) => +ele.id === +id);
        let textNode = document.createTextNode(result[0].content);
        text.appendChild(textNode);
        document.body.appendChild(text);
        // event.target.previousSibling.setAttribute('contenteditable', 'true');
        console.log(text);
        
        console.log(result[0].content);
      }
    });
  };

  const deletePenLists = () => {
    const listEle = document.querySelector(View.domStr.pendinglist);

    listEle.addEventListener("click", (event) => {
      const [className, id] = event.target.className.split(" ");
      if (className === "delbtn") {
        const [className, id] = event.target.className.split(" ");
        state.listitems = state.listitems.filter((ele) => +ele.id !== +id);
        Model.deleteList(id);
      }
    });
  };

  const deleteCompLists = () => {
    const listEle = document.querySelector(View.domStr.completedlist);

    listEle.addEventListener("click", (event) => {
      const [className, id] = event.target.className.split(" ");
      if (className === "delbtn") {
        state.listitems = state.listitems.filter((ele) => +ele.id !== +id);
        Model.deleteList(id);
      }
    });
  };

  const init = () => {
    Model.getTodo().then((listitems) => {
      console.log(listitems);
      state.listitems = listitems.reverse();
    });
  };

  const result = () => {
    init();
    addLists();
    movePenLists();
    moveCompLists();
    deletePenLists();
    deleteCompLists();
    editCompLists();
  };

  return {
    result,
  };
})(model, view);
