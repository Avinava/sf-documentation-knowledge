---
title: "LoyaltyPgmMbrAttributeVal"
domain: loyalty
topic: loyaltypgmmbrattributeval
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.145Z
estimatedTokens: 918
keywords: [LoyaltyPgmMbrAttributeVal, reached, loyalty, program, member, engagement, attribute, API, version, 55.0, later, Calls, Associated, Objects]
---

# LoyaltyPgmMbrAttributeVal

> Represents information about the value reached by a loyalty program member
         for an engagement attribute. This object is available in API version 55.0 and later.

# LoyaltyPgmMbrAttributeVal

Represents information about the value reached by a loyalty program member for an engagement attribute. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete()

## Fields

| Field | Details |
| --- | --- |
| CumulativeValue | TypedoublePropertiesCreate, Filter, Nillable, SortDescriptionThe cumulative value achieved by a loyalty program member for the related loyalty program engagement attribute across all the periods. |
| CurrentValue | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe value achieved by a loyalty program member for the related loyalty program member engagement attribute in during a specific period. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe end date of the period for which the member's progress towards achieving the related engagement attribute target is tracked. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastResetDate | TypedatePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe date on which the related loyalty program member's current value was last reset. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyPgmEngmtAttributeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The loyalty program engagement attribute that’s related to the loyalty program member engagement attribute value.This is a relationship field.Relationship NameLoyaltyPgmEngmtAttributeRelationship TypeLookupRefers ToLoyaltyPgmEngmtAttribute |
| LoyaltyProgramMemberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe loyalty program member that’s related to the loyalty program member engagement attribute value.This is a relationship field.Relationship NameLoyaltyProgramMemberRelationship TypeMaster-detailRefers ToLoyaltyProgramMember |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the loyalty program engagements attribute related to the loyalty program member engagement attribute value. |
| ResetCount | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe number of times the current value of the engagement attribute is reset. |
| StartDate | TypedatePropertiesCreate, Filter, Group, SortDescriptionRequired. The start date of the period for which the member's progress towards achieving the related engagement attribute target is tracked. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyPgmMbrAttributeValChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

## Related Topics

- LoyaltyPgmMbrAttributeValChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
