---
title: "API Request Anomaly Detection Examples"
domain: securityImplGuide
topic: api-request-anomaly-detection-examples
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.919Z
estimatedTokens: 439
keywords: [API, Anomaly, Detection, Examples, several, illustrate, how, investigate, anomalous, events, thoroughly]
---

# API Request Anomaly Detection Examples

> Here are several examples that illustrate how you can investigate anomalous API request
    events thoroughly.

# API Request Anomaly Detection Examples

Here are several examples that illustrate how you can investigate anomalous API request events thoroughly.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


-   **[API Detection Event Isn’t Anomalous](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_examples_api_notanomalous.htm)**
    Jason, a developer, uses APIs to query an Account object on a Sunday. He retrieves 10,000 records.
-   **[API Detection Event Possibly Anomalous](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_examples_api_maybeanomalous.htm)**
    Rob, a relatively new Sales Operation Lead, uses an API to query the Opportunity object and extracts 10 million records. He previously queried the same object using a different browser and from a different IP address.
-   **[API Detection Event Is an Anomaly but Isn’t Clearly Malicious](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_examples_api_anomalous.htm)**
    Alice is a sales rep based in St. Louis. She’s often on the road to meet with clients. When she travels, she generally, but not consistently, uses her company’s VPN to log into Salesforce.
-   **[API Detection Event Is Confirmed Malicious](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_examples_api_malicious.htm)**
    Alan, a Salesforce user, employs an API to query the Opportunity object and extracts 10 million records. It’s the first time that Alan queries the Opportunity object and uses this IP address to log in.

## Related Topics

- API Detection Event Isn’t Anomalous (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_examples_api_notanomalous.htm)
- API Detection Event Possibly Anomalous (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_examples_api_maybeanomalous.htm)
- API Detection Event Is an Anomaly but Isn’t Clearly Malicious (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_examples_api_anomalous.htm)
- API Detection Event Is Confirmed Malicious (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_examples_api_malicious.htm)
