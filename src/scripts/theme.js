/*JS code for toggling between dark and light mode. Uses customized preline's markup */

function toggleTheme(options, defaultOptions) {
  const { currentTheme } = getToggleThemeElements();

  if (!currentTheme()) return;

  const themeToSet = currentTheme() === "light" ? "dark" : "light";

  document.body.setAttribute("data-theme", themeToSet);
  setToggler(options, defaultOptions);
}

function setToggler(options, defaultOptions) {
  // set button (svg) color
  const { toggleButtons, currentTheme, lightThemeSvgIcon, darkThemeSvgIcon } =
    getToggleThemeElements();

  let colorToSet;
  let contentToset;

  Array.from(toggleButtons).forEach((el) => {
    if (currentTheme() === "light") {
      colorToSet = options?.togglerLightColor ?? defaultOptions.togglerLightColor;
      contentToset = darkThemeSvgIcon;
    }
    if (currentTheme() === "dark") {
      colorToSet = options?.togglerDarkColor ?? defaultOptions.togglerDarkColor;
      contentToset = lightThemeSvgIcon;
    }

    el.innerHTML = contentToset;
    el.style.color = colorToSet;
  });
}

function getToggleThemeElements() {
  const toggleButtons = document.querySelectorAll("[data-theme-click]") ?? null;
  const currentTheme = () => document.body.getAttribute("data-theme") ?? null;

  const lightThemeSvgIcon = `<svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>`;

  const darkThemeSvgIcon = `<svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`;

  return { toggleButtons, currentTheme, lightThemeSvgIcon, darkThemeSvgIcon };
}

function useTheme(options = {}) {
  const defaultOptions = {
    togglerLightColor: "#ccc",
    togglerDarkColor: "#ffffff",
  };

  const { toggleButtons, currentTheme } = getToggleThemeElements();

  setToggler(options, defaultOptions);

  if (!toggleButtons.length) return;

  Array.from(toggleButtons).forEach((el) => {
    el.addEventListener("click", () => toggleTheme(options, defaultOptions));
  });

  return {
    toggle: () => toggleTheme(options, defaultOptions),
    currentTheme: currentTheme,
  };
}

document.addEventListener("DOMContentLoaded", () => {
  useTheme({
    togglerLightColor: "#c0c0c0",
    togglerDarkColor: "#ffffff",
  });
});
 