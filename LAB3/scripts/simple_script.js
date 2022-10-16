var lang = "ru";
var my_div = newDiv = null;
var username = "";

window.onload = exitUser

var page_dict = 
{
  "en": 
  {
    "Form" : "FORM",
    "Hello" : "Hello",
    "User" : "user",
    "AddField" : "Add",
    "FirstField" : "First field",
    "SecondField" : "Second field",
    "NewFieldPlaceholder" : "New field placeholder",
    "SignIn" : "Sign-in",
    "Exit" : "Exit",
    "EnterUsername" : "Enter username!",
    "SwitchLan" : "Перевести на русский"
  },
  "ru": 
  {
    "Form" : "ФОРМА",
    "Hello" : "Привет",
    "User" : "пользователь",
    "AddField" : "Добавить",
    "FirstField" : "Первое поле",
    "SecondField" : "Второе поле",
    "NewFieldPlaceholder" : "Плейсхолдер для нового поля",
    "SignIn" : "Войти",
    "Exit" : "Выйти",
    "EnterUsername" : "Введите имя пользователя!",
    "SwitchLan" : "Switch to English"
  },
    
}

function addPlaceholder() {
    var newDiv = document.createElement("div");
    var ph = document.getElementById("new-placeholder").value;

    newDiv.innerHTML = `<div class=input-field><input type=text placeholder=${ph}></div>`;

    my_div = document.getElementById("placeholder-field");
    my_div.appendChild(newDiv);
  }

function setPageText() {
  document.getElementById("switch-lan-button").innerHTML = page_dict[lang].SwitchLan;
  document.getElementById("form-field").innerHTML = page_dict[lang].Form;
  if (username=="")
    document.getElementById("welcome-field").innerHTML =
      page_dict[lang].Hello + ", " + page_dict[lang].User + "!";
  else
    document.getElementById("welcome-field").innerHTML =
      page_dict[lang].Hello + ", " + username + "!";

  document.getElementById("first-field").placeholder = page_dict[lang].FirstField;
  document.getElementById("second-field").placeholder = page_dict[lang].SecondField;
  document.getElementById("new-placeholder").placeholder = page_dict[lang].NewFieldPlaceholder;

  document.getElementById("add-button").innerHTML = page_dict[lang].AddField;
  document.getElementById("sign-in-button").innerHTML = page_dict[lang].SignIn;
  document.getElementById("exit-button").innerHTML = page_dict[lang].Exit;

  document.getElementById("exit-button").style.display = 'none';
  document.getElementById("exit-button").style.display = '';
  
  if (username=="")
  {
    document.getElementById("sign-in-button").style.display = '';
    document.getElementById("exit-button").style.display = 'none';
  }
  else
  {
    document.getElementById("sign-in-button").style.display = 'none';
    document.getElementById("exit-button").style.display = '';
  }

}

function switchLanguage() {
  if (lang == "en")
    lang = "ru";
  else
    lang = "en";

  setPageText();
}

function signIn() {
  username = prompt('Username:');
  if (!username.trim())
  {
    alert(page_dict[lang].EnterUsername);
    username="";
  }
  else
  {
    setPageText();
  }
}

function exitUser() {
  username="";
  setPageText();
}