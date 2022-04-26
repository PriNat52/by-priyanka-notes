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

  const deleteLists = () =>  {
    const listEle = document.querySelector(View.domStr.section);
    console.log(listEle);

    listEle.addEventListener("click", (event) => {
      const [className, id] = event.target.className.split(" ");
      state.listitems = state.listitems.filter((ele) => +ele.id !== +id);
      Model.deleteList(id);
    });
  };

  const init = () => {
    Model.getTodo().then((listitems) => {
      console.log(listitems);
      state.listitems = listitems;
    });
  };

  const result = () => {
    init();
    addLists();
    deleteLists();
  };

  return {
    result,
  };
})(model, view);
