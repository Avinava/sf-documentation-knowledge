---
title: "API Detection Event Is Confirmed Malicious"
domain: securityImplGuide
topic: api-detection-event-is-confirmed-malicious
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.966Z
estimatedTokens: 660
keywords: [API, Detection, Event, Confirmed, Malicious, Alan, Salesforce, user, employs, query, Opportunity, extracts, million, records, It’s]
---

# API Detection Event Is Confirmed Malicious

> Alan, a Salesforce user, employs an API to query the Opportunity object and extracts 10
    million records. It’s the first time that Alan queries the Opportunity object and uses this IP
    address to log in.

# API Detection Event Is Confirmed Malicious

Alan, a Salesforce user, employs an API to query the Opportunity object and extracts 10 million records. It’s the first time that Alan queries the Opportunity object and uses this IP address to log in.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


The event contains this information.

| APIAnomalyEvent Field | Value |
| --- | --- |
| Score | .95851 |
| SourceIp | 96.43.144.26 |
| EventDate | 2019-05-12T12:22:10.298+00:00 |
| UserId | 00530000009M943 |
| SecurityEventData | (see next table) |

The SecurityEventData field contains this information.

| featureName | featureValue | featureContribution |
| --- | --- | --- |
| rowCount | 1937568 | 95.00% |
| autonomousSystem | Bigleaf Networks, Inc. | 1.62% |
| dayOfWeek | Sunday | 1.42% |
| userAgent | Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36} | 29.21% |
| periodOfDay | Evening | 0.09% |
| averageRowSize | 744 | 0.08% |
| screenResolution | 900x1440 | 0.07% |

Kate, the security auditor, starts an investigation. She uses the UserId to determine that Alan’s account was used to query the Opportunity object. She then searches the events for Alan and notices that he’s never queried the Opportunity object. The table shows that rowCount contributes nearly 100% to this anomaly. This feature contribution value is a numerical value that indicates the importance of rowCount in flagging this report generation activity as an anomaly. Because Alan has no history of generating small reports (500–1,000 rows), a report with a million rows is a noticeable departure from that trend. This fact generates the high feature contribution value.

Kate next discovers that Alan’s account was hacked and the attacker escalated Alan’s access privileges to access data for the entire sales team. As a result, the records contain sales leads for the entire sales team instead of only the sales leads assigned to Alan.

Kate concludes that this detection event is malicious.

#### See Also

-   [*Platform Events Developer Guide*: ApiAnomalyEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_apianomalyevent.htm?q=API%20Anomaly)

-   [*Platform Events Developer Guide*: ApiEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_apievent.htm)
