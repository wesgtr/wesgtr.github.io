const requestURL = ``;
fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let rentalData = jsObject['rentalData'];
        let tbody = document.querySelector('#priceTable tbody');
        rentalData.forEach(data => {
            const newRow = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
            const td5 = document.createElement('td');
            const td6 = document.createElement('td');

            td1.textContent = data.vehicleType;
            td2.textContent = data.maxPersons;
            td3.textContent = `$ ${data.halfDay}`;
            td4.textContent = `$ ${data.fullDay}`;
            td5.textContent = `$ ${data.halfDayWalkIn}`;
            td6.textContent = `$ ${data.fullDayWalkIn}`;

            newRow.appendChild(td1);
            newRow.appendChild(td2);
            newRow.appendChild(td3);
            newRow.appendChild(td4);
            newRow.appendChild(td5);
            newRow.appendChild(td6)

            tbody.appendChild(newRow);
        });
    });