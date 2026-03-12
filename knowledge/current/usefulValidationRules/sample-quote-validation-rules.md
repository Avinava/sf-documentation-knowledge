---
title: "Sample Quote Validation Rules"
domain: usefulValidationRules
topic: sample-quote-validation-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.420Z
estimatedTokens: 208
keywords: [Sample, Quote, Validation, Rules, how, validate, Display, Error, Line, Item, Discount, Exceeds, 40%]
---

# Sample Quote Validation Rules

> An example on how to validate a quote.

# Sample Quote Validation Rules

An example on how to validate a quote.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Contact Manager, Group, Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


For more information on any of the formula functions used in these examples, see [Formula Operators and Functions by Context](https://help.salesforce.com/apex/HTViewHelpDoc?id=customize_functions.htm&language=en_US#customize_functions).

## Display Error if Quote Line Item Discount Exceeds 40%

| Field | Value |
| --- | --- |
| Description: | Shows an error if a quote line item's discount exceeds 40%. |
| Formula: | Discount > .40 |
| Error Message: | The discount on this quote line item cannot exceed 40%. |
| Error Location: | Discount on quote |
