$(document).on("keypress", function (e) {
  $("button[data-event_key='" + e.key + "']").addClass("active");
  if (e.keyCode >= 48 && e.keyCode <= 57) {
    appendnumber(e.key);
  } else {
    if (e.key == "+" || e.key == "-" || e.key == "/" || e.key == "*") {
      generateexpression(e.key);
    } else if (e.key == "=") {
      evaluateexpression();
    }
  }
  console.log(e.key);
});
$(document).on("keyup", function (e) {
  $("button[data-event_key='" + e.key + "']").removeClass("active");
  console.log(e.key);
});
$(".btn").on("click", function (e) {
  var key = $(this).attr("data-event_key");
  if (
    key != "+" &&
    key != "-" &&
    key != "." &&
    key != "*" &&
    key != "/" &&
    key != "=" &&
    key != "Delete" &&
    key != "NumLock"
  ) {
    appendnumber(key);
  } else {
    if (key == "+" || key == "-" || key == "/" || key == "*") {
      generateexpression(key);
    } else if (key == "Delete") {
      $("#num_div").html("0");
    } else if (key == "NumLock") {
      $("#num_div").html("0");
    } else if (key == "=") {
      evaluateexpression();
    }
  }
  console.log(key);
});

function appendnumber(number) {
  var currentnumber = $("#num_div").html();
  var currentstring = number; // Corrected variable name
  var outputstring = "";

  if (
    currentnumber != "" &&
    currentnumber != undefined &&
    currentnumber != null
  ) {
    if (currentnumber == "0") {
      // Compare with string "0"
      outputstring = number;
    } else {
      outputstring = currentnumber + currentstring; // Corrected concatenation
    }
  } else {
    outputstring = currentstring; // Corrected assignment
  }

  $("#num_div").html(outputstring);
}

function generateexpression(operator) {
  var currentnumber = $("#num_div").html();
  var currentoperator = operator;
  var expression = "";
  var savedexpression = $("#savedexpression").val(); // Corrected variable name

  if (
    savedexpression != "" &&
    savedexpression != undefined &&
    savedexpression != null
  ) {
    expression = savedexpression + currentnumber + operator; // Corrected concatenation
  } else {
    expression = currentnumber + operator; // Corrected concatenation
  }

  // Update the relevant elements
  $("#num_div").html("0");
  $("#savedexpression").val(expression);
  $("#expression").html(expression);

  console.log(expression);
  console.log(operator);
  console.log(currentnumber);
}

function evaluateexpression() {
  var expression = $("#savedexpression").val();
  var currentnumber = $("#num_div").html();
  var result = "";

  if (
    currentnumber != "" &&
    currentnumber != undefined &&
    currentnumber != null
  ) {
    expression += currentnumber; // Append the current number to the expression
  }

  // Evaluate the expression
  result = eval(expression);

  // Update the relevant elements
  $("#num_div").html(result);
  $("#savedexpression").val("");
  $("#expression").html(expression + "=" + result);
  $("#value_div").html(result);
}
