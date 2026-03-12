---
title: "CartItemAttribute"
domain: object-reference
topic: cartitemattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.199Z
estimatedTokens: 1246
keywords: [CartItemAttribute, attributes, associated, cart, item, stored, key-value, pairs, derived, product, carried, forward, order, checkout, API]
---

# CartItemAttribute

> Represents the attributes associated with a cart item, stored as
         key-value pairs. These attributes are derived from the product and carried forward to
      the order during checkout. This object is available in API version 66.0 and later.

# CartItemAttribute

Represents the attributes associated with a cart item, stored as key-value pairs. These attributes are derived from the product and carried forward to the order during checkout. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

The CartItemAttribute object is available:only if the B2B Commerce license, the Salesforce CPQ feature, and Commerce Dynamic Bundles are enabled in your Salesforce org.

## Fields

| Field | Details |
| --- | --- |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the attribute definition associated with the cart item attribute.This field is a relationship field.Relationship NameAttributeDefinitionRelationship TypeLookupRefers ToAttributeDefinition |
| AttributeName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the cart item attribute. |
| AttributePicklistValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the picklist value associated with the cart item attribute.This field is a relationship field.Relationship NameAttributePicklistValueRelationship TypeLookupRefers ToAttributePicklistValue |
| AttributeValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the cart item attribute, such as Blue or Large. |
| CartItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the cart item to which this attribute is assigned.This field is a relationship field.Relationship NameCartItemRelationship TypeMaster-detailRefers ToCartItem (the master object) |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn auto-generated ID for the attribute record that's stored in an external system, such as the HBase database. |
| IsPriceImpacting | TypebooleanPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the attribute affects cart pricing (true) or not (false). This field determines whether the Commerce Pricing API calls must be triggered to update the price. |
| UnitOfMeasure | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the unit of measure associated with the cart item attribute.This field is available only if the AttributeUomPilot Org perm is enabled. Contact Salesforce support for assistance.This field is a relationship field.Relationship NameUnitOfMeasureRelationship TypeLookupRefers ToUnitOfMeasure |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CartItemAttributeChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CartItemAttributeFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CartItemAttributeHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CartItemAttributeOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CartItemAttributeShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CartItemAttributeChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- CartItemAttributeFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- CartItemAttributeHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- CartItemAttributeOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- CartItemAttributeShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
