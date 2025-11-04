const moves = [
    "Basic Step", "Cross Body Lead", "Right Turn", "Left Turn",
    "Open Break", "Inside Turn", "Outside Turn",
    "Shine Step", "Copa", "360 Spin", "Hammerlock",
    "Sweetheart", "Shadow Position"
];

let enabledMoves = JSON.parse(localStorage.getItem("enabledMoves")) ||
    Object.fromEntries(moves.map(m => [m, true]));

const moveListEl = document.getElementById("moveList");
const randomizeBtn = document.getElementById("randomizeBtn");
const currentMoveEl = document.getElementById("currentMove");

function renderMoveList() {
    moveListEl.innerHTML = moves.map(m =>
        `<label><input type="checkbox" data-move="${m}" ${enabledMoves[m] ? "checked" : ""}>${m}</label>`
    ).join("");
}
renderMoveList();

// Auto-save whenever checkbox changes
moveListEl.addEventListener("change", (e) => {
    if (e.target.matches("input[type='checkbox']")) {
        const move = e.target.dataset.move;
        enabledMoves[move] = e.target.checked;
        localStorage.setItem("enabledMoves", JSON.stringify(enabledMoves));
    }
});

randomizeBtn.addEventListener("click", () => {
    const activeMoves = Object.entries(enabledMoves)
        .filter(([_, v]) => v)
        .map(([name]) => name);

    if (activeMoves.length === 0) {
        currentMoveEl.textContent = "No moves selected!";
        return;
    }

    const move = activeMoves[Math.floor(Math.random() * activeMoves.length)];
    currentMoveEl.style.opacity = 0;
    setTimeout(() => {
        currentMoveEl.textContent = move;
        currentMoveEl.style.opacity = 1;
    }, 150);
});

document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
    });
});
