import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
  <h1>Kredi Hesaplama</h1>
  <div>
    <label>Kredi Tutari</label>
    <input [(ngModel)]="krediTutari">
  </div>
  <div>
    <label>Taksit Sayisi</label>
    <select [(ngModel)]="taksitSayisi">
      @for(data of taksitler; track data){
        <option>{{ data }}</option>
      }
    </select>
  </div>
  <div>
    <label>Hesapla</label>
    <button (click)="hesapla()">Hesapla</button>
  </div>
  <h1>{{result}}</h1>
  <hr>
  <table>
    <thead>
      <tr>
        <th>Taksit</th>
        <th>Taksit Tutari</th>
        <th>Kalan Geri Ödeme</th>
      </tr>
    </thead>
    <tbody>
      @for(data of odemePlani; track data){
        <tr>
          <td>{{$index + 1}}</td>
          <td>{{data.taksitTutari}}</td>
          <td>{{data.kalanGeriOdeme}}</td>
        </tr>
      }
    </tbody>
  </table>
  `})
export class AppComponent {
  krediTutari: number = 0;
  taksitSayisi: number = 3;
  taksitler: number[] = [3, 6, 12, 24];
  result: string = "";
  odemePlani: { taksitTutari: number, kalanGeriOdeme: number }[] = [];

  hesapla() {
    const taksitTutari = (this.krediTutari / this.taksitSayisi) * 1.29;
    let toplamGeriOdeme = taksitTutari * this.taksitSayisi;
    this.result = `Taksit Tutari: ${taksitTutari} - 
    Taksit Sayisi: ${this.taksitSayisi} - Toplam Geri Ödeme: ${toplamGeriOdeme}`

    this.odemePlani = [];
    for (let i = 0; i < this.taksitSayisi; i++) {
      toplamGeriOdeme -= taksitTutari
      const data = {
        taksitTutari: taksitTutari,
        kalanGeriOdeme: toplamGeriOdeme
      }
      this.odemePlani.push(data);
    }
  }
}

