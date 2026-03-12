---
title: "ScoreCard Class"
domain: retail-api
topic: scorecard-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.643Z
estimatedTokens: 331
namespace: CGCloud
keywords: [ScoreCard, Real, Time, Reporting, RTR, report, component, extends, ReportComponent, Usage, getValue, kpiName]
---

# ScoreCard Class

> Represents a Real Time Reporting (RTR) report scorecard component. This
   class extends the ReportComponent class.

**Namespace:** `CGCloud`

# ScoreCard Class

Represents a Real Time Reporting (RTR) report scorecard component. This class extends the ReportComponent class.

## Namespace

[CGCloud](atlas.en-us.retail_api.meta/retail_api/apex_namespace_CGCloud.htm "The CGCloud namespace provides classes that allow you to customise Real Time Reporting (RTR) data extraction from Apex.")

## Usage

The RTRReportResult.ScoreCard class is accessible outside of the managed package.

## Example

Here’s an example of how to extract the ScoreCard data from the RTRReportResult object.

```

```

-   **[ScoreCard Methods](atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_ScoreCard.htm#apex_CGCloud_ScoreCard_methods)**


## ScoreCard Methods

The following are methods for ScoreCard.

-   **[getValue(String kpiName)](atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_ScoreCard.htm#apex_CGReporting_ScoreCard_getValue)**
    Returns true if a record can be retrieved.

### getValue(String kpiName)

Returns true if a record can be retrieved.

#### Signature

public RTRReportResult.ScoreCard getValue(String kpiName)

#### Parameters

kpiName

Type:String

The name of the KPI from which the value is to returned. The key performance indicator (KPI) must be included in the scorecard.

#### Return Value

Type:Decimal

## Code Examples

```
// Extract the ScoreCard from the result
// - The component name must match its 'uimapping' name
// - The result must be casted to the correct type.
cgcloud.RTRReportResult.ScoreCard scoreCard = (cgcloud.RTRReportResult.ScoreCard) 
    reportResult.getComponent('ScoreCard');
    
// Extract KPI data. We assume the specified KPI's are in the configured scorecard
Decimal kpiValue = scoreCard.getValue('ProPlanIncrVolume');

system.debug('Value: ' + kpiValue);
```

## Related Topics

- CGCloud (atlas.en-us.retail_api.meta/retail_api/apex_namespace_CGCloud.htm)
- ScoreCard Methods (atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_ScoreCard.htm)
- getValue(String kpiName) (atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_ScoreCard.htm)
