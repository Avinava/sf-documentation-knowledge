---
title: "DecisionTableParameter"
domain: sfFieldRef
topic: decisiontableparameter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.983Z
estimatedTokens: 331
keywords: [DecisionTableParameter, input, output, decision, business, rule, custom, metadata, evaluate]
---

# DecisionTableParameter

> Represents an input or output field in a decision table. An input field is a
         field in the business rule object or custom metadata type that contains values used by the
         decision table to evaluate field values. An output field is a field in the business rule
         object or custom

# DecisionTableParameter

Represents an input or output field in a decision table. An input field is a field in the business rule object or custom metadata type that contains values used by the decision table to evaluate field values. An output field is a field in the business rule object or custom metadata type that contains the values provided as outcomes for a rule.

For more information, see DecisionTableParameter in the Industries Common Resources Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DecisionTableId | Decision Table ID | reference |  | 18 |  |  |
| FieldName | Attribute | string |  | 120 |  |  |
| Id | Decision Table Parameter ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsGroupByField | Group By Field | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Operator | Operator | picklist |  | 255 |  |  |
| Sequence | Sequence | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Usage | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
