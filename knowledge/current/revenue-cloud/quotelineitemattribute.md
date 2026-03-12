---
title: "QuoteLineItemAttribute"
domain: revenue-cloud
topic: quotelineitemattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:11.348Z
estimatedTokens: 702
keywords: [QuoteLineItemAttribute, Represents, virtual, stores, attribute, specified, quote, line, item., API, version, 59.0, later., Note, Supported, Calls, Special, Access, Rules, Fields]
---

# QuoteLineItemAttribute

> Represents a virtual object that stores an attribute specified for a quote
         line item. This object is available in API version 59.0 and later.

# QuoteLineItemAttribute

Represents a virtual object that stores an attribute specified for a quote line item. This object is available in API version 59.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

This object is available in Enterprise, Unlimited, and Developer Editions of Revenue Cloud.

## Fields

| Field | Details |
| --- | --- |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the attribute definition for this quote line item attribute.This field is a relationship field.Relationship NameAttributeDefinitionRefers ToAttributeDefinition |
| AttributeName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the quote line item attribute. |
| AttributePicklistValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the attribute picklist value if the attribute is a picklist type.This field is a relationship field.Relationship NameAttributePicklistValueRefers ToAttributePicklistValue |
| AttributeValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the quote line item attribute. For example 5-TB storage.You can use this field to filter records only if the DataType value in the related AttributeDefinitionId record is Text. If the DataType value is Picklist, use the value in the AttributePicklistValueId field for filtering. You can’t use this field to filter records if the DataType value is Checkbox, Currency, Date, Datetime, Multipicklist, Number, or Percent. |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn auto-generated ID of the attribute record saved in an external system, such as an HBase database. |
| IsPriceImpacting | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionThe pricing impacting the status of the attribute.The default value is false. |
| QuoteLineItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe associated parent quote line item.This field is a relationship field.Relationship NameQuoteLineItemRelationship TypeMaster-detailRefers ToQuoteLineItem (the master object) |

## Usage

This object doesn’t support custom fields, validation rules, or triggers. In SOQL queries, you can filter records by using Id and AttributeDefinition. You can’t use AttributeValue in the WHERE clause.
