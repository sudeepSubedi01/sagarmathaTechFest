const asyncHandler = require("express-async-handler");
const Volunteers = require("../models/volunteer");
const generateToken = require("../config/generate_token");

const registerVolunteer = asyncHandler(async (req, res) => {
  const data = await req.body;
  try {
    if (await Volunteers.findOne({ email: data?.email }))
      return res.status(400).json({
        error: "Already exists",
      });
    const volunteer = await Volunteers.create(data);
    if (volunteer) {
      return res.status(201).send(volunteer);
    }
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
});

const loginVolunteer = asyncHandler(async (req, res) => {
  const { email, password } = await req.body;
  try {
    const volunteer = await Volunteers.findOne({
      email
    });
    if (!volunteer) return res.status(400).json({ message: "Invalid Credentials" });
    if (await volunteer.matchPassword(password)) {
      return res.status(200).json({
        _id: volunteer._id,
        email: volunteer.email,
        firstName: volunteer.firstName,
        lastName: volunteer.lastName,
        token: generateToken(volunteer._id),
      });
    }
    return res.status(400).json({ message: "Invalid Credentials" });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
});

const searchVolunteer = asyncHandler(async (req, res) => {
  return res.status(200).json({
    success: true,
  });
});

const updateVolunteerData = asyncHandler(async (req, res) => {
  return res.status(200).json({
    success: true,
  });
});

module.exports = {
  registerVolunteer,
  loginVolunteer,
  searchVolunteer,
  updateVolunteerData,
};
