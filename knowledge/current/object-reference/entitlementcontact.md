---
title: "EntitlementContact"
domain: object-reference
topic: entitlementcontact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.699Z
estimatedTokens: 337
keywords: [EntitlementContact, Contact, eligible, receive, customer, support, via, Entitlement, API, version, 18.0, later, Calls, Usage]
---

# EntitlementContact

> Represents a Contact eligible to receive customer support via an
   Entitlement. This object is available in API version 18.0 and later.

# EntitlementContact

Represents a Contact eligible to receive customer support via an Entitlement. This object is available in API version 18.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Fields

| Field | Details |
| --- | --- |
| ContactId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the Contact associated with the entitlement. Must be a valid ID. |
| EntitlementId | TypereferencePropertiesCreate, FilterDescriptionRequired. ID of the Entitlement associated with the entitlement contact. Must be a valid ID. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, NillableDescriptionRequired. Name of the entitlement contact. |

## Usage

Use to query and manage entitlement contacts.

#### See Also

-   [Entitlement](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_entitlement.htm "Represents the customer support an account or contact is eligible to receive. This object is available in API version 18.0 and later. Entitlements may be based on an asset, product, or service contract.")

## Related Topics

- Entitlement (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_entitlement.htm)
