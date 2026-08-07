// Telegram Web App obyekti
const tg = window.Telegram.WebApp;

// Iloovani to'liq ekran qilish
tg.expand();

// Foydalanuvchi ismini chiqarish
if(tg.initDataUnsafe && tg.initDataUnsafe.user) {
    document.getElementById('user-greeting').innerText = `Xush kelibsiz, ${tg.initDataUnsafe.user.first_name}!`;
}

// Tayyor kartalar bosilganda botga xabar yuborish
function sendToBot(text) {
    tg.sendData(text);
    tg.close(); // Mini App ni yopish
}

// Inputdagi matnni botga yuborish
function translateCustomText() {
    const text = document.getElementById('custom-text').value;
    if(text.trim() === "") {
        tg.showAlert("Iltimos, matn kiriting!");
        return;
    }
    tg.sendData(text);
    tg.close();
}
