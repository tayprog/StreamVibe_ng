import { Component } from '@angular/core';

@Component({
  selector: 'app-filme',
  imports: [],
  templateUrl: './filme.html',
  styleUrl: './filme.css'
})
export class Filme {
  filme1 = {
    nome: "Eclipse",
    imagem: "/eclipse.jpg",
    sinopse: "'Eclipse' é o terceiro filme da saga Crepúsculo, baseado nos livros de Stephenie Meyer. Bella Swan se vê dividida entre seu amor por o vampiro Edward e sua amizade com o lobisomem Jacob. Enquanto isso, uma série de assassinatos em Seattle indica a presença de um exército de vampiros recém-criados. A ameaça obriga vampiros e lobisomens a se unirem para proteger Bella. O filme mistura romance, ação e escolhas difíceis sobre amor e destino."
  }
  filme2 = {
    nome: "Simplesmente Acontece",
    imagem: "/simplesmenteacontece.jpg",
    sinopse: "'Simplesmente Acontece' conta a história de Rosie e Alex, melhores amigos desde a infância, que enfrentam desencontros e obstáculos ao longo dos anos. Apesar da forte conexão entre eles, decisões e circunstâncias os mantêm afastados. O filme mostra como o amor verdadeiro pode resistir ao tempo e à distância."
  }
  filme3 = {
    nome: "High School Musical 3",
    imagem: "/High_School_Mudical_3.JPG",
    sinopse: "'High School Musical 3: Ano da Formatura' acompanha Troy, Gabriella e seus amigos enfrentando o último ano do colégio. Entre decisões sobre o futuro, faculdades e despedidas, eles se preparam para o musical final da escola. O grupo lida com o medo das mudanças e o fim de uma fase marcante da vida. Enquanto isso, o romance entre Troy e Gabriella é testado pela distância iminente. O filme celebra amizade, sonhos e a transição para a vida adulta."
  }
}
