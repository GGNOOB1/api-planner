exports.getAllEvents = (req, res, next) => {
  res.status(200).json({
    status: "success",
  });

  next();
};
