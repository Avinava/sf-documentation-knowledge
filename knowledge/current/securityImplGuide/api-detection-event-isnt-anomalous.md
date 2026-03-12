---
title: "API Detection Event Isn’t Anomalous"
domain: securityImplGuide
topic: api-detection-event-isnt-anomalous
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.975Z
estimatedTokens: 529
keywords: [API, Detection, Event, Isn’t, Anomalous, Jason, developer, uses, APIs, query, Account, Sunday, retrieves, records]
---

# API Detection Event Isn’t Anomalous

> Jason, a developer, uses APIs to query an Account object on a Sunday. He retrieves
    10,000 records.

# API Detection Event Isn’t Anomalous

Jason, a developer, uses APIs to query an Account object on a Sunday. He retrieves 10,000 records.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


The event contains this information.

| APIAnomalyEvent Field | Value |
| --- | --- |
| Score | .5801 |
| SourceIp | 96.43.144.30 |
| EventDate | 2020-03-27T07:45:07.192Z |
| UserId | 00530000009M946 |
| SecurityEventData | (see next table) |

The SecurityEventData field contains this information.

| featureName | featureValue | featureContribution |
| --- | --- | --- |
| rowCount | 1937568 | 95.00% |
| autonomousSystem | Bigleaf Networks, Inc. | 1.62% |
| dayOfWeek | Sunday | 1.42% |
| userAgent | Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36} | 1.21% |
| periodOfDay | Evening | 0.09% |
| averageRowSize | 744 | 0.08% |
| screenResolution | 900x1440 | 0.07% |

Alia, the Salesforce admin, notices that 10,000 records were retrieved from an Account object on a Sunday. She investigates further. Using the UserId field value, Alia identifies Jason as the user. She then looks through Jason’s past activity. She notices that Jason, a developer, retrieves records of varying amounts, ranging from just a handful to 20,000 records. Alia also notices in the dayOfWeek and periodOfDay features that Jason often works Sundays and nights.

Alia concludes that this detection event wasn’t anomalous because the activity is well within Jason's typical activity.

#### See Also

-   [*Platform Events Developer Guide*: ApiAnomalyEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_apianomalyevent.htm?q=API%20Anomaly)

-   [*Platform Events Developer Guide*: ApiEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_apievent.htm)
