---
title: "Sample Account Validation Rules"
domain: usefulValidationRules
topic: sample-account-validation-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.326Z
estimatedTokens: 422
keywords: [Sample, Account, Validation, Rules, rule, examples, numeric, numbers, number, length, annual, revenue, range]
---

# Sample Account Validation Rules

> Validation rule examples for numeric account numbers, account number length, and
      annual revenue range.

# Sample Account Validation Rules

Validation rule examples for numeric account numbers, account number length, and annual revenue range.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Contact Manager, Group, Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


For more information on any of the formula functions used in these examples, see [Formula Operators and Functions by Context](https://help.salesforce.com/apex/HTViewHelpDoc?id=customize_functions.htm&language=en_US#customize_functions).

## Account Number Is Numeric

| Field | Value |
| --- | --- |
| Description: | Validates that the Account Number is numeric if not blank. |
| Formula: | OR(    ISBLANK(AccountNumber),    NOT(ISNUMBER(AccountNumber)) ) |
| Error Message: | Account Number is not numeric. |
| Error Location: | Account Number |

## Account Number Length

| Field | Value |
| --- | --- |
| Description: | Validates that the Account Number is exactly seven digits (if it is not blank). The number seven is simply illustrative. You can change this to any number you like. |
| Formula: | AND(    ISBLANK(AccountNumber),    LEN(AccountNumber) <> 7 ) |
| Error Message: | Account Number must be seven digits. |
| Error Location: | Account Number |

## Annual Revenue Range

| Field | Value |
| --- | --- |
| Description: | Validates that the account Annual Revenue is not negative and does not exceed $100 billion. This limit is designed to catch typos. |
| Formula: | OR(    AnnualRevenue < 0,    AnnualRevenue > 100000000000 ) |
| Error Message: | Annual Revenue cannot exceed 100 billion. |
| Error Location: | Annual Revenue |

## Code Examples

```
OR(
   ISBLANK(AccountNumber),
   NOT(ISNUMBER(AccountNumber))
)
```

```
AND(
   ISBLANK(AccountNumber),
   LEN(AccountNumber) <> 7
)
```

```
OR(
   AnnualRevenue < 0,
   AnnualRevenue > 100000000000
)
```
