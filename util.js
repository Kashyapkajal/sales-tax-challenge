function roundTax(value) {
  return Math.ceil(value * 20) / 20;
}

module.exports = { roundTax };
