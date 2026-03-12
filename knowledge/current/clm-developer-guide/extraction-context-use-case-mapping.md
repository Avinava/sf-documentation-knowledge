---
title: "Extraction Context Use Case Mapping"
domain: clm-developer-guide
topic: extraction-context-use-case-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.526Z
estimatedTokens: 202
keywords: [Extraction, Context, Case, Mapping, Output, representation]
---

# Extraction Context Use Case Mapping

> Output representation of extraction context use case mapping.

# Extraction Context Use Case Mapping

Output representation of extraction context use case mapping.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| context​Definition | Extraction Context Definition | Details of the extraction context definition. | Small, 61.0 | 61.0 |
| context​Mapping | Extraction Context Mapping | Details of the extraction context mapping. | Small, 61.0 | 61.0 |
| record​Type | String | Name of the record type associated with the use case mapping. | Small, 61.0 | 61.0 |
| target​Object | String | Name of the target object for the use case mapping. | Small, 61.0 | 61.0 |
| template​Name | String | Name of the template associated with the use case mapping. | Small, 61.0 | 61.0 |

## Code Examples

```
{
  "contextUseCaseMapping": {
    "templateName": "ContractExtractionTemplate",
    "targetObject": "Contract",
    "recordType": "CLM",
    "contextDefinitionName": {
      "id": "11Oxx0000007MnhEAE",
      "developerName": "David Taylor",
      "name": "Dav"
    },
    "contextMapping": {
      "id": "11Oxx0000007MnhEAE",
      "name": "David Taylor"
    }
  }
}
```

## Related Topics

- Extraction Context Definition (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_extraction_context_definition.htm)
- Extraction Context Mapping (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_extraction_context_mapping.htm)
