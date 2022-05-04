// console.log("This is the Indian Railways JS Page!");
let id = "";
window.addEventListener('load', function () {
    let formInput = document.querySelectorAll('.form-control');
    for (let i = 0; i < formInput.length; i++) {
        formInput[i].addEventListener('keyup', function (e) {
            let inputid = e.target.id
            let inputval = document.getElementById(inputid).value;
            if (inputval != '') {
                if (document.getElementById(inputid).nextElementSibling) {
                    document.getElementById(inputid).nextElementSibling.innerHTML = '';
                }
            }
        });
    }
});

function validation() {
    let inputFrom = document.getElementById("from").value;
    let inputDate = document.getElementById("inputDate").value;
    let inputTo = document.getElementById("to").value;
    let inputAllClasses = document.getElementById("selectAllClasses").value;
    let inputCategory = document.getElementById("selectCategory").value;

    if (inputFrom == '') {
        document.getElementById("messageInputFrom").innerHTML = 'Please Enter Your Start Station!';
        // location.reload(true);
    }
    if (inputDate == '') {
        document.getElementById("messageInputDate").innerHTML = 'Please Enter Date!';
    }
    if (inputTo == '') {
        document.getElementById("messageInputTo").innerHTML = 'Please Enter Your Destination!';
    }
    if (inputAllClasses == null || inputAllClasses == '') {
        document.getElementById("messageAllClasses").innerHTML = 'Please Select a Class!';
    }
    if (inputCategory == '') {
        document.getElementById("messageCategory").innerHTML = 'Please Select a Category!';
    }
    else{

    }
}

function setData() {

}

function swap() {
    let temp = document.getElementById("from").value;
    document.getElementById("from").value = document.getElementById("to").value;
    document.getElementById("to").value = temp;
}