---
title: "EducCharacteristicAssignment"
domain: edu-cloud-dev-guide
topic: educcharacteristicassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.158Z
estimatedTokens: 1304
keywords: [EducCharacteristicAssignment, assignment, educational, characteristic, student, Assignments, active, academic, interval, year, semester, API, version, 66.0, later]
---

# EducCharacteristicAssignment

> Represents the assignment of an educational characteristic to a student.
         Assignments are active for an academic interval such as an academic year or semester.
      This object is available in API version 66.0 and later.

# EducCharacteristicAssignment

Represents the assignment of an educational characteristic to a student. Assignments are active for an academic interval such as an academic year or semester. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account that's associated with the educational characteristic assignment.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ActiveFrom | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the educational characteristic assignment becomes active. |
| ActiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the educational characteristic assignment becomes inactive. |
| AppliesToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe academic interval that's associated with the educational characteristic assignment.This field is a polymorphic relationship field.Relationship NameAppliesToRefers ToAcademicSession, AcademicTerm, AcademicYear |
| Comments | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe comments that are associated with the educational characteristic assignment. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe contact who is associated with the educational characteristic assignment.This field is a relationship field.Relationship NameContactRefers ToContact |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency related to the educational characteristic assignment.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| EducationalCharacteristicId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe educational characteristic that's associated with the educational characteristic assignment.This field is a relationship field.Relationship NameEducationalCharacteristicRefers ToEducationalCharacteristic |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the educational characteristic assignment. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who is the owner of this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EducCharacteristicAssignmentChangeEvent](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object — it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[EducCharacteristicAssignmentFeed](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[EducCharacteristicAssignmentHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[EducCharacteristicAssignmentShare](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- EducCharacteristicAssignmentChangeEvent (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- EducCharacteristicAssignmentFeed (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- EducCharacteristicAssignmentHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- EducCharacteristicAssignmentShare (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm)
