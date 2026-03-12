---
title: "WebstoreBuyerGroup"
domain: object-reference
topic: webstorebuyergroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.443Z
estimatedTokens: 1024
keywords: [WebstoreBuyerGroup, Associates, webstore, buyer, group, Supports, dynamically, changing, locales, buyers, shop, orgs, enabled, multiple, languages]
---

# WebstoreBuyerGroup

> Associates a webstore with a buyer group. Supports dynamically changing
         locales when buyers shop in orgs that are enabled for multiple languages and
         currencies. This object is available in API version 58.0 and later.

# WebstoreBuyerGroup

Associates a webstore with a buyer group. Supports dynamically changing locales when buyers shop in orgs that are enabled for multiple languages and currencies. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BuyerGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the buyer group this record references.This field is a relationship field.Relationship NameBuyerGroupRelationship TypeLookupRefers ToBuyerGroup |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this record. |
| WebStoreId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the webstore.This field is a relationship field.Relationship NameWebStoreRelationship TypeLookupRefers ToWebStore |

## Usage

This object can support a localized buyer experience by associating a Market-enabled webstore with a buyer group, allowing shoppers to view their group entitlements, price books, and promotions in localized languages and currencies.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WebstoreBuyerGroupChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[WebstoreBuyerGroupFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[WebstoreBuyerGroupHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[WebstoreBuyerGroupOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[WebstoreBuyerGroupShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WebstoreBuyerGroupChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- WebstoreBuyerGroupFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- WebstoreBuyerGroupHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- WebstoreBuyerGroupOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WebstoreBuyerGroupShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
