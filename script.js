function checkKey() {
    const key = document.getElementById('access-key').value;
    if (key === "KEY_95726398756235") {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-page').style.display = 'block';
    } else {
        document.getElementById('error-msg').innerText = "INVALID ACCESS KEY";
    }
}

function showSection(sectionId) {
    const sections = ['maria', 'unknown', 'generator'];
    sections.forEach(s => {
        document.getElementById(s).style.display = s === sectionId ? 'block' : 'none';
    });
}

function generateUsername() {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789._';
    let result = '';
    for (let i = 0; i < 4; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('generated-name').innerText = result;
}