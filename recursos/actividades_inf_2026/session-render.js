function infList(items) {
  return (items || []).map((item) => `<li>${item}</li>`).join("");
}

function infRule(rule) {
  if (!rule) return "";
  if (typeof rule === "string") {
    return `<div class="grid-3"><div class="box soft"><h3>Regla</h3><p>${rule}</p></div></div>`;
  }

  return `
    <div class="grid-3">
      <div class="box soft"><h3>Regla general</h3><p>${rule.all || ""}</p></div>
      <div class="box blue"><h3>Regla 3 a 5</h3><p>${rule.ages_3_5 || ""}</p></div>
      <div class="box warm"><h3>Regla 6 a 10</h3><p>${rule.ages_6_10 || ""}</p></div>
    </div>
  `;
}

function infAgeCard(title, data) {
  if (!data) return "";
  return `
    <div class="box">
      <h3>${title}</h3>
      <ul>
        <li>Palabras de regla: ${data.rule_words}</li>
        <li>Respuesta a señal: ${data.signal_response_seconds} s</li>
        <li>Modo de actividad: ${data.activity_mode}</li>
        <li>Modo de entrada: ${data.entry_mode}</li>
      </ul>
    </div>
  `;
}

function infStructure(title, items, toneClass) {
  return `
    <div class="box ${toneClass}">
      <h3>${title}</h3>
      <ul>${infList(items)}</ul>
    </div>
  `;
}

function renderTransfer(transfer) {
  if (!transfer) {
    return `
        <div class="box">
          <h3>Transferencia al hogar</h3>
        <p>No aplica en esta sesión.</p>
      </div>
    `;
  }

  return `
    <div class="grid-3">
      <div class="box soft"><h3>Indicación</h3><p>${transfer.instruction}</p></div>
      <div class="box blue"><h3>Prompt</h3><p>${transfer.prompt}</p></div>
      <div class="box warm"><h3>Sentido</h3><p>${transfer.purpose}</p></div>
    </div>
  `;
}

function renderOptionalReflection(reflection) {
  if (!reflection) return "";
  return `
    <section class="section">
      <div class="card">
        <div class="section-head"><h2>Reflexión opcional</h2><span class="chip">Solo si el grupo sostiene diálogo</span></div>
        <div class="grid-3">
          <div class="box soft"><h3>Edades</h3><p>${reflection.target_ages}</p></div>
          <div class="box blue"><h3>Pregunta</h3><p>${reflection.question}</p></div>
          <div class="box warm"><h3>Tiempo</h3><p>${reflection.time_seconds} segundos</p></div>
        </div>
        <div class="box" style="margin-top:14px;"><h3>Nota</h3><p>${reflection.note}</p></div>
      </div>
    </section>
  `;
}

function renderAnchorQuestion(anchorQuestion) {
  if (!anchorQuestion) return "";
  return `
    <section class="section">
      <div class="card">
        <div class="section-head"><h2>Pregunta ancla</h2><span class="chip">Elegir una</span></div>
        <div class="box soft"><ul>${infList(anchorQuestion)}</ul></div>
      </div>
    </section>
  `;
}

function renderSession(input) {
  const data = typeof input === "number" ? window.YANAPAKUY_INF_SESSIONS?.[input] : input;
  if (!data) return;
  const prevLink = data.number > 1 ? `<a class="btn secondary" href="../sesion${data.number - 1}/">&#8592; Sesión anterior</a>` : "";
  const nextLink = data.number < 19 ? `<a class="btn secondary" href="../sesion${data.number + 1}/">Sesión siguiente &#8594;</a>` : "";

  const app = document.getElementById("app");
  document.title = `Sesión ${data.number} | ${data.title} | Yanapakuy`;

  app.innerHTML = `
    <main class="wrap">
      <div class="topbar">
        <div class="brand">
          <img src="../../../assets/logo.svg" alt="Logo de Yanapakuy" />
          <div class="brand-copy">
            <strong>Yanapakuy Infantil 2026</strong>
            <span>Módulo 3 a 10 años</span>
          </div>
        </div>
        <div class="toolbar">
          <a class="btn" href="../index/">&#8592; Índice infantil</a>
          ${prevLink}
          ${nextLink}
          <button class="btn warm" type="button" onclick="window.print()">Imprimir</button>
        </div>
      </div>

      <section class="hero">
        <div class="hero-kicker">Sesión ${data.number} · Actividades infantiles 2026</div>
        <h1>${data.title}</h1>
        <p>${data.conduct_objective}</p>
        <div class="hero-meta">
          <div class="hero-meta-item"><strong>Grupo sugerido</strong><span>3 a 10 años</span></div>
          <div class="hero-meta-item"><strong>Duración</strong><span>120 minutos</span></div>
          <div class="hero-meta-item"><strong>Tema</strong><span>${data.theme}</span></div>
          <div class="hero-meta-item"><strong>Foco</strong><span>Conducta observable</span></div>
        </div>
        <nav class="quicknav" aria-label="Navegación interna">
          <a href="#ficha">Ficha</a>
          <a href="#regla">Regla</a>
          <a href="#estructura">Estructura</a>
          <a href="#voluntario">Voluntario</a>
          <a href="#pares">Pares</a>
          <a href="#metricas">Métricas</a>
        </nav>
      </section>

      <section class="section" id="ficha">
        <div class="card">
          <div class="section-head"><h2>Ficha rápida</h2><span class="chip">Uso en campo</span></div>
          <div class="grid-2">
            <div class="box soft"><h3>Nota operativa</h3><p>${data.internal_theme_note}</p></div>
            <div class="box blue"><h3>Conducta objetivo</h3><p>${data.conduct_objective}</p></div>
          </div>
        </div>
      </section>

      <section class="section" id="regla">
        <div class="card">
          <div class="section-head"><h2>Regla y diferenciación</h2><span class="chip">Por tramo de edad</span></div>
          ${infRule(data.rule)}
          <div class="grid-3" style="margin-top:14px;">
            ${infAgeCard("Edades 3 a 5", data.age_differentiation?.ages_3_5)}
            ${infAgeCard("Edades 6 a 8", data.age_differentiation?.ages_6_8)}
            ${infAgeCard("Edades 9 a 10", data.age_differentiation?.ages_9_10)}
          </div>
        </div>
      </section>

      ${renderAnchorQuestion(data.anchor_question)}

      <section class="section" id="estructura">
        <div class="card">
          <div class="section-head"><h2>Estructura de sesión</h2><span class="chip">Paso a paso</span></div>
          <div class="grid-2">
            ${infStructure("Entrada", data.structure?.entry, "soft")}
            ${infStructure("Rutina", data.structure?.routine, "blue")}
          </div>
          <div class="grid-2" style="margin-top:14px;">
            ${infStructure("Actividad central", data.structure?.core_activity, "warm")}
            ${infStructure("Repeticion", data.structure?.repetition, "")}
          </div>
          <div class="grid-2" style="margin-top:14px;">
            ${infStructure("Salida observable", data.structure?.output, "soft")}
            ${infStructure("Cierre", data.structure?.closing, "blue")}
          </div>
        </div>
      </section>

      <section class="section" id="voluntario">
        <div class="card">
          <div class="section-head"><h2>Rol del voluntario</h2><span class="chip">Hacer y evitar</span></div>
          <div class="grid-2">
            <div class="box soft"><h3>Hacer</h3><ul>${infList(data.volunteer_role?.do)}</ul></div>
            <div class="box rose"><h3>Evitar</h3><ul>${infList(data.volunteer_role?.avoid)}</ul></div>
          </div>
        </div>
      </section>

      <section class="section" id="pares">
        <div class="card">
          <div class="section-head"><h2>Mediación entre pares</h2><span class="chip">${data.peer_mediation?.enabled ? "Activa" : "No activa"}</span></div>
          <div class="grid-2">
            <div class="box soft"><h3>Rol de los mayores</h3><ul>${infList(data.peer_mediation?.role_of_older)}</ul></div>
            <div class="box warm"><h3>Límites</h3><ul>${infList(data.peer_mediation?.constraints)}</ul></div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="card">
          <div class="section-head"><h2>Transferencia al hogar</h2><span class="chip">Microsistema hogar</span></div>
          ${renderTransfer(data.transfer_to_home)}
        </div>
      </section>

      ${renderOptionalReflection(data.optional_reflection)}

      <section class="section" id="metricas">
        <div class="card">
          <div class="section-head"><h2>Métricas observables</h2><span class="chip">Chequeo rápido</span></div>
          <div class="box soft"><ul>${infList(data.metrics?.observable)}</ul></div>
        </div>
      </section>

      <p class="footer-note">Yanapakuy Infantil 2026 · Sesión ${data.number} · ${data.theme}</p>
    </main>
  `;
}

const infSessionId = Number(document.body.dataset.session || "0");
if (infSessionId && window.YANAPAKUY_INF_SESSIONS?.[infSessionId]) {
  renderSession(infSessionId);
}
