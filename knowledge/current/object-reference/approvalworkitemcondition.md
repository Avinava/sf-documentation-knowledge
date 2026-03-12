---
title: "ApprovalWorkItemCondition"
domain: object-reference
topic: approvalworkitemcondition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.778Z
estimatedTokens: 795
keywords: [ApprovalWorkItemCondition, condition, starting, concluding, approval, step, that's, evaluated, part, smart, process, API, version, 64.0, later]
---

# ApprovalWorkItemCondition

> Represents a condition for starting and concluding an approval step that's
         evaluated as part of the smart approval process. This object is available in API
      version 64.0 and later.

# ApprovalWorkItemCondition

Represents a condition for starting and concluding an approval step that's evaluated as part of the smart approval process. This object is available in API version 64.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Special Access Rules

This object is available in Enterprise, Professional, Unlimited, and Developer Editions where Advanced Approvals is enabled with the Modify All Data or the Approval Admin user permission.

## Fields

| Field | Details |
| --- | --- |
| ApprovalWorkItemCriteriaId | TypereferencePropertiesFilter, Group, SortDescriptionThe approval work item criteria associated with the approval work item condition. The approval work item criteria defines the logic by which the approval conditions are evaluated.This field is a relationship field.Relationship NameApprovalWorkItemCriteriaRelationship TypeMaster-detailRefers ToApprovalWorkItemCriteria (the master object) |
| ConditionSequencePosition | TypeintPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe order in which the condition is evaluated relative to other conditions that are part of the requirement logic. |
| HasEvaluationSucceeded | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the first value (left side) evaluates against the second value (right side) successfully (true) or not (false).The default value is false. |
| IsConditionExcluded | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the condition must be excluded from evaluation (true) or not (false) in an auto-approval process.The default value is false. |
| LeftValue | TypetextareaPropertiesNillable, UpdateDescriptionThe first value of the condition that's evaluated against the second value. |
| LeftValueDataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe data type of the first operand (left side) in this condition.Possible values are:ApexBooleanCurrencyDateDateTime—Date/TimeMultiSelectPicklist—Multi-Select PicklistNumberOtherPicklistTextTime |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe sequentially-generated name of the approval work item condition record, for example AWCO-000000071. |
| OperatorType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe operator for the condition.Possible values are:ContainsEndsWithEqualGreaterThanGreaterThanOrEqualToHasErrorInIsBlankIsChangedIsEmptyIsNullLessThanLessThanOrEqualToNoneNotEqualToNotInStartsWithWasSelectedWasSetWasVisited |
| RightValue | TypetextareaPropertiesNillable, UpdateDescriptionThe second value (right side) of the condition that's evaluated against the first value. |
| RightValueDataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe data type of the second operand for the condition.Possible values are:ApexBooleanCurrencyDateDateTime—Date/TimeMultiSelectPicklist—Multi-Select PicklistNumberOtherPicklistTextTime |
