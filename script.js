window.addEventListener("DOMContentLoaded", () => {
    // --- Build current list of all moves ---
    const allMoves = moveGroups.flatMap(g => g.moves);
    const allMoveNames = allMoves.map(m => m.name);

    // --- Load saved moves, clean up, and merge defaults ---
    let savedMoves = JSON.parse(localStorage.getItem("enabledMoves")) || {};
    let enabledMoves = {};

    // Keep only valid moves and fill missing ones
    for (const move of allMoves) {
        if (move.name in savedMoves) {
            enabledMoves[move.name] = savedMoves[move.name];
        } else {
            // New move — enabled if it has a date
            enabledMoves[move.name] = !!move.date;
        }
    }

    // Save the cleaned version back to storage
    localStorage.setItem("enabledMoves", JSON.stringify(enabledMoves));

    const moveListEl = document.getElementById("moveList");
    const randomizeBtn = document.getElementById("randomizeBtn");
    const currentMoveEl = document.getElementById("currentMove");
    const sortBtn = document.getElementById("sortBtn");
    const sortMenu = document.getElementById("sortMenu");
    const titleText = document.getElementById("titleText");

    const sortModes = {
        alphaAsc: {
            label: "Alphabetical",
            fn: (a, b) => a.name.localeCompare(b.name)
        },
        dateDesc: {
            label: "Newest First",
            fn: (a, b) => {
                const da = a.date ? new Date(a.date) : new Date(0); // fallback = oldest
                const db = b.date ? new Date(b.date) : new Date(0);
                return db - da;
            }
        },
        dateAsc: {
            label: "Oldest First",
            fn: (a, b) => {
                const da = a.date ? new Date(a.date) : new Date(8640000000000000); // fallback = far future
                const db = b.date ? new Date(b.date) : new Date(8640000000000000);
                return da - db;
            }
        }
    };

    let currentSort = localStorage.getItem("sortMode") || "dateDesc";

    function renderMoveList() {
        moveListEl.innerHTML = "";
        moveGroups.forEach(group => {
            const sorted = [...group.moves].sort(sortModes[currentSort].fn);
            const html = `
      <div class="move-group">
        <h3>${group.name}</h3>
        ${sorted
                    .map(
                        m => `
            <label class="move-item">
              <div class="checkbox-wrapper">
                <input type="checkbox" data-move="${m.name}" ${enabledMoves[m.name] ? "checked" : ""}>
                <span class="checkbox-custom"></span>
              </div>
              <span class="move-name">${m.name}</span>
              <span class="move-date">${m.date ? new Date(m.date).toLocaleDateString() : "—"}</span>
            </label>`
                    )
                    .join("")}
      </div>`;
            moveListEl.insertAdjacentHTML("beforeend", html);
        });
    }


    renderMoveList();

    // Auto-save on checkbox change
    moveListEl.addEventListener("change", e => {
        if (e.target.matches("input[type='checkbox']")) {
            const move = e.target.dataset.move;
            enabledMoves[move] = e.target.checked;
            localStorage.setItem("enabledMoves", JSON.stringify(enabledMoves));
        }
    });

    // Randomizer
    randomizeBtn.addEventListener("click", () => {
        const active = Object.entries(enabledMoves)
            .filter(([_, v]) => v)
            .map(([name]) => name);
        if (!active.length) {
            currentMoveEl.textContent = "No moves selected!";
            return;
        }
        const move = active[Math.floor(Math.random() * active.length)];
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

            const tab = btn.dataset.tab;
            document.getElementById(tab).classList.add("active");

            if (tab === "tab-settings") {
                sortBtn.style.visibility = "visible";
            } else {
                sortBtn.style.visibility = "hidden";
                sortMenu.classList.add("hidden");
            }
        });
    });

    // --- Sort menu toggle ---
    sortBtn.addEventListener("click", e => {
        e.stopPropagation();
        sortMenu.classList.toggle("hidden");

        // Sync radio states when opening
        document.querySelectorAll('.sort-option input').forEach(input => {
            input.checked = input.value === currentSort;
        });
    });

    // --- Sort option selection ---
    sortMenu.addEventListener("change", e => {
        if (e.target.matches("input[name='sortOption']")) {
            currentSort = e.target.value;
            localStorage.setItem("sortMode", currentSort);
            renderMoveList();
            sortMenu.classList.add("hidden");
        }
    });

    // Hide menu when clicking elsewhere
    document.addEventListener("click", e => {
        if (!sortMenu.classList.contains("hidden")) {
            sortMenu.classList.add("hidden");
        }
    });
});
