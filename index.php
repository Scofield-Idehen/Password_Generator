<!DOCTYPE html>
<html>
<head>
  <title>Password Generator</title>
  
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>

<body>

  <div class="container">
    <h1>Generate a Secure Password</h1>

    <label for="length">Password length:</label>
    <input type="number" id="length" value="12" min="8" max="24">

    <button id="generate">Generate Password</button>

    <div id="password"></div>
  </div>

  <script src="script.js"></script>

</body>
</html>
