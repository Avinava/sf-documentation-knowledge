---
title: "CoverageBenefitItem"
domain: life-sciences-dev-guide
topic: coveragebenefititem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.679Z
estimatedTokens: 1483
keywords: [CoverageBenefitItem, Specific, service, covered, insurance, plan, API, version, 53.0, later, Calls, Associated, Objects]
---

# CoverageBenefitItem

> Specific service covered by the insurance plan. This object is available in API version 53.0 and later.

# CoverageBenefitItem

Specific service covered by the insurance plan. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BenefitCategory | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the category this benefit is in. |
| CodeSetServiceTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of a Code Set Service Type in the Code Set object.This is a relationship field.Relationship NameCodeSetServiceTypeRelationship TypeLookupRefers ToCodeSet |
| CoverageBenefitId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the covered benefit this item belongs to.This is a relationship field.Relationship NameCoverageBenefitRelationship TypeLookupRefers ToCoverageBenefit |
| CoverageLevel | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the level of coverage provided by this item. |
| DoesDeductibleApply | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the benefit item requires a prior expenditure by the patient.The default value is 'false'. |
| FrequencyType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe frequency type of the coverage benefit item associated with the home healthcare visit.Possible values are:DailyFortnightlyMonthlyQuarterlyWeeklyYearlyThis field is available in API version 66.0 and later with the Home Health add-on license. |
| InNetworkCoverage | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the in network coverage provided by this item. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the benefit item is currently available.The default value is 'false'. |
| IsInPlanNetwork | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the benefit is available only in-network (true) or both in-network and out-of-network (false).The default value is 'false'. |
| IsPreauthorizationRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the service must be approved before use.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the member receiving this benefit item.This is a relationship field.Relationship NameMemberRelationship TypeLookupRefers ToAccount |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of this coverage benefit item. |
| Notes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information about this coverage benefit item. |
| OutofNetworkCoverage | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the coverage for non-preferred providers. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ServiceType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of service this plan benefit item provides. |
| ServiceTypeCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code for the type of service this plan benefit item provides. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system this coverage benefits item record came from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the CoverageBenefitItem in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe ID of this coverage benefits item record on its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which this coverage benefits item was last changed on the source system. |
| TimePeriod | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA description of the period this plan benefit item covers. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CoverageBenefitItemChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 59.0)

Change events are available for the object.

## Related Topics

- CoverageBenefitItemChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
