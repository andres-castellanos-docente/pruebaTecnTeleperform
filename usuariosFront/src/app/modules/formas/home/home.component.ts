import { Component, OnInit } from '@angular/core';
import {subirAnimation} from "../../../animations/listanim.animations";
import {HomeService} from "../../services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [subirAnimation]
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

}
