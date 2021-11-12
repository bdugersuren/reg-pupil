import Grade from '../../../models/Grade';
import connectDb from '../../../utils/connectDb';

connectDb();

const handleGetRequest = async (req, res) => {
    let grades;
    grades = await Grade.find();
    res.status(200).json({ grades });
  };

const handlePostRequest = async (req, res) => {
    const { name } = req.body;
  try {
    if (!(name)) {
      return res.status(422).send('Product missing one or more fields');
    }
    const grade = await new Grade({
      name
    }).save();

    res.status(201).json(grade);
  } catch(error) {
    res.status(500).send('Server error in creating product=====>');
  }
  };


export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await handleGetRequest(req, res);
      break;
    case 'POST':
      await handlePostRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed.`);
      break;
  }
};