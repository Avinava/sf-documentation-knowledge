---
title: "Lightning Page View Event Type"
domain: object-reference
topic: lightning-page-view-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.373Z
estimatedTokens: 2741
keywords: [Lightning, View, Event, events, represent, occurred, Experience, Salesforce, mobile, app, page's, load, time, EventLogFile, API]
---

# Lightning Page View Event Type

> Lightning Page View events represent information about the page on
			which the event occurred in Lightning Experience and the Salesforce mobile app, such as
			the page's load time. This event type is available in the EventLogFile object in
		API version 39.0 and later.

# Lightning Page View Event Type

Lightning Page View events represent information about the page on which the event occurred in Lightning Experience and the Salesforce mobile app, such as the page's load time. This event type is available in the EventLogFile object in API version 39.0 and later.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| APP_NAME | TypeStringDescriptionThe name of the application that the user accessed. |
| BROWSER_NAME | TypeStringDescriptionThe name of the browser that the user accessed.ExampleChrome, Safari |
| BROWSER_VERSION | TypeStringDescriptionThe version of the browser that the user accessed in major.minor version format. Some browsers don’t provide a minor version. |
| CLIENT_GEO | TypeStringDescriptionThe geolocation of the client in the form of <Country>/<State\|Province>.ExampleUnited States/California |
| CLIENT_ID | TypeStringDescriptionThe API client ID. |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as Salesforce.com IP.Example96.43.144.26 |
| CONNECTION_TYPE | TypeStringDescriptionThe type of connection.Possible ValuesCDMA1xCDMAEDGEEVDO0EVDOAEVDOBGPRSHRPDHSDPAHSUPALTEWIFI |
| DEVICE_ID | TypeStringDescriptionThe unique identifier used to identify a device when tracking events. DEVICE_ID is a generated value that’s created when the mobile app is initially run after installation. |
| DEVICE_MODEL | TypeStringDescriptionThe name of the device model.ExampleiPad, iPhone |
| DEVICE_PLATFORM | TypeStringDescriptionThe type of application experience in name:experience:form format.Possible Valuesname: APP_BUILDER, CUSTOM, S1, SFXexperience: BROWSER, HYBRIDform: DESKTOP, PHONE, TABLET |
| DEVICE_SESSION_ID | TypeIdDescriptionThe unique identifier of the user’s session based on page load time. When the user reloads a page, a new session is started.Example321a1ddfaf924803a075f1e69fc87bc06f53ccd0 |
| DURATION | TypeNumberDescriptionIf the page completes loading, then DURATION indicates the duration of time in milliseconds between PAGE_START_TIME and when the loading completes. In this case, DURATION corresponds to EFFECTIVE_PAGE_TIME.If the page doesn't complete loading, then DURATION indicates the duration of time in milliseconds between PAGE_START_TIME and when the user navigates to another page. |
| EFFECTIVE_PAGE_TIME | TypeDoubleDescriptionIndicates how many milliseconds it takes for the page to load before a user can interact with the page. Multiple factors can affect effective page time (EPT), such as network speed, hardware performance, or page complexity. |
| EFFECTIVE_PAGE_TIME_DEVIATION | TypeBooleanDescriptionWhen a deviation is detected, EFFECTIVE_PAGE_TIME_DEVIATION records true. The default value is false. |
| EFFECTIVE_PAGE_TIME_DEVIATION_ERROR_TYPE | TypeStringDescriptionIndicates the origin of an error. This field is populated when EFFECTIVE_PAGE_TIME_DEVIATION_REASON contains the PAGE_HAS_ERROR value.Possible ValuesCUSTOM—An error originating from the customer's system or network.SYSTEM—An error originating in Salesforce. |
| EFFECTIVE_PAGE_TIME_DEVIATION_REASON | TypeStringDescriptionThe reason for deviation in page loading time.Possible ValuesPageHasError—An undefined page loading error occurred.PageNotLoaded—If a customer navigates away from a page while loading processes are in progress, the page doesn't finish loading.PreviousPageNotLoaded—When navigating to a new page, and the previous page hasn't completed loading, the next page is considered to have a deviation. Incomplete loading processes on a previous page can affect how the next page loads.InteractionsBeforePageLoaded—A user interacts with a page element before the page is fully loaded.PageInBackgroundBeforeLoaded—A background loading process runs on a page. Background processes run when a user navigates away from a page to another browser tab. The browser de-prioritizes the page in the background until the user activates the page’s tab. Because a user can leave a page in the background for a long time, the page is expected to have a high Effective Page Time (EPT). |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always LightningPageView. |
| GRANDPARENT_UI_ELEMENT | TypeStringDescriptionThe grandparent scope of the page element where the event occurred. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.ExampleGeJCsym5eyvtEK2I |
| ORGANIZATION_ID | TypeStringDescriptionThe 15-character ID of the org.Example00D000000000123 |
| OS_NAME | TypeStringDescriptionThe operating system name, derived from USER_AGENT.ExampleAndroid, iOS, OSX, Windows |
| OS_VERSION | TypeStringDescriptionThe operating system version, derived from USER_AGENT. |
| PAGE_APP_NAME | TypeStringDescriptionThe internal name of the application that the user accessed from the App Launcher.ExampleLightningSales |
| PAGE_CONTEXT | TypeStringDescriptionThe name of the component hosting the main content of the page.Exampleclients:cardsContainer |
| PAGE_ENTITY_ID | TypeIdDescriptionThe ID of the record that the user accessed which triggered the event on the page.Example0013000000I3zJAAAZ |
| PAGE_ENTITY_TYPE | TypeStringDescriptionThe entity type of the event.ExampleTask, contacts |
| PAGE_FLEXI_PAGE_NAME_OR_ID | TypeStringDescriptionThe page name or identifier.Exampleruntime_sales_seller_home__SellerHome_L |
| PAGE_FLEXI_PAGE_TYPE | TypeStringDescriptionThe page type.ExampleHomePage |
| PAGE_START_TIME | TypeNumberDescriptionThe time when the page starts loading, measured in milliseconds.Example1471564788642 |
| PAGE_URL | TypeStringDescriptionRelative URL of the top-level Lightning Experience or Salesforce mobile app page that the user opened. The page can contain one or more Lightning components. Multiple record IDs can be associated with PAGE_URL.Example/sObject/0064100000JXITSAA5/view |
| PARENT_UI_ELEMENT | TypeStringDescriptionThe parent scope of the page element where the event occurred. |
| PREVPAGE_APP_NAME | TypeStringDescriptionThe internal name of the previous application that the user accessed from the App Launcher.ExampleLightningSales |
| PREVPAGE_CONTEXT | TypeStringDescriptionThe context of the previous page where the event occurred.Exampleclients:cardsContainer |
| PREVPAGE_ENTITY_ID | TypeIdDescriptionThe unique previous page entity identifier of the event. |
| PREVPAGE_ENTITY_TYPE | TypeStringDescriptionThe previous page entity type of the event.ExampleTask, contacts |
| PREVPAGE_URL | TypeStringDescriptionThe relative URL of the previous Lightning Experience or Salesforce mobile app page that the user opened.Example/sObject/006410000 |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.Example3nWgxWbDKWWDIk0FKfF5DV |
| SDK_APP_TYPE | TypeStringDescriptionThe mobile SDK application type.Possible ValuesHYBRIDHYBRIDLOCALHYBRIDREMOTENATIVEREACTNATIVE |
| SDK_APP_VERSION | TypeStringDescriptionThe mobile SDK application version number.Example5.0 |
| SDK_VERSION | TypeStringDescriptionThe mobile SDK version number.Example2.1.0 |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all events in Lightning Experience within a session. When the user logs out and logs in again, a new session is started.Examplecdd09305cb6babf34059e27f70e47f1b11dec868 |
| TARGET_UI_ELEMENT | TypeStringDescriptionThe target page element where the event occurred.Exampletabitem-link |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. The timezone is GMT. |
| UI_EVENT_ID | TypeStringDescriptionId of the Lightning event type.Possible Valuesltng:errorltng:interactionltng:pageViewltng:performance |
| UI_EVENT_SEQUENCE_NUM | TypeNumberDescriptionAn auto-incremented sequence number of the current event since the session started. |
| UI_EVENT_SOURCE | TypeStringDescriptionThis field is being deprecated and is mostly null, except in mobile app views where it indicates the page type of views where the context is “native.” |
| UI_EVENT_TIMESTAMP | TypeNumberDescriptionThe time at which this event occurred, measured in milliseconds.Example1479769912796 |
| USER_AGENT | TypeStringDescriptionThe type of client used to make the request (for example, the browser, application, or API) as a string. |
| USER_ID | TypeStringDescriptionThe 15-character ID of the user accessing Salesforce services through the UI or API.Example00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case-insensitive ID of the user who’s using Salesforce services through the UI or the API.Example00590000000I1SNIA0 |
| USER_TYPE | TypeStringDescriptionThe category of user license of the user accessing Salesforce services through the UI or API.Possible ValuesA: Automated Processb: High Volume PortalC: Customer Portal UserD: External WhoF: Self-ServiceG: GuestL: Package License ManagerN: Salesforce to Salesforcen: CSN OnlyO: Power Customo: CustomP: Partnerp: Customer Portal ManagerS: StandardX: Salesforce Administrator |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
