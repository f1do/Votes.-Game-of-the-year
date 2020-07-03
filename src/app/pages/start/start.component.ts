import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interface';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  games: any[] = [];
  constructor(
    public db: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.db.collection('goty').valueChanges()
      .pipe(
        map((resp: Game[]) => resp.map(({ name, votes }) => ({ name, value: votes })))
      )
      .subscribe(games => {
        //console.log(games);
        this.games = games;
      });
  }

}
