---
title: "Trended Report Input"
domain: bi-dev-guide-rest
topic: trended-report-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.902Z
estimatedTokens: 324
keywords: [Trended, Report, Input, Analytics]
---

# Trended Report Input

> An Analytics trended report.

# Trended Report Input

An Analytics trended report.

Properties

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apex​Hooks​Class | Asset​Reference​Input | The reference to the apex class to execute after successful trending. | Optional | 38.0 |
| dashboard​Label | String | The label for the Analytics dashboard that will be created. | Required | 37.0 |
| dataset​Label | String | The reference to the dataset used for the report. | Required | 37.0 |
| report | Asset​Reference​Input | The reference to the report being trended. | Required | 37.0 |
| schedule | Schedule​Input | The schedule on which the trending report should be run. Valid values are:Daily​Schedule​InputEvent​Based​Schedule​InputHourly​Schedule​InputMinutely​Schedule​InputMonthly​Relative​Schedule​InputMonthly​Specific​Schedule​InputWeekly​Schedule​Input | Optional | 39.0 |

#### See Also

-   [Trended Reports List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_trendedreports.htm "Returns a list of trending reports or creates a trending report.")

-   [Trended Report Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_trendedtreports_id.htm "Returns, deletes, or updates a trending report.")

## Related Topics

- Asset​Reference​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_reference_input.htm)
- Schedule​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_schedule_input.htm)
- Daily​Schedule​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_daily_schedule_input.htm)
- Event​Based​Schedule​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_event_based_schedule_input.htm)
- Hourly​Schedule​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_hourly_schedule_input.htm)
- Minutely​Schedule​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_minutely_schedule_input.htm)
- Monthly​Relative​Schedule​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_monthly_relative_schedule_input.htm)
- Monthly​Specific​Schedule​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_monthly_specific_schedule_input.htm)
- Weekly​Schedule​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_weekly_schedule_input.htm)
- Trended Reports List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_trendedreports.htm)
