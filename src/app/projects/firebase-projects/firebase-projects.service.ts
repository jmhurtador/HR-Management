import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseProjectsService {
  constructor(public db: AngularFirestore) {}

  get(projectId) {
    return this.db
      .collection('projects')
      .doc(projectId)
      .snapshotChanges();
  }

  update(projectId, value) {
    // value.nameToSearch = value.name.toLowerCase();
    return this.db
      .collection('projects')
      .doc(projectId)
      .set(value);
  }

  delete(projectId) {
    return this.db
      .collection('projects')
      .doc(projectId)
      .delete();
  }

  getAll() {
    return this.db.collection('projects').snapshotChanges();
  }

  searchAll(searchValue) {
    return this.db
      .collection('projects', (ref) =>
        ref
          .where('nameToSearch', '>=', searchValue)
          .where('nameToSearch', '<=', searchValue + '\uf8ff'),
      )
      .snapshotChanges();
  }

  create(value) {
    return this.db.collection('projects').add({
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
