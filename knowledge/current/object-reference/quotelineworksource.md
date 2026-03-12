---
title: "QuoteLineWorkSource"
domain: object-reference
topic: quotelineworksource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.980Z
estimatedTokens: 393
keywords: [QuoteLineWorkSource, association, quote, work, sources, assets, line, items, order, products, groups, API, version, 63.0, later]
---

# QuoteLineWorkSource

> Represents an association between a quote and work sources, such as
         assets, quote line items, order products, or work type groups. This object is
      available in API version 63.0 and later.

# QuoteLineWorkSource

Represents an association between a quote and work sources, such as assets, quote line items, order products, or work type groups. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset associated with the quote work source.This field is a relationship field.Relationship NameAssetRefers ToAsset |
| OrderItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order product associated with the quote work source.This field is a relationship field.Relationship NameOrderItemRefers ToOrderItem |
| QuoteId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe quote associated with the quote work source.This field is a relationship field.Relationship NameQuoteRelationship TypeMaster-detailRefers ToQuote (the master object) |
| QuoteLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe quote associated with the quote work source.This field is a relationship field.Relationship NameQuoteLineItemRefers ToQuoteLineItem |
| WorkTypeGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe quote associated with the work sourceThis field is a relationship field.Relationship NameWorkTypeGroupRefers ToWorkTypeGroup |
