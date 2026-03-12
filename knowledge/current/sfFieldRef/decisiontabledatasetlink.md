---
title: "DecisionTableDatasetLink"
domain: sfFieldRef
topic: decisiontabledatasetlink
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:55.978Z
estimatedTokens: 341
namespace: NamespacePrefix
keywords: [DecisionTableDatasetLink, dataset, link, associated, decision, links, select, multiple, source, objects, whose, evaluate, provide, outcomes]
---

# DecisionTableDatasetLink

> Represents a dataset link associated with a decision table. Use dataset links
         in a decision table to select multiple source objects whose field values the decision table
         must evaluate and provide outcomes for.

**Namespace:** `NamespacePrefix`

# DecisionTableDatasetLink

Represents a dataset link associated with a decision table. Use dataset links in a decision table to select multiple source objects whose field values the decision table must evaluate and provide outcomes for.

For more information, see DecisionTableDatasetLink in the Industries Common Resources Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DecisionTableId | Decision Table ID | reference |  | 18 |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Id | Decision Table Payload ID | id |  | 18 |  |  |
| IsDefault | Is Default | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SetupName | Name | string |  | 120 |  |  |
| SourceObject | Source Object | string |  | 120 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
