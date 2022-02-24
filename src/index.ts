/*
* 1. Make Tailwind-CSS globally accessible
* 
* This approach seems to be okay facing the following sentence:
* "Many modern browsers implement an optimization for <style> tags either cloned from a common node or that have identical text, to allow them to share a single backing stylesheet.
* With this optimization the performance of external and internal styles should be similar." (See: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#internal_vs._external_styles)
*/

import { css, unsafeCSS } from 'lit';
import classes from './styles/tailwind.css'
export const tailwind = css`${unsafeCSS(classes)}`;

/*
* 2. Import components dynamically
*/
const modules = import.meta.glob('./components/**/!(*.stories).ts')

const moduleArray = ([] as { name: string, path: string }[]);

for (const path in modules) {
  const fileName = path.split('/').slice(-1)[0].split('.')[0];
  moduleArray.push({
    name: fileName,
    path: path
  });
}

const registerAvailableComponents = () => {
  // Debugging: Check performance
  const start = Date.now();
  moduleArray.forEach((module) => {
    // Check if Custom Element is already registered
    if (customElements.get(module.name)) return;

    // Check if one of the elements is in DOM
    if (document.getElementsByTagName(module.name).length === 0) return;

    // Import Custom Element definitions
    modules[module.path]().then(() => {
      console.log(`${module.name} connected`);
    })
  })

  // Debugging: Check performance
  console.log(Date.now() - start)
}

// Initially check server rendered components
registerAvailableComponents();

// Look if new elements are added dynamically in main DOM
const observer = new MutationObserver(function () {
  registerAvailableComponents();
});

observer.observe(document, { subtree: true, childList: true });
