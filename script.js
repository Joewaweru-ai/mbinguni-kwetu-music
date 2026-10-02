function showSection(sectionId) {

    const sections = document.querySelectorAll("main section");

    sections.forEach(function(section) {
        section.style.display = "none";
    });
document.querySelectorAll("nav button").forEach(function(button) {
    button.classList.remove("active");
});
    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
    selectedSection.style.display = "block";
}

document.querySelectorAll("nav button").forEach(function(button) {
    if (button.getAttribute("onclick").includes(sectionId)) {
        button.classList.add("active");
    }
});
}


// Show About page when website opens
showSection("about");
function openImage(imageSrc) {

    const imageWindow = window.open("", "_blank");

    imageWindow.document.write(`
        <html>
        <head>
            <title>Mbinguni Kwetu Music</title>
            <style>
                body {
                    margin: 0;
                    background: #07152A;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }

                img {
                    max-width: 95%;
                    max-height: 95%;
                    object-fit: contain;
                }
            </style>
        </head>

        <body>
            <img src="${imageSrc}">
        </body>
        </html>
    `);
}