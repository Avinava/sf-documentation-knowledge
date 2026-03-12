---
title: "PartyCategory"
domain: nonprofit-cloud
topic: partycategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.208Z
estimatedTokens: 896
keywords: [PartyCategory, criteria, categorizing, contacts, accounts, specific, classification, time, period, API, version, 64.0, later, Calls, Special]
---

# PartyCategory

> The criteria for categorizing contacts and accounts based on specific
         classification information for a specified time period. This object is available in
      API version 64.0 and later.

# PartyCategory

The criteria for categorizing contacts and accounts based on specific classification information for a specified time period. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account ID related to the classification record.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| Classification | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe classification associated with the contact or account.Possible values are:High Net Worth ProspectInfluencer ProspectLYBUNTLapsed DonorLegacy ProspectLifetime StewardshipSYBUNTTop 100Top 25Undergrad or Grad Prospect |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact ID related to the classification record.This field is a relationship field.Relationship NameContactRefers ToContact |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the classification. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the classification record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the classification. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the classification record.Possible values are:ActiveArchivedErrorInactivePendingSuperseded |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyCategoryHistory](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PartyCategoryOwnerSharingRule](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PartyCategoryShare](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PartyCategoryHistory (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)
- PartyCategoryOwnerSharingRule (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)
- PartyCategoryShare (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)
