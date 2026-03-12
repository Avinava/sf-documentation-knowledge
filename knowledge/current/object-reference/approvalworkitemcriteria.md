---
title: "ApprovalWorkItemCriteria"
domain: object-reference
topic: approvalworkitemcriteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.787Z
estimatedTokens: 393
keywords: [ApprovalWorkItemCriteria, logic, smart, approval, evaluated, API, version, 64.0, later, Calls, Special, Access, Rules]
---

# ApprovalWorkItemCriteria

> Represents the logic by which a smart approval request is evaluated.
      This object is available in API version 64.0 and later.

# ApprovalWorkItemCriteria

Represents the logic by which a smart approval request is evaluated. This object is available in API version 64.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Special Access Rules

This object is available in Enterprise, Professional, Unlimited, and Developer Editions where Advanced Approvals is enabled with the Modify All Data or the Approval Admin user permission.

## Fields

| Field | Details |
| --- | --- |
| ApprovalStepApiName | TypestringPropertiesFilter, Group, Sort, UpdateDescriptionThe unique API name of the approval step that uses the logic in the approval work item criteria. |
| ApprovalWorkItemId | TypereferencePropertiesFilter, Group, SortDescriptionThe parent approval work item associated with the approval work item criteria.This field is a relationship field.Relationship NameApprovalWorkItemRelationship TypeMaster-detailRefers ToApprovalWorkItem (the master object) |
| CriteriaType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the requirement logic is for an entry or exit condition.Possible values are:EntryExit |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe sequentially-generated name of the approval work item criteria record, for example AWCR-000000071. |
| RequirementLogic | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe requirement logic of all entry or exit conditions. |
