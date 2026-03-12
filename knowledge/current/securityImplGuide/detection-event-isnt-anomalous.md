---
title: "Detection Event Isn’t Anomalous"
domain: securityImplGuide
topic: detection-event-isnt-anomalous
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.989Z
estimatedTokens: 592
keywords: [Detection, Event, Isn’t, Anomalous, Jason, sales, data, analyst, reports, regional, manager, It’s, Jason’s, job, generate]
---

# Detection Event Isn’t Anomalous

> Jason is a sales data analyst who reports to the regional sales manager. It’s Jason’s job to generate reports for his manager’s sales calls. On March 27, 2019, Jason’s account was used to generate a report. Alia, the administrator for Jason’s org, noticed a ReportAnomalyEvent about this report generation activity.

# Detection Event Isn’t Anomalous

Jason is a sales data analyst who reports to the regional sales manager. It’s Jason’s job to generate reports for his manager’s sales calls. On March 27, 2019, Jason’s account was used to generate a report. Alia, the administrator for Jason’s org, noticed a ReportAnomalyEvent about this report generation activity.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


The event contained this information.

| ReportAnomalyEvent Field | Value |
| --- | --- |
| Score | 97.9801 |
| SourceIp | 96.43.144.30 |
| EventDate | 2019-03-27T07:45:07.192Z |
| UserId | 00530000009M946 |
| Report | 00OD0000001leVCMAY |
| SecurityEventData | (see next table) |

The SecurityEventData field contained this information.

| featureName | featureValue | featureContribution |
| --- | --- | --- |
| rowCount | 17234 | 60.2% |
| dayOfWeek | 0 | 25.6% |
| numberColumns | 12 | 12.5% |
| numberFilters | 11 | 1.04% |
| periodOfDay | Night | 0.65% |

Alia notices that this report had approximately 17k rows generated on a Sunday. She decides to investigate further. Using the UserId field value, Alia identifies Jason as the user. She then looks through Jason’s past report generation activity using the ReportEvent event. She notices that Jason, a sales data analyst, generates reports of varying sizes, ranging from just a handful of rows to 20k rows. Alia also notices that Jason often accompanies his manager on road shows, which often involves working Sundays and nights.

Alia concludes that this detection event wasn’t anomalous because the report generation activity is well within Jason's typical activity.

#### See Also

-   [*Platform Events Developer Guide*: ReportAnomalyEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_reportanomalyevent.htm "Platform Events Developer Guide: ReportAnomalyEvent  - HTML (New Window)")

-   [*Platform Events Developer Guide*: ReportEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_reportevent.htm "Platform Events Developer Guide: ReportEvent  - HTML (New Window)")
