---
title: "HealthcareServiceDetail"
domain: life-sciences-dev-guide
topic: healthcareservicedetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.075Z
estimatedTokens: 891
keywords: [HealthcareServiceDetail, junction, CareService, CodeSetBundle, links, healthcare, service, physical, therapy, codes, API, version, 59.0, later, Calls]
---

# HealthcareServiceDetail

> Represents a junction object between a CareService and a CodeSetBundle.
      For example, this object links a healthcare service such as physical therapy to a set of
      related codes. This object is available in API version 59.0 and later.

# HealthcareServiceDetail

Represents a junction object between a CareService and a CodeSetBundle. For example, this object links a healthcare service such as physical therapy to a set of related codes. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareServiceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired.The ID of the healthcare service associated with the code.This field is a relationship field.Relationship NameCareServiceRelationship TypeLookupRefers ToCareService |
| DetailCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired.The ID of the code associated with the healthcare service.This field is a polymorphic relationship field.Relationship NameDetailCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| DetailType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of service detail.Possible values are:Service_CategoryService_TypeThe default value is Service_Category. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of this association between a HealthcareService and a CodeSetBundle. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[HealthcareServiceDetailHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[HealthcareServiceDetailOwnerSharingRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[HealthcareServiceDetailShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- HealthcareServiceDetailHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- HealthcareServiceDetailOwnerSharingRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- HealthcareServiceDetailShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
