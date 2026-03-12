---
title: "Identity Verification Search"
domain: health-cloud-object-reference
topic: identity-verification-search
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:33.336Z
estimatedTokens: 244
keywords: [Identity, Verification, Search, Salesforce, record, verify, caller’s]
---

# Identity Verification Search

> Search the Salesforce record to verify a caller’s
    identity.

# Identity Verification Search

Search the Salesforce record to verify a caller’s identity.

Resource

```

```

Example URI

https://yourInstance.salesforce.com/services/data/vXX.X/connect/identity-verification/search

Available version

54.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

Root XML tag

<searchInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| searchTerm | String | The search term for the account to use when performing a search. | Required | 54.0 |
| verificationContext | Verification Context Input | The structure that contains the setup data and context required to perform the search. | Required | 54.0 |

Response body for POST

[Search Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_search_output.htm "Output representation of the search response.")

JSON example

```

```

## Code Examples

```
{
   "searchTerm":"Joe Tester",
   "verificationContext":{
      "processDefinition":{
         "processDetail":{
            "processDetailList":[
               {
                  "verificationProcessFieldList":{
                     "verificationProcessFields":[
                          {
                            "dataSourceType" : "Salesforce",
                            "developerName" : "SampleAccountName",
                            "fieldName" : "Name",
                            "fieldType" : "optionalVerifier",
                            "label" : "Account Name"
                          }, {
                            "dataSourceType" : "Salesforce",
                            "developerName" : "SampleAccountNumber",
                            "fieldName" : "AccountNumber",
                            "fieldType" : "optionalVerifier",
                            "label" : "Account Number"
                          }, {
                            "dataSourceType" : "Salesforce",
                            "developerName" : "SamplePhone",
                            "fieldName" : "Phone",
                            "fieldType" : "optionalVerifier",
                            "label" : "Phone"
                          }, {
                            "dataSourceType" : "Salesforce",
                            "developerName" : "SamplePostalCode",
                            "fieldName" : "BillingPostalCode",
                            "fieldType" : "optionalVerifier",
                            "label" : "Billing Zip/Postal Code"
                          }, {
                            "dataSourceType" : "Salesforce",
                            "developerName" : "SampleAccount",
                            "fieldName" : "Name",
                            "fieldType" : "resultField",
                            "label" : "Account Name"
                          }, {
                            "dataSourceType" : "Salesforce",
                            "developerName" : "AccountNumberSample",
                            "fieldName" : "AccountNumber",
                            "fieldType" : "resultField",
                            "label" : "Account Number"
                          }, {
                            "dataSourceType" : "Salesforce",
                            "developerName" : "SamplePhoneNumber",
                            "fieldName" : "Phone",
                            "fieldType" : "resultField",
                            "label" : "Phone"
                          }
                     ]
                  },
                  "searchType": "Text-Based",
                  "searchSequenceNo": 1,
                  "searchResultUniqueIdField": "Id",
                  "searchObjectName": "Account",
                  "optionalVerifierCount": 1,
                  "dataSourceType": "Salesforce"
               }
            ]
         }
      }
   }
}
```

```
{
  "isSuccess" : true,
  "message" : "Search is a success",
  "searchResult" : [ {
    "searchFields" : [ {
      "developerName" : "SamplePhone",
      "value" : "6500000014"
    }, {
      "developerName" : "AccountNumberSample",
      "value" : "10014"
    }, {
      "developerName" : "SamplePhoneNumber",
      "value" : "6500000014"
    }, {
      "developerName" : "SampleAccount",
      "value" : "Joe Tester"
    }, {
      "developerName" : "SampleAccountName",
      "value" : "Joe Tester"
    }, {
      "developerName" : "SampleAccountNumber",
      "value" : "10014"
    }, {
      "developerName" : "SamplePostalCode",
      "value" : "94566"
    }, {
      "developerName" : "Id",
      "value" : "001RM00000141414"
    } ]
  } ],
  "searchResultHeader" : [ {
    "dataType" : "Phone",
    "developerName" : "SamplePhone",
    "displayLabel" : "Phone"
  }, {
    "dataType" : "Text",
    "developerName" : "AccountNumberSample",
    "displayLabel" : "Account Number"
  }, {
    "dataType" : "Phone",
    "developerName" : "SamplePhoneNumber",
    "displayLabel" : "Phone"
  }, {
    "dataType" : "Name",
    "developerName" : "SampleAccount",
    "displayLabel" : "Account Name"
  }, {
    "dataType" : "Name",
    "developerName" : "SampleAccountName",
    "displayLabel" : "Account Name"
  }, {
    "dataType" : "Text",
    "developerName" : "SampleAccountNumber",
    "displayLabel" : "Account Number"
  }, {
    "dataType" : "Text",
    "developerName" : "SamplePostalCode",
    "displayLabel" : "Billing Zip/Postal Code"
  }, {
    "dataType" : "Lookup",
    "developerName" : "Id",
    "displayLabel" : "Account ID"
  } ]
}
```

## Related Topics

- Verification Context Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_verification_context_input.htm)
- Search Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_search_output.htm)
