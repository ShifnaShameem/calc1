function displayData(e){    //nammakk kaanikkandya content aan e 
   result.value=result.value+e
}

//= kittan --eval use aakka
function out(){
    result.value=eval(result.value)
}

//ac click aakkumbo ellam ponm
function Allclear(){
    result.value=""
}

//backspace click aakkumbo oroonaayii povaan slice cheyyaa
function backspace(){
    result.value=result.value.slice(0,-1)
}