---
title: "Extraction Context Mappings (DELETE, GET, PATCH)"
domain: clm-developer-guide
topic: extraction-context-mappings-delete-get-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.360Z
estimatedTokens: 350
keywords: [Extraction, Context, Mappings, PATCH, mapping, case]
---

# Extraction Context Mappings (DELETE, GET, PATCH)

> Delete extraction context mapping details based on the specified
      context use case mapping ID. Get extraction context mapping details based on the specified
      context use case mapping ID. Update extraction context mapping details based on the specified
      context use case mapping ID.

# Extraction Context Mappings (DELETE, GET, PATCH)

Delete extraction context mapping details based on the specified context use case mapping ID. Get extraction context mapping details based on the specified context use case mapping ID. Update extraction context mapping details based on the specified context use case mapping ID.

Resource

```

```

Available version

61.0

HTTP methods

DELETE GET PATCH

Example for DELETE

```

```

Example for GET

```

```

Example for PATCH

```

```

Response body for GET

[Extraction Context Mapping](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_extraction_context_mapping_output.htm "Output representation of extraction context mapping.")

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| context​AttributeMapping | Extraction Context Attribute Mapping Input[] | List of attributes and their mappings. | Yes | 61.0 |
| context​UseCase​Mapping | Extraction Context Use Case Mapping Input | Details of the use case for which the mapping is defined. | Yes | 61.0 |

Response body for PATCH

[Extraction Context Mappings](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_extraction_context_mappings_output.htm "Output Representation to create and update extraction context mapping.")

## Code Examples

```
/connect/clm/extraction-context-mappings/${contextUseCaseMappingId}
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/clm/extraction-context-mappings/11jSB000002XTWjYAO
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/clm/extraction-context-mappings/11jSB000002XTWjYAO
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/clm/extraction-context-mappings/11jSB000002XTWjYAO
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

- Extraction Context Mapping (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_extraction_context_mapping_output.htm)
- Extraction Context Attribute Mapping
                      Input[] (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_requests_extraction_context_attribute_mapping_input.htm)
- Extraction Context Use Case Mapping Input (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_requests_extraction_context_use_case_mapping_input.htm)
- Extraction Context Mappings (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_extraction_context_mappings_output.htm)
