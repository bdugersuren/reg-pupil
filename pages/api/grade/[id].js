import Grade from '../../../models/Grade';
import connectDb from '../../../utils/connectDb';

connectDb();

const handleGetRequest = async (req, res) => {
  const  {id}  = req.query;
  console.log(id)
  const grade = await Grade.findOne({_id:id} );
  res.status(200).json(grade);
};

const handlePutRequest = async (req, res) => {
  
  const  {id}  = req.query;
  const  {name}  = req.body;
  
  try {
    
    const grade = await Grade.findByIdAndUpdate({ _id: id },{ name});

    if(!grade)  res.status(400).json({success:false});
    res.status(201).json(product);
  } catch(error) {
    res.status(500).send('Server error in creating product=====>');
  }
};

const handleDeleteRequest = async (req, res) => {
    const  {id}  = req.query;
  try {
    await Grade.findOneAndDelete({ _id:id });
    
    res.status(204).json({del: "Success"});
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting product');
  }
};

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await handleGetRequest(req, res);
      break;
    case 'PUT':
      await handlePutRequest(req, res);
    case 'DELETE':
      await handleDeleteRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed.`);
      break;
  }
};

