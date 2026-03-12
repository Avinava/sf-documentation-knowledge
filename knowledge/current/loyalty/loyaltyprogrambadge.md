---
title: "LoyaltyProgramBadge"
domain: loyalty
topic: loyaltyprogrambadge
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.212Z
estimatedTokens: 926
keywords: [LoyaltyProgramBadge, badge, that's, associated, loyalty, program, API, version, 56.0, later, Calls, Objects]
---

# LoyaltyProgramBadge

> Represents information about the badge that's associated with a
         loyalty program. This object is available in API version 56.0 and later.

# LoyaltyProgramBadge

Represents information about the badge that's associated with a loyalty program. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the loyalty program badge. |
| ImageUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URL of the image location for the loyalty program badge. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe loyalty program that's associated with the badge.This field is a relationship field.Relationship NameLoyaltyProgramRelationship TypeMaster-detailRefers ToLoyaltyProgram |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the loyalty program badge. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The date from when the loyalty program badge can be assigned to members. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the status of the loyalty program badge.Possible values are:ActiveDraftInactive |
| ValidityDuration | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the unit of measure for the validity period. |
| ValidityDurationUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe number of days or months in the validity period.Possible values are:DaysMonths |
| ValidityEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date after which the badge is no longer assigned to members. Select a value for this field if the badge's validity type is FixedDate. |
| ValidityType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the model used to determine the deration for which the badge is valid for a member.Possible values are:FixedDate—Fixed DatePeriod |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyProgramBadgeChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[LoyaltyProgramBadgeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

## Related Topics

- LoyaltyProgramBadgeChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
