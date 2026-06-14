// ============================================
// EXERCIȚII - Sprechen B2: Studium vs. Ausbildung
// Claudia Toth · 5 exerciții (toate text inputs)
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/\s*\/\s*/g, '/')
        .replace(/\s*,\s*/g, ',')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '').trim();
}

// ============================================
// EX 1: Traducere DE → RO
// ============================================
const ex1Data = [
    { id: 'a', de: 'der akademische Abschluss', correct: 'diplomă academică', accept: ['diploma academica', 'diplomă academică'] },
    { id: 'b', de: 'die Ausbildungsvergütung', correct: 'indemnizația de ucenicie', accept: ['indemnizația de ucenicie', 'indemnizatia de ucenicie'] },
    { id: 'c', de: 'eine Entscheidung treffen', correct: 'a lua o decizie', accept: ['a lua o decizie'] },
    { id: 'd', de: 'praktische Erfahrung sammeln', correct: 'a acumula experiență practică', accept: ['a acumula experiență practică', 'a acumula experienta practica'] },
    { id: 'e', de: 'der Fachkräftemangel', correct: 'lipsă de personal calificat', accept: ['lipsa de personal calificat', 'lipsă de personal calificat'] },
    { id: 'f', de: 'sich bewerben', correct: 'a aplica', accept: ['a aplica'] },
    { id: 'g', de: 'die Studienschulden', correct: 'datoriile studențești', accept: ['datoriile studențești', 'datoriile studentesti'] },
    { id: 'h', de: 'das duale Studium', correct: 'studiul dual', accept: ['studiul dual'] }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔁 Tradu termenul german în română.</strong><br>
            Diacriticele românești (ă, â, î, ș, ț) sunt opționale — sistemul acceptă ambele forme.
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong style="color:#065f46; font-size:1.05rem;">${item.de}</strong></label>
                    <input type="text" id="ex1-${item.id}" placeholder="traducere RO...">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const fb = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 2: Traducere RO → DE
// ============================================
const ex2Data = [
    { id: 'a', ro: 'a se decide pentru ceva', correct: 'sich entscheiden für', accept: ['sich entscheiden für', 'sich entscheiden fuer'] },
    { id: 'b', ro: 'a câștiga bani de la început', correct: 'von Anfang an Geld verdienen', accept: ['von Anfang an Geld verdienen'] },
    { id: 'c', ro: 'șanse mai bune de carieră', correct: 'bessere Karrierechancen', accept: ['bessere Karrierechancen'] },
    { id: 'd', ro: 'un contract de muncă fix', correct: 'einen festen Arbeitsvertrag', accept: ['einen festen Arbeitsvertrag'] },
    { id: 'e', ro: 'a fi admis', correct: 'angenommen werden', accept: ['angenommen werden'] },
    { id: 'f', ro: 'durata lungă a studiilor', correct: 'die lange Studiendauer', accept: ['die lange Studiendauer'] },
    { id: 'g', ro: 'a aprofunda cunoștințe teoretice', correct: 'theoretisches Wissen vertiefen', accept: ['theoretisches Wissen vertiefen'] },
    { id: 'h', ro: 'a fi independent financiar', correct: 'finanziell unabhängig sein', accept: ['finanziell unabhängig sein', 'finanziell unabhaengig sein'] }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔁 Tradu expresia română în germană.</strong><br>
            Atenție la articole și prepoziții fixe (für, von, in)!<br>
            <em>💡 Diacritice germane:</em> poți scrie <code>ae</code> (= ä), <code>oe</code> (= ö), <code>ue</code> (= ü), <code>ss</code> (= ß).
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong style="color:#5A5147; font-size:1.05rem;">${item.ro}</strong></label>
                    <input type="text" id="ex2-${item.id}" placeholder="traducere DE...">
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const fb = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 3: Completează propoziția
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Nach dem Abitur muss man eine ____ treffen: Studium oder Ausbildung?', translation: 'După bacalaureat trebuie luată o decizie: facultate sau ucenicie?', correct: 'Entscheidung', accept: ['entscheidung'] },
    { id: 'b', sentence: 'Wer an einer Universität studieren will, braucht das ____.', translation: 'Cine vrea să studieze la universitate are nevoie de bacalaureat (german).', correct: 'Abitur', accept: ['abitur'] },
    { id: 'c', sentence: 'Bei einer Ausbildung verdient man von ____ an Geld.', translation: 'La o ucenicie câștigi bani de la început.', correct: 'Anfang', accept: ['anfang'] },
    { id: 'd', sentence: 'Studenten machen oft ____, weil das Studium teuer ist.', translation: 'Studenții fac adesea datorii pentru că facultatea e scumpă.', correct: 'Studienschulden', accept: ['studienschulden', 'schulden'] },
    { id: 'e', sentence: 'Mit einem Master kann man leichter ____ erreichen.', translation: 'Cu un master poți ajunge mai ușor în poziții de conducere.', correct: 'Führungspositionen', accept: ['führungspositionen', 'fuehrungspositionen'] },
    { id: 'f', sentence: 'In Deutschland gibt es einen großen ____ — viele Firmen suchen Fachkräfte.', translation: 'În Germania există o mare lipsă — multe firme caută specialiști calificați.', correct: 'Fachkräftemangel', accept: ['fachkräftemangel', 'fachkraeftemangel'] },
    { id: 'g', sentence: 'Wer im Ausland studieren möchte, kann ein ____ -Programm machen.', translation: 'Cine vrea să studieze în străinătate poate face un program Erasmus.', correct: 'Erasmus', accept: ['erasmus'] },
    { id: 'h', sentence: 'Eine Ausbildung dauert meistens 2-3 Jahre, ein Bachelor ____ Jahre.', translation: 'O ucenicie durează 2-3 ani, o licență 3 ani.', correct: 'drei', accept: ['drei', '3'] },
    { id: 'i', sentence: 'Das ____ Studium kombiniert Universität mit Praxis in der Firma.', translation: 'Studiul dual combină universitatea cu practica în firmă.', correct: 'duale', accept: ['duale'] },
    { id: 'j', sentence: 'Wer eine Ausbildung macht, hat oft einen festen ____ und ist finanziell unabhängig.', translation: 'Cine face o ucenicie are adesea un contract de muncă fix și e independent financiar.', correct: 'Arbeitsvertrag', accept: ['arbeitsvertrag', 'vertrag'] }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Completează propoziția cu cuvântul potrivit din vocabular.</strong><br>
            Folosește substantivele/verbele învățate. Atenție la genul și forma corectă.
        </div>
    `;
    ex3Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex3-${item.id}" placeholder="cuvântul potrivit...">
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const input = document.getElementById(`ex3-${item.id}`);
        const fb = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 4: Reconstruiește dialogul (Lückentext)
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'A: Ich habe mich für ein Studium ____. (sich entscheiden — persoana I)', translation: 'M-am decis pentru un studiu.', correct: 'entschieden', accept: ['entschieden'] },
    { id: 'b', sentence: 'B: Echt? Ich bin ____ Meinung. Ausbildung ist viel praktischer!', translation: 'Serios? Eu am altă părere. Ucenicia e mult mai practică!', correct: 'anderer', accept: ['anderer'] },
    { id: 'c', sentence: 'A: Aber an deiner Stelle würde ich an die ____ bessere Karrierechancen denken.', translation: 'Dar în locul tău m-aș gândi la șansele mai bune de carieră.', correct: 'Universität', accept: ['universität', 'universitaet', 'uni'] },
    { id: 'd', sentence: 'B: Das ____ schon, aber ich will praktische Erfahrung sammeln.', translation: 'Așa e, dar eu vreau să acumulez experiență practică.', correct: 'stimmt', accept: ['stimmt'] },
    { id: 'e', sentence: 'A: Hast du daran gedacht, dass du als Akademiker ein höheres ____ verdienen wirst?', translation: 'Te-ai gândit că ca academician vei câștiga un salariu mai mare?', correct: 'Gehalt', accept: ['gehalt'] },
    { id: 'f', sentence: 'B: Vielleicht, aber während ich verdiene, machst du Studienschulden! Ich habe einen festen ____.', translation: 'Poate, dar în timp ce eu câștig, tu faci datorii! Eu am un contract de muncă fix.', correct: 'Arbeitsvertrag', accept: ['arbeitsvertrag'] },
    { id: 'g', sentence: 'A: ____ Meinung nach ist das Studium die bessere Wahl. Internationale Karriere ist möglich!', translation: 'După părerea mea facultatea e alegerea mai bună. O carieră internațională e posibilă!', correct: 'Meiner', accept: ['meiner'] },
    { id: 'h', sentence: 'B: Da hast du teilweise ____. Aber Fachkräfte werden in Deutschland dringend gesucht.', translation: 'Aici ai dreptate parțial. Dar specialiștii sunt căutați urgent în Germania.', correct: 'recht', accept: ['recht'] },
    { id: 'i', sentence: 'A: Zusammenfassend kann man sagen: jeder Weg hat seine Vor- und ____.', translation: 'În concluzie se poate spune: fiecare drum are avantaje și dezavantaje.', correct: 'Nachteile', accept: ['nachteile'] },
    { id: 'j', sentence: 'B: Genau! ____ muss jeder selbst entscheiden.', translation: 'Exact! În final fiecare trebuie să decidă singur.', correct: 'Letztendlich', accept: ['letztendlich'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>💬 Dialog: Cursant A (vrea Studium) ↔ Cursant B (vrea Ausbildung).</strong><br>
            Completează cuvântul lipsă pentru a reconstrui dialogul natural.
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex4-${item.id}" placeholder="cuvântul lipsă...">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const fb = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 5: Expresia potrivită în context
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Vrei să-ți exprimi părerea: „____ nach ist das duale Studium die beste Option."', translation: 'După părerea mea studiul dual e cea mai bună opțiune.', correct: 'Meiner Meinung', accept: ['meiner meinung'] },
    { id: 'b', sentence: 'Vrei să-l contrazici pe partener politicos: „Das ____ schon, aber..."', translation: 'Așa e, dar...', correct: 'stimmt', accept: ['stimmt'] },
    { id: 'c', sentence: 'Vrei să introduci o alternativă: „____ würde ich eine Ausbildung machen."', translation: 'În locul tău, eu aș face o ucenicie.', correct: 'An deiner Stelle', accept: ['an deiner stelle'] },
    { id: 'd', sentence: 'Vrei să ceri părerea: „Wie ____ du das?"', translation: 'Cum vezi tu asta?', correct: 'siehst', accept: ['siehst'] },
    { id: 'e', sentence: 'Vrei să introduci un alt aspect: „____ kommt noch, dass die Ausbildung kürzer ist."', translation: 'În plus, faptul că ucenicia e mai scurtă.', correct: 'Dazu', accept: ['dazu'] },
    { id: 'f', sentence: 'Vrei să introduci contraargumentul: „____... auf der anderen Seite..."', translation: 'Pe de o parte... pe de altă parte...', correct: 'Auf der einen Seite', accept: ['auf der einen seite'] },
    { id: 'g', sentence: 'Vrei să închei dialogul cu o concluzie: „____ kann man sagen, dass beide Wege Vorteile haben."', translation: 'În concluzie se poate spune că ambele căi au avantaje.', correct: 'Zusammenfassend', accept: ['zusammenfassend'] },
    { id: 'h', sentence: 'Vrei să întrebi dacă a luat în considerare: „____ daran gedacht, dass du Studienschulden machen wirst?"', translation: 'Te-ai gândit la faptul că vei face datorii din studii?', correct: 'Hast du', accept: ['hast du'] }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>💬 Folosește expresia potrivită pentru funcția dată.</strong><br>
            Aceste expresii sunt esențiale pentru a structura un dialog argumentat la nivel B2.
        </div>
    `;
    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex5-${item.id}" placeholder="expresia potrivită...">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;
    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const fb = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// Build all exercises
buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
