const encodeTextarea = document.getElementById('encode');
const decodeTextarea = document.getElementById('decode');

encodeTextarea.addEventListener('input', (e) => {
    decodeTextarea.value = encode(e.target.value);
});

decodeTextarea.addEventListener('input', (e) => {
    encodeTextarea.value = decode(e.target.value);
});

const encodeCopyButton = document.getElementById('encode-copy');
const decodeCopyButton = document.getElementById('decode-copy');

encodeCopyButton.addEventListener('click', (e) => {
    let confirmationIconName = '';
    if (encodeTextarea.value.length > 0) {
        navigator.clipboard.writeText(encodeTextarea.value);

        confirmationIconName = 'done';

        encodeCopyButton.classList.add('green-border');
    } else {
        confirmationIconName = 'close';

        encodeCopyButton.classList.add('red-border');
    }

    const defaultIconName = encodeCopyButton.textContent;
    encodeCopyButton.textContent = confirmationIconName;
    setTimeout(() => {
        encodeCopyButton.textContent = defaultIconName;

        encodeCopyButton.classList.remove('green-border');
        encodeCopyButton.classList.remove('red-border');
    }, 500);
});

decodeCopyButton.addEventListener('click', (e) => {
    let confirmationIconName = '';
    if (decodeTextarea.value.length > 0) {
        navigator.clipboard.writeText(decodeTextarea.value);

        confirmationIconName = 'done';
        
        decodeCopyButton.classList.add('green-border');
    } else {
        confirmationIconName = 'close';

        decodeCopyButton.classList.add('red-border');
    }
    
    const defaultIconName = decodeCopyButton.textContent;
    decodeCopyButton.textContent = confirmationIconName;
    setTimeout(() => {
        decodeCopyButton.textContent = defaultIconName;

        decodeCopyButton.classList.remove('green-border');
        decodeCopyButton.classList.remove('red-border');
    }, 500);
});