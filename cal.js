var temp;
var result=0;
var tem;
var count=1;
var opt;
function butn1(tem) {
    document.getElementById('cal').innerHTML+=tem;  
    temp=document.getElementById('cal').innerText;
    temp = parseInt(tem);
}
function optr(a){
    temp=parseInt(document.getElementById('cal').innerText);
    document.getElementById('cal').innerHTML='';
    if(a=='+'){
        opt='+';
        if(count==1){
           result=temp;
            temp=0;          
            count++;
        }
        else{
            document.getElementById('cal').innerHTML=''; 
            result = result + temp;
            document.getElementById('cal').innerHTML=result;
            temp=0;
        } 
    }
    if(a=='-'){
        opt='-';
        if(count==1){
            result=temp;
            temp=0;
            count++;
        }
        else{
            document.getElementById('cal').innerHTML=''; 
            result = result - temp;
            document.getElementById('cal').innerHTML=result;
            temp=0;
        } 
    }
    if(a=='*'){ 
        opt='*';
        if(count==1){
            result=temp;
            temp=0;
            count++;
        }
        else{
            document.getElementById('cal').innerHTML=''; 
            result = result * temp;
            document.getElementById('cal').innerHTML=result;
            temp=0;
        } 
    }
    if(a=='/'){
        opt='/';
        if(count==1){
            result=temp;
            temp=0;
            count++;
        }
        else{
            document.getElementById('cal').innerHTML=''; 
            result = result / temp;
            document.getElementById('cal').innerHTML=result;
            temp=0;
        } 
    }
    if(a=='='){
       res();
    }
}
function res(){
    if(opt=='+'){
        if(count==1){
            result=temp;
             temp=0;          
             count++;
         }
         else{
             document.getElementById('cal').innerHTML=''; 
             result = result + temp;
             document.getElementById('cal').innerHTML=result;
             temp=0;
         } 
    }
    if(opt=='-'){
        if(count==1){
            result=temp;
             temp=0;          
             count++;
         }
         else{
             document.getElementById('cal').innerHTML=''; 
             result = result - temp;
             document.getElementById('cal').innerHTML=result;
             temp=0;
         } 
    }
    if(opt=='*'){
        if(count==1){
            result=temp;
            temp=0;
            count++;
        }
        else{
            document.getElementById('cal').innerHTML=''; 
            result = result * temp;
            document.getElementById('cal').innerHTML=result;
            temp=0;
        } 
    }
    if(opt=='/'){
        if(count==1){
            result=temp;
            temp=0;
            count++;
        }
        else{
            document.getElementById('cal').innerHTML=''; 
            result = result / temp;
            document.getElementById('cal').innerHTML=result;
            temp=0;
        } 
    }
}
