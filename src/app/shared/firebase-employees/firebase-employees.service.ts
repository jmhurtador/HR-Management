import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseEmployeesService {
  constructor(public db: AngularFirestore) {}

  get(employeeId) {
    return this.db
      .collection('employees')
      .doc(employeeId)
      .snapshotChanges();
  }

  update(employeeId, value) {
    // value.nameToSearch = value.name.toLowerCase();
    return this.db
      .collection('employees')
      .doc(employeeId)
      .set(value);
  }

  delete(employeeId) {
    return this.db
      .collection('employees')
      .doc(employeeId)
      .delete();
  }

  getAll() {
    return this.db.collection('employees').snapshotChanges();
  }

  searchAll(searchValue) {
    return this.db
      .collection('employees', (ref) =>
        ref
          .where('nameToSearch', '>=', searchValue)
          .where('nameToSearch', '<=', searchValue + '\uf8ff'),
      )
      .snapshotChanges();
  }

  searchUsersByProject(projectId) {
    return this.db
      .collection('employees', (ref) =>
        ref.orderBy('projectId').startAt(projectId),
      )
      .snapshotChanges();
  }

  create(value) {
    return this.db.collection('employees').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      company: value.surname,
      age: Date.now() - value.birthday,
      birthday: value.birthday,
      favoriteColor: value.color,
      project: value.project,
    });
  }
}
