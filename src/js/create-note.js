import { onValue, ref, set } from "firebase/database";
import { db } from "./firebase.js";

var btnNoteSubmit = document.getElementById("btnSubmit");
var drpCategories = document.getElementById("drpCategories");

if (btnNoteSubmit != null) {
  var categoriesRef = ref(db, "categories");
  onValue(categoriesRef, (snapshot) => { 
    snapshot.forEach((childSnapshot) => {
      var optCategory = document.createElement("option");
      optCategory.text = optCategory.value = childSnapshot.val();
      drpCategories.add(optCategory);
    });
  });

  if (btnNoteSubmit != null) {
    btnNoteSubmit.onclick = function postNote() {
      var title = document.getElementById("txtTitle").value;
      var description = document.getElementById("txtDescription").value;
      const category = drpCategories.options[drpCategories.selectedIndex].text;
      var noteId = hashString(title + category);
    
    
      set(ref(db, "notes/" +  noteId), {
        title: title,
        description: description,
        category: category
      });

      var categoryId = hashString(category);
      set(ref(db, "categories/" + categoryId), {
          category: category
      });
    
      alert("Data submitted!");

      window.location.href = "../index.html";
    };
  }
}

/**
 * Returns a hash code from a string
 * @param  {String} str The string to hash.
 * @return {Number}    A 32bit integer
 * @see http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 */
 function hashString(str) {
  var hash = 0;
  for (var i = 0, len = str.length; i < len; i++) {
      var chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
  }
  return hash;
}