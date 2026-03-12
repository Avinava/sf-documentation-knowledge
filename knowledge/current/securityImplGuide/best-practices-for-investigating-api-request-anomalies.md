---
title: "Best Practices for Investigating API Request Anomalies"
domain: securityImplGuide
topic: best-practices-for-investigating-api-request-anomalies
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:44.924Z
estimatedTokens: 826
keywords: [Best, Practices, Investigating, API, Anomalies, Keep, tips, mind, investigate, unusual, user, behavior, require, well-informed, evaluation]
---

# Best Practices for Investigating API Request Anomalies

> Keep these tips and best practices in mind when you investigate unusual user behavior.
    Find the information you require to make a well-informed evaluation of your data’s safety.

# Best Practices for Investigating API Request Anomalies

Keep these tips and best practices in mind when you investigate unusual user behavior. Find the information you require to make a well-informed evaluation of your data’s safety.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


Identify the involved user.

Keeping customer privacy in mind, we can’t access customer data or any data inside the reports. As a result, we can provide only the user ID of the user who generated the report that is marked as an anomaly. Use this user ID to locate the username and other details about the person associated with the detection event.

Field: ApiAnomalyEvent.UserId

Use the timestamp.

Our detection model already considers various features derived from the timestamp to determine report generation activity as anomalous or not. You can use this timestamp to narrow down the set of events you must review. You can also determine if the time of report generation was unusual for the user who generated the report.

Field: ApiAnomalyEvent.EventDate

Use contributing factors as a guide.

The contributing factors JSON output shows the features in descending order of contribution. As you start your investigation into the event logs, keep an eye out for the top contributing features. If these features look unusual, they can provide more evidence that confirms the anomaly or even indicate a possible data breach.

Field: ApiAnomalyEvent.SecurityEventData

Consider the anomaly in the context of the user's typical behavior.

Using the ReportAnomalyEvent field values, try to determine whether the user activity within the detection event is typical for the user. For example, consider if it's typical for a user to generate a report from the IP address provided.

Field: ApiAnomalyEvent.SourceIp

Consider the size of the report.

We consider the size of the report to determine if the report generation was anomalous. A user generating a larger report than usual can indicate an unauthorized data export attempt. For example, an attacker obtained unauthorized access to the user's account and exfiltrate as much data as possible before losing access. Or it could mean that a disgruntled employee is exfiltrating data for use beyond the needs of the employer.

Field: ApiAnomalyEvent.SecurityEventData (specifically the rowCount feature name)

Not all anomalies are malicious.

While some anomalies can indicate a malicious intent, other anomalies can be legitimate but unusual. Our detection model can produce detection events that are unusual but not malicious. For example, if an employee gets promoted to a new role and starts generating larger reports, our model can flag this behavior as anomalous.

#### See Also

-   [*Platform Events Developer Guide*: ApiAnomalyEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_apianomalyevent.htm?q=API%20Anomaly)

-   [*Platform Events Developer Guide*: ApiEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_apievent.htm)
