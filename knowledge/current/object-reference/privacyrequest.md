---
title: "PrivacyRequest"
domain: object-reference
topic: privacyrequest
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:15.113Z
estimatedTokens: 1106
keywords: [PrivacyRequest, monitor, status, Data, Subject, Access, Requests, made, Privacy, Center, API, version, 54.0, later, Calls]
---

# PrivacyRequest

> See details and monitor the status of Data Subject Access Requests made in
         Privacy Center. This object is available in API version 54.0 and later.

# PrivacyRequest

See details and monitor the status of Data Subject Access Requests made in Privacy Center. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is for Privacy Center customers with the ReadAllData or PrivacyDataAccess permissions.

## Fields

| Field | Details |
| --- | --- |
| CompletedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the request was completed. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Privacy Request. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the account associated with this customer.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RelatedRecord | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Data Subject Access Request (DSAR) or Right to Be Forgotten request (RTBF) record related to the request. |
| StartedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the request was started. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the status of the request.Possible values are:ApprovedCancelledCompletedCreatedIn ProgressRejected |
| TargetRecord | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record that is listed in the request. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the type of request that was made.Possible values are:DSARGlobalOptOutRTBF |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PrivacyRequestFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PrivacyRequestHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PrivacyRequestOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PrivacyRequestShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Usage

In API version 66.0 and later, users can click **New Privacy Request** to create privacy requests directly from the Privacy Requests page. This action supports Right to Be Forgotten (RTBF) request types. The New Privacy Request button uses a custom dialog based on search criteria defined in Setup. The standard New button uses the default record creation dialog. To streamline the user interface and avoid redundancy, hide the standard New button.

## Related Topics

- PrivacyRequestFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- PrivacyRequestHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- PrivacyRequestOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PrivacyRequestShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
