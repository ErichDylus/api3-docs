const keccak256 = require('keccak256')
const abi =  require('@api3/airnode-abi')

templateId = keccak256(abi.encode(
  {
    "airnodeId": "0x15e7097beac1fd23c0d1e3f5a882a6f99ecbcf2e0c1011d1bd43707c6c0ec717",
    "endpointId": "0x2605589dfc93c8f9c35eecdfe1e666c2193df30a8b13e1e0dd72941f59f9064c",
    "parameters": [
      {
        "name": "name1",
        "value": "value1",
        "type": "string"
      },
      {
        "name": "name2",
        "value": "1000",
        "type": "uint256"
      }
    ]
  }
));

console.log(templateId);