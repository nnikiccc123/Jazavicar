function showDropDownMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

isEmailValid = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

isPasswordStrong = (pwd) => {
  return /^(?=.*\d)(?=.*[a-z|A-Z]).{8,20}$/.test(pwd);
}

validateForm = () => {
  let messages = [];

  let name = $("#ime").val().trim();
  let email = $("#email").val().trim();
  let psw = $("#psw").val().trim();
  let pswRepeat = $("#psw-repeat").val().trim();


  if (!name) {
    messages.push("Niste uneli ime!");
  }

  if (!email) {
    messages.push("Niste uneli email!");
  } else if (!isEmailValid(email)) {
    messages.push("Nepravilno unet email!");
  }

  if (!psw) {
    messages.push("Niste uneli lozinku!");
  } else if (!isPasswordStrong(psw)) {
    messages.push("Lozinka nije dovoljno sigurna - najmanje 8 karaktera, bar jedno slovo i cifra!");
  }

  if (!pswRepeat) {
    messages.push("Niste potvrdili lozinku!");
  } else if (psw !== pswRepeat) {
    messages.push("Potvrđena lozinka se razlikuje!");
  }

  let html;
  if (messages.length > 0) {
    html = "<h2>Podaci nisu ispravni!</h2>";
    for (let m of messages) {
      html += `<p>${m}</p>`;
    }
  } else {
    html = "<h2>Podaci ispravno uneti</h2>";
    html += `<p>Ime: ${name}</p>`;
    html += `<p>Email: ${email}</p>`;
    html += `<p>Password: ${psw}</p>`;
  }
  $("#msgpopup").html(html);

  $("#msgpopupcontainer").css("background-color", messages.length > 0 ? "rgba(255, 0, 0, 0.6)" : "rgba(0, 128, 0, 0.6)");
  $("#msgpopupcontainer").css("display", "flex");
}

closePopup = () => {
  $("#msgpopupcontainer").css("display", "none");
}

openWin = () => {
  let win = window.open("", "myWindow", "width=300,height=300, top=100,left=500,");
  win.document.write("<p>Dobrodošli!</p>");
}
