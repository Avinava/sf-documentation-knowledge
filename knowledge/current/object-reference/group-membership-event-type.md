---
title: "Group Membership Event Type"
domain: object-reference
topic: group-membership-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.202Z
estimatedTokens: 1132
keywords: [Group, Membership, Event, events, capture, changes, queue, members, added, removed]
---

# Group Membership Event Type

> Group Membership events capture details about changes to public group and queue
      membership, such as when members are added to or removed from the public group or
      queue.

# Group Membership Event Type

Group Membership events capture details about changes to public group and queue membership, such as when members are added to or removed from the public group or queue.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services.Example96.43.144.26 |
| CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity that took place in the app server layer. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always GroupMembership. |
| GROUP_ID | TypeIdDescriptionID of the group whose membership changed.Example00GXXXXXXXXXXXX |
| GROUP_TYPE | TypeStringDescriptionThe type of group. Valid values are:R—Public groupQ—QueueExampleR |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.ExampleGeJCsym5eyvtEK2I |
| MEMBER_ID | TypeIdDescriptionThe ID of the member added to or removed from the group. Public groups can contain individual users, other groups, or users in a specified role or territory. Queues can contain individual users, roles, public groups, territories, connections, or partner users.Example005XXXXXXXXXXXX or 00GXXXXXXXXXXXX |
| OPERATION | TypeStringDescriptionThe operation that occurred, such as a member being added to or removed from a group. Valid values are:AddedGroupMemberDeletedGroupMemberExampleDeletedGroupMember |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.Example00DXXXXXXXXXXXX |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.Example3nWgxWbDKWWDIk0FKfF5DV |
| RUN_TIME | TypeNumberDescriptionThe amount of time that the request took in milliseconds.Example115 |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.Exampled7DEq/ANa7nNZZVD |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.Example20130715233322.670 |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).Example2015-07-27T11:32:59.555Z |
| URI | TypeStringDescriptionThe URI of the page that’s receiving the request.Example/home/home.jsp |
| URI_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the URI of the page that’s receiving the request.Example005XXXXXXXXXYAY |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.Example005XXXXXXXXXXXX |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the user who’s using Salesforce services through the UI or the API.Example005XXXXXXXXXXXXIA0 |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
