import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/Etudiant.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantsService } from 'src/app/services/etudiants.service';

@Component({
  selector: 'app-modify-etudiant',
  templateUrl: './modify-etudiant.component.html',
  styleUrls: ['./modify-etudiant.component.scss']
})
export class ModifyEtudiantComponent implements OnInit {

  etudiant: Etudiant;
  etudiantForm: FormGroup;
  loading = false;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private etudiantsService: EtudiantsService) { }

  ngOnInit() {
    this.loading = true;
    this.etudiantForm = this.formBuilder.group({
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
      dateNaissance: [null, Validators.required],
      emailTuteur: [null, Validators.required],
      courInstrument: [null, Validators.required],
      profId: [null, Validators.required],
      numeroTelephone: [null, Validators.required]
    });

    this.route.params.subscribe(
      (params) => {
        this.etudiantsService.getEtudiantById(params.id).then(
          (etudiant: Etudiant) => {
            this.etudiant = etudiant;
            this.etudiantForm.get('nom').setValue(this.etudiant.nom);
            this.etudiantForm.get('prenom').setValue(this.etudiant.prenom);
            this.etudiantForm.get('dateNaissance').setValue(this.etudiant.dateNaissance);
            this.etudiantForm.get('emailTuteur').setValue(this.etudiant.emailTuteur);
            this.etudiantForm.get('courInstrument').setValue(this.etudiant.courInstrument);
            this.etudiantForm.get('profId').setValue(this.etudiant.profId);
            this.etudiantForm.get('numeroTelephone').setValue(this.etudiant.numeroTelephone);
            this.loading = false;
          }
        );
      }
    );
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
    etudiant.userId = this.etudiant.userId;
    this.etudiantsService.modifyEtudiant(this.etudiant._id, etudiant).then(
      () => {
        this.etudiantForm.reset();
        this.loading = false;
        this.router.navigate(['/etudiants']);
      },
      (error) => {
        this.loading = false;
        this.errorMessage = error.message;
      }
    );
  }

}
