import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Players } from '../interface/players';
import { PlayersService } from '../services/players/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  playersList!:Array<Players>;
  closeModal!: string;
  playerDelete!: any;

  constructor(
    private playerService: PlayersService, 
    private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadPlayers();
  }

  // Method to load players
  loadPlayers():void {
    this.playersList = this.playerService.getPlayers();
  }

  // Method to open modal and delete player
  triggerModal(content: any, player: any, indice: number) {
    this.playerDelete = player;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      if(res == 'Ok click'){
        this.playerService.deletePlayer(indice);
        this.loadPlayers();
      }
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
