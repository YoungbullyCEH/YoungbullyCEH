// Young Bully — terminal build-log typing effect
// Edit the `lines` array below any time your progress changes —
// this is the single place that drives the hero terminal panel.

const lines = [
  { text: "$ ./build_log.sh --status", cls: "" },
  { text: "initializing young_bully.brand ...", cls: "pending" },
  { text: "", cls: "" },
  { text: "[OK] computer_organization_architecture — 10/99 modules", cls: "ok" },
  { text: "[OK]  cpu_cycle, memory_hierarchy, cache_mapping, von_neumann", cls: "ok" },
  { text: "[..] python                — queued", cls: "pending" },
  { text: "[..] linux_networking      — queued", cls: "pending" },
  { text: "[..] tryhackme_practicals  — queued", cls: "pending" },
  { text: "[..] certifications        — queued", cls: "pending" },
  { text: "", cls: "" },
  { text: "status: building in public.", cls: "signal-line" },
  { text: "location: enugu, nigeria.", cls: "signal-line" },
];

const el = document.getElementById("terminalBody");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function renderStatic() {
  el.innerHTML = lines
    .map(l => `<span class="${l.cls}">${escapeHtml(l.text)}</span>`)
    .join("\n");
}

function escapeHtml(str) {
  return str.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
}

function typeLines() {
  let lineIndex = 0;
  let charIndex = 0;
  el.innerHTML = "";

  function step() {
    if (lineIndex >= lines.length) {
      const cursor = document.createElement("span");
      cursor.className = "cursor";
      el.appendChild(cursor);
      return;
    }

    const current = lines[lineIndex];

    if (charIndex === 0) {
      const span = document.createElement("span");
      span.className = current.cls;
      span.dataset.lineMarker = "true";
      el.appendChild(span);
    }

    const activeSpan = el.querySelector('[data-line-marker="true"]');

    if (charIndex < current.text.length) {
      activeSpan.textContent += current.text[charIndex];
      charIndex++;
      setTimeout(step, current.text.startsWith("$") ? 38 : 14);
    } else {
      activeSpan.removeAttribute("data-line-marker");
      el.appendChild(document.createTextNode("\n"));
      lineIndex++;
      charIndex = 0;
      setTimeout(step, current.text === "" ? 60 : 110);
    }
  }

  step();
}

if (reduceMotion) {
  renderStatic();
} else {
  // Start once the terminal is in view, so it plays when the user
  // actually scrolls to / loads onto the hero instead of wasting the
  // animation off-screen.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeLines();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(el);
}
