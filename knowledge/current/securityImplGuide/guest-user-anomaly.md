---
title: "Guest User Anomaly"
domain: securityImplGuide
topic: guest-user-anomaly
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.933Z
estimatedTokens: 307
keywords: [Guest, User, Anomaly, any, activity, sufficiently, different, users, metadata, Salesforce, Core, application, logs, build, profiles]
---

# Guest User Anomaly

> An anomaly is any user activity that is sufficiently different from the other
    users. We use the metadata in Salesforce Core application logs to build profiles representing
    guest users’ data access activities. This threat detection event identifies suspicious attempts
    by guest users to access organization data.

# Guest User Anomaly

An *anomaly* is any user activity that is sufficiently different from the other users. We use the metadata in Salesforce Core application logs to build profiles representing guest users’ data access activities. This threat detection event identifies suspicious attempts by guest users to access organization data.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


-   **[Investigate Guest User Anomalies](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_detection_steps_guest_user_anomaly.htm)**
    It's often necessary to further investigate a guest user anomaly to determine if a data breach occurred or to rule it out as benign.
-   **[Best Practices for Investigating Guest User Anomalies](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_detection_investigate_guest_user_anomaly.htm)**
    Keep these tips in mind when you investigate unusual user behavior. Find the information that you require to make a well-informed evaluation of your data’s safety.

## Related Topics

- Investigate Guest User Anomalies (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_detection_steps_guest_user_anomaly.htm)
- Best Practices for Investigating Guest User Anomalies (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_detection_investigate_guest_user_anomaly.htm)
