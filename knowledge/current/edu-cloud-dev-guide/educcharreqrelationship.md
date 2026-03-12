---
title: "EducCharReqRelationship"
domain: edu-cloud-dev-guide
topic: educcharreqrelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.179Z
estimatedTokens: 1069
keywords: [EducCharReqRelationship, logic, multiple, educational, characteristics, characteristic, requirement, API, version, 66.0, later, Calls, Associated, Objects]
---

# EducCharReqRelationship

> Represents the logic between multiple educational characteristics that
         defines an educational characteristic requirement. This object is available in API
      version 66.0 and later.

# EducCharReqRelationship

Represents the logic between multiple educational characteristics that defines an educational characteristic requirement. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency related to the educational characteristic requirement relationship.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| EducCharRequirementId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe child educational characteristic requirement that's associated with the educational characteristic requirement relationship.This field is a relationship field.Relationship NameEducCharRequirementRefers ToEducCharRequirement |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the educational characteristic requirement relationship. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who is the owner of this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentEducCharRequirementId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe parent educational characteristic requirement that's associated with the educational characteristic requirement relationship.This field is a relationship field.Relationship NameParentEducCharRequirementRefers ToEducCharRequirement |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EducCharReqRelationshipChangeEvent](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object — it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[EducCharReqRelationshipFeed](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[EducCharReqRelationshipHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[EducCharReqRelationshipShare](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- EducCharReqRelationshipChangeEvent (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- EducCharReqRelationshipFeed (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- EducCharReqRelationshipHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- EducCharReqRelationshipShare (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm)
