import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'
// export function forbiddenNameValidator(control: AbstractControl): ValidationErrors | null{
//     const forbidden = /admin/.test(control.value)
//     return forbidden ? { 'forbiddenName' : {value: control.value} } : null
// }

export function forbiddenNameValidator(patternToValidate: RegExp): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = patternToValidate.test(control.value)
        return forbidden ? {invalidWord : {value: control.value}} : null
        // return forbidden ? {invalidWord : true} : null
    }
}

export function passwordValidator (control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password && confirmPassword && password.value !== confirmPassword.value ? {mismatch: true} : null
}