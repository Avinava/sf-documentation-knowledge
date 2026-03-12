---
title: "RTRReportResult Class"
domain: retail-api
topic: rtrreportresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.623Z
estimatedTokens: 1260
namespace: CGCloud
keywords: [RTRReportResult, execute, Trade, Promotion, Management, Real, Time, Reporting, RTR, report, access, data, salesOrg, Map<String, Object>]
---

# RTRReportResult Class

> Use this class to execute the Trade Promotion Management Real Time Reporting (RTR)
  report and access the report data.

**Namespace:** `CGCloud`

# RTRReportResult Class

Use this class to execute the Trade Promotion Management Real Time Reporting (RTR) report and access the report data.

## Namespace

[CGCloud](atlas.en-us.retail_api.meta/retail_api/apex_namespace_CGCloud.htm "The CGCloud namespace provides classes that allow you to customise Real Time Reporting (RTR) data extraction from Apex.")

## Example

Here’s an example of how to use Apex to run the Trade Promotion Management Real Time Reporting reports.

```

```

This returns an instance of a RTRReportResult object after running the report. Use the methods provided by the RTRReportResult class to access the report data.

Filters can be specified for the report execution. The report filters specified match the filters defined in the RTR Report Metadata configuration (RTR Report Configuration SObject record). Depending on the filter type, the expected filter must have a specific structure or type.

singleselect

Here's an example of how the report's filter metadata looks:

```

```

Here's an example of how the filter using Apex looks:

```

```

multiselect

Here's an example of how the report's filter metadata looks:

```

```

Here's an example of how the filter using Apex looks:

```

```

periodmonth

Here's an example of how the report's filter metadata looks:

```

```

Here's an example of how the filter using Apex looks:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

The filter must be represented by an object with the year, start, and total properties.

```

```

periodweek

Here's an example of how the report's filter metadata looks:

```

```

Here's an example of how the filter using Apex looks:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

The filter must be represented by an object with the year, start, and total properties.

```

```

hidden

Here's an example of how the report's filter metadata looks:

```

```

Here's an example of how the filter using Apex looks:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

The filter must be represented with a string.

```

```

fixed

Here's an example of how the report's filter metadata looks:

```

```

Here's an example of how the filter using Apex looks:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

The filter must be represented with a string.

```

```

subaccount

Here's an example of how the report's filter metadata looks:

```

```

Here's an example of how the filter using Apex looks:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

The filter must be represented with a List of strings.

```

```

-   **[RTRReportResult Methods](atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult.htm#apex_CGCloud_RTRReportResult_methods)**


## RTRReportResult Methods

The following are methods for RTRReportResult.

-   **[execute(String name, String salesOrg, Map<String, Object> filters)](atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult.htm#apex_CGReporting_execute)**
    Execute a RTR Report and retrieve all the Report data.
-   **[getComponent(String name)](atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult.htm#apex_CGReporting_getComponent)**
    Retrieve an instance of the Reporting UI component.

### execute(String name, String salesOrg, Map<String, Object> filters)

Execute a RTR Report and retrieve all the Report data.

#### Signature

static RTRReportResult execute(String name, String salesOrg, Map<String, Object\> filters)

#### Parameters

name

Type:String

The name of the RTR report configuration to execute.

salesOrg

Type:String

The Salesforce org name to execute the report on.

filters

Type:String

Report filters as defined in the RTR report metadata.

The filters attribute must align with the expected filters as defined in the RTR reporting configuration.

#### Return Value

Type:[RTRReportResult](#apex_class_CGReporting_RTRReportResult "Use this class to execute the Trade Promotion Management Real Time Reporting (RTR) report and access the report data.")

### getComponent(String name)

Retrieve an instance of the Reporting UI component.

#### Signature

static RTRReportResult execute(String name, String salesOrg, Map<String, Object\> filters)

#### Parameters

name

Type:String

The name of the reporting component as defined in the report metadata uimapping.

#### Return Value

Type:[ReportComponent](atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_ReportComponent.htm#apex_class_CGReporting_RTRReportResult_ReportComponent "Represents a Real Time Reporting (RTR) report UI component. This is an abstract class and can’t be instantiated.")

-   For the Flatlist component, specify the response to RTRReportResult.FlatList
-   For the Scorecard component, specify the response to RTRReportResult.ScoreCard

## Code Examples

```apex
cgcloud.RTRReportResult reportResult = cgcloud.RTRReportResult.execute(
    'Promotion Report',  // Report Name
    '0001',  // Sales Org
    new Map<String, Object> { // Report filters
        'periodmonth' => new Map<String, Object> {
            'start' => 0,
            'total' => 12,
            'year' => 2022
        },
        'accountsfids' => new List<String> {'001SL0000004dfgYAA'},
        'productsfids' => new List<String> {'01tSL00000018oNYAQ'},
        'promo_templatesfid' => new List<String> {'a2USL0000000js12AA', 'a2USL0000000jrz2AA'},
        'promo_phase' => new List<String> {
            'Planning',
            'Modeling',
            'Committed',
            'ForApproval'
        },
        'productlevel'=> 'product'
    }
);
```

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

## Related Topics

- CGCloud (atlas.en-us.retail_api.meta/retail_api/apex_namespace_CGCloud.htm)
- RTRReportResult Methods (atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult.htm)
- execute(String name, String salesOrg, Map<String, Object> filters) (atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult.htm)
- getComponent(String name) (atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult.htm)
- ReportComponent (atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_ReportComponent.htm)
