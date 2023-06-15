fetch("https://zenquotes.io/api/random")
    .then(response => response.json())
    .then(data => {
        // Extract the quote and author from the response
        const quote = data[0].q;
        const author = data[0].a;

        // Display the quote and author
        console.log(`"${quote}" - ${author}`);

        // Update the HTML element with the quote
        const quoteElement = document.getElementById('quote');
        quoteElement.innerHTML = `"${quote}" - ${author}`;
    })
    .catch(error => {
        console.log("Error fetching quote:", error);
    });