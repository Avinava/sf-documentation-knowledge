---
title: "UiAgentInteractionEventLog"
domain: object-reference
topic: uiagentinteractioneventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.344Z
estimatedTokens: 1649
keywords: [UiAgentInteractionEventLog, log, tracks, client, side, interactions, events, Agentforce, panel, limited, Salesforce, Lightning, Experience, Mobile, Conversation]
---

# UiAgentInteractionEventLog

> This log tracks client side interactions and events with the Agentforce
         panel. It is limited to Salesforce Lightning Experience, Salesforce Mobile, and
         Conversation Preview within Agentforce Builder. This object is available in API
      version 65.0 and later.

# UiAgentInteractionEventLog

This log tracks client side interactions and events with the Agentforce panel. It is limited to Salesforce Lightning Experience, Salesforce Mobile, and Conversation Preview within Agentforce Builder. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| AgentType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of agent. |
| AppName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe app this logline has executed. |
| BotIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the agent. |
| BotSessionIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReturned with every session (from bots runtime API). The session begins with co-pilot panel is opened and ends when the user logs out of Salesforce, closes the browser tab or exits the browser. For mobile, this id is present throughout the entire time the app is open, and only changes upon cold start or logout. |
| BrowserName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the browser. |
| BrowserVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionBrowser major.minor version. Some browseers may not provide a minor version. |
| ButtonLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionWhen the user interacts with a message by clicking a message-level button, this is the label of the button the user selects. |
| Channel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the channel. For example, mobile, LEX, or Playground. |
| ClientGeolocation | TypestringPropertiesFilter, Group, Nillable, SortDescriptionClient geographic location in format Country/State. |
| ClientIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAPI client ID. |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionClient IP address. |
| Components | TypetextareaPropertiesNillableDescriptionAn array of strings that contain the names of the components, including the namespace and the name of the component. This should include both input and output components. |
| ConnectionType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of connection. For example, WiFi. |
| DeviceModel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe device model. |
| DevicePlatform | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe application experience |
| DeviceSessionIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAuto-generated ID on the client-side that stays the same for the duration of the browser tab. |
| FeedbackIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe turn ID from Agents V1 API. |
| HasToxicityWarning | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionFlag to identify whether the message contains a toxicity warning.The default value is false. |
| IsAgentPanelExited | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionA boolean field that is true if the user clicks on a button to navigate away from an agent panel.The default value is false. |
| LightningType | TypetextareaPropertiesNillableDescriptionAn array of strings that contains the name of the ES type(s). |
| LightningTypeMessage | TypestringPropertiesFilter, Nillable, SortDescriptionThis is the ES type message associated with the co-pilot response (i.e. “Inform” or “Inquire”) |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe hash of the login id to allow tracking of all events from user login to logout. |
| MessageIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReturned with every message (from bots runtime API). |
| MobileSdkAppType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe mobile application type. |
| MobileSdkVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe SDK version. |
| ObjectType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the object for ES Type recordInfo. |
| OperatingSystemName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the operating system. |
| OperatingSystemVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe operating system version number. |
| PageContext | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the component hosting the main content of the page. |
| PageObjectIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionObject id, if any, of the record being displayed. |
| PageObjectType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionObject type of the page being displayed. |
| PageUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRaw url of the page log occurred on. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| SdkAppVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe SDK app version this logline has executed. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe hash of the session id to allow tracking of all events in a session. |
| TaskName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis will describe the nature of the event being logged. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp at which the log event was generated. |
| UiEventElapsedTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe elapsed time for the UI event. |
| UiEventTimestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionTime when the message was logged according to the client. |
| UiRootActivityIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID for the root activity, if any, when this message was logged. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user ID of the request. |
| UserType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of user. |
| VoiceOrText | TypestringPropertiesFilter, Group, Nillable, SortDescriptionWhether the input by the user was “voice” or “text”. |
