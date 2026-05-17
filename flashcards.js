// ============================================
// FLASHCARDS - Sprechen B2: Studium vs. Ausbildung
// Claudia Toth · 32 carduri vocabular esențial
// REGULĂ FERMĂ: NICIODATĂ ghilimele interne — CAPS pentru emfază!
// ============================================

const flashcardsData = [
    // === Tipuri de educație (5) ===
    { de: "das Studium", ro: "studiul universitar · 3-5 ani la universitate · cere Abitur", audio: "audio/letters/studium.wav" },
    { de: "die Ausbildung", ro: "școala profesională / ucenicia · 2-3 ani · combină școala cu firma", audio: "audio/letters/ausbildung.wav" },
    { de: "das duale Studium", ro: "studiul dual · universitate + practică în firmă · cel mai bun din ambele lumi", audio: "audio/letters/duales-studium.wav" },
    { de: "der Bachelor / Master", ro: "licență / master · titluri academice · necesare pentru carieră internațională", audio: "audio/letters/bachelor-master.wav" },
    { de: "das Abitur", ro: "bacalaureatul german · condiție pentru universitate · Hochschulreife", audio: "audio/letters/abitur.wav" },

    // === Decizia (4) ===
    { de: "sich entscheiden für + Akk.", ro: "a se decide pentru ceva · Ich entscheide mich für ein Studium", audio: "audio/letters/sich-entscheiden.wav" },
    { de: "sich bewerben", ro: "a aplica · sich bewerben für einen Studienplatz · verb reflexiv", audio: "audio/letters/sich-bewerben.wav" },
    { de: "angenommen / abgelehnt werden", ro: "a fi admis / respins · Passiv · Ich wurde angenommen!", audio: "audio/letters/angenommen.wav" },
    { de: "die Zukunft planen", ro: "a planifica viitorul · acțiune importantă după Abitur", audio: "audio/letters/zukunft-planen.wav" },

    // === PRO Studium (5) ===
    { de: "bessere Karrierechancen", ro: "șanse mai bune de carieră · argument PRO universitate", audio: "audio/letters/karrierechancen.wav" },
    { de: "international arbeiten", ro: "a lucra internațional · accesibil mai ales cu diplomă academică", audio: "audio/letters/international.wav" },
    { de: "höheres Gehalt verdienen", ro: "a câștiga salariu mai mare · pe termen lung, după facultate", audio: "audio/letters/hoeheres-gehalt.wav" },
    { de: "Führungspositionen erreichen", ro: "a ajunge în poziții de conducere · nevoie de Master deseori", audio: "audio/letters/fuehrungspositionen.wav" },
    { de: "im Ausland studieren / Erasmus", ro: "a studia în străinătate / Erasmus · oportunitate exclusivă pentru studenți", audio: "audio/letters/ausland-erasmus.wav" },

    // === PRO Ausbildung (5) ===
    { de: "praktische Erfahrung sammeln", ro: "a acumula experiență practică · argument PRO Ausbildung", audio: "audio/letters/praktische-erfahrung.wav" },
    { de: "von Anfang an Geld verdienen", ro: "a câștiga bani de la început · primești Ausbildungsvergütung", audio: "audio/letters/anfang-geld.wav" },
    { de: "die Ausbildungsvergütung", ro: "indemnizația de ucenicie · ~600-1200 EUR/lună · plătită de firmă", audio: "audio/letters/ausbildungsverguetung.wav" },
    { de: "keine Studienschulden", ro: "fără datorii studențești · marele avantaj al Ausbildung", audio: "audio/letters/keine-schulden.wav" },
    { de: "Fachkraft werden", ro: "a deveni specialist (calificat) · Fachkräftemangel = lipsă de specialiști", audio: "audio/letters/fachkraft.wav" },

    // === CONTRA & dezavantaje (4) ===
    { de: "die lange Studiendauer", ro: "durata lungă a studiilor · contra Studium · 3-7 ani fără salariu", audio: "audio/letters/studiendauer.wav" },
    { de: "Studienschulden machen", ro: "a face datorii din studii · BAföG credit · risc real", audio: "audio/letters/studienschulden.wav" },
    { de: "Arbeitslosigkeit nach dem Studium", ro: "șomajul după facultate · 10-15% absolvenți · contra Studium", audio: "audio/letters/arbeitslosigkeit.wav" },
    { de: "begrenzte Karrieremöglichkeiten", ro: "posibilități limitate de carieră · contra Ausbildung · greu de ajuns la management", audio: "audio/letters/begrenzte.wav" },

    // === Expresii pentru dialog (9) ===
    { de: "Meiner Meinung nach...", ro: "După părerea mea... · introducere pentru exprimarea opiniei", audio: "audio/letters/meiner-meinung.wav" },
    { de: "Ich bin der Meinung, dass...", ro: "Sunt de părere că... · variantă mai formală", audio: "audio/letters/bin-meinung.wav" },
    { de: "Da hast du recht.", ro: "Aici ai dreptate. · acord parțial · diplomatic", audio: "audio/letters/recht.wav" },
    { de: "Das stimmt schon, aber...", ro: "Așa e, dar... · acord + contraargument", audio: "audio/letters/stimmt-aber.wav" },
    { de: "An deiner Stelle würde ich...", ro: "În locul tău, eu aș... · sugestie diplomatică", audio: "audio/letters/an-deiner-stelle.wav" },
    { de: "Hast du daran gedacht, dass...?", ro: "Te-ai gândit la faptul că...? · introducere contraargument", audio: "audio/letters/daran-gedacht.wav" },
    { de: "Auf der einen Seite... auf der anderen Seite...", ro: "Pe de o parte... pe de altă parte... · pentru argumentare echilibrată", audio: "audio/letters/einen-seite.wav" },
    { de: "Zusammenfassend kann man sagen...", ro: "În concluzie se poate spune... · închidere de dialog", audio: "audio/letters/zusammenfassend.wav" },
    { de: "Jeder Weg hat Vor- und Nachteile.", ro: "Fiecare drum are avantaje și dezavantaje. · concluzie diplomatică", audio: "audio/letters/jeder-weg.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> — vocabular cheie pentru dialogul B2 Studium vs. Ausbildung.<br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție germană.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => {
        console.log('Audio nu poate fi redat:', err);
    });
}

buildFlashcards();
