---
title: "Template Collection Output"
domain: psc-api
topic: template-collection-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.746Z
estimatedTokens: 117
keywords: [Template, Collection, Output, representation, OCR, templates]
---

# Template Collection Output

> Output representation of a collection of OCR
  templates.

# Template Collection Output

Output representation of a collection of OCR templates.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| ocrTemplates | OCR Template Output[] | List of the OCR templates. | Big, 55.0 | 55.0 |
| status | Status | Indicates whether the request succeeded or failed, and in the case of failure, it also provides the reason. | Big, 55.0 | 55.0 |

## Code Examples

```
{
  "ocrTemplates": [
    {
      "apiName": "testtrim",
      "documentTypeId": "0deRM0000004CNZ",
      "name": "testtrim",
      "ocrTargetObjects": [
        {
          "ocrTargetObjectId": "97hRM0000004Cii",
          "targetObject": "Employee__c",
          "targetObjectRecordType" : null
        },
        {
          "ocrTargetObjectId": "97hRM00000000i1",
          "targetObject": "Account",
          "targetObjectRecordType" : "AccountRecordType1"
        }
      ],
      "ocrTemplateId": "48tRM00000000Yr"
    },
    {
      "apiName": "testemp",
      "documentTypeId": "0deRM00000000Dj",
      "name": "testemp",
      "ocrTargetObjects": [
        {
          "ocrTargetObjectId": "97hRM0000004ChL",
          "targetObject": "Account",
          "targetObjectRecordType" : "AccountRecordType1"
        },
        {
          "ocrTargetObjectId": "97hRM0000004Ckj",
          "targetObject": "Employee__c",
          "targetObjectRecordType" : null
        },
        {
          "ocrTargetObjectId": "97hRM00000000hD",
          "targetObject": "Contact",
          "targetObjectRecordType" : "ContactRecordType1"
        },
        {
          "ocrTargetObjectId": "97hRM00000000hE",
          "targetObject": "Lead",
          "targetObjectRecordType" : "LeadRecordType1"
        },
        {
          "ocrTargetObjectId": "97hRM00000000hF",
          "targetObject": "CareRequestItem",
          "targetObjectRecordType" : null
        },
        {
          "ocrTargetObjectId": "97hRM00000000hG",
          "targetObject": "Contract",
          "targetObjectRecordType" : "ContractRecordType1"
        },
        {
          "ocrTargetObjectId": "97hRM00000000hH",
          "targetObject": "Opportunity",
          "targetObjectRecordType" : "OpportunityRecordType1"
        },
        {
          "ocrTargetObjectId": "97hRM00000000hI",
          "targetObject": "CareDiagnosis",
          "targetObjectRecordType" : null
        }
      ],
      "ocrTemplateId": "48tRM0000004CjB"
    },
    {
      "apiName": "Ref123",
      "documentTypeId": "0deRM0000004CON",
      "name": "Ref123",
      "ocrTargetObjects": [
        {
          "ocrTargetObjectId": "97hRM0000004Cke",
          "targetObject": "Opportunity",
          "targetObjectRecordType" : "OpportunityRecordType1"
        },
        {
          "ocrTargetObjectId": "97hRM0000004Cka",
          "targetObject": "Account",
          "targetObjectRecordType" : "AccountRecordType1"
        },
        {
          "ocrTargetObjectId": "97hRM0000004Ckb",
          "targetObject": "Lead",
          "targetObjectRecordType" : "LeadRecordType1"
        },
        {
          "ocrTargetObjectId": "97hRM0000004CkZ",
          "targetObject": "Contact",
          "targetObjectRecordType" : "ContactRecordType1"
        }
      ],
      "ocrTemplateId": "48tRM0000004ClW"
    }
  ],
  "status": {
    "code": "SUCCESS",
    "message": "SUCCESS"
  }
}
```

## Related Topics

- OCR Template Output (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_connect_responses_ocr_template_output.htm)
