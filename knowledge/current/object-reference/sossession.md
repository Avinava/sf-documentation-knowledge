---
title: "SOSSession"
domain: object-reference
topic: sossession
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.388Z
estimatedTokens: 1151
keywords: [SOSSession, automatically, created, SOS, session, stores, API, versions, 34.0, later, Calls, Usage, Associated, Objects]
---

# SOSSession

> This object is automatically created for each SOS session and stores
			information about the session. This object is available in API versions 34.0 and
		later.

# SOSSession

This object is automatically created for each SOS session and stores information about the session. This object is available in API versions 34.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AppVersion | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version of the customer’s mobile application in which SOS is implemented. |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the case that’s associated with the SOS session. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the contact that’s associated with the SOS session. |
| DeploymentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the SOS deployment that the SOS session originated from. |
| EndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time that the SOS session ended. |
| IpAddress | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTo protect the customer’s privacy, this field is now blank. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the session record was last referenced by a user. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the session record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionThe name of the session. |
| OpentokSession | TypeencryptedstringPropertiesCreate, Nillable, UpdateDescriptionThe ID of the OpenTok session that’s associated with the SOS video call. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the session record’s owner. |
| SessionDuration | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe amount of time that the SOS session lasted. |
| SessionRecordingUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL where the SOS session recording is stored. |
| SosVersion | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version of SOS that was used in your organization’s mobile application when this session occurred. |
| StartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time that the SOS session began. |
| SystemInfo | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInformation about the customer’s mobile device from which the SOS call originated, such as the device’s operating system. |
| WaitDuration | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe amount of time the customer waited before an agent accepted the SOS session and the call began. |

## Usage

Use this object to query and manage SOS session records.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[SOSSessionFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[SOSSessionHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[SOSSessionOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[SOSSessionShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SOSSessionFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- SOSSessionHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- SOSSessionOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- SOSSessionShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
