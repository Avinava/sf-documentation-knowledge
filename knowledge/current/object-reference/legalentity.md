---
title: "LegalEntity"
domain: object-reference
topic: legalentity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.730Z
estimatedTokens: 1002
keywords: [LegalEntity, way, organization, structured, legal, entity, comprise, API, version, 48.0, later, Calls, Special, Access, Rules]
---

# LegalEntity

> Represents the way an organization is structured. An organization can be a
      single legal entity or it can comprise more than one legal entity. This object is
    available in API version 48.0 and later.

# LegalEntity

Represents the way an organization is structured. An organization can be a single legal entity or it can comprise more than one legal entity. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available with the Salesforce Billing managed package and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_legalentity.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| CompanyName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the company that this legal entity represents. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the legal entity. |
| LastReferencedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LegalEntityAddress | TypeaddressPropertiesFilter, NillableDescriptionThe address of the company that this legal entity represents. This field is a compound field of type Address and combines these fields: LegalEntityCity, LegalEntityCountry, LegalEntityGeocodeAccuracy, LegalEntityLatitude, LegalEntityLongitude, LegalEntityPostalCode, LegalEntityState, and LegalEntityStreet. For more information, see Address Compound Fields. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the legal entity. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the legal entity.Possible values are:ActiveInactive |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[LegalEntityFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LegalEntityHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LegalEntityOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[LegalEntityShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LegalEntityFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- LegalEntityHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- LegalEntityOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- LegalEntityShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
