function fetchData(url = "URL") {

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const r = true;
            if (r) {
              const response = { data: "success" };
      
              resolve(response);
            } else {
              const response = { error: "error" };
              reject(new Error(response));
            }
        },1000);
    
    });

}

async function getData() {
  console.log("start");
  try {
    const r = await fetchData();
    console.log("successsss ", r);
  } catch (error) {
    console.log("error", error);
  }
  console.log("end");
}
getData();
console.log("fin");
