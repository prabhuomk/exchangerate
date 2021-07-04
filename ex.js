function start(){

    
    
    const in1=document.getElementsByClassName("inp1")[0].value;
    const in2=document.getElementsByClassName("inp2")[0].value;
    const in3=document.getElementsByClassName("inp3")[0].value;
    
    fetch(`https://v6.exchangerate-api.com/v6/ed8e7dbd67c2f7787fb35b50/pair/${in1}/${in2}/${in3}`)
    .then((res)=> res.json())
     .then((res1)=> {

        const card=document.createElement('div');
        card.setAttribute('class','card');
         const cardbody=document.createElement('div');
        cardbody.setAttribute('class','card-body');
        const h=document.createElement('h5');
        h.setAttribute('class','card-title');
        h.innerHTML="EXCHANGE RATE"
        const t1=document.createElement('p');
        t1.setAttribute('class','title');
        t1.innerHTML="CONVERSION RATE";
        const rate=document.createElement('p');
        rate.innerHTML=res1.conversion_rate;
        const t2=document.createElement('p');
        t2.setAttribute('class','title');
        t2.innerHTML="CONVERSION RESULT";
        const rate1=document.createElement('p');
        rate1.innerHTML=res1.conversion_result;

         cardbody.append(h,t1,rate,t2,rate1);
         card.append(cardbody);
         document.body.append(card);
         
     })
    .catch((err)=>console.log(err));


}