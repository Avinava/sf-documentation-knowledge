---
title: "Search Input"
domain: life-sciences-dev-guide
topic: search-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:42.426Z
estimatedTokens: 123
keywords: [Search, Input, representation, API]
---

# Search Input

> Input representation for Search API

# Search Input

Input representation for Search API

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
