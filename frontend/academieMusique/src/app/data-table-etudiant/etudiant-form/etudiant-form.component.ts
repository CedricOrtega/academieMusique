import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EtudiantsService } from 'src/app/services/etudiants.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Etudiant } from 'src/app/models/Etudiant.model';

@Component({
  selector: 'app-etudiant-form',
  templateUrl: './etudiant-form.component.html',
  styleUrls: ['./etudiant-form.component.scss']
})
export class EtudiantFormComponent implements OnInit {

  public etudiantForm: FormGroup
  public loading = false;
  public userId: string;
  public errorMessage: string;;

  constructor(private formBuilder: FormBuilder, private etudiantsService: EtudiantsService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.etudiantForm = this.formBuilder.group({
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
      dateNaissance: [null, Validators.required],
      emailTuteur: [null, Validators.required],
      courInstrument: [null, Validators.required],
      profId: [null, Validators.required],
      numeroTelephone: [null, Validators.required]
    });
    this.userId = this.auth.userId;
  }

  onSubmit() {
    this.loading = true;
    const etudiant = new Etudiant();
    etudiant.nom = this.etudiantForm.get('nom').value;
    etudiant.prenom = this.etudiantForm.get('prenom').value;
    etudiant.dateNaissance = this.etudiantForm.get('dateNaissance').value;
    etudiant.emailTuteur = this.etudiantForm.get('emailTuteur').value;
    etudiant.courInstrument = this.etudiantForm.get('courInstrument').value;
    etudiant.profId = this.etudiantForm.get('profId').value;
    etudiant.numeroTelephone = this.etudiantForm.get('numeroTelephone').value;
    etudiant.userId = this.userId;
    this.etudiantsService.createNewEtudiant(etudiant).then(
      () => {
        this.etudiantForm.reset();
        this.loading = false;
            this.router.navigate(['/etudiants ']);
      }
    ).catch(
      (error) => {
        this.loading = false;
        this.errorMessage = error.message;
      }
    );
  }

}
