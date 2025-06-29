import { Component } from '@angular/core';
import { PecasReposicao } from 'src/app/models/PecasReposicao.model';

@Component({
  selector: 'app-pecasreposicao',
  templateUrl: './pecasreposicao.component.html',
  styleUrls: ['./pecasreposicao.component.css']
})
export class PecasreposicaoComponent {
  retovizor_corsa:PecasReposicao =
  {
    img_peca:"https://http2.mlstatic.com/D_NQ_NP_834275-MLB77739373331_072024-O-par-retrovisor-corsa-94-95-96-1997-1998-1999-2000-2001-2002.webp",
    nome:"Par Retrovisor Corsa 94 95 96 1997 1998 1999 2000 2001 2002",
    preco:130.51
  }


  laterna_corca:PecasReposicao =
  {
    img_peca:"https://http2.mlstatic.com/D_NQ_NP_793528-MLB75276056072_032024-O-par-lanterna-traseira-corsa-sedan-classic-2000-a-2010-fum.webp",
    nome:"Par Lanterna Traseira Corsa Sedan Classic 2000 A 2010 Fumê",
    preco: 120.60
  }

  limpa_parabrisa:PecasReposicao = {
    img_peca:"https://http2.mlstatic.com/D_NQ_NP_711496-MLB84221658014_052025-O-par-palheta-limpadora-dianteira-uno-vivace-2010-a-2014-ferro.webp",
    nome:"Par Palheta Limpadora Dianteira Uno Vivace 2010 A 2014 Ferro",
    preco:34.57
  }
}
