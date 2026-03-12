---
title: "Sample Lead Management Formulas"
domain: usefulFormulaFields
topic: sample-lead-management-formulas
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.300Z
estimatedTokens: 655
keywords: [Sample, Lead, Management, Formulas, manage, leads, Aging, open, Data, Completeness, Numbering, Round-Robin, Assignment, Cases]
---

# Sample Lead Management Formulas

> Use these formulas to manage leads.

# Sample Lead Management Formulas

Use these formulas to manage leads.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: All Editions |


For details about using the functions included in these samples, see [Formula Operators and Functions](atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm "Use these operators and functions when building formulas. All functions are available everywhere that you can include a formula, such as formula fields, validation rules, approval processes, and workflow rules, unless otherwise specified.").

## Lead Aging (for open leads)

This formula checks to see if a lead is open and if so, calculates the number of days it has been open by subtracting the date and time created from the current date and time. The result is the number of days open rounded to zero decimal places. If the lead isn’t open, this field is blank.

```

```

## Lead Data Completeness

This formula calculates the percent of certain lead fields that your sales personnel enter. The formula field checks the values of two custom number fields: Phone and Email. If the fields are empty, the formula returns the value “0.” The formula returns a value of “1” for each field that contains a value and multiplies this total by fifty to give you the percentage of fields that contain data.

```

```

## Lead Numbering

This formula returns a number value for the text value in the auto-number field Lead Number, which can be useful if you want to use the Lead Number field in a calculation, such as round-robin or other routing purposes. Auto-number fields are text fields and must be converted to a number for numeric calculations.

```

```

## Round-Robin Assignment of Cases or Leads

The following formula example for leads assumes you have three lead queues and you want to assign an equal number of incoming leads to each queue. You can also assign cases using a similar formula.

```

```

This formula is for a custom formula field named Round\_Robin\_ID that assigns each lead a value of 0, 1, or 2. This formula uses a custom auto-number field called Lead Number that assigns each lead a unique number starting with 1. The MOD function divides the lead number by the number of lead queues available (three in this example) and returns a remainder of 0, 1, or 2. Use the value of this formula field in your lead assignment rules to assign lead records to different queues. For example:

-   Round\_Robin\_ID = 0 is assigned to Queue A
-   Round\_Robin\_ID = 1 is assigned to Queue B
-   Round\_Robin\_ID = 2 is assigned to Queue C

## Code Examples

```
IF(ISPICKVAL(Status,
                    "Open"), ROUND(NOW()-CreatedDate, 0), null)
```

```
(IF(Phone = "", 0, 1) + IF(Email = "", 0, 1) ) * 50
```

```
VALUE(Lead_Number__c)
```

```
MOD(VALUE(Lead_Number__c),
                  3)
```

## Related Topics

- Formula Operators and Functions (atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm)
