---
title: "Considerations for Using Real-Time Event Monitoring"
domain: securityImplGuide
topic: considerations-for-using-real-time-event-monitoring
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:45.023Z
estimatedTokens: 1144
keywords: [Considerations, Real-Time, Event, Monitoring, Keep, mind, Salesforce, Classic, versus, Lightning, Experience, Enhanced, Transaction, Security, Recommended]
---

# Considerations for Using Real-Time Event Monitoring

> Keep the following considerations in mind as you set up and use Real-Time Event
    Monitoring.

# Considerations for Using Real-Time Event Monitoring

Keep the following considerations in mind as you set up and use Real-Time Event Monitoring.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


## Salesforce Classic versus Lightning Experience

Some events apply only to Salesforce Classic or Lightning Experience.

The following objects support only Salesforce Classic:

-   URIEvent
-   URIEventStream

The following object supports only Lightning Experience:

-   LightningUriEvent
-   LightingUriEventStream

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Real-Time Event Monitoring objects sometimes contain sensitive data. Assign object permissions to Real-Time Events accordingly in profiles or permission sets.

## Enhanced Transaction Security

-   With Enhanced Transaction Security, you can create policies using either Condition Builder or Apex code.
-   Enhanced Transaction Security policies support both standard and custom objects.
-   The multi-factor authentication action isn’t available in the Salesforce mobile app, Lightning Experience, or via API for any events. Instead, the block action is used. For example, if a multi-factor authentication policy is triggered on a list view performed via the API, Salesforce blocks the API call.
-   A value of 0 for the RowsProcessed field in an object (such as ApiEvent) indicates that a query was performed and nothing was returned. This scenario is possible if a user doesn’t have the correct permissions for a data row or the query doesn’t return results. In this case, the QueriedEntities field is empty.
-   Let’s say you create both an Apex and a Condition Builder policy on the same event. You also specify the same action (Block or multi-factor authentication) for both policies. In this case, the Apex policy executes before the Condition Builder policy. The PolicyId field of the event reflects the last policy that was executed and triggered.
-   You can’t use the same Apex class on policies with the same event. When you create an Apex policy using Condition Builder, the list of available Apex classes can differ based on the policies you already created.
-   Let’s say you enable a transaction security policy for an event in which the action is None. As a result, when an event satisfies the policy conditions, the policy isn’t triggered. However, these event fields are still populated:
    -   EvaluationTime—The time it took for the policy to be evaluated.
    -   PolicyOutcome—Set to NoAction.
    -   PolicyId—Set to null.

## Recommended Usage of Event Objects

Real-Time Event Monitoring objects have three primary uses: streaming data, storing data, and enforcing policies on data. But these uses don’t apply to all objects. Here’s guidance on which objects are available for each use case. For details, see [Stream and Store Event Data](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_details.htm "Explore how you can use the objects in Real-Time Event Monitoring to stream and store event data.").

| Streaming | Storage | Policy |
| --- | --- | --- |
| ApiEventStream | ApiEvent | ApiEvent |
| LightningUriEventStream | LightningUriEvent | n/a |
| ListViewEventStream | ListViewEvent | ListViewEvent |
| LoginAsEventStream | LoginAsEvent | n/a |
| LoginEventStream | LoginEvent | LoginEvent |
| LogoutEventStream | LogoutEvent | n/a |
| ReportEventStream | ReportEvent | ReportEvent |
| UriEventStream | UriEvent | n/a |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Real-Time Event Monitoring Platform Events aren't a system of record for user activity. They're a source of truth but event notifications aren’t always available or guaranteed. For more reliable data storage, use [Real-Time Event Monitoring Storage Events](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_storage.htm "With Real-Time Event Monitoring, you can store and query event data in Salesforce objects. Many of the storage events are Salesforce big objects, which are ideal for storing large volumes of data for up to six months. A big object stores the data natively in Salesforce so you can access it for reporting and other uses. Some storage events, such as for Threat Detection, are standard Salesforce objects.").

## Related Topics

- Stream and Store Event Data (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_details.htm)
- Real-Time Event Monitoring Storage Events (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_storage.htm)
