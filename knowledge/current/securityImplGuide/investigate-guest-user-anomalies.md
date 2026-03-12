---
title: "Investigate Guest User Anomalies"
domain: securityImplGuide
topic: investigate-guest-user-anomalies
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.951Z
estimatedTokens: 593
keywords: [Investigate, Guest, User, Anomalies, It's, often, necessary, further, anomaly, determine, data, breach, occurred, rule, benign]
---

# Investigate Guest User Anomalies

> It's often necessary to further investigate a guest user anomaly to determine if a data
    breach occurred or to rule it out as benign.

# Investigate Guest User Anomalies

It's often necessary to further investigate a guest user anomaly to determine if a data breach occurred or to rule it out as benign.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


As a Shield customer, the Real-Time Event Monitoring events provide you with the required information to perform your investigation and ensure your data is secure. In particular:

-   GuestUserAnomalyEvent and its storage equivalent GuestUserAnomalyEventStore. This entity helps detect data access anomalies caused by guest user permission misconfiguration. These objects are the starting point of your investigation.

For example, say that your org receives a GuestUserAnomalyEvent that indicates a potential anomaly in a guest user’s data access attempt. The first thing you do is look at relevant fields of the event to get basic information about the anomaly, such as:

| Field | Description |
| --- | --- |
| RequestedEntities | Objects that are queried by the guest user. For example:[" Topic "] |
| Score | Specifics how significantly the guest user behavior deviates from the other guest users. It’s formatted as a number between 0 and 1. |
| SoqlCommands | SOQL commands run by the guest user. For example:["SELECT Name, Description, CreatedDate, Id, SystemModstamp FROM Topic ORDER BY Name ASC, Id ASC LIMIT 1000","SELECT COUNT() FROM Topic LIMIT 2000"] |
| Summary | A text summary of the threat that caused this event to be created. The summary lists the browser fingerprint features that most contributed to the threat detection along with their contribution to the total score. For example: Anomaly in SelectData Controller behavior |
| TotalControllerEvents | The number of times controllers were triggered. |
| UserAgent | User Agent for this event. For example:Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1 ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36 |

See the [API Documentation](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_guestuseranomalyevent.htm) for a full list of fields.

Now that you have the data, you can investigate further.
