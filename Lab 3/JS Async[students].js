// 1. Using Callbacks
const processOrderCallback = (orderId, callback) => {
  if (!orderId) {
    callback(new Error("Invalid order ID"));
    return;
  }

  setTimeout(() => {
    const orderDetails = { orderId, status: "Processed" };
    callback(null, orderDetails);
  }, 1000);
};

// Calling (1):
processOrderCallback(100, (error, orderDetails) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log("Order details (Callback):", orderDetails);
  }
});

// --------------------------------------------------------------------
// PROMISES
// --------------------------------------------------------------------

//TODO: How many parameters should this function take? DONE
// 2. Using Promises
const processOrderPromise = (orderId) => {
  return new Promise((resolve, reject) => {
    if (!orderId) {
      reject(new Error("Invalid order ID"));
      return;
    }

    setTimeout(() => {
      const orderDetails = { orderId, status: "Processed" };
      resolve(orderDetails);
    }, 1000);
  });
};

// //TODO: Call processOrderPromise() properly to console log the returned order details and catch any errors [1 Mark]
// Calling (2):
processOrderPromise(100)
  .then(orderDetails => {
    console.log("Order details (Promise):", orderDetails);
  })
  .catch(error => {
    console.error(error.message);
  });



// // As you can see this code did not behave as expected
// let initOrderId = 100;
// const newOrder = processOrderNotWorking(initOrderId);
// console.log("Order details:", newOrder);

// // --------------------------------------------------------------------
// // PROMISES
// // --------------------------------------------------------------------





// 3. Using Aync/Await
const processOrderAwait = async (orderId) => {
   //Handle error [1 Mark]
  //[HINT]: Use the promise from processOrderPromise [1 Mark]
  //[NOTE]: You do not have to return any value, console log here
  try {
    const orderDetails = await processOrderPromise(orderId);
    console.log("Order details (Async/Await):", orderDetails);
  } catch (error) {
    console.error(error.message);
  }
};

// Calling (3):
processOrderAwait(100);