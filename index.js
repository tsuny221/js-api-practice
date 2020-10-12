//DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");


// button.addEventListener("click", async function () {
//   //APIからデータ取得 データを扱う
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();
//   // console.log(users);
//   //DOM操作
//   users.forEach(function (user) {
//     //if文で条件分け
//     // if (user.id <= 5) {
//       const list = document.createElement("li");//li要素追加
//       list.innerText = user.name;//中に文字列追加
//       lists.appendChild(list);//listsの中に上のlistを追加
//     // };

//   });
//   //for文でも可能
//   // for (let index = 0; index < users.length; index++) {
//   //   const user = users[index];
//   //   const list = document.createElement("li");//li要素追加
//   //   list.innerText = user.name;//中に文字列追加
//   //   lists.appendChild(list);//listsの中に上のlistを追加
//   // }
// });

// //windowが読み込まれたらリスト表示の場合
// window.addEventListener("load", async function () {
//   //APIからデータ取得 データを扱う
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();
//   // console.log(users);
//   //DOM操作
//   users.forEach(function (user) {
//     //if文で条件分け
//     // if (user.id <= 5) {
//       const list = document.createElement("li");//li要素追加
//       list.innerText = user.name;//中に文字列追加
//       lists.appendChild(list);//listsの中に上のlistを追加
//     // };
//   });
//  });


 ////--------リファクタリング---------///

  //関数(メソッド)
 function addList(user) {
      const list = document.createElement("li");
      list.innerText = user.name;
      lists.appendChild(list);
};

 async function getUsers() {
   const res = await fetch("https://jsonplaceholder.typicode.com/users");
   const users = await res.json();
   return users;
};

async function listUsers() {
  const users = await getUsers();
  //DOM操作
  users.forEach(addList);
};

//イベント
button.addEventListener("click",listUsers);
//windowが読み込まれたらリスト表示の場合
window.addEventListener("load", listUsers);
