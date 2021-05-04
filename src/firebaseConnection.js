import * as firebase from "firebase/app";
import "firebase/database";

// const firebaseConfig = {
//     apiKey: "AIzaSyDrQ-0UrWZ6Bb60ruTHtxWrDhJ4521Kvaw",
//     authDomain: "note-react-7af9d.firebaseapp.com",
//     databaseURL: "https://note-react-7af9d.firebaseio.com",
//     projectId: "note-react-7af9d",
//     storageBucket: "note-react-7af9d.appspot.com",
//     messagingSenderId: "607102604550",
//     appId: "1:607102604550:web:e02bcb3943b7d9fea7fa87"
// };
const firebaseConfig = {
    apiKey: "AIzaSyAW6X-MMQhqNobv9iHNgxn6z6BgTD5hW3U",
    authDomain: "simplenote-e9528.firebaseapp.com",
    databaseURL: "https://simplenote-e9528-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "simplenote-e9528",
    storageBucket: "simplenote-e9528.appspot.com",
    messagingSenderId: "616345587274",
    appId: "1:616345587274:web:b4572b550dfc08a0eae0b3",
    measurementId: "G-8LKMGWPTW4"
};
// Initialize Firebase

export const firebaseConnection = firebase.initializeApp(firebaseConfig);

// Đọc dữ liệu
// Dùng once('value').then((snapshot)=> {})
// const rootRef = firebase.database().ref("dataForNote/");
// rootRef.once("value").then((snapshot) => {
//     console.log(snapshot.val());
// });

// Sửa dữ liệu
// Dùng set()
// const rootRef = firebase.database().ref("dataForNote/node2");
// rootRef.set({
//     id: 3,
//     title: "ghi chu 3",
//     content: "ghi chu 3 ah nha"
// })

// Thêm dữ liệu
// 1. Dùng set() thì cần đặt id => dataForNote/node4
// const rootRef = firebase.database().ref("dataForNote/node4");
// rootRef.set({
//     id: 4,
//     title: "ghi chu 4",
//     content: "ghi chu 4 ah nha"
// })

// 2. Dùng push() thì id do firebase tự sinh ra
// const rootRef = firebase.database().ref("dataForNote");
// rootRef.push({
//     title: "ghi chu 4",
//     content: "ghi chu 4 ah nha"
// })

// Xóa dữ liệu
// Dùng child('id').remove();
// const rootRef = firebase.database().ref("dataForNote");
// rootRef.child('note1').remove();
