---
title: "SustainabilityStakeholder"
domain: netzero-cloud-dev-guide
topic: sustainabilitystakeholder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.228Z
estimatedTokens: 750
keywords: [SustainabilityStakeholder, stakeholder, sustainability, data, environmental, social, governance, API, version, 64.0, later, Calls, Associated, Objects]
---

# SustainabilityStakeholder

> Represents the stakeholder for sustainability data, such as stakeholder for
         environmental, social, and governance data. This object is available in API version
      64.0 and later.

# SustainabilityStakeholder

Represents the stakeholder for sustainability data, such as stakeholder for environmental, social, and governance data. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe contact or user associated with the stakeholder.This field is a polymorphic relationship field.Relationship NameContactRefers ToContact, User |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the stakeholder. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ReferenceObjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe environmental, social, and governance object associated with this stakeholder.This field is a polymorphic relationship field.Relationship NameReferenceObjectRefers ToStnryAssetEnvrSrc, VehicleAssetEmssnSrc |
| Role | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe role of the stakeholder; for example, data collector for electricity, waste, or water. |
| RoleDescription | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the stakeholder's role. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SustainabilityStakeholderHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[SustainabilityStakeholderShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SustainabilityStakeholderHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- SustainabilityStakeholderShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
