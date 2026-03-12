---
title: "Sample Case Management Formulas"
domain: usefulFormulaFields
topic: sample-case-management-formulas
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.256Z
estimatedTokens: 506
keywords: [Sample, Case, Management, Formulas, manage, Autodial, Categorization, Data, Completeness, Tracking, Suggested, Agent, Prompts, Offers]
---

# Sample Case Management Formulas

> Use these formulas to manage case details.

# Sample Case Management Formulas

Use these formulas to manage case details.

| Available in: Salesforce Classic |
| --- |
| Available in: All Editions |


For details about using the functions included in these samples, see [Formula Operators and Functions](atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm "Use these operators and functions when building formulas. All functions are available everywhere that you can include a formula, such as formula fields, validation rules, approval processes, and workflow rules, unless otherwise specified.").

## Autodial

This formula creates a linkable phone number field that automatically dials the phone number when clicked. In this example, replace "servername" and "call" with the name of your dialing tool and the command it uses to dial. The merge field, Id, inserts the identifier for the contact, lead, or account record. The first Phone merge field tells the dialing tool what number to call and the last Phone merge field uses the value of the Phone field as the linkable text the user clicks to dial.

```

```

## Case Categorization

This formula displays a text value of “RED,” “YELLOW,” or “GREEN,” depending on the value of a case age custom text field.

```

```

## Case Data Completeness Tracking

This formula calculates the percentage of specific custom fields that contain data. The formula checks the values of two custom number fields: Problem Num and Severity Num. If the fields are empty, the formula returns the value “0.” The formula returns a value of “1” for each field that contains a value and multiplies this total by fifty to give you the percentage of fields that contain data.

```

```

## Suggested Agent Prompts

This formula prompts an agent with cross-sell offers based on past purchases.

```

```

## Suggested Offers

This formula suggests a product based on the support history for a computer reseller. When the Problem custom field matches a field, the formula field returns a suggestion.

```

```

## Code Examples

```
HYPERLINK("http://servername/call?id=" & Id & "&phone=" &
                      Phone, Phone)
```

```
IF(DaysOpen__c > 20, "RED",
IF(DaysOpen__c > 10, "YELLOW", 
"GREEN") )
```

```
(IF(ISBLANK(Problem_Num__c), 0, 1) + IF(ISBLANK(Severity_Num__c ), 0,1)) * 50
```

```
CASE(Product_Purch__c, 
"Printer", "Extra toner cartridges", "Camera", "Memory cards", 
"Special of the day")
```

```
CASE(Problem__c, 
"Memory", "Suggest new memory cards", "Hard Drive failure", "Suggest new hard drive with tape backup", 
"")
```

## Related Topics

- Formula Operators and Functions (atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm)
