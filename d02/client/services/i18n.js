const mustache = require('mustache');

const res = {
  "Co": "Cₒ₂",
  "DO2": "Current Dₒ₂",
  "VO2": "Current Vₒ₂",
  "DO2VO2Ratio": "Current Dₒ₂/Vₒ₂Ratio",
  "SaO2": "Saₒ₂",
  "PaO2": "Paₒ₂",
  "SvO2": "Svₒ₂",
  "PvO2": "Pvₒ₂ (if unknown, leave as zero)",
  "DesiredDO2VO2ratio": "Desired Dₒ₂/Vₒ₂ ratio",
  "RequiredHgb": "Hgb required for Dₒ₂/Vₒ₂ ratio of {{vars.DesiredDO2VO2ratio}}"
};


module.exports = (input, data) => {
  let output = input;
  if(res[input]) {

    output = res[input];

    if(data) {
      output = mustache.render(output, data);
    }
  }
  return output;
};
