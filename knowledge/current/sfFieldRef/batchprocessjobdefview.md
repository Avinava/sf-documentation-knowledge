---
title: "BatchProcessJobDefView"
domain: sfFieldRef
topic: batchprocessjobdefview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.538Z
estimatedTokens: 280
namespace: NamespacePrefix
keywords: [BatchProcessJobDefView, Batch, Job, definition, file-based, definitions, Salesforce, org, API, version, 51.0, later]
---

# BatchProcessJobDefView

> Represents the details of a Batch Job definition. The definition can also be
      file-based definitions that are available in your Salesforce org. This object is
    available in API version 51.0 and later.

**Namespace:** `NamespacePrefix`

# BatchProcessJobDefView

Represents the details of a Batch Job definition. The definition can also be file-based definitions that are available in your Salesforce org. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BatchProcessJobDefView in the Industries Shared Features Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| DurableId | Durable ID | string |  | 255 |  |  |
| Id | Batch Process Job Definition View ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| Label | Label | string |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| NamespacePrefix | Namespace | string |  | 255 |  |  |
| ProcessDefinition | Process Definition | textarea |  | 32000 |  |  |
| ProcessGroup | Group | string |  | 80 |  |  |
| SourceObjectName | Source Object Name | string |  | 80 |  |  |
| Type | Type | string |  | 255 |  |  |
| TypeInstance | Type Instance | string |  | 80 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
