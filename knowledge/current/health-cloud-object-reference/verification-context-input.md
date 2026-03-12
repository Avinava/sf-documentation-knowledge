---
title: "Verification Context Input"
domain: health-cloud-object-reference
topic: verification-context-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.197Z
estimatedTokens: 165
keywords: [Verification, Context, Input, representation]
---

# Verification Context Input

> Input representation for verification context.

# Verification Context Input

Input representation for verification context.

Root XML tag

<verificationContext>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| processDefinition | Process Definition Input | Represents the identity verification process definition. | Required | 54.0 |
| selectedSearchResult | Selected Search Result Input | Represents the details of the object and fields to appear in the search result. | Required | 54.0 |
| verifiedResult | Verified Result Input | Represents the verified result.NoteReserved for future use. | Optional | 54.0 |

## Code Examples

```
{
   "processDefinition":{
      "layoutType":"Tab",
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
   },
   "selectedSearchResult":{
      "objectName":"Account",
      "selectedRecordId":"001RM00000141414",
      "selectedRecordObject":{
         "selectedRecordObjectList":[]
      }
   }
}
```

## Related Topics

- Process Definition Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_process_definition_input.htm)
- Selected Search Result Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_selected_search_result_input.htm)
- Verified Result Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_verified_result_input.htm)
