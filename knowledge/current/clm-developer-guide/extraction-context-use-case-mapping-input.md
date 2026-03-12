---
title: "Extraction Context Use Case Mapping Input"
domain: clm-developer-guide
topic: extraction-context-use-case-mapping-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.172Z
estimatedTokens: 176
keywords: [Extraction, Context, Case, Mapping, Input, representation, case-mapping, configuration]
---

# Extraction Context Use Case Mapping Input

> Input representation of the use case-mapping configuration in the extraction
    context.

# Extraction Context Use Case Mapping Input

Input representation of the use case-mapping configuration in the extraction context.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| context​Definition​DeveloperName | String | Developer name of the context definition. | Required | 61.0 |
| mapping​Name | String | Name of the mapping. | Required | 61.0 |
| record​Type | String | Type of the record involved in the mapping. | Required | 61.0 |
| target​Object | String | SObject that the data maps to. | Required | 61.0 |
| template​Name | String | Name of the template used for the mapping. | Required | 61.0 |

## Code Examples

```
{
  "ContextUsecaseMapping": {
    "templateName": "ContractExtractionTemplate",
    "contextDefinitionDeveloperName": "ContractExtractionContextDefinition",
    "mappingName": "ContractExtractionMappingName",
    "targetObject": "Contract",
    "recordType": "CLM"
  }
}
```
