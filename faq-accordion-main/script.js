document.addEventListener("DOMContentLoaded", function () {
    const qanda = document.querySelectorAll(".qanda");

    qanda.forEach((item) => {
        const question = item.querySelector(".question");
        const answer = item.querySelector(".answer");
        const icon = item.querySelector(".icon img");

        question.addEventListener("click", () => {
            const isOpen = answer.style.display === "block";

            // Hide all answers first (optional: ensures only one is open at a time)
            document.querySelectorAll(".answer").forEach(ans => ans.style.display = "none");
            document.querySelectorAll(".icon img").forEach(img => img.src = "./assets/images/icon-plus.svg");

            // Toggle current answer and icon
            if (!isOpen) {
                answer.style.display = "block";
                icon.src = "./assets/images/icon-minus.svg";
            }
        });
    });
});
