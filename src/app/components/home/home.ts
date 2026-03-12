import { Component } from '@angular/core';
import { Header } from "../header/header";
import { BtnPrimary } from "../btn-primary/btn-primary";
import { NewsletterForm } from "../newsletter-form/newsletter-form";
import { Benefit } from "../benefit/benefit";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, BtnPrimary, NewsletterForm, Benefit],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {}
