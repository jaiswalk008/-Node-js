console.log('a');
console.log('b');

async function  func(){
    const pr1 = await new Promise((resolve)=>{
        setTimeout(()=>{

            console.log('c');
      
            resolve();
      
          },3000);
    })
    const pr2 = await new Promise((resolve)=>{
        setTimeout(()=>{

            console.log('d');
      
            resolve();
      
          },0);
    })
    console.log('e')

}

func();


