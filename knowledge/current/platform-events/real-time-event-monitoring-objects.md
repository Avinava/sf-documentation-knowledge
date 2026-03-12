---
title: "Real-Time Event Monitoring Objects"
domain: platform-events
topic: real-time-event-monitoring-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.914Z
estimatedTokens: 666
keywords: [Real-Time, Event, Monitoring, Objects, Check, standard, platform, pairs, events, corresponding, store, data, Salesforce, Help]
---

# Real-Time Event Monitoring Objects

> Check out the standard platform event and object pairs for Real-Time Event Monitoring.
        For most platform events used in Real-Time Event Monitoring, corresponding objects store the
        event data. For more information, see Real-Time Event
                Monitoring in Salesforce Help.

# Real-Time Event Monitoring Objects

Check out the standard platform event and object pairs for Real-Time Event Monitoring. For most platform events used in Real-Time Event Monitoring, corresponding objects store the event data. For more information, see [Real-Time Event Monitoring](https://help.salesforce.com/s/articleView?id=xcloud.real_time_event_monitoring_overview.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

Real-Time Event Monitoring objects sometimes contain sensitive data. Assign object permissions to Real-Time Events accordingly in profiles or permission sets.

| Platform Event | Object for Event Storage | Can Be Used in a Transaction Security Policy? |
| --- | --- | --- |
| ApiAnomalyEvent | ApiAnomalyEventStore |  |
| ApiEventStream | ApiEvent |  |
| BulkApiResultEvent | BulkApiResultEventStore |  |
| ConcurLongRunApexErrEvent | Not Available |  |
| CredentialStuffingEvent | CredentialStuffingEventStore |  |
| FileEvent | FileEventStore |  |
| GuestUserAnomalyEvent | GuestUserAnomalyEventStore |  |
| Not Available | IdentityVerificationEvent |  |
| Not Available | IdentityProviderEventStore |  |
| LightningUriEventStream | LightningUriEvent |  |
| ListViewEventStream | ListViewEvent |  |
| LoginAnomalyEvent | LoginAnomalyEventStore |  |
| LoginAsEventStream | LoginAsEvent |  |
| LoginEventStream | LoginEvent |  |
| LogoutEventStream | LogoutEvent |  |
| MobileEmailEvent | Not Available |  |
| MobileEnforcedPolicyEvent | Not Available |  |
| MobileScreenshotEvent | Not Available |  |
| MobileTelephonyEvent | Not Available |  |
| PermissionSetEvent | PermissionSetEventStore |  |
| ReportAnomalyEvent | ReportAnomalyEventStore |  |
| ReportEventStream | ReportEvent |  |
| SessionHijackingEvent | SessionHijackingEventStore |  |
| UriEventStream | UriEvent |  |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

Real-Time Event monitoring objects that were introduced as part of the beta release in API version 46.0 follow a naming convention that is no longer used in later API versions. In particular:

-   The name format of a platform event object was ObjectNameEventStream.
-   The name format of the corresponding big object used for storage was ObjectNameEvent.

New event objects introduced after API version 46.0 use the following standard platform event naming convention.

-   The name format of a platform event object is ObjectNameEvent.
-   The name format of the corresponding object used for storage is ObjectNameEventStore.

## Related Topics

- ApiAnomalyEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_apianomalyevent.htm)
- ApiAnomalyEventStore (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_apianomalyeventstore.htm)
- ApiEventStream (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_apieventstream.htm)
- ApiEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_apievent.htm)
- BulkApiResultEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_bulkapiresultevent.htm)
- BulkApiResultEventStore (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_bulkapiresulteventstore.htm)
- ConcurLongRunApexErrEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_concurlongrunapexerrevent.htm)
- CredentialStuffingEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_credentialstuffingevent.htm)
- CredentialStuffingEventStore (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_credentialstuffingeventstore.htm)
- FileEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_fileevent.htm)
