fetch('JSON.json')
.then(function(response) {
    return response.json();
})
.then(function(JSON) {
    let placeholder = document.querySelector("#output");
    let displayData = "";
    
    for(let student of JSON){
        displayData += `
        <tr>
            <td>${student.lrn}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.section}</td>
            <td><img src='${student.image}' width='150'></td>
        </tr>
        `;
    }
    
    placeholder.innerHTML = displayData;
})
