---
title: "Sample Opportunity Management Validation Rules"
domain: usefulValidationRules
topic: sample-opportunity-management-validation-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.404Z
estimatedTokens: 1673
keywords: [Sample, Opportunity, Management, Validation, Rules, Examples, how, validate, custom, opportunities, Conditionally-Required, Stage, Close, Date, Cannot]
---

# Sample Opportunity Management Validation Rules

> Examples for Examples for how to validate custom fields and other fields on
      opportunities.

# Sample Opportunity Management Validation Rules

Examples for Examples for how to validate custom fields and other fields on opportunities.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Contact Manager, Group, Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


For more information on any of the formula functions used in these examples, see [Formula Operators and Functions](https://help.salesforce.com/apex/HTViewHelpDoc?id=customize_functions.htm&language=en_US#customize_functions).

## Conditionally-Required Field Based on Opportunity Stage

| Field | Value |
| --- | --- |
| Description: | Validates that a custom field called Delivery Date is provided if an opportunity has advanced to the Closed Won or Negotiation/Review stage. |
| Formula: | AND (   OR (      ISPICKVAL(StageName, "Closed Won"),      ISPICKVAL(StageName, "Negotiation/Review")), ISBLANK(Delivery_Date__c) ) |
| Error Message: | Delivery Date is required for this stage. |
| Error Location: | Delivery Date |

## Close Date Cannot Be Prior to Current Month

| Field | Value |
| --- | --- |
| Description: | Validates that the Close Date of an opportunity is not within a month prior to the current month. Note the use of ISNEW and ISCHANGED in this formula to ensure the condition is only checked when the opportunity is being created or the Close Date field is modified subsequently. |
| Formula: | AND(   OR (      ISNEW(),      ISCHANGED( CloseDate )),   CloseDate < DATE( YEAR(TODAY()), MONTH(TODAY()), 1) ) |
| Error Message: | Close Date cannot be prior to current month. |
| Error Location: | Close Date |

## Close Date Must Be a Future Date

| Field | Value |
| --- | --- |
| Description: | Ensures that users do not change the Close Date of an opportunity to a day in the past. |
| Formula: | SampleDate < TODAY() |
| Error Message: | Close Date cannot be a day in the past. |
| Error Location: | Close Date |

## Discounts on Opportunities

| Field | Value |
| --- | --- |
| Description: | Validates that a custom discount percent field is between 0 and 40%. |
| Formula: | OR(Discount_Rate__c < 0, Discount_Rate__c > 0.40) |
| Error Message: | The Discount Rate must not exceed 40%. |
| Error Location: | Discount Rate |

## High-Value Opportunity Must Be Approved Before Closed

| Field | Value |
| --- | --- |
| Description: | Opportunities with amounts greater than $50,000 require that a custom checkbox field called Approved is checked in order to change the stage to Closed Won or Closed Lost. To automate this, set field-level security on the Approved checkbox so that it can only be checked via a custom approval process (Enterprise Edition, Unlimited Edition, or Performance Edition). |
| Formula: | AND(    OR(       ISPICKVAL(StageName,"Closed Won"),       ISPICKVAL(StageName,"Closed Lost")), (Amount > 50000), NOT(ISPICKVAL(Approval_Status__c ,"Approved"))) |
| Error Message: | All high-value opportunities must be approved for closure. Click the Request Close button. |
| Error Location: | Top of Page |

## Opportunity Amount Cannot Exceed $10 Million

| Field | Value |
| --- | --- |
| Description: | Validates that opportunity Amount is positive and no more than $10 million. This limit is designed to catch typos. |
| Formula: | OR(    Amount < 0,    Amount > 10000000 ) |
| Error Message: | Amount cannot exceed $10 million. |
| Error Location: | Amount |

## Opportunity Check for Products

| Field | Value |
| --- | --- |
| Description: | Validates that an opportunity has at least one opportunity product before users can save a change to an opportunity. |
| Formula: | NOT(OR(ISNEW(),HasOpportunityLineItem)) |
| Error Message: | You must add products to this opportunity before saving. |
| Error Location: | Top of Page |

## Opportunity Must Have Products if Beyond “Needs Analysis” Stage

| Field | Value |
| --- | --- |
| Description: | Validates that an opportunity has opportunity products before the Stage can move beyond Needs Analysis. |
| Formula: | AND (   CASE( StageName,      "Value Proposition", 1,      "Id. Decision Makers", 1,      "Perception Analysis", 1,      "Proposal/Price Quote", 1,      "Negotiation/Review", 1,      "Closed Won", 1,      0) = 1,   NOT(HasOpportunityLineItem) ) |
| Error Message: | Opportunity products are required to advance beyond the Needs Analysis stage. |
| Error Location: | Top of Page |

## Opportunity Name Format

| Field | Value |
| --- | --- |
| Description: | Validates that an opportunity contains a hyphen as a way of enforcing an “[Account] - [Amount]” opportunity naming convention. |
| Formula: | FIND( " - ", Name ) = 0 |
| Error Message: | Opportunity Name should use “[Account] - [Amount]” format. |
| Error Location: | Opportunity Name |

## Prevent Sales Reps from Moving Opportunity Stage Backwards

| Field | Value |
| --- | --- |
| Description: | Prevent sales reps from changing opportunity Stage “backwards” to specific values, once they have accepted the opportunity via a custom approval process. The approval process sets the custom Accepted Flag checkbox to True. |
| Formula: | AND(    Accepted_Flag__c,    OR ( ISPICKVAL( StageName, "Stage 1"), ISPICKVAL( StageName, "Stage 2")) ) |
| Error Message: | Invalid stage for accepted opportunity. |
| Error Location: | Stage |

## Probability Must Be 100% for Won Opportunities

| Field | Value |
| --- | --- |
| Description: | Validates that the probability of a won opportunity is properly set to 100%. This is useful for data cleanliness and reporting purposes. |
| Formula: | AND (      ISPICKVAL( StageName, "Closed Won"),      Probability <> 1) |
| Error Message: | Probability must be 100% for won opportunities. |
| Error Location: | Probability |

## Probability Must Be Zero for Lost Opportunities

| Field | Value |
| --- | --- |
| Description: | Validates that the probability of a lost opportunity is properly set to zero. This is useful for data cleanliness and reporting purposes. |
| Formula: | AND (      ISPICKVAL( StageName, "Closed Lost"),      Probability <> 0) |
| Error Message: | Probability must be 0% for lost opportunities. |
| Error Location: | Probability |

## Project Start Date

| Field | Value |
| --- | --- |
| Description: | Validates that a field is conditionally required based on the values of other fields. Use this validation formula to ensure that users include a Project Start Date for an opportunity that is closed/won. |
| Formula: | AND(ISPICKVAL(StageName, "Closed Won"),   ISNULL(Project_Start_Date__c)) |
| Error Message: | Project start date is required for won opportunities. |
| Error Location: | Project Start Date |

## Code Examples

```
AND (
  OR (
     ISPICKVAL(StageName, "Closed Won"),
     ISPICKVAL(StageName, "Negotiation/Review")),
ISBLANK(Delivery_Date__c)
)
```

```
AND(
  OR (
     ISNEW(),
     ISCHANGED( CloseDate )),
  CloseDate < DATE( YEAR(TODAY()), MONTH(TODAY()), 1) )
```

```
AND(
   OR(
      ISPICKVAL(StageName,"Closed Won"),
      ISPICKVAL(StageName,"Closed Lost")),
(Amount > 50000),
NOT(ISPICKVAL(Approval_Status__c ,"Approved")))
```

```
OR(
   Amount < 0,
   Amount > 10000000
)
```

```
AND (
  CASE( StageName,
     "Value Proposition", 1,
     "Id. Decision Makers", 1,
     "Perception Analysis", 1,
     "Proposal/Price Quote", 1,
     "Negotiation/Review", 1,
     "Closed Won", 1,
     0) = 1,
  NOT(HasOpportunityLineItem)
)
```
