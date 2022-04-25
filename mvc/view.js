//view
export const view = (() => {
    const domStr ={
        pendinglist: "#pending",
        completedlist: "#completed",
        deletelist: ".delbtn",
        editlist: ".editbtn",
        movelist: ".movbtn",
        inputBox: ".input",
        submitbtn: "#Submit",
    };
    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };

    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((list) => {
            if(list.isCompleted === false){
            tmp += `
                <li>
                    <span>${list.content}</span>
                    <button class="editbtn ${list.id}">E</button>
                    <button class="delbtn ${list.id}">D</button>
                    <button class="movbtn ${list.id}">M</button>
                </li>
            `;
            }
        });
        return tmp;
    };

    const createTemp = (arr) => {
        let tmp = "";
        arr.forEach((list) => {
            if(list.isCompleted === true){
            tmp += `
                <li>
                    <span>${list.content}</span>
                    <button class="editbtn ${list.id}">E</button>
                    <button class="delbtn ${list.id}">D</button>
                    <button class="movbtn ${list.id}">M</button>
                </li>
            `;
            }
        });
        return tmp;
    };

    return{
        domStr,
        render,
        createTmp,
        createTemp,
    };
})();