---
title: "Identity Verification"
domain: health-cloud-object-reference
topic: identity-verification
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:33.311Z
estimatedTokens: 259
keywords: [Identity, Verification, Verify, caller's, resources, verify, call, center, agent, ask, person, confirm, their, social, security, number]
---

# Identity Verification

> Use these resources to verify the caller's identity. For example,
  the call center agent can ask the person to confirm their social security number, birth date,
  insurance details, or driver’s license number.

# Identity Verification

Use these resources to verify the caller's identity. For example, the call center agent can ask the person to confirm their social security number, birth date, insurance details, or driver’s license number.

The person contacting the call center could be a patient, a parent or guardian if the patient’s a minor, the authorized representative of a patient, or a provider. No matter who the caller is, if they want sensitive information, an agent must verify the caller’s identity first. If the inquiry concerns information in the public domain (for example, the location of a hospital), then verification isn’t required.

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/identity-verification/build-context/${processDefinitionName} | Build the context required to perform identity verification. |
| /connect/identity-verification/verification | Verify the caller's identity. |
| /connect/identity-verification/search | Search the Salesforce record to verify a caller’s identity. |

-   **[Build Identity Verification Context](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_build_verification_context.htm)**
    Build the context required to perform identity verification.
-   **[Identity Verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_identity_verification.htm)**
    Verify the caller's identity.
-   **[Identity Verification Search](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_search_identity_record.htm)**
    Search the Salesforce record to verify a caller’s identity.

## Code Examples

```
https://yourInstance.salesforce.com/services/data/vXX.X
/connect/identity-verification/verification
```

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

```
{
  "isSuccess" : true,
  "message" : "Fetched verification information successfully for User Id : 001RM00000141414.",
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
        } ]
      }
    } ]
  },
  "selectedSearchResult" : {
    "objectName" : "Account",
    "selectedRecordId" : "001RM00000141414",
    "selectedRecordObject" : [ {
      "developerName" : "SampleAccountName",
      "value" : "Joe Tester"
    }, {
      "developerName" : "SampleAccountNumber",
      "value" : "10014"
    }, {
      "developerName" : "SamplePhone",
      "value" : "6500000014"
    }, {
      "developerName" : "SamplePostalCode",
      "value" : "94566"
    }, {
      "developerName" : "SampleAccount",
      "value" : "Joe Tester"
    }, {
      "developerName" : "AccountNumberSample",
      "value" : "10014"
    }, {
      "developerName" : "SamplePhoneNumber",
      "value" : "6500000014"
    } ]
  },
  "verifiedResult" : {
    "optionalVerifiers" : [ {
      "developerName" : "SampleAccountName",
      "verificationState" : ""
    }, {
      "developerName" : "SampleAccountNumber",
      "verificationState" : ""
    }, {
      "developerName" : "SamplePhone",
      "verificationState" : ""
    }, {
      "developerName" : "SamplePostalCode",
      "verificationState" : ""
    } ],
    "requiredVerifiers" : [ ]
  }
}
```

## Related Topics

- Process Definition Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_process_definition_input.htm)
- Selected Search Result Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_selected_search_result_input.htm)
- Verified Result Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_verified_result_input.htm)
- Verification Context Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_verification_context_output.htm)
- /connect/identity-verification/build-context/${processDefinitionName} (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_build_verification_context.htm)
- /connect/identity-verification/verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_identity_verification.htm)
- /connect/identity-verification/search (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_search_identity_record.htm)
- Build Identity Verification Context (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_build_verification_context.htm)
- Identity Verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_identity_verification.htm)
- Identity Verification Search (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_search_identity_record.htm)
