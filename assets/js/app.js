//Hides scrollbar if mobile menu is open
document.getElementById('chk').onclick = function() {
  if (this.checked) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "auto");
  }
};