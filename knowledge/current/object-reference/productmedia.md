---
title: "ProductMedia"
domain: object-reference
topic: productmedia
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.377Z
estimatedTokens: 983
keywords: [ProductMedia, rich, media, including, images, attachments, added, products.This, API, version, 49.0, later, Calls, Special, Access]
---

# ProductMedia

> Represents the rich media, including images and attachments, that can
         be added to products.This object is available in API version 49.0 and
      later.

# ProductMedia

Represents the rich media, including images and attachments, that can be added to products.This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

You must have the B2B Commerce license and a CMS workspace to access product media.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe default value is USD. Possible values are:USD—U.S. Dollar |
| ElectronicMediaGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionUnique ID of the media group.This field is a relationship field.Relationship NameElectronicMediaGroupRelationship TypeLookupRefers ToElectronicMediaGroup |
| ElectronicMediaId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionUnique ID of the media record.This field is a polymorphic relationship field.Relationship NameElectronicMediaRelationship TypeLookupRefers ToManagedContent, ManagedContentInfo |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the media. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the product that the media is associated with.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| SortOrder | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe order that product media is displayed in. |

## Associated Objects

[ProductMediaChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 57.0)

Change events are available for the object.

[ProductMediaHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProductMediaOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ProductMediaShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProductMediaChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ProductMediaHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ProductMediaOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ProductMediaShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
