//view
export const view = (() => {
  const domStr = {
    pendinglist: "#pending",
    completedlist: "#completed",
    deletelist: ".delbtn",
    editlist: ".editbtn",
    movelist: ".movbtn",
    inputBox: ".input",
    submitbtn: "#Submit",
    section: ".list_content",
    textinput: ".inbtn",
  };
  const render = (ele, tmp) => {
    ele.innerHTML = tmp;
  };

  const createTmp = (arr) => {
    let tmp = "";
    arr.forEach((list) => {
      if (list.isCompleted === false) {
        tmp += `
                <li>
                    <span><input type="text" class="inbtn ${list.id}" hidden/>${list.content}</span>
                    <button class="editbtn ${list.id}">Edit</button>
                    <button class="delbtn ${list.id}">Delete</button>
                    <button class="movbtn ${list.id}">Move >></button>
                </li>
            `;
      }
    });
    return tmp;
  };

  const createTemp = (arr) => {
    let tmp = "";
    arr.forEach((list) => {
      if (list.isCompleted === true) {
        tmp += `
                <li>
                    <button class="movbtn ${list.id}"><< Move</button>
                    <span><input type="text" class="inbtn ${list.id}" hidden/>${list.content}</span>
                    <button class="editbtn ${list.id}">Edit</button>
                    <button class="delbtn ${list.id}">Delete</button>
                </li>
            `;
      }
    });
    return tmp;
  };

  return {
    domStr,
    render,
    createTmp,
    createTemp,
  };
})();
