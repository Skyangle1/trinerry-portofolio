//========= Efek mengetik untuk live preview =========
const lines = [
  "memuat... system.ok();",
  "menampilkan profil: Erry triranaya",
  "skills: Python | Docker | Kubernetes | Pentest | finance",
  "project: Automation CI/CD, Secure Web App",
  "status: available_for_hire"
];
let i = 0, pos = 0;
const speed = 28;
const lineEl = document.getElementById('line1');
const cursor = document.getElementById('cursor1');

function typeLoop(){
  if(i >= lines.length) { i = 0; }
  const current = lines[i];
  if(pos <= current.length){
    lineEl.textContent = current.slice(0, pos);
    pos++;
    setTimeout(typeLoop, speed);
  } else {
    // pause then delete
    setTimeout(() => deleteLoop(), 900);
  }
}

function deleteLoop(){
  const current = lines[i];
  if(pos > 0){
    pos--;
    lineEl.textContent = current.slice(0, pos);
    setTimeout(deleteLoop, 22);
  } else {
    i++;
    setTimeout(typeLoop, 200);
  }
}

// Mulai efek mengetik
typeLoop();

//========= Fungsi download PDF =========
function downloadPDF(){
  const url = 'cv-tri-nerry.pdf';
  window.open(url, '_blank') || alert('Pastikan file cv-tri-nerry.pdf ada di folder yang sama dengan index.html');
}

//========= Fungsi toggle tema =========
function toggleTheme(){
  const root = document.documentElement;
  if(root.style.getPropertyValue('--bg') === 'rgb(4, 6, 8)'){
    // lighten
    root.style.setProperty('--bg','#f5f7f8');
    root.style.setProperty('--panel','#ffffff');
    root.style.setProperty('--muted','#4b5563');
    root.style.setProperty('--accent','#006b5f');
    document.body.style.color = '#022';
  } else {
    root.style.setProperty('--bg','#040608');
    root.style.setProperty('--panel','#071018');
    root.style.setProperty('--muted','#8aa0a0');
    root.style.setProperty('--accent','#3be6b0');
    document.body.style.color = '#cfeee6';
  }
}