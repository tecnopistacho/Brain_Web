document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("nav button");
    const views = document.querySelectorAll("main .view");

    function showView(viewId) {
        views.forEach(view => {
            view.classList.add("hidden");
        });

        const activeView = document.getElementById(viewId);
        if (activeView) {
            activeView.classList.remove("hidden");
        }
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetView = button.getAttribute("data-view");
            showView(targetView);
        });
    });

    showView("home");
});