// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/certificates?api-version=2016-02-01.3.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/certificates(ThumbprintAlgorithm=sha1,Thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'bde2f60b-a54e-4ee6-94e6-f6601d4a0814',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/certificates(ThumbprintAlgorithm=sha1,Thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)',
  date: 'Fri, 01 Apr 2016 05:45:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/certificates?api-version=2016-02-01.3.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/certificates(ThumbprintAlgorithm=sha1,Thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'bde2f60b-a54e-4ee6-94e6-f6601d4a0814',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/certificates(ThumbprintAlgorithm=sha1,Thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)',
  date: 'Fri, 01 Apr 2016 05:45:17 GMT',
  connection: 'close' });
 return result; }]];