---
title: "QuoteLineItemInsProductClause"
domain: insurance-developer-guide
topic: quotelineiteminsproductclause
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.157Z
estimatedTokens: 689
keywords: [QuoteLineItemInsProductClause, clauses, associated, products, applicable, specific, quote, line, item, auto, insurance, ABC, includes, Free, Look]
---

# QuoteLineItemInsProductClause

> Represents all clauses associated with the products that are applicable to a
         specific quote line item. For example, if auto insurance quote "ABC" includes both a Free
         Look clause and an Excluded Driver clause, the object will have two records, one for each
         clause applicable to the quote line item.  This object is available in API version
      65.0 and later.

# QuoteLineItemInsProductClause

Represents all clauses associated with the products that are applicable to a specific quote line item. For example, if auto insurance quote "ABC" includes both a Free Look clause and an Excluded Driver clause, the object will have two records, one for each clause applicable to the quote line item. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ClauseText | TypetextareaPropertiesCreate, UpdateDescriptionThe generated clause text based on rule evaluation. |
| ConstraintModelDeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe developer name of the the constraint model used to generate clauses. |
| CreationMethod | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionIndicates how the quote item insurance product clause is added. Possible values are:AutoAddedManual |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe description of the quote item insurance product clause. |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the quote item insurance product clause becomes active. |
| ExpirationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the quote item insurance product clause becomes inactive. |
| InsuranceProductClauseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the insurance product clause associated with the quote item insurance product clause. This field is a relationship field.Relationship NameInsuranceProductClauseRefers ToInsuranceProductClause |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate), but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, SortDescriptionThe name of the quote item insurance product clause. |
| QuoteLineItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe quote line item associated with the quote item insurance product clause. This field is a relationship field.Relationship NameQuoteLineItemRelationship TypeMaster-detailRefers ToQuoteLineItem (the master object) |
