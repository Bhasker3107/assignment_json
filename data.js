
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
    // location.reload();
}

function compare(data, value) {
    
    let flag=0;

    for (let i = 0; i < data.length; i++) {
        // console.log(data[i].sku);

        if (data[i].sku == value) {
            // console.log('done');
            alert("Value already exist")
            flag=1;
        }
    }
    if(!flag){
        data= [...data,{sku:JSON.parse(value), "name": "Hard Rock TrackPak - Mac",
        "type": "Software",
        "price": 29.99,
        "upc": "884088157425",
        "category": [{
            "id": "abcat0207000",
            "name": "Musical Instruments"
        }, {
            "id": "pcmcat152100050020",
            "name": "Recording Equipment"
        }, {
            "id": "pcmcat152100050026",
            "name": "Sound Recording Software"
        }],
        "shipping": 5.49,
        "description": "HAL LEONARD Hard Rock TrackPak: Features 12 hard rock and metal Apple Loops; compatible with GarageBand; includes guitars, bass, drums and synth parts",
        "manufacturer": "Hal Leonard",
        "model": "631384",
        "url": "http://www.bestbuy.com/site/hard-rock-trackpak-mac/1003003.p?id=1219460773621&skuId=1003003CC",
        "image": "http://img.bbystatic.com/BestBuy_US/images/products/1003/1003003_sa.jpg"}];
        alert("Value added")
    }
    console.log(data);

}




