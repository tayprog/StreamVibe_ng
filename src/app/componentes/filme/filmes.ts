import { Component } from '@angular/core';

@Component({
  selector: 'app-filme',
  imports: [],
  templateUrl: './filme.html',
  styleUrl: './filme.css'
})
export class Filme {

  alternarFavorito() {
    this.filme1.favorito = !this.filme1.favorito
  }

  filme1 = {
    nome: "Eclipse",
    imagem: "/eclipse.jpg",
    sinopse: "'Eclipse' é o terceiro filme da saga Crepúsculo, baseado nos livros de Stephenie Meyer. Bella Swan se vê dividida entre seu amor por o vampiro Edward e sua amizade com o lobisomem Jacob.",
    genero: "drama",
    favorito: false
  }
  filme2 = {
    nome: "Simplesmente Acontece",
    imagem: "/simplesmenteacontece.jpg",
    sinopse: "'Simplesmente Acontece' conta a história de Rosie e Alex, melhores amigos desde a infância, que enfrentam desencontros e obstáculos ao longo dos anos. Apesar da forte conexão entre eles, decisões e circunstâncias os mantêm afastados.",
    favorito: false
  }
  filme3 = {
    nome: "High School Musical 3",
    imagem: "/High_School_Musical_3.JPG",
    sinopse: "'High School Musical 3: Ano da Formatura' acompanha Troy, Gabriella e seus amigos enfrentando o último ano do colégio. Entre decisões sobre o futuro, faculdades e despedidas, eles se preparam para o musical final da escola. O grupo lida com o medo das mudanças e o fim de uma fase marcante da vida.",
    favorito: false

  }
  filme4 = {
    nome: "Moana",
    imagem: "/moana.jfif",
    sinopse: "Moana, uma jovem corajosa, parte em uma jornada pelo oceano para salvar sua ilha e descobrir sua verdadeira identidade. Ao lado do semideus Maui, ela enfrenta criaturas místicas e encontra seu destino.",
    favorito: false
  }
  filme5 = {
    nome: "Princesa e o Sapo",
    imagem: "/tiana.jfif",
    sinopse: "Tiana, uma jovem determinada de Nova Orleans, sonha em ter seu próprio restaurante. Sua vida muda ao beijar um príncipe transformado em sapo, embarcando em uma aventura mágica pelo bayou.",
    favorito: false
  }
}
