---
title: "Learning"
domain: edu-cloud-dev-guide
topic: learning
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.093Z
estimatedTokens: 428
keywords: [Learning, Output, representation, instructional, made, course, program, on-site, experience, contact, training, API, version, 57.0, later, Calls, Associated, Objects]
---

# Learning

> Represents information that defines a training that can be made available as
         a course, program, or on-site experience, for a contact.  This object is available in
      API version 57.0 and later.

# Learning

Represents information that defines a training that can be made available as a course, program, or on-site experience, for a contact. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionThe applicable point in the education process.Possible values are:Adult EducationDoctoralElementaryGraduateHigh SchoolMiddle SchoolPost-Baccalaureate CertificatePre-K/PreschoolProfessional EducationUndergraduate |
| ActiveFromDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate the Learning framework became active. |
| ActiveToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate the Learning framework became inactive. |
| Category | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the category of the learning.Possible values are:BusinessEducationHealth SciencesLiberal ArtsSTEMSocial Science |
| CipCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionClassification of Instructional Programming code that identifies the program or field of study. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the Learning framework. |
| Duration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe allocated length of time for completion of the Learning. |
| DurationUnit | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionThe unit of measurement for the length of time for completion.Possible values are:Clock HoursContinuing Education UnitsCredit HoursNo CreditOther |
| Format | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the format in which the learning is offered.Possible values are:HybridIn personVirtual |
| Grade | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the grade of the learning.Possible values are:110111223456789EYKKS1KS2KS3KS4PPK3PK4 |
| ImageUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URL to an image for the learning. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies that the Learning framework is active.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the Learning framework. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount of the institution that provides the Learning.This field is a relationship field.Relationship NameProviderRelationship TypeLookupRefers ToAccount |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of Learning.Possible values are:ExternalLearningLearningCourseLearningProgram |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LearningHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LearningOwnerSharingRule](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[LearningShare](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
{
  "learningId": "0tyxx00000002t3",
  "type": "Learning Course",
  "name": "Basic Cloud Computing",
  "provider": "001xx000003GehfAAC",
  "description": "Basic Cloud Computing Course",
  "activeFromDate": "2020-01-01T12:00:00.00Z",
  "activeToDate": "2024-01-02T12:00:00.00Z",
  "duration": 6,
  "durationUnit": "Credit Hours",
  "cipCode": "01.0000",
  "academicLevel": "Graduate",
  "active": true
}
```

## Related Topics

- LearningHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- LearningOwnerSharingRule (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- LearningShare (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm)
