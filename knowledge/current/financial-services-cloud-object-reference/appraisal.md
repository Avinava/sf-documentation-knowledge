---
title: "Appraisal"
domain: financial-services-cloud-object-reference
topic: appraisal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.498Z
estimatedTokens: 992
keywords: [Appraisal, items, API, version, 63.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# Appraisal

> Represents the appraisal for one or more items. This object is available in API
      version 63.0 and later.

# Appraisal

Represents the appraisal for one or more items. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Automotive and Appraisal Management must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AppraisedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact or the user who performs an appraisal.This field is a polymorphic relationship field.Relationship NameAppraisedByRefers ToContact, User |
| Comment | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe dealer or customer provides a comment for the appraisal, such as instructions or context. |
| Fee | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe fee for the appraisal. |
| FinalAppraisalValue | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe final appraisal value that sums up the total item final value and the total adjustment value of an appraisal.This field is a calculated field. |
| InitiatedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account, contact, or user who initiates an appraisal.This field is a polymorphic relationship field.Relationship NameInitiatedByRefers ToAccount, Contact, User |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the appraisal is active (true) or not (false).The default value is false. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the appraisal record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PurposeType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the purpose of the appraisal, such as sales, trade-in, or valuation of an asset.Possible values are:SaleTrade-In |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record of an object, such as lead, account, opportunity, or application form product that serves as the context for the appraisal.This field is a polymorphic relationship field.Relationship NameReferenceRecordRefers ToAccount, Case, Lead, Opportunity |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the appraisal. |
| TotalAdjustmentValue | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe cumulative value based on all appraisal adjustments that refer to an appraisal.This field is a calculated field. |
| TotalItemFinalValue | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe cumulative value based on all the final values of all items related to the appraisal.This field is a calculated field. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe usage type of the appraisal.Possible values are:Automotive |
| ValidityEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until which the appraisal is valid. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AppraisalChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[AppraisalHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
