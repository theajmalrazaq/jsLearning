const person = {
    "name" : "Ajmal",
    "age": 5,
    "city": "NY"
}

function CustomIntervel(time,it){
    let delay = time;
    let max = it;
    let count = 1;
    let intid = setInterval(()=>{
    if(count == max) 
    clearInterval(intid)
    for(let key in person){
    console.log(key);
    console.log(person[key])
       }
count++;   
    },delay);
}

CustomIntervel(2000,5);