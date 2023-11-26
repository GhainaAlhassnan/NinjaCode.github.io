
      function sortDivs() {
        var container = document.querySelector('.container');
        var divs = container.querySelectorAll('.card');
        var divsArray = Array.from(divs);
    
        var order = document.getElementById('orderDropdown').value;
    
        // Define the custom order
        var customOrder = [
          "Norah Alghamdi",
          "Sarah Albadr",
          "Yasmin Ahmed",
          "Mohammed Alothman",
          "Salman Almutairi",
          "Mishal Alotaibi"
        ];
    
        // Function to get index in custom order or default alphabetical order
        function getIndex(name) {
          var index = customOrder.indexOf(name);
          return index !== -1 ? index : name.localeCompare(name);
        }
    
        // Use the custom order for sorting
        divsArray.sort(function (a, b) {
          var textA = a.querySelector('h1').innerText.trim();
          var textB = b.querySelector('h1').innerText.trim();
    
          if (order === 'asc') {
            // A to Z case: Use English alphabetical order
            return textA.localeCompare(textB);
          } else if (order === 'desc') {
            // Z to A case: Use reverse alphabetical order
            return textB.localeCompare(textA);
          } else {
            // Default case: Use custom order
            return getIndex(textA) - getIndex(textB);
          }
        });
    
        // Rearrange the elements in the container
        divsArray.forEach(function (div) {
          container.appendChild(div);
        });
      }
  
