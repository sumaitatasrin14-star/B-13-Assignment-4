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
    // step 1 finish

    // show and hidden particular section
    // step 4 start
    // filtering while clicking the filter button (All, interview,rejected)
    // if (id == 'interview-btn') {
    //     allCardSection.classList.add('hidden');
    //     filterSection.classList.remove('hidden')
    //     renderInterview()
    // } else if (id == 'all-btn') {
    //     allCardSection.classList.remove('hidden');
    //     filterSection.classList.add('hidden')
    // } else if (id == 'rejected-btn') {
    //     allCardSection.classList.add('hidden');
    //     filterSection.classList.remove('hidden')
    //     renderRejected()
    // }
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

        const cardInfo = {
            companyName,
            para,
            salary,
            status: 'INTERVIEW',
            notes
        }
        
        const companyNameExist = interviewList.find(item => item.companyName == cardInfo.companyName)
         parentNode.querySelector('.status').innerText = 'INTERVIEW'

        if(!companyNameExist){
            interviewList.push(cardInfo)
        }
        renderInterview()
    }


        // console.log(companyName,para,salary,status,notes);

        // console.log(companyName);
        //    console.log(event.target.parentNode.parentNode)
})
//     if (event.target.classList.contains('interview-btn')) {
//         const parentNode = event.target.parentNode.parentNode;

        // const companyName = parentNode.querySelector('.companyName').innerText
//         const para = parenNode.querySelector('.para').innerText
//         const salary= parenNode.querySelector('.salary').innerText
//         const status= parenNode.querySelector('.status').innerText
//         const notes = parenNode.querySelector('.notes').innerText

//         console.log(companyName,para,salary,status,notes)

//         parentNode.querySelector('.status').innerText = 'INTERVIEW'

//         const cardInfo = {
//             companyName,
//             para,
//             salary,
//             status: 'INTERVIEW',
//             notes
//         }
//     }
// }



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
            <p class="status text-blue-950 font-bold">NOT APPLIED</p>
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