//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice) //optional: just using to check its grabbing the date
  const url = `https://api.nasa.gov/planetary/apod?api_key=HZWLqnlkOKUaIRzp03JN2bz4cX5CExahcPCS1SWg&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        /* conditional bc NASA also offers video on select days instead of image */
        if(data.media_type === 'image' ){
          document.querySelector('#space').src = data.hdurl
        } else if (data.media_type === 'video') {
          document.querySelector('iframe').src = data.url
        }
        
        document.querySelector('p').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


const el = document.getElementById('toggler');

const hiddenDiv = document.getElementById('hidden-div');

// ✅ Show hidden DIV on hover
el.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv.style.visibility = 'hidden';
  // hiddenDiv.style.display = 'block';

  // 👇️ if you used visibility property to hide div
  // hiddenDiv.style.visibility = 'visible';
});

// ✅ (optionally) Hide DIV on mouse out
el.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv.style.visibility = 'visible';
  // hiddenDiv.style.display = 'none';

  // 👇️ if you used visibility property to hide div
  // hiddenDiv.style.visibility = 'hidden';
});