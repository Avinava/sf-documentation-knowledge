---
title: "API Detection Event Possibly Anomalous"
domain: securityImplGuide
topic: api-detection-event-possibly-anomalous
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.971Z
estimatedTokens: 582
keywords: [API, Detection, Event, Possibly, Anomalous, Rob, relatively, new, Sales, Operation, Lead, uses, query, Opportunity, extracts]
---

# API Detection Event Possibly Anomalous

> Rob, a relatively new Sales Operation Lead, uses an API to query the Opportunity object
    and extracts 10 million records. He previously queried the same object using a different browser
    and from a different IP address.

# API Detection Event Possibly Anomalous

Rob, a relatively new Sales Operation Lead, uses an API to query the Opportunity object and extracts 10 million records. He previously queried the same object using a different browser and from a different IP address.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


The event contains this information.

| APIAnomalyEvent Field | Value |
| --- | --- |
| Score | .7212 |
| SourceIp | 96.43.144.28 |
| EventDate | 2019-01-15T07:45:07.192Z |
| UserId | 00530000009M945 |
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

Tony, the security auditor, notices that the rowCount feature is a bit high for their Salesforce org. The second-ranking feature is userAgent with a feature contribution of close to 30%. This percentage indicates that this user agent, or browser, isn’t common for their org. Tony finds Rob with the UserId field. Tony notices that Rob is a relatively new employee. By looking at the <need field or feature name> events, Tony notices that Rob used a different browser and IP address in the past. Because Rob is a relatively new employee, Tony can’t be certain whether this report matches Rob’s typical activity pattern.

Tony concludes that this detection is possibly anomalous.

#### See Also

-   [*Platform Events Developer Guide*: ApiAnomalyEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_apianomalyevent.htm?q=API%20Anomaly)

-   [*Platform Events Developer Guide*: ApiEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_apievent.htm)
