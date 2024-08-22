var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel: true,
});
swiper.sliderMove = function(s, e) {
    console.log(s);
};

function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li"))
        i.classList.remove("activeLink");
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add(
        "activeLink"
    );
    swiper.slideTo(indx, 1000, true);
}

// Function to open the popup
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

// Function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Handle form submission with AJAX
document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting the traditional way

    var formData = new FormData(this);

    fetch(
            "https://script.google.com/macros/s/AKfycbxUR-V0avsqo6V3WBacgKfIEYMfXu28fDiGgQReRE0FbIiAuuxkZlQI_MChtRDiuNnC/exec", {
                method: "POST",
                body: formData,
            }
        )
        .then((response) => response.json())
        .then((data) => {
            if (data.result === "success") {
                openPopup(); // Open success popup
            } else {
                alert("An error occurred: " + data.error);
            }
        })
        .catch((error) => console.error("Error:", error));
});