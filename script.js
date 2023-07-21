let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let result = "";
let arr = Array.from(buttons);

arr.forEach(button => {
  button.addEventListener('click', (e) => {
    let tag = e.target.innerHTML;
    if(e.target.innerHTML == '=')
    {
        try {
            result = eval(result);
            if(isNaN(result)) throw new Error(''); 
            input.value = result;
        } catch (error) {
            input.value = "Invalid Input";
            setTimeout(()=>{
                input.value = "";
              },2000)
            }
    }
    else if (tag == 'AC') {
      result = "";
      input.value = result;
    }
    else if(tag == 'DEL') {
      result = result.substring(0, result.length - 1);
      input.value = result;
    }
    else {
      result += tag;
      input.value = result;
    }
    
  })
})
