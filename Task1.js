//To test copy paste all of this into the console (f12 > console) 
//on the godsunchained webpage to filter tags.

//get all elements on page
var allElements = document.getElementsByTagName("*");
//lists to filter into
var singletons = [];
var duplicates = [];

//loop through all elements
for (var i = 0; i < allElements.length; i++) {
    var selectedTag = allElements[i].tagName;
    //check if tag is not in duplicates
    if (!duplicates.includes(selectedTag)) {
        //check if tag is in singletons, 
        //if so remove it and add it to duplicate
        if (singletons.includes(selectedTag)) {
            for (var x = 0; x < singletons.length; x++) {
                if (singletons[x] === selectedTag) {
                    singletons.splice(x, 1);
                }
            }
            duplicates.push(selectedTag);
        }
        //otherwise add it to singletons
        else {
            singletons.push(selectedTag);
        }
    }
}

console.log("All duplicate tags: " + duplicates.toString());
console.log("All singular tags: " + singletons.toString());
