function validate() {

    var form = document.getElementById(form);
    var email = document.getElementById(email).value;
    var text = document.getElementById(text);

    if (email === "mo") {
        console.log("valid");
    } else {
        console.log("invalid")
    }
}


// function showValidate(input) {
//     var thisAlert = document.querySelector(input).parent();

//     document.querySelector(thisAlert).classList.add('alert-validate');
// }


// function hideValidate(input) {
//     var thisAlert = document.querySelector(input).parent();

//     document.querySelector(thisAlert).removeClass('alert-validate');
// }


// function validate () {
//     if(document.querySelector(input).attr('type') == 'email' || document.querySelector(input).attr('name') == 'email') {
//         if(document.querySelector(input).value.trim().match(/^([a-zA-Z0-9_-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([a-zA-Z0-9-]+.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(]?)$/) == null) {
//             return false;
//         }
//     }
//     else {
//         if(document.querySelector(input).value.trim() == ''){
//             return false;
//         }
//     }
// }