---
title: "Report Execution Filter Types and Limits"
domain: retail-api
topic: report-execution-filter-types-and-limits
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.178Z
estimatedTokens: 275
keywords: [Report, Execution, Filter, Limits, different, filters, specify, execute, singleselect, multiselect, periodmonth, periodweek, hidden, fixed, subaccount]
---

# Report Execution Filter Types and Limits

> Here are the different types of filters you can specify to execute a
    report.

# Report Execution Filter Types and Limits

Here are the different types of filters you can specify to execute a report.

The specified report filters must match the filters defined in the RTR report metadata configuration (RTR Report Configuration sObject).

## singleselect

Here’s the metadata filter.

```

```

Here’s the corresponding Apex filter.

```

```

## multiselect

Here’s the metadata filter.

```

```

Here’s the corresponding Apex filter.

```

```

## periodmonth

Here’s the metadata filter.

```

```

Here’s the corresponding Apex filter.

```

```

## periodweek

Here’s the metadata filter.

```

```

Here’s the corresponding Apex filter.

```

```

## hidden

Here’s the metadata filter.

```

```

Here’s the corresponding Apex filter.

```

```

## fixed

Here’s the metadata filter.

```

```

Here’s the corresponding Apex filter.

```

```

## subaccount

Here’s the metadata filter.

```

```

Here’s the corresponding Apex filter.

```

```

## Filter Limits

| Filter Name | Limit |
| --- | --- |
| accountsfids | 50 |
| subaccountsfids | 50 |
| productsfids | 50 |

## Code Examples

```
{
    "type": "singleselect",
    "name": "kpigroup",
    "label": "KPI Set",
    "source": "KPIGroup"
}
```

```
...
    'kpigroup' => 'Plan',
...
```

```
{
    "type": "multiselect",
    "name": "promo_phase",
    "label": "Promotion Phase",
    "source": "PromotionPhase",
    "defaultValue": [
        "Planning"
    ]
}
```

```apex
...
    'promo_phase' => new List<String> {
        'Planning',
        'Modeling',
        'Committed',
        'ForApproval'
    },
...
```

```
{
    "label": "Period",
    "type": "periodmonth",
    "name": "periodmonth"
}
```
