---
title: "OrgDeleteRequest"
domain: object-reference
topic: orgdeleterequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.142Z
estimatedTokens: 491
keywords: [OrgDeleteRequest, developer, edition, org, API, version, 42.0, later, Database.com, editions, Calls, Associated, Objects]
---

# OrgDeleteRequest

> Represents a request to delete a developer edition (DE) org. This
		object is available in API version 42.0 and later. It is available only in Developer and
		Database.com editions.

# OrgDeleteRequest

Represents a request to delete a developer edition (DE) org. This object is available in API version 42.0 and later. It is available only in Developer and Database.com editions.

## Supported Calls

create(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated ID of this OrgDeleteRequest object. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionThe ID of the user who initiated the org delete request. |
| RequestType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionSpecifies whether you want to deactivate or reactivate the org. When you deactivate an org, you have 30 days to change your mind and reactivate it. After 30 days, the org is locked, and you must contact Salesforce Customer Support to reactivate it. After 60 days, the org is permanently deleted from Salesforce servers.Valid values:DeactivateReactivate |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[OrgDeleteRequestOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[OrgDeleteRequestShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- OrgDeleteRequestOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- OrgDeleteRequestShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
