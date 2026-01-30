function searchAI() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let items = document.getElementsByClassName("ai-item");

    for (let i = 0; i < items.length; i++) {
        let text = items[i].innerText.toLowerCase();
        items[i].style.display = text.includes(input) ? "block" : "none";
    }
}

function loadAI(type) {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            let container = document.getElementById("aiContainer");
            container.innerHTML = "";

            data[type].forEach(ai => {
                let a = document.createElement("a");
                a.href = ai.url;
                a.target = "_blank";
                a.className = "ai-item";
                a.innerText = ai.name;
                container.appendChild(a);
            });
        });
}
