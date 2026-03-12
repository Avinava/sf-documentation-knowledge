---
title: "ApprovalWorkItemCondition"
domain: sfFieldRef
topic: approvalworkitemcondition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.912Z
estimatedTokens: 453
keywords: [ApprovalWorkItemCondition, condition, starting, concluding, approval, step, that's, evaluated, part, smart, process, API, version, 64.0, later]
---

# ApprovalWorkItemCondition

> Represents a condition for starting and concluding an approval step that's
         evaluated as part of the smart approval process. This object is available in API
      version 64.0 and later.

# ApprovalWorkItemCondition

Represents a condition for starting and concluding an approval step that's evaluated as part of the smart approval process. This object is available in API version 64.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ApprovalWorkItemCondition](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_approvalworkitemcondition.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApprovalWorkItemCriteriaId | Approval Work Item Criteria ID | reference |  | 18 |  |  |
| ConditionSequencePosition | Condition Sequence Position | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| HasEvaluationSucceeded | Evaluation Succeeded | boolean |  |  |  |  |
| Id | Approval Work Item Condition ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LeftValue | Left Value | textarea |  | 131072 |  |  |
| LeftValueDataType | Left Value Data Type | picklist |  | 255 |  |  |
| Name | Approval Work Item Condition Name | string |  | 255 |  |  |
| OperatorType | Operator Type | picklist |  | 255 |  |  |
| RightValue | Right Value | textarea |  | 131072 |  |  |
| RightValueDataType | Right Value Data Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
