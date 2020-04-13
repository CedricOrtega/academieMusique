import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { EtudiantsService } from '../services/etudiants.service';

// TODO: Replace this with your own data model type
export interface DataTableEtudiantItem {
  nom: string;
  prenom: string;
  emailTuteur: string;
  numeroTelephone: string;
  courInstrument: string;
}


/**
 * Data source for the DataTableEtudiant view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableEtudiantDataSource extends DataSource<DataTableEtudiantItem> {
  data: DataTableEtudiantItem[];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private etudiantsService: EtudiantsService) {
    super();
    this.etudiantsService.getEtudiantDataTable().subscribe((res)=>{
      console.log(res);
      this.data = res;
    });
  }

  
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableEtudiantItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableEtudiantItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableEtudiantItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nom': return compare(a.nom, b.nom, isAsc);
        case 'prenom': return compare(a.prenom, b.prenom, isAsc);
        case 'emailTuteur': return compare(a.emailTuteur, b.emailTuteur, isAsc);
        case 'numeroTelephone': return compare(a.numeroTelephone, b.numeroTelephone, isAsc);
        case 'courInstrument': return compare(a.courInstrument, b.courInstrument, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
