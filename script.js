function clickHandler() {

  var resultz = document.getElementById("result");

  nullStyles(resultz.style);

  var input = document.getElementById("input");

  var checkboxGrowUp = document.getElementById("checkboxGrowUp");

  if (checkboxGrowUp.checked)
  {
      resultz.style.fontSize = "16px";
  }
  if (checkboxChangeColor.checked)
  {
      resultz.style.color = "red";
  }
  if (checkboxMakeCursive.checked)
  {
      resultz.style.fontStyle = "italic";
  }
  if (checkboxToUpperCase.checked)
  {
      resultz.style.textTransform = "uppercase";
  }
  if (cheboxtMakeOutlined.checked)
  {
      resultz.style.textDecoration = "line-through";
  }
  
  resultz.innerHTML = input.value;
  return false;
}


function nullStyles(stylex)
{
  stylex.textTransform = "none";
  stylex.color = "black";
  stylex.fontSize  = "14px";
  stylex.fontStyle = "inherit";
  stylex.textDecoration = "none";
}

