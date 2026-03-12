---
title: "Extraction Context Mapping (POST)"
domain: clm-developer-guide
topic: extraction-context-mapping-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.356Z
estimatedTokens: 228
keywords: [Extraction, Context, Mapping, POST, context-mapping, show, how, extracted, data, associated, Salesforce]
---

# Extraction Context Mapping (POST)

> Create extraction context-mapping details that show how extracted
      data is associated with Salesforce fields.

# Extraction Context Mapping (POST)

Create extraction context-mapping details that show how extracted data is associated with Salesforce fields.

Resource

```

```

Example

```

```

Available version

61.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| context​AttributeMapping | Extraction Context Attribute Mapping Input[] | List of attributes and their mappings. | Yes | 61.0 |
| context​UseCase​Mapping | Extraction Context Use Case Mapping Input | Details of the use case for which the mapping is defined. | Yes | 61.0 |

Response body for POST

[Extraction Context Mappings](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_extraction_context_mappings_output.htm "Output Representation to create and update extraction context mapping.")

## Code Examples

```
/connect/clm/extraction-context-mappings
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/clm/extraction-context-mappings
```

```
{
  "ContextUsecaseMapping": {
    "templateName": "ContractExtractionTemplate",
    "contextDefinitionDeveloperName": "ContractExtractionContextDefinition",
    "mappingName": "ContractExtractionMappingName",
    "targetObject": "Contract",
    "recordType": "CLM"
  },
  "contextAttributeMapping": [
    {
      "attributeId": "11nxx000001hOozAAE",
      "description": "extract startDate from the document"
    },
    {
      "attributeId": "11nxx000001hOozAAV",
      "description": "extract startDate from the document"
    },
    {
      "attributeId": "11nxx000001hOozAAR",
      "description": "extract startDate from the document"
    }
  ]
}
```

## Related Topics

- Extraction Context Attribute Mapping
                      Input[] (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_requests_extraction_context_attribute_mapping_input.htm)
- Extraction Context Use Case Mapping Input (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_requests_extraction_context_use_case_mapping_input.htm)
- Extraction Context Mappings (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_extraction_context_mappings_output.htm)
