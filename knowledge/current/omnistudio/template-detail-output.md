---
title: "Template Detail Output"
domain: omnistudio
topic: template-detail-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.458Z
estimatedTokens: 117
keywords: [Template, Detail, Output, representation, OCR]
---

# Template Detail Output

> Output representation of the OCR template.

# Template Detail Output

Output representation of the OCR template.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| status | Status | Indicates whether the request succeeded or failed, and in the case of failure, it also provides the reason. | Small, 55.0 | 55.0 |
| templateDetail | Template Detail | Represents the details of the OCR template. | Small, 55.0 | 55.0 |

## Code Examples

```
{
  "status": {
    "code": "SUCCESS",
    "message": "SUCCESS"
  },
  "templateDetail": {
    "documentTypeId": "0deRM0000004CNZ",
    "name": "testtrim",
    "ocrSampleDocuments": [
      {
        "name": "Passport",
        "ocrSampleDocumentId": "9QiRM00000000HH0AY"
      },
      {
        "name": "TrimChars1",
        "ocrSampleDocumentId": "9QiRM00000000J30AI"
      }
    ],
    "ocrTargetObjectFieldMappings": [
      {
        "documentField": {
          "fieldLabelMaxX": 0.38931194,
          "fieldLabelMaxY": 0.6017847,
          "fieldLabelMinX": 0.14168938,
          "fieldLabelMinY": 0.4804811,
          "name": "Place:",
          "ocrSampleDocumentId": "9QiRM00000000J30AI",
          "pageNumber": 1
        },
        "ocrTargetObjectFields": [
          {
            "targetObject": "Account",
            "targetObjectField": "Name",
            "targetObjectRecordType" : "AccountRecordType1"
          }
        ]
      },
      {
        "documentField": {
          "fieldLabelMaxX": 0.4520034,
          "fieldLabelMaxY": 0.24929473,
          "fieldLabelMinX": 0.1497066,
          "fieldLabelMinY": 0.13238272,
          "name": "*Name*:Rajiv",
          "ocrSampleDocumentId": "9QiRM00000000J30AI",
          "pageNumber": 1
        },
        "ocrTargetObjectFields": [
          {
            "targetObject": "Account",
            "targetObjectField": "Description",
            "targetObjectRecordType" : "AccountRecordType1"
          }
        ]
      },
      {
        "documentField": {
          "fieldLabelMaxX": 0.39928117,
          "fieldLabelMaxY": 0.8004167,
          "fieldLabelMinX": 0.14354157,
          "fieldLabelMinY": 0.64222884,
          "name": "Emp ID",
          "ocrSampleDocumentId": "9QiRM00000000J30AI",
          "pageNumber": 1
        },
        "ocrTargetObjectFields": [
          {
            "targetObject": "Account",
            "targetObjectField": "BillingPostalCode",
            "targetObjectRecordType" : "AccountRecordType1"
          },
          {
            "targetObject": "Employee__c",
            "targetObjectField": "Employee__c.Employee_ID__c",
            "targetObjectRecordType" : null
          }
        ]
      }
    ],
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
  }
}
```

## Related Topics

- Template Detail (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_template_detai.htm)
- Template Detail (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_responses_template_details.htm)
