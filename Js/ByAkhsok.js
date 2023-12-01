function hentai(n)

{

var returnVar = "https://nhentai.net/g/";

var ranSauce = Math.floor((Math.random()*0.9+0.1)*Math.pow(10,n));

if(n >= 7)

{

return "No breaky my codey UwU!";

}

while(ranSauce > 422856)

{

ranSauce = Math.floor((Math.random()*0.9+0.1)*Math.pow(10,n));

}

return returnVar+ranSauce;


}