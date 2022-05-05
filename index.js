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
    else if(inputFrom == inputTo){
        document.getElementById("messageInputTo").innerHTML = 'Start Station and Destination cannot be same!';
    }
    else {
        setData();
    }
}

function setData() {
    let getFromInput = document.getElementById('from').value;
    let getDateInput = document.getElementById('inputDate').value;
    let getToInput = document.getElementById("to").value;
    let getClassInput = document.getElementById('selectAllClasses').value;
    let getCategoryInput = document.getElementById('selectCategory').value;
    let passenger_records = [];
    passenger_records = JSON.parse(localStorage.getItem("passengers")) ? JSON.parse(localStorage.getItem("passengers")) : []
    passenger_records.unshift({
        'from': getFromInput.trim(),
        'date': getDateInput.trim(),
        'to': getToInput,
        'class': getClassInput,
        'category': getCategoryInput
    })
    passenger_records = localStorage.setItem("passengers", JSON.stringify(passenger_records));
    window.location.href = 'table.html';
    document.getElementById("reset").click();
}

function swap() {
    let temp = document.getElementById("from").value;
    document.getElementById("from").value = document.getElementById("to").value;
    document.getElementById("to").value = temp;
}

function checkDate() {
    //     let today = new Date(),
    //     day = today.getDate(),
    //     month = today.getMonth()+1,
    //     year = today.getFullYear();
    //          if(day<10){
    //                 day='0'+day
    //             } 
    //         if(month<10){
    //             month='0'+month
    //         }
    //         today = year+'-'+month+'-'+day;

    // document.getElementById("inputDate").setAttribute("min", today);
    // document.getElementById("inputDate").setAttribute("value", today);
    document.getElementById('inputDate').setAttribute('min', new Date().toISOString().split('T')[0])

}