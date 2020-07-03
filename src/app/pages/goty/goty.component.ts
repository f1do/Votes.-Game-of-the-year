import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  games: Game[] = [];

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.gameService.getNominates().subscribe(games => {
      this.games = games;
    });
  }

  voteGame(id: string) {
    this.gameService.voteGame(id).subscribe((res: { ok: boolean, message: string }) => {
      if (res.ok) {
        Swal.fire('Thanks', res.message, 'success');
      } else {
        Swal.fire('Oops...', res.message, 'error');
      }
    });
  }

}
