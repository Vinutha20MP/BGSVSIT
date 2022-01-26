document.getElementById('filterInput').addEventListener('keyup', () => {
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    let ul = document.getElementById('names');
    let li = ul.querySelectorAll('li.collection-item');
    let li1 = ul.querySelectorAll('li.collection-header');
    li.forEach(item => {
      let a = item.getElementsByTagName('a')[0];
      let b = item.getElementsByTagName('h5')[0];
      item.style.display = a.innerHTML.toUpperCase().startsWith(filterValue) ? 'block' : 'none';
    })
    li1.forEach(item => {
      let b = item.getElementsByTagName('h5')[0];
      item.style.display = b.innerHTML.toUpperCase().startsWith(filterValue.charAt(0)) ? 'block' : 'none';
    })
  });

