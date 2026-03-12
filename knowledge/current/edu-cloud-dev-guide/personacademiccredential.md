---
title: "PersonAcademicCredential"
domain: edu-cloud-dev-guide
topic: personacademiccredential
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.627Z
estimatedTokens: 977
keywords: [PersonAcademicCredential, Academic, Credential, person, earned, API, version, 59.0, later, Calls, Associated, Objects]
---

# PersonAcademicCredential

> Represents an Academic Credential that a person has earned. This object
      is available in API version 59.0 and later.

# PersonAcademicCredential

Represents an Academic Credential that a person has earned. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicCredentialId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Academic Credential that's associated with the Person Academic Credential.This field is a relationship field.Relationship NameAcademicCredentialRelationship TypeLookupRefers ToAcademicCredential |
| AchievedDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date that the Contact achieved the Academic Credential. |
| CredentialName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the Academic Credential. |
| CredentialType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of Academic Credential.Possible values are:Associate Degree. Available in API version 62.0 and later.Bachelor’s DegreeBadgeCertificateDoctoral Degree. Available in API version 62.0 and later.Master’s Degree. Available in API version 62.0 and later.Secondary Diploma. Available in API version 62.0 and later. |
| IssuerName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe institution that grants the Academic Credential. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LearnerContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Contact person associated with the Person Academic Credential.This field is a relationship field.Relationship NameLearnerContactRelationship TypeLookupRefers ToContact |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Person Academic Credential. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PersonAcademicCredentialFeed](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PersonAcademicCredentialHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PersonAcademicCredentialShare](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PersonAcademicCredentialFeed (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- PersonAcademicCredentialHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- PersonAcademicCredentialShare (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm)
