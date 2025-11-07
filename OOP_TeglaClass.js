// Osztály definíció

class Tegla {
  // Konstruktor: az adatok beállítása
  constructor(a, b, c) {
    this.a = a;   // hossz
    this.b = b;   // szélesség
    this.c = c;   // magasság
  }

  // Metódus: térfogat számítása
  terfogat() {
    return this.a * this.b * this.c;
  }

  // Metódus: felszín számítása
  felszin() {
    return 2 * (this.a * this.b + this.a * this.c + this.b * this.c);
  }
}

