<template>
<div v-html="rawHtml">
</div>
</template>


<script setup>

  var components = document.createElement('script');
    components.type = 'module';
    components.src = './tailit-components.es.js';  

  var viewer = document.createElement('script');
    viewer.type = 'module';
    viewer.src = 'https://cdn.skypack.dev/api-viewer-element';    

    document.head.appendChild(components);
    document.head.appendChild(viewer);

  const rawHtml = `
  <api-viewer src="./custom-elements.json" section="demo" selected="tailit-button">
    <template data-element="tailit-button" data-target="slot">
      Hello!
    </template>
    <template data-element="tailit-button" data-target="knob" data-attr="coloring" data-type="select">
      <select>
        <option value="primary"></option>
        <option value="secondary"></option>
        <option value="neutral"></option>
      </select>
    </template>
  </api-viewer>`
</script>
