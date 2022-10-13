var lang = "ru";
var my_div = newDiv = null;

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

function switchLanguage() {
  if (lang == "en")
    lang = "ru";
  else
    lang = "en";

  document.getElementById("switch-lan-button").innerHTML = page_dict[lang].SwitchLan;
  document.getElementById("form-field").innerHTML = page_dict[lang].Form;
  document.getElementById("welcome-field").innerHTML =
    page_dict[lang].Hello + ", " + page_dict[lang].User + "!";
  document.getElementById("first-field").placeholder = page_dict[lang].FirstField;
  document.getElementById("second-field").placeholder = page_dict[lang].SecondField;
  document.getElementById("new-placeholder").placeholder = page_dict[lang].NewFieldPlaceholder;

  document.getElementById("add-button").innerHTML = page_dict[lang].AddField;
  // document.getElementById("").innerHTML = page_dict[lang].;
  // document.getElementById("").innerHTML = page_dict[lang].;
  // document.getElementById("").innerHTML = page_dict[lang].;



  }