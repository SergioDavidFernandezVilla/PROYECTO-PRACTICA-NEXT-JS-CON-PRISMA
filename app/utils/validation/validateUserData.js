export const validateRegisterData = (email, password, username) => {

    //Guardar los errores que pasaron.
    const errors = [];

    // Validación del correo electrónico (no vacío y formato válido)
    if (!email) {

        errors.push({ field: 'email', message: 'No se ha ingresado un correo electrónico' });

    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push({ field: 'email', message: 'El formato del correo electrónico es inválido' });
    }

    // Validación de la contraseña (no vacía, longitud mínima y complejidad)
    if (!password) {
        errors.push({ field: 'password', message: 'No se ha ingresado una contraseña' });
    } else if (password.length < 8) {
        errors.push({ field: 'password', message: 'La contraseña debe tener al menos 8 caracteres' });

    } else if (!/[A-Z]/.test(password)) {
        errors.push({ field: 'password', message: 'La contraseña debe tener al menos una letra mayúscula' });

    } else if (!/[a-z]/.test(password)) {
        errors.push({ field: 'password', message: 'La contraseña debe tener al menos una letra minúscula' });

    } else if (!/\d/.test(password)) {
        errors.push({ field: 'password', message: 'La contraseña debe tener al menos un número' });
    }

    // Validación del nombre de usuario (no vacío y longitud mínima)
    if (!username) {
        errors.push({ field: 'username', message: 'No se ha ingresado un nombre de usuario' });

    } else if (username.length < 3) {
        errors.push({ field: 'username', message: 'El nombre de usuario debe tener al menos 3 caracteres' });
        
    }

    return errors;
}

export const validateLoginData = (email, password) => {
    const errors = []

     // Validación del correo electrónico (no vacío y formato válido)
     if (!email) {

        errors.push({ field: 'email', message: 'No se ha ingresado un correo electrónico' });

    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push({ field: 'email', message: 'El formato del correo electrónico es inválido' });
    }

    // Validación de la contraseña (no vacía, longitud mínima y complejidad)
    if (!password) {
        errors.push({ field: 'password', message: 'No se ha ingresado una contraseña' });
    }

    return errors;
}