let totalCount = document.getElementById('total');
let interviewCount = document.getElementById('interviewcount');
let rejectCount = document.getElementById('rejectcount');

const allcardDiv = document.getElementById('allcards');


function calculateCount(){
    totalCount.innerText = allcardDiv.children.length
}
 calculateCount()