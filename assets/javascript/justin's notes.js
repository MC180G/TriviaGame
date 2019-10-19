<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="questions"></div>
<script src="https://code.jquery.com/jquery.js"></script>
<script>
​
  let questions = [
    {
      question: "Hello World",
      fields: ["A", "B", "C"],
      rightChoice: "B"
    },
    // {
    //   question: "Hello World",
    //   fields: ["g", "r", "w"],
    //   rightChoice: "B"
    // },
    // {
    //   question: "Hello World",
    //   fields: ["x", "b", "y"],
    //   rightChoice: "B"
    // },
    // {
    //   question: "Hello World",
    //   fields: ["3", "1", "6"],
    //   rightChoice: "B"
    // }
  ];
​
  for (let i = 0; i < questions.length; i++) {
    let h2 = $("<h2>").text(questions[i].question);
    $("#questions").append(h2);
    for (let j = 0; j < questions[i].fields.length; j++) {
​
      let $form = $("<form>");
​
        let $input = $("<input>");
​
        $input.attr({
          type: "radio",
          name: "gender",
          value: questions[i].fields[j],
        })
​
        let p = $("<p>").text(questions[i].fields[j])
        $("#questions").append(p, $input);
    }
    let button = $("<br><button type='submit' value='Submit'>").text("Submit");
    $("#questions").append(button);
  }
​
​
​
  // let $input2 = $("<input>");
​
  // $input2.attr({
  //   type: "radio",
  //   name: "gender",
  //   value: "female"
  // })
​
  // let p2 = $("<p>").text("Female")
​
  // let $input3 = $("<input>");
​
  // $input3.attr({
  //   type: "radio",
  //   name: "gender",
  //   value: "other"
  // })
​
  // let p3 = $("<p>").text("Other");
​
​
</script>
</body>
</html>
<!-- <form>
  <input type="radio" name="gender" value="male" checked> Male<br>
  <input type="radio" name="gender" value="female"> Female<br>
  <input type="radio" name="gender" value="other"> Other
</form> -->




