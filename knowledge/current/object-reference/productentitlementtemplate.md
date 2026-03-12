---
title: "ProductEntitlementTemplate"
domain: object-reference
topic: productentitlementtemplate
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:15.348Z
estimatedTokens: 299
keywords: [ProductEntitlementTemplate, predefined, terms, customer, support, Entitlement, users, add, products, Product2, Calls, Special, Access, Rules, Usage]
---

# ProductEntitlementTemplate

> Represents predefined terms of
        customer support (Entitlement) that users can add to products
    (Product2).

# ProductEntitlementTemplate

Represents predefined terms of customer support (Entitlement) that users can add to products (Product2).

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve()

## Special Access Rules

As of Summer ’20 and later, only Salesforce admins, users with access to the Case, Entitlement, or Work Order objects, and users with the View Setup and Configuration permission can access this object.

## Fields

| Field | Details |
| --- | --- |
| EntitlementTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the entitlement template. Must be a valid ID. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the Product2 associated with the entitlement template. Must be a valid ID. |

## Usage

Use to query and manage entitlement templates.

#### See Also

-   [Entitlement](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_entitlement.htm "Represents the customer support an account or contact is eligible to receive. This object is available in API version 18.0 and later. Entitlements may be based on an asset, product, or service contract.")

## Related Topics

- Entitlement (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_entitlement.htm)
