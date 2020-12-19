import { Component, OnInit } from '@angular/core';
import { Personne } from '../cv/Model/personne';
import { EmbaucheService } from './services/embauche.service';

@Component({
  selector: 'app-embauches',
  templateUrl: './embauches.component.html',
  styleUrls: ['./embauches.component.css']
})
export class EmbauchesComponent implements OnInit {
  embauchees: Personne[] = [];
  constructor(
    private embaucheService: EmbaucheService
  ) { }

  ngOnInit(): void {
    this.embauchees = this.embaucheService.getEbauchees();
  }



}
