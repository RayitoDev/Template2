import type ValidationProps from '@/library/validations/types';
  
const isEmpty = (value: unknown): boolean => {
    return value == null || value === '' || (Array.isArray(value) && value.length === 0);
};
  
const required = (value: unknown, description: string): ValidationProps => {
    const isArray = Array.isArray(value);
    if (value == null || value === '' || (isArray && value.length === 0)) {
        return {
            isValid: false,
            error: true,
            helperText: `El campo ${description.replace('_', ' ')} es obligatorio`,
        };
    }
  
    return { isValid: true, error: false, helperText: '' };
};
  
const email = (value: string): ValidationProps => {
    if (isEmpty(value)) return { isValid: true, error: false, helperText: '' };
  
    if (!/\S+@\S+\.\S+/.test(value)) {
        return { isValid: false, error: true, helperText: 'El correo electrónico no es válido' };
    }
  
    return { isValid: true, error: false, helperText: '' };
};
  
const cp = (value: string): ValidationProps => {
    if (isEmpty(value)) return { isValid: true, error: false, helperText: '' };
  
    if (!/^\d{5}$/.test(value)) {
        return {
            isValid: false,
            error: true,
            helperText: 'El código postal debe tener 5 dígitos',
        };
    }
  
    return { isValid: true, error: false, helperText: '' };
};
  
const numeric = (value: string, description: string): ValidationProps => {
    if (isEmpty(value)) return { isValid: true, error: false, helperText: '' };
  
    if (!/^\d+$/.test(value)) {
        return {
            isValid: false,
            error: true,
            helperText: `El campo ${description.replace('_', ' ')} debe contener solo números`,
        };
    }
  
    return { isValid: true, error: false, helperText: '' };
};
  
const curp = (value: string, rfc: string): ValidationProps => {
    if (isEmpty(value)) return { isValid: true, error: false, helperText: '' };
  
    const regex = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
    const matched = value.match(regex);
    if (!matched) {
        return { isValid: false, error: true, helperText: 'El curp no es válido' };
    }
  
    const rfcWithoutHomoclave = rfc.slice(0, 10);
    const curpInitials = value.slice(0, 10);
    if (curpInitials !== rfcWithoutHomoclave) {
        return { isValid: false, error: true, helperText: 'El curp no coincide con el rfc' };
    }
  
    const calculateCheckDigit = (curp: string): number => {
        const dictionary = '0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        let sum = 0;
        for (let i = 0; i < 17; i++) {
            sum += dictionary.indexOf(curp.charAt(i)) * (18 - i);
        }
        const checkDigit = 10 - (sum % 10);
        return checkDigit === 10 ? 0 : checkDigit;
    };
  
    if (parseInt(matched[2]) !== calculateCheckDigit(matched[1])) {
        return { isValid: false, error: true, helperText: 'El curp no es válido' };
    }
  
    return { isValid: true, error: false, helperText: '' };
};
  
const rfc = (value: string): ValidationProps => {
    if (isEmpty(value)) return { isValid: true, error: false, helperText: '' };
  
    const regex = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
    const matched = value.match(regex);
    if (!matched) {
        return { isValid: false, error: true, helperText: 'El rfc no es válido' };
    }
  
    const checkDigit = matched.pop();
    const rfcWithoutCheckDigit = matched.slice(1).join('');
    const length = rfcWithoutCheckDigit.length;
    const dictionary = '0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ Ñ';
    let sum = length === 12 ? 0 : 481;
    const index = length + 1;
  
    for (let i = 0; i < length; i++) {
        sum += dictionary.indexOf(rfcWithoutCheckDigit.charAt(i)) * (index - i);
    }
  
    let expectedDigit: string | number = 11 - (sum % 11);
    if (expectedDigit === 11) expectedDigit = 0;
    else if (expectedDigit === 10) expectedDigit = 'A';
  
    if (checkDigit !== expectedDigit.toString()) {
        return { isValid: false, error: true, helperText: 'El rfc no es válido' };
    }
  
    return { isValid: true, error: false, helperText: '' };
};
  
const phone = (value: string): ValidationProps => {
    if (isEmpty(value)) return { isValid: true, error: false, helperText: '' };
  
    if (!/^\d{10}$/.test(value)) {
        return {
            isValid: false,
            error: true,
            helperText: 'El número de teléfono debe tener exactamente 10 dígitos',
        };
    }
  
    return { isValid: true, error: false, helperText: '' };
};
  
const minLength = (value: string, limit: number, description: string): ValidationProps => {
    if (!isEmpty(value) && value.length < limit) {
        return {
            isValid: false,
            error: true,
            helperText: `El campo ${description.replace('_', ' ')} debe tener al menos ${limit} caracteres.`,
        };
    }
    return { isValid: true, error: false, helperText: '' };
};
  
const maxLength = (value: string, limit: number, description: string): ValidationProps => {
    if (!isEmpty(value) && value.length > limit) {
        return {
            isValid: false,
            error: true,
            helperText: `El campo ${description.replace('_', ' ')} no debe tener más de ${limit} caracteres.`,
        };
    }
    return { isValid: true, error: false, helperText: '' };
};
  
const date = (value: string): ValidationProps => {
    if (isEmpty(value)) return { isValid: true, error: false, helperText: '' };
  
    if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(value)) {
        return { isValid: false, error: true, helperText: 'La fecha no es válido' };
    }
  
    return { isValid: true, error: false, helperText: '' };
};
  
const alphaSpaces = (value: string, description: string): ValidationProps => {
    if (isEmpty(value)) return { isValid: true, error: false, helperText: '' };
  
    if (!/^[\p{L}\s]+$/u.test(value)) {
        return {
            isValid: false,
            error: true,
            helperText: `El campo ${description.replace('_', ' ')} solo debe contener letras y espacios`,
        };
    }
  
    return { isValid: true, error: false, helperText: '' };
};
  
const year = (value: string, description: string): ValidationProps => {
    if (isEmpty(value)) return { isValid: true, error: false, helperText: '' };
  
    if (!/^\d{4}$/.test(value)) {
        return {
            isValid: false,
            error: true,
            helperText: `El campo ${description.replace('_', ' ')} debe ser un año válido`,
        };
    }
  
    const yearValue = parseInt(value, 10);
    const currentYear = new Date().getFullYear();
    if (yearValue < 1900 || yearValue > currentYear) {
        return {
            isValid: false,
            error: true,
            helperText: `El campo ${description.replace('_', ' ')} debe estar entre 1900 y ${currentYear}`,
        };
    }
  
    return { isValid: true, error: false, helperText: '' };
};
  
const yearCar = (value: string, description: string): ValidationProps => {
    if (isEmpty(value)) return { isValid: true, error: false, helperText: '' };
  
    if (!/^\d{4}$/.test(value)) {
        return {
            isValid: false,
            error: true,
            helperText: `El campo ${description.replace('_', ' ')} debe ser un año válido`,
        };
    }
  
    const yearValue = parseInt(value, 10);
    const currentYear = new Date().getFullYear();
    if (yearValue < 1900 || yearValue > currentYear + 1) {
        return {
            isValid: false,
            error: true,
            helperText: `El campo ${description.replace('_', ' ')} debe estar entre 1900 y ${currentYear + 1}`,
        };
    }
  
    return { isValid: true, error: false, helperText: '' };
};
  
const alphaNumeric = (value: string, description: string): ValidationProps => {
    if (isEmpty(value)) return { isValid: true, error: false, helperText: '' };
  
    if (!/^[a-zA-Z0-9]+$/.test(value)) {
        return {
            isValid: false,
            error: true,
            helperText: `El campo ${description.replace('_', ' ')} solo debe contener letras y números`,
        };
    }
  
    return { isValid: true, error: false, helperText: '' };
};
  
const boolean = (value: boolean, description: string): ValidationProps => {
    if (isEmpty(value)) return { isValid: true, error: false, helperText: '' };
  
    if (typeof value !== 'boolean') {
        return {
            isValid: false,
            error: true,
            helperText: `El campo ${description.replace('_', ' ')} debe ser un valor booleano`,
        };
    }
  
    return { isValid: true, error: false, helperText: '' };
};
  
const decimal = (
    value: string,
    totalDigits: number,
    decimalPlaces: number,
    description: string
): ValidationProps => {
    if (isEmpty(value)) return { isValid: true, error: false, helperText: '' };
  
    const regex = new RegExp(`^\\d{1,${totalDigits - decimalPlaces}}(\\.\\d{1,${decimalPlaces}})?$`);
    if (!regex.test(value)) {
        return {
            isValid: false,
            error: true,
            helperText: `El campo ${description.replace('_', ' ')} debe ser un número válido con hasta ${totalDigits - decimalPlaces} enteros y ${decimalPlaces} decimales`,
        };
    }
  
    return { isValid: true, error: false, helperText: '' };
};
  
export {
    required,
    email,
    cp,
    numeric,
    curp,
    rfc,
    phone,
    date,
    year,
    alphaSpaces,
    alphaNumeric,
    yearCar,
    boolean,
    decimal,
    minLength,
    maxLength,
};
  