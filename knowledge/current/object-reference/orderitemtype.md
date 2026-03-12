---
title: "OrderItemType"
domain: object-reference
topic: orderitemtype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.983Z
estimatedTokens: 321
keywords: [OrderItemType, whether, order, product, line, charge, API, version, 48.0, later, Calls]
---

# OrderItemType

> Shows whether the order product is a product line or charge line. This
    object is available in API version 48.0 and later.

# OrderItemType

Shows whether the order product is a product line or charge line. This object is available in API version 48.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionUniquely identifies a picklist value so it can be retrieved without using an id or primary label. |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this is the default order item type status value (true) or not (false) in the picklist. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionMaster label for this order item type status value. This display value is the internal label that doesn’t get translated. |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber used to sort this value in the order item status picklist. These numbers aren’t guaranteed to be sequential, as some previous contract status values might have been deleted. |
| TypeCode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionCode indicating the type of order item.Possible values are:Charge—API Name DeliveryCharge.Product—For API Name Product. |
