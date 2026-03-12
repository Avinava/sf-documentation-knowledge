---
title: "PersonName"
domain: health-cloud-object-reference
topic: personname
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.565Z
estimatedTokens: 1527
keywords: [PersonName, detailed, person’s, API, version, 51.0, later, Calls, Usage, Associated, Objects]
---

# PersonName

> Represents detailed information about a person’s name. This object is
    available in API version 51.0 and later.

# PersonName

Represents detailed information about a person’s name. This object is available in API version 51.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the name is in effect. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the name is no longer in use. |
| FirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe first name of the person. |
| FullName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe combination of the first and last names of the person. |
| IsPrimary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the name is the person’s primary name. |
| LastName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person’s last name. In case the person’s name has more than just a first name and a last name, this field stores the combination of all names except the first name. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the PersonName record. |
| NameUsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the usage context of the name.Possible values are:AnonymousMaidenNicknameOfficialOldTempUsual |
| OwnerId | TypeReferencePropertiesCreate, Defaulted on Create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.Referenced ObjectsUserGroup |
| ParentRecordId | TypePolymorphic master-detail referencePropertiesCreate, Filter, Group, SortDescriptionReferences the person the name belongs to.Referenced ObjectsAccountContact |
| Prefix | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe prefix of the person’s name. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system from where the PersonName record was brought into Health Cloud. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the person name record in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the person name record was last modified in its source system. |
| Suffix | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe suffix of the person’s name. |

## Usage

PersonName is a data type-like object that’s associated to different objects representing people. The names and name-related information of a person are associated to them by referencing their account, contact, or person account records using the ParentRecordId field on PersonName.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PersonNameFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PersonNameHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PersonNameOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PersonNameShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

[PersonNameChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

◊

## Related Topics

- PersonNameFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- PersonNameHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- PersonNameOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PersonNameShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
- PersonNameChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
