---
title: "Insufficient Access Event Type"
domain: object-reference
topic: insufficient-access-event-type
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:09.243Z
estimatedTokens: 1567
keywords: [Insufficient, Access, Event, events, contain, errors, relating, account, case, contact, opportunity, record, troubleshoot, resolve, issues]
---

# Insufficient Access Event Type

> Insufficient Access events contain details about errors relating to
         insufficient account, case, contact, and opportunity record access, so that you can
         troubleshoot and resolve access issues for your users.

# Insufficient Access Event Type

Insufficient Access events contain details about errors relating to insufficient account, case, contact, and opportunity record access, so that you can troubleshoot and resolve access issues for your users.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The Insufficient Access event type is disabled by default. You can enable this event type for a period of 24 hours by contacting Salesforce Customer Support.

These insufficient access error scenarios are logged:

-   The user can’t share a case, contact, or opportunity because the user doesn’t have permission to share the parent account or the recipient of the share doesn’t currently have read access to the parent account.
-   The user can’t change ownership of a case, contact, or opportunity because the user doesn’t have permission to share the parent account or the new owner doesn’t currently have read access to the parent account.
-   The user can’t change the parent account of a case, contact, or opportunity because the user doesn’t have permission to share the new parent account or the owner of the case, contact, or opportunity doesn’t have read access to the new parent account.

Insufficient access errors resulting from bulk operations involving two or more records aren’t logged.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

For more information on interpreting Insufficient Access events, see this [knowledge article](https://help.salesforce.com/s/articleView?id=000396437&type=1&language=en_US "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| ACCESS_ERROR | TypeStringDescriptionThe type of insufficient access error that the user received. Valid values are:DATA_NOT_AVAILABLE—The record is no longer accessible. For example, a record was deleted and moved to the Recycle Bin.INVALID_TYPE—The record type doesn’t exist.NO_ACCESS—The user doesn’t have the required access level to complete the attempted action on the record.ExampleNO_ACCESS |
| ACTUAL_LOGGED_IN_USER_ID | TypeIdDescriptionThe 15-character ID of the user who initiated the action that caused the insufficient access error. For example, a user attempts to transfer ownership of a record to a teammate, but the operation fails because the teammate doesn’t have the required access. In this scenario, the ACTUAL_LOGGED_IN_USER_ID is the user who attempted to transfer access, and the USER_ID is their teammate.Example005XXXXXXXXXXXX |
| ENTITY_TYPE | TypeStringDescriptionThe object for which the user received the insufficient access error. Access errors for the account, case, contact, and opportunity objects are supported.ExampleAccount |
| ERROR_DESCRIPTION | TypeStringDescriptionDescription of the insufficient access error that the user received.ExampleUser 005XXXXXXXXXXXX doesn't have full access for the record 001XXXXXXXXXXXX. |
| ERROR_TIMESTAMP | TypeStringDescriptionThe time in GMT that the insufficient access error occurred.Example20130715233322.670 |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always InsufficientAccess. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.Example00DXXXXXXXXXXXX |
| RECORD_ID | TypeStringDescriptionThe ID of the record that the user doesn’t have access to.Example001XXXXXXXXXXXX |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.Example3nWgxWbDKWWDIk0FKfF5DV |
| REQUESTED_ACCESS_LEVEL | TypeStringDescriptionThe access level required by the user’s attempted action on the record. Valid values are:DELETEFULLREADTRANSFERWRITEExampleFULL |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.Example20130715233322.670 |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).Example2015-07-27T11:32:59.555Z |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user for whom the insufficient access error occurred, either when the user couldn’t access a record, the user couldn’t complete an operation, or the user was the intended recipient of a record transfer that failed because the user didn’t have the required access.Example005XXXXXXXXXXXX |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case-insensitive ID of the user for whom the insufficient access error occurred, either when the user couldn’t access a record or the user was the intended recipient of a record transfer that wasn’t completed.Example005XXXXXXXXXXXXIA0 |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

-   [*Knowledge Article*: Interpret Insufficient Access Event Logs](https://help.salesforce.com/s/articleView?id=000396437&type=1&language=en_US "Knowledge Article: Interpret Insufficient Access Event
    Logs - HTML (New Window)")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
