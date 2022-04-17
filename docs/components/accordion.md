# Accordion

`<tailit-accordion>`

<script type="module">
  import 'api-viewer-element';
</script>

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
</api-viewer>
