
    function copyH2Text() {

      let h2Text = document.querySelector('h2').textContent;

      var tempTextArea = document.createElement('textarea');
      tempTextArea.value = h2Text;
      document.body.appendChild(tempTextArea);


      tempTextArea.select();
      tempTextArea.setSelectionRange(0, 99999); /* For mobile devices */


      document.execCommand('copy');


      document.body.removeChild(tempTextArea);


      alert('H2 text copied to clipboard: ' + h2Text);
    }
