var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response)

        var nae = data.filter((reg)=>{
           if(reg.region=="Asia")
           return reg.name;
        })
    
    console.log(nae);

    var name=data.forEach(num =>{
        console.log(num.name+" "+num.capital+" "+num.flag)
    })
    
        var nae = data.filter((reg)=>reg.population<200000)
    
    console.log(nae);


        var nae = data.filter((reg)=>{
            for(var i in reg.currencies){
            if(reg.currencies[i].code==="USD"){
              return true;
            }
        }
        }).map((ele)=>console.log(ele.name));
        //console.log(nae);
    



    var nae = data.reduce(function(reg,element) {
        return reg+element.population;
    },0);
    console.log(nae);


}

