function loginCheck(){
    var userVar = document.getElementById('usernameInput');
    var passVar = document.getElementById('passwordInput');

    switch (userVar.value == "Gabrielle Zarafa Liwag"){ // switch states that username MUST = "Gabrielle Zarafa Liwag"
        case true : 
            if (passVar.value == "WeLoveICT!"){ // if returned true and password = WeLoveICT!, then:
                window.alert("Welcome, Student!");
                window.location.href ="notebooks.html"
            }
            else if (passVar.value !== "WeLoveICT!"){ // if returned true but passoword doesn't = WeLoveICT!, then:
                window.alert("Wrong password!");
            }
            break;
        case false:
            if (passVar.value == "WeLoveICT!"){
                window.alert("Wrong username!"); // if returned true but password = WeLoveICT!, then:
            }
            else if (passVar !== "WeLoveICT!"){
                window.alert("Wrong username and password!"); // if returned true and password doesn't = WeLoveICT!, then:
            }
            break;
    }
}
function submitWork(){

    let link = ""

    do{
        link = prompt("Enter the URL of your drive submission (min: 12 characters)");
    } while (link.length <= 12);

    window.alert("Submission Accepted.");

}