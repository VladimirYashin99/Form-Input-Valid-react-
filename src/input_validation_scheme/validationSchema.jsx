import * as yup from 'yup';

export const fieldScheme = yup.object().shape({
	email: yup
		.string()
		.matches(
			/^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-z]+\.[a-z]{2,}$/,
			'Ошибка. Не верный формат email',
		),
	password: yup
		.string()
		.matches(
			/^[\w!@#$]+$/,
			'Ошибка. Пароль может содержать цифры, латинские буквы и симыолы "!@#$_"',
		)
		.min(5, 'Пароль должен быть больше 5 символов.')
		.max(15, 'Ошибка. Пароль должен быть не больше 15 символов')
		.required('Поле обязательно для заполнения'),
	repeatPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'Ошибка.Пароли должны совпадать')
		.required('Повторите пароль'),
});
