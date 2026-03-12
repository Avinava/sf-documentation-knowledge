---
title: "EventLogFile Supported Event Types"
domain: object-reference
topic: eventlogfile-supported-event-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:09.623Z
estimatedTokens: 6646
keywords: [EventLogFile, Event, EventType, supports, events, common, CPU_TIME, RUN_TIME, zero, depending, how, generated, feature, Sometimes, three]
---

# EventLogFile Supported Event Types

> The EventType field in the EventLogFile object
   supports these events. Some common fields, such as CPU_TIME and
    RUN_TIME, can have null or zero values depending on how the events are
   generated for a given feature. Sometimes, three quotation marks appear around event data
   containing special characters in the CSV file. The third quotation mark is necessary for tools
   and applications to parse the field data at the correct field value boundary.

# EventLogFile Supported Event Types

The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU\_TIME and RUN\_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.

We generate some text messages in quotes, as in "example message". To preserve the original value, we add two more quotes and the final value looks like """example message""" in the CSV file.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The Apex Unexpected Exception, API Total Usage, CORS Violation Record, CSP Violation, Hostname Redirects, Insecure External Assets, Login, and Logout events are available in supported Salesforce editions at no additional cost. To purchase the remaining event types, contact Salesforce.

-   **[Apex Callout Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apexcallout.htm)**
    Apex Callout events contain details about callouts (external requests) during Apex code execution.
-   **[Apex Execution Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apexexecution.htm)**
    Apex Execution events contain details about Apex classes that are used.
-   **[Apex Inline Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apexinline.htm)**
    This event type is reserved for future use. This object is available in API version 66.0 and later.
-   **[Apex REST API Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apexrestapi.htm)**
    Apex REST API events capture information about every Apex REST API request.
-   **[Apex SOAP Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apexsoap.htm)**
    Apex SOAP events contain details about custom SOAP web service calls.
-   **[Apex Trigger Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apextrigger.htm)**
    Apex Trigger events contain details about triggers that fire in an organization.
-   **[Apex Unexpected Exception Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apexunexpectedexception.htm)**
    The Apex Unexpected Exception event type captures information about unexpected exceptions in Apex code execution. This event type is available in the EventLogFile object in API version 45.0 and later. Unexpected exception information is not captured in the EventLogFile object with @IsTest and anonymous Apex.
-   **[API Total Usage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apitotalusage.htm)**
    API Total usage events contain details about Platform SOAP API, Platform REST API, and Bulk API requests.
-   **[Asynchronous Report Run Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_asyncreportrun.htm)**
    Asynchronous Report Run events are created for reporting requests that are scheduled. This category includes dashboard refreshes, asynchronous reports, schedule reports, and analytics snapshots.
-   **[Aura Request Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_lightning_component.htm)**
    Aura Request events contain details of requests to Apex methods from Aura and Lightning web components. For example, you can benchmark request time or identify the URI of an unsuccessful request.
-   **[Blocked Redirect Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_blockedredirect.htm)**
    Blocked redirect events capture information about blocked redirections from Salesforce to untrusted and malformed URLs. The Blocked Redirect event type is available in the EventLogFile object in API version 63.0 and later.
-   **[Bulk API Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_bulkapi.htm)**
    Bulk API events contain details about Bulk API requests.
-   **[Bulk API Request Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_bulkapi_request.htm)**
    The Bulk API request event captures when Bulk API requests are received to create a job, update a job, create a batch, update a batch, and when a job completes.
-   **[Bulk API 2.0 Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_bulkapi2.htm)**
    BulkApi2 events contain details about Bulk API 2.0 requests.
-   **[Change Set Operation Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_changesetoperation.htm)**
    Change Set Operation events contain information from change set migrations.
-   **[Composite API Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_composite_api.htm)**
    Composite API events contain details about composite API requests. One composite API event is generated for each composite API and composite graph API call. This event type is available in API version 64.0 and later.
-   **[Composite API Subrequest Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_composite_api_subrequest.htm)**
    Composite API subrequest events contain details about composite API subrequests. One composite API subrequest event is generated for each subrequest or collated set of subrequests. For example, if a composite API request contains five subrequests and four of the subrequests are collated, then two composite API subrequest events are generated. This example also applies to composite graph API. This event type is available in API version 64.0 and later.
-   **[Concurrent Long-Running Apex Limit Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_concurrentlongrunningapexlimit.htm)**
    Concurrent Long-Running Apex Limit events contain information about long-running concurrent Apex requests in your org that Salesforce terminated after reaching your org’s concurrency limit. Requests with an established Apex context that execute for 5 seconds are counted towards your org’s limit of concurrent long-running requests. (Asynchronous requests don’t count towards the limit.) When the long-running requests exceed the org default limit, all new Apex invocation requests are denied. This event type is available in the EventLogFile object in API version 45.0 and later.
-   **[Console Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_console.htm)**
    Console events contain information about the performance and use of Salesforce Consoles. The Console events are logged whenever a Console tab is opened with a sidebar component. Outside of that, when Console tabs are opened, a regular view record detail event is served just like in Salesforce Classic.
-   **[Content Distribution Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_contentdistribution.htm)**
    Content Distribution events contain information about content distributions and deliveries to users.
-   **[Content Document Link Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_contentdocument.htm)**
    Content Document Link events contain sharing information for content documents.
-   **[Content Transfer Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_contenttransfer.htm)**
    Content Transfer events contain information about content transfer events, such as downloads, uploads, and previews. This information includes events performed on files and attachments to records.
-   **[Continuation Callout Summary Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_continuationcalloutsummary.htm)**
    Continuation Callout Summary events contain information about all of the asynchronous callouts performed during a transaction, their response status codes, execution times, and URL endpoint destinations. This event type is available in the EventLogFile object in API version 43.0 and later.
-   **[CORS Violation Record Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_cors_violation.htm)**
    CORS Violation Record events capture information about Cross-Origin Resource Sharing (CORS) violations. Cross-origin requests to Lightning apps are blocked unless the request comes from a URL listed in your CORS allowlist.
-   **[CSP Violation Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_cspviolation.htm)**
    CSP violation events capture details about blocked resource requests from Lightning Experience pages based on your content security policy (CSP). The CSP Violation event type is available in the EventLogFile object in API version 63.0 and later.
-   **[Dashboard Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_dashboard.htm)**
    Dashboard events contain details about report requests from dashboards. These requests are triggered by dashboard refreshes, subscriptions, and filter changes.
-   **[Database Save Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_databasesaveevent.htm)**
    Database Save events track when records are created, updated, or deleted. This object is available in API version 63.0 and later.
-   **[Document Attachment Downloads Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_documentattach.htm)**
    Document Attachment Downloads events contain details of document and attachment downloads.
-   **[External Cross-Org Callout Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_externalcrossorgcallout.htm)**
    External Cross-Org Callout events represent external data callouts via the cross-org adapter for Salesforce Connect. This event type is available in the EventLogFile object in API version 40.0 and later.
-   **[External Custom Apex Callout Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_externalcustomapexcallout.htm)**
    External Custom Apex Callout events represent external data callouts via custom adapters for Salesforce Connect. This event type is available in the EventLogFile object in API version 40.0 and later.
-   **[External Data Source Callout Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_externaldatasourcecallout.htm)**
    External Data Source Callout events represent external data callouts via the Salesforce Connect adapters for Amazon DynamoDB and Amazon Athena. This event type is available in the EventLogFile object in API version 56.0 and later.
-   **[External OData Callout Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_externalodatacallout.htm)**
    External OData Callout events represent external data callouts via the OData 2.0 and OData 4.0 adapters for Salesforce Connect. This event type is available in the EventLogFile object in API version 40.0 and later.
-   **[Flow Execution Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_flowexecution.htm)**
    Flow Execution events contain information about flows that were executed including details such as total execution time, number of interviews, and number of errors.
-   **[Group Membership Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_groupmembership.htm)**
    Group Membership events capture details about changes to public group and queue membership, such as when members are added to or removed from the public group or queue.
-   **[Hostname Redirects Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_hostnameredirects.htm)**
    Hostname Redirect events contain details about blocked and successful redirections for your previous My Domain hostnames. The Hostname Redirects event type is available in the EventLogFile object in API version 56.0 and later.
-   **[Insecure External Assets Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_insecureexternalassets.htm)**
    Insecure External Assets events contain information about external assets. External assets include images or videos accessed by users over an insecure HTTP protocol. The event lists all your Salesforce pages that contain assets hosted insecurely on third-party sites that users loaded with a Chrome, Firefox, Microsoft Edge, or Safari browser. The INSECURE\_URI field contains the URI being used to load the asset insecurely. The Insecure External Assets event type is available in the EventLogFile object in API version 42.0 and later.
-   **[Insufficient Access Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_insufficientaccess.htm)**
    Insufficient Access events contain details about errors relating to insufficient account, case, contact, and opportunity record access, so that you can troubleshoot and resolve access issues for your users.
-   **[Invocable Action Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_invocableaction.htm)**
    Invocable Action events capture the calls to Salesforce Invocable Actions. This is particularly useful to monitor actions invoked during Agentforce flows. This event type is available in API versions 64.0 and later.
-   **[Knowledge Article View Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_knowledgearticleview.htm)**
    Knowledge Article View events contain user activity with your knowledge base.
-   **[Lightning Error Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_lightningerror.htm)**
    Lightning Error events represent errors that occurred during user interactions with Lightning Experience and the Salesforce mobile app. This event type is available in the EventLogFile object in API version 39.0 and later.
-   **[Lightning Interaction Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_lightninginteraction.htm)**
    Lightning Interaction events track user actions in Lightning Experience and the Salesforce mobile app, such as the user clicking, tapping, or scrolling on a page. This event type is available in the EventLogFile object in API version 39.0 and later.
-   **[Lightning Logger Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_lightninglogger.htm)**
    Lightning Logger events contain information from observed Lightning component logs. This event type is available in the EventLogFile object in API version 58.0 and later.
-   **[Lightning Page View Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_lightningpageview.htm)**
    Lightning Page View events represent information about the page on which the event occurred in Lightning Experience and the Salesforce mobile app, such as the page's load time. This event type is available in the EventLogFile object in API version 39.0 and later.
-   **[Lightning Performance Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_lightningperformance.htm)**
    Lightning Performance events track trends in Lightning Experience and Salesforce mobile app performance. This event type is available in the EventLogFile object in API version 39.0 and later.
-   **[Login Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_login.htm)**
    Login events contain details about your org’s user login history.
-   **[Login As Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_loginas.htm)**
    Login As events contain details about what a Salesforce admin did while logged in as another user.
-   **[Logout Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_logout.htm)**
    Contains details of user sessions ending or being revoked.
-   **[Metadata API Operation Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_metadataapi.htm)**
    Metadata API Operation events contain details of Metadata API retrieval and deployment requests.
-   **[Multiblock Report Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_multiblock.htm)**
    Multiblock Report events contain details about Joined Report reports.
-   **[Named Credential Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_namedcredential.htm)**
    The Named Credential event type captures information about Apex callouts that use named credentials as their endpoints. Use this event type to audit the installed managed packages that use named credentials. If you don’t recognize the package namespace in the named credential event log file, then you can investigate whether a security breach has occurred. This event type is available in the EventLogFile object in API version 53.0 and later.
-   **[One Commerce Usage Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_onecommerceusage.htm)**
    One Commerce Usage events capture information about your Commerce instance. This event type is available in the EventLogFile object in API version 51.0 and later.
-   **[Package Install Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_packageinstall.htm)**
    Package Install events contain details about package installation in the organization.
-   **[Permission Update Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_permissionupdate.htm)**
    Permission update events represent changes to object, field, and user permissions and setup entity access that occur in profiles and permission sets. The event type also tracks if you clone profiles or change whether session activation is required in permission sets or permission set groups.
-   **[Platform Encryption Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_platformencryption.htm)**
    Platform Encryption event contains information about tenant secret and derived encryption key usage. This event type is available in API versions 41.0 and later.
-   **[Pricing Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_pricing.htm)**
    Pricing events contain information about pricing procedures that were executed, including details such as pricing procedures used, the pricing APIs, and pricing details and status.
-   **[Queued Execution Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_queuedexec.htm)**
    Queued Execution events contain details about queued executions—for example, batch Apex.
-   **[Report Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_report.htm)**
    Report events contain information about what happened when a user ran a report. This event type includes all activity that's in the Report Export event type, plus more. For example, it has user activity for reports exported as both Formatted Report and Details Only output.
-   **[Report Export Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_reportexport.htm)**
    Report Export events contain details about reports that a user exported. For example, this event type captures when a user exports a report as Details Only output. But it doesn’t capture reports that users export as Formatted Report or XLSX Detail output. For that data, see the Report event type.
-   **[REST API Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_restapi.htm)**
    REST API events contain details about REST-specific requests.
-   **[Sandbox Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_sandbox.htm)**
    Sandbox events contain details about sandbox copies.
-   **[Search Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_search.htm)**
    Search events contain details about the user’s search query. All searches within the app, including Experience Cloud sites, are included. However, unauthenticated users won’t have a unique Salesforce user ID.
-   **[Search Click Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_searchclick.htm)**
    Search Click events contain details about the user’s interaction with the search results in the search results page. Interactions with search results in the instant result dialog are not recorded by this event. All searches within the app, including Experience Cloud sites, are included. However, unauthenticated users won’t have a unique Salesforce user ID.
-   **[Sites Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_sites.htm)**
    Sites events contain details of Site.com requests. Requests can originate from the browser (UI).
-   **[SOAP API Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_api.htm)**
    SOAP API events contain details about your org's SOAP API request activity.
-   **[Time-Based Workflow Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_timebasedworkflow.htm)**
    Time-Based Workflow events contain details about queue activity monitoring.
-   **[Transaction Security Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_transaction.htm)**
    Transaction Security events contain details about policy execution. This event type is supported in API version 55.0 and later.
-   **[UI Telemetry Navigation Timing Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_uitelemetrynavigationtiming.htm)**
    UI Telemetry Navigation Timing events capture network performance metrics related to page navigation. The event extends from the UI Telemetry Resource Timing Event and includes requests initiated with either the [Fetch API](https://fetch.spec.whatwg.org/) or the [XMLHttpRequest API](https://xhr.spec.whatwg.org/). This object is available in API version 61.0 and later.
-   **[UI Telemetry Resource Timing Event](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_uitelemetryresourcetiming.htm)**
    UI Telemetry Resource Timing events capture network performance metrics related to loading an application’s resources. The event includes requests initiated with either the [Fetch API](https://fetch.spec.whatwg.org/) or the [XMLHttpRequest API](https://xhr.spec.whatwg.org/). This object is available in API version 61.0 and later.
-   **[Unique Query Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_unique_query_event_elf.htm)**
    Unique Query events capture specific search queries (SOQL), filter IDs, and report IDs that are processed, along with the underlying database queries (SQL). This event type is available in API versions 64.0 and later.
-   **[URI Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_uri.htm)**
    URI events contain details about user interaction with the web browser UI.
-   **[Visualforce Request Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_visualforce.htm)**
    Visualforce Request events contain details of Visualforce requests. Requests can originate from the browser (UI).
-   **[Wave Change Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_wavechange.htm)**
    Wave Change events represent route or page changes made in the CRM Analytics user interface. A Wave Change event type is captured every time the user opens a new CRM Analytics asset or tab, switches between tabs, or changes dashboard pages. Wave Change events are logged when opening new tabs and switching back to previously opened tabs.
-   **[Wave Download Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_wavedownload.htm)**
    Wave Download events represent downloads made from lens explorations and dashboard widgets in the CRM Analytics user interface. A Wave Download event type is captured when a user downloads images ( .png ), Microsoft® Excel® data ( .xls ), or comma-separated values ( .csv ) files.
-   **[Wave Interaction Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_waveinteraction.htm)**
    Wave Interaction events represent route or page changes made in the CRM Analytics user interface. A Wave Interaction event type is captured when a tab is closed. It also collates the interaction statistics over the life of the tab, including total open time, read time, and so on. These statistics are aggregated as you go to other tabs and return, and logged only once when the tab is closed.
-   **[Wave Performance Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_waveperformance.htm)**
    Wave Performance events help you track trends in your Analytics performance.

#### See Also

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- Apex Callout Event Type (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apexcallout.htm)
- Apex Execution Event Type (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apexexecution.htm)
- Apex Inline Event Type (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apexinline.htm)
- Apex REST API Event Type (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apexrestapi.htm)
- Apex SOAP Event Type (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apexsoap.htm)
- Apex Trigger Event Type (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apextrigger.htm)
- Apex Unexpected Exception Event Type (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apexunexpectedexception.htm)
- API Total Usage (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apitotalusage.htm)
- Asynchronous Report Run Event Type (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_asyncreportrun.htm)
- Aura Request Event Type (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_lightning_component.htm)
