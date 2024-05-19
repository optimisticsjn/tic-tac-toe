
let btns=document.querySelectorAll('.btn');
let resetbtn=document.querySelector('.reset');
 let turnO= true;

 const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ]



btns.forEach((btn)=> {
    btn.addEventListener('click',()=>{
        console.log('btn clicked');
        if(turnO){
            btn.innerText="O";
            turnO=false;
        }
        else{
            btn.innerText="X";
            turnO=true;
        }
        btn.disabled=true;
       checkWinner();
    });
    
});

function checkWinner(){
    for(let pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
           const pos1=btns[pattern[0]].innerText;
           const pos2= btns[pattern[1]].innerText;
           const pos3= btns[pattern[2]].innerText;

         if(pos1!="" && pos2!="" && pos3!="" ){
            
           if(pos1==pos2&&pos2==pos3){
            console.
           }
        }
    }
}