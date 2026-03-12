---
title: "Sample User, Role, and Profile Validation Rules"
domain: usefulValidationRules
topic: sample-user-role-and-profile-validation-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.428Z
estimatedTokens: 783
keywords: [Sample, User, Role, Profile, Validation, Rules, Examples, how, validate, custom, Discount, Percent, Exceed, Role-Based, Limit]
---

# Sample User, Role, and Profile Validation Rules

> Examples on how to validate custom user, role, and profile fields.

# Sample User, Role, and Profile Validation Rules

Examples on how to validate custom user, role, and profile fields.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Contact Manager, Group, Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


For more information on any of the formula functions used in these examples, see [Formula Operators and Functions](https://help.salesforce.com/apex/HTViewHelpDoc?id=customize_functions.htm&language=en_US#customize_functions).

## Discount Percent Does Not Exceed Role-Based Limit

| Field | Value |
| --- | --- |
| Description: | Validates that a custom field on opportunities called Discount Percent does not exceed a maximum value that varies depending on the user’s role. The default maximum is 15%. |
| Formula: | Discount_Percent__c > VLOOKUP(     $ObjectType.Role_Limits__c.Fields.Limit__c,     $ObjectType.Role_Limits__c.Fields.Name,      $UserRole.Name ) |
| Error Message: | Discount (%) exceeds limit allowed for your role. |
| Error Location: | Discount Percent |

## Expense Amount Does Not Exceed User's Max Allowed Expense

| Field | Value |
| --- | --- |
| Description: | Validates a custom field called Expense Amount against a custom user field called Max Allowed Expense. |
| Formula: | Expense_Amount__c > $User.Max_Allowed_Expense__c |
| Error Message: | Amount cannot exceed your maximum allowed expense. |
| Error Location: | Expense Amount |

## Only Record Owner Can Change Field

| Field | Value |
| --- | --- |
| Description: | Ensures that only the record owner can make changes to a custom field called Personal Goal. |
| Formula: | AND(    ISCHANGED( Personal_Goal__c ),    Owner <> $User.Id  ) |
| Error Message: | Only record owner can change Personal Goal. |
| Error Location: | Personal Goal |

## Only Record Owner or Administrator Can Change Field

| Field | Value |
| --- | --- |
| Description: | Ensures that a user can make changes to a custom field called Personal Goal only if the user is the record owner or has a custom profile of “Custom: System Admin.” |
| Formula: | AND(     ISCHANGED( Personal_Goal__c ),      Owner <> $User.Id,      $Profile.Name <> "Custom: System Admin"  )$Profile merge fields are only available in Enterprise, Unlimited, Performance, and Developer Editions. |
| Error Message: | Only record owner or administrator can change Personal Goal. |
| Error Location: | Personal Goal |

## Opportunity Close Date Can Only Be Back-Dated by Administrator

| Field | Value |
| --- | --- |
| Description: | Validates that the Close Date of an opportunity does not fall prior to the current month, except for users who have a custom profile called “Custom: System Admin.” |
| Formula: | AND(   OR (      ISNEW(),       ISCHANGED( CloseDate )),    CloseDate < DATE( YEAR(TODAY()), MONTH(TODAY()), 1),    $Profile.Name <> "Custom: System Admin" ) $Profile merge fields are only available in Enterprise, Unlimited, Performance, and Developer Editions. |
| Error Message: | Close Date cannot be prior to current month. |
| Error Location: | Close Date |

## Code Examples

```
Discount_Percent__c > VLOOKUP(
    $ObjectType.Role_Limits__c.Fields.Limit__c,
    $ObjectType.Role_Limits__c.Fields.Name, 
    $UserRole.Name
)
```

```
AND(
   ISCHANGED( Personal_Goal__c ),
   Owner <> $User.Id 
)
```

```
AND(
    ISCHANGED( Personal_Goal__c ), 
    Owner <> $User.Id, 
    $Profile.Name <> "Custom: System Admin" 
)
```

```
AND(
  OR (
     ISNEW(), 
     ISCHANGED( CloseDate )), 
  CloseDate < DATE( YEAR(TODAY()), MONTH(TODAY()), 1),
   $Profile.Name <> "Custom: System Admin"
)
```
