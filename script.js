// Wait until DOM and moveGroups are loaded
window.addEventListener("DOMContentLoaded", () => {
    // Flatten all moves into a single object list for storage/reference
    const allMoves = moveGroups.flatMap(g => g.moves);
    let enabledMoves = JSON.parse(localStorage.getItem("enabledMoves")) ||
        Object.fromEntries(allMoves.map(m => [m.name, true]));

    const moveListEl = document.getElementById("moveList");
    const randomizeBtn = document.getElementById("randomizeBtn");
    const currentMoveEl = document.getElementById("currentMove");

    let sortMode = localStorage.getItem("sortMode") || "alphabetical";

    // Render grouped move checklist
    function renderMoveList() {
        moveListEl.innerHTML = `
      <div class="sort-bar">
        <label>Sort by:</label>
        <select id="sortSelect">
          <option value="alphabetical" ${sortMode === "alphabetical" ? "selected" : ""}>Alphabetical</option>
          <option value="date" ${sortMode === "date" ? "selected" : ""}>Date</option>
        </select>
      </div>
    `;

        moveGroups.forEach(group => {
            const sortedMoves = [...group.moves].sort((a, b) => {
                if (sortMode === "date") return new Date(a.date) - new Date(b.date);
                return a.name.localeCompare(b.name);
            });

            const groupHTML = `
        <div class="move-group">
          <h3>${group.name}</h3>
          ${sortedMoves
                    .map(
                        m => `<label>
                      <input type="checkbox" data-move="${m.name}" ${enabledMoves[m.name] ? "checked" : ""}>
                      ${m.name}
                    </label>`
                    )
                    .join("")}
        </div>`;
            moveListEl.insertAdjacentHTML("beforeend", groupHTML);
        });

        document.getElementById("sortSelect").addEventListener("change", e => {
            sortMode = e.target.value;
            localStorage.setItem("sortMode", sortMode);
            renderMoveList();
        });
    }

    renderMoveList();

    // Auto-save when user toggles a checkbox
    moveListEl.addEventListener("change", e => {
        if (e.target.matches("input[type='checkbox']")) {
            const move = e.target.dataset.move;
            enabledMoves[move] = e.target.checked;
            localStorage.setItem("enabledMoves", JSON.stringify(enabledMoves));
        }
    });

    // Randomizer
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

    // Tab switching
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));
            btn.classList.add("active");
            document.getElementById(btn.dataset.tab).classList.add("active");
        });
    });
});
