---
title: "Sample Account Management Formulas"
domain: usefulFormulaFields
topic: sample-account-management-formulas
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.252Z
estimatedTokens: 314
keywords: [Sample, Account, Management, Formulas, manage, Rating, Region, Contract, Aging]
---

# Sample Account Management Formulas

> Use these formulas to manage account details.

# Sample Account Management Formulas

Use these formulas to manage account details.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: All Editions |


For details about using the functions included in these samples, see [Formula Operators and Functions by Context](atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm "Use these operators and functions when building formulas. All functions are available everywhere that you can include a formula, such as formula fields, validation rules, approval processes, and workflow rules, unless otherwise specified.").

## Account Rating

This formula evaluates Annual Revenue, Billing Country, and Type, and assigns a value of “Hot,” “Warm,” or “Cold.”

```

```

In addition, you can reference this Account Rating formula field from the contact object using cross-object formulas.

```

```

## Account Region

This formula returns a text value of “North,” “South,” “East,” “West,” or “Central” based on the Billing State/Province of the account.

```

```

## Contract Aging

This formula calculates the number of days since a contract with an account was activated. If the contract Status isn’t “Activated,” this field is blank.

```

```

## Code Examples

```
IF (AND (AnnualRevenue > 10000000, 
CONTAINS (CASE (BillingCountry, "United States", "US", "America", "US", "USA", "US", "NA"), "US")), 
IF(ISPICKVAL(Type, "Manufacturing Partner"), "Hot", 
IF(OR (ISPICKVAL (Type, "Channel Partner/Reseller"), 
ISPICKVAL(Type, "Installation Partner")), "Warm", "Cold")), 
"Cold")
```

```
Account.Account_Rating__c
```

```
IF(ISBLANK(BillingState), "None",
IF(CONTAINS("AK:AZ:CA:HA:NV:NM:OR:UT:WA", BillingState), "West",
IF(CONTAINS("CO:ID:MT:KS:OK:TX:WY", BillingState), "Central",
IF(CONTAINS("CT:ME:MA:NH:NY:PA:RI:VT", BillingState), "East",
IF(CONTAINS("AL:AR:DC:DE:FL:GA:KY:LA:MD:MS:NC:NJ:SC:TN:VA:WV", BillingState), "South",
IF(CONTAINS("IL:IN:IA:MI:MN:MO:NE:ND:OH:SD:WI", BillingState), "North", "Other"))))))
```

```
IF(ISPICKVAL(Contract_Status__c, "Activated"), 
NOW() - Contract_Activated_Date__c, null)
```

## Related Topics

- Formula Operators and Functions by Context (atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm)
