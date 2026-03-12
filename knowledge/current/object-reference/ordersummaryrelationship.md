---
title: "OrderSummaryRelationship"
domain: object-reference
topic: ordersummaryrelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.086Z
estimatedTokens: 746
keywords: [OrderSummaryRelationship, Junction, track, how, original, order, summary, created, any, exchanges, occurred, relates, objects, chain, exchange]
---

# OrderSummaryRelationship

> Junction object used to track how an original order summary (created before
         any exchanges have occurred) relates to other order summary objects in a chain of exchange
         orders.  This object is available in API version 60.0 and later.

# OrderSummaryRelationship

Junction object used to track how an original order summary (created before any exchanges have occurred) relates to other order summary objects in a chain of exchange orders. This object is available in API version 60.0 and later.

An exchange order is an OrderSummary object whose SourceProcess property is set to Exchange. An original order summary can have an exchange order, which in turn can have yet another exchange order, and so on. The OrderSummaryRelationship object maintains this relationship between OrderSummary objects.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is only available in Salesforce Order Management orgs or if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AssociatedOrderSummaryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the associated OrderSummary.This field is a relationship field.Relationship NameAssociatedOrderSummaryRelationship TypeLookupRefers ToOrderSummary |
| AssociatedOrderSummaryStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionStatus of the associated OrderSummary.Possible values are:ActivatedApprovedCanceledCreatedFulfilledReturnedWaiting to FulfillThe default value is Created. |
| AssociatedRelationshipType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRelationship type of the associated OrderSummary.Possible values are:Exchange |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization.Possible values are:EUR—EuroUSD—U.S. DollarThe default value is USD. |
| MainAttachedToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of an Order (Change Order) or a ReturnOrder that belongs to the parent OrderSummary (whose ID is stored in the MainOrderSummaryId field).This field is a polymorphic relationship field.Relationship NameMainAttachedToRelationship TypeLookupRefers ToOrder, ReturnOrder |
| MainOrderSummaryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the associated OrderSummary’s parent.This field is a relationship field.Relationship NameMainOrderSummaryRelationship TypeLookupRefers ToOrderSummary |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the OrderSummaryRelationship. |
| RootOrderSummaryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the original OrderSummary that existed before any exchange orders were created.This field is a relationship field.Relationship NameRootOrderSummaryRelationship TypeLookupRefers ToOrderSummary |
