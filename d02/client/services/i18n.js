const mustache = require('mustache');

const res = {
  "applicationTitle": "DO₂ / VO₂ Calculator",
  "Co": "CO",
  "DO2": "Current DO₂",
  "VO2": "Current VO₂",
  "DO2VO2Ratio": "Current DO₂ / VO₂Ratio",
  "SaO2": "SaO₂",
  "PaO2": "PaO₂",
  "SvO2": "SvO₂",
  "PvO2": "PvO₂ (if unknown, leave as zero)",
  "DesiredDO2VO2ratio": "Desired DO₂ / VO₂ ratio",
  "RequiredHgb": "Hgb required for DO₂ / VO₂ ratio of {{vars.DesiredDO2VO2ratio}}"
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
