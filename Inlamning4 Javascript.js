
let url="http://forverkliga.se/JavaScript/api/simple.php?world=whatever";
let jsonholder;
let svar1=0;
fetch(url)
.then(function(response){
	return response.json();
})
.then(function(json){
 	jsonholder = json;
	for(let x of json){
	svar1+=x.population;
console.log(svar1 + " " + x.population);
	}
})
.then(function(){
	console.log(svar1);
	document.getElementById("svar1").innerHTML="Det bor "+ svar1+ " människor i hela världen";

})
.then(function(){
	let svar2=0;
	let svar3=0;
	let svar4;
	let svar5;
	
	console.log(jsonholder.length);
	let newjson = jsonholder.filter(x=>x.continent=="Europe");
	console.log(newjson.length);
	{
		for(let x of newjson){
		svar2+=x.population;
		console.log(svar2);
		}
		document.getElementById("svar2").innerHTML=`Det finns ${svar2} människor i Europa`;
	}
	newjson = jsonholder.filter(x=>x.name=="Zimbabwe")[0];
	console.log(newjson.length);
	{
		svar3 = newjson.population*newjson.pFemale;
		document.getElementById("svar3").innerHTML=`Det finns ${svar3} kvinnor i Zimbabwe`;
	}
	let lowestcountry;
	let lowestpopulation=Number.POSITIVE_INFINITY;
	for(let x of jsonholder){
		let temp = x.population;
		if(temp<lowestpopulation){
			lowestcountry=x;
			lowestpopulation=temp;
		}
	}
	console.log(lowestcountry);
	document.getElementById("svar4").innerHTML=`${lowestcountry.name} är det land med minst population`;
	
	{
		let listOfContinents = [];
		for(let x of jsonholder){
			if(listOfContinents.length == 0)
				listOfContinents.push({continent: x.continent,pop:0});
			else{
				let b = true;
				for(let y of listOfContinents){
					if(x.continent==y.continent)
						b=false;
				}
				if(b)
					listOfContinents.push({continent: x.continent,pop:0});
					
			}
		}
		console.log(listOfContinents);
		for(let x of listOfContinents){
			newjson = jsonholder.filter(y=>y.continent==x.continent);
			let sum=0;
			for(let y of newjson){
				sum+=y.population;
			}
			x.pop=sum;
		}
		let highestcontinent;
		let highestpopulation=Number.NEGATIVE_INFINITY;
		for(let x of listOfContinents){
		let temp = x.pop;
		if(temp>highestpopulation){
			highestcontinent=x;
			highestpopulation=temp;
		}
		document.getElementById("svar5").innerHTML=`${highestcontinent.continent} är den kontinent med mest population`;
	}
	}
	
});


fetch(url)
.then(function(response){
	return response.json();
})
.then(function(json){

});

	

