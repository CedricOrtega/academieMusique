import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableEtudiantDataSource, DataTableEtudiantItem } from './data-table-etudiant-datasource';
import { Etudiant } from '../models/Etudiant.model';
import { Subscription } from 'rxjs';
import { EtudiantsService } from '../services/etudiants.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-data-table-etudiant',
  templateUrl: './data-table-etudiant.component.html',
  styleUrls: ['./data-table-etudiant.component.scss']
})
export class DataTableEtudiantComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<DataTableEtudiantItem>;
  dataSource: DataTableEtudiantDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nom', 'prenom','emailTuteur', 'numeroTelephone','courInstrument', 'modifyEtudiant'];

  public etudiants: Etudiant[] = [];
  public loading: boolean;

  private etudiantsSub: Subscription;

  constructor(private etudiantsService: EtudiantsService, private router: Router) { }

  ngOnInit() {
    this.dataSource = new DataTableEtudiantDataSource(this.etudiantsService);

    this.loading = true;
    this.etudiantsSub = this.etudiantsService.etudiants$.subscribe(
      (etudiants) => {
        this.etudiants = etudiants;
        this.loading = false;
      }
    );
    this.etudiantsService.getEtudiant();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

    //onEtudiantClicked(id: string) {
      //this.router.navigate(['/etudiant/' + id]);
  //}

  onNewEtudiant() {
    this.router.navigate(['/etudiants','new']);
  }

  onModifyEtudiant(id: string) {
    this.router.navigate(['/etudiants/modify/' + id]);
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
