let button = document.getElementById('gen_button')
button.addEventListener("click", () => {
    generate()

})

const generate = () => {
    const name = document.getElementById('nameInput').value || "Visitor";
    const fortunes = [
        "You will have a great day!",
        "An unexpected event will bring you joy.",
        "You will soon make an important decision.",
        "Beware of people who try to hold you back.",
        "A new opportunity is on the horizon!",
        "Your hard work will soon pay off.",
        "Success is just around the corner.",
        "Trust your instincts, they will guide you well.",
        "The best is yet to come.",
        "A positive change is coming your way.",
        "Your creativity will shine in unexpected ways.",
        "Good things come to those who wait.",
        "Something you've been waiting for will arrive soon.",
        "A challenge will turn into a chance for growth.",
        "You will receive good news soon.",
        "Believe in yourself – others are starting to notice.",
        "A new friendship is waiting to bloom.",
        "Today is the perfect day to start something new.",
        "You will be rewarded for your patience.",
        "A pleasant surprise will brighten your day."
    ];

    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `${name}, this is your fortune:<br> ${randomFortune}`;
    restyle();
}

const restyle = () => {
    const outputDiv = document.getElementById('output');
    const colors = ["#FF6347", "#32CD32", "#1E90FF", "#FFD700", "#8A2BE2"];
    const fonts = ["Arial", "Courier New", "Georgia", "Tahoma", "Verdana"];
    const sizes = ["18px", "20px", "24px", "30px", "32px"];

    outputDiv.style.color = colors[Math.floor(Math.random() * colors.length)];
    outputDiv.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    outputDiv.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];
}

