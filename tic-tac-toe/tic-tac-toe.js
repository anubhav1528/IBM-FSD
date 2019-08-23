
let j=1;
let arrayplayer1=[0,0,0,0,0,0,0,0,0];
let arrayplayer2=[0,0,0,0,0,0,0,0,0]; 

     function myFunction(i){
    console.log(arrayplayer1);
    console.log(arrayplayer2);
     if(j%2==1){
     document.getElementById(`button${i}`).value="X";
     document.getElementById(`button${i}`).disabled=true;
     arrayplayer1[i]=1;
     if(j==9){
         alert('GAME DRAWS');
     }
     check(i);
     j++;
     }
     else{
         document.getElementById(`button${i}`).value="O";
         document.getElementById(`button${i}`).disabled=true;
         arrayplayer2[i]=1;
         check(i)
         j++;
     }
 }
    function check(k){
     if(k==1){
     if(j%2==1){
     if(arrayplayer1[2]==1&&arrayplayer1[3]==1||arrayplayer1[4]==1&&arrayplayer1[7]==1||arrayplayer1[5]==1&&arrayplayer1[9]==1){
         console.log('player 1 wins');
     }}
    else if(arrayplayer2[2]==1&&arrayplayer2[3]==1||arrayplayer2[4]==1&&arrayplayer2[7]==1||arrayplayer2[5]==1&&arrayplayer2[9]==1){
         console.log('player 2 wins');
     }
    }
     if(k==2){
         if(j%2==1){
         if(arrayplayer1[1]==1&&arrayplayer1[3]==1||arrayplayer1[5]==1&&arrayplayer1[8]==1){
         console.log('player 1 wins');
     }}
     else if(arrayplayer2[1]==1&&arrayplayer2[3]==1||arrayplayer2[5]==1&&arrayplayer2[8]==1){
         console.log('player 2 wins');
     }
     }
     if(k==3){
         if(j%2==1){
         if(arrayplayer1[2]==1&&arrayplayer1[1]==1||arrayplayer1[6]==1&&arrayplayer1[9]==1||arrayplayer1[5]==1&&arrayplayer1[7]==1){
         console.log('player 1 wins');
     }}
    else if(arrayplayer2[2]==1&&arrayplayer2[1]==1||arrayplayer2[6]==1&&arrayplayer2[9]==1||arrayplayer2[5]==1&&arrayplayer2[7]==1){
         console.log('player 2 wins');
     }
     }
     if(k==4){
         if(j%2==1){
         if(arrayplayer1[5]==1&&arrayplayer1[6]==1||arrayplayer1[1]==1&&arrayplayer1[7]==1){
         console.log('player 1 wins');
     }}
     else if(arrayplayer2[5]==1&&arrayplayer2[6]==1||arrayplayer2[1]==1&&arrayplayer2[7]==1){
         console.log('player 2 wins');
     }  
     }
     if(k==5){
         if(j%2==1){
         if(arrayplayer1[4]==1&&arrayplayer1[6]==1||arrayplayer1[2]==1&&arrayplayer1[8]==1||arrayplayer1[3]==1&&arrayplayer1[7]==1||arrayplayer1[1]==1&&arrayplayer1[9]==1){
         console.log('player 1 wins');
     }}
    else if(arrayplayer2[4]==1&&arrayplayer2[6]==1||arrayplayer2[2]==1&&arrayplayer2[8]==1||arrayplayer2[3]==1&&arrayplayer2[7]==1||arrayplayer2[1]==1&&arrayplayer2[9]==1){
         console.log('player 2 wins');
     }  
     }
     if(k==6){
         if(j%2==1){
         if(arrayplayer1[4]==1&&arrayplayer1[5]==1||arrayplayer1[3]==1&&arrayplayer1[9]==1){
         console.log('player 1 wins');
     }}
     else if(arrayplayer2[4]==1&&arrayplayer2[5]==1||arrayplayer2[3]==1&&arrayplayer2[9]==1){
         console.log('player 2 wins');
     }  
     }
     if(k==7){
         if(j%2==1){
         if(arrayplayer1[8]==1&&arrayplayer1[9]==1||arrayplayer1[1]==1&&arrayplayer1[4]==1||arrayplayer1[5]==1&&arrayplayer1[3]==1){
         console.log('player 1 wins');
     }}
     else if(arrayplayer2[8]==1&&arrayplayer2[9]==1||arrayplayer2[1]==1&&arrayplayer2[4]==1||arrayplayer2[5]==1&&arrayplayer2[3]==1){
         console.log('player 2 wins');
     }  
     }
     if(k==8){
         if(j%2==1){
         if(arrayplayer1[7]==1&&arrayplayer1[9]==1||arrayplayer1[2]==1&&arrayplayer1[5]==1){
         console.log('player 1 wins');
     }}
     else if(arrayplayer2[7]==1&&arrayplayer2[9]==1||arrayplayer2[2]==1&&arrayplayer2[5]==1){
         console.log('player 2 wins');
     }  
     }
     if(k==9){
         if(j%2==1){
         if(arrayplayer1[7]==1&&arrayplayer1[8]==1||arrayplayer1[3]==1&&arrayplayer1[6]==1||arrayplayer1[5]==1&&arrayplayer1[1]==1){
         console.log('player1wins');
     }}
     else if(arrayplayer2[7]==1&&arrayplayer2[8]==1||arrayplayer2[3]==1&&arrayplayer2[6]==1||arrayplayer2[5]==1&&arrayplayer2[1]==1){
         console.log('player 2 wins');
     }  
     }
 }
 function start(){
     const _url='http://localhost:6670/api/users/newstate'
     fetch(_url)
     .then(res=>res.json());
     for(i=1;i<=9;i++){
        document.getElementById(`button${i}`).value=' ';
        document.getElementById(`button${i}`).disabled=false;
     }
     console.log('IN START');
 }
 function save(){
    const _urll='http://localhost:6670/api/users/newstate'
     fetch(_urll)
     .then(res=>res.json())
     .then((res)=>{
         console.log(res)
         console.log('IN SAVE API');
        const _url = 'http://localhost:6670/api/users/add';
        fetch(_url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify({
                turn : j,
                player1moves : arrayplayer1,
                player2moves : arrayplayer2
            })
        })
        .then(response=>response.json())
    }
        );

    for(i=1;i<=9;i++){
        if(arrayplayer1[i]==1){
            document.getElementById(`button${i}`).value='X';
            document.getElementById(`button${i}`).disabled=true;
        }
        else{
            document.getElementById(`button${i}`).disabled=false;
        }
    {
        if(arrayplayer2[i]==1){
                 document.getElementById(`button${i}`).value='O';
                 document.getElementById(`button${i}`).disabled=true;
             }
    }
    }
}
function resume(){
    const _url = 'http://localhost:6670/api/users/';
    fetch(_url)
    .then(res=>res.json())
    .then((res)=>{
        j=res.users[0].turn;
        arrayplayer1=res.users[0].player1moves,
        arrayplayer2=res.users[0].player2moves
        for(i=1;i<=9;i++){
            if(arrayplayer1[i]==1){
                document.getElementById(`button${i}`).value='X';
                document.getElementById(`button${i}`).disabled=true;
            }
            else{
                document.getElementById(`button${i}`).disabled=false;
            }
        {
            if(arrayplayer2[i]==1){
                     document.getElementById(`button${i}`).value='O';
                     document.getElementById(`button${i}`).disabled=true;
                 }
        }
        }
        console.log(arrayplayer1);
        console.log(arrayplayer2);

    });
}
 
