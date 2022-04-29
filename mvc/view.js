//view
export const view = (() => {
  const domStr = {
    pendinglist: "#pending",
    completedlist: "#completed",
    deletelist: ".delbtn",
    editlist: ".editbtn",
    movelist: ".movbtn",
    movelists: ".movebtn",
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
                    <button class="editbtn ${list.id}"> EDIT
                    <svg>
                    <path
                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                    ></path>
                    </svg> </button>
                    <button class="delbtn ${list.id}"> DELETE
                    <svg>
                    <path
                      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                    >
                    </path>
                    </svg> 
                    </button>
                    <button class="movbtn ${list.id}"> MOVE
                    <svg
                    focusable="false"
                    aria-label="fontSize small"
                    >
                    <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                    </svg> 
                    </button>
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
                    <button class="movebtn ${list.id}"> MOVE
                    <svg>
                    <path
                      d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                    >
                    </path>
                    </svg> 
                    </button>
                    <span><input type="text" class="inbtn ${list.id}" hidden/>${list.content}</span>
                    <button class="editbtn ${list.id}"> EDIT
                    <svg>
                    <path
                      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                    >
                    </path>
                    </svg> 
                    </button>
                    <button class="delbtn ${list.id}"> DELETE
                    <svg>
                    <path
                      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                      >
                    </path>
                    </svg> 
                    </button>
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
