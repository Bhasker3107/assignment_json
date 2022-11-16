console.log('working');

let submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', fetchData);
function fetchData() {
    console.log('Button clicked');
    let compareValue = document.getElementById("inputVal").value;
    let url = "data.json";
    fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        // console.log(data[0].sku);
        compare(data, compareValue)
    })

}

function compare(data, value) {
    let flag = 0;

    for (let i = 0; i < data.length; i++) {
        // console.log(data[i].sku);

        if (data[i].sku == value) {
            // console.log('done');
            alert("Value already exist")
            flag = 1;
        }
    }
    if (!flag) {
        let nameValue = document.getElementById("nameVal").value;
        let typeValue = document.getElementById("typeVal").value;
        let priceValue = document.getElementById("priceVal").value;
        let userInput = {
            sku: JSON.parse(value),
            name: nameValue,
            type: typeValue,
            price: priceValue 
        }
        data= [...data, userInput]
        alert("Value added")
    }
    console.log(data);
    document.getElementById("inputVal").value = "";
    document.getElementById("nameVal").value = "";
    document.getElementById("typeVal").value = "";
    document.getElementById("priceVal").value = "";

}


