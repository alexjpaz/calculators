const D02Calculator = require('./D02Calculator.js');
console.log(D02Calculator);

const expect = require('chai').expect;

describe('D02Calculator', () => {
  it('should calculate', () => {
    const calc = new D02Calculator();

    const result = calc.calculate({
      Co: 5.3,
      Hgb: 10.8,
      SaO2: 92,
      PaO2: 73,
      SvO2: 60,
      PvO2: null,
      DesiredDO2VO2ratio: 5
    });

    expect(result.DO2).to.equal(717.2617200000002);
    expect(result.VO2).to.equal(257.05212000000006);
    expect(result.DO2VO2Ratio).to.equal(2.790335749808249);
    expect(result.RequiredHgb).to.equal(19.670830629461392);
  });
});
