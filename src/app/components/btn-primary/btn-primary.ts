import { Component, Input, Output, EventEmitter } from '@angular/core';


type BtnVariant = "primary" | "secondary";

@Component({
  standalone: true,
  selector: 'btn-primary',
  imports: [],
  templateUrl: './btn-primary.html',
  styleUrls: ['./btn-primary.scss'],
})
export class BtnPrimary {
  @Output("submit") onSubmit = new EventEmitter();

  @Input("btn-text") btnText: string = "";
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() variant: BtnVariant = "primary";

  submit() {
    if (!this.disabled) {
      this.onSubmit.emit();
    }
  }
}
