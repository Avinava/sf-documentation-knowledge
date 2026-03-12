---
title: "Advanced Approvals Fields on Approval Work Item"
domain: revenue-cloud
topic: advanced-approvals-fields-on-approval-work-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:04.093Z
estimatedTokens: 501
keywords: [Advanced, Approvals, Fields, Approval, Work, Item, Standard, custom, fields, extend, standard, Approvals., Supported, Calls, Special, Access, Rules]
---

# Advanced Approvals Fields on Approval Work Item

> Standard and custom fields extend the standard Approval Work Item
         object for use in Advanced Approvals.

# Advanced Approvals Fields on Approval Work Item

Standard and custom fields extend the standard Approval Work Item object for use in Advanced Approvals.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Special Access Rules

This object is available in Enterprise, Performance, Unlimited, and Developer Editions for users with access to the Approval Submission object.

## Fields

| Field | Details |
| --- | --- |
| ApprovalChainName | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe name of the related approval chain. This field is populated when there are multiple approval chains that are run in parallel. This field is only available with Advanced Approvals enabled. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for organizations with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization.Valid values are:AED—UAE DirhamAUD—Australian DollarBRL—Brazilian RealCAD—Canadian DollarEUR—EuroGBP—British PoundINR—Indian RupeeJPY—Japanese YenSEK—Swedish KronaUSD—U.S. DollarThe default value is USD. |
| IsAutoReviewed | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the approval work item is eligible for smart approval (true) or not (false).The default value is false. |
| IsEligibleForSmartApproval | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the approval work item is eligible for smart approval (true) or not (false).The default value is false. |
| SmartApprovalBasisWorkItemId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe previous approval work item used as a reference for the auto-approval evaluation.This field is a relationship field.Relationship NameSmartApprovalBasisWorkItemRefers ToApprovalWorkItem |
