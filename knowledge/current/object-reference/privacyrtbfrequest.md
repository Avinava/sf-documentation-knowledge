---
title: "PrivacyRTBFRequest"
domain: object-reference
topic: privacyrtbfrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.120Z
estimatedTokens: 870
keywords: [PrivacyRTBFRequest, Right, Forgotten, made, Privacy, Center, API, version, 59.0, later, Calls, Special, Access, Rules, Associated]
---

# PrivacyRTBFRequest

> Represents a Right to Be Forgotten Request made in Privacy Center. This
      object is available in API version 59.0 and later.

# PrivacyRTBFRequest

Represents a Right to Be Forgotten Request made in Privacy Center. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available for users with the Privacy Center license and the Manage Privacy Center Policies user permission.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the customer’s Right to Be Forgotten request. |
| JobRecord | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record ID that is processed by the Right to Be Forgotten request. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Right to Be Forgotten request. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the account associated with this customer.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PolicyNameId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the Right to Be Forgotten policy applied to this request.This field is a relationship field.Relationship NamePolicyNameRelationship TypeLookupRefers ToPrivacyPolicyDefinition |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRepresents the status of the request.Possible values are:CancelledCompleteErrorPendingScheduled |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PrivacyRTBFRequestHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PrivacyRTBFRequestOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PrivacyRTBFRequestShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PrivacyRTBFRequestHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- PrivacyRTBFRequestOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PrivacyRTBFRequestShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
