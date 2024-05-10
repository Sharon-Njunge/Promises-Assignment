// Write an asynchronous function that accepts a message string and a delay time in milliseconds.
//  The function should log the message to the console after the specified delay time.
async function writemessage(message, delayTime) {
    await new Promise(resolve => setTimeout(resolve,delayTime));
    console.log(message);
    } 
    
    writemessage("I enjoy doing art everyday","3660 miliseconds")

// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID.
// Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
const userIds = [1001, 1002, 1003, 1004];

function getUserData(id) {


 return new Promise((resolve, reject) => {
 setTimeout(() => {
 
 const userInformation = { id, name: `User ${id}` };
 resolve(userInformation);
 }, 1000);
 });
}
async function logUserData() {
 for (const userId of userIds) {
 try {
 const userInformation = await getUserData(userId);
 console.log(`User ID ${userId}: ${userInformation.name}`);
 }
 catch (error) {
 console.error(`Error fetching data for User ID ${userId}: ${error.message}`);
 }
 
}
}
logUserData()


// You have an asynchronous function performTask() that returns a Promise.
//  The Promise resolves if the task is successful and rejects if there's an error.
//  Write a function that calls performTask() and logs a custom success message if the task is successful, 
// and a custom error message if there's an error.

async function performTask() {


    return new Promise((resolve, reject) => {
    setTimeout(() => {
    
    resolve('Task is succeful');
    reject('You have an error')
    
    }, 1000);
    });
    }
    
    const newTask = async ()=>{
    
    try{
    await performTask
    console.log('message: Successful');
    }catch{
    console.log('error: You have an error');
    }
    }
    newTask();
   
 

//  Write a function unstableTask that:

// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
//  2. Returns a Promise that:
//  Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
// Write another function executeWithRetry that:
    
//  Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
// Logs whether the task succeeded or failed after all attempts.

function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
    const randomValue = Math.random();
    if (randomValue > failureProbability) {
    
    resolve(`Task "${taskName}" succeeded`);
    } else {
    
    reject(new Error(`Task "${taskName}" failed`));
    }
    });
    }

    async function executeWithRetry(taskName, retries, failureProbability) {
    for (let attempt = 5; attempt => retries; attempt++) {
    try {
    await unstableTask(taskName, failureProbability);
    console.log(`Attempt ${attempt}: Task "${taskName}" succeded`);
    return;
    } catch (error) {
    console.error(`Attempt ${attempt}: ${error.message}`);
    }
    }
    console.log(`All ${retries} attempts failed for task "${taskName}"`);
    }
    
    executeWithRetry('Runtime', 5, 0);
    
    
    



   

