
const grilles = {
  1: {
    max: 68,
    sections: [
      { title: "1. Préparation et structuration", items: [
        { code:"1.1", label:"Les objectifs d'apprentissage sont clairement définis et communiqués aux élèves" },
        { code:"1.2", label:"La progression de la séance est logique et cohérente" },
        { code:"1.3", label:"Le matériel et les supports sont préparés et adaptés au niveau" },
        { code:"1.4", label:"La séance s'inscrit dans la progression de la séquence" },
      ]},
      { title: "2. Gestion du temps et du rythme", items: [
        { code:"2.1", label:"Le temps alloué à chaque phase est respecté" },
        { code:"2.2", label:"Les transitions entre les activités sont fluides" },
        { code:"2.3", label:"Le rythme est adapté à l'ensemble du groupe" },
      ]},
      { title: "3. Diversification des activités", items: [
        { code:"3.1", label:"Les modalités de travail sont variées (individuel, binôme, groupe)" },
        { code:"3.2", label:"Les supports utilisés sont diversifiés et stimulants" },
        { code:"3.3", label:"Les activités mobilisent différents niveaux cognitifs (mémorisation, compréhension, application, analyse)" },
      ]},
      { title: "4. Gestion de la classe", items: [
        { code:"4.1", label:"Les consignes sont claires, précises et comprises de tous" },
        { code:"4.2", label:"L'enseignant maintient l'attention et l'engagement des élèves" },
        { code:"4.3", label:"Les comportements perturbateurs sont gérés avec efficacité" },
        { code:"4.4", label:"L'espace classe est organisé de façon fonctionnelle" },
      ]},
      { title: "5. Évaluation formative", items: [
        { code:"5.1", label:"L'enseignant vérifie régulièrement la compréhension des élèves" },
        { code:"5.2", label:"Des moments de bilan ou de synthèse sont ménagés" },
        { code:"5.3", label:"Les erreurs des élèves sont traitées comme des occasions d'apprentissage" },
      ]},
    ]
  },
  2: {
    max: 60,
    sections: [
      { title: "1. Maîtrise des contenus", items: [
        { code:"1.1", label:"L'enseignant maîtrise les notions et concepts abordés" },
        { code:"1.2", label:"Le vocabulaire disciplinaire est employé avec précision" },
        { code:"1.3", label:"L'enseignant rectifie les erreurs conceptuelles sans ambiguïté" },
      ]},
      { title: "2. Transposition didactique", items: [
        { code:"2.1", label:"Les savoirs savants sont reformulés de façon accessible" },
        { code:"2.2", label:"Des analogies, exemples et contre-exemples sont mobilisés" },
        { code:"2.3", label:"Les représentations initiales des élèves sont repérées et travaillées" },
        { code:"2.4", label:"L'enseignant fait des liens avec des connaissances déjà acquises" },
      ]},
      { title: "3. Progression et construction du savoir", items: [
        { code:"3.1", label:"La logique de construction des savoirs est visible et explicitée" },
        { code:"3.2", label:"Les étapes de la démarche (découverte, structuration, entraînement) sont respectées" },
        { code:"3.3", label:"Le niveau d'abstraction est adapté progressivement" },
      ]},
      { title: "4. Gestion des obstacles et des erreurs", items: [
        { code:"4.1", label:"Les obstacles épistémologiques prévisibles ont été anticipés" },
        { code:"4.2", label:"Les erreurs des élèves sont analysées dans leur logique" },
        { code:"4.3", label:"Des remédiations différenciées sont proposées" },
      ]},
      { title: "5. Évaluation des apprentissages", items: [
        { code:"5.1", label:"Les critères d'évaluation sont explicités aux élèves" },
        { code:"5.2", label:"Des indicateurs de réussite sont définis et communiqués" },
        { code:"5.3", label:"Le feed-back donné aux élèves est précis et formatif" },
      ]},
    ]
  },
  3: {
    max: 60,
    sections: [
      { title: "1. Qualité de la communication verbale", items: [
        { code:"1.1", label:"Le langage est adapté au niveau et à l'âge des élèves" },
        { code:"1.2", label:"Les explications sont claires, bien articulées et audibles" },
        { code:"1.3", label:"L'enseignant reformule les propos des élèves pour les valoriser" },
        { code:"1.4", label:"Les questions posées stimulent la réflexion (questions ouvertes)" },
      ]},
      { title: "2. Communication non verbale", items: [
        { code:"2.1", label:"La posture corporelle exprime la disponibilité et l'engagement" },
        { code:"2.2", label:"Le regard est distribué équitablement dans la classe" },
        { code:"2.3", label:"Les déplacements dans la salle sont intentionnels et fonctionnels" },
      ]},
      { title: "3. Climat de classe et cadre relationnel", items: [
        { code:"3.1", label:"Un cadre sécurisant est établi (règles claires, respect mutuel)" },
        { code:"3.2", label:"L'enseignant valorise les efforts et les réussites" },
        { code:"3.3", label:"Les erreurs sont traitées sans stigmatisation" },
        { code:"3.4", label:"La parole est distribuée équitablement entre les élèves" },
      ]},
      { title: "4. Gestion des interactions élèves", items: [
        { code:"4.1", label:"Les interactions entre élèves sont encouragées et régulées" },
        { code:"4.2", label:"L'enseignant gère les conflits avec calme et équité" },
        { code:"4.3", label:"Les élèves en difficulté reçoivent une attention particulière" },
      ]},
      { title: "5. Différenciation relationnelle", items: [
        { code:"5.1", label:"L'enseignant adapte son niveau de relation à chaque élève" },
        { code:"5.2", label:"Les élèves discrets ou inhibés sont sollicités avec bienveillance" },
        { code:"5.3", label:"La relation est empreinte de chaleur sans excès de familiarité" },
      ]},
    ]
  },
  4: {
    max: 60,
    sections: [
      { title: "1. Posture professionnelle", items: [
        { code:"1.1", label:"L'enseignant fait preuve d'assurance et de confiance en soi" },
        { code:"1.2", label:"La tenue, la présentation et la voix correspondent au cadre professionnel" },
        { code:"1.3", label:"L'enseignant assume son rôle d'autorité avec sérénité" },
      ]},
      { title: "2. Gestes professionnels spécifiques", items: [
        { code:"2.1", label:"Les gestes d'étayage sont adaptés au besoin de chaque élève" },
        { code:"2.2", label:"L'enseignant improvise efficacement face aux imprévus" },
        { code:"2.3", label:"Les gestes d'institutionnalisation marquent clairement les savoirs à retenir" },
        { code:"2.4", label:"L'enseignant ajuste sa pratique en cours de séance" },
      ]},
      { title: "3. Engagement et présence", items: [
        { code:"3.1", label:"L'enseignant témoigne d'un intérêt sincère pour les apprentissages des élèves" },
        { code:"3.2", label:"L'enthousiasme et la motivation sont perceptibles" },
        { code:"3.3", label:"L'enseignant est pleinement présent et attentif à ce qui se passe" },
      ]},
      { title: "4. Gestion du stress et des émotions", items: [
        { code:"4.1", label:"L'enseignant gère les situations difficiles sans perdre son calme" },
        { code:"4.2", label:"Les émotions sont exprimées de façon professionnelle et maîtrisée" },
        { code:"4.3", label:"L'enseignant prend du recul face aux comportements perturbateurs" },
      ]},
      { title: "5. Réflexivité et auto-évaluation", items: [
        { code:"5.1", label:"L'enseignant manifeste une capacité à se remettre en question" },
        { code:"5.2", label:"Il identifie et nomme ses propres hésitations ou ajustements" },
        { code:"5.3", label:"Une posture d'apprenant sur sa propre pratique est perceptible" },
        { code:"5.4", label:"L'enseignant sollicite un retour ou accepte le regard de l'observateur" },
      ]},
    ]
  }
};

const scores = { 1:{}, 2:{}, 3:{}, 4:{} };

function buildGrille(gNum) {
  const g = grilles[gNum];
  const body = document.getElementById('body-' + gNum);
  let html = '';
  g.sections.forEach(section => {
    html += `<div class="section-title">${section.title}</div>`;
    section.items.forEach(item => {
      const key = `${gNum}-${item.code}`;
      html += `
        <div class="indicator-row" id="row-${key}">
          <div class="ind-label">${item.label}</div>
          <div class="ind-code">${item.code}</div>
          <div class="score-select-wrap">
            ${[0,1,2,3,4].map(v => `<button class="score-btn" data-v="${v}" data-key="${key}" data-g="${gNum}" onclick="setScore('${key}',${v},${gNum})">${v}</button>`).join('')}
          </div>
        </div>
        <div class="remarks-row" id="rem-${key}">
          <textarea placeholder="Observations / Remarques…" id="txt-${key}"></textarea>
        </div>`;
    });
  });
  body.innerHTML = html;
}

function setScore(key, val, gNum) {
  scores[gNum][key] = val;
  // Update buttons
  document.querySelectorAll(`.score-btn[data-key="${key}"]`).forEach(btn => {
    btn.classList.toggle('sel', parseInt(btn.dataset.v) === val);
  });
  // Show remarks
  const rem = document.getElementById('rem-' + key);
  rem.classList.add('open');
  updateScores(gNum);
}

function updateScores(gNum) {
  const g = grilles[gNum];
  let total = 0;
  Object.values(scores[gNum]).forEach(v => total += v);
  const max = g.max;
  const pct = Math.round((total / max) * 100);
  document.getElementById('score-' + gNum).textContent = total;
  document.getElementById('pct-' + gNum).textContent = pct;
  document.getElementById('bar-' + gNum).style.width = pct + '%';
  // Synthese
  document.getElementById('syn-score-' + gNum).textContent = total;
  document.getElementById('syn-bar-' + gNum).style.width = pct + '%';
  // Total
  let grand = 0;
  let grandMax = 0;
  [1,2,3,4].forEach(g => {
    grandMax += grilles[g].max;
    Object.values(scores[g]).forEach(v => grand += v);
  });
  document.getElementById('total-score').textContent = grand;
  document.getElementById('total-pct').textContent = Math.round((grand/grandMax)*100) + '%';
}

function showTab(gNum) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('panel-' + gNum).classList.add('active');
  document.querySelector(`.tab-btn[data-grille="${gNum}"]`).classList.add('active');
}

function resetAll() {
  if (!confirm('Réinitialiser toutes les notes ?')) return;
  [1,2,3,4].forEach(g => {
    scores[g] = {};
    document.querySelectorAll(`#body-${g} .score-btn`).forEach(btn => btn.classList.remove('sel'));
    document.querySelectorAll(`#body-${g} .remarks-row`).forEach(r => { r.classList.remove('open'); });
    document.querySelectorAll(`#body-${g} textarea`).forEach(t => t.value = '');
    updateScores(g);
  });
}

function updateSyntheseHeader() {}

// Init
[1,2,3,4].forEach(g => buildGrille(g));
