function checkLogin()  {
    var sopa = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:wsj="http://wsjava/">'+
    '<soapenv:Header/>'+
    '<soapenv:Body>'+
       '<wsj:checkLogin>'+
          '<userName>admin</userName>'+
          '<password>ABC</password>'+
       '</wsj:checkLogin>'+
    '</soapenv:Body>'+
 '</soapenv:Envelope>';
    const url = 'https://servicejava.herokuapp.com/service-0.0.1-SNAPSHOT-jar-with-dependencies/service?wsdl';
    //var request;
    //const url = 'https://GOOGLE.COM.BR';
 
    const xhttp = new XMLHttpRequest();
    //xhttp.setRequestHeader("Content-Type: application/xml", "Authorization: Basic //AuthKey");
    xhttp.open('POST', url, false);
    //xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8");
    //xhttp.timeout = 4000;
    //xhttp.ontimeout = function () { alert("Timed out!!!"); }
   
    
    let headers = new Headers();

    headers.append('Content-Type', 'text/xml');
    headers.append('Accept', 'text/xml');

    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Content-Length', sopa.length);
    headers.append('Access-Control-Max-Age', 3600)
    headers.append('GET', 'POST', 'OPTIONS');
    console.log(xhttp.status);

   

    if (xhttp.status == 200 || xhttp.status == 0) {
        console.log("url chamada corretamente" + xhttp.status);
    }
    else
    {
        console.log("ocorreu um erro")
    }
    
   
    // xhttp.overrideMimeType("text/xml");
    //xhttp.responseType = 'document';
    xhttp.send(sopa);
    const text = xhttp.responseText; //API response in XML
    const parser = new DOMParser();
    const xmlDOM = parser.parseFromString(text,"text/xml");
    const value = xmlDOM.getElementsByTagName("resultado")[0].childNodes[0].nodeValue;
    
    return value;
}
   
    


function retornasucesso(){
    console.log("iniciando check login")
    a = checkLogin();
    console.log(a)
    if (a == "fail"){
        return alert("login invalido") 
        }
   else {
       return document.getElementById("login").submit();
    }
   
}


  

/**
 * This function allow you to modify a JS Promise by adding some status properties.
 * Based on: http://stackoverflow.com/questions/21485545/is-there-a-way-to-tell-if-an-es6-promise-is-fulfilled-rejected-resolved
 * But modified according to the specs of promises : https://promisesaplus.com/
 function MakeQuerablePromise(promise) {
    // Don't modify any promise that has been already modified.
    if (promise.isFulfilled) return promise;

    // Set initial state
    var isPending = true;
    var isRejected = false;
    var isFulfilled = false;

    // Observe the promise, saving the fulfillment in a closure scope.
    var result = promise.then(
        function(v) {
            isFulfilled = true;
            isPending = false;
            return v; 
        }, 
        function(e) {
            isRejected = true;
            isPending = false;
            throw e; 
        }
    );

    result.isFulfilled = function() { return isFulfilled; };
    result.isPending = function() { return isPending; };
    result.isRejected = function() { return isRejected; };
    return result;
}   

var myPromise = MakeQuerablePromise(new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Yeah !");
    },10000);
}));

console.log("Initial fulfilled:", myPromise.isFulfilled());
console.log("Initial rejected:", myPromise.isRejected());
console.log("Initial pending:", myPromise.isPending());

myPromise.then(function(data){
    console.log(data); // "Yeah !"
    console.log("Final fulfilled:", myPromise.isFulfilled());
    console.log("Final rejected:", myPromise.isRejected());
    console.log("Final pending:", myPromise.isPending());
});
 */
