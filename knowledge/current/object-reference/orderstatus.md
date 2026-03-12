---
title: "OrderStatus"
domain: object-reference
topic: orderstatus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.026Z
estimatedTokens: 473
keywords: [OrderStatus, status, order, entity, API, version, 48.0, later, Calls, Usage]
---

# OrderStatus

> Represents the status of the order entity. This object is available in API
    version 48.0 and later.

# OrderStatus

Represents the status of the order entity. This object is available in API version 48.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionUniquely identifies a picklist value so it can be retrieved without using an id or primary label. |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this is the default order status value (true) or not (false) in the picklist. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionMaster label for this order status value. This display value is the internal label that doesn’t get translated. |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber used to sort this value in the order status picklist. These numbers aren’t guaranteed to be sequential, as some previous contract status values might have been deleted. |
| StatusCode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionStatus of the order.Possible values are:ActivatedDraftSuperseded-This value is applicable only to Revenue Cloud Advanced users and is available in API version 64.0 and later. |

## Usage

This object represents a value in the order status picklist. The order status picklist provides additional information about the status of an Order, such as its current state (Draft, Activated, or Superseded). You can query these records to retrieve the set of values in the order status picklist, and then use that information while processing Order objects to determine more information about a given order. For example, the application could test whether a given order is activated based on its Status value and the value of the StatusCode property in the associated OrderStatus object.
