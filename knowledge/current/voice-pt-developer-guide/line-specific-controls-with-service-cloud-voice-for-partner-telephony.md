---
title: "Line-Specific Controls with Service Cloud Voice for Partner Telephony"
domain: voice-pt-developer-guide
topic: line-specific-controls-with-service-cloud-voice-for-partner-telephony
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.919Z
estimatedTokens: 240
keywords: [Line-Specific, Service, Cloud, Voice, Partner, Telephony, now, support, enabling, disabling, Remove, Participant, control, conference, call]
---

# Line-Specific Controls with Service Cloud Voice for Partner Telephony

> We now support enabling and disabling the Remove Participant UI control for each
        participant during a conference call. For example, you can disable the Remove Participant UI
        control for the primary caller.

# Line-Specific Controls with Service Cloud Voice for Partner Telephony

We now support enabling and disabling the Remove Participant UI control for each participant during a conference call. For example, you can disable the Remove Participant UI control for the primary caller.

The Remove Participant button can be disabled by setting the removeParticipantVariant parameter of the Service Cloud Connector API CallInfo object.

Possible values are:

-   ALWAYS: Remove participant button is always enabled.
-   NEVER: Remove participant button is always disabled.
-   ALWAYS\_EXCEPT\_ON\_HOLD: Remove participant button is disabled when the participant is on hold.

#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")
