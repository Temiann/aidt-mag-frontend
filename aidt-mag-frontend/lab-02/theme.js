/* Ручное переключение темы.
   Читает текущую тему (из атрибута или системной настройки),
   инвертирует её, проставляет на <html> и сохраняет в localStorage.
   Синхронное применение сохранённого выбора при загрузке —
   в инлайновом скрипте в <head> (см. index.html). */
(function () {
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', function () {
    const root = document.documentElement;
    const current =
      root.dataset.theme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';

    root.dataset.theme = next;            // переопределяет системную тему
    localStorage.setItem('theme', next);  // запоминаем выбор между сессиями
  });
})();
