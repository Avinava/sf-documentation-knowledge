---
title: "LoyaltyPgmEngmtAttribute"
domain: loyalty
topic: loyaltypgmengmtattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.124Z
estimatedTokens: 1206
keywords: [LoyaltyPgmEngmtAttribute, engagement, attribute, loyalty, program, API, version, 55.0, later, Calls, Associated, Objects]
---

# LoyaltyPgmEngmtAttribute

> Represents information about an engagement attribute for a loyalty
         program. This object is available in API version 55.0 and later.

# LoyaltyPgmEngmtAttribute

Represents information about an engagement attribute for a loyalty program. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DefaultValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default value for the loyalty program engagement attribute. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description for the loyalty program engagement attribute. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the loyalty program engagement attribute ends. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe loyalty program that’s related to the loyalty program engagement attribute.This is a relationship field.Relationship NameLoyaltyProgramRelationship TypeMaster-detailRefers ToLoyaltyProgram |
| MaximumResetCountPerPeriod | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of times the current value of an engagement attribute can be reset during a period. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the loyalty program engagement attribute. |
| ResetValueOn | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe day on which loyalty program members' current value for the engagement attribute must be reset.If the reset frequency is Weekly, specify the day of the week when the current value is reset. To reset the current value on a Sunday, enter 1. To reset the current value on a Saturday, enter 7. If the reset frequency is Monthly, enter a value between 1 and 31. To reset the current value on the fifteenth of every month, enter 15. If the reset frequency is Yearly, enter a value between 1 and 12. To reset the current value on the first day of April month, enter 4. If the reset frequency is custom, enter the number of days after which the current value is reset. |
| ShouldOverwriteAttrCurrVal | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the associated member's current value is overwritten every period (true) or not (false).The default value is 'false'. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The date when the loyalty program engagement attribute ends. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the loyalty program engagement attribute.Possible values are:ActiveDraftInactiveThe default value is 'Draft'. |
| TargetValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value that the loyalty program member must reach to qualify for rewards of the engagement attribute. |
| ValueResetFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe frequency at which the loyalty program member's engagement attribute value is reset.Possible values are:CustomPeriod—Custom PeriodDailyMonthlyWeeklyYearly |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyPgmEngmtAttributeChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[LoyaltyPgmEngmtAttributeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

## Related Topics

- LoyaltyPgmEngmtAttributeChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
