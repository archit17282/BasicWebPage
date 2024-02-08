const answers = [
    "Are maan ja na ?",
    "Dekh miss dior mere paas hai ",
    "Me perfume ki bottle khol lunga ",
    "Dekh momos khilwaonga ",
    "Chal saath me sharkukh ki veer zara bhi dikhwaonga ",
    "Please black heads bhi bina roye shaanti se nikal waonga ",
    "Tere isharo pe nachonga maan ja ?",
    "Gaadi chalana sikhaonga ",
    "Motu khush rakhunga ",
    "acha chal bina roye bartan jhaadu karunga ",
    "Saare petrol and resurant ke bill bachaonga ",
    "Karde Re Unblock",
    "Maan ja motu I love You : Happy Proposal Day",
    "Chalo waapis se puchte hai , Haar nahi manoga "
]

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 0;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/IMG3.jpg";
        refreshBanner();
    }
    clicks++;
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers.length;
    if (i < total - 1) {
        no_button.innerHTML = answers[i];
        i++;
    } else if (i === total - 1) {
        alert(answers[i]);
        i = 0;
        no_button.innerHTML = "No";
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "public/images/IMG4.jpg";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}