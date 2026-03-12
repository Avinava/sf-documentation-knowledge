---
title: "OrderSummaryAdditionalInfo"
domain: object-reference
topic: ordersummaryadditionalinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.078Z
estimatedTokens: 1180
keywords: [OrderSummaryAdditionalInfo, Stores, OrderSummary, including, context, around, order, inventory, reservation, origination, Einstein, uses, perform, analysis, stored]
---

# OrderSummaryAdditionalInfo

> Stores information related to OrderSummary including context around the
         order, such as inventory reservation details, order origination, and other values that
         Einstein uses to perform order analysis. Only reservation details can be stored in this
         object. This object is available in API version 58.0 and later.

# OrderSummaryAdditionalInfo

Stores information related to OrderSummary including context around the order, such as inventory reservation details, order origination, and other values that Einstein uses to perform order analysis. Only reservation details can be stored in this object. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is only available in Salesforce Order Management orgs or if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentsVersion | TypetextPropertiesFilter, Group, Nillable, SortDescriptionRepresents the adjustment algorithm that was used to create adjustments for this order |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionISO code for the currency of the OrderSummary associated with the OrderSummaryAdditionalInfo.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| InventoryReservationExtRef | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds an external reference identifier for tracking the inventory reservation. |
| InventoryReservationIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInventory reservation identifier for the order, if available. Since this value can come from external systems, the value type has no lookup or enforcement. |
| InventoryReservationMessage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds any details or other relevant information that can further explain the status of the reservation. |
| InventoryReservationState | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the reservation, if available.Possible values are:DEFERREDNOT_APPLICABLEPERMANENTTEMPORARY |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the OrderSummaryAdditionalInfo record. |
| OrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionUnique ID of the order associated with this record.This field is a relationship field.Relationship NameOrderRelationship TypeLookupRefers ToOrder |
| OrderSummaryId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique ID of the associated OrderSummary to which the specific OrderSummaryAdditionalInfo applies.This field is a relationship field.Relationship NameOrderSummaryRelationship TypeLookupRefers ToOrderSummary |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. Default value is the ID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OrderSummaryAdditionalInfoFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[OrderSummaryAdditionalInfoOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[OrderSummaryAdditionalInfoShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [OrderSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummary.htm "Represents the current properties and state of an order. Corresponds to one or more order objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

## Related Topics

- OrderSummaryAdditionalInfoFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- OrderSummaryAdditionalInfoOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- OrderSummaryAdditionalInfoShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- OrderSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummary.htm)
