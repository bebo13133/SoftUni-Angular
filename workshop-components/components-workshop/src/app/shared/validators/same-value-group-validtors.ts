import { FormGroup, ValidatorFn } from "@angular/forms";

export function sameValueGroupValidator(control1: string, control2: string): ValidatorFn {
    return (control) => {
        const group = control as FormGroup
        const ctr1 = group.get(control1)
        const ctr2 = group.get(control2)
        return ctr1?.value === ctr2?.value ? null : { sameValueGroupValidator: true }
    }

}