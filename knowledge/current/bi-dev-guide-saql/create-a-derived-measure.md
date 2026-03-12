---
title: "Create a Derived Measure"
domain: bi-dev-guide-saql
topic: create-a-derived-measure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.273Z
estimatedTokens: 297
keywords: [Derived, Measure, Perform, calculations, measures, result, new, Calculate, Time, Win]
---

# Create a Derived Measure

> Perform calculations on existing measures and use the result to create a new, or
            derived, measure.

# Create a Derived Measure

Perform calculations on existing measures and use the result to create a new, or derived, measure.

CRM Analytics calculates the value of derived measures at run time using the values from other fields.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

You can also create a derived measure in a dataflow rather than at runtime using SAQL. Measures created during a dataflow are calculated when the data is imported and may result in better performance.

## Example - Calculate the Time to Win

Suppose that you have an Opportunities dataset with the Close Date and Open Date fields. You want to see the number of days it took to win the opportunity. Use CloseDate\_day\_epoch and CreatedDate\_day\_epoch to create a derived measure called Time to Win: ('CloseDate\_day\_epoch'- 'CreatedDate\_day\_epoch') as 'Time to Win'.

The field Time to Win is calculated at run time:

```

```

The resulting table contains the number of days to win each opportunity:

![Derived dimension shows time to win](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_derived_measure.png&folder=bi_dev_guide_saql)

## Code Examples

```
q = load "Opportunities";
q = foreach q generate 'CloseDate_day_epoch' as 'CloseDate_day_epoch', 'CreatedDate_day_epoch' as 'CreatedDate_day_epoch', 'Opportunity_Name' as 'Opportunity_Name', ('CloseDate_day_epoch'- 'CreatedDate_day_epoch') as 'Time to Win';
```
