exports.now = () => new Date();

exports.formatDate = (date = new Date()) =>
  date.toISOString().split('T')[0]; // "YYYY-MM-DD"
