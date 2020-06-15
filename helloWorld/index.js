// Write a function "greet" that returns "hello world!"
function greet(){
   return "hello world!"
}

<script type = "text/javascript">
    var i;

    for (i = 0; i < 10; i++)
    {
        document.write("Hello World!\n");
    }
</script>

//This is how to pull data from JSON file/API
function greet() {
    let phrase = {
        greeting: "hello",
        location: "world",
    };
    return phrase.greeting + " " + phrase.location + "!"

console.log(greet(), "hello world!");