---
title: "CommerceEntitlementProduct"
domain: object-reference
topic: commerceentitlementproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.659Z
estimatedTokens: 525
keywords: [CommerceEntitlementProduct, entitlement, policy, product, API, version, 49.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# CommerceEntitlementProduct

> Represents the entitlement policy for a product. This object is available
    in API version 49.0 and later.

# CommerceEntitlementProduct

Represents the entitlement policy for a product. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Special Access Rules

The CommerceEntitlementProduct object is available when you meet these requirements. The B2B Commerce license is enabled. The Commerce Buyer and Entitlements Integrator permission is granted.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe standard code for the currency.Possible values are:GBP—British PoundUSD—U.S. Dollar |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe product entitlement policy name. |
| PolicyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique ID for the product entitlement policy. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique ID for the product referenced in the entitlement policy. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CommerceEntitlementProductChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- CommerceEntitlementProductChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
