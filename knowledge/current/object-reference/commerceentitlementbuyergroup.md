---
title: "CommerceEntitlementBuyerGroup"
domain: object-reference
topic: commerceentitlementbuyergroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.641Z
estimatedTokens: 520
keywords: [CommerceEntitlementBuyerGroup, entitlement, policy, buyer, group, API, version, 49.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# CommerceEntitlementBuyerGroup

> Represents the entitlement policy for a buyer group. This object is
    available in API version 49.0 and later.

# CommerceEntitlementBuyerGroup

Represents the entitlement policy for a buyer group. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Special Access Rules

The CommerceEntitlementBuyerGroup object is available when you meet these requirements. The B2B Commerce license is enabled. The Commerce Buyer and Entitlements Integrator permission is granted.

## Fields

| Field | Details |
| --- | --- |
| BuyerGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique ID for the buyer group. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe standard code for the currency.Possible values are:GBP—British PoundUSD—U.S. Dollar |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the entitlement buyer group. |
| PolicyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique ID for the entitlement policy. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CommerceEntitlementBuyerGroupChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- CommerceEntitlementBuyerGroupChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
