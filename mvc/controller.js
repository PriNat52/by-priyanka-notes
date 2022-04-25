//controller

import {model} from './model.js'
import {view} from './view.js'

export const controller = ((Model,View) => {
    const state = new Model.State();

    const addLists = () => {
        const inputbox = document.getElementById('Input').value;
        const inputs = document.querySelector(View.domStr.inputBox);
        const submit = document.querySelector(View.domStr.submitbtn);

        submit.addEventListener("click", (event) => {

            const [className, id] = event.target.className.split(" ");
            console.log(className);
            const newInput = new Model.ListContent(event.target.value);
            console.log(newInput);
    
            Model.addList(newInput).then((listitems) => {
                state.listitems = [listitems, ...state.listitems];
            });

        });

    };

    const deleteLists = () => {

        const listEle = document.querySelector(View.domStr.deletelist);

        listEle.addEventListener("click", (event) => {
            const [className, id] = event.target.className.split(" ");
            state.listitems = state.listitems.filter((ele) => +ele.id !== +id);
            model.deleteList(id);
        });
    };

    const init = () => {
        Model.getTodo().then((listitems)=>{
            state.listitems = listitems;
        });
    };
    
    const result = () => {
        init();
        addLists();
        deleteLists();
    };

    return {
        result
    };
})(model,view);