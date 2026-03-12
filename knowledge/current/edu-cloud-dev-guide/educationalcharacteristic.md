---
title: "EducationalCharacteristic"
domain: edu-cloud-dev-guide
topic: educationalcharacteristic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.141Z
estimatedTokens: 1149
keywords: [EducationalCharacteristic, characteristic, student, student's, major, student-athlete, status, educational, characteristics, filter, search, data, customize, experience, API]
---

# EducationalCharacteristic

> Represents a characteristic about a student such as the student's major or
         student-athlete status. You can use educational characteristics to filter and search for
         data and customize the student experience. This object is available in API version
      66.0 and later.

# EducationalCharacteristic

Represents a characteristic about a student such as the student's major or student-athlete status. You can use educational characteristics to filter and search for data and customize the student experience. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency related to the educational characteristic.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the educational characteristic. |
| EducCharacteristicTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe educational characteristic type that's associated with the educational characteristic.This field is a relationship field.Relationship NameEducCharacteristicTypeRefers ToEducCharacteristicType |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the educational characteristic is active (true) or not (false). An active educational characteristic can be assigned to a student.The default value is false. |
| IsVisibleToStudent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the educational characteristic is searchable in the student portal (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the educational characteristic. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who is the owner of this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EducationalCharacteristicChangeEvent](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object — it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[EducationalCharacteristicFeed](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[EducationalCharacteristicHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[EducationalCharacteristicShare](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- EducationalCharacteristicChangeEvent (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- EducationalCharacteristicFeed (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- EducationalCharacteristicHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- EducationalCharacteristicShare (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm)
