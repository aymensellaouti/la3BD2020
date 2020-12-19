import { Component, Input, OnInit } from '@angular/core';
import { EmbaucheService } from 'src/app/embauches/services/embauche.service';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor(private embaucheService: EmbaucheService) {}

  ngOnInit(): void {}

  embaucher() {
    if (!this.embaucheService.embaucher(this.personne)) {
      alert('Personne déjà embauché');
    }
  }
}
