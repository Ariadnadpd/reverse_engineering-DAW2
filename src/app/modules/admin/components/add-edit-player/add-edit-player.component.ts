import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Players } from '../interface/players';
import { PlayersService } from '../services/players/players.service';

@Component({
  selector: 'app-add-edit-player',
  templateUrl: './add-edit-player.component.html',
  styleUrls: ['./add-edit-player.component.scss']
})
export class AddEditPlayerComponent implements OnInit {

  detailsPlayerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required]),
    nationality: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    height: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]),
  });

  idPlayer!: number;
  action : string = 'agregar';
  closeModal!: string;
  actionDialog : string = "agregado";

  positionList : string[] = ['Portero', 'Defensa central','Lateral izquierdo', 'Lateral derecho', 
  'Pivote', 'Mediocentro', 'Mediocentro ofensivo', 'Extremo izquierdo', 'Extremo derecho', 'Delantero centro']; 

  constructor(
    private aRoute: ActivatedRoute,
    private router: Router,
    private playerService: PlayersService,
    private modalService: NgbModal) { 
     
    this.idPlayer = aRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.idPlayer !== undefined){
      this.action = 'editar';
      this.actionDialog = "editado";
      this.searchPlayer();
    }
  }

   // Method to search serie
   searchPlayer(){
    const player: Players = this.playerService.searchPlayer(this.idPlayer);
    
    this.detailsPlayerForm.patchValue({
      name: player.name,
      surname: player.surname,
      number: player.number,
      nationality: player.nationality,
      age: player.age,
      height: player.height,
      position: player.position,
    });
  }

  // Method to save player
  savePlayer(){
    const player: Players = {
      name: this.detailsPlayerForm.value.name,
      surname: this.detailsPlayerForm.value.surname,
      number: this.detailsPlayerForm.value.number,
      nationality: this.detailsPlayerForm.value.nationality,
      age: this.detailsPlayerForm.value.age,
      height: this.detailsPlayerForm.value.height,
      position: this.detailsPlayerForm.value.position,
    };
  
    if (this.idPlayer !== undefined) {
      this.editPlayer(player);
    } else {
      this.addPlayer(player);
    }
  }

   // Method to edit serie
  editPlayer(player: Players):void {
    this.playerService.editPlayer(player, this.idPlayer);    
    this.actionDialog = "editado";
    this.router.navigate(['admin/players']);
  }
   // Method to add serie
  addPlayer(player: Players):void{
    this.playerService.addPlayer(player);
    this.actionDialog = "agregado";
  }

  triggerModal(content: any) {
    if (this.detailsPlayerForm.invalid) {
      for (const control of Object.keys(this.detailsPlayerForm.controls)) {
        this.detailsPlayerForm.controls[control].markAsTouched();
      }
      return;
    }
    this.savePlayer();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      if(res == 'Ok click'){
        this.router.navigate(['admin/players']);
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
