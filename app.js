const email = 'mailto:roncoronald@gmail.com';

const nav = () => `
  <header class="site-header shell">
    <a class="mark" href="/" aria-label="Inicio">rr</a>
    <nav aria-label="Navegación principal">
      <a href="/casos">Casos de estudio</a>
      <a href="/#servicios">Cómo ayudo</a>
      <a href="/sobre-mi">Sobre mí</a>
      <a class="nav-cta" href="${email}">Hablemos</a>
    </nav>
  </header>`;

const footer = () => `
  <footer class="footer shell">
    <div><strong>Ronald Ronco</strong><span>Diseño de producto digital</span></div>
    <div class="footer-links"><a href="${email}">Email</a><a href="https://www.linkedin.com/in/ronaldronco/" target="_blank" rel="noreferrer">LinkedIn</a><a href="/sobre-mi">Sobre mí</a></div>
  </footer>`;

const sectionTitle = (label) => `<div class="section-label"><span>${label}</span><i></i></div>`;

function home() {
  return `${nav()}
  <main class="shell">
    <section class="hero">
      <p class="eyebrow">ronaldronco<br><span>diseñador de producto digital</span></p>
      <h1>Diseño productos digitales <em>claros, útiles y listos para crecer.</em></h1>
      <p class="lead">Ayudo a equipos con SaaS, apps y negocios digitales a convertir ideas confusas, flujos rotos y lanzamientos urgentes en experiencias que las personas entienden y los equipos pueden construir.</p>
      <div class="actions"><a class="button button-dark" href="${email}">Cuéntame qué necesitas</a><a class="button button-light" href="/casos">Ver casos de estudio</a></div>
    </section>

    <section class="content-section" id="servicios">
      ${sectionTitle('Qué resuelvo')}
      <p class="intro">No se trata de hacer pantallas bonitas. Se trata de tomar mejores decisiones de producto y convertirlas en una experiencia que funcione.</p>
      <div class="service-list">
        <article><h2>Cuando hay que lanzar algo nuevo</h2><p>Doy forma a la idea, organizo los flujos clave y diseño una experiencia lista para validar y construir.</p></article>
        <article><h2>Cuando el producto se volvió difícil de usar</h2><p>Detecto fricciones en recorridos, estructura y jerarquía para que las personas lleguen más rápido a lo importante.</p></article>
        <article><h2>Cuando el equipo necesita consistencia</h2><p>Creo sistemas de diseño y patrones reutilizables que reducen retrabajo y hacen que producto y desarrollo hablen el mismo idioma.</p></article>
      </div>
    </section>

    <section class="content-section">
      ${sectionTitle('Cómo trabajo')}
      <ol class="process-list">
        <li><h2>Entender el problema</h2><p>Alineamos objetivo de negocio, contexto del usuario, restricciones técnicas y qué tendría que cambiar para considerar el proyecto un éxito.</p></li>
        <li><h2>Encontrar una dirección clara</h2><p>Mapeo flujos, priorizo escenarios y convierto incertidumbre en decisiones de producto que el equipo pueda discutir y validar.</p></li>
        <li><h2>Diseñar y prototipar</h2><p>Construyo interfaces, estados y prototipos con la fidelidad necesaria para probar, decidir y comunicar.</p></li>
        <li><h2>Dejarlo listo para construir</h2><p>Entrego especificaciones, componentes y documentación para que desarrollo avance con menos dudas y el producto pueda escalar.</p></li>
      </ol>
    </section>

    <section class="content-section about-teaser">
      ${sectionTitle('Sobre mí')}
      <p class="intro">Soy Ronald Ronco, diseñador de producto digital. Trabajo con equipos que necesitan convertir problemas complejos en productos y experiencias más claras.</p>
      <a class="text-link" href="/sobre-mi">Conoce mi experiencia <span>↗</span></a>
    </section>
  </main>${footer()}`;
}

const cases = [
  { slug: 'propity', title: 'Propity', type: 'Producto inmobiliario', text: 'Una experiencia digital para ayudar a las personas a explorar, comparar y entender mejor sus opciones de vivienda.', className: 'case-visual propity-visual' },
  { slug: 'the-circle-club', title: 'The Circle Club', type: 'Marketplace para creadores', text: 'Una plataforma para conectar creadores de contenido con negocios y empresas.', className: 'case-visual circle-visual' },
  { slug: 'maria-francia', title: 'U.E. María Francia', type: 'Sistema contable escolar', text: 'Una herramienta para modernizar la gestión contable de una institución educativa.', className: 'case-visual school-visual' },
];

function casesPage() {
  return `${nav()}<main class="shell page-main"><div class="page-heading">${sectionTitle('Casos de estudio')}<h1>Problemas reales, decisiones de diseño y productos listos para avanzar.</h1><p>Una selección de proyectos donde trabajé entre objetivos de negocio, necesidades de usuario y posibilidades de desarrollo.</p></div><div class="case-grid">${cases.map(c => `<a class="case-card" href="/casos/${c.slug}"><div class="${c.className}"><span>${c.title}</span></div><div class="case-meta"><div><h2>${c.title}</h2><p>${c.type}</p></div><span class="arrow">↗</span></div><p>${c.text}</p></a>`).join('')}</div></main>${footer()}`;
}

function about() {
  return `${nav()}<main class="shell page-main about-page"><div class="page-heading">${sectionTitle('Sobre mí')}<h1>Soy Ronald Ronco, diseñador de producto digital.</h1><p>Trabajo con equipos que necesitan convertir problemas complejos en productos y experiencias más claras: desde una idea que necesita tomar forma hasta una plataforma que ya creció y empezó a generar fricción.</p><p>Mi trabajo conecta producto, UX/UI y desarrollo para que las decisiones de diseño ayuden al equipo a avanzar.</p></div><section class="content-section compact">${sectionTitle('Mi enfoque')}<h2 class="statement">Diseño para que el producto avance.</h2><p>Empiezo por entender qué necesita lograr el negocio, qué está dificultando el recorrido de las personas y qué restricciones tiene el equipo para construirlo. A partir de ahí, convierto la incertidumbre en flujos, interfaces y sistemas que permiten tomar decisiones con más claridad.</p></section><section class="content-section compact">${sectionTitle('Experiencia relevante')}<p>Mi experiencia combina producto digital, UI/UX, sistemas de diseño y branding digital. He trabajado en SaaS, aplicaciones web y móviles, ecommerce y proyectos de marca digital, colaborando con producto y desarrollo.</p><div class="timeline"><article><div><h2>Kiwi Company</h2><span>2024–2026</span></div><p>Diseñé experiencias end-to-end para productos SaaS, aplicaciones web y móviles. Organicé flujos, prototipos y arquitecturas de información; además, construí sistemas de diseño escalables.</p></article><article><div><h2>Trabajo independiente</h2><span>Actualidad</span></div><p>Colaboro con equipos y negocios digitales que necesitan lanzar nuevas experiencias, mejorar recorridos existentes o establecer una base de diseño más consistente.</p></article><article><div><h2>Onexfy</h2><span>2022</span></div><p>Participé en la modernización de una web app, diseñando pantallas y flujos en coordinación con UX, producto y desarrollo.</p></article></div></section><section class="content-section compact">${sectionTitle('Más allá del diseño')}<p>Vengo del diseño visual y el branding. Esa base me ayuda a cuidar la claridad, la identidad y la percepción de un producto sin perder de vista su utilidad.</p><p>Fuera del trabajo me interesan el fútbol, los videojuegos, el ejercicio y los espacios al aire libre.</p></section><section class="contact-block"><h2>¿Tu producto necesita claridad para avanzar?</h2><p>Conversemos sobre el problema antes de hablar de pantallas.</p><a class="button button-dark" href="${email}">Cuéntame el contexto de tu proyecto</a></section></main>${footer()}`;
}

function caseDetail(slug) {
  const c = cases.find(item => item.slug === slug) || cases[0];
  if (slug === 'propity') return `${nav()}<main class="shell page-main detail"><a class="back-link" href="/casos">← Todos los casos</a><div class="detail-heading">${sectionTitle(c.title)}<h1>Guiando su camino hacia un nuevo hogar.</h1><p>Propity es una experiencia digital para explorar, comparar y gestionar opciones inmobiliarias con más claridad.</p></div><div class="product-mock propity-mock"><div class="mock-top">Propity <span>Buscar propiedad</span><span>Iniciar sesión</span></div><div class="mock-hero"><small>Venta · Renta</small><strong>Encuentra un lugar<br>para llamar hogar.</strong><div class="search-box">¿Dónde quieres vivir? <b>Buscar</b></div></div><div class="mock-stats"><b>2.000<small>Empresas usando Propity</small></b><b>1.500<small>Usuarios conectados</small></b><b>1.450<small>Inmobiliarias activas</small></b></div></div><section class="detail-copy"><div><h2>El reto</h2><p>Convertir una gran cantidad de información inmobiliaria en un recorrido que ayudara a las personas a explorar opciones, comparar propiedades y avanzar con confianza.</p></div><div><h2>Mi rol</h2><p>Trabajé en la organización de la experiencia, la definición de flujos y el diseño de las interfaces principales del producto.</p></div><div><h2>Qué hice</h2><p>Definí jerarquías de información, diseñé recorridos de búsqueda y estructuré patrones para que la experiencia pudiera crecer sin perder claridad.</p></div></section><section class="detail-close"><h2>Un producto más claro para tomar mejores decisiones.</h2><a class="button button-dark" href="${email}">Hablemos de un reto similar</a></section></main>${footer()}`;
  return `${nav()}<main class="shell page-main detail"><a class="back-link" href="/casos">← Todos los casos</a><div class="detail-heading">${sectionTitle(c.title)}<h1>${c.title === 'The Circle Club' ? 'Diseñando desde cero una plataforma para conectar creadores con negocios.' : 'Modernizando una herramienta para que un equipo pueda trabajar con más claridad.'}</h1><p>${c.text}</p></div><section class="detail-copy"><div><h2>El reto</h2><p>${c.title === 'The Circle Club' ? 'Definir flujos comprensibles para dos públicos con necesidades distintas y establecer una base visual capaz de evolucionar.' : 'Mejorar una herramienta existente sin perder de vista las necesidades del equipo que la utilizaba cada día.'}</p></div><div><h2>Mi rol</h2><p>Diseñé la experiencia de producto en colaboración con stakeholders, producto y desarrollo.</p></div><div><h2>Qué hice</h2><p>Organicé la arquitectura de información, diseñé pantallas y estados, prototipé interacciones y construí componentes reutilizables.</p></div></section><section class="detail-close"><h2>Una base de producto más clara para alinear negocio, experiencia y desarrollo.</h2><a class="button button-dark" href="${email}">Hablemos de un reto similar</a></section></main>${footer()}`;
}

function render() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const html = path === '/' ? home() : path === '/casos' ? casesPage() : path === '/sobre-mi' ? about() : path.startsWith('/casos/') ? caseDetail(path.split('/')[2]) : home();
  document.querySelector('#app').innerHTML = html;
  const title = path === '/sobre-mi' ? 'Sobre mí — Ronald Ronco' : path.startsWith('/casos') ? 'Casos de estudio — Ronald Ronco' : 'Ronald Ronco — Diseño de producto digital';
  document.title = title;
  window.scrollTo(0, 0);
}

window.addEventListener('popstate', render);
document.addEventListener('click', event => { const link = event.target.closest('a'); if (!link || link.target === '_blank' || link.origin !== window.location.origin || link.href.startsWith('mailto:')) return; event.preventDefault(); history.pushState({}, '', link.pathname + link.hash); render(); });
render();
