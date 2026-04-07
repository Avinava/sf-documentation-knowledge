---
title: "QuoteLineItem"
domain: comms-developer-guide
topic: quotelineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:39.566Z
estimatedTokens: 325
keywords: [QuoteLineItem, quote, line, item, member, Product2, products, associated, along, items, API, version, 64.0, later, Calls]
---

# QuoteLineItem

> Represents a quote line item, which is a member of the list of Product2
         products associated with a quote, along with other information about those line items on
         that quote.  This object is available in API version 64.0 and later.

# QuoteLineItem

Represents a quote line item, which is a member of the list of Product2 products associated with a quote, along with other information about those line items on that quote. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The user must have “Edit” permissions on quote records to create or update quote line items on a quote. The user must have “Edit” permissions on quote records to delete a quote line item.

## Fields

| Field | Details |
| --- | --- |
| QuoteRecipientGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe quote recipient group associated with the quote line item.This field is a relationship field.Relationship NameQuoteRecipientGroupRefers ToQuoteRecipientGroup |
| RecipientScaledQuantity | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total quantity of products for the quote recipient group. |

#### See Also

-   [QuoteLineItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_quotelineitem.htm "QuoteLineItem - HTML (New Window)")
