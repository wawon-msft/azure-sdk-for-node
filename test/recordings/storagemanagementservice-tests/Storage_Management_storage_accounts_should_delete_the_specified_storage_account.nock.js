// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2aa30309-3723-4112-bd0b-79e9f65fc52d';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodeTestGroup3502/providers/Microsoft.Storage/storageAccounts/testacc6988?api-version=2016-12-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-request-id': 'c2159c59-e05a-4ca5-ae02-7416a2bdd687',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': 'c2159c59-e05a-4ca5-ae02-7416a2bdd687',
  'x-ms-routing-request-id': 'JAPANEAST:20170508T091620Z:c2159c59-e05a-4ca5-ae02-7416a2bdd687',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 08 May 2017 09:16:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodeTestGroup3502/providers/Microsoft.Storage/storageAccounts/testacc6988?api-version=2016-12-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-request-id': 'c2159c59-e05a-4ca5-ae02-7416a2bdd687',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': 'c2159c59-e05a-4ca5-ae02-7416a2bdd687',
  'x-ms-routing-request-id': 'JAPANEAST:20170508T091620Z:c2159c59-e05a-4ca5-ae02-7416a2bdd687',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 08 May 2017 09:16:19 GMT',
  connection: 'close' });
 return result; }]];