// GANTI NAMA INI DENGAN PANGGILAN DOI
const namaDoi = "Yunaaa";
document.getElementById("partnerName").textContent = namaDoi;

const screens = ["intro", "quiz", "reveal", "secret"];

const questions = [
  {
    question: "Kalau aku lagi capek, kamu bakal lakuin apa?",
    hint: "Pilih jawaban paling kamu banget.",
    options: ["peluk aku 🫂", "Kasih makanan enak 🍟", "Diam tapi tetap ada 🤍", "Semua itu, dong! 💗"],
    replies: [
      "Pelukan dari kamu emang pelukan ternyaman!",
      "Makanan memang pesaing terberat cinta. WKWK.",
      "Kadang ditemani tanpa dipaksa cerita itu berarti banget. 🤍",
      "Wih, paket lengkap edisi kesayangan!"
    ]
  },
  {
    question: "Kalau kita bisa kencan sekarang, pilih apa?",
    hint: "Tidak ada jawaban salah, kecuali jawab 'ujian'.",
    options: ["Jajan bareng 🍜", "Nonton film 🎬", "Jalan-jalan santai 🌷", "Apa saja asal bareng kamu 💞"],
    replies: [
      "Prioritas hidup: kenyang bersama.",
      "Siapkan camilan, film, dan komentar sepanjang film. 😭",
      "Jalan santai, pulang-pulang punya cerita.",
      "Cieee, jawabanmu manis juga!"
    ]
  },
  {
    question: "Menurutmu, siapa yang paling keren?",
    hint: "Pertanyaan ini sangat ilmiah. Percayalah.",
    options: ["Aku 😎", "Kamu 😚", "Kita berdua 💗", "Yang bikin website ini, jelas 😌"],
    replies: [
      "Percaya diri adalah kunci kehidupan.",
      "Aduh, ada yang lagi cari perhatian nih.",
      "Jawaban paling damai sedunia. 🫶",
      "BENAR! Nilai kamu 1000/10!"
    ]
  }
];

let currentQuestion = 0;

const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const reveal = document.getElementById("reveal");
const secret = document.getElementById("secret");
const questionText = document.getElementById("questionText");
const questionHint = document.getElementById("questionHint");
const optionsBox = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

function showScreen(screenId) {
  screens.forEach(id => document.getElementById(id).classList.add("hidden"));
  document.getElementById(screenId).classList.remove("hidden");
}

function renderQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = q.question;
  questionHint.textContent = q.hint;
  progressText.textContent = `Pertanyaan ${currentQuestion + 1} dari ${questions.length}`;
  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  optionsBox.innerHTML = "";
  feedback.textContent = "";
  nextBtn.classList.add("hidden");

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    button.type = "button";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.addEventListener("click", () => chooseAnswer(index));
    optionsBox.appendChild(button);
  });
}

function chooseAnswer(index) {
  const q = questions[currentQuestion];
  const buttons = optionsBox.querySelectorAll(".option");
  buttons.forEach(button => button.disabled = true);
  buttons[index].classList.add("selected");
  feedback.textContent = q.replies[index];
  nextBtn.classList.remove("hidden");
}

document.getElementById("startBtn").addEventListener("click", () => {
  currentQuestion = 0;
  renderQuestion();
  showScreen("quiz");
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    showScreen("reveal");
  }
});

document.getElementById("revealBtn").addEventListener("click", () => {
  showScreen("secret");
  launchConfettiHearts();
});

document.getElementById("restartBtn").addEventListener("click", () => {
  currentQuestion = 0;
  showScreen("intro");
});

function launchConfettiHearts() {
  // Efek hati kecil sebentar ketika pesan rahasia dibuka.
  const symbols = ["💗", "💕", "💖", "♡"];
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("span");
    heart.textContent = symbols[i % symbols.length];
    heart.style.position = "fixed";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${30 + Math.random() * 60}vh`;
    heart.style.zIndex = "5";
    heart.style.pointerEvents = "none";
    heart.style.fontSize = `${16 + Math.random() * 18}px`;
    heart.style.transition = "transform 1.3s ease, opacity 1.3s ease";
    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform = `translateY(-${80 + Math.random() * 160}px) rotate(${Math.random() * 50 - 25}deg)`;
      heart.style.opacity = "0";
    });
    window.setTimeout(() => heart.remove(), 1500);
  }
}
