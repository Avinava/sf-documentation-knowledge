---
title: "Trended Report"
domain: bi-dev-guide-rest
topic: trended-report
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:11.328Z
estimatedTokens: 366
keywords: [Trended, Report, Analytics]
---

# Trended Report

> An Analytics trended report.

# Trended Report

An Analytics trended report.

Properties

| Parameter Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apex​Hooks​Class | Asset​Reference | The reference to the apex class which is used for post processing each time the report is trended. | Small, 37.0 | 38.0 |
| dashboard | Asset​Reference | The reference to the dashboard for the trended report. | Small, 37.0 | 37.0 |
| dataset | Asset​Reference | The reference to the dataset with the trended report data. | Small, 37.0 | 37.0 |
| id | String | The 18 character ID of the trended report. | Small, 37.0 | 37.0 |
| report | Asset​Reference | The reference to the report that is being trended. | Small, 37.0 | 37.0 |
| schedule | Schedule | The schedule on which the trending report should be run. Valid values are:Daily​ScheduleEmpty​ScheduleEvent​Driven​ScheduleHourly​ScheduleMinutely​ScheduleMonthly​Relative​ScheduleMonthly​Specific​ScheduleWeekly​Schedule | Small, 39.0 | 39.0 |
| url | String | The URL for the trended report. | Small, 37.0 | 37.0 |

#### See Also

-   [Trended Reports List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_trendedreports.htm "Returns a list of trending reports or creates a trending report.")

-   [Trended Report Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_trendedtreports_id.htm "Returns, deletes, or updates a trending report.")

## Related Topics

- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
- Schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_schedule.htm)
- Daily​Schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_daily_schedule.htm)
- Empty​Schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_empty_schedule.htm)
- Event​Driven​Schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_event_driven_schedule.htm)
- Hourly​Schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_hourly_schedule.htm)
- Minutely​Schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_minutely_schedule.htm)
- Monthly​Relative​Schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_monthly_relative_schedule.htm)
- Monthly​Specific​Schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_monthly_specific_schedule.htm)
- Weekly​Schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_weekly_schedule.htm)
