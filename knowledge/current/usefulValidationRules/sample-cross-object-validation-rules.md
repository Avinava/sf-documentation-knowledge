---
title: "Sample Cross Object Validation Rules"
domain: usefulValidationRules
topic: sample-cross-object-validation-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.369Z
estimatedTokens: 1092
keywords: [Sample, Cross, Validation, Rules, Examples, three, opportunity, products, Discounts, Range, Prevent, Changing, Closed, Opportunities, Saving]
---

# Sample Cross Object Validation Rules

> Examples for three validation rules on opportunity products.

# Sample Cross Object Validation Rules

Examples for three validation rules on opportunity products.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Contact Manager, Group, Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


For more information on any of the formula functions used in these examples, see [Formula Operators and Functions by Context](https://help.salesforce.com/apex/HTViewHelpDoc?id=customize_functions.htm&language=en_US#customize_functions).

## Discounts Must Be Within Range

The examples below work together to help you manage discount amounts for products and require a custom percent field on opportunity products called Line Discount. The examples below also require you to use price books and customize the Product Family field to include the following values: Software, Consulting, and Training.

Here is a validation rule for software discounts.

| Field | Value |
| --- | --- |
| Description: | Prevents users from saving software products with a discount over 10 percent. |
| Formula: | AND(Line_Discount__c > 0.10, ISPICKVAL(Product2.Family, "Software")) |
| Error Message: | The discount must be 10% or less for software products. |
| Error Location: | Line Discount |

Here is a validation rule for consulting discounts.

| Field | Value |
| --- | --- |
| Description: | Prevents users from saving consulting products with a discount over 15 percent. |
| Formula: | AND(Line_Discount__c > 0.15, ISPICKVAL(Product2.Family, "Consulting")) |
| Error Message: | The discount must be 15% or less for consulting products. |
| Error Location: | Line Discount |

Here is a validation rule for training discounts.

| Field | Value |
| --- | --- |
| Description: | Prevents users from saving training products with a discount over 20 percent. |
| Formula: | AND(Line_Discount__c > 0.20, ISPICKVAL(Product2.Family, "Training")) |
| Error Message: | The discount must be 20% or less for training products. |
| Error Location: | Line Discount |

## Prevent Changing Opportunity Products on Closed Opportunities

This example consists of two validation rules: one on opportunity products and another on opportunities.

| Field | Value |
| --- | --- |
| Description: | Prevents users from editing opportunity products after an opportunity is closed. Create the following validation rule example on opportunity products. |
| Formula: | OR(ISPICKVAL(Opportunity.StageName, "Closed Won"), ISPICKVAL(Opportunity.StageName, "Closed Lost")) |
| Error Message: | Cannot change opportunity products for closed opportunities. |
| Error Location: | Top of Page |

The following validation rule is on opportunities.

| Field | Value |
| --- | --- |
| Description: | Prevents users from deleting opportunity products after an opportunity is closed. Create the following validation rule example on opportunities. It uses a custom roll-up summary field on opportunities that counts the number of opportunity products on an opportunity. |
| Formula: | AND(OR(ISPICKVAL(StageName, "Closed Won"), ISPICKVAL(StageName, "Closed Lost")), Number_of_Line_Items__c < PRIORVALUE(Number_of_Line_Items__c) ) |
| Error Message: | Cannot delete opportunity products for closed opportunities. |
| Error Location: | Top of Page |

## Prevent Saving a Case When Account Does Not Have Support

| Field | Value |
| --- | --- |
| Description: | Prevents users from saving a case for an account that does not have support. This example assumes you have a custom checkbox field on accounts called Allowed Support that tracks if the account has support. |
| Formula: | Account.Allowed_Support__c  = FALSE |
| Error Message: | Unable to create cases for this account because it is not signed up for support. |
| Error Location: | Top of Page |

## Prevent Saving a Case When Contact is No Longer with the Company

| Field | Value |
| --- | --- |
| Description: | Prevents users from saving an open case associated with a contact that is no longer with the company. This example uses a custom checkbox field on contacts called No Longer With Company. |
| Formula: | AND(Contact.Not_Longer_With_Company__c,     NOT(IsClosed)) |
| Error Message: | Unable to save this case because the related contact is no longer with the company. To continue, choose another contact. |
| Error Location: | Contact Name |

## Code Examples

```
AND(Contact.Not_Longer_With_Company__c, 
   NOT(IsClosed))
```
