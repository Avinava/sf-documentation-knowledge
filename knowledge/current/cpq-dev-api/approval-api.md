---
title: "Approval API"
domain: cpq-dev-api
topic: approval-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.584Z
estimatedTokens: 306
keywords: [Approval, API, Call, Advanced, Approvals, resource, outside, source]
---

# Approval API

> Call the Advanced Approvals approval resource from an outside source.

# Approval API

Call the Advanced Approvals approval resource from an outside source.

| Available in: Advanced Approvals Spring '21 and later |
| --- |


Invoke the approval API using the following service router call, replacing class with your class name and method with your method name.

ServiceRouter?saver=AA.{class}.{method}

Use the following endpoint.

/services/apexrest/sbaa/ServiceRouter

The approval service accepts the following parameters.

| Parameter | Required | Description |
| --- | --- | --- |
| approvalID | Required | ID of the approval record in Salesforce. |
| comments | Optional | Comments about the approval. |

**Sample Request**

Include a saver in the request body model. When you send the approval request, the CPQ service router evaluates the model and finds the saver attribute. It then takes the value of the saver attribute - in this case, Approve - and maps that to the corresponding Advanced Approvals Apex class.

Header

Content type: application/json

Authorization: Bearer \[Access token or session ID\]

Body

```

```

**Sample CURL Request**

```

```

## Example

This example shows a basic JavaScript function for calling the Approval Service API from Google Sheets.

```

```

## Code Examples

```
{
"model":
"{"approvalId":"a4H7Y000001makkUAA","comments":"I approve!"}",
"saver":"SBAA.ApprovalRestApiProvider.Approve"
}
```

```
curl -X POST https://velocity-efficiency-9575-dev-ed.develop.my.salesforce.com/services/apexrest/sbaa/ServiceRouter
-H 'Authorization: Bearer
<SALESFORCE_ACCESS_TOKEN>'
-H 'Content-Type: application/json'
-d '{"model":"{"approvalId":"a061h000002pIlTAAU","comments\”:\”I approve!\”}”,”saver":"SBAA.ApprovalRestApiProvider.Approve"}'
```

```
function reject() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  // Make a POST request with a JSON payload.
  var model = {
	"approvalId": data[1][0],
	"comments": data[1][1]
  };
  var data = {
    'saver': 'SBAA.ApprovalRestApiProvider.Approve',
    'model': JSON.stringify(model)
  };
  var header = {
       'authorization' : 'Bearer 00Dx0000000IiXXXXX.IshlpUqRUQo3FXXXXXXXXXXXXX'
  };
  var options = {
    'method' : 'post',
    'contentType': 'application/json',
    'headers': header,
    'muteHttpExceptions': false,
    // Convert the JavaScript object to a JSON string.
    'payload' : JSON.stringify(data)
  };
  var response = UrlFetchApp.fetch('https://server/services/apexrest/SBAA/ServiceRouter', options);
  var responseText = response.getContentText();
```
