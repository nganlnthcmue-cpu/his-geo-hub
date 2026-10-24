/* ==========================================================
   HIS - GEO HUB - WEBSITE DẠY HỌC
   Cập nhật nội dung trong các mảng dữ liệu bên dưới.
   ========================================================== */

// 1) THÊM BÀI GIẢNG: điền tên, môn, khối, mô tả và đường dẫn tài liệu.
const lessons = [
  { title: "Lịch sử là gì?", subject: "Lịch sử", grade: "Lớp 6", description: "Khám phá khái niệm lịch sử, nguồn sử liệu và ý nghĩa của việc học lịch sử.", url: "", icon: "▤" },
  { title: "Tri thức lịch sử và cuộc sống", subject: "Lịch sử", grade: "Lớp 6", description: "Tìm hiểu vai trò của tri thức lịch sử trong đời sống hiện tại và tương lai.", url: "", icon: "⌂" },
  { title: "Vị trí địa lí Việt Nam", subject: "Địa lí", grade: "Lớp 8", description: "Ôn lại vị trí, phạm vi lãnh thổ và ý nghĩa của vị trí địa lí nước ta.", url: "", icon: "◎" },
  { title: "Cách mạng tư sản Anh", subject: "Lịch sử", grade: "Lớp 8", description: "Khái quát nguyên nhân, diễn biến và kết quả của cách mạng tư sản Anh.", url: "", icon: "⚑" }
];

// 2) THÊM TRÒ CHƠI: url có thể là đường dẫn đến một trang HTML trò chơi riêng.
const games = [
  { title: "Trắc nghiệm nhanh", category: "CỦNG CỐ KIẾN THỨC", description: "Thử sức với câu hỏi trắc nghiệm và kiểm tra đáp án ngay trên trang Ôn tập.", url: "#review", icon: "✓", status: "Sẵn sàng" },
  { title: "Thử thách kiến thức", category: "THỬ THÁCH", description: "Tổ chức các câu hỏi ngắn theo chủ đề để khởi động hoặc củng cố bài học.", url: "", icon: "⚡", status: "Sắp cập nhật" },
  { title: "Ô chữ bí mật", category: "TƯ DUY", description: "Giải mã từ khóa dựa trên các gợi ý kiến thức của bài học.", url: "", icon: "▦", status: "Sắp cập nhật" },
  { title: "Ghép cặp kiến thức", category: "GHI NHỚ", description: "Ghép khái niệm với sự kiện, địa danh hoặc đặc điểm phù hợp.", url: "", icon: "⇄", status: "Sắp cập nhật" }
];

// 3) THÊM CÂU HỎI ÔN TẬP: correct là chỉ số đáp án bắt đầu từ 0.
const quizQuestions = [
  { q: "Môn Lịch sử nghiên cứu điều gì?", options: ["Tương lai của Trái Đất", "Quá khứ của loài người và xã hội loài người", "Chỉ các hiện tượng tự nhiên", "Chỉ các hoạt động kinh tế hiện nay"], correct: 1, explain: "Lịch sử nghiên cứu những gì đã diễn ra trong quá khứ, đặc biệt là lịch sử xã hội loài người." },
  { q: "Đường xích đạo chia Trái Đất thành hai bán cầu nào?", options: ["Đông và Tây", "Lục địa và đại dương", "Bắc và Nam", "Nóng và lạnh"], correct: 2, explain: "Đường xích đạo chia Trái Đất thành bán cầu Bắc và bán cầu Nam." },
  { q: "Tư liệu nào sau đây là tư liệu hiện vật?", options: ["Một bài thơ hiện đại", "Một chiếc trống đồng cổ", "Một bài phát thanh", "Một lời kể chưa được ghi âm"], correct: 1, explain: "Trống đồng là hiện vật có thể cung cấp thông tin về đời sống xã hội trong quá khứ." },
  { q: "Trên bản đồ, tỉ lệ 1 : 100 000 có nghĩa là gì?", options: ["1 cm trên bản đồ bằng 100 000 cm ngoài thực địa", "100 000 cm trên bản đồ bằng 1 cm thực địa", "1 km trên bản đồ bằng 100 000 km thực địa", "Bản đồ có diện tích 100 000 cm²"], correct: 0, explain: "Mỗi 1 cm trên bản đồ tương ứng 100 000 cm, tức 1 km ngoài thực địa." }
];

// 4) THÊM CÔNG CỤ RANDOM KHÁC: đăng ký đường dẫn tại đây.
const randomTools = [
  { title: "Chia nhóm ngẫu nhiên", description: "Có thể bổ sung công cụ chia lớp thành các nhóm học tập.", icon: "♧", url: "" },
  { title: "Bốc thăm câu hỏi", description: "Có thể bổ sung công cụ chọn ngẫu nhiên câu hỏi theo chủ đề.", icon: "?", url: "" },
  { title: "Vòng quay may mắn", description: "Công cụ chọn học sinh ngẫu nhiên cho hoạt động trên lớp.", icon: "◉", url: "" }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[ch]));
}

// Điều hướng kiểu trang đơn, không cần tải lại website.
function showPage(page) {
  const valid = ["home", "lessons", "review", "games", "random"];
  if (!valid.includes(page)) page = "home";
  $$(".page").forEach(section => section.classList.toggle("active", section.id === `page-${page}`));
  $$(".nav-link").forEach(link => link.classList.toggle("active", link.dataset.page === page));
  $("#mainNav").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function routeFromHash() { showPage((location.hash || "#home").slice(1)); }
window.addEventListener("hashchange", routeFromHash);
$("#menuToggle").addEventListener("click", () => $("#mainNav").classList.toggle("open"));

function renderCards(items, container, type) {
  container.innerHTML = items.map(item => {
    const href = item.url || "";
    const action = href ? `href="${escapeHtml(href)}"` : `href="#" data-coming="true"`;
    const actionText = href ? (href === "#review" ? "Bắt đầu chơi" : "Mở nội dung") : "Sắp cập nhật";
    return `<article class="content-card">
      <span class="card-icon">${escapeHtml(item.icon || "✦")}</span>
      ${item.category ? `<span class="tag">${escapeHtml(item.category)}</span>` : `<span class="tag">${escapeHtml(item.grade || item.subject || item.status || "Học liệu")}</span>`}
      <h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description || "")}</p>
      <a class="card-link" ${action}>${actionText}<span>↗</span></a>
    </article>`;
  }).join("");
  container.querySelectorAll("[data-coming]").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    alert("Nội dung này đang chờ cập nhật. Bạn có thể thêm đường dẫn trong tệp app.js.");
  }));
}

function renderLessons() {
  const query = $("#lessonSearch").value.trim().toLocaleLowerCase("vi");
  const subject = $("#lessonSubject").value;
  const filtered = lessons.filter(item => (subject === "all" || item.subject === subject) &&
    `${item.title} ${item.subject} ${item.grade} ${item.description}`.toLocaleLowerCase("vi").includes(query));
  renderCards(filtered, $("#lessonList"), "lesson");
  $("#lessonEmpty").classList.toggle("hidden", filtered.length !== 0);
}
function renderGames() {
  const query = $("#gameSearch").value.trim().toLocaleLowerCase("vi");
  const filtered = games.filter(item => `${item.title} ${item.category} ${item.description}`.toLocaleLowerCase("vi").includes(query));
  renderCards(filtered, $("#gameList"), "game");
  if (!filtered.length) $("#gameList").innerHTML = '<p class="empty-state">Chưa tìm thấy trò chơi phù hợp.</p>';
}
$("#lessonSearch").addEventListener("input", renderLessons);
$("#lessonSubject").addEventListener("change", renderLessons);
$("#gameSearch").addEventListener("input", renderGames);
renderLessons();
renderGames();
renderCards(randomTools, $("#randomToolsList"), "random");
$("#year").textContent = new Date().getFullYear();

// Quiz tương tác.
let quizIndex = 0, quizScore = 0, quizAnswered = false;
$("#startQuiz").addEventListener("click", () => {
  quizIndex = 0; quizScore = 0; quizAnswered = false; renderQuestion();
});
function renderQuestion() {
  const panel = $("#quizPanel");
  if (quizIndex >= quizQuestions.length) {
    panel.innerHTML = `<div class="quiz-result"><span class="big-check">✓</span><h3>Hoàn thành!</h3><strong>${quizScore}/${quizQuestions.length}</strong><p>Bạn trả lời đúng ${quizScore} trên ${quizQuestions.length} câu.</p><button class="btn btn-primary" id="retryQuiz">Làm lại <span>↻</span></button></div>`;
    $("#retryQuiz").addEventListener("click", () => { quizIndex = 0; quizScore = 0; renderQuestion(); });
    return;
  }
  quizAnswered = false;
  const item = quizQuestions[quizIndex];
  panel.innerHTML = `<div class="question-top"><span>CÂU ${quizIndex + 1}/${quizQuestions.length}</span><span>Điểm: ${quizScore}</span></div>
    <div class="progress"><span style="width:${quizIndex / quizQuestions.length * 100}%"></span></div>
    <h3 class="question-title">${escapeHtml(item.q)}</h3>
    <div class="answers">${item.options.map((option, i) => `<button class="answer-option" data-answer="${i}">${String.fromCharCode(65+i)}. ${escapeHtml(option)}</button>`).join("")}</div>
    <div class="feedback" id="quizFeedback" aria-live="polite"></div><button class="btn btn-primary quiz-next hidden" id="nextQuestion">${quizIndex === quizQuestions.length - 1 ? "Xem kết quả" : "Câu tiếp theo"} →</button>`;
  panel.querySelectorAll("[data-answer]").forEach(button => button.addEventListener("click", () => {
    if (quizAnswered) return;
    quizAnswered = true;
    const chosen = Number(button.dataset.answer);
    const correct = chosen === item.correct;
    if (correct) quizScore++;
    panel.querySelectorAll("[data-answer]").forEach(option => {
      option.disabled = true;
      if (Number(option.dataset.answer) === item.correct) option.classList.add("correct");
      else if (Number(option.dataset.answer) === chosen) option.classList.add("wrong");
    });
    $("#quizFeedback").textContent = `${correct ? "Chính xác! " : "Chưa chính xác. "}${item.explain}`;
    $("#quizFeedback").style.color = correct ? "#18784e" : "#b42323";
    $("#nextQuestion").classList.remove("hidden");
  }));
  $("#nextQuestion").addEventListener("click", () => { quizIndex++; renderQuestion(); });
}

// Danh sách học sinh được lưu trong trình duyệt hiện tại.
const defaultNames = ["Nguyễn An", "Trần Bình", "Lê Chi", "Phạm Dũng", "Hoàng Hà", "Phạm Minh"];
let names = loadNames();
let picked = new Set();
function loadNames() {
  try {
    const saved = localStorage.getItem("his-geo-hub-student-names");
    return saved ? JSON.parse(saved) : defaultNames;
  } catch { return [...defaultNames]; }
}
function updateRosterCount() { $("#rosterCount").textContent = `${names.length} học sinh`; }
function syncRoster() { $("#studentNames").value = names.join("\n"); updateRosterCount(); }
syncRoster();
$("#saveRoster").addEventListener("click", () => {
  names = [...new Set($("#studentNames").value.split(/\r?\n/).map(s => s.trim()).filter(Boolean))];
  picked.clear();
  try { localStorage.setItem("his-geo-hub-student-names", JSON.stringify(names)); } catch {}
  syncRoster();
  $("#rosterMessage").textContent = `Đã cập nhật ${names.length} học sinh.`;
  $("#randomResult").innerHTML = '<span class="result-spark">✦</span><strong>Sẵn sàng?</strong><small>Danh sách đã được cập nhật</small>';
});
$("#resetPicked").addEventListener("click", () => {
  picked.clear();
  $("#rosterMessage").textContent = "Đã đặt lại lượt chọn. Tất cả học sinh đều có thể được chọn.";
});
$("#pickName").addEventListener("click", () => {
  const available = names.filter(name => !picked.has(name));
  if (!available.length) {
    $("#randomResult").innerHTML = '<span class="result-spark">↻</span><strong>Đã chọn hết!</strong><small>Nhấn “Đặt lại lượt chọn” để bắt đầu vòng mới.</small>';
    return;
  }
  const button = $("#pickName");
  button.disabled = true;
  button.style.opacity = ".7";
  let ticks = 0;
  const result = $("#randomResult");
  const animation = setInterval(() => {
    const current = available[Math.floor(Math.random() * available.length)];
    result.innerHTML = `<span class="result-spark">✦</span><strong>${escapeHtml(current)}</strong><small>Đang chọn ngẫu nhiên...</small>`;
    ticks++;
    if (ticks >= 12) {
      clearInterval(animation);
      const winner = available[Math.floor(Math.random() * available.length)];
      picked.add(winner);
      result.innerHTML = `<span class="result-spark">✦</span><strong>${escapeHtml(winner)}</strong><small>Chúc mừng! Bạn được mời chia sẻ.</small>`;
      button.disabled = false;
      button.style.opacity = "1";
      $("#rosterMessage").textContent = `Đã chọn ${picked.size}/${names.length} học sinh trong lượt này.`;
    }
  }, 90);
});

// Khởi tạo đúng trang dựa theo URL.
routeFromHash();
