
function render(...values) {
  
    return values.join('');
}


function oi () {
    return render`
        <p>oi<p/>
    `
}

console.log(oi())