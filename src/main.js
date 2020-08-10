const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const question = "Will the weather be nice today?";
const promise = tell(question);
promise
  .then((fortune) => {
    console.log(question);
    console.log(fortune);
  })
  .catch(console.log);
