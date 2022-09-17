require('../src/db/mongoose');
require('../src/middleware/auth');
const express = require('express');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.get('',(req,res)=>{
    res.send('Welcome to TASK_MANAGER');
})

app.listen(port,()=>{
    console.log(`Server is up on ${port}`);
});
