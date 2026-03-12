import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benefit',
  imports: [],
  templateUrl: './benefit.html',
  styleUrls: ['./benefit.scss'],
})
export class Benefit {
  @Input("img-path") imgPath: string = '';
  @Input("card-title") cardTitle: string = '';
  @Input("card-description") cardDescription: string = '';
}
