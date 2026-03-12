---
title: "Sample Date Validation Rules"
domain: usefulValidationRules
topic: sample-date-validation-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.380Z
estimatedTokens: 988
keywords: [Sample, Date, Validation, Rules, Examples, how, validate, custom, weekday, Saturday, Sunday, current, month, year, Weekend]
---

# Sample Date Validation Rules

> Examples for date validation rules. For example, how to validate that the value of a
  custom field is a weekday, a Saturday or Sunday, that a custom date field contains a date within
  the current month and year, and more.

# Sample Date Validation Rules

Examples for date validation rules. For example, how to validate that the value of a custom field is a weekday, a Saturday or Sunday, that a custom date field contains a date within the current month and year, and more.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Contact Manager, Group, Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


For more information on any of the formula functions used in these examples, see [Formula Operators and Functions by Context](https://help.salesforce.com/apex/HTViewHelpDoc?id=customize_functions.htm&language=en_US#customize_functions).

## Date Must Be a Weekday

| Field | Value |
| --- | --- |
| Description: | Validates that the value of a custom date field is a weekday (not Saturday or Sunday). |
| Formula: | CASE(MOD( My_Date__c - DATE(1900, 1, 7), 7), 0, 0, 6, 0, 1) = 0 |
| Error Message: | Date must be a weekday. |
| Error Location: | My Date |

## Date Must Be a Weekend Day

| Field | Value |
| --- | --- |
| Description: | Validates that the value of a custom date field is a Saturday or Sunday. |
| Formula: | CASE( MOD( My_Date__c - DATE(1900, 1, 7), 7), 0, 1, 6, 1, 0) = 0 |
| Error Message: | Date must be a weekend day. |
| Error Location: | My Date |

## Date Must Be in the Current Month

| Field | Value |
| --- | --- |
| Description: | Validates that a custom date field contains a date within the current month and year. |
| Formula: | OR ( YEAR( My_Date__c ) <> YEAR ( TODAY() ), MONTH( My_Date__c ) <> MONTH ( TODAY() ) ) |
| Error Message: | Date must be in the current month. |
| Error Location: | My Date |

## Date Must Be in the Current Year

| Field | Value |
| --- | --- |
| Description: | Validates that a custom date field contains a date within the current year. |
| Formula: | YEAR( My_Date__c ) <> YEAR ( TODAY() ) |
| Error Message: | Date must be in the current year. |
| Error Location: | My Date |

## Date Must Be the Last Day of the Month

| Field | Value |
| --- | --- |
| Description: | Validates whether a custom field called My Date is the last day of the month. To do this, it determines the date of the first day of the next month and then subtracts 1 day. It includes special case logic for December. |
| Formula: | DAY(My_Date__c) <> IF(Month(My_Date__c)=12, 31, DAY(DATE(YEAR(My_Date__c),MONTH(My_Date__c)+1,1) - 1)) |
| Error Message: | Date must be the last day of the month. |
| Error Location: | My Date |

## Date Must Be Within One Year of Today

| Field | Value |
| --- | --- |
| Description: | Validates whether a custom field called Follow-Up Date is within one year of today’s date. This example assumes a 365 day year. (It does not handle leap years.) |
| Formula: | Followup_Date__c - TODAY() > 365 |
| Error Message: | Follow-Up Date must be within one year of today. |
| Error Location: | Follow-Up Date |

## Day of Month Cannot Be Greater Than 15

| Field | Value |
| --- | --- |
| Description: | Validates that a custom field called Begin Date contains a date in the first 15 days of the specified month. |
| Formula: | DAY( Begin_Date__c ) > 15 |
| Error Message: | Begin Date cannot be after the 15th day of month. |
| Error Location: | Begin Date |

## End Date Cannot Be Before Begin Date

| Field | Value |
| --- | --- |
| Description: | Validates that a custom field called End Date does not come before another custom field called Begin Date. |
| Formula: | Begin_Date__c > End_Date__c |
| Error Message: | End Date cannot be before Begin Date. |
| Error Location: | Begin Date |

## Expiration Date Cannot Be Before Close Date

| Field | Value |
| --- | --- |
| Description: | Validates that a custom field called Expiration Date does not come before Close Date. |
| Formula: | Expiration_Date__c < CloseDate |
| Error Message: | Expiration Date cannot be before Close Date. |
| Error Location: | Expiration Date |

## Code Examples

```
CASE(MOD( My_Date__c - DATE(1900, 1, 7), 7),
0, 0,
6, 0,
1) = 0
```

```
CASE( MOD( My_Date__c - DATE(1900, 1, 7), 7),
0, 1,
6, 1,
0) = 0
```

```
OR (
YEAR( My_Date__c ) <> YEAR ( TODAY() ),
MONTH( My_Date__c ) <> MONTH ( TODAY() )
)
```

```
DAY(My_Date__c) <>
IF(Month(My_Date__c)=12, 31, DAY(DATE(YEAR(My_Date__c),MONTH(My_Date__c)+1,1) - 1))
```
