// eslint-disable-next-line import/no-extraneous-dependencies
import chokidar from 'chokidar';
import fs from 'fs';

chokidar
  .watch('./src/**/*.hbs', { persistent: true })
  .on('all', () => {
    // console.log(event, path);

    fs.writeFileSync(
      './src/styles/tailwind.css',
      fs.readFileSync('./src/styles/tailwind.css', 'utf8'),
    );
  });
