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
    favorito: false
  }
  // filme2 = {
  //   nome: "Simplesmente Acontece",
  //   imagem: "/simplesmenteacontece.jpg",
  //   sinopse: "'Simplesmente Acontece' conta a história de Rosie e Alex, melhores amigos desde a infância, que enfrentam desencontros e obstáculos ao longo dos anos. Apesar da forte conexão entre eles, decisões e circunstâncias os mantêm afastados."
  // }
  // filme3 = {
  //   nome: "High School Musical 3",
  //   imagem: "/High_School_Mudical_3.JPG",
  //   sinopse: "'High School Musical 3: Ano da Formatura' acompanha Troy, Gabriella e seus amigos enfrentando o último ano do colégio. Entre decisões sobre o futuro, faculdades e despedidas, eles se preparam para o musical final da escola. O grupo lida com o medo das mudanças e o fim de uma fase marcante da vida."
  // }
}
