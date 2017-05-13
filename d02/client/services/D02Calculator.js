function D02Calculator() {
  this.calculate = function(params) {
    let Co = params.Co;
    let Hgb = params.Hgb;
    let SaO2 = params.SaO2;
    let PaO2 = params.PaO2;
    let SvO2 = params.SvO2;
    let PvO2 = params.PvO2;
    let DesiredDO2VO2ratio = params.DesiredDO2VO2ratio;
    // B1 = Co
    // B2 = Hgb
    // B3 = SaO2
    // B4 = PaO2
    // B5 = SvO2
    // B6 = PvO2 (Optional)
    // B7 = DesiredDO2VO2ratio


    let DO2 = (((Hgb*(SaO2/100)*1.34)+(PaO2*0.003))*Co)*10;
    let VO2 = ((((Hgb*(SaO2/100)*1.34)+(PaO2*0.003))-(Hgb*(SvO2/100)*1.34)+(PvO2*0.003))*Co)*10;
    let DO2VO2Ratio = DO2/VO2;

    // GRAPH =(((((VO2*X)/10)/Co)/(SaO2/100))/1.34)
    RequiredHgb = (((((VO2*DesiredDO2VO2ratio)/10)/Co)/(SaO2/100))/1.34);

    return {
      DO2: DO2,
      VO2: VO2,
      DO2VO2Ratio: DO2VO2Ratio,
      RequiredHgb: RequiredHgb
    };
  };
}

module.exports = D02Calculator;
