function performPlayfairCipher(event) {
	event.preventDefault();

	const playfair_key = document.getElementById("txtKey").value;
	const plain_text = document.getElementById("txtPlainText").value;
	const cipher_text = document.getElementById("txtCipherText").value;

	if (plain_text !== undefined && plain_text !== null && plain_text !== "") {
		document.getElementById("txtCipherText").value = Module.encrypt_playfair(playfair_key, plain_text);
		document.getElementById("txtPlainText").value = "";
	} else if (cipher_text !== undefined && cipher_text !== null && cipher_text !== "") {
		document.getElementById("txtPlainText").value = Module.decrypt_playfair(playfair_key, cipher_text);
		document.getElementById("txtCipherText").value = "";
	} else {
		alert("Please specify either plain text or cipher text!");
	}
}

