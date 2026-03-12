---
title: "Tag Record Assignment"
domain: psc-api
topic: tag-record-assignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.284Z
estimatedTokens: 154
keywords: [Tag, Record, Assignment, Output, representation]
---

# Tag Record Assignment

> Output representation of the assignment details.

# Tag Record Assignment

Output representation of the assignment details.

Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| assignmentId | String | The assignment ID of an Interest Tag and the Salesforce object record. | Small, 54.0 | 54.0 |
| objectName | String | The name of the Salesforce object to which this record belongs. | Small, 54.0 | 54.0 |
| recordId | String | The ID of the Salesforce object record. | Small, 54.0 | 54.0 |
| recordName | String | The name of the Salesforce object record. | Small, 54.0 | 54.0 |

## Code Examples

```
{
   "recordId":"001i000001AWbWuabc",
   "objectName":"Account",
   "recordName":"Square Pizza"
}
```
