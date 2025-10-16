export const validateForm = (data) => {
	const errors = {};
	if (!/^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-z]+\.[a-z]{2,}$/.test(data.email)) {
		errors.email = 'Ошибка. Не верный формат email';
	}

	if (!/^[\w!@#$]+$/.test(data.password)) {
		errors.password =
			'Ошибка. Пароль может содержать цифры, латинские буквы и симыолы "!@#$_"';
	} else if (data.password.length > 15) {
		errors.password = 'Ошибка. Пароль должен быть не больше 15 символов';
	} else if (data.password.length < 5) {
		errors.password = 'Пароль должен быть больше 5 символов';
	}

	if (data.repeatPassword && data.password !== data.repeatPassword) {
		errors.repeatPassword = 'Ошибка. Пароли не совпадают.';
	}
	return errors;
};
