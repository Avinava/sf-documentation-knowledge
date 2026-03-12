---
title: "SalesContractLine"
domain: clm-developer-guide
topic: salescontractline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.894Z
estimatedTokens: 883
keywords: [SalesContractLine, Stores, contract's, product, including, price, quantity, components, covered, API, version, 56.0, later, Calls, Associated]
---

# SalesContractLine

> Stores a contract's product information, including price, quantity, and components
      covered. This object is available in API version 56.0 and later.

# SalesContractLine

Stores a contract's product information, including price, quantity, and components covered. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContractId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionParent contract identifier.This is a relationship field.Relationship NameContractRelationship TypeLookupRefers ToContract |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the contract line item. |
| EffectiveEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEnd date and time for the line item. |
| EffectiveStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStart date and time for the line item. |
| LineItemNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the line item number. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the contract line item. |
| OpportunityProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the associated OpportunityLineItem.This is a relationship field.Relationship NameOpportunityProductRelationship TypeLookupRefers ToOpportunityLineItem |
| OrderProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the associated OrderItem.This is a relationship field.Relationship NameOrderProductRelationship TypeLookupRefers ToOrderItem |
| OriginalLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the original line item that this line item references (for example if this line item is due to a contract amendment).This is a relationship field.Relationship NameOriginalLineItemRelationship TypeLookupRefers ToSalesContractLine |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionProduct ID associated with the line item.This is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductCode | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionProduct code associated with the line item. |
| Quantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionProduct quantity associated with the line item. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the contract line item.Possible values are:ActiveInactive |
| TotalPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal price of the line item. |
| UnitPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUnit price of the line item. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

SalesContractLineChangeEvent

Change events are available for the object.

SalesContractLineFeed

Feed tracking is available for the object.

SalesContractLineHistory

History is available for tracked fields of the object.

SalesContractLineOwnerSharingRule

Sharing rules are available for the object.

SalesContractLineShare

Sharing is available for the object.
