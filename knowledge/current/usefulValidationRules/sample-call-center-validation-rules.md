---
title: "Sample Call Center Validation Rules"
domain: usefulValidationRules
topic: sample-call-center-validation-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.346Z
estimatedTokens: 677
keywords: [Sample, Call, Center, Validation, Rules, requiring, conditional, preventing, cases, reset, restricting, case, status, Conditionally, Require]
---

# Sample Call Center Validation Rules

> Validation rules for requiring a conditional description, preventing cases from being
    reset, restricting case status, and more.

# Sample Call Center Validation Rules

Validation rules for requiring a conditional description, preventing cases from being reset, restricting case status, and more.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Essentials, Contact Manager, Group, Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


For more information on any of the formula functions used in these examples, see [Formula Operators and Functions](https://help.salesforce.com/apex/HTViewHelpDoc?id=customize_functions.htm&language=en_US#customize_functions).

## Conditionally Require Description When Case Reason is “Other”

| Field | Value |
| --- | --- |
| Description: | Validates that a custom field called Other Reason contains a value if a case has a Case Reason of “Other.” |
| Formula: | AND(   ISPICKVAL( Reason, "Other" ),   ISBLANK(Other_Reason__c) ) |
| Error Message: | Description of Other Reason is required. |
| Error Location: | Other Reason |

## Prevent Open Cases from Being Reset to New

| Field | Value |
| --- | --- |
| Description: | If a case is already open, prevents the Status from being changed back to “New.” |
| Formula: | AND(   ISCHANGED( Status ),   NOT(ISPICKVAL(PRIORVALUE( Status ), "New")),   ISPICKVAL( Status, "New") ) |
| Error Message: | Open case Status cannot be reset to New. |
| Error Location: | Status |

## Restrict Status of Re-Opened Cases

| Field | Value |
| --- | --- |
| Description: | Validates that the case Status is “Re-opened” when a closed case is opened again. |
| Formula: | AND(   ISCHANGED( Status ),   OR(       ISPICKVAL(PRIORVALUE( Status ), "Closed"),       ISPICKVAL(PRIORVALUE( Status ),            "Closed in SSP")),   NOT( ISPICKVAL( Status, "Re-Opened")) ) |
| Error Message: | Closed case can only be changed to “Re-opened.” |
| Error Location: | Status |

## Prevent Case Milestone Completion After Cases Are Closed

| Field | Value |
| --- | --- |
| Description: | Validates that a milestone's Completion Date can't occur after the case's Status is Closed. |
| Formula: | Case.IsClosed  = true |
| Error Message: | You can't complete a milestone after a case is closed. |
| Error Location: | Top of Page |

## Prevent Case Milestone Completion Before Case Creation Dates

| Field | Value |
| --- | --- |
| Description: | Validates that the milestone's Completion Date has occurred after the case's Date/Time Opened. |
| Formula: | CompletionDate  >=  Case.CreatedDate  &&  CompletionDate  <=  Case.ClosedDate |
| Error Message: | The milestone Completion Date must occur after the date the case was created and before the case was closed. |
| Error Location: | Top of Page |

## Code Examples

```
AND(
  ISPICKVAL( Reason, "Other" ),
  ISBLANK(Other_Reason__c)
)
```

```
AND(
  ISCHANGED( Status ),
  NOT(ISPICKVAL(PRIORVALUE( Status ), "New")),
  ISPICKVAL( Status, "New")
)
```

```
AND(
  ISCHANGED( Status ),
  OR( 
     ISPICKVAL(PRIORVALUE( Status ), "Closed"), 
     ISPICKVAL(PRIORVALUE( Status ), 
          "Closed in SSP")),
  NOT( ISPICKVAL( Status, "Re-Opened"))
)
```
