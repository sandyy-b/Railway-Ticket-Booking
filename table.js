window.addEventListener('load', function () {
    displayData();
});

function displayData() {
    let getData = JSON.parse(localStorage.getItem("passengers"));
    if (getData != null) {
        let html = '';
        let sno = 1;
        for (let k in getData) {
            html +=
                `<tr>
                <td>${sno}</td>
                <td>${getData[k].from}</td>
                <td>${getData[k].to}</td>
                <td>${getData[k].date}</td>
                <td>${getData[k].class}</td>
                <td>${getData[k].category}</td>
            </tr>`
            sno++;
        }
        document.getElementById("tableBody").innerHTML = html;
    }
}

function search() {
    let filter = document.getElementById('search').value.toUpperCase();
    let getTableData = document.getElementById('tableBody');
    let tableRow = getTableData.getElementsByTagName('tr');
    for (let i = 0; i < tableRow.length; i++) {
        let td = tableRow[i].getElementsByTagName('td')[1];
        if (td) {
            let textValue = td.textContent || td.innerHTML;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                tableRow[i].style.display = '';
            } else {
                tableRow[i].style.display = "none";
            }
        }
    }
}