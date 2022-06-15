import { onValue, ref, set } from "firebase/database";
import { db } from "./firebase.js";

var listItems = document.getElementsByClassName("list");

export const notesRef = ref(db, "notes");
onValue(notesRef, (snapshot) => {
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

    if(listItems.length > 0) {
      listItems[0].appendChild(listItem);
    }
  });
});