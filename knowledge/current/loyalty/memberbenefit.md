---
title: "MemberBenefit"
domain: loyalty
topic: memberbenefit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.363Z
estimatedTokens: 1057
keywords: [MemberBenefit, benefit, that’s, assigned, loyalty, program, member, action, triggered, API, version, 51.0, later, Calls, Associated]
---

# MemberBenefit

> Represents details about a benefit that’s assigned to a loyalty program member
      and has a benefit action that’s triggered. This object is available in API version 51.0
    and later.

# MemberBenefit

Represents details about a benefit that’s assigned to a loyalty program member and has a benefit action that’s triggered. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account associated with the member benefit.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| BenefitId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the benefit associated with the member benefit.This is a relationship field.Relationship NameBenefitRelationship TypeLookupRefers ToBenefit |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the contact associated with the member benefit.This is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the member benefit. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the member benefit. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| MemberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the member associated with the member benefit.This is a polymorphic relationship field.Relationship NameMemberRelationship TypeLookupRefers ToLoyaltyProgramMember |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the member benefit. |
| PrimaryRefObjectRecord | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of a record created by the member benefit. |
| PrimaryRefObjectRecordTitle | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe title of a record created by the member benefit. |
| SourceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The source of the benefit.Possible values are:LoyaltyTierProcessingManual |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the member benefit. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the member benefit.Possible values are:ExpiredExpiredPendingProcessing—Expired - Awaiting ProcessingNewPendingProcessing—New - Awaiting ProcessingProcessedUpdatedPendingProcessing—Updated - Awaiting ProcessingThe default value is NewPendingProcessing. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MemberBenefitChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[MemberBenefitHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

## Related Topics

- MemberBenefitChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
