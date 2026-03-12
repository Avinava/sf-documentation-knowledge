---
title: "Lightning Logger Event Type"
domain: object-reference
topic: lightning-logger-event-type
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:09.348Z
estimatedTokens: 1714
keywords: [Lightning, Logger, Event, events, contain, observed, component, logs, EventLogFile, API, version, 58.0, later]
---

# Lightning Logger Event Type

> Lightning Logger events contain information from observed Lightning
         component logs. This event type is available in the EventLogFile object in API version 58.0
         and later.

# Lightning Logger Event Type

Lightning Logger events contain information from observed Lightning component logs. This event type is available in the EventLogFile object in API version 58.0 and later.

To enable Lightning Logger events, from Setup, in the Quick Find box, enter event, and then select **Event Monitoring Settings**. Turn on Lightning Logger Events.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The browser sends Lightning Logger event logs to the server in batches. Batches are sent when the user interacts with the page and when the page closes or refreshes. If the user experiences connectivity issues or if their login session expires due to browser inactivity, any pending Lightning Logger event logs on the browser are erased. There isn’t a way to retrieve these lost logs.

The limit for Lightning Logger events is 30,000 events per minute per organization. Burst capacity may support up to 45,000-50,000 events per minute, but this is not guaranteed. The MESSAGE field shows details about what's logged when the limit is hit.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| APP_NAME | TypeStringDescriptionThe name of the application the user accessed. |
| BROWSER_NAME | TypeStringDescriptionThe name of the browser that the user accessed.ExampleChrome, IE, Safari, Gecko |
| BROWSER_VERSION | TypeStringDescriptionThe user’s browser version in major.minor format. Some browsers don’t provide a minor version. |
| CLIENT_GEO | TypeStringDescriptionThe geolocation of the client in the form of <Country>/<State\|Province>.ExampleUnited States/California |
| CLIENT_ID | TypeStringDescriptionThe API client ID. |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP, such as a login from AppExchange, is shown as “Salesforce.com IP”.Example96.43.144.26 |
| CONNECTION_TYPE | TypeStringDescriptionThe type of connection.Possible ValuesCDMA1xCDMAEDGEEVDO0EVDOAEVDOBGPRSHRPDHSDPAHSUPALTEWIFI |
| DEVICE_MODEL | TypeStringDescriptionThe name of the device model.ExampleiPad, iPhone |
| DEVICE_PLATFORM | TypeStringDescriptionThe type of application experience in name:experience:form format.Possible ValuesNameAPP_BUILDERCUSTOMS1SFXExperienceBROWSERHYBRIDFormDESKTOPPHONETABLET |
| DEVICE_SESSION_ID | TypeIdDescriptionThe unique identifier of the user’s session based on page load time. When the user reloads a page, a new session is started.Example321a1ddfaf924803a075f1e69fc87bc06f53ccd0 |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always LightningLogger. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.ExampleGeJCsym5eyvtEK2I |
| MESSAGE | TypeStringDescriptionThe message passed to the lightning/logger log() method. The message can be a JSON object or a string. String length is limited to 4 KB (4096 characters).If you hit the logger limit, subsequent events are muted for a minute. During this time, the message field is replaced with this text: Rate limiting hit for this organization. Lightning Logger events resume when the limit resets in the next minute. |
| ORGANIZATION_ID | TypeStringDescriptionThe 15-character ID of the org.Example00D000000000123 |
| OS_NAME | TypeStringDescriptionThe operating system name, derived from the User Agent.ExampleAndroid, iOS, OSX, Windows |
| OS_VERSION | TypeStringDescriptionThe operating system version, derived from the User Agent. |
| PAGE_CONTEXT | TypeStringDescriptionThe name of the component hosting the main page content.Exampleclients:cardsContainer |
| PAGE_ENTITY_ID | TypeIdDescriptionThe entity ID (if any) of the record being displayed.Example0013000000I3zJAAAZ |
| PAGE_ENTITY_TYPE | TypeStringDescriptionThe entity type of the page being displayed.ExampleTask, contacts |
| PAGE_URL | TypeStringDescriptionRelative URL of the top-level Lightning Experience or Salesforce mobile app page that the user opened. The page can contain one or more Lightning components. Multiple record IDs can be associated with PAGE_URL.Example/sObject/0064100000JXITSAA5/view |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.Example3nWgxWbDKWWDIk0FKfF5DV |
| SDK_APP_TYPE | TypeStringDescriptionThe mobile SDK application type.Possible ValuesHYBRIDHYBRIDLOCALHYBRIDREMOTENATIVEREACTNATIVE |
| SDK_APP_VERSION | TypeStringDescriptionThe mobile SDK application version number.Example5.0 |
| SDK_VERSION | TypeStringDescriptionThe mobile SDK version number.Example2.1.0 |
| SEQUENCE | TypeNumberDescriptionAn auto-incremented sequence number of the current event since the session started. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. Use this value to identify all events in Lightning Experience within a session. When the user logs out and logs in again, a new session is started.Examplecdd09305cb6babf34059e27f70e47f1b11dec868 |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.Example20130715233322.670 |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).Example2015-07-27T11:32:59.555Z. The timezone is GMT. |
| UI_EVENT_RELATIVE_TIMESTAMP | TypeNumberDescriptionDifference in milliseconds between when the message was logged and when the browser tab was opened.Example29322.23 |
| UI_EVENT_TIMESTAMP | TypeNumberDescriptionThe time at which this event occurred, measured in milliseconds.Example1479769912796 |
| USER_ID | TypeStringDescriptionThe 15-character ID of the user accessing Salesforce services through the UI or API.Example00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case-insensitive ID of the user who’s using Salesforce services through the UI or the API.Example00590000000I1SNIA0 |
| USER_TYPE | TypeStringDescriptionThe category of user license of the user accessing Salesforce services through the UI or API.Possible ValuesA: Automated Processb: High Volume PortalC: Customer Portal UserD: External WhoF: Self-ServiceG: GuestL: Package License ManagerN: Salesforce to Salesforcen: CSN OnlyO: Power Customo: CustomP: Partnerp: Customer Portal ManagerS: StandardX: Salesforce Administrator |
