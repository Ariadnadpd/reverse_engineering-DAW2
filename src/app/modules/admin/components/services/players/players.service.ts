import { Injectable } from '@angular/core';
import { Players } from '../../interface/players';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  playerList: Array<Players> = [
    {name: "Yassine", surname: "Bounou", number: 13, nationality: "Marruecos", age: 31, height: Number(1.92), position: "Portero"}, 
    {name: "Marko", surname: "Dmitrovic", number: 1, nationality: "Serbia", age: 30, height: Number(1.94), position: "Portero"},
    {name: "Javier", surname: "Díaz Sánchez", number: 31, nationality: "España", age: 24, height: Number(1.85), position: "Portero"},
    {name: "Alfonso", surname: "Pastor Vacas", number: 33, nationality: "España", age: 22, height: Number(1.89), position: "Portero"},
    {name: "Jules Olivier", surname: "Koundé", number: 23, nationality: "Francia", age: 23, height: Number(1.78), position: "Defensa central"},
    {name: "Diego Carlos", surname: "Santana Silva", number: 20, nationality: "Brasil", age: 29, height: Number(1.85), position: "Defensa central"},
    {name: "Karim", surname: "Rekik", number: 4, nationality: "Países Bajos", age: 27, height: Number(1.86), position: "Defensa central"},
    {name: "Marcos Javier", surname: "Acuña", number: 19, nationality: "Argentina", age: 30, height: Number(1.72), position: "Lateral izquierdo"},
    {name: "Ludwig", surname: "Augustinsson", number: 3, nationality: "Suecia", age: 28, height: Number(1.81), position: "Lateral izquierdo"},
    {name: "Gonzalo Ariel", surname: "Montiel", number: 2, nationality: "Argentina", age: 25, height: Number(1.76), position: "Lateral derecho"},
    {name: "Jesús", surname: "Navas González", number: 16, nationality: "España", age: 36, height: Number(1.72), position: "Lateral derecho"},
    {name: "Thomas", surname: "Delaney", number: 18, nationality: "Dinamarca", age: 30, height: Number(1.82), position: "Pivote"},
    {name: "Nemanja", surname: "Gudelj", number: 6, nationality: "Serbia", age: 30, height: Number(1.87), position: "Pivote"},
    {name: "Fernando", surname: "Francisco Reges", number: 25, nationality: "Brasil", age: 34, height: Number(1.83), position: "Pivote"},
    {name: "Joan", surname: "Jordán", number: 8, nationality: "España", age: 27, height: Number(1.85), position: "Mediocentro"},
    {name: "Óliver", surname: "Torres Muñoz", number: 21, nationality: "España", age: 27, height: Number(1.75), position: "Mediocentro"},
    {name: "Ivan", surname: "Rakitic", number: 10, nationality: "Suiza", age: 34, height: Number(1.84), position: "Mediocentro"},
    {name: "Papu", surname: "Gómez", number: 24, nationality: "Argentina", age: 34, height: Number(1.67), position: "Mediocentro ofensivo"},
    {name: "Lucas Ariel", surname: "Ocampos", number: 5, nationality: "Argentina", age: 27, height: Number(1.88), position: "Extremo izquierdo"},
    {name: "Erik", surname: "Lamela", number: 17, nationality: "Argentina", age: 30, height: Number(1.81), position: "Extremo derecho"},
    {name: "Jesús Manuel (Tecatito)", surname: "Corona", number: 9, nationality: "México", age: 29, height: Number(1.73), position: "Extremo derecho"},
    {name: "Jesús Joaquín (Suso)", surname: "Fernández Sáenz De la Torre", number: 7, nationality: "España", age: 28, height: Number(1.76), position: "Extremo derecho"},
    {name: "Youssef", surname: "En-Nesyri", number: 15, nationality: "Marruecos", age: 24, height: Number(1.89), position: "Delantero centro"},
    {name: "Anthony Jordan", surname: "Martial", number: 22, nationality: "Francia", age: 26, height: Number(1.81), position: "Delantero centro"},
    {name: "Rafa", surname: "Mir Vicente", number: 12, nationality: "España", age: 24, height: Number(1.91), position: "Delantero centro"},
    {name: "Munir", surname: "El Haddadi Mohamed", number: 11, nationality: "España", age: 26, height: Number(1.75), position: "Delantero centro"},
    {name: "Iván", surname: "Romero De Ávila Araque", number: 36, nationality: "España", age: 21, height: Number(1.72), position: "Delantero centro"},
  ]; 


  constructor() { }

    // Method to return all players
    getPlayers(){
      return this.playerList;
    }
  
    // Method to add player
    addPlayer(player: Players) :void {
      this.playerList.unshift(player);
    }
  
    // Method to search player
    searchPlayer(index: number) :Players {
      return this.playerList[index];
    }
  
    // Method to edit player
    editPlayer(player: Players, index:number) :void {
      this.playerList[index].name = player.name;
      this.playerList[index].surname = player.surname;
      this.playerList[index].number = player.number;
      this.playerList[index].nationality = player.nationality;
      this.playerList[index].age = player.age;
      this.playerList[index].height = player.height;
      this.playerList[index].position = player.position;
    }
  
    // Method to delete player
    deletePlayer(indice:number):void {
      this.playerList.splice(indice, 1);
    }
}
