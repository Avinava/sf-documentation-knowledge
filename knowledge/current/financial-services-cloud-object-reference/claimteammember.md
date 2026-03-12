---
title: "ClaimTeamMember"
domain: financial-services-cloud-object-reference
topic: claimteammember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.821Z
estimatedTokens: 625
keywords: [ClaimTeamMember, user, part, claim, team, API, version, 55.0, later, Calls, Associated, Objects]
---

# ClaimTeamMember

> Represents a user who is a part of the claim team. This object is available in API version 55.0 and later.

# ClaimTeamMember

Represents a user who is a part of the claim team. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe claim associated with the claim team member.This is a relationship field.Relationship NameClaimRelationship TypeLookupRefers ToClaim |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the claim team member record. |
| Role | TypemultipicklistPropertiesCreate, Filter, UpdateDescriptionThe role of the claim team member.Possible values are:Claim AdminClaim OwnerClaim SupervisorSpecial Investigative Unit |
| UserId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe user associated with the claim as a claim team member.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClaimTeamMemberFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClaimTeamMemberHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ClaimTeamMemberFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ClaimTeamMemberHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
