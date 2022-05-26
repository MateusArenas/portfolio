  function render (html, props) {
    return html.replace(/\{\{([a-z0-9]+)\}\}/gi, (match, key) => props[key] || ' ');
  }

  function buildProps (props) {
    if (Array.isArray(props.children)) {
      props.children = props.children.join('')
    }
    return props
  }

  function required (url) {
    return new Promise((resolve, reject) => {
        $.get(url, function(data) { 
          if (typeof data === 'object') {
            resolve(data) 
          } else {
            resolve(props => render(data, buildProps(props))) 
          }
        });
    })
  }