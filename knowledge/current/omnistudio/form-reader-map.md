---
title: "Form Reader Map"
domain: omnistudio
topic: form-reader-map
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.947Z
estimatedTokens: 149
keywords: [Form, Reader, Map, Output, representation, mappings, extracted, text]
---

# Form Reader Map

> Output representation of the mappings of the extracted
    text.

# Form Reader Map

Output representation of the mappings of the extracted text.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| formReaderTarget​ObjectMappings | Form Reader Target Object Mappings[] | List of mappings between the values of the keys extracted from the document to the Salesforce object fields for the given template. | Small, 54.0 | 54.0 |
| status | Status | Indicates whether the request succeeded or failed, and also provides a message if there’s failure. | Small, 54.0 | 54.0 |

## Code Examples

```
{
  "formReaderTargetObjectMappings": [
    {
      "formReaderObjectFieldMapping": [
        {
          "confidence": 53.500003814697266,
          "pageNumber": 1,
          "targetFieldName": "CloseDate",
          "value": "700180537595"
        }
      ],
      "targetObjectName": "Opportunity"
    },
    {
      "formReaderObjectFieldMapping": [
        {
          "confidence": 99,
          "pageNumber": 1,
          "targetFieldName": "Origin",
          "value": "845-858-7612"
        },
        {
          "confidence": 99,
          "pageNumber": 1,
          "targetFieldName": "SuppliedEmail",
          "value": "845-858-7612"
        },
        {
          "confidence": 70,
          "pageNumber": 1,
          "targetFieldName": "Reason",
          "value": "XXX5230CSN:"
        },
        {
          "confidence": 86,
          "pageNumber": 1,
          "targetFieldName": "IsClosed",
          "value": "NY CDPHP MEDICAID HMO"
        },
        {
          "confidence": 82.5,
          "pageNumber": 2,
          "targetFieldName": "SuppliedEmail",
          "value": "914-443-8500 (Home) 914-443-8500 (Mobile)"
        }
      ],
      "targetObjectName": "Case"
    }
  ],
  "status": {
    "code": "SUCCESS",
    "message": "API call has been executed Successfully."
  }
}
```

## Related Topics

- Form
                  Reader Target Object Mappings (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_form_reader_target_object_mapping.htm)
- Form Reader Target Object Mappings (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_responses_document_reader_object_field_mapping.htm)
