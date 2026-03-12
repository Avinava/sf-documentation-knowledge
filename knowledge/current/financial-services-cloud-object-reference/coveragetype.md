---
title: "CoverageType"
domain: financial-services-cloud-object-reference
topic: coveragetype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:29.899Z
estimatedTokens: 1840
keywords: [CoverageType, coverage, liability, earthquake, collision, damage, enabled, Access, Master, org, pref, Calls, Associated, Objects]
---

# CoverageType

> Represents the type of coverage, such as liability, earthquake, or
			collision damage. You see this object only if you have enabled the Access Master List of
			Coverage Types org pref.

# CoverageType

Represents the type of coverage, such as liability, earthquake, or collision damage. You see this object only if you have enabled the Access Master List of Coverage Types org pref.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BenefitPaymentFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe frequency of the payment if the benefit or coverage entails a recurring payout to the insured. |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category that the coverage belongs to. For example, benefit, clause, deductible, rider. |
| CategoryCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA carrier-specific code that identifies the coverage. For example, benefit, clause, or deductible. |
| CategoryGroup | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe specific category group. For example, for a liability coverage record, benefit is the category and liability is the category group. |
| CategoryGroupType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the category group. |
| CategoryGroupTypeValue | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionIdentifies the coverage limit type. For example, for a liability coverage of USD 1000 per person and USD 1500 per occurrence, Amount per Person and Amount per Occurrence are the category group type values. |
| CoverageCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA carrier-specific code that identifies the policy limit code in the source system. |
| DeathBenefitOptionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe method for the payment of death benefit. |
| DeductibleAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe deductible amount that the customer must pay. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the coverage type. |
| Discount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe discount that was given on the coverage or the benefit. |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date from which the coverage is in effect. |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the coverage expires. |
| IncomeOptionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the income option given to the policy participant. For example, periodic payment is an income option type, and annuity is an income option. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LimitAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe limit of the fixed coverage amount. For example, uninsured motorist coverage of USD 1000. |
| LimitDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which the coverage limit is in effect. For example, an annuity benefit is valid only after the insured is 60 years old. |
| LimitPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the actuals covered by this coverage. |
| LimitRange | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe range of the coverage limit. For example, bodily injury coverage with limits as USD 100,000 per person and USD 300,000 per accident. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionAn auto-generated number assigned to this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner. |
| PremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe premium paid by the customer for this coverage. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system this record was obtained from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this coverage record in the source system. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[CoverageTypeChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[CoverageTypeFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CoverageTypeHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CoverageTypeOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CoverageTypeShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CoverageTypeChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CoverageTypeFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CoverageTypeHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CoverageTypeOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- CoverageTypeShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
