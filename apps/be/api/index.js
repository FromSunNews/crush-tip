module.exports = (req, res) => {
  res.json({ status: 'ok', url: req.url });
};
