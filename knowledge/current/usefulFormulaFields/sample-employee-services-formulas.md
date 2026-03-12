---
title: "Sample Employee Services Formulas"
domain: usefulFormulaFields
topic: sample-employee-services-formulas
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.278Z
estimatedTokens: 421
keywords: [Sample, Employee, Services, Formulas, Bonus, Calculation, 401K, Hours, Worked, Per, Week, Total, Pay, Amount]
---

# Sample Employee Services Formulas

> Use these formulas for employee services.

# Sample Employee Services Formulas

Use these formulas for employee services.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: All Editions |


For details about using the functions included in these samples, see [Formula Operators and Functions](atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm "Use these operators and functions when building formulas. All functions are available everywhere that you can include a formula, such as formula fields, validation rules, approval processes, and workflow rules, unless otherwise specified.").

## Bonus Calculation

This example determines an employee's bonus amount based on the smallest of two amounts: the employee's gross income times a bonus percent or an equally divided amount of the company's performance amount among all employees. It assumes you have a custom number field for Number of Employees, a custom percent field for Bonus Percent, and currency custom fields for the employee's Gross and company's Performance.

```

```

## Employee 401K

This example formula determines which amount to provide in employee 401K matching based on a matching program of half of the employee's contribution or $250, whichever is less. It assumes you have a custom currency field for Contribution.

```

```

## Hours Worked Per Week

This formula uses a custom tab to enable time tracking of hours worked per day. It uses a formula field to sum the hours per week.

```

```

## Total Pay Amount

This formula determines total pay by calculating regular hours multiplied by a regular pay rate, plus overtime hours multiplied by an overtime pay rate.

```

```

## Code Examples

```
MIN(Gross__c * Bonus_Percent__c, ​
  Performance__c / Number_of_Employees__c)
```

```
MIN(250, Contribution__c /2)
```

```
MonHours__c + TuesHours__c + WedsHours__c + ThursHours__c + FriHours__c
```

```
Total Pay = 
IF(Total_Hours__c <= 40, Total_Hours__c * Hourly_Rate__c, 
40 * Hourly_Rate__c + 
(Total_Hours__c - 40) * Overtime_Rate__c)
```

## Related Topics

- Formula Operators and Functions (atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm)
