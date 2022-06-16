import { onValue, ref, set } from "firebase/database";
import { db } from "./firebase.js";

var listItems = document.getElementsByClassName("list");

export const notesRef = ref(db, "notes");

if(listItems[0] != undefined) {
  onValue(notesRef, (snapshot) => {
  
    if (listItems[0].hasChildNodes()) {
      listItems[0].innerHTML = "";
    }
  
    snapshot.forEach((childSnapshot) => {
      var childData = childSnapshot.val();
      var listItem = document.createElement("ul");
      listItem.className = "list-item";
  
      var prgTitle = document.createElement("p");
      prgTitle.appendChild(document.createTextNode(childData.title));
      var prgDescription = document.createElement("p");
      prgDescription.appendChild(document.createTextNode(childData.description));
      var prgCategory = document.createElement("p");
      prgCategory.appendChild(document.createTextNode(childData.category));
      
      prgTitle.className = "list-item-title";
      prgCategory.className = "list-item-category";
      prgDescription.className = "list-item-description";
  
      listItem.appendChild(prgTitle);
      listItem.appendChild(prgCategory);
      listItem.appendChild(prgDescription);
  
        listItems[0].appendChild(listItem);
    });
  });
}
