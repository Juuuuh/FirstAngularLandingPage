import { Component } from '@angular/core';
import { Header } from "../header/header";
import { BtnPrimary } from "../btn-primary/btn-primary";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, BtnPrimary],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {}
