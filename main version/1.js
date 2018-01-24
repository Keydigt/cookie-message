// запуск после загрузки разметки
window.onload = function(){
	// Переменная со значением куки 'cookiemessage'
	var cookieMessageValue = document.cookie.replace(/(?:(?:^|.*;\s*)cookiemessage\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	
	// Проверяем значение куки 'cookiemessage'
	if (cookieMessageValue == 0) {
		// Если пуста, то показываем сообщение
		document.getElementById('cookie-message').style.display = 'block';
	} else if (cookieMessageValue == 1) {
		// Иначе скрываем сообщение
		document.getElementById('cookie-message').style.display = 'none';
	}
	
	// Проверяем действие закрытия сообщения
	document.getElementById('cookie-close').onclick = function() {
		// Скрываем сообщение и ставим куки 'cookiemessage=1'
		document.getElementById('cookie-message').style.display = 'none';
		document.cookie = "cookiemessage=1";
	}
};