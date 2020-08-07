var myHeaders = new Headers();
myHeaders.append("Host", "api.shipengine.com");
myHeaders.append("API-Key", "TEST_/mKC00lFMqQmvf+U+SI6zckLWLfasW+NIeaZXnsyCEQ");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "shipment": {
        "service_code": "ups_ground",
        "ship_to": {
            "name": "Advait",
            "address_line1": "525 S Winchester Blvd",
            "city_locality": "San Jose",
            "state_province": "CA",
            "postal_code": "95128",
            "country_code": "US",
            "address_residential_indicator": "yes"
        },
        "ship_from": {
            "name": "John Doe",
            "company_name": "Example Corp",
            "phone": "555-555-5555",
            "address_line1": "4009 Marathon Blvd",
            "city_locality": "Austin",
            "state_province": "TX",
            "postal_code": "78756",
            "country_code": "US",
            "address_residential_indicator": "no"
        },
        "packages": [{
            "weight": {
                "value": 20,
                "unit": "ounce"
            },
            "dimensions": {
                "height": 6,
                "width": 12,
                "length": 24,
                "unit": "inch"
            }
        }]
    }
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("https://cors-anywhere.herokuapp.com/https://api.shipengine.com/v1/labels", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));