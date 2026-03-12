---
title: "Detection Event Is Definitely Anomalous but Maybe Not Malicious"
domain: securityImplGuide
topic: detection-event-is-definitely-anomalous-but-maybe-not-malicious
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.957Z
estimatedTokens: 742
keywords: [Detection, Event, Definitely, Anomalous, Maybe, Malicious, Alice, sales, rep, Louis, She’s, often, road, meet, clients]
---

# Detection Event Is Definitely Anomalous but Maybe Not Malicious

> Alice is a sales rep based in St. Louis. She’s often on the road to meet with clients.
    When she travels, she generally, but not consistently, use her company’s VPN to log into
    Salesforce.

# Detection Event Is Definitely Anomalous but Maybe Not Malicious

Alice is a sales rep based in St. Louis. She’s often on the road to meet with clients. When she travels, she generally, but not consistently, use her company’s VPN to log into Salesforce.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


On July 27, 2015, Alice’s account was used to generate a report from a relatively new IP address. Bob, the administrator for Alice’s org, noticed a ReportAnomalyEvent about this report generation activity. The event contained this information.

| ReportAnomalyEvent Field | Value |
| --- | --- |
| Score | 95.0158 |
| SourceIp | 96.43.144.27 |
| EventDate | 2015-07-27T07:45:07.192Z |
| UserId | 00530000009M944 |
| Report | 00OD0000001leVCMAY |
| SecurityEventData | (see next table) |

The SecurityEventData field contained this information.

| featureName | featureValue | featureContribution |
| --- | --- | --- |
| autonomousSystem | Softbank Corp | 73.4% |
| rowCount | 50876 | 15.6% |
| userAgent | - | 9.9% |
| numberFilters | 11 | 0.81% |
| periodOfDay | Night | 0.21% |

Bob notices that the autonomous system—derived from the IP address—is the top-ranked feature with 73.4% feature contribution. This percentage indicates that Alice rarely uses this autonomous system. Bob also notices that the report has around 50k rows, which is not small for this org. Bob then uses the UserId to identify the user as Alice. By looking at the ReportEvent events, Bob notices that Alice typically generates reports containing 1,000–10,000 rows. But on rare occasions, Alice generated reports with more than 50k rows. The userAgent has a smaller feature contribution, which could be attributed to Alice using her mobile device less when she travels. The numberFilters and periodOfDay features have small feature contributions, and are therefore not important.

Because Alice rarely uses this autonomous system and the report is bigger than what Alice typically generates, Bob concludes that this report falls outside of typical activity. However, Bob is unable to verify whether Alice or an attacker committed this malicious act. He attempts to get more information on this incident before pursuing any threat mitigation actions.

#### See Also

-   [*Platform Events Developer Guide*: ReportAnomalyEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_reportanomalyevent.htm "Platform Events Developer Guide: ReportAnomalyEvent  - HTML (New Window)")

-   [*Platform Events Developer Guide*: ReportEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_reportevent.htm "Platform Events Developer Guide: ReportEvent  - HTML (New Window)")
