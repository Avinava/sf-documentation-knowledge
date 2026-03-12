---
title: "RTRReportResult.ScoreCard"
domain: retail-api
topic: rtrreportresultscorecard
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.519Z
estimatedTokens: 177
namespace: The
keywords: [RTRReportResult.ScoreCard, RTR, Report, ScoreCard, component, Implementation]
---

# RTRReportResult.ScoreCard

> This class represents an RTR Report UI ScoreCard component.

**Namespace:** `The`

# RTRReportResult.ScoreCard

This class represents an RTR Report UI ScoreCard component.

## Namespace

The RTRReportResult.ScoreCard class extends RTRReportResult.ReportComponent.

The supported modifiers are global and virtual.

```

```

## Supported Methods

| Method signature | Description | Version |
| --- | --- | --- |
| Decimal getValue(String kpiName) | Returns the value of the KPI parameter for the score card. If the KPI doesn’t exist, or isn’t part of the score card, it throws an exception.kpiName: String. The name of the KPI to return the value from. | 60.0 |

## Example Implementation

After the report is executed, extract the ScoreCard data from the RTRReportResult object.

```

```

## Code Examples

```
// Extract the ScoreCard from the result
// - The component name must match its 'uimapping' name
// - The result must be casted to the correct type.
cgcloud.RTRReportResult.ScoreCard scoreCard = (cgcloud.RTRReportResult.ScoreCard) reportResult.getComponent('ScoreCard');
    
// Extract KPI data. We assume the specified KPIs are in the configured ScoreCard
Decimal kpiValue = scoreCard.getValue('ProPlanIncrVolume');

system.debug('Value: ' + kpiValue);
```
