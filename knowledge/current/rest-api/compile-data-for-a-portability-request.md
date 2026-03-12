---
title: "Compile Data for a Portability Request"
domain: rest-api
topic: compile-data-for-a-portability-request
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.622Z
estimatedTokens: 333
keywords: [Compile, Data, Portability, Aggregate, subject's, personally, identifiable, PII, file, POST, resource, includes, found, Account, Contact]
---

# Compile Data for a Portability Request

> Aggregate your data subject's personally identifiable information (PII) into one file
  using the POST method of the Portability resource. The PII includes data found in the Account,
  Contact, Individual, Lead, Person, and User objects. You receive a response with a URL to download
  the file, a policy file ID, and information on the objects and fields you selected when creating
  the policy. Use the policy file ID to execute the Portability resource with the GET method. This
  resource is available in REST API version 50.0 and later.

# Compile Data for a Portability Request

Aggregate your data subject's personally identifiable information (PII) into one file using the POST method of the Portability resource. The PII includes data found in the Account, Contact, Individual, Lead, Person, and User objects. You receive a response with a URL to download the file, a policy file ID, and information on the objects and fields you selected when creating the policy. Use the policy file ID to execute the Portability resource with the GET method. This resource is available in REST API version 50.0 and later.

To use the Portability resource, you must have the ModifyAllData or PrivacyDataAccess user permission. Ensure that your Salesforce admin has granted you these permissions.

## Syntax

URI

/services/data/vXX.X/consent/dsr/rtp/execute

Formats

JSON

HTTP methods

POST

Authentication

Authorization: Bearer token

Request body

```

```

Request parameters

| Parameter | Description |
| --- | --- |
| dataSubjectId | The ID of the customer making the request. The ID is 15 or 18 characters long, and found in the Account, Contact, Individual, Lead, Person, and User objects. |
| policyName | The name of an active policy. This contains the object in the dataSubjectId parameter. |

## Example

Example Request

```

```

Example Response Body

```

```

## Code Examples

```
{
   “dataSubjectId”:”<root ID>”,
   “policyName”:”<policyName>”
}
```

```
curl -X POST https://MyDomainName.my.salesforce.com/services/data/v66.0/consent/dsr/rtp/execute -H "Authorization: Bearer token" -H "Content-Type: application/json" -d "@exampleRequestBody.json"
```

```
{ 
   “status" : "SUCCESS",
   "warnings" : [ ], 
   "result" : { 
       "policyFileStatus" : "In Progress", 
       "policyFileUrl" : "https://MyDomainName.my.salesforce.com/servlet/policyFileDownload?file=0jeS70000004CBO", 
       "policyFileId" : "0jeS70000004CBO" 
   } 
}
```
