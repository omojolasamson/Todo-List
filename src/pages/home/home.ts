import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, App } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  taskName: string;
  taskList = [];
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public afAuth: AngularFireAuth, public app: App, public firestore: AngularFirestore) {}

  @ViewChild('taskInput') input;

  ionViewDidLoad(){
    setTimeout(() => {
        this.input.setFocus();
    },350);

    this.afAuth.authState.subscribe(user => {
      if (user) {
          this.userId = user.uid;
          this.fireStoreTaskList = this.firestore.doc<any>('users/' + this.userId).collection('tasks').valueChanges();
          this.fireStoreList = this.firestore.doc<any>('users/' + this.userId).collection('tasks');
      }
  });
}

  addTask() {
        if (this.taskName.length > 0) {
          let id = this.firestore.createId();
          this.fireStoreList.doc(id).set({
              id: id,
              taskName: task
          });
          this.taskName = "";
          this.input.setFocus();
        }
    }

    logout() {
      return this.afAuth.auth.signOut().then(authData => {
          this.app.getRootNav().setRoot(LoginPage);
      });
    }

  deleteTask(index){
      this.taskList.splice(index, 1);
  }
  updateTask(index) {
    let alert = this.alertCtrl.create({
        title: 'Update Task?',
        message: 'Type in your new task to update.',
        inputs: [{ name: 'editTask', placeholder: 'Task' }],
        buttons: [{ text: 'Cancel', role: 'cancel' },
                  { text: 'Update', handler: data => {
                      this.taskList[index] = data.editTask; }
                  }
                 ]
    });
    alert.present();
}

}
