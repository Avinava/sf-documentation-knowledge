---
title: "Sample Number Validation Rules"
domain: usefulValidationRules
topic: sample-number-validation-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.390Z
estimatedTokens: 932
keywords: [Sample, Number, Validation, Rules, Examples, how, validate, users, can't, save, time, card, record, hours, work]
---

# Sample Number Validation Rules

> Examples for how to validate that users can't save a time card record with more than
      40 hours in a work week, numbers can't be negative, and even or odd numbers.

# Sample Number Validation Rules

Examples for how to validate that users can't save a time card record with more than 40 hours in a work week, numbers can't be negative, and even or odd numbers.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Contact Manager, Group, Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


For more information on any of the formula functions used in these examples, see [Formula Operators and Functions](https://help.salesforce.com/apex/HTViewHelpDoc?id=customize_functions.htm&language=en_US#customize_functions).

## Time Cards Must Total 40 Hours

| Field | Value |
| --- | --- |
| Description: | Ensures that users cannot save a time card record with more than 40 hours in a work week. This example requires five custom fields on your custom object, one for each day of work. |
| Formula: | Monday_Hours__c +  Tuesday_Hours__c +  Wednesday_Hours__c +  Thursday_Hours__c +  Friday_Hours__c > 40 |
| Error Message: | Your total hours cannot exceed 40. |
| Error Location: | Top of Page |

## Number Cannot Be Negative

| Field | Value |
| --- | --- |
| Description: | Validates that a custom field called Hours Worked is not a negative number. |
| Formula: | Hours_Worked__c < 0 |
| Error Message: | Hours Worked cannot be less than zero. |
| Error Location: | Hours Worked |

## Number Must Be Even

| Field | Value |
| --- | --- |
| Description: | Validates that a custom field called Ark Passengers is a non-negative even number. |
| Formula: | OR(    Ark_Passengers__c < 0,    MOD( Ark_Passengers__c, 2) <> 0 ) |
| Error Message: | Ark Passengers must be a positive even number. |
| Error Location: | Ark Passengers |

## Number Must Be Odd

| Field | Value |
| --- | --- |
| Description: | Validates that a custom field called Socks Found is a non-negative odd number. |
| Formula: | OR(    Socks_Found__c < 0,    MOD( Socks_Found__c, 2) = 0 ) |
| Error Message: | Socks Found must be an odd number. |
| Error Location: | Socks Found |

## Number Must Be a Multiple of Five

| Field | Value |
| --- | --- |
| Description: | Validates that a custom field called Multiple of 5 is a multiple of five. |
| Formula: | MOD( Multiple_of_5__c, 5) <> 0 |
| Error Message: | Number must be a multiple of five. |
| Error Location: | Multiple of 5 |

## Number Must Be an Integer

| Field | Value |
| --- | --- |
| Description: | Validates that a custom field called My Integer is an integer. |
| Formula: | FLOOR( My_Integer__c) <> My_Integer__c |
| Error Message: | This field must be an integer. |
| Error Location: | My Integer |

## Number Must Be Between -50 and 50

| Field | Value |
| --- | --- |
| Description: | Validates that a custom field called Volume is between -50 and 50. |
| Formula: | ABS( Volume__c) > 50 |
| Error Message: | Volume must be between -50 and 50. |
| Error Location: | Volume |

## Number Range Validation

| Field | Value |
| --- | --- |
| Description: | Validates that the range between two custom fields, Salary Min and Salary Max, is no greater than $20,000. |
| Formula: | (Salary_Max__c - Salary_Min__c) > 20000 |
| Error Message: | Salary range must be within $20,000. Adjust the Salary Max or Salary Min values. |
| Error Location: | Salary Max |

## Percentage Must Be Between Zero and 100

| Field | Value |
| --- | --- |
| Description: | Validates that a custom field called Mix Pct is between 0 and 100%. Note that percent fields are expressed divided by 100 in formulas (100% is expressed as 1; 50% is expressed as 0.5). |
| Formula: | OR(    Mix_Pct__c > 1.0,    Mix_Pct__c < 0.0 ) |
| Error Message: | Mix Pct must be between 0 and 100%. |
| Error Location: | Mix Pct |

## Code Examples

```
Monday_Hours__c + 
Tuesday_Hours__c + 
Wednesday_Hours__c + 
Thursday_Hours__c + 
Friday_Hours__c > 40
```

```
OR(
   Ark_Passengers__c < 0,
   MOD( Ark_Passengers__c, 2) <> 0
)
```

```
OR(
   Socks_Found__c < 0,
   MOD( Socks_Found__c, 2) = 0
)
```

```
OR(
   Mix_Pct__c > 1.0,
   Mix_Pct__c < 0.0
)
```
