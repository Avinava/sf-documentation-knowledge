---
title: "PartyCertifiedCapacity"
domain: psc-api
topic: partycertifiedcapacity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.056Z
estimatedTokens: 1458
keywords: [PartyCertifiedCapacity, captured, certificate, capacity, party's, work, timeline, recovery, API, version, 60.0, later, Calls, Special, Access]
---

# PartyCertifiedCapacity

> Represents the information captured from the certificate of capacity, such as
         the party's capacity to work, a timeline for recovery, and return to work. This object
      is available in API version 60.0 and later.

# PartyCertifiedCapacity

Represents the information captured from the certificate of capacity, such as the party's capacity to work, a timeline for recovery, and return to work. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To access this object on your Public Sector Solutions org, Benefit Disbursement must be enabled and you must have the Benefit Disbursement Access permission set or the Benefit Disbursement permission set license.

## Fields

| Field | Details |
| --- | --- |
| Capacity | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of capacity the party is able to work. |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe claim associated with the party certified capacity.This field is a relationship field.Relationship NameClaimRelationship TypeLookupRefers ToClaim |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the period the certificate is effective for. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the period the certificate is effective for. |
| ExpectedWorkReturnDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expected date the party returns to work. |
| FullCapacityFromDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the party has the full capacity to work. |
| IssueDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date the certificate was issued. |
| IssuerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe issuer of the party certified capacity.This field is a polymorphic relationship field.Relationship NameIssuerRelationship TypeLookupRefers ToAccount, Contact, HealthcareProvider |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the party certified capacity. |
| NoCapacityEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the certified period in which the party has no capacity to work. |
| NoCapacityStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the certified period in which the party has no capacity to work. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartialCapacityEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the certified period in which the party has some capacity to work. |
| PartialCapacityStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the certified period in which the party has some capacity to work. |
| PartyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe party associated with the party certified capacity.This field is a polymorphic relationship field.Relationship NamePartyRelationship TypeLookupRefers ToAccount, ClaimParticipant, Contact |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the certificate.Possible values are:ClosedInprogressNew |
| UsageType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the application using the entity to populate data.Possible value: Claim |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyCertifiedCapacityFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PartyCertifiedCapacityHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PartyCertifiedCapacityOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PartyCertifiedCapacityShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PartyCertifiedCapacityFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- PartyCertifiedCapacityHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- PartyCertifiedCapacityOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- PartyCertifiedCapacityShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
