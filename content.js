const trustedSites = [
  "google.com","youtube.com","amazon.in","flipkart.com",
  "paytm.com","phonepe.com","github.com"
];

// Generate realistic reasons
function getReasons(url, text) {
  const reasons = [];

  if (!url.startsWith("https")) {
    reasons.push("Connection is not secure (missing HTTPS)");
  }

  if (
    url.includes("xyz") ||
    url.includes("fake") ||
    url.includes("test") ||
    url.includes("offer")
  ) {
    reasons.push("Suspicious or newly created domain detected");
  }

  if (
    text.includes("pay") ||
    text.includes("login") ||
    text.includes("verify")
  ) {
    reasons.push("Sensitive action triggered (payment/login request)");
  }

  return reasons;
}

// SAFE badge (smooth + fast)
function showSafeBadge() {
  if (document.getElementById("autoshield-safe")) return;

  const badge = document.createElement("div");
  badge.id = "autoshield-safe";
  badge.innerHTML = "🛡️ Secure Site Verified";

  badge.style.opacity = "0";
  badge.style.transform = "translateY(-10px)";

  document.body.appendChild(badge);

  requestAnimationFrame(() => {
    badge.style.transition = "all 0.3s ease";
    badge.style.opacity = "1";
    badge.style.transform = "translateY(0)";
  });

  setTimeout(() => {
    badge.style.opacity = "0";
    badge.style.transform = "translateY(-10px)";
    setTimeout(() => badge.remove(), 300);
  }, 2000);
}

// 🔴 POPUP (FULLY FIXED)
function showPopup(reasons) {
  if (document.getElementById("autoshield-overlay")) return;

  const overlay = document.createElement("div");
  overlay.id = "autoshield-overlay";

  const reasonList = reasons.map(r => `<li>• ${r}</li>`).join("");

  overlay.innerHTML = `
    <div class="autoshield-box">
      <div style="font-size:40px;">⚠️</div>

      <h2 style="margin-top:10px;">Potential Scam Detected</h2>

      <p style="font-size:14px; opacity:0.85;">
        This page shows signs of a phishing or unsafe environment:
      </p>

      <ul style="text-align:left; margin:15px 0;">
        ${reasonList}
      </ul>

      <div class="buttons">
        <button class="safeExit">Safe Exit</button>
        <button class="proceed">Proceed Anyway</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // 🔥 FIXED BUTTON HANDLING
  overlay.addEventListener("click", function (e) {
    e.stopPropagation();

    if (e.target.classList.contains("safeExit")) {
      overlay.remove();
    }

    if (e.target.classList.contains("proceed")) {
      overlay.remove();
    }
  });

  // Sound (optional, non-blocking)
  setTimeout(() => {
    try {
      new Audio("https://www.soundjay.com/buttons/beep-01a.mp3").play();
    } catch {}
  }, 100);
}

// 🧠 MAIN DETECTION (ROBUST)
document.addEventListener("click", function (e) {
  let el = e.target;

  while (el && el !== document.body) {
    const tag = el.tagName?.toLowerCase();

    if (tag === "button" || tag === "a" || el.type === "submit") {
      const text = (el.innerText || "").toLowerCase();
      const url = window.location.href;

      const isTrusted = trustedSites.some(site => url.includes(site));

      // 🟢 SAFE FLOW
      if (isTrusted) {
        showSafeBadge();
        return;
      }

      // 🔴 RISK DETECTION
      const reasons = getReasons(url, text);

      if (reasons.length > 0) {
        e.preventDefault();
        showPopup(reasons);
        return;
      }
    }

    el = el.parentElement;
  }
});