let arr = [];
let count = 0;
const auto = document.querySelector('.brand');
const autoclass = document.querySelectorAll('.autoradio');
const autochecks = document.querySelectorAll('.check');
const btn = document.querySelector('button')
let price = document.querySelector('#price')


auto.addEventListener('change', () => {
switch (auto.value){
    case "KIA": arr[0] = 25000;
    break;
    case "AUDI": arr[0] = 53000;
break;
    case "TOYOTA": arr[0] = 30000;
        break;
 case "MAZDA": arr[0] = 40000;
        break;
     case "VOLVO": arr[0] = 37000;
        break;
     case "MINI": arr[0] = 45000;
         break;
    } 

})

btn.addEventListener('click', (e) =>{
    e.preventDefault()
    autochecks.forEach((item,index)=>{
        if(item.checked){
           arr.push(+item.value) //+ пеобразовываем в число
        }
    })
    autoclass.forEach((item,index)=>
    {
        if(item.checked){
            arr.push(+item.value)
        }
    })
    

    for (let i = 0; i<arr.length;i++){
       console.log(arr[i]);
       count = count + +arr[i];
       price.value = count;
    }
   
})



   












