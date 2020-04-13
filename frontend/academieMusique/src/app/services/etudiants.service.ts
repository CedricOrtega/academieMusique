import { Injectable } from '@angular/core';
import { Etudiant } from '../models/Etudiant.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataTableEtudiantItem } from '../data-table-etudiant/data-table-etudiant-datasource';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {

  constructor(private http: HttpClient) { }

  private etudiants: Etudiant[] = [];
  public etudiants$ = new Subject<Etudiant[]>();

  emitEtudiants() {
    this.etudiants$.next(this.etudiants);
  }

  getEtudiant() {
    this.http.get('http://localhost:3000/api/etudiant').subscribe(
      (etudiants: Etudiant[]) => {
        if (etudiants) {
          this.etudiants = etudiants;
          this.emitEtudiants();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
  getEtudiantDataTable(): Observable<DataTableEtudiantItem[]> {
    return this.http.get<DataTableEtudiantItem[]>('http://localhost:3000/api/etudiant');
  }

  getEtudiantById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/etudiant/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  createNewEtudiant(etudiant: Etudiant) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/api/etudiant', etudiant).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  modifyEtudiant(id: string, etudiant: Etudiant) {
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost:3000/api/etudiant/' + id, etudiant).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  deleteEtudiant(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/api/etudiant/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

}
