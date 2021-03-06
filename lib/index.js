
function render (html, props) {
    return html.replace(/\{\{([a-z0-9]+)\}\}/gi, (match, key) => props[key] || ' ');
  }

  function buildProps (props) {
    if (Array.isArray(props.children)) {
      props.children = props.children.join('')
    }
    return props
  }



require.extensions['.html'] = function (module, filename) {
    const html = require('fs').readFileSync(filename, 'utf8');

    module.exports = props => render(html, buildProps(props))
};

module.exports = { 
  buildHTML: async (file, html) => require('fs').promises.writeFile(file, html),
  useRequireComponents: (extension = '.html') => {
    require.extensions[extension] = function (module, filename) {
      const html = require('fs').readFileSync(filename, 'utf8');
  
      module.exports = props => render(html, buildProps(props))
  };
  }
}