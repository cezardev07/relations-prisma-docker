import os from "node:os"

const networkInterfaces = os.networkInterfaces();
let ipMachine: string = "";

Object.keys(networkInterfaces).forEach(interfaceName => {
  const interfaceData: os.NetworkInterfaceInfo[] | undefined = networkInterfaces[interfaceName];
  if(interfaceData){
    for(let data of interfaceData){
      if (!data.internal && data.family === 'IPv4') {
        ipMachine = data.address
        break;
      }
    }
  }
});

export default ipMachine;