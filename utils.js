const fs = require('fs');


function render (html, props) {
    return html.replace(/\{\{([a-z0-9]+)\}\}/gi, (match, key) => props[key] || ' ');
  }

  function buildProps (props) {
    if (Array.isArray(props.children)) {
      props.children = props.children.join('')
    }
    return props
  }

  async function required (url) {
    const data = await get(url);
    if (typeof data === 'object') {
        return data
    } else {
      console.log('aqui');
        return props => render(data, buildProps(props))
    }
  }

  async function get (path) {
    const text = await fs.promises.readFile(path, { encoding: 'utf8' })
    return text
  }

  module.exports ={
      render, required, get, buildProps
  }