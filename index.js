// const { text } = require("stream/consumers");

let res = document.querySelector('.result')

document.querySelector('#Animate').addEventListener('click',(e)=>{
    const textInput = e.target.parentElement.querySelector('#text-input').value

    startAnimate(textInput);
})

document.addEventListener('keydown',(e)=>{
    if(e.key === "Enter"){
        //
    }else{
        return
    }
    const textInput = e.target.parentElement.querySelector('#text-input').value

    startAnimate(textInput);
})



const startAnimate = (input) =>{
    const interval = 200;
    const inputLength = input.length;
    let add = 0;
    let textBase = ''

    let type = setInterval(()=>{
        

        res.innerHTML = `
            <h1>${textBase}<h1 id="typer">|</h1></h1>
        `
        document.querySelector('#typer').classList.add('blink')
        textBase += input[add]
        add++
        console.log(textBase)
        if(add>inputLength){
            clearInterval(type)
        }
    },interval)
}

