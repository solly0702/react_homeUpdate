import msg from "../controllers/msg";
//**********RESTful routes for users**********
module.exports = ((app) => {
  app.post('/api/message', msg.send);
});
//**********END routes for users**************
