---
title: "Sample Scoring Calculations Formulas"
domain: usefulFormulaFields
topic: sample-scoring-calculations-formulas
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.315Z
estimatedTokens: 252
keywords: [Sample, Scoring, Calculations, Formulas, lead, customer, success]
---

# Sample Scoring Calculations Formulas

> Use these formulas for lead scoring and customer success scoring.

# Sample Scoring Calculations Formulas

Use these formulas for lead scoring and customer success scoring.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: All Editions |


For details about using the functions included in these samples, see [Formula Operators and Functions by Context](atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm "Use these operators and functions when building formulas. All functions are available everywhere that you can include a formula, such as formula fields, validation rules, approval processes, and workflow rules, unless otherwise specified.").

## Lead Scoring

This formula scores leads, providing a higher score for phone calls than website requests.

```

```

Here's a formula that scores a lead based on his or her rating:

```

```

## Customer Success Scoring

This formula uses a simple scoring algorithm to rank customers a high score for positive survey results in Salesforce.

```

```

## Code Examples

```
CASE(LeadSource, "Phone", 2, "Web", 1, 0)
```

```
CASE(1, IF(ISPICKVAL​(Rating, "Hot"),​ 1, 0), 3,​​ IF(ISPICKVAL​(Rating, "Warm"),​ 1, 0), 2, IF(ISPICKVAL​(Rating, "Cold"),​ 1, 0), 1))
```

```
Survey_Question_1__c * 5 + Survey_Question_2__c *2
```

## Related Topics

- Formula Operators and Functions by Context (atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm)
