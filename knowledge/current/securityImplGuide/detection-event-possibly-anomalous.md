---
title: "Detection Event Possibly Anomalous"
domain: securityImplGuide
topic: detection-event-possibly-anomalous
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.985Z
estimatedTokens: 579
keywords: [Detection, Event, Possibly, Anomalous, Rob, recently, joined, company, customer, success, representative, Jan, Rob’s, account, generate]
---

# Detection Event Possibly Anomalous

> Rob recently joined the company as a customer success representative. On Jan 15, 2019, Rob’s account was used to generate a report. Tony, the org’s Salesforce admin, noticed a ReportAnomalyEvent about this report generation activity.

# Detection Event Possibly Anomalous

Rob recently joined the company as a customer success representative. On Jan 15, 2019, Rob’s account was used to generate a report. Tony, the org’s Salesforce admin, noticed a ReportAnomalyEvent about this report generation activity.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


The event contained this information.

| ReportAnomalyEvent Field | Value |
| --- | --- |
| Score | 96.4512 |
| SourceIp | 96.43.144.28 |
| EventDate | 2019-01-15T07:45:07.192Z |
| UserId | 00530000009M945 |
| Report | 00OD0000001leVCMAY |
| SecurityEventData | (see next table) |

The SecurityEventData field contained this information.

| featureName | featureValue | featureContribution |
| --- | --- | --- |
| rowCount | 46008 | 58.65% |
| userAgent | - | 30.23% |
| averageRowSize | 1534 | 6.58% |
| browserCodecs | - | 2.33% |
| acceptedLanguages | - | 2.19% |

Tony notices that the rowCount feature is a bit high for their org. The second-ranking feature is userAgent with a feature contribution of around 30%. This percentage indicates that this user agent is not common for their org. Tony investigates further and finds Rob with the UserId field. Tony notices that Rob is a relatively new employee. By looking at the ReportEvent events, Tony notices that Rob occasionally generates reports of 46k rows. Because Rob is a relatively new employee, Tony can’t be certain whether this report matches Rob’s typical activity pattern.

Tony concludes that this detection is possibly nomalous, although he doesn’t take any threat mitigation actions now.

#### See Also

-   [*Platform Events Developer Guide*: ReportAnomalyEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_reportanomalyevent.htm "Platform Events Developer Guide: ReportAnomalyEvent  - HTML (New Window)")

-   [*Platform Events Developer Guide*: ReportEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_reportevent.htm "Platform Events Developer Guide: ReportEvent  - HTML (New Window)")
