// Make Tailwind-CSS globally accessible
import classes from './styles/tailwind.css'
export const styles = classes;

const modules = import.meta.glob('./components/**/!(*.stories).ts')

for (const path in modules) {
  modules[path]().then((mod) => {
    console.log(path, mod)
  })
}
