---
title: "Detection Event Is Confirmed Malicious"
domain: securityImplGuide
topic: detection-event-is-confirmed-malicious
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.980Z
estimatedTokens: 741
keywords: [Detection, Event, Confirmed, Malicious, John, sales, rep, San, Francisco, often, travels, work, regularly, downloads, reports]
---

# Detection Event Is Confirmed Malicious

> John, a sales rep based in San Francisco, often travels for work. He regularly downloads
    reports of his leads for his weekly sales presentations. John has access to 500-1,000 leads and
    his weekly report downloads typically contain 500–1,000 rows.

# Detection Event Is Confirmed Malicious

John, a sales rep based in San Francisco, often travels for work. He regularly downloads reports of his leads for his weekly sales presentations. John has access to 500-1,000 leads and his weekly report downloads typically contain 500–1,000 rows.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


On May 12, 2019, however, a report of 996,262 rows was downloaded using John’s account. Kate, the administrator for John’s org, noticed a ReportAnomalyEvent about this report generation activity. The event contained this information.

| ReportAnomalyEvent Field | Value |
| --- | --- |
| Score | 95.48515 |
| SourceIp | 96.43.144.26 |
| EventDate | 2019-05-12T12:22:10.298+00:00 |
| UserId | 00530000009M943 |
| Report | 00OD0000001leVCMAY |
| SecurityEventData | (see next table) |

The SecurityEventData field contained this information.

| featureName | featureValue | featureContribution |
| --- | --- | --- |
| rowCount | 996262 | 99.37% |
| autonomousSystem | Starbucks Coffee Company | 0.27% |
| dayOfWeek | Sunday | 0.13% |
| averageRowSize | 1507 | 0.06% |
| userAgent | - | 0.02% |

Kate starts an investigation to dig deeper. She uses the UserId to determine that the report was downloaded using John’s account. She then searches the ReportEvent events for John and notices that he generates weekly reports, but they contain only 500–1,000 rows. The table shows that rowCount contributes nearly 100% to this anomaly. This feature contribution value is a numerical value that indicates the importance of rowCount in flagging this report generation activity as an anomaly. Because John has a consistent history of generating small reports (500–1,000 rows), a report with a million rows is a noticeable departure from that trend. This fact generates the high feature contribution value.

Upon further investigation, Kate discovers that John’s account was hacked and the attacker escalated John’s access privileges to access data for the entire sales team. As a result, the report contained sales leads for the entire sales team instead of only the sales leads assigned to John.

Kate concludes that this detection event is malicious and takes further threat mitigation actions.

#### See Also

-   [*Platform Events Developer Guide*: ReportAnomalyEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_reportanomalyevent.htm "Platform Events Developer Guide: ReportAnomalyEvent  - HTML (New Window)")

-   [*Platform Events Developer Guide*: ReportEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_reportevent.htm "Platform Events Developer Guide: ReportEvent  - HTML (New Window)")
