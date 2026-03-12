---
title: "Build Identity Verification Context"
domain: health-cloud-object-reference
topic: build-identity-verification-context
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:33.244Z
estimatedTokens: 211
keywords: [Build, Identity, Verification, Context, perform]
---

# Build Identity Verification Context

> Build the context required to perform identity
      verification.

# Build Identity Verification Context

Build the context required to perform identity verification.

Resource

```

```

Example URI

```

```

Available version

54.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

Root XML tag

<buildVerificationContextInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| objectName | String | The API name of the caller’s object. | Optional | 54.0 |
| selectedRecordId | String | The record ID of the caller. | Optional | 54.0 |

Response body for POST

[Verification Context Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_verification_context_output.htm "Represents the Verification Context resource output.")

JSON example

```

```

## Code Examples

```
/connect/identity-verification/build-context/${processDefinitionName}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X
/connect/identity-verification/build-context/SampleVerificationFlow
```

```
{
   "objectName":"Account",
   "selectedRecordId":"001xx000003GZeFAAW"
}
```

```
{
  "isSuccess" : true,
  "message" : "Build Context for Identity Verification API called successfully for Process Definition: SampleVerificationFlow",
  "processDefinition" : {
    "layoutType" : "Tab",
    "processDetail" : [ {
      "dataSourceType" : "Salesforce",
      "optionalVerifierCount" : 1,
      "searchObjectName" : "Account",
      "searchResultUniqueIdField" : "Id",
      "searchSequenceNo" : 1,
      "searchType" : "Text-Based",
      "verificationProcessFieldList" : {
        "verificationProcessFields" : [ {
          "dataSourceType" : "Salesforce",
          "dataType" : "Name",
          "developerName" : "SampleAccountName",
          "fieldName" : "Name",
          "fieldType" : "optionalVerifier",
          "label" : "Account Name"
        }, {
          "dataSourceType" : "Salesforce",
          "dataType" : "Text",
          "developerName" : "SampleAccountNumber",
          "fieldName" : "AccountNumber",
          "fieldType" : "optionalVerifier",
          "label" : "Account Number"
        }, {
          "dataSourceType" : "Salesforce",
          "dataType" : "Phone",
          "developerName" : "SamplePhone",
          "fieldName" : "Phone",
          "fieldType" : "optionalVerifier",
          "label" : "Phone"
        }, {
          "dataSourceType" : "Salesforce",
          "dataType" : "Text",
          "developerName" : "SamplePostalCode",
          "fieldName" : "BillingPostalCode",
          "fieldType" : "optionalVerifier",
          "label" : "Billing Zip/Postal Code"
        }, {
          "dataSourceType" : "Salesforce",
          "dataType" : "Name",
          "developerName" : "SampleAccount",
          "fieldName" : "Name",
          "fieldType" : "resultField",
          "label" : "Account Name"
        }, {
          "dataSourceType" : "Salesforce",
          "dataType" : "Text",
          "developerName" : "AccountNumberSample",
          "fieldName" : "AccountNumber",
          "fieldType" : "resultField",
          "label" : "Account Number"
        }, {
          "dataSourceType" : "Salesforce",
          "dataType" : "Phone",
          "developerName" : "SamplePhoneNumber",
          "fieldName" : "Phone",
          "fieldType" : "resultField",
          "label" : "Phone"
        } ]
      }
    } ]
  },
  "selectedSearchResult" : {
    "selectedRecordObject" : [ ]
  },
  "verifiedResult" : {
    "optionalVerifiers" : [ ],
    "requiredVerifiers" : [ ]
  }
}
```

## Related Topics

- Verification Context Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_verification_context_output.htm)
