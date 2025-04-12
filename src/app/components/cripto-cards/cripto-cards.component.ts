import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CriptoService } from '../../services/cripto-service.service';

@Component({
  selector: 'app-cripto-cards',
  templateUrl: './cripto-cards.component.html',
  styleUrls: ['./cripto-cards.component.css'], 
  standalone: false 
})
export class CriptoCardsComponent implements OnChanges {
  @Input() filtro: string = '';

  moedas: string[] = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'SOLUSDT', 'XRPUSDT', 'ADAUSDT', 'DOGEUSDT', 'DOTUSDT', 'AVAXUSDT', 'SHIBUSDT', 'LTCUSDT', 'LINKUSDT', 'MATICUSDT', 'UNIUSDT', 'TRXUSDT'];
  precos: any[] = [];
  todosPrecos: any[] = [];

  constructor(private criptoService: CriptoService) {}

  ngOnInit(): void {
    this.moedas.forEach(symbol => {
      this.criptoService.getPreco(symbol).subscribe(data => {
        this.todosPrecos.push(data);
        this.aplicarFiltro();
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filtro']) {
      this.aplicarFiltro();
    }
  }

  aplicarFiltro() {
    const termo = this.filtro?.toLowerCase() || '';
    this.precos = this.todosPrecos.filter(p => p.symbol.toLowerCase().includes(termo));
  }
}
