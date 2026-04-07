---
title: "ScheduleDefinition"
domain: mc-apis
topic: scheduledefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:24.844Z
estimatedTokens: 666
keywords: [ScheduleDefinition, run-time, attributes, schedule, email, send, program, Items]
---

# ScheduleDefinition

> The ScheduleDefinition object is a run-time set of attributes used to schedule an email send or program.

# ScheduleDefinition

The ScheduleDefinition object is a run-time set of attributes used to schedule an email send or program.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| Description | xsd:string | Describes and provides information regarding the object. |
| EndDateTime | xsd:dateTime | Specifies end time of schedule definition |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| Keyword | xsd:string | Reserved for future use. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Occurrences | xsd:int | Specifies number of times to run a schedule definition. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| Recurrence | Recurrence | Interval of recurrence type. |
| RecurrenceRangeType | RecurrenceRangeTypeEnum | Defines how a recurrence type ends. |
| RecurrenceType | RecurrenceTypeEnum | Specifies type of recurrence, such as daily or hourly. |
| StartDateTime | xsd:dateTime | Specifies start time of schedule definition |
| TimeZone | TimeZone | Contains time zone information for an Account. For Create and Update calls, this property defines the time zone for an Account object. On a Retrieve call, TimeZone indicates which time zone is in effect for the Account object in question. Without a specific time zone, the Account defaults to Central Standard Time. |

## Related Items

[Schedule a User-Initiated Email Message Send](atlas.en-us.noversion.mc-apis.meta/mc-apis/scheduling_a_user_initiated_email_message_send_via_the_web_service_api.htm "Scheduling_a_User-Initiated_Email_Message_Send_Via_the_Web_Service_API")

## Related Topics

- Schedule a User-Initiated Email Message Send (atlas.en-us.noversion.mc-apis.meta/mc-apis/scheduling_a_user_initiated_email_message_send_via_the_web_service_api.htm)
