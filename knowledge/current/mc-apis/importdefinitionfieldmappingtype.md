---
title: "ImportDefinitionFieldMappingType"
domain: mc-apis
topic: importdefinitionfieldmappingtype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:22.431Z
estimatedTokens: 210
keywords: [ImportDefinitionFieldMappingType, how, import, file, mapped, data, extension]
---

# ImportDefinitionFieldMappingType

> The ImportDefinitionFieldMappingType object defines how fields in an import file are mapped to fields in a data extension.

# ImportDefinitionFieldMappingType

The ImportDefinitionFieldMappingType object defines how fields in an import file are mapped to fields in a data extension.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| InferFromColumnHeadings | Enumeration | Indicates system matches field headings in import file to data extension fields as accurately as possible based on similarities in text and values. |
| ManualMap | Enumeration | Indicates that all relationships between fields in an import file and a data extension are explicitly stated in the API call. |
| MapByOrdinal | Enumeration | Indicates fields are mapped from an import field to a data extension by their ordinal position in the file. Use a 0-based ordinal when importing to a subscriber list, and use a 1-based ordinal when importing to a data extension. |
