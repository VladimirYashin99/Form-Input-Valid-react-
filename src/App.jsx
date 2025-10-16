import style from './app.module.css';
import { useState } from 'react';
import { validateForm } from './funtion/functionValidationForm';
const sendFormData = (formData) => {
	console.log(formData);
};

export const App = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		repeatPassword: '',
	});

	const [errors, setErrors] = useState({});

	const { email, password, repeatPassword } = formData;

	const onSubmit = (event) => {
		event.preventDefault();
		sendFormData(formData);
	};

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		const newFormData = { ...formData, [name]: value };

		setFormData(newFormData);

		const validErrors = validateForm(newFormData);
		setErrors(validErrors);
	};

	const isFormInvalid = !!errors.email || !!errors.password || !!errors.repeatPassword;

	return (
		<div className={style.formData}>
			<form onSubmit={onSubmit}>
				<input
					name="email"
					placeholder="Введите вашу почту"
					type="text"
					value={email}
					onChange={handleChange}
				/>
				{errors.email && <div className={style.error}>{errors.email}</div>}
				<input
					name="password"
					placeholder="Введите ваш пароль"
					type="text"
					value={password}
					onChange={handleChange}
				/>
				{errors.password && <div className={style.error}>{errors.password}</div>}
				<input
					name="repeatPassword"
					placeholder="Повторите пароль"
					type="text"
					value={repeatPassword}
					onChange={handleChange}
				/>
				{errors.repeatPassword && (
					<div className={style.error}>{errors.repeatPassword}</div>
				)}
				<button
					type="submit"
					className={style.buttonSubmit}
					disabled={isFormInvalid}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
