---
title: "Report Anomaly Detection Examples"
domain: securityImplGuide
topic: report-anomaly-detection-examples
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.930Z
estimatedTokens: 499
keywords: [Report, Anomaly, Detection, Examples, several, illustrate, how, investigate, anomalous, events, thoroughly]
---

# Report Anomaly Detection Examples

> Here are several examples that illustrate how you can investigate anomalous report
    events thoroughly.

# Report Anomaly Detection Examples

Here are several examples that illustrate how you can investigate anomalous report events thoroughly.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


-   **[Detection Event Isn’t Anomalous](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_examples_notanomalous.htm)**
    Jason is a sales data analyst who reports to the regional sales manager. It’s Jason’s job to generate reports for his manager’s sales calls. On March 27, 2019, Jason’s account was used to generate a report. Alia, the administrator for Jason’s org, noticed a ReportAnomalyEvent about this report generation activity.
-   **[Detection Event Possibly Anomalous](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_examples_maybeanomalous.htm)**
    Rob recently joined the company as a customer success representative. On Jan 15, 2019, Rob’s account was used to generate a report. Tony, the org’s Salesforce admin, noticed a ReportAnomalyEvent about this report generation activity.
-   **[Detection Event Is Definitely Anomalous but Maybe Not Malicious](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_examples_anomalous.htm)**
    Alice is a sales rep based in St. Louis. She’s often on the road to meet with clients. When she travels, she generally, but not consistently, use her company’s VPN to log into Salesforce.
-   **[Detection Event Is Confirmed Malicious](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_examples_malicious.htm)**
    John, a sales rep based in San Francisco, often travels for work. He regularly downloads reports of his leads for his weekly sales presentations. John has access to 500-1,000 leads and his weekly report downloads typically contain 500–1,000 rows.

## Related Topics

- Detection Event Isn’t Anomalous (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_examples_notanomalous.htm)
- Detection Event Possibly Anomalous (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_examples_maybeanomalous.htm)
- Detection Event Is Definitely Anomalous but Maybe Not Malicious (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_examples_anomalous.htm)
- Detection Event Is Confirmed Malicious (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_examples_malicious.htm)
