---
title: "Wave Analytics Limit"
domain: bi-dev-guide-rest
topic: wave-analytics-limit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:11.459Z
estimatedTokens: 629
keywords: [Wave, Analytics, Limit]
---

# Wave Analytics Limit

> An Analytics limit.

# Wave Analytics Limit

An Analytics limit.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| current | Double | The total current used amount. | Small, 51.0 | 51.0 |
| interval | Connect​Analytics​Limit​Interval​Enum | The interval in which the limit is applied. Valid values are:DailyHourlyMonthlyNoneWeekly | Small, 51.0 | 51.0 |
| license​Attributes | Licenses​Attributes | The Analytics license type and other properties. | Small, 51.0 | 51.0 |
| max | Long | The maximum count that Analytics allows. | Small, 51.0 | 51.0 |
| threshold | Long | The threshold value to issue a warning before reaching the max. | Small, 51.0 | 51.0 |
| type | Connect​Analytics​Limit​Type​Enum | The limit type. Valid values areBatch​Transformation​Hours (Maximum dataflow runtime per month)Dataset​Queries (Maximum queries on datasets for all users)Dataset​Row​Count (Maximum row of all datasets combined)Max​Daily​Rows​Data​Cloud​Output​Con (Maximum rows for Data 360 output per rolling 24-hour period)Max​Daily​Rows​High​Output​Con (Maximum rows for all high volume tier output connectors per rolling 24-hour period)Max​Daily​Rows​Low​Output​Con (Maximum rows for all low volume tier output connectors per rolling 24-hour period)Max​Daily​Rows​Med​Output​Con (Maximum rows for all medium volume tier output connectors per rolling 24-hour period)Max​Daily​Size​High​Output​Con (Maximum data size for all high volume tier output connectors per rolling 24-hour period)Max​Daily​Size​Low​Output​Con (Maximum data size for all low volume tier output connectors per rolling 24-hour period)Max​Daily​Size​Med​Output​Con (Maximum data size for all medium volume tier output connectors per rolling 24-hour period)Max​Daily​Size​Virtual​Private​Cloud​Con (Maximum cumulative bytes of data sent through connections using a virtual private cloud in a rolling 24-hour period)Max​Daily​Upload​Volume (Maximum cumulative bytes of data files uploaded to Salesforce in a rolling 24-hour period)Max​Daily​Workflow​Executions (Maximum number of dataflow and recipe runs in a rolling 24-hour period)Max​Recipe​Out​Rows​Per​Month (Maximum number of rows output by all recipes to all datasets in a month)Max​Replicated​Objects (Maximum number of connected objects)Output​Local​Connector​Volume (Maximum cumulative bytes of data files written to Salesforce in a rolling 24-hour period)Staged​Dataset​Row​Count (Maximum rows for staged datasets) | Small, 51.0 | 51.0 |

## Related Topics

- Licenses​Attributes (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_license_attributes.htm)
