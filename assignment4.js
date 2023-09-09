<!DOCTYPE html>
<html>
<head>
    <title>Assignment 4</title>
</head>
<body>
    <script>
        // Array of names
        var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

        // Loop over the names
        for (var i = 0; i < names.length; i++) {
            // Get the current name
            var name = names[i];

            // Convert the name to lowercase for comparison
            var lowerCaseName = name.toLowerCase();

            // Check if the name starts with 'j' or 'J'
            if (lowerCaseName.charAt(0) === 'j') {
                // Print 'Good Bye' for names starting with 'j' or 'J'
                console.log("Good Bye " + name);
            } else {
                // Print 'Hello' for names starting with other letters
                console.log("Hello " + name);
            }
        }
    </script>
</body>
</html>
