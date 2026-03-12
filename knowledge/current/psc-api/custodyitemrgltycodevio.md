---
title: "CustodyItemRgltyCodeVio"
domain: psc-api
topic: custodyitemrgltycodevio
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.536Z
estimatedTokens: 822
keywords: [CustodyItemRgltyCodeVio, junction, custody, item, regulatory, code, violation, laws, regulations, associated, API, version, 59.0, later, Calls]
---

# CustodyItemRgltyCodeVio

> Represents a junction between a custody item and the related
         regulatory code violation. The violation can be related to laws, regulations, or code that
         is associated with the custody item. This object is available in API version 59.0 and
      later.

# CustodyItemRgltyCodeVio

Represents a junction between a custody item and the related regulatory code violation. The violation can be related to laws, regulations, or code that is associated with the custody item. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Evidence Management is enabled in your org. To access this object, you need the Evidence Management permission set.

## Fields

| Field | Details |
| --- | --- |
| CustodyItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe custody item that's associated with the regulatory code violation.This field is a relationship field.Relationship NameCustodyItemRelationship TypeLookupRefers ToCustodyItem |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the custody item regulatory code violation record. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the custody item regulatory code violation record. |
| RegulatoryCodeViolationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe regulatory code violation that's associated with the custody item.This field is a relationship field.Relationship NameRegulatoryCodeViolationRelationship TypeLookupRefers ToRegulatoryCodeViolation |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the custody item with reference to the regulatory code violation. Picklist values aren't predefined for this field. Before you create a record, ensure that your Salesforce admin has defined picklist values based on your organization’s requirement. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CustodyItemRgltyCodeVioFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CustodyItemRgltyCodeVioHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CustodyItemRgltyCodeVioFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- CustodyItemRgltyCodeVioHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
