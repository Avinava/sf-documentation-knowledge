---
title: "Real-Time Event Monitoring Data Storage"
domain: securityImplGuide
topic: real-time-event-monitoring-data-storage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.045Z
estimatedTokens: 1754
keywords: [Real-Time, Event, Monitoring, Data, Storage, store, query, Salesforce, objects, events, big, ideal, storing, large, volumes]
---

# Real-Time Event Monitoring Data Storage

> With Real-Time Event Monitoring, you can store and query event data in Salesforce
    objects. Many of the storage events are Salesforce big objects, which are ideal for storing
    large volumes of data for up to six months. A big object stores the data natively in Salesforce
    so you can access it for reporting and other uses. Some storage events, such as for Threat
    Detection, are standard Salesforce objects.

# Real-Time Event Monitoring Data Storage

With Real-Time Event Monitoring, you can store and query event data in Salesforce objects. Many of the storage events are Salesforce big objects, which are ideal for storing large volumes of data for up to six months. A big object stores the data natively in Salesforce so you can access it for reporting and other uses. Some storage events, such as for Threat Detection, are standard Salesforce objects.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


## Using SOQL with Storage Events

Standard SOQL queries are supported for both types of storage events: big objects and standard objects.

**Standard SOQL**

Standard objects, such as the Threat Detection storage events, support SOQL queries on all their fields. But big objects support SOQL queries on only two fields. EventDate or EventIdentifier. You can query big objects using a subset of standard SOQL commands filtering by EventDate alone, or EventDate and EventIdentifier together.

The exception is ReportEvent, where you can filter on three fields. EventDate, EventIdentifier, and UserId (Beta). Valid filters for ReportEvent queries are: If you filter on EventIdentifier alone, or UserId with EventIdentifier, your query fails. You can only do a range query on the first index when you’re searching on UserId alone.

-   UserId alone
-   EventDate alone
-   UserId with EventDate
-   EventDate with EventIdentifier

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

As a beta feature, the UserId filter in ReportEvent is a preview and isn’t part of the “Services” under your Main Services Agreement with Salesforce. Use this feature at your sole discretion, and make your purchase decisions only on the basis of generally available products and features. Salesforce doesn’t guarantee general availability of this feature within any particular time frame or at all, and we can discontinue it at any time. This feature is for evaluation purposes only, not for production use. It’s offered as is and isn’t supported, and Salesforce has no liability for any harm or damage arising out of or in connection with it. All restrictions, Salesforce reservation of rights, obligations concerning the Services, and terms for related Non-Salesforce Applications and Content apply equally to your use of this feature.

## Storage Events

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Real-Time Event Monitoring big objects aren't bound by big object data storage limits.

Here are the Real-Time Event Monitoring storage events. Some objects have storage enabled by default.
| Event Object | Standard or Big Object? | Use Case | Considerations |
| --- | --- | --- | --- |
| ApiEvent | Big Object | Store data about all API activity that occurred for particular objects during a fiscal year. | Object is available only in Real-Time Event Monitoring. Data is stored for up to 6 months. |
| ApiAnomalyEventStore | Standard Object | Store data about anomalies in how users make API calls. | Object is available only in Real-Time Event Monitoring. Data is stored for up to 6 months. |
| BulkApiResultEventStore | Big Object | Store large amount of data about Bulk API activity that occurred for particular objects during a fiscal year. | Object is available only in Real-Time Event Monitoring. Data is stored for up to 6 months. |
| CredentialStuffingEventStore | Standard Object | Store data about successful user logins during an identified credential stuffing attack. Credential stuffing refers to large-scale automated login requests using stolen user credentials. | Object is available only in Real-Time Event Monitoring. Data is stored for up to 6 months. |
| FileEventStore | Big Object | Stores file-related event data, such as when a user downloads a file. | Object is available only in Real-Time Event Monitoring. Data is stored for up to 6 months. |
| IdentityVerificationEvent | Big Object | Store data about user identity verification events in your org. | Object is available only in Real-Time Event Monitoring. Data is stored for up to 10 years. |
| IdentityProviderEventStore | Big Object | Store data about problematic and successful authentication requests in the Identity Provider Event Log. | Object is available only in Real-Time Event Monitoring. Data is stored for up to 6 months. |
| LightningUriEvent | Big Object | Store data about when entities are created, accessed, updated, or deleted in Lightning Experience. | Object is available only in Real-Time Event Monitoring. Data is stored for up to 6 months. |
| ListViewEvent | Big Object | Store data about when users interact with a list of records, such as contacts, accounts, or custom objects. | Object is available only in Real-Time Event Monitoring. Data is stored for up to 6 months. |
| LoginAsEvent | Big Object | Store data about when Salesforce admins log in as another user. | Object is available only in Real-Time Event Monitoring. Data is stored for up to 6 months. |
| LoginEvent | Big Object | Store data about how many users tried to log in from an unknown IP address or location and who was blocked from successfully logging in. | Object is available only in Real-Time Event Monitoring. Data is stored for up to 10 years. |
| LogoutEvent | Big Object | Store data about users who logged out successfully. | Object is available only in Real-Time Event Monitoring. Data is stored for up to 6 months. |
| PermissionSetEventStore | Big Object | Store data about permission assignment changes in permission sets and permission set groups. | Object is available only in Real-Time Event Monitoring. Data is stored for up to 6 months. |
| ReportAnomalyEventStore | Standard Object | Store data about anomalies in how users run or export reports. | Object is available only in Real-Time Event Monitoring. Data is stored for up to 6 months. |
| ReportEvent | Big Object | Store data about how many times a sensitive report was downloaded or viewed and by whom. | Object is available only in Real-Time Event Monitoring. Data is stored for up to 6 months. |
| SessionHijackingEventStore | Standard Object | Store data about when unauthorized users gain ownership of a Salesforce user’s session with a stolen session identifier. | Object is available only in Real-Time Event Monitoring. Data is stored for up to 6 months. |
| UriEvent | Big Object | Store data about when entities are created, accessed, updated, or deleted in Salesforce Classic. | Object is available only in Real-Time Event Monitoring. Data is stored for up to 6 months. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

In Developer Edition orgs, data for all events is stored for only one day.
