import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Etudiant } from '../models/Etudiant.model';
import { EtudiantsService } from '../services/etudiants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.scss']
})
export class EtudiantListComponent implements OnInit, OnDestroy {

  public etudiants: Etudiant[] = [];
  public loading: boolean;

  private etudiantsSub: Subscription;


  constructor(private etudiantsService: EtudiantsService, private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.etudiantsSub = this.etudiantsService.etudiants$.subscribe(
      (etudiants) => {
        this.etudiants = etudiants;
        this.loading = false;
      }
    );
    this.etudiantsService.getEtudiant();
  }

  //onEtudiantClicked(id: string) {
      //this.router.navigate(['/etudiant/' + id]);
  //}

  onNewEtudiant() {
    this.router.navigate(['/etudiants','new']);
  }

  onDeleteEtudiant(etudiant: Etudiant) {
    this.loading = true;
    this.etudiantsService.deleteEtudiant(etudiant._id).then(
      () => {
        this.loading = false;
        this.router.navigate(['/etudiants']);
      }
    );
  }

  ngOnDestroy() {
    this.etudiantsSub.unsubscribe();
  }

}
