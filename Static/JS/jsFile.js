$(function () {
  $("#areaheading").on("click", Area);
  $("#periheading").on("click", Perimeter);
  $("#compheading").on("click", Compactness);
  $("#lkernelheading").on("click", LengthKernel);
  $("#wkernelheading").on("click", WidthKernel);
  $("#asymheading").on("click", Asymetric);
  $("#lgrooveheading").on("click", Lgroove);
  $("#inputhandler").on("click", inputHandler);
});

function Area() {
  if ($("#areaheading").attr("aria-expanded") == "false") {
    $("#areaheading i").removeClass("fa-plus-circle");
    $("#areaheading i").addClass("fa-minus-circle");
  }
  if ($("#areaheading").attr("aria-expanded") == "true") {
    $("#areaheading i").removeClass("fa-minus-circle");
    $("#areaheading i").addClass("fa-plus-circle");
  }
}

function Perimeter() {
  if ($("#periheading").attr("aria-expanded") == "false") {
    $("#periheading i").removeClass("fa-plus-circle");
    $("#periheading i").addClass("fa-minus-circle");
  }
  if ($("#periheading").attr("aria-expanded") == "true") {
    $("#periheading i").removeClass("fa-minus-circle");
    $("#periheading i").addClass("fa-plus-circle");
  }
}

function Compactness() {
  if ($("#compheading").attr("aria-expanded") == "false") {
    $("#compheading i").removeClass("fa-plus-circle");
    $("#compheading i").addClass("fa-minus-circle");
  }
  if ($("#compheading").attr("aria-expanded") == "true") {
    $("#compheading i").removeClass("fa-minus-circle");
    $("#compheading i").addClass("fa-plus-circle");
  }
}

function LengthKernel() {
  if ($("#lkernelheading").attr("aria-expanded") == "false") {
    $("#lkernelheading i").removeClass("fa-plus-circle");
    $("#lkernelheading i").addClass("fa-minus-circle");
  }
  if ($("#lkernelheading").attr("aria-expanded") == "true") {
    $("#lkernelheading i").removeClass("fa-minus-circle");
    $("#lkernelheading i").addClass("fa-plus-circle");
  }
}

function WidthKernel() {
  if ($("#wkernelheading").attr("aria-expanded") == "false") {
    $("#wkernelheading i").removeClass("fa-plus-circle");
    $("#wkernelheading i").addClass("fa-minus-circle");
  }
  if ($("#wkernelheading").attr("aria-expanded") == "true") {
    $("#wkernelheading i").removeClass("fa-minus-circle");
    $("#wkernelheading i").addClass("fa-plus-circle");
  }
}

function Asymetric() {
  if ($("#asymheading").attr("aria-expanded") == "false") {
    $("#asymheading i").removeClass("fa-plus-circle");
    $("#asymheading i").addClass("fa-minus-circle");
  }
  if ($("#asymheading").attr("aria-expanded") == "true") {
    $("#asymheading i").removeClass("fa-minus-circle");
    $("#asymheading i").addClass("fa-plus-circle");
  }
}

function Lgroove() {
  if ($("#lgrrooveheading").attr("aria-expanded") == "false") {
    $("#lgrooveheading i").removeClass("fa-plus-circle");
    $("#lgrooveheading i").addClass("fa-minus-circle");
  }
  if ($("#lgrooveheading").attr("aria-expanded") == "true") {
    $("#lgrooveheading i").removeClass("fa-minus-circle");
    $("#lgrooveheading i").addClass("fa-plus-circle");
  }
}

// Handle Display of inputs on result modal
function inputHandler() {
  if ($("#inputhandler").attr("aria-expanded") == "false") {
    document.getElementById("inputhandler").innerText =
      "Click to minimize inputs";
    $("#inputhandler").removeClass("btn-success");
    $("#inputhandler").addClass("btn-secondary");
  }
  if ($("#inputhandler").attr("aria-expanded") == "true") {
    document.getElementById("inputhandler").innerText = "Click to view inputs";
    $("#inputhandler").removeClass("btn-secondary");
    $("#inputhandler").addClass("btn-success");
  }
}
