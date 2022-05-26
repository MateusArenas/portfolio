function buildComponent (html, props) {
    return html.replace(/\{\{([a-z0-9]+)\}\}/gi, (match, key) => props[key] || ' ');
  }

  function render (html, props) {
    return html.replace(/\{\{([a-z0-9]+)\}\}/gi, (match, key) => props[key] || ' ');
  }

  function require (url) {
    return new Promise((resolve, reject) => {
        $.get(url, function(data) { resolve(data) });
    })
  }

  function getData (url, dataType="json") {
    return new Promise((resolve, reject) => {
      $.ajax({
          dataType, url, headers: { "Access-Control-Allow-Origin": "*" },
          success: (data) => resolve(data),
          error: (err) => reject(err), 
        });
    })
  }

  async function getComponent (url, props) {
    const html = await getData(url, 'text');
    return buildComponent(html, props)
  }