// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const {data} = context;

    //discard empty message
    if (!data.text) {
      throw new Error('El mensaje debe contener texto');
    }

    //logged user
    const {user} = context.params;

    //shorten messages if larger than 400 characters
    const text = data.text.substring(0, 400);

    //update data
    context.data = {
      text,
      userId: user._id,
      createdAt: new Date().getTime()
    };
    
    return context;
  };
};
