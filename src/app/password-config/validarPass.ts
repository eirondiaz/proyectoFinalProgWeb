import { FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms"

export const validarQueSeanIguales: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const newClave = control.get("newClave")
  const confirmClave = control.get("confirmClave")

  return newClave.value === confirmClave.value
    ? null
    : { noSonIguales: true }
}

