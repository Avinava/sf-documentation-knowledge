---
title: "API Detection Event Is an Anomaly but Isn’t Clearly Malicious"
domain: securityImplGuide
topic: api-detection-event-is-an-anomaly-but-isnt-clearly-malicious
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.961Z
estimatedTokens: 748
keywords: [API, Detection, Event, Anomaly, Isn’t, Clearly, Malicious, Alice, sales, rep, Louis, She’s, often, road, meet]
---

# API Detection Event Is an Anomaly but Isn’t Clearly Malicious

> Alice is a sales rep based in St. Louis. She’s often on the road to meet with clients.
    When she travels, she generally, but not consistently, uses her company’s VPN to log into
    Salesforce.

# API Detection Event Is an Anomaly but Isn’t Clearly Malicious

Alice is a sales rep based in St. Louis. She’s often on the road to meet with clients. When she travels, she generally, but not consistently, uses her company’s VPN to log into Salesforce.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


On July 27, 2020, Alice’s account was used to query an object from a relatively new IP address. Bob, the administrator for Alice’s Salesforce org, noticed a APIAnomalyEvent about this report generation activity. The event contained this information.

| APIAnomalyEvent Field | Value |
| --- | --- |
| Score | .8671 |
| SourceIp | 96.43.144.27 |
| EventDate | 2015-07-27T07:45:07.192Z |
| UserId | 00530000009M944 |
| SecurityEventData | (see next table) |

The SecurityEventData field contains this information.

| featureName | featureValue | featureContribution |
| --- | --- | --- |
| rowCount | 50568 | 95.00% |
| autonomousSystem | Bigleaf Networks, Inc. | 73.4% |
| dayOfWeek | Sunday | 1.42% |
| userAgent | Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36} | 29.21% |
| periodOfDay | Evening | 0.09% |
| averageRowSize | 744 | 0.08% |
| screenResolution | 900x1440 | 0.07% |

Bob, the Salesforce admin, notices that the autonomous system—derived from the IP address—is the top-ranked feature with 73.4% feature contribution. This percentage indicates that Alice rarely uses this autonomous system. Bob also notices that the rowCount has around 50,000 rows, which isn’t small for this org. Bob then uses the UserId to identify the user as Alice. By looking at the <need event name here> events, Bob notices that Alice typically generates reports containing 1,000–10,000 rows. But on rare occasions, Alice generated reports with more than 50,000 rows. The userAgent has a smaller feature contribution, which could be attributed to Alice using her mobile device less when she travels. The numberFilters and periodOfDay features have small feature contributions, and are therefore not important.

Because Alice rarely uses this autonomous system and the report is larger than reports Alice typically generates, Bob concludes that this report falls outside of typical activity. But Bob is unable to verify whether Alice or an attacker committed this malicious act. He attempts to get more information on this incident.

#### See Also

-   [*Platform Events Developer Guide*: ApiAnomalyEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_apianomalyevent.htm?q=API%20Anomaly)

-   [*Platform Events Developer Guide*: ApiEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_apievent.htm)
