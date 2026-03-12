---
title: "Investigate Session Hijacking"
domain: securityImplGuide
topic: investigate-session-hijacking
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.005Z
estimatedTokens: 1078
keywords: [Investigate, Session, Hijacking, tips, investigating, attack]
---

# Investigate Session Hijacking

> Here are some tips for investigating a session hijacking attack.

# Investigate Session Hijacking

Here are some tips for investigating a session hijacking attack.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


Start by querying these Real-Time Event Monitoring events that provide detailed information about the attack. In particular:

-   SessionHijackingEvent and its storage equivalent SessionHijackingEventStore track when unauthorized users gain ownership of a Salesforce user’s session with a stolen session identifier. To detect such an event, Salesforce evaluates how significantly a user’s current browser fingerprint diverges from the previously known fingerprint. Salesforce uses a probabilistically inferred significance of change.

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=securityImplGuide)

    #### Important

    If the SessionHijackingEvent object contains a record, an attack occurred in the past and *Salesforce security has already taken care of the security issue*. You don’t do anything other than investigate the attack for your own purposes.

-   LoginEventStream (and its storage equivalent LoginEvent) tracks all login activity in your org.

For example, say that your org receives a SessionHijackingEvent. The first thing you do is look at relevant fields of the event to get basic information about the attack, such as:

-   Score: A number from 0.0 to 1.0 that indicates how significantly the new browser fingerprint deviates from the previous one. The higher the number, the more likely a session hijacking attack occurred.
-   UserId: The user’s unique ID. Use this ID to query LoginEvent for more login information.
-   EventDate: When this attack occurred.
-   SecurityEventData: JSON field that contains the current and previous values of the browser fingerprint features that contributed the most to this anomaly detection. See [this table](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_session_features.htm "A browser fingerprint is a collection of features that together identify a device. Salesforce uses these features to build a model of the user’s original browser fingerprint when they logged in. Salesforce uses this model to detect whether a user’s session was hijacked.") for the full list of possible features.
-   Summary: A text summary of the event.
-   Current-Previous field pairs: These field pairs provide quick access to current and previous values for selected browser fingerprint features.
    -   CurrentIp and PreviousIp: The current and previous IP address.
    -   CurrentPlatform and PreviousPlatform: The current and previous operating system, such as Win32, MacIntel, or iPad.
    -   CurrentScreen and PreviousScreen: The current and previous screen size in pixels, such as (900.0,1440.0).
    -   CurrentUserAgent and PreviousUserAgent: The current and previous value of your browser’s user agent that identifies the type of browser, version, operating system, and more. For example, Mozilla/5.0 (Macintosh; Intel Mac OS X 10\_14\_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36
    -   CurrentWindow and PreviousWindow: The current and previous window size in pixels, such as (1200.0,1920.0).

See the [API documentation](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_sessionhijackingevent.htm) for the full list of fields.

This sample SOQL query returns these field values.

```

```

Let’s look at the SecurityEventData field a bit more closely because it contains the browser fingerprints that triggered this anomaly detection. Here’s sample data:

```

```

The sample JSON shows that many browser fingerprint features changed, including window, IP address, platform, and more. Salesforce concludes the user session was hijacked.

#### See Also

-   [*Platform Events Developer Guide*: SessionHijackingEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_sessionhijackingevent.htm "Platform Events Developer Guide: SessionHijackingEvent - HTML (New Window)")

## Code Examples

```
SELECT Score, UserId, EventDate, SecurityEventData, Summary 
FROM SessionHijackingEventStore
```

```
[
{
"featureName": "userAgent",
"featureContribution": "0.45 %", 
"previousValue": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142", 
"currentValue": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36."
},
{
"featureName": "ipAddress",
"featureContribution": "0.23 %",
"previousValue": "201.17.237.77",
"currentValue": "182.64.210.144"
},
{
"featureName": "platform",
"featureContribution": "0.23 %",
"previousValue": "Win32",
"currentValue": "MacIntel"
},
{
"featureName": "screen",
"featureContribution": "0.23 %",
"previousValue":"(1050.0,1680.0)",
"currentValue": "(864.0,1536.0)"
},
{
"featureName": "window",
"featureContribution": "0.17 %",
"previousValue": "1363x1717",
"currentValue": "800x1200"
}
]
```

## Related Topics

- this table (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_session_features.htm)
