---
title: "Hostname Redirects Event Type"
domain: object-reference
topic: hostname-redirects-event-type
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:09.220Z
estimatedTokens: 3738
keywords: [Hostname, Redirects, Event, Redirect, events, contain, blocked, successful, redirections, previous, Domain, hostnames, EventLogFile, API, version]
---

# Hostname Redirects Event Type

> Hostname Redirect events contain details about blocked and successful redirections for
  your previous My Domain hostnames. The Hostname Redirects event type is available in the
  EventLogFile object in API version 56.0 and later.

# Hostname Redirects Event Type

Hostname Redirect events contain details about blocked and successful redirections for your previous My Domain hostnames. The Hostname Redirects event type is available in the EventLogFile object in API version 56.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The HostnameRedirects event type is disabled by default. To enable this event type, use the logRedirections field on the MyDomainSettings Metadata API type or enable the **Log Redirections** setting in the Routing section of the My Domain Setup page.

This event is free for all customers with a 24-hour data retention period. The hostname redirections event is available in the API but not in the Event Monitoring Analytics app. You can also download the latest hostname redirections event log file through a button on the My Domain page.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or the [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always HostnameRedirects. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.Example20220715233322.670 |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.Example0000000062_0000x8Lz- |
| ORGANIZATION_ID | TypeIDDescriptionThe 15-character ID of the org.Example00D000000000345 |
| USER_ID | TypeIDDescriptionThis field is unused in the HostnameRedirects event type. The value is always null. |
| RUN_TIME | TypeNumberDescriptionThis field is unused in the HostnameRedirects event type. The value is always 0. |
| CPU_TIME | TypeNumberDescriptionThis field is unused in the HostnameRedirects event type. The value is always null. |
| URI | TypeStringDescriptionThis field is unused in the HostnameRedirects event type. The value is always null. |
| SESSION_KEY | TypeStringDescriptionThis field is unused in the HostnameRedirects event type. The value is always null. |
| LOGIN_KEY | TypeStringDescriptionThis field is unused in the HostnameRedirects event type. The value is always null. |
| MESSAGE | TypeStringDescriptionThis field is unused in the HostnameRedirects event type. The value is always null. |
| DOMAIN | TypeUrlPropertiesFilter, SortDescriptionThis field is unused in the HostnameRedirects event type. The value is always null. |
| SOURCE_HOSTNAME | TypeStringDescriptionThe hostname of the URL from which the redirection originated.ExampleIf https://oldMyDomainName.my.salesforce.com is redirected to https://newMyDomainName.my.salesforce.com, the value of this field is oldMyDomainName.my.salesforce.com |
| TARGET_HOSTNAME | TypeStringDescriptionThe hostname of the URL to which the user or API was redirected.ExampleIf https://oldMyDomainName.my.salesforce.com is redirected to https://newMyDomainName.my.salesforce.com, the value of this field is newMyDomainName.my.salesforce.com |
| PATH | TypeStringDescriptionThe path of the originating URL request, up to the first question mark (?). The path is also used in the redirection target URL. However, this field doesn’t include the query string, if present.ExampleIf the user is redirected from https://MyOldCompany.my.site.com/shop?q=sneakers to https://MyNewCompany.my.site.com/shop?q=sneakers, the value of this field is /shop. |
| REDIRECT_REASON | TypeStringDescriptionThe reason for the hostname redirect event.Possible ValuesRedirected due to a hostname mismatch.—The referring hostname was redirected to the current My Domain equivalent.Redirection suppressed to prevent Lightning Out integration failure.—The *.force.com site URL can’t be redirected for use with Lightning Out. To prevent issues, the original URL was processed as-is. To avoid issues after *.force.com site hostname redirections are stopped, update hard-coded references to the hostname in your Lightning Out integrations. For a Lightning Out code example that uses a site hostname, see Share Lightning Out Apps with Unauthenticated Users in the Salesforce Lightning Component Library.Redirection was blocked because redirections for this hostname are disabled.—Only your last set of My Domain login hostnames is redirected. Those redirections are blocked when the My Domain Routing option Redirect previous My Domain URLs to your current My Domain is deselected or because you removed your previous My Domain. That option applies to legacy (non-enhanced) hostnames in production orgs until Spring ’25. In non-production orgs, that option has no impact on redirections for legacy hostnames in Winter ’25 and later. Non-production orgs include sandboxes, Developer Edition orgs, demo orgs, patch orgs, scratch orgs, and Trailhead Playgrounds. For informationIf the SOURCE_HOSTNAME is a legacy *.force.com site hostname, the redirection was blocked because the Redirect previousSiteHostnames URLs to your current My Domain site URLs Routing option was deselected on the My Domain Setup page. That option is available in production orgs until Spring ’25. In non-production orgs, that option was removed in Winter ’25. Non-production orgs include sandboxes, Developer Edition orgs, demo orgs, patch orgs, scratch orgs, and Trailhead Playgrounds.Redirection was blocked because redirections for the legacy SOURCE_HOSTNAME are no longer supported.—If your org was created before June 2022, Salesforce served the org on a different set of hostnames until enhanced domains were deployed. The SOURCE_HOSTNAME is one of those hostnames. For non-production orgs, redirections for those hostnames stopped in Winter ’25. |
| IS_BLOCKED_REDIRECTION | TypeBooleanDescriptionIndicates whether the redirection was blocked.Possible Values1—The redirection was blocked and returned an HTTP 404 response.0—The redirection proceeded and returned an HTTP 301 or 307 response. |
| REFERRER | TypeStringDescriptionThe absolute or partial address from which the request to the SOURCE_HOSTNAME came. The Referrer-Policy HTTP Header of the request determines how much of the URL is shared. For example, if a user clicked a link to the SOURCE_HOSTNAME from a web page, and that web page is on a different domain:if the Referrer-Policy HTTP Header is no-referrer-when-downgrade, REFERRER includes the origin, path, and query-string parameters up to the first hash (#), if present.if the Referrer-Policy HTTP Header is strict-origin-when-cross-origin, REFERRER includes the origin only.if the Referrer-Policy HTTP Header is same-origin, REFERRER is null.Exampleshttps://www.example.comhttps://www.example.com/page/page/index.htmhttps://www.example.com/page/index.htm?q="Salesforce" |
| ORIGIN | TypeStringDescriptionThe origin (protocol, hostname, and port) that caused the request to the SOURCE_HOSTNAME. For example, if a website on a different domain makes an XMLHttpRequest (XHR) to SOURCE_HOSTNAME, ORIGIN contains the base URL of that website.The port isn’t included in the origin information with all requests. ORIGIN can be null in a number of situations, including but not limited to cross-origin requests and origins with a restrictive Referrer-Policy header. For example, if the request to the SOURCE_HOSTNAME is sent from a site external to Salesforce with a RequestMode of no-cors, ORIGIN is null.Exampleshttps://www.example.comhttps://www.example.com:443 |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ). The time zone is always GMT.Example2022-07-27T11:32:59.555Z. |
| USER_ID_DERIVED | TypeStringDescriptionThis field is unused in the HostnameRedirects event type. The value is always null. |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that made this request.Possible Values/Example111.43.144.26 |
| URI_ID_DERIVED | TypeStringDescriptionThis field is unused in the HostnameRedirects event type. The value is always null. |

## Usage

Use the information in the Hostname Redirects event log to determine the hostnames to update in your org after you deploy a change to your My Domain name. You can also use the log to develop communications to your customers and users about the changed hostnames. For example, you can encourage users to use the new hostnames and update their bookmarks. For more information on the steps to take after a My Domain change, see [Update Your Org and Test My Domain Changes](https://help.salesforce.com/s/articleView?id=products.domain_name_deploy_update_test.htm&type=5&language=en_US) in Salesforce Help.

To access the log, use the HostnameRedirects event type from the EventLogFile object. Alternatively, you can download the current hostname redirections event log by clicking **Download Redirections Log** on the My Domain Setup page.

Each event, or each row in the redirection log, represents a redirection for a specific requested URL. Subsequent requests to the same URL within the hour following that request, however, aren’t logged. If your last My Domain change included enhanced domains deployment, the log includes redirections for the old hostnames listed on [My Domain URL Format Changes with Enhanced Domains Deployment](https://help.salesforce.com/s/articleView?id=products.domain_name_url_format_changes_enable_enhanced.htm&type=5&language=en_US) in Salesforce Help.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

To keep the size of the log file manageable, the log includes one entry for each redirected hostname and path combination within an hour. As a result, the log includes all redirected hostname and path combinations, but only includes the first redirection within each hour.

For example, if https://MyCompany.my.site.com/shop is redirected at 02:01 PM and https://MyCompany.my.site.com/shop?q=sneakers is redirected for another user at 02:02 PM, only the redirection that occurred at 02:01 PM is captured for MyCompany.my.site.com/shop for that hour. But if https://MyCompany.my.site.com/help is redirected at 2:05 PM, that redirection is captured on a new line because the MyCompany.my.site.com/help hostname and path combination differs from MyCompany.my.site.com/shop.

Similarly, if the redirection of https://MyCompany.my.site.com/contactUs is blocked at 07:02 AM and https://MyCompany.my.site.com/contactUs is redirected at 07:11 AM, only the blocked redirection for MyCompany.my.site.com/contactUs is captured in the log for that hour.

Only one hostname redirection log file is available at a time. When the daily incremental event log file is generated during the daily background process, the new file replaces the existing file. When you download the redirections log from the My Domain Setup page, you get the latest daily log file in CSV format.

If the log file doesn’t exist, either the log generation process hasn’t run yet or there’s no redirection data to report for that 24-hour window. The log file is generated only when at least one redirection occurred for the day.

To collect hostname redirection logs for multiple days, schedule a daily query of the Hostname Redirects event type via REST API. For example, you can configure a cron job in Unix or a scheduled task in Windows to run the query.

## Salesforce CLI Example

To use Salesforce CLI to query the Hostname redirects log, use the sf data query command to query the HostnameRedirects EventType.

First, download and install [Salesforce CLI](https://developer.salesforce.com/tools/salesforcecli).

Example

This Unix example authorizes Salesforce CLI to access your org and sets orgAlias to your org login URL. This method prompts you to log in to your org via a browser to grant Salesforce CLI access. To query event log files, log in as a user with the View Event Log Files and API Enabled permissions.

```

```

Example response

After you authenticate with a user via a browser, this response confirms that Salesforce CLI is authorized for use in your org.

```

```

Then export the HostnameRedirects log to a CSV file.

Example

This example exports the HostnameRedirects EventType to a CSV file in your org, where orgAlias is your org's alias within Salesforce CLI.

```

```

Example CSV formatted response

```

```

For more information on Salesforce CLI, see the Salesforce CLI Setup Guide, Salesforce CLI Command Reference, and the Salesforce DX Developer Guide.

## REST API Example

To use REST API to query the Hostname Redirects event log, use the [Query](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_query.htm#topic-title) resource to retrieve field values from a record. Specify the fields you want to retrieve in the fields parameter and use the GET method of the resource.

Example

This example retrieves the HostnameRedirects event log based on Field and EventType via a GET request. Replace token with your access token. In a production org, replace MyDomainName with your My Domain name. In a sandbox, replace MyDomainName.my.salesforce.com with your org’s My Domain login hostname.

```

```

Example raw response

```

```

The log file can be downloaded by using curl with the same Authorization header while setting the URL path to the LogFile value from the output.

For more information on accessing event log files via REST API, see [Using Event Monitoring](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm) in the REST API Developer Guide.

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Code Examples

```
sf org web login --alias orgAlias --instance-url https://MyDomainName.my.salesforce.com
```

```
Successfully authorized admin@mycompany.com with org ID 00D00000000000aIW
```

```
ORGALIAS=orgAlias; QUERYRESULT=$(sf data query --target-org "$ORGALIAS" --query "SELECT LogDate, LogFile FROM EventLogFile WHERE EventType='HostnameRedirects' ORDER BY CreatedDate DESC LIMIT 1" --json); QUERYSTATUS=$(echo "$QUERYRESULT"|grep "status"|cut -d : -f 2|cut -d , -f 1); if [[ "$QUERYSTATUS" -eq 0 ]]; then LOGDATE=$(echo "$QUERYRESULT"|grep LogDate|cut -d " -f 4|cut -d T -f 1); if [[ "$LOGDATE" == "" ]]; then echo "No daily event log file exists for hostname redirects."; else DOWNLOADPATH=$(echo "$QUERYRESULT"|grep "url"|cut -d " -f 4); ORGDISPLAY=$(sf org display --target-org "$ORGALIAS" --json 2> /dev/null); SESSION=$(echo "$ORGDISPLAY"|grep accessToken|cut -d " -f 4); ORGURL=$(echo "$ORGDISPLAY"|grep instanceUrl|cut -d " -f 4); curl -H "Authorization: Bearer ${SESSION}" --silent ${ORGURL}${DOWNLOADPATH}/LogFile > HostnameRedirectEvent-${LOGDATE}.csv; fi; else echo "$QUERYRESULT"; fi
```

```
"EVENT_TYPE","TIMESTAMP","REQUEST_ID","ORGANIZATION_ID","USER_ID","RUN_TIME",
"CPU_TIME","URI","SESSION_KEY","LOGIN_KEY","MESSAGE","DOMAIN","SOURCE_HOSTNAME",
"TARGET_HOSTNAME","PATH","REDIRECT_REASON","IS_BLOCKED_REDIRECTION","REFERRER",
"ORIGIN","TIMESTAMP_DERIVED","USER_ID_DERIVED","CLIENT_IP","URI_ID_DERIVED"
"HostnameRedirects","20220803011210","4kTkZZ1PzwSSHDkCagbl7-","00D000000000aIW",
"","0","","","","","Redirection was blocked because redirections for the legacy 
SOURCE_HOSTNAME are no longer supported.","","ExperienceCloudSubdomain.force.com",
"","","","0","https://partner.example.com/pagename.html","",
"2022-08-03T01:12:10.015Z","","198.51.100.0","	"
"HostnameRedirects","20220803022225","4kTkSZ1PzwSTHDkCagbl9-","00D000000000aIW",
"","0","","","","","Redirection was blocked because redirections for the legacy 
SOURCE_HOSTNAME are no longer supported.","",
"SalesforceSitesSubdomain.secure.force.com","","","","0","",
"https://partner2.example.com","2022-08-03T02:22:25.015Z","","2001:DB8::",""
"HostnameRedirects","20220803025230","4kNP4KyC_ddbI0GxqZ8Lz-","00D000000000aIW",
"","0","","","","","Redirection prevented due to a hostname mismatch.","",
"oldMyDomainName.my.salesforce.com","currentMyDomainName.my.salesforce.com","",
"","0","https://www.example.com/login_hub.htm","https://www.example.com",
"2022-08-03T02:52:30.015Z","","203.0.113.0",""
"HostnameRedirects","20220803081241","4kTkSZ1PzwSTHDkCagbl9-","00D000000000aIW",
"","0","","","","","Redirection was blocked because redirections for the legacy 
SOURCE_HOSTNAME are no longer supported.","",
"SalesforceSitesSubdomain.secure.force.com","","","","0",
"https://myDomainName.my.site.com/store/Page1","","2022-08-03T08:12:41.015Z","",
"Salesforce.com IP",""
"HostnameRedirects","20220803113801","4kNQs7BYKbSbIWGxqZ8Lz-","00D000000000aIW",
"","0","","","","","Redirection prevented due to a hostname mismatch.","",
"oldMyDomainName.lightning.force.com","currentMyDomainName.lightning.force.com",
"","","0",
"https://sandboxMyDomainName--SandboxName.sandbox.lightning.force.com/r/
product__c/a00000000000000IAI/view",
"https://sandboxMyDomainName--SandboxName.sandbox.lightning.force.com",
"2022-08-03T11:38:01.015Z","","Salesforce.com IP",""
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/query?q=SELECT+
LogDate%2C+LogFile+FROM+EventLogFile+WHERE+EventType%3D%27HostnameRedirects%27
+ORDER+BY+CreatedDate+DESC+LIMIT+1 -H "Authorization: Bearer token"
```

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
