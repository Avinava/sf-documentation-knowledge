---
title: "Lightning Interaction Event Type"
domain: object-reference
topic: lightning-interaction-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.330Z
estimatedTokens: 2433
keywords: [Lightning, Interaction, Event, events, track, user, actions, Experience, Salesforce, mobile, app, clicking, tapping, scrolling, EventLogFile]
---

# Lightning Interaction Event Type

> Lightning Interaction events track user actions in Lightning
			Experience and the Salesforce mobile app, such as the user clicking, tapping, or
			scrolling on a page. This event type is available in the EventLogFile object in API
		version 39.0 and later.

# Lightning Interaction Event Type

Lightning Interaction events track user actions in Lightning Experience and the Salesforce mobile app, such as the user clicking, tapping, or scrolling on a page. This event type is available in the EventLogFile object in API version 39.0 and later.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=object_reference)

#### Warning

The Lightning Interaction Event type is a best effort logging of user interactions but is not intended to meet privacy and security audit requirements. Not all interactions or CRUD operations are tracked and data loss may occur.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| APP_NAME | TypeStringDescriptionThe name of the application that the user accessed. |
| BROWSER_NAME | TypeStringDescriptionThe name of the browser that the user accessed.ExampleChrome, Safari |
| BROWSER_VERSION | TypeStringDescriptionThe version of the browser that the user accessed in major.minor version format. Some browsers don’t provide a minor version. |
| CLIENT_GEO | TypeStringDescriptionThe geolocation of the client in the form of <Country>/<State\|Province>.ExampleUnited States/California |
|  |  |
| CLIENT_ID | TypeStringDescriptionThe API client ID. |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.Example96.43.144.26 |
| COMPONENT_NAME | TypeStringDescriptionThe internal name of the standard component that the user interacted with. The Salesforce developer assigned the name when the standard component was created.ExampleSaveEdit, Lead.CCPM_sendSMS, ChangeOwnerOne |
| CONNECTION_TYPE | TypeStringDescriptionThe type of connection.Possible ValuesCDMA1xCDMAEDGEEVDO0EVDOAEVDOBGPRSHRPDHSDPAHSUPALTEWIFI |
| DEVICE_ID | TypeStringDescriptionThe unique identifier used to identify a device when tracking events. DEVICE_ID is a generated value that’s created when the mobile app is initially run after installation. |
| DEVICE_MODEL | TypeStringDescriptionThe name of the device model.ExampleiPad, iPhone |
| DEVICE_PLATFORM | TypeStringDescriptionThe type of application experience in name:experience:form format.Possible Valuesname: APP_BUILDER, CUSTOM, S1, SFXexperience: BROWSER, HYBRIDform: DESKTOP, PHONE, TABLET |
| DEVICE_SESSION_ID | TypeIdDescriptionThe unique identifier of the user’s session based on page load time. When the user reloads a page, a new session is started.Example321a1ddfaf924803a075f1e69fc87bc06f53ccd0 |
| DURATION | TypeNumberDescriptionThe duration in milliseconds since the page start time. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always LightningInteraction. |
| GRANDPARENT_UI_ELEMENT | TypeStringDescriptionGrandparent scope of the page element where the event occurred. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.ExampleGeJCsym5eyvtEK2I |
| ORGANIZATION_ID | TypeStringDescriptionThe 15-character ID of the org.Example00D000000000123 |
| OS_NAME | TypeStringDescriptionThe operating system name, derived from USER_AGENT.ExampleAndroid, iOS, OSX, Windows |
| OS_VERSION | TypeStringDescriptionThe operating system version, derived from USER_AGENT. |
| PAGE_APP_NAME | TypeStringDescriptionThe internal name of the application that the user accessed from the App Launcher.ExampleLightningSales |
| PAGE_CONTEXT | TypeStringDescriptionContext of the page where the event occurred.Exampleclients:cardsContainerNoteA value of UNKNOWN means that the page hasn't finished loading, so the context can't be identified. |
| PAGE_ENTITY_ID | TypeIdDescriptionThe unique entity identifier of the event.Example0013000000I3zJAAAZ |
| PAGE_ENTITY_TYPE | TypeStringDescriptionThe entity type of the event.Exampletask, contactsNoteA value of UNKNOWN means that the page hasn't finished loading or the page isn't displaying a record, so the entity type can't be identified. |
| PAGE_START_TIME | TypeNumberDescriptionThe time when the page was initially loaded, measured in milliseconds.Example1471564788642 |
| PAGE_URL | TypeStringDescriptionRelative URL of the top-level Lightning Experience or Salesforce mobile app page that the user opened. The page can contain one or more Lightning components. Multiple record IDs can be associated with PAGE_URL.Example/sObject/0064100000JXITSAA5/viewNoteA value of UNKNOWN means that the page hasn't finished loading, so the URL can't be identified. |
| PARENT_UI_ELEMENT | TypeStringDescriptionParent scope of the page element where the event occurred. |
| RECORD_ID | TypeString arrayDescriptionThe IDs of one or more records that the user interacted with. For more information on the user interaction, see UI_EVENT_TYPE and UI_EVENT_SOURCE fields.Example["5004100000JaGGLAA3", "5004100000Dn79CAAR", "50041000007KeugAAC"] |
| RECORD_TYPE | TypeStringDescriptionThe type of record object that the user interacted with.ExampleAccount, Opportunity |
| RELATED_LIST | TypeStringDescriptionThe type of related list that the user clicked.ExampleOpportunity |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.Example3nWgxWbDKWWDIk0FKfF5DV |
| SDK_APP_TYPE | TypeStringDescriptionThe mobile SDK application type.Possible ValuesHYBRIDHYBRIDLOCALHYBRIDREMOTENATIVEREACTNATIVE |
| SDK_APP_VERSION | TypeStringDescriptionThe mobile SDK application version number.Example5.0 |
| SDK_VERSION | TypeStringDescriptionThe mobile SDK version number.Example2.1.0 |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all events in Lightning Experience within a session. When the user logs out and logs in again, a new session is started.Examplecdd09305cb6babf34059e27f70e47f1b11dec868 |
| TARGET_UI_ELEMENT | TypeStringDescriptionThe target page element where the event occurred.Exampletabitem-link |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |  |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).Example2015-07-27T11:32:59.555Z. The timezone is GMT. |
| UI_EVENT_ID | TypeStringDescriptionId of the Lightning event type.Possible Valuesltng:errorltng:interactionltng:pageViewltng:performance |
| UI_EVENT_SEQUENCE_NUM | TypeNumberDescriptionAn auto-incremented sequence number of the current event since the session started. |
| UI_EVENT_SOURCE | TypeStringDescriptionThe user action on the record or records in RECORD_ID. This field’s value indicates whether the user’s action was on a single record or multiple records. For example, read indicates that one record was read (such as on a record detail page); reads indicates that multiple records were read (such as in a list view).Examplesclickcreatedeletehoverreadupdate |
| UI_EVENT_TIMESTAMP | TypeNumberDescriptionThe time at which this event occurred, measured in milliseconds.Example1479769912796 |
| UI_EVENT_TYPE | TypeStringDescriptionThe type of interaction with the records in RECORD_ID.Examplecrud, system, user, userInteraction |
| USER_AGENT | TypeStringDescriptionThe numeric code for the type of client used to make the request (for example, the browser, application, or API) as a string. |
| USER_ID | TypeStringDescriptionThe 15-character ID of the user accessing Salesforce services through the UI or API.Example00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case-insensitive ID of the user who’s using Salesforce services through the UI or the API.Example00590000000I1SNIA0 |
| USER_TYPE | TypeStringDescriptionThe category of user license of the user accessing Salesforce services through the UI or API.Possible ValuesA: Automated Processb: High Volume PortalC: Customer Portal UserD: External WhoF: Self ServiceG: GuestL: Package License ManagerN: Salesforce to Salesforcen: CSN OnlyO: Power Customo: CustomP: Partnerp: Customer Portal ManagerS: StandardX: Salesforce Administrator |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
