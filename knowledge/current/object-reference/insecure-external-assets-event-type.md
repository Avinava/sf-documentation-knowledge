---
title: "Insecure External Assets Event Type"
domain: object-reference
topic: insecure-external-assets-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.233Z
estimatedTokens: 1901
keywords: [Insecure, External, Assets, Event, events, contain, include, images, videos, accessed, users, over, HTTP, protocol, Salesforce]
---

# Insecure External Assets Event Type

> Insecure External Assets events contain information about external
         assets. External assets include images or videos accessed by users over an insecure HTTP
         protocol. The event lists all your Salesforce pages that contain assets hosted insecurely
         on third-party sites that users loaded with a Chrome, Firefox, Microsoft Edge, or Safari
         browser. The INSECURE_URI field contains the URI being used to load
         the asset insecurely. The Insecure External Assets event type is available in the
      EventLogFile object in API version 42.0 and later.

# Insecure External Assets Event Type

Insecure External Assets events contain information about external assets. External assets include images or videos accessed by users over an insecure HTTP protocol. The event lists all your Salesforce pages that contain assets hosted insecurely on third-party sites that users loaded with a Chrome, Firefox, Microsoft Edge, or Safari browser. The INSECURE\_URI field contains the URI being used to load the asset insecurely. The Insecure External Assets event type is available in the EventLogFile object in API version 42.0 and later.

Assets over HTTP can be manipulated through man-in-the-middle and other types of attacks. These attacks can trick users into sending their Salesforce credentials to malicious sites. Always use HTTPS in your custom code and templates for any asset you’re loading from external sites.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Because HTTPS connections are required to load external assets, Insecure External Assets events no longer apply. In Spring ’25 and later, this event type captures no data.

To view blocked redirections and content security policy (CSP) violations for your org, use the [BrowserPolicyViolation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_browserpolicyviolation.htm "Represents a violation that occurred within the last seven days related to the Trusted URLs and Trusted URLs for External Redirects allowlists. These violations include blocked resource requests based on your content security policy (CSP) and blocked redirections. This object is available in API version 61.0 and later.") object.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or the [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| ASSET_TYPE | TypeStringDescriptionType of insecure asset.Possible ValuesBase URIConnectFontFrame Ancestor: External page that embeds the Salesforce page in an iframeFrameImageMediaObjectOtherPlugin TypesScriptStyle |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.For example: 96.43.144.26. |
| CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| DISPOSITION | TypeStringDescriptionIf the insecure external asset is related to your content security policy (CSP), the HTTP header that identified the insecure asset.Available in API version 61.0 and later.Possible Valuesenforce—The Content-Security-Policy header identified the insecure external asset.report—The Content-Security-Policy-Report-Only header identified the insecure external asset. |
| DOCUMENT_URI | TypeStringDescriptionURL of the page that contains the insecure asset, excluding the query parameter.Examplehttps://company.my.salesforce.com/00XXXXXXXXX |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always InsecureExternalAssets. |
| INSECURE_URI | TypeStringDescriptionInsecure external asset URL being used to load an asset insecurely. For example, loading Javascript libraries using http://ajax.googleapis.com/  in your custom code logs an Insecure External Asset Event with the INSECURE_URI  field set to this URL. Find this reference in your code and update it to use https://ajax.googleapis.com/  instead.Examplehttp://pbs.twimg.com/profile_images/5699091412070816/Z4Stwts_normal.jpeg |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.For example: GeJCsym5eyvtEK2I. |
| NETWORK_ID | TypeStringDescriptionThe ID of the Experience Cloud site related to the request, if applicable.Available in API version 61.0 and later. |
| ORGANIZATION_ID | TypeStringDescriptionThe 15-character ID of the org.Example00D000000000123 |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RUN_TIME | TypeNumberDescriptionThe amount of time that the request took in milliseconds. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.For example: d7DEq/ANa7nNZZVD. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| TYPE | TypeStringDescriptionType of Salesforce page.Possible ValuesAppserver—Page without My Domain subdomain (for example, https://na44.salesforce.com)Communities—Customer Experience Cloud siteEmail—Email previewLogin—Login page (for example, https://login.salesforce.com)Mydomain—Page on My Domain subdomain (for example, https://mycompany.my.salesforce.com)Sites—Customer siteStatic—Static content (for example, https://sfdcstatic.com)Unknown—other type of page |
| UNIQUE_ID | TypeStringDescriptionThe 32-character ID of the event log file in which the insecure external asset event data is found.Example44e128a5-ac7a-4c9a-be4c-224b6bf81b20 |
| URI | TypeStringDescriptionThe URI of the page that’s receiving the request.For example: /home/home.jsp. |
| URI_ID_DERIVED | TypeIDDescriptionThe 18-character case insensitive ID of the URI of the page that’s receiving the request. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the user who’s using Salesforce services through the UI or the API.For example: 00590000000I1SNIA0. |

## Usage

UNIQUE\_ID is used by Salesforce Customer Support to troubleshoot any issues that occur.

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- BrowserPolicyViolation (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_browserpolicyviolation.htm)
- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
