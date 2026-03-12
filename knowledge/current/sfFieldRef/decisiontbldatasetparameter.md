---
title: "DecisionTblDatasetParameter"
domain: sfFieldRef
topic: decisiontbldatasetparameter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.989Z
estimatedTokens: 319
keywords: [DecisionTblDatasetParameter, mapping, decision, input, different, source, objects, dataset, link, know, evaluated, decisio]
---

# DecisionTblDatasetParameter

> Represents the mapping between the decision table input fields and
         the fields of the different source objects in the dataset link. This mapping allows the
         decision table to know which field values from the source objects must be evaluated by the
         input fields of the decisio

# DecisionTblDatasetParameter

Represents the mapping between the decision table input fields and the fields of the different source objects in the dataset link. This mapping allows the decision table to know which field values from the source objects must be evaluated by the input fields of the decision table.

For more information, see DecisionTblDatasetParameter in the Industries Common Resources Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DatasetFieldName | Dataset Field Name | string |  | 120 |  |  |
| DatasetSourceObject | Dataset Source Object | string |  | 120 |  |  |
| DecisionTableDatasetLinkId | Decision Table Payload ID | reference |  | 18 |  |  |
| DecisionTableParameterId | Decision Table Parameter ID | reference |  | 18 |  |  |
| Id | Decision Table Dataset Parameter ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
