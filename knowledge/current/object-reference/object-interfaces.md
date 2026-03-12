---
title: "Object Interfaces"
domain: object-reference
topic: object-interfaces
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.210Z
estimatedTokens: 130
keywords: [Interfaces, business, logic, implements, implementor, stores, data, standard, their]
---

# Object Interfaces

> This section provides a list of standard object interfaces and their standard
        fields.

# Object Interfaces

This section provides a list of standard object interfaces and their standard fields.

Some fields may not be listed for some object interfaces. To see the system fields for each object interface, see [System Fields](atlas.en-us.object_reference.meta/object_reference/system_fields.htm "System fields are read-only fields found on most objects. These fields are automatically updated during API operations. For example, the ID field is automatically generated during a create operation and the LastModifiedDate is automatically updated when a user modifies a record.") .

To verify the complete list of fields for an object interface, you can use a describe call from the API.

-   **[PriceAdjustmentGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_interfaces_priceadjustmentgroup.htm)**
    Defines the business logic for a top-level price adjustment, for example, a discount applied to an entire order. This object interface is available in API version 55.0 and later.
-   **[PriceAdjustmentItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_interfaces_priceadjustmentitem.htm)**
    Defines the business logic for an item-level price adjustment, for example, a discount on an order item. This object interface is available in API version 55.0 and later.
-   **[SalesTransaction](atlas.en-us.object_reference.meta/object_reference/sforce_api_interfaces_salestransaction.htm)**
    Defines the business logic for a sales transaction, for example, an order or a cart. This object interface is available in API version 55.0 and later.
-   **[SalesTransactionItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_interfaces_salestransactionitem.htm)**
    Defines the business logic for a sales transaction item, for example, an item in an order. This object interface is available in API version 55.0 and later.

## Related Topics

- System Fields (atlas.en-us.object_reference.meta/object_reference/system_fields.htm)
- PriceAdjustmentGroup (atlas.en-us.object_reference.meta/object_reference/sforce_api_interfaces_priceadjustmentgroup.htm)
- PriceAdjustmentItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_interfaces_priceadjustmentitem.htm)
- SalesTransaction (atlas.en-us.object_reference.meta/object_reference/sforce_api_interfaces_salestransaction.htm)
- SalesTransactionItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_interfaces_salestransactionitem.htm)
