// ============================================
// VOCABULAR - Sprechen B2: Studium vs. Ausbildung
// Claudia Toth · Vocabular bilingv pentru dialog pe perechi B2
// ============================================

const theoryHTML = `
    <!-- 0: Intro + roluri -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>👋 1. Tema dialogului + roluri</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="theory-box">
                <h4>🎯 Tema: „Studium oder Ausbildung?"</h4>
                <p>După Abitur (bacalaureat), tinerii din Germania au 2 căi principale: <strong>Studium</strong> (universitate, 3-5 ani, diplomă academică) sau <strong>Ausbildung</strong> (școală profesională combinată cu firmă, 2-3 ani, calificare practică).</p>
                <p>Voi sunteți doi <strong>colegi de liceu</strong> care vorbiți despre viitor. Aveți păreri diferite și încercați să vă convingeți reciproc.</p>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>👥 Roluri</h4>
                <table class="grammar-table">
                    <tr><th>Cursant</th><th>Poziție</th><th>Argumente principale</th></tr>
                    <tr><td><strong>Cursant A</strong></td><td>vrea <strong>Studium</strong> (universitate)</td><td>prestigiu academic, carieră internațională, salariu mare pe termen lung, posibilitatea de a face cercetare</td></tr>
                    <tr><td><strong>Cursant B</strong></td><td>vrea <strong>Ausbildung</strong></td><td>experiență practică imediată, salariu chiar din primul an, fără datorii studențești, contract sigur</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>📌 Ce conține acest material</h4>
                <ul style="margin-left: 18px;">
                    <li>6 secțiuni de vocabular bilingv DE → RO (~60 termeni)</li>
                    <li>Expresii utile pentru argumentare și contraargumentare</li>
                    <li>5 exerciții de fixare a vocabularului</li>
                    <li>32 flashcards cu pronunție</li>
                    <li>Test final cu 15 întrebări mixte</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: Tipuri de educație -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🎓 2. Tipuri de educație & calificări</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="theory-box">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>das Studium</strong></td><td>studiul universitar</td></tr>
                    <tr><td><strong>die Universität / die Uni</strong></td><td>universitatea</td></tr>
                    <tr><td><strong>die Fachhochschule (FH)</strong></td><td>universitatea de științe aplicate</td></tr>
                    <tr><td><strong>die Ausbildung</strong></td><td>școala profesională / formarea profesională</td></tr>
                    <tr><td><strong>die Berufsschule</strong></td><td>școala de meserii</td></tr>
                    <tr><td><strong>das duale Studium</strong></td><td>studiul dual (universitate + firmă)</td></tr>
                    <tr><td><strong>der Bachelor</strong></td><td>licența</td></tr>
                    <tr><td><strong>der Master</strong></td><td>masterul</td></tr>
                    <tr><td><strong>das Praktikum</strong></td><td>stagiul de practică</td></tr>
                    <tr><td><strong>der Abschluss</strong></td><td>absolvirea / diploma</td></tr>
                    <tr><td><strong>das Abitur</strong></td><td>bacalaureatul german</td></tr>
                    <tr><td><strong>die Hochschulreife</strong></td><td>permisiunea de a urma studii superioare</td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 2: Decizia & planificarea -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🤔 3. Decizia & planificarea viitorului</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="theory-box">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>sich entscheiden für + Akk.</strong></td><td>a se decide pentru ceva</td></tr>
                    <tr><td><strong>eine Entscheidung treffen</strong></td><td>a lua o decizie</td></tr>
                    <tr><td><strong>sich (Dat.) etwas gut überlegen</strong></td><td>a se gândi bine la ceva</td></tr>
                    <tr><td><strong>die Zukunft planen</strong></td><td>a planifica viitorul</td></tr>
                    <tr><td><strong>einen Beruf wählen</strong></td><td>a alege o profesie</td></tr>
                    <tr><td><strong>sich bewerben (für + Akk.)</strong></td><td>a aplica (pentru ceva)</td></tr>
                    <tr><td><strong>die Bewerbung einreichen</strong></td><td>a depune dosarul</td></tr>
                    <tr><td><strong>angenommen werden</strong></td><td>a fi admis</td></tr>
                    <tr><td><strong>abgelehnt werden</strong></td><td>a fi respins</td></tr>
                    <tr><td><strong>der Numerus Clausus (NC)</strong></td><td>media de admitere la facultate</td></tr>
                    <tr><td><strong>der Studienplatz</strong></td><td>locul la universitate</td></tr>
                    <tr><td><strong>der Ausbildungsplatz</strong></td><td>locul de stagiu / ucenicie</td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 3: PRO Studium -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🎓 4. Argumente PRO universitate (Cursant A)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="theory-box" style="background: #d1fae5;">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>der akademische Abschluss</strong></td><td>diplomă academică</td></tr>
                    <tr><td><strong>Akademiker werden</strong></td><td>a deveni academician / intelectual</td></tr>
                    <tr><td><strong>bessere Karrierechancen haben</strong></td><td>a avea șanse mai bune de carieră</td></tr>
                    <tr><td><strong>international arbeiten</strong></td><td>a lucra internațional</td></tr>
                    <tr><td><strong>höheres Gehalt verdienen</strong></td><td>a câștiga salariu mai mare</td></tr>
                    <tr><td><strong>in die Forschung gehen</strong></td><td>a intra în cercetare</td></tr>
                    <tr><td><strong>wissenschaftlich arbeiten</strong></td><td>a lucra științific</td></tr>
                    <tr><td><strong>theoretisches Wissen vertiefen</strong></td><td>a aprofunda cunoștințe teoretice</td></tr>
                    <tr><td><strong>Führungspositionen erreichen</strong></td><td>a ajunge în poziții de conducere</td></tr>
                    <tr><td><strong>ein breites Berufsfeld</strong></td><td>un domeniu larg de profesii</td></tr>
                    <tr><td><strong>im Ausland studieren</strong></td><td>a studia în străinătate</td></tr>
                    <tr><td><strong>Erasmus machen</strong></td><td>a face Erasmus</td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 4: PRO Ausbildung -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>💼 5. Argumente PRO Ausbildung (Cursant B)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="theory-box" style="background: #fef3c7;">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>praktische Erfahrung sammeln</strong></td><td>a acumula experiență practică</td></tr>
                    <tr><td><strong>von Anfang an Geld verdienen</strong></td><td>a câștiga bani de la început</td></tr>
                    <tr><td><strong>die Ausbildungsvergütung</strong></td><td>indemnizația de ucenicie</td></tr>
                    <tr><td><strong>finanziell unabhängig sein</strong></td><td>a fi independent financiar</td></tr>
                    <tr><td><strong>keine Studienschulden haben</strong></td><td>a nu avea datorii studențești</td></tr>
                    <tr><td><strong>schneller im Beruf sein</strong></td><td>a fi mai repede în profesie</td></tr>
                    <tr><td><strong>einen festen Arbeitsvertrag</strong></td><td>un contract de muncă fix</td></tr>
                    <tr><td><strong>von der Firma übernommen werden</strong></td><td>a fi preluat de firmă</td></tr>
                    <tr><td><strong>handwerkliches Geschick</strong></td><td>îndemânare practică</td></tr>
                    <tr><td><strong>Fachkraft werden</strong></td><td>a deveni specialist (cu calificare)</td></tr>
                    <tr><td><strong>Fachkräftemangel</strong></td><td>lipsă de personal calificat</td></tr>
                    <tr><td><strong>sichere Berufsaussichten</strong></td><td>perspective profesionale sigure</td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 5: CONTRA & dezavantaje -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>⚠️ 6. Dezavantaje & contraargumente</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="theory-box" style="background: #fee2e2;">
                <h4>Contra Studium (universitate)</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>die lange Studiendauer</strong></td><td>durata lungă a studiilor</td></tr>
                    <tr><td><strong>hohe Lebenshaltungskosten</strong></td><td>costuri ridicate de trai</td></tr>
                    <tr><td><strong>der BAföG-Kredit</strong></td><td>creditul studențesc BAföG</td></tr>
                    <tr><td><strong>Studienschulden machen</strong></td><td>a face datorii din studii</td></tr>
                    <tr><td><strong>nebenbei jobben müssen</strong></td><td>a fi obligat să muncești pe lângă</td></tr>
                    <tr><td><strong>zu viel Theorie, wenig Praxis</strong></td><td>prea multă teorie, puțină practică</td></tr>
                    <tr><td><strong>die Arbeitslosigkeit nach dem Studium</strong></td><td>șomajul după facultate</td></tr>
                    <tr><td><strong>überqualifiziert sein</strong></td><td>a fi supracalificat</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fee2e2;">
                <h4>Contra Ausbildung</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>begrenzte Karrieremöglichkeiten</strong></td><td>posibilități limitate de carieră</td></tr>
                    <tr><td><strong>langfristig weniger verdienen</strong></td><td>a câștiga mai puțin pe termen lung</td></tr>
                    <tr><td><strong>körperlich anstrengend sein</strong></td><td>a fi solicitant fizic</td></tr>
                    <tr><td><strong>Schichtarbeit</strong></td><td>munca în schimburi</td></tr>
                    <tr><td><strong>früh aufstehen müssen</strong></td><td>a trebui să te trezești devreme</td></tr>
                    <tr><td><strong>weniger Prestige genießen</strong></td><td>a se bucura de mai puțin prestigiu</td></tr>
                    <tr><td><strong>schwierig, sich umzuorientieren</strong></td><td>greu de reorientare profesională</td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 6: Expresii pentru dialog -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>💬 7. Expresii utile pentru dialog</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="theory-box">
                <h4>Pentru argumentare</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>Ich bin der Meinung, dass...</strong></td><td>Sunt de părere că...</td></tr>
                    <tr><td><strong>Meiner Meinung nach...</strong></td><td>După părerea mea...</td></tr>
                    <tr><td><strong>Was hältst du davon?</strong></td><td>Ce părere ai despre asta?</td></tr>
                    <tr><td><strong>Wie siehst du das?</strong></td><td>Cum vezi tu asta?</td></tr>
                    <tr><td><strong>Ein wichtiger Vorteil ist...</strong></td><td>Un avantaj important este...</td></tr>
                    <tr><td><strong>Andererseits...</strong></td><td>Pe de altă parte...</td></tr>
                    <tr><td><strong>Im Gegensatz dazu...</strong></td><td>Spre deosebire de asta...</td></tr>
                    <tr><td><strong>Dazu kommt noch, dass...</strong></td><td>În plus, faptul că...</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>Pentru a fi de acord / a contrazice</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>Da hast du recht.</strong></td><td>Aici ai dreptate.</td></tr>
                    <tr><td><strong>Das sehe ich genauso.</strong></td><td>Văd la fel.</td></tr>
                    <tr><td><strong>Das stimmt schon, aber...</strong></td><td>Așa e, dar...</td></tr>
                    <tr><td><strong>Da bin ich anderer Meinung.</strong></td><td>Aici am altă părere.</td></tr>
                    <tr><td><strong>Das sehe ich anders.</strong></td><td>Eu văd altfel.</td></tr>
                    <tr><td><strong>An deiner Stelle würde ich...</strong></td><td>În locul tău, eu aș...</td></tr>
                    <tr><td><strong>Hast du daran gedacht, dass...?</strong></td><td>Te-ai gândit la faptul că...?</td></tr>
                    <tr><td><strong>Ich verstehe deinen Punkt, aber...</strong></td><td>Înțeleg punctul tău, dar...</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>Pentru concluzie</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>Zusammenfassend kann man sagen...</strong></td><td>În concluzie se poate spune...</td></tr>
                    <tr><td><strong>Alles in allem...</strong></td><td>În total...</td></tr>
                    <tr><td><strong>Letztendlich muss jeder selbst entscheiden.</strong></td><td>În final fiecare trebuie să decidă singur.</td></tr>
                    <tr><td><strong>Es kommt darauf an, was man will.</strong></td><td>Depinde de ce vrei.</td></tr>
                    <tr><td><strong>Jeder Weg hat seine Vor- und Nachteile.</strong></td><td>Fiecare drum are avantaje și dezavantaje.</td></tr>
                </table>
            </div>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;

function toggleSubSection(index) {
    const content = document.getElementById('sub-section-' + index);
    const arrow = document.querySelectorAll('.sub-arrow')[index];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (!audio || !btn) return;
    if (audio.paused) {
        document.querySelectorAll('audio').forEach(a => { if (a !== audio) { a.pause(); a.currentTime = 0; } });
        document.querySelectorAll('.audio-btn').forEach(b => b.textContent = '▶');
        audio.play();
        btn.textContent = '⏸';
        audio.onended = () => { btn.textContent = '▶'; };
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}
