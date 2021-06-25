const DataSchema = require('../../model/v1/data');

const add = async (req, res) => {
  const { value, qrValue } = req.body;

  if (!value || !qrValue) {
    return res.json({
      error: true,
      message: 'Please send value',
    });
  }

  try {
    const data = new DataSchema({
      inputString: value,
      qrValue: qrValue,
    }).save();

    if (data) {
      return res.json({
        error: false,
        message: 'Data added',
      });
    }

    return res.json({
      error: true,
      message: 'Something went wrong',
    });
  } catch (error) {
    console.log(error);
    return res.json({
      error: true,
      message: 'Something went wrong',
    });
  }
};

const get = async (req, res) => {
  try {
    const data = await DataSchema.find({});

    if (data) {
      return res.json({
        error: false,
        message: 'Add added data',
        data: data,
      });
    }

    return res.json({
      error: true,
      message: 'Something went wrong',
    });
  } catch (error) {
    console.log(error);
    return res.json({
      error: true,
      message: 'Something went wrong',
    });
  }
};

module.exports = {
  add,
  get,
};
