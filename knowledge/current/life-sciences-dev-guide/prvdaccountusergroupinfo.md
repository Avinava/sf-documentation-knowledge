---
title: "PrvdAccountUserGroupInfo"
domain: life-sciences-dev-guide
topic: prvdaccountusergroupinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.157Z
estimatedTokens: 820
keywords: [PrvdAccountUserGroupInfo, classification, provider, account, user, group, API, version, 65.0, later, Calls, Associated, Objects]
---

# PrvdAccountUserGroupInfo

> Represents the classification values for the provider account user
         group. This object is available in API version 65.0 and later.

# PrvdAccountUserGroupInfo

Represents the classification values for the provider account user group. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe provider account associated with the user group.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| Advocacy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the level of advocacy of the healthcare provider for the products and services offered by the company. |
| GroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe user group used for classification.This field is a relationship field.Relationship NameGroupRefers ToGroup |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed the record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the provider account user group info. |
| OpportunityScore | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the score of potential business opportunities with the healthcare provider. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record in the external system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external system that generated the record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PrvdAccountUserGroupInfoHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PrvdAccountUserGroupInfoShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PrvdAccountUserGroupInfoHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- PrvdAccountUserGroupInfoShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
