function abrirModal(caminho) {
    const modal = document.getElementById("modalCert");
    const img = document.getElementById("imgFull");
    modal.style.display = "flex";
    img.src = caminho;
}

function fecharModal() {
    document.getElementById("modalCert").style.display = "none";
}

// Fecha com a tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") fecharModal();
});