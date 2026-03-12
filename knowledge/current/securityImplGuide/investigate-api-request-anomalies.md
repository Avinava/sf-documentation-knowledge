---
title: "Investigate API Request Anomalies"
domain: securityImplGuide
topic: investigate-api-request-anomalies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.936Z
estimatedTokens: 754
keywords: [Investigate, API, Anomalies, It's, often, necessary, further, anomaly, either, determine, data, breach, occurred, rule, benign]
---

# Investigate API Request Anomalies

> It's often necessary to further investigate an API request anomaly to either determine
    if a data breach occurred or to rule it out as benign.

# Investigate API Request Anomalies

It's often necessary to further investigate an API request anomaly to either determine if a data breach occurred or to rule it out as benign.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


As a Shield customer, the Real-Time Event Monitoring events provide you with the required information to perform your investigation. In particular:

-   ApiAnomalyEvent and its storage equivalent ApiAnomalyEventStore track anomalies in how users make API calls. These objects are the starting point of your investigation.
-   ApiEventStream and its storage equivalent ApiEvent track user-initiated read-only API calls. Use these objects to see real-time or historical API executions.
-   LoginEventStream (and its storage equivalent LoginEvent) track all login activity in your org.

For example, say that your org receives an ApiAnomalyEvent that indicates a potential anomaly in a user’s API calls. The first thing you do is look at relevant fields of the event to get basic information about the anomaly, such as:

-   Score: A number that represents how much this user’s API activity differed from their usual activity. The higher the number, the more it diverged.
-   UserId: The user’s unique ID.
-   EventDate: The time that the API request occurred.
-   SecurityEventData: JSON field that contains the features, such as row count or day of the week, that contributed the most to this anomaly detection.
-   Summary: A text summary of the event.

See the [API documentation](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_apianomalyevent.htm) for the full list of fields.

This sample SOQL query returns these field values.

```

```

Let’s look at the SecurityEventData field a bit more closely because it contains the contributing factors that triggered this anomaly detection. Here’s sample data:

```

```

The feature that contributed the most (95.00%) to this anomaly detection was rowCount with a value of 1937568. The feature indicates that the user viewed or exported a report that had 1,937,568 rows. But based on historical data, the user rarely views or exports so much data. The other features contributed much less to the score. For example, the user executed the report on Sunday, but this feature contributed only 1.42% to the overall score.

Now that you have the data, you can investigate further.

#### See Also

-   [*Platform Events Developer Guide*: ApiAnomalyEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_apianomalyevent.htm?q=API%20Anomaly)

-   [*Platform Events Developer Guide*: ApiEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_apievent.htm)

## Code Examples

```
SELECT Score, UserId, EventDate, SecurityEventData, Summary
FROM ApiAnomalyEventStore
```

```
[
{
"featureName": "rowCount",
"featureValue": "1937568",
"featureContribution": “95.00 %"
},
{
"featureName": "autonomousSystem",
"featureValue": "Bigleaf Networks, Inc.",
"featureContribution": “1.62 %"
},
{
"featureName": "dayOfWeek",
"featureValue": "Sunday",
"featureContribution": “1.42 %"
},
{
"featureName": "userAgent",
"featureValue": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36}",
"featureContribution": “1.21 %"
},
{
"featureName": "periodOfDay",
"featureValue": “Evening”,
"featureContribution": “.09 %"
},
{
"featureName": "averageRowSize",
"featureValue": "744",
"featureContribution": “0.08 %"
},
{
"featureName": "screenResolution",
"featureValue": "900x1440",
"featureContribution": “0.07 %"
}
]
```
