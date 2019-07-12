let trainer=[
    {
        name: 'TRAINER1',
        subjectname:{
            sub1: 'HINDI',
            sub2: 'ENGLISH'
        },
        AVAILABLE:{
             slot1:'slot1',
             slot2:'slot2',
             slot3:'slot3',
             slot4:'slot4'
        },
        status:{
           availabality:'AVAILABLE' 
        }
    },
    {
        name: 'TRAINER2',
        subjectname:{
            sub1: 'MATHS',
            sub2: 'SCIENCE'
        },
        AVAILABLE:{
            slot1:'slot1',
             slot2:'slot2',
             slot3:'slot3',
             slot4:'slot4'
       },
       status:{
          availabality:'AVAILABLE' 
       }
            
    },
    {
        name: 'TRAINER3',
        subjectname:{
            sub1: 'HINDI',
            sub2: 'MATHS'
        },
        AVAILABLE:{
            slot1:'slot1',
             slot2:'slot2',
             slot3:'slot3',
             slot4:'slot4'
       },
       status:{
          availabality:'AVAILABLE' 
       }
        
    },
    {
        name: 'TRAINER4',
        subjectname:{
            sub1: 'ENGLISH',
            sub2: 'SCIENCE'
        
        },
        AVAILABLE:{
            slot1:'slot1',
             slot2:'slot2',
             slot3:'slot3',
             slot4:'slot4'
       },
       status:{
          availabality:'AVAILABLE' 
       }
        
    }
]

const buildtimetableforsubject=()=>{
    let rows=' '
    for(i=0;i<4;i++){
    if(document.getElementById('searchBysubjectname').value==trainer[i].subjectname.sub1
    ||document.getElementById('searchBysubjectname').value==trainer[i].subjectname.sub2
     &&(document.getElementById('searchBytimeslot').value==trainer[i].AVAILABLE.slot1
     ||document.getElementById('searchBytimeslot').value==trainer[i].AVAILABLE.slot2
     ||document.getElementById('searchBytimeslot').value==trainer[i].AVAILABLE.slot3
     ||document.getElementById('searchBytimeslot').value==trainer[i].AVAILABLE.slot4))
    { rows+=`<tr><th>${trainer[i].name}</th><th>${document.getElementById('searchBysubjectname').value}</th><th>${trainer[i].status.availabality}</th>
    <th><a href="#" onclick="savefunction()">ASSIGN</a>/<a href="#" onclick="removefunction()">REMOVE</a></th></tr>`}
    _trainerdetails=`<table border="1">
    <th>
        TRAINER NAME
    </th>
    <th>
        SUBJECT NAME
        </th>
        <th>
        STATUS
        </th>
        <th>
      ASSIGN/REMOVE
        </th>
        ${rows}
    </table>`
    document.getElementById('timetable').innerHTML=_trainerdetails;
    localStorage.setItem("trainer",JSON.stringify(trainer));
}
}
const savefunction=()=>{
   let trainerdemo=[];
   Object.keys(localStorage).forEach((Key)=>{ 
          trainerdemo.push(JSON.parse(localStorage.getItem(Key)));
});
console.log(trainerdemo);
for(i=0;i<4;i++){
    let rows='';
    if(document.getElementById('searchBysubjectname').value==trainer[i].subjectname.sub1
    ||document.getElementById('searchBysubjectname').value==trainer[i].subjectname.sub2
     &&document.getElementById('searchBytimeslot').value==trainer[i].AVAILABLE.slot1){
        trainerdemo[i].status.availabality="NOT AVAILABLE"
     }}
     localStorage.removeItem('trainer');
     localStorage.setItem("trainerdemo",JSON.stringify(trainerdemo));
}


