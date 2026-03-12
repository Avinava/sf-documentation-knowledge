---
title: "ClaimItem"
domain: psc-api
topic: claimitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.791Z
estimatedTokens: 879
keywords: [ClaimItem, claim, items, collision, damage, roadside, assistance, rental, care, their, coverage, Calls, Special, Access, Rules]
---

# ClaimItem

> Represents claim items (such as collision damage, roadside assistance, rental
         care) and their coverage details.

# ClaimItem

Represents claim items (such as collision damage, roadside assistance, rental care) and their coverage details.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To access this object on your Public Sector Solutions org, Benefit Disbursement must be enabled and you must have the Benefit Disbursement Access permission set or the Benefit Disbursement permission set license.

To access this object on your Experience Cloud site, users need the Benefit Assistance Community Access permission set or the Benefit Assistance for Communities permission set license.

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the category of the claim item.Picklist values aren't predefined for this field. Before you create a record, ensure that your Salesforce admin has defined picklist values based on your organization’s requirement. |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The parent claim that includes this claim item.This field is a relationship field.Relationship NameClaimRelationship TypeMaster-DetailRefers ToClaim |
| ClaimParticipantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe claim participant associated with the claim item.This field is a relationship field.Relationship NameClaimParticipantRelationship TypeLookupRefers ToClaimParticipant |
| CurrentAddress | TypeaddressPropertiesFilter, NillableDescriptionThe location of the claim item.This is a compound field of type Address and combines these fields: CurrentCity, CurrentCountry, CurrentGeocodeAccuracy, CurrentLatitude, CurrentLongitude, CurrentPostalCode, CurrentState, and CurrentStreet. For more information, see Address Compound Fields. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the claim item. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of the item that’s included in the claim. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClaimItemFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClaimItemHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ClaimItemFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- ClaimItemHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
