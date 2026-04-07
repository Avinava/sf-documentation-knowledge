---
title: "Retrieve the Tracking Information from a Send"
domain: mc-apis
topic: retrieve-the-tracking-information-from-a-send
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:23.545Z
estimatedTokens: 659
keywords: [Retrieve, Tracking, Send, scenario, how, email, send's, includes, Diagram, Objects, Referenced, Code, Sample, Links, Items]
---

# Retrieve the Tracking Information from a Send

> This scenario describes how to retrieve an email send's tracking information. This information includes:

# Retrieve the Tracking Information from a Send

This scenario describes how to retrieve an email send's tracking information. This information includes:

-   Duplicates
-   InvalidAddresses
-   HardBounces
-   SoftBounces
-   OtherBounces
-   ForwardedEmails
-   UniqueClicks
-   UniqueOpens
-   NumberSent
-   NumberDelivered
-   Unsubscribes
-   MissingAddresses
-   Subject
-   PreviewURL
-   Links
-   Events
-   SentDate

You can also use filters to pull out specific types of events (such as Opens and Bounces) and information (such as links and lists involved in a send) for tracking information.

These tracking statistics present vital information regarding the sends and help you determine how effective an email send was and what actions you need to take after the send takes place.

## Diagram

![Send Tracking](/docs/resources/img/en-us/noversion?doc_id=images%2Fsendtracking.jpg&folder=mc-apis)

## Method Used

-   [Retrieve](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve.htm "Retrieve")

## Objects Referenced

-   [Send](atlas.en-us.noversion.mc-apis.meta/mc-apis/send.htm "Send")
-   [SimpleFilterPart](atlas.en-us.noversion.mc-apis.meta/mc-apis/simplefilterpart.htm "SimpleFilterPart")
-   [RetrieveRequest](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieverequest.htm "RetrieveRequest")

## Code Sample Links

-   [Retrieve All Links for a Send](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_all_links_for_a_send.htm "Retrieving_All_Links_for_a_Send")
-   [Retrieve All Lists for a Send](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_all_lists_for_a_send.htm "Retrieving_All_Lists_for_a_Send")
-   [Retrieve a Tracking Summary of an Email Send Using JobID](atlas.en-us.noversion.mc-apis.meta/mc-apis/summary_of_send_using_jobid.htm "Summary_of_Send_Using_JobId")
-   [Retrieve Sent Event Details](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve_sentevent_details_for_job.htm "Retrieve_SentEvent_Details_for_Job")
-   [Retrieve Open Events Details](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_open_events_details.htm "Retrieving_Open_Events_Details")
-   [Unsubscribe and Log an UnsubEvent with a LogUnsubEvent Execute Call](atlas.en-us.noversion.mc-apis.meta/mc-apis/unsubscribing_and_logging_an_unsubevent_with_a_logunsubevent_execute_call.htm "Unsubscribe_and_Log_an_UnsubEvent_with_a_LogUnsubEvent_Execute_Call")
-   [Retrieve Bounce Events Details](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_bounce_event_details.htm "Retrieving_Bounce_Event_Details")

## Related Items

[Tracking](https://help.salesforce.com/articleView?id=mc_es_tracking_overview.htm&type=5)

## Related Topics

- Retrieve (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve.htm)
- Send (atlas.en-us.noversion.mc-apis.meta/mc-apis/send.htm)
- SimpleFilterPart (atlas.en-us.noversion.mc-apis.meta/mc-apis/simplefilterpart.htm)
- RetrieveRequest (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieverequest.htm)
- Retrieve All Links for a Send (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_all_links_for_a_send.htm)
- Retrieve All Lists for a Send (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_all_lists_for_a_send.htm)
- Retrieve a Tracking Summary of an Email Send Using JobID (atlas.en-us.noversion.mc-apis.meta/mc-apis/summary_of_send_using_jobid.htm)
- Retrieve Sent Event Details (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve_sentevent_details_for_job.htm)
- Retrieve Open Events Details (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_open_events_details.htm)
- Unsubscribe and Log an UnsubEvent with a LogUnsubEvent Execute Call (atlas.en-us.noversion.mc-apis.meta/mc-apis/unsubscribing_and_logging_an_unsubevent_with_a_logunsubevent_execute_call.htm)
