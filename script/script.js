let interviewList=[];
let rejectedList=[];


let totalCount = document.getElementById('total');
let interviewCount = document.getElementById('interviewcount');
let rejectCount = document.getElementById('rejectcount');


const allBtn = document.getElementById('all-btn')
const interviewBtn = document.getElementById('interview-btn')
const rejectedBtn = document.getElementById('rejected-btn')

const allcardDiv = document.getElementById('allcards');

const mainContainer =document.querySelector('main');
console.log(mainContainer)


function calculateCount(){
    totalCount.innerText = allcardDiv.children.length
    interviewCount.innerText=interviewList.length
    rejectCount.innerText=rejectedList.length
}
calculateCount()

function toggleStyle(id) {

    allBtn.classList.add('bg-white', 'text-black')
    interviewBtn.classList.add('bg-white', 'text-black')
    rejectedBtn.classList.add('bg-white', 'text-black')

    allBtn.classList.remove('bg-blue-500', 'text-white')
    interviewBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedBtn.classList.remove('bg-blue-500', 'text-white')

    const selected = document.getElementById(id)
    

    currentStatus = id
    console.log(currentStatus);
    // console.log(selected);

    // adding black bg for current button
    selected.classList.remove('bg-white', 'text-black')
    selected.classList.add('bg-blue-500', 'text-white')
    // step 1 finish

    // show and hidden particular section
    // step 4 start
    // filtering while clicking the filter button (All, Thriving, Struggling)
    if (id == 'interview-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderThriving()
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    } else if (id == 'struggling-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderStruggling()
    }
}