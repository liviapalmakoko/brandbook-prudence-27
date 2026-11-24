/* Koko Design System · behaviour shared by every page: the theme switch, the windows, the side menu that follows
   the scroll, the columns of a table that do not jump, and the self-check of a page opened with ?conferir at the
   end of its address.
   A page works without this file; it only loses these conveniences. */
(function () {
  var raiz = document.documentElement;

  // Theme: every page opens in light. It turns dark only if the person chose it on this machine.
  function lerTema() {
    try { return localStorage.getItem('kk-tema') === 'escuro' ? 'escuro' : 'claro'; } catch (e) { return 'claro'; }
  }
  function aplicarTema(tema) {
    raiz.dataset.tema = tema;
    try { localStorage.setItem('kk-tema', tema); } catch (e) {}
  }
  raiz.dataset.tema = lerTema();

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-kk-tema]').forEach(function (botao) {
      botao.addEventListener('click', function () {
        aplicarTema(raiz.dataset.tema === 'escuro' ? 'claro' : 'escuro');
      });
    });

    // Windows: data-kk-abre="id" opens the <dialog>, data-kk-fecha closes it, and so does a click outside the box.
    document.addEventListener('click', function (e) {
      var abre = e.target.closest('[data-kk-abre]');
      if (abre) { var j = document.getElementById(abre.getAttribute('data-kk-abre')); if (j && j.showModal) j.showModal(); return; }
      var fecha = e.target.closest('[data-kk-fecha]');
      if (fecha) { var d = fecha.closest('dialog'); if (d) d.close(); return; }
      if (e.target.tagName === 'DIALOG' && e.target.classList.contains('kk-janela')) e.target.close();
    });

    // Tables: the width each column got from its content is fixed as the page opens, so that the columns do not jump
    // when a filter hides rows. On a phone the table is a list and there is nothing to fix.
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(function () {
      document.querySelectorAll('.kk-tabela:not(.kk-tabela--larga)').forEach(function (tabela) {
        var cabecas = Array.prototype.slice.call(tabela.querySelectorAll('thead th'));
        var total = tabela.getBoundingClientRect().width;
        var larguras = cabecas.map(function (th) { return th.getBoundingClientRect().width; });
        if (!cabecas.length || !total || !tabela.querySelector('tbody tr') || larguras.some(function (l) { return !l; })) return;
        cabecas.forEach(function (th, i) { th.style.width = (larguras[i] / total * 100).toFixed(2) + '%'; });
        tabela.style.tableLayout = 'fixed';
      });
    });

    if (/[?&]conferir\b/.test(location.search)) iniciarConferencia();
    iniciarMovimento();

    // Questions that open (details.kk-acordeao-item): the answer slides open and closed instead of jumping, and the
    // text comes up a little. With reduced motion the browser opens and closes it as usual.
    var calmo = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    Array.prototype.forEach.call(document.querySelectorAll('details.kk-acordeao-item'), function (item) {
      var pergunta = item.querySelector('summary'), corpo = item.querySelector('.kk-acordeao-corpo');
      if (!pergunta || !corpo || calmo || !item.animate) return;
      var andando = null, quer = item.open; // quer: the state the person asked for (a click in the middle of a slide turns it back)
      pergunta.addEventListener('click', function (e) {
        e.preventDefault();
        quer = !quer;
        var de = item.offsetHeight, fechado = pergunta.offsetHeight + (item.offsetHeight - item.clientHeight);
        if (andando) andando.cancel();
        item.style.overflow = 'hidden';
        if (quer) {
          item.open = true;
          corpo.getAnimations().forEach(function (x) { x.cancel(); });
          var ate = item.offsetHeight;
          andando = item.animate({ height: [de + 'px', ate + 'px'] }, { duration: 360, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' });
          corpo.animate({ opacity: [0, 1], transform: ['translateY(-6px)', 'none'] }, { duration: 320, delay: 60, easing: 'ease-out', fill: 'backwards' });
        } else {
          andando = item.animate({ height: [de + 'px', fechado + 'px'] }, { duration: 280, easing: 'cubic-bezier(0.4, 0, 0.6, 1)' });
          corpo.animate({ opacity: [1, 0] }, { duration: 180, easing: 'ease-in', fill: 'forwards' });
          andando.onfinish = function () { if (!quer) item.open = false; corpo.getAnimations().forEach(function (x) { x.cancel(); }); };
        }
        andando.addEventListener('finish', function () { item.style.overflow = ''; andando = null; });
        andando.addEventListener('cancel', function () { item.style.overflow = ''; });
      });
    });

    // Submenu: a [role="tab"] with aria-controls shows its panel and closes the panels of the other options of the
    // same menu; the arrow keys move between the options. Serves kk-abas, kk-fichas and kk-alternador.
    function escolher(aba, foco) {
      var lista = aba.closest('[role="tablist"]');
      if (!lista) return;
      Array.prototype.forEach.call(lista.querySelectorAll('[role="tab"]'), function (b) {
        var ativo = b === aba;
        b.setAttribute('aria-selected', ativo ? 'true' : 'false');
        b.tabIndex = ativo ? 0 : -1;
        var painel = b.getAttribute('aria-controls') && document.getElementById(b.getAttribute('aria-controls'));
        if (painel) painel.hidden = !ativo;
      });
      if (foco) aba.focus();
    }
    document.addEventListener('click', function (e) {
      var aba = e.target.closest && e.target.closest('[role="tab"]');
      if (aba) escolher(aba);
    });
    document.addEventListener('keydown', function (e) {
      var aba = e.target.closest && e.target.closest('[role="tab"]');
      if (!aba || ['ArrowRight', 'ArrowLeft', 'Home', 'End'].indexOf(e.key) === -1) return;
      var todas = Array.prototype.slice.call(aba.closest('[role="tablist"]').querySelectorAll('[role="tab"]'));
      var i = todas.indexOf(aba);
      var k = e.key === 'Home' ? 0 : e.key === 'End' ? todas.length - 1 : (i + (e.key === 'ArrowRight' ? 1 : -1) + todas.length) % todas.length;
      e.preventDefault();
      escolher(todas[k], true);
    });
    // the options that are not chosen leave the tab order (the arrows reach them)
    Array.prototype.forEach.call(document.querySelectorAll('[role="tablist"] [role="tab"]'), function (b) {
      b.tabIndex = b.getAttribute('aria-selected') === 'true' ? 0 : -1;
    });

    // Side menu and tabs of the top bar: both mark the section at the top of the screen. A clicked item stays
    // marked until the person scrolls.
    var itens = Array.prototype.slice.call(document.querySelectorAll('.kk-menu-item[href^="#"], .kk-nav-item[href^="#"]'));
    if (!itens.length) return;
    var secoes = [];
    itens.forEach(function (a) {
      var alvo = document.getElementById(a.getAttribute('href').slice(1));
      if (alvo && secoes.indexOf(alvo) === -1) secoes.push(alvo);
    });
    var topo = document.querySelector('.kk-topo');
    var travado = 0;
    function marcar(id) {
      itens.forEach(function (a) {
        var ativo = a.getAttribute('href') === '#' + id;
        a.classList.toggle('ativo', ativo);
        // a tab that is off the row (narrow screen) comes into view, without moving the page
        if (ativo && a.classList.contains('kk-nav-item')) {
          var fila = a.parentElement;
          if (a.offsetLeft < fila.scrollLeft || a.offsetLeft + a.offsetWidth > fila.scrollLeft + fila.clientWidth) fila.scrollLeft = a.offsetLeft - 16;
        }
      });
    }
    itens.forEach(function (a) {
      a.addEventListener('click', function () { marcar(a.getAttribute('href').slice(1)); travado = Date.now() + 900; });
    });
    function aoRolar() {
      if (Date.now() < travado) return;
      var limite = (topo ? topo.getBoundingClientRect().bottom : 0) + 60;
      var atual = secoes[0];
      secoes.forEach(function (s) { if (s.getBoundingClientRect().top <= limite) atual = s; });
      // at the very end of the page the last section may never reach the top: mark it anyway
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) atual = secoes[secoes.length - 1];
      if (atual) marcar(atual.id);
    }
    window.addEventListener('scroll', aoRolar, { passive: true });
    aoRolar();
  });

  /* Motion. A block with kk-anima gets kk--pronto (its start) and, when it shows on the screen, kk--visto (its end); the
     CSS of the kit animates between the two. The items of a kk-sequencia and the lines of a kk-manifesto-frase get
     their order in --i. Without IntersectionObserver, or with reduced motion in the system, nothing is hidden. */
  function iniciarMovimento() {
    var blocos = Array.prototype.slice.call(document.querySelectorAll('.kk-anima'));
    if (!blocos.length || !('IntersectionObserver' in window)) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var olho = new IntersectionObserver(function (vistos) {
      vistos.forEach(function (v) {
        if (!v.isIntersecting) return;
        v.target.classList.add('kk--visto');
        olho.unobserve(v.target);
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    blocos.forEach(function (b) {
      var ordem = b.classList.contains('kk-sequencia') ? Array.prototype.slice.call(b.children) : [];
      ordem = ordem.concat(Array.prototype.slice.call(b.querySelectorAll('.kk-manifesto-frase > span')));
      ordem.forEach(function (e, i) { if (!e.style.getPropertyValue('--i')) e.style.setProperty('--i', e.parentElement.classList.contains('kk-manifesto-frase') ? Array.prototype.indexOf.call(e.parentElement.children, e) : i); });
      b.classList.add('kk--pronto');
    });
    // the start has to be on the screen once before the end, or a block already in view would skip its motion
    void document.body.offsetHeight;
    requestAnimationFrame(function () { blocos.forEach(function (b) { olho.observe(b); }); });
  }

  /* Self-check. The page measures itself at the width it is open in and says, in a panel at the foot of the screen,
     what does not fit: a part wider than the screen or than its box, a text that spills over its part or ends in an
     ellipsis, a title with more than two lines and a title whose last line is one short word alone. The same result is left in
     window.kkConferencia and in <html data-kk-conferencia="certo|corrigir">, for a tool to read. */
  function iniciarConferencia() {
    var painel = document.createElement('div');
    painel.className = 'kk-conferencia';
    painel.setAttribute('role', 'status');
    document.body.appendChild(painel);

    function dizer(e) {
      var t = (e.textContent || '').replace(/\s+/g, ' ').trim();
      return t ? '"' + (t.length > 46 ? t.slice(0, 46) + '…' : t) + '"' : 'uma peça sem texto';
    }
    function rolaPorDentro(e) { // inside a strip that scrolls sideways on purpose: the menu on a phone, tabs, a wide table
      for (var p = e.parentElement; p && p !== document.body; p = p.parentElement) {
        var o = getComputedStyle(p).overflowX;
        if (o === 'auto' || o === 'scroll') return true;
      }
      return false;
    }
    function visivel(e) {
      if (e.closest('.kk-conferencia, .kk-fundo, .kk-icones, dialog:not([open])')) return false;
      var r = e.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    }
    function temTextoProprio(e) {
      for (var n = e.firstChild; n; n = n.nextSibling) if (n.nodeType === 3 && n.textContent.trim()) return true;
      return false;
    }
    function ultimaPalavraSozinha(t) {
      var no = t.lastChild;
      while (no && no.nodeType !== 3) no = no.lastChild;
      if (!no) return false;
      var texto = no.textContent.replace(/\s+$/, '');
      var corte = texto.lastIndexOf(' ');
      if (corte < 1 || t.textContent.trim().split(/\s+/).length < 3) return false;
      var antes = texto.lastIndexOf(' ', corte - 1) + 1;
      var faixa = document.createRange();
      faixa.setStart(no, corte + 1); faixa.setEnd(no, texto.length);
      var ultima = faixa.getBoundingClientRect();
      faixa.setStart(no, antes); faixa.setEnd(no, corte);
      var penultima = faixa.getBoundingClientRect();
      // alone and short: a long word that fills its line (a title of two balanced lines) is not the defect
      return ultima.top > penultima.top + 4 && ultima.width < 0.4 * t.getBoundingClientRect().width;
    }

    // The width of the screen, not of the page: when something is too wide, a phone widens the page to fit it.
    function larguraDaTela() {
      var v = window.visualViewport;
      return v ? Math.round(v.width * v.scale) : raiz.clientWidth;
    }
    // The panel stays at the foot of what the person is seeing, also when the page got wider than the screen.
    function posicionar() {
      var v = window.visualViewport;
      if (!v) return;
      painel.style.right = 'auto';
      painel.style.bottom = 'auto';
      painel.style.margin = '0';
      painel.style.width = Math.min(560, v.width - 24) + 'px';
      painel.style.left = (v.offsetLeft + (v.width - painel.offsetWidth) / 2) + 'px';
      painel.style.top = (v.offsetTop + v.height - painel.offsetHeight - 12) + 'px';
    }

    function medir() {
      var largura = larguraDaTela();
      var achados = [];
      var passa = [];
      Array.prototype.forEach.call(document.querySelectorAll('body *'), function (e) {
        if (!visivel(e)) return;
        if (passa.some(function (p) { return p.contains(e); })) return;
        var r = e.getBoundingClientRect();
        if ((r.right > largura + 1 || r.left < -1) && !rolaPorDentro(e)) passa.push(e);
      });
      passa.forEach(function (e) { achados.push({ tipo: 'Passa da largura da tela', texto: dizer(e) }); });

      // a text wider than the part that holds it: it either ends in an ellipsis or spills over the edge
      Array.prototype.forEach.call(document.querySelectorAll('body *'), function (e) {
        if (!visivel(e) || !temTextoProprio(e) || rolaPorDentro(e)) return;
        var cs = getComputedStyle(e);
        if (cs.display === 'inline' || /auto|scroll/.test(cs.overflowX)) return;
        if (e.scrollWidth > e.clientWidth + 1) {
          achados.push({ tipo: cs.textOverflow === 'ellipsis' ? 'Texto comprido demais, termina em reticências' : 'Texto que passa da borda da peça', texto: dizer(e) });
        }
      });

      // a part wider than the box it is in (the box of a table scrolls sideways on purpose and is left out)
      var CAIXAS = '.kk-box, .kk-aviso, .kk-linha, td, th';
      Array.prototype.forEach.call(document.querySelectorAll(CAIXAS), function (caixa) {
        if (!visivel(caixa) || rolaPorDentro(caixa) || /auto|scroll/.test(getComputedStyle(caixa).overflowX)) return;
        var c = caixa.getBoundingClientRect();
        var fora = Array.prototype.filter.call(caixa.querySelectorAll('*'), function (e) {
          if (!visivel(e) || !e.parentElement || e.parentElement.closest(CAIXAS) !== caixa) return false; // each part answers to the nearest box
          var r = e.getBoundingClientRect();
          return r.right > c.right + 1 || r.left < c.left - 1;
        })[0];
        if (fora) achados.push({ tipo: 'Peça que passa da borda do box', texto: dizer(fora) });
      });

      Array.prototype.forEach.call(document.querySelectorAll('.kk-h1, .kk-h2, .kk-h3'), function (t) {
        if (!visivel(t)) return;
        var linhas = Math.round(t.getBoundingClientRect().height / parseFloat(getComputedStyle(t).lineHeight));
        if (linhas > 2 && !t.classList.contains('kk-h3')) achados.push({ tipo: 'Título com mais de duas linhas', texto: dizer(t) });
        else if (linhas > 1 && ultimaPalavraSozinha(t)) achados.push({ tipo: 'Título com uma palavra sozinha na última linha', texto: dizer(t) });
      });

      var certo = achados.length === 0;
      window.kkConferencia = { largura: largura, tema: raiz.dataset.tema, certo: certo, achados: achados };
      raiz.dataset.kkConferencia = certo ? 'certo' : 'corrigir';
      painel.textContent = '';
      var titulo = document.createElement('strong');
      titulo.textContent = 'Conferência a ' + largura + ' px: ' + (certo ? 'tudo certo nesta largura' : achados.length + (achados.length === 1 ? ' ponto a corrigir' : ' pontos a corrigir'));
      painel.appendChild(titulo);
      if (!certo) {
        var lista = document.createElement('ul');
        achados.slice(0, 12).forEach(function (a) {
          var li = document.createElement('li');
          li.textContent = a.tipo + ': ' + a.texto;
          lista.appendChild(li);
        });
        painel.appendChild(lista);
      }
      posicionar();
    }

    var espera = 0;
    function agendar() { clearTimeout(espera); espera = setTimeout(medir, 150); }
    window.addEventListener('resize', agendar);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', posicionar);
      window.visualViewport.addEventListener('scroll', posicionar);
    }
    new MutationObserver(function (m) { if (m.some(function (x) { return !painel.contains(x.target); })) agendar(); })
      .observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden', 'class', 'open'] });
    new MutationObserver(agendar).observe(raiz, { attributes: true, attributeFilter: ['data-tema'] });
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(medir);
  }
})();
