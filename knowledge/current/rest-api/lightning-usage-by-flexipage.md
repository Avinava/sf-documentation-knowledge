---
title: "Lightning Usage by FlexiPage"
domain: rest-api
topic: lightning-usage-by-flexipage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.623Z
estimatedTokens: 248
namespace: FlexiPage
keywords: [Lightning, Usage, FlexiPage, details, custom, pages, viewed, most, frequently, Experience., resource, REST, API, version, 44.0, later., Syntax, Example]
---

# Lightning Usage by FlexiPage

> Returns details about the custom pages viewed most
   frequently in Lightning Experience. This resource is available in REST API version 44.0 and
  later.

**Namespace:** `FlexiPage`

# Lightning Usage by FlexiPage

Returns details about the custom pages viewed most frequently in Lightning Experience. This resource is available in REST API version 44.0 and later.

Use this object with the following APIs:

-   Platform
-   Metadata API
-   Tooling API

## Syntax

URI

/services/data/vXX.X/sobjects/LightningUsageByFlexiPageMetrics

Formats

JSON, XML

HTTP methods

GET

Authentication

Authorization: Bearer token

Request parameters

| Parameter | Description |
| --- | --- |
| FlexiPageNameOrId | Namespace and file name, or Page ID of FlexiPage files. |
| FlexiPageType | The FlexiPage type. For example, record details are displayed using RecordPage" type. |
| MetricsDate | The date the metric was recorded. |
| RecordCountEPT | Number of records for a FlexiPage type, where the valid EPT was recorded. |
| SumEPT | Sum of the EPT values for a record |
| TotalCount | Total records for a type. |

## Example

Example Request

```

```

Example Request Body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/LightningUsageByFlexiPageMetrics -H "Authorization: Bearer token"
```

```
SELECT FlexiPageNameOrId FlexiPageNameOrId, SUM(TotalCount) Total FROM LightningUsageByFlexiPageMetrics WHERE MetricsDate = Last_N_DAYS:7 AND (NOT FlexiPageNameOrId = 'unknown unknown') AND (NOT FlexiPageNameOrId = 'unknown | unknown') GROUP BY FlexiPageNameOrId ORDER BY SUM(TotalCount) Desc Limit 10
```
