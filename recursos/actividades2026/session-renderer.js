function list(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function checks(items) {
  return items.map((item, index) => `
    <div class="check">
      <div class="check-bullet">${index + 1}</div>
      <div><strong>${item.title}</strong><span>${item.text}</span></div>
    </div>
  `).join("");
}

function recommendations(items) {
  const letters = "ABCDEFGH".split("");
  return items.map((item, index) => `
    <div class="check">
      <div class="check-bullet">${letters[index]}</div>
      <div><strong>${item.title}</strong><span>${item.text}</span></div>
    </div>
  `).join("");
}

function timeline(items) {
  return items.map((item) => `
    <article class="timeline-step">
      <div class="timeline-time">${item.time}</div>
      <div><h3>${item.title}</h3><p>${item.text}</p></div>
    </article>
  `).join("");
}

function blocks(items) {
  return items.map((item, index) => {
    const volunteer = item.volunteer ? `
      <div class="grid-2">
        <div class="box soft">
          <h4>Qué hace el voluntario</h4>
          <ul>${list(item.volunteer)}</ul>
        </div>
        <div class="box blue">
          <h4>Qué puede decir</h4>
          <p>${item.say}</p>
        </div>
      </div>
    ` : "";

    const steps = item.steps ? `
      <div class="grid-3">
        <div class="box soft"><h4>Paso 1</h4><p>${item.steps[0]}</p></div>
        <div class="box blue"><h4>Paso 2</h4><p>${item.steps[1]}</p></div>
        <div class="box warm"><h4>Paso 3</h4><p>${item.steps[2]}</p></div>
      </div>
    ` : "";

    const qa = item.questions ? `
      <div class="grid-2" style="margin-top:14px;">
        <div class="box">
          <h4>Preguntas guía</h4>
          <ul>${list(item.questions)}</ul>
        </div>
        <div class="box rose">
          <h4>Qué cuidar</h4>
          <ul>${list(item.care)}</ul>
        </div>
      </div>
    ` : "";

    const quote = item.quote ? `<div class="quote">${item.quote}</div>` : "";
    const extra = item.extra || "";
    const initialClock = `${String(item.minutes).padStart(2, "0")}:00`;

    return `
      <div class="session-block">
        <h3>${index + 1}. ${item.title}</h3>
        <div class="session-meta">
          <span>Objetivo: ${item.objective}</span>
          <span>Duración: ${item.minutes} min</span>
        </div>
        <div class="timer" data-minutes="${item.minutes}">
          <span class="clock" aria-live="polite">${initialClock}</span>
          <div class="timer-controls">
            <button class="start" type="button">Iniciar</button>
            <button class="pause" type="button">Pausa</button>
            <button class="reset" type="button">Reiniciar</button>
          </div>
          <div class="bar"><span></span></div>
        </div>
        ${volunteer}
        ${steps}
        ${qa}
        ${quote}
        ${extra}
      </div>
    `;
  }).join("");
}

function renderSession(data) {
  document.title = `Sesión ${data.number} | ${data.title} | Yanapakuy`;

  const app = document.getElementById("app");
  app.innerHTML = `
    <main class="wrap">
      <div class="topbar">
        <div class="brand">
          <img src="../../../assets/logo.svg" alt="Logo de Yanapakuy" />
          <div class="brand-copy">
            <strong>Yanapakuy 2026</strong>
            <span>Guía de sesión y orientación pedagógica</span>
          </div>
        </div>
        <div class="toolbar">
          <a class="btn" href="../indice/">&#8592; Índice 2026</a>
          <button class="btn warm" type="button" onclick="window.print()">Imprimir</button>
          <button class="btn secondary" type="button" id="expandAll">Abrir todo</button>
          <button class="btn secondary" type="button" id="collapseAll">Cerrar todo</button>
        </div>
      </div>
      <section class="hero">
        <div class="hero-kicker">Sesión ${data.number} · ${data.date}</div>
        <h1>${data.title}</h1>
        <p>${data.hero}</p>
        <div class="hero-meta">
          <div class="hero-meta-item"><strong>Grupo sugerido</strong><span>10 a 16 años</span></div>
          <div class="hero-meta-item"><strong>Duración</strong><span>120 minutos</span></div>
          <div class="hero-meta-item"><strong>Eje formativo</strong><span>${data.axis}</span></div>
          <div class="hero-meta-item"><strong>Resultado esperado</strong><span>${data.result}</span></div>
        </div>
        <nav class="quicknav" aria-label="Navegación interna">
          <a href="#presentacion">Presentación</a>
          <a href="#ficha">Ficha rápida</a>
          <a href="#proposito">Propósito</a>
          <a href="#guion">Guion</a>
          <a href="#apoyo">Apoyo</a>
          <a href="#preguntas">Preguntas</a>
          <a href="#dinamica">Dinámica</a>
        </nav>
      </section>
      <section class="section" id="presentacion">
        <div class="card">
          <div class="section-head"><h2>Presentación general</h2><span class="chip">Sentido de la actividad</span></div>
          <p class="lead">${data.presentation}</p>
          <div class="grid-3">
            <div class="box soft"><h3>¿Por qué importa?</h3><p>${data.why}</p></div>
            <div class="box blue"><h3>Aprendizaje central</h3><p>${data.learning}</p></div>
            <div class="box warm"><h3>Aporte formativo</h3><p>${data.contribution}</p></div>
          </div>
          <div class="quote">${data.quote}</div>
        </div>
      </section>
      <section class="section" id="ficha">
        <div class="card">
          <div class="section-head"><h2>Ficha rápida para el voluntario</h2><span class="chip">Consulta rápida</span></div>
          <div class="grid-4">
            <div class="box"><h3>Fecha</h3><p>${data.date}</p></div>
            <div class="box"><h3>Tema</h3><p>${data.theme}</p></div>
            <div class="box"><h3>Grupo / edades</h3><p>10 a 16 años</p></div>
            <div class="box"><h3>Duración</h3><p>120 minutos</p></div>
          </div>
          <div class="grid-2" style="margin-top:14px;">
            <div class="box soft"><h3>Materiales</h3><ul>${list(data.materials)}</ul></div>
            <div class="box blue"><h3>Competencias y capacidades</h3><ul>${list(data.competencies)}</ul></div>
          </div>
        </div>
      </section>
      <section class="section" id="proposito">
        <div class="card">
          <div class="section-head"><h2>Propósito pedagógico</h2><span class="chip">Marco formativo</span></div>
          <p class="lead">${data.purpose}</p>
          <div class="grid-3">
            <div class="box soft"><h3>Habilidad cognitiva</h3><p>${data.cognitive}</p></div>
            <div class="box blue"><h3>Habilidad emocional</h3><p>${data.emotional}</p></div>
            <div class="box warm"><h3>Habilidad social</h3><p>${data.social}</p></div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="card">
          <div class="section-head"><h2>Resultados esperados</h2><span class="chip">Qué debería quedar</span></div>
          <div class="checklist">${checks(data.results)}</div>
        </div>
      </section>
      <section class="section" id="guion">
        <div class="card">
          <div class="section-head"><h2>Guion completo de la sesión</h2><span class="chip">Paso a paso</span></div>
          <p class="lead">${data.script}</p>
          <div class="timeline">${timeline(data.timeline)}</div>
          ${blocks(data.blocks)}
        </div>
      </section>
      <section class="section" id="apoyo">
        <div class="card">
          <div class="section-head"><h2>Contenido de apoyo para el voluntario</h2><span class="chip">Explicación simple del tema</span></div>
          <div class="grid-2">
            <div class="box soft"><h3>Ideas clave</h3><p>${data.support.ideas[0]}</p><p>${data.support.ideas[1]}</p></div>
            <div class="box blue"><h3>Marco formativo y orientación</h3><p>${data.support.frame}</p></div>
          </div>
          <details><summary>Errores comunes o atajos que conviene evitar</summary><div class="details-body"><ul>${list(data.support.warnings)}</ul></div></details>
          <details><summary>Qué hacer si aparecen situaciones sensibles</summary><div class="details-body"><p>${data.support.sensitive}</p></div></details>
        </div>
      </section>
      <section class="section" id="preguntas">
        <div class="card">
          <div class="section-head"><h2>Preguntas orientadoras</h2><span class="chip">Para abrir, profundizar y cerrar</span></div>
          <div class="grid-3">
            <div class="box soft"><h3>Preguntas de apertura</h3><ul>${list(data.questions.open)}</ul></div>
            <div class="box blue"><h3>Preguntas para profundizar</h3><ul>${list(data.questions.deep)}</ul></div>
            <div class="box warm"><h3>Preguntas para conectar con la vida diaria</h3><ul>${list(data.questions.life)}</ul></div>
          </div>
          <div class="box" style="margin-top:14px;"><h3>Preguntas de cierre y reflexión</h3><ul>${list(data.questions.close)}</ul></div>
        </div>
      </section>
      <section class="section" id="dinamica">
        <div class="card">
          <div class="section-head"><h2>Dinámica o actividad práctica</h2><span class="chip">Aplicación directa</span></div>
          <p class="lead">${data.activity.lead}</p>
          <div class="grid-2">
            <div class="box soft"><h3>Instrucciones paso a paso</h3><ol>${list(data.activity.steps)}</ol></div>
            <div class="box blue"><h3>Organización sugerida</h3><ul>${list(data.activity.organization)}</ul></div>
          </div>
          <div class="grid-2" style="margin-top:14px;">
            <div class="box warm"><h3>Ejemplo de producto final</h3><p>${data.activity.example}</p></div>
            <div class="box"><h3>Criterio de revisión del resultado</h3><ul>${list(data.activity.review)}</ul></div>
          </div>
          <details><summary>Variante si el grupo es pequeño</summary><div class="details-body"><p>${data.activity.small}</p></div></details>
          <details><summary>Variante si el grupo está distraído o con poca energía</summary><div class="details-body"><p>${data.activity.distracted}</p></div></details>
        </div>
      </section>
      <section class="section">
        <div class="card">
          <div class="section-head"><h2>Apoyo académico transversal</h2><span class="chip">Solo cuando aporte valor</span></div>
          <div class="grid-3">
            <div class="box soft"><h3>Lectura y comprensión</h3><p>${data.academic.reading}</p></div>
            <div class="box blue"><h3>Escritura</h3><p>${data.academic.writing}</p></div>
            <div class="box warm"><h3>Matemática / organización</h3><p>${data.academic.math}</p></div>
          </div>
          <div class="box" style="margin-top:14px;"><h3>Inglés básico, solo si tiene sentido</h3><p>${data.academic.english}</p></div>
        </div>
      </section>
      <section class="section" id="recomendaciones">
        <div class="card">
          <div class="section-head"><h2>Recomendaciones de conducción</h2><span class="chip">Para uso real en campo</span></div>
          <div class="checklist">${recommendations(data.recommendations)}</div>
        </div>
      </section>
      <section class="section">
        <div class="card">
          <div class="section-head"><h2>Mensaje de cierre</h2><span class="chip">Idea fuerza final</span></div>
          <p class="lead">${data.closing}</p>
        </div>
      </section>
      <p class="footer-note">Yanapakuy 2026 · Sesión ${data.number} sobre ${data.footerTheme}.</p>
    </main>
  `;

  const allDetails = Array.from(document.querySelectorAll("details"));
  document.getElementById("expandAll")?.addEventListener("click", () => allDetails.forEach((item) => { item.open = true; }));
  document.getElementById("collapseAll")?.addEventListener("click", () => allDetails.forEach((item) => { item.open = false; }));

  document.querySelectorAll(".timer").forEach((timer) => {
    const totalMinutes = Number(timer.dataset.minutes || 10);
    const totalSeconds = totalMinutes * 60;
    const clock = timer.querySelector(".clock");
    const bar = timer.querySelector(".bar > span");
    let remaining = totalSeconds;
    let interval = null;

    function render() {
      const min = Math.floor(remaining / 60);
      const sec = remaining % 60;
      clock.textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
      bar.style.width = `${(remaining / totalSeconds) * 100}%`;
    }

    function start() {
      if (interval) return;
      interval = setInterval(() => {
        if (remaining > 0) {
          remaining -= 1;
          render();
        } else {
          clearInterval(interval);
          interval = null;
        }
      }, 1000);
    }

    function pause() {
      clearInterval(interval);
      interval = null;
    }

    function reset() {
      clearInterval(interval);
      interval = null;
      remaining = totalSeconds;
      render();
    }

    timer.querySelector(".start")?.addEventListener("click", start);
    timer.querySelector(".pause")?.addEventListener("click", pause);
    timer.querySelector(".reset")?.addEventListener("click", reset);
    render();
  });
}

const sessionId = Number(document.body.dataset.session || "0");
if (window.YANAPAKUY_SESSIONS?.[sessionId]) {
  renderSession(window.YANAPAKUY_SESSIONS[sessionId]);
}
