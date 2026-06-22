// ============================================
// VOCABULAR - Sprechen B2: Studium vs. Ausbildung
// Claudia Toth · Vocabular bilingv pentru dialog pe perechi B2
// ============================================

const theoryHTML = `

    <div class="theory-box" style="background:#FBF7EF; border-color:#D4A574;">
        <p style="margin:0; font-size:0.95rem;">👁 <strong>Auto-verificare:</strong> în tabele, coloana cu traducerea română e <strong>ascunsă</strong>. Încearcă întâi să traduci tu termenul german, apoi dă click pe <strong>👁</strong> ca să te verifici.</p>
    </div>
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
                    <tr><td><strong>Cursant B</strong></td><td>vrea <strong>Ausbildung</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">experiență practică imediată, salariu chiar din primul an, fără datorii studențești, contract sigur</span></td></tr>
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

            <div class="theory-box" style="background: #ecfdf5; border-color: #10b981;">
                <h4>🔤 Tipologia vocabularului B2 — Sg/Pl orientativ</h4>
                <p>La nivelul B2, substantivele din tabelele de mai jos sunt majoritar <strong>concepte educaționale</strong> sau <strong>compuse cu sens specific</strong>. Iată tipologia:</p>
                <ul style="margin-left: 18px;">
                    <li><strong>Concepte sg tantum</strong>: <em>das Studium, die Ausbildung, das Wissen, die Praxis (academică)</em></li>
                    <li><strong>Substantive concrete cu plural</strong>: <em>der Beruf · die Berufe</em> · <em>die Universität · die Universitäten</em> · <em>das Praktikum · die Praktika</em></li>
                    <li><strong>Colocații verbale</strong>: „eine Lehre machen", „im dualen System lernen" — formule fixe</li>
                </ul>
                <p style="margin-top: 8px;">Pentru substantivele concrete noi, verifică pluralul pe <a href="https://de.pons.com/deklination/deutsch" target="_blank" style="color: #047857;">PONS</a> — la examenul B2, precizia gen+plural face diferența.</p>
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
                    <tr><td><strong>das Studium</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">studiul universitar</span></td></tr>
                    <tr><td><strong>die Universität / die Uni</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">universitatea</span></td></tr>
                    <tr><td><strong>die Fachhochschule (FH)</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">universitatea de științe aplicate</span></td></tr>
                    <tr><td><strong>die Ausbildung</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">școala profesională / formarea profesională</span></td></tr>
                    <tr><td><strong>die Berufsschule</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">școala de meserii</span></td></tr>
                    <tr><td><strong>das duale Studium</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">studiul dual (universitate + firmă)</span></td></tr>
                    <tr><td><strong>der Bachelor</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">licența</span></td></tr>
                    <tr><td><strong>der Master</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">masterul</span></td></tr>
                    <tr><td><strong>das Praktikum</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">stagiul de practică</span></td></tr>
                    <tr><td><strong>der Abschluss</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">absolvirea / diploma</span></td></tr>
                    <tr><td><strong>das Abitur</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">bacalaureatul german</span></td></tr>
                    <tr><td><strong>die Hochschulreife</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">permisiunea de a urma studii superioare</span></td></tr>
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
                    <tr><td><strong>sich entscheiden für + Akk.</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a se decide pentru ceva</span></td></tr>
                    <tr><td><strong>eine Entscheidung treffen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a lua o decizie</span></td></tr>
                    <tr><td><strong>sich (Dat.) etwas gut überlegen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a se gândi bine la ceva</span></td></tr>
                    <tr><td><strong>die Zukunft planen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a planifica viitorul</span></td></tr>
                    <tr><td><strong>einen Beruf wählen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a alege o profesie</span></td></tr>
                    <tr><td><strong>sich bewerben (für + Akk.)</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a aplica (pentru ceva)</span></td></tr>
                    <tr><td><strong>die Bewerbung einreichen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a depune dosarul</span></td></tr>
                    <tr><td><strong>angenommen werden</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a fi admis</span></td></tr>
                    <tr><td><strong>abgelehnt werden</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a fi respins</span></td></tr>
                    <tr><td><strong>der Numerus Clausus (NC)</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">media de admitere la facultate</span></td></tr>
                    <tr><td><strong>der Studienplatz</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">locul la universitate</span></td></tr>
                    <tr><td><strong>der Ausbildungsplatz</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">locul de stagiu / ucenicie</span></td></tr>
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
                    <tr><td><strong>der akademische Abschluss</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">diplomă academică</span></td></tr>
                    <tr><td><strong>Akademiker werden</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a deveni academician / intelectual</span></td></tr>
                    <tr><td><strong>bessere Karrierechancen haben</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a avea șanse mai bune de carieră</span></td></tr>
                    <tr><td><strong>international arbeiten</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a lucra internațional</span></td></tr>
                    <tr><td><strong>höheres Gehalt verdienen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a câștiga salariu mai mare</span></td></tr>
                    <tr><td><strong>in die Forschung gehen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a intra în cercetare</span></td></tr>
                    <tr><td><strong>wissenschaftlich arbeiten</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a lucra științific</span></td></tr>
                    <tr><td><strong>theoretisches Wissen vertiefen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a aprofunda cunoștințe teoretice</span></td></tr>
                    <tr><td><strong>Führungspositionen erreichen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a ajunge în poziții de conducere</span></td></tr>
                    <tr><td><strong>ein breites Berufsfeld</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">un domeniu larg de profesii</span></td></tr>
                    <tr><td><strong>im Ausland studieren</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a studia în străinătate</span></td></tr>
                    <tr><td><strong>Erasmus machen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a face Erasmus</span></td></tr>
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
            <div class="theory-box" style="background: #F5F0E8;">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>praktische Erfahrung sammeln</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a acumula experiență practică</span></td></tr>
                    <tr><td><strong>von Anfang an Geld verdienen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a câștiga bani de la început</span></td></tr>
                    <tr><td><strong>die Ausbildungsvergütung</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">indemnizația de ucenicie</span></td></tr>
                    <tr><td><strong>finanziell unabhängig sein</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a fi independent financiar</span></td></tr>
                    <tr><td><strong>keine Studienschulden haben</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a nu avea datorii studențești</span></td></tr>
                    <tr><td><strong>schneller im Beruf sein</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a fi mai repede în profesie</span></td></tr>
                    <tr><td><strong>einen festen Arbeitsvertrag</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">un contract de muncă fix</span></td></tr>
                    <tr><td><strong>von der Firma übernommen werden</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a fi preluat de firmă</span></td></tr>
                    <tr><td><strong>handwerkliches Geschick</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">îndemânare practică</span></td></tr>
                    <tr><td><strong>Fachkraft werden</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a deveni specialist (cu calificare)</span></td></tr>
                    <tr><td><strong>Fachkräftemangel</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">lipsă de personal calificat</span></td></tr>
                    <tr><td><strong>sichere Berufsaussichten</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">perspective profesionale sigure</span></td></tr>
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
                    <tr><td><strong>die lange Studiendauer</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">durata lungă a studiilor</span></td></tr>
                    <tr><td><strong>hohe Lebenshaltungskosten</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">costuri ridicate de trai</span></td></tr>
                    <tr><td><strong>der BAföG-Kredit</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">creditul studențesc BAföG</span></td></tr>
                    <tr><td><strong>Studienschulden machen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a face datorii din studii</span></td></tr>
                    <tr><td><strong>nebenbei jobben müssen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a fi obligat să muncești pe lângă</span></td></tr>
                    <tr><td><strong>zu viel Theorie, wenig Praxis</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">prea multă teorie, puțină practică</span></td></tr>
                    <tr><td><strong>die Arbeitslosigkeit nach dem Studium</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">șomajul după facultate</span></td></tr>
                    <tr><td><strong>überqualifiziert sein</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a fi supracalificat</span></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fee2e2;">
                <h4>Contra Ausbildung</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>begrenzte Karrieremöglichkeiten</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">posibilități limitate de carieră</span></td></tr>
                    <tr><td><strong>langfristig weniger verdienen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a câștiga mai puțin pe termen lung</span></td></tr>
                    <tr><td><strong>körperlich anstrengend sein</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a fi solicitant fizic</span></td></tr>
                    <tr><td><strong>Schichtarbeit</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">munca în schimburi</span></td></tr>
                    <tr><td><strong>früh aufstehen müssen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a trebui să te trezești devreme</span></td></tr>
                    <tr><td><strong>weniger Prestige genießen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a se bucura de mai puțin prestigiu</span></td></tr>
                    <tr><td><strong>schwierig, sich umzuorientieren</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">greu de reorientare profesională</span></td></tr>
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
                    <tr><td><strong>Ich bin der Meinung, dass...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Sunt de părere că...</span></td></tr>
                    <tr><td><strong>Meiner Meinung nach...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">După părerea mea...</span></td></tr>
                    <tr><td><strong>Was hältst du davon?</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Ce părere ai despre asta?</span></td></tr>
                    <tr><td><strong>Wie siehst du das?</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Cum vezi tu asta?</span></td></tr>
                    <tr><td><strong>Ein wichtiger Vorteil ist...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Un avantaj important este...</span></td></tr>
                    <tr><td><strong>Andererseits...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Pe de altă parte...</span></td></tr>
                    <tr><td><strong>Im Gegensatz dazu...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Spre deosebire de asta...</span></td></tr>
                    <tr><td><strong>Dazu kommt noch, dass...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">În plus, faptul că...</span></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>Pentru a fi de acord / a contrazice</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>Da hast du recht.</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Aici ai dreptate.</span></td></tr>
                    <tr><td><strong>Das sehe ich genauso.</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Văd la fel.</span></td></tr>
                    <tr><td><strong>Das stimmt schon, aber...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Așa e, dar...</span></td></tr>
                    <tr><td><strong>Da bin ich anderer Meinung.</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Aici am altă părere.</span></td></tr>
                    <tr><td><strong>Das sehe ich anders.</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Eu văd altfel.</span></td></tr>
                    <tr><td><strong>An deiner Stelle würde ich...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">În locul tău, eu aș...</span></td></tr>
                    <tr><td><strong>Hast du daran gedacht, dass...?</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Te-ai gândit la faptul că...?</span></td></tr>
                    <tr><td><strong>Ich verstehe deinen Punkt, aber...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Înțeleg punctul tău, dar...</span></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #F5F0E8;">
                <h4>Pentru concluzie</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>Zusammenfassend kann man sagen...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">În concluzie se poate spune...</span></td></tr>
                    <tr><td><strong>Alles in allem...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">În total...</span></td></tr>
                    <tr><td><strong>Letztendlich muss jeder selbst entscheiden.</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">În final fiecare trebuie să decidă singur.</span></td></tr>
                    <tr><td><strong>Es kommt darauf an, was man will.</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Depinde de ce vrei.</span></td></tr>
                    <tr><td><strong>Jeder Weg hat seine Vor- und Nachteile.</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Fiecare drum are avantaje și dezavantaje.</span></td></tr>
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


// 👁 Toggle traducere RO ascunsă (auto-verificare)
function toggleRo(btn) {
    const ro = btn.nextElementSibling;
    if (!ro || !ro.classList.contains('ro-reveal')) return;
    const open = ro.classList.toggle('show');
    btn.classList.toggle('active', open);
    btn.title = open ? 'Ascunde traducerea' : 'Vezi traducerea';
    btn.setAttribute('aria-label', btn.title);
}
