---
title: "Billing Fields on ExpressionSet"
domain: revenue-cloud
topic: billing-fields-on-expressionset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.471Z
estimatedTokens: 195
keywords: [Billing, Fields, ExpressionSet, Standard, fields, extend, Billing., represent, information, expression, set, performs, series, calculations, lookups, user-defined, variables, constants, calculate, taxes.]
---

# Billing Fields on ExpressionSet

> Standard fields extend the ExpressionSet object for use in Billing.
         These fields represent information about an expression set that performs a series of
         calculations by using lookups and user-defined variables and constants to calculate
         taxes. This object is available in API version 66.0 and later.

# Billing Fields on ExpressionSet

Standard fields extend the ExpressionSet object for use in Billing. These fields represent information about an expression set that performs a series of calculations by using lookups and user-defined variables and constants to calculate taxes. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The Revenue Standard Tax Calculation value that’s using the expression set to calculate taxes. |
