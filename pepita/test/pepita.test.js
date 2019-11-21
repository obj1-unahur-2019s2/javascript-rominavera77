const {Golondrina, alpiste, mondongo} = require('../pepita');

describe('pepita', () => {
  var pepita;

  beforeEach(() => {
    pepita = new Golondrina();
  });

  test('energia al principio', () => {
    expect(pepita.energia()).toBe(0);
  });

  test('comer variado', () => {
    pepita.comer(alpiste,30)
    expect(pepita.energia()).toBe(120);
    pepita.comer(mondongo,5)
    expect(pepita.energia()).toBe(620);
  });

  test('comer y volar', () => {
    pepita.comer(alpiste, 50)
    pepita.volar(100)
    expect(pepita.energia()).toBe(90);
  });
});