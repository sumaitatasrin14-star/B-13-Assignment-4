1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ANS.
getElementById("id"): শুধু একটা element return করে ID দিয়ে খোঁজে খুব fast

getElementsByClassName("class"):একই class থাকলে multiple elements return করে Returns HTMLCollection DOM change হলে auto update হয়

querySelector("selector"):CSS selector ব্যবহার করে শুধু প্রথম matching element return করে

querySelectorAll("selector"):CSS selector ব্যবহার করে  সব matching elements return করে Returns NodeList

2. How do you create and insert a new element into the DOM?
ANS.
const newDiv = document.createElement("div");
newDiv.textContent = "Hello";
document.body.appendChild(newDiv);

 3. What is Event Bubbling? And how does it work?
 ANS.
 event child → parent → document event bubble করে উপরে উঠে যায়।

 4. What is Event Delegation in JavaScript? Why is it useful?
 ANS.
 Event Delegation মানে parent element এ event listener বসানো, child গুলোর জন্য।
 Useful:Dynamic element কাজ করে,কম memory use

 5. What is the difference between preventDefault() and stopPropagation() methods?
 ANS.
 preventDefault():Browser এর default behavior বন্ধ করে
 stopPropagation():Event bubbling বন্ধ করে।