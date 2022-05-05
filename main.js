
const menu = ['Open', null, 'Delete', 'Info', 'Rename', 'Duplicate',null,  'Copy', 'Paste', null, 'Properties']

document.addEventListener('contextmenu', (e) => {

  // prevent the default context menu 
  e.preventDefault();

  const context = document.querySelector('#context');
  context.innerHTML = `<ul>`;

  menu.forEach(item => { 
    if (item) context.innerHTML += `<li> ${item}</li>`
    else context.innerHTML+=`<hr>`
  })
  context.innerHTML += `</ul>`
  context.style.top = '0';

  context.style.display = 'block';
  context.style.position = 'absolute';

  if (e.clientY + context.clientHeight >= screen.height) {
    context.style.top = e.clientY - context.clientHeight +'px';
  } else { 
    context.style.top = e.clientY + "px";
  }

  if (e.clientX + context.clientWidth >= screen.width) {
    context.style.left = e.clientX - context.clientWidth + 'px';
  } else { 
  context.style.left = e.clientX + "px";
  }
})
 
document.addEventListener('click', (e) => { 
  document.querySelector('#context').style.display = 'none';
})