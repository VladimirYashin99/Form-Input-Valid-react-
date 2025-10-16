import style from './app.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { fieldScheme } from './input_validation_scheme/validationSchema'


const onSubmit = (formData) => {
	console.log(formData);
};


export const App = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
			repeatPassword: '',
		},
		resolver: yupResolver(fieldScheme),
	});

	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const repeatPasswordError = errors.repeatPassword?.message;

	return (
		<div className={style.formData}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					placeholder="Введите вашу почту"
					type="text"
					{...register('email')}
				/>
				{emailError && <div className={style.error}>{emailError}</div>}
				<input
					placeholder="Введите ваш пароль"
					type="text"
					{...register('password')}
				/>
				{passwordError && <div className={style.error}>{passwordError}</div>}

				<input
					placeholder="Повторите пароль"
					type="text"
					{...register('repeatPassword')}
				/>
				{repeatPasswordError && (
					<div className={style.error}>{repeatPasswordError}</div>
				)}
				<button type="submit" className={style.buttonSubmit} disabled={!isValid}>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};

