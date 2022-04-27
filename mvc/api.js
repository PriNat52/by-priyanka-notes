//api
export const api = (() => {
  const baseUrl = "http://localhost:3000";
  const path = "todos";

  const getTodo = () =>
    fetch([baseUrl, path].join("/")).then((response) => response.json());

  const getId = (id) =>
    fetchJsonp([baseUrl, path, id].join("/")).then((response) =>
      response.json()
    );

  const addList = (newlist) =>
    fetch([baseUrl, path].join("/"), {
      method: "POST",
      body: JSON.stringify(newlist),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());

  const moveList = (id,newUpdate) =>
    fetch([baseUrl, path, id].join("/"), {
      method: "PUT",
      body: JSON.stringify(newUpdate),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());

  const deleteList = (id) =>
    fetch([baseUrl, path, id].join("/"), {
      method: "DELETE",
    });

  /*
    Http GET: http://localhost:3000/todos, to get the complete to-do list data
    Http POST: http://localhost:3000/todos, to create new todo item(don't include id property in the body)
    Http PUT: http://localhost:3000/todos/{id}, to update todo data with specific id
    Http DELETE: http://localhost:3000/todos/{id}, to delete todo data with specific id
    */

  return {
    getTodo,
    getId,
    addList,
    deleteList,
    moveList,
  };
})();
