---
title: "SalesTransactionType"
domain: object-reference
topic: salestransactiontype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.517Z
estimatedTokens: 356
keywords: [SalesTransactionType, sales, transaction, initial, renewal, amendment, sale, pricing, configuration, API, version, 61.0, later, Calls, Special]
---

# SalesTransactionType

> Represents the type of sales transaction, such as an initial,
         renewal, or amendment sale, and its related pricing configuration.. This object is
      available in API version 61.0 and later.

# SalesTransactionType

Represents the type of sales transaction, such as an initial, renewal, or amendment sale, and its related pricing configuration.. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available when Revenue Cloud is enabled.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the sales transaction type. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the sales transaction type. |
| PricingProcedureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe pricing procedure related to the sales transaction type.This field is a relationship field.Relationship NamePricingProcedureRefers ToExpressionSetDefinition |

## Associated Objects

This object has the following associated objects.

[SalesTransactionTypeShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SalesTransactionTypeShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
