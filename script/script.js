let interviewList=[];
let rejectedList=[];
let currentStatus ='all'


let totalCount = document.getElementById('total');
let interviewCount = document.getElementById('interviewcount');
let rejectCount = document.getElementById('rejectcount');


const allBtn = document.getElementById('all-btn')
const interviewBtn = document.getElementById('interview-btn')
const rejectedBtn = document.getElementById('rejected-btn')

const allcardDiv = document.getElementById('allcards');

const mainContainer =document.querySelector('main');

const filteredSection = document.getElementById('filtered-section')
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

    // adding blue bg for current button
    selected.classList.remove('bg-white', 'text-black')
    selected.classList.add('bg-blue-500', 'text-white')



    if (id == 'interview-btn') {
        allcardDiv.classList.add('hidden');
        filteredSection.classList.remove('hidden')
        renderInterview()
    } else if (id == 'all-btn') {
        allcardDiv.classList.remove('hidden');
        filteredSection.classList.add('hidden')
    } else if (id == 'rejected-btn') {
        allcardDiv.classList.add('hidden');
        filteredSection.classList.remove('hidden')
        renderRejected()
    }
    
}
// step 2 delegation
mainContainer.addEventListener('click', function (event) {
    console.log(event.target.classList.contains('interview-btn'));

    if (event.target.classList.contains('interview-btn')) {

        const parentNode = event.target.parentNode.parentNode
        const companyName = parentNode.querySelector('.companyName').innerText
        const para = parentNode.querySelector('.para').innerText
        const salary= parentNode.querySelector('.salary').innerText
        const status= parentNode.querySelector('.status').innerText
        const notes = parentNode.querySelector('.notes').innerText

        parentNode.querySelector('.status').innerText = 'INTERVIEW'

        const cardInfo = {
            companyName,
            para,
            salary,
            status: 'INTERVIEW',
            notes
        }
        
        const companyNameExist = interviewList.find(item => item.companyName == cardInfo.companyName)
         

        if(!companyNameExist){
            interviewList.push(cardInfo)
        }

        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName)

        calculateCount()

        if(currentStatus == "rejected-btn"){
            renderInterview();
        }
        renderInterview()
    }else if (event.target.classList.contains('rejected-btn')) {

        const parentNode = event.target.parentNode.parentNode
        const companyName = parentNode.querySelector('.companyName').innerText
        const para = parentNode.querySelector('.para').innerText
        const salary= parentNode.querySelector('.salary').innerText
        const status= parentNode.querySelector('.status').innerText
        const notes = parentNode.querySelector('.notes').innerText

        parentNode.querySelector('.status').innerText = 'REJECTED'

        const cardInfo = {
            companyName,
            para,
            salary,
            status: 'REJECTED',
            notes
        }
        
        const companyNameExist = rejectedList.find(item => item.companyName == cardInfo.companyName)
         

        if(!companyNameExist){
            rejectedList.push(cardInfo)
        }
        
        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)
        if(currentStatus == "interview-btn"){
            renderRejected();
        }

        calculateCount()

        renderRejected()
    }
     


        
})


function renderInterview() {
    // make the filterSection empty every time
    filteredSection.innerHTML = ' '

    // crating innerHtml
    for (let Interview of interviewList) {
        console.log(Interview);

        let div = document.createElement('div');
        div.className = 'all-cards flex justify-between border-gray-200 shadow px-4 py-2'
        div.innerHTML = `
         <div class="space-y-6">
          <div>
            <p class="companyName text-xl font-bold text-blue-950">${Interview.companyName}</p>
            <p class="para">React Native Developer</p>
          </div>
          <div>
            <p class="salary">Remote • Full-time • $130,000 - $175,000</p>
          </div>
          <div>
            <p class="status text-blue-950 font-bold">${Interview.status}</p>
            <p class="notes">
              Build cross-platform mobile applications using React Native. Work
              on products used by millions of users worldwide.
            </p>
          </div>
          <div class="gap-3">
            <button
              class="interview-btn bg-green-100 shadow text-green-400 px-4 py-2 rounded-md"
            >
              INTERVIEW
            </button>
            <button
              class="rejected-btn bg-red-100 text-red-400 px-4 py-2 rounded-md"
            >
              REJECTED
            </button>
          </div>
        </div>
        <div>
          <button
            class="delete-btn bg-red-100 text-red-400 px-4 py-2 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
        `
        filteredSection.appendChild(div)
    }
}


function renderRejected() {
    // make the filterSection empty every time
    filteredSection.innerHTML = ' '

    // crating innerHtml
    for (let Rejected of rejectedList) {
        console.log(Rejected);

        let div = document.createElement('div');
        div.className = 'all-cards flex justify-between border-gray-200 shadow px-4 py-2'
        div.innerHTML = `
         <div class="space-y-6">
          <div>
            <p class="companyName text-xl font-bold text-blue-950">${Rejected.companyName}</p>
            <p class="para">React Native Developer</p>
          </div>
          <div>
            <p class="salary">Remote • Full-time • $130,000 - $175,000</p>
          </div>
          <div>
            <p class="status text-blue-950 font-bold">${Rejected.status}</p>
            <p class="notes">
              Build cross-platform mobile applications using React Native. Work
              on products used by millions of users worldwide.
            </p>
          </div>
          <div class="gap-3">
            <button
              class="interview-btn bg-green-100 shadow text-green-400 px-4 py-2 rounded-md"
            >
              INTERVIEW
            </button>
            <button
              class="rejected-btn bg-red-100 text-red-400 px-4 py-2 rounded-md"
            >
              REJECTED
            </button>
          </div>
        </div>
        <div>
          <button
            class="delete-btn bg-red-100 text-red-400 px-4 py-2 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
        `
        filteredSection.appendChild(div)
    }
}
document.querySelectorAll(".delete-btn").forEach(button => {
  button.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete this job?")) {
      this.closest(".all-cards").remove();
    }
  });
});