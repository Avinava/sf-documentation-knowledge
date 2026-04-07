---
title: "Automation"
domain: mc-apis
topic: automation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:20.387Z
estimatedTokens: 847
keywords: [Automation, Studio, account, perform, Programs_30, feature, AutomationSourceType, Playbooks, corresponding, permissions, Items]
---

# Automation

> The Automation object defines an automation in Automation Studio for an account. To update, delete, or perform an Automation where your account has the Programs_30 feature and AutomationSourceType is not Playbooks, you need the corresponding Automation Studio | Automation permissions.

# Automation

The Automation object defines an automation in Automation Studio for an account. To update, delete, or perform an Automation where your account has the Programs\_30 feature and AutomationSourceType is not Playbooks, you need the corresponding Automation Studio | Automation permissions.

> The only supported operators for the Automation object are: IN, EQUALS. Complex filter is not supported.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AutomationSource | AutomationSource | Identifies source of automation |
| AutomationTasks | AutomationTasks[] | Identifies tasks within automation |
| AutomationType | xsd:string | Identifies type of automation |
| Client | ClientID | Defines which account owns the automation |
| CorrelationID | xsd:string | Identifies calls involved in a specific asynchronous process |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type |
| Description | xsd:string | Describes and provides information regarding the object |
| ID | xsd:int | Read-only legacy identifier for an object. Not supported on all objects. |
| InteractionObjectID | xsd:string | Returns associated ID for activities within the asynchronous process of the overall conversation or program |
| IsActive | xsd:boolean | Specifies whether the object is active |
| Keyword | xsd:string | Reserved for future use |
| ModifiedDate | Nullable | Indicates the last time object information was modified |
| Name | xsd:string | Name of the object or property |
| Notifications | AutomationNotification[] | Indicates notifications to use when automation completes |
| ObjectState | xsd:string | Reserved for future use |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by client and stored by system. This property is accessible only via API. |
| ProgramID | xsd:string | System-controlled, read-only text string identifier for object |
| Schedule | ScheduleDefinition | Indicates schedule for automation |
| ScheduledTime | xsd:dateTime | Keeps requests in asynchronous queue until time specified in call |
| Status | xsd:int | Indicates status of automation |

The Status property can contain these values:

| Code | Status Type | Message |
| --- | --- | --- |
| -1 | Error | Program errored out |
| 0 | BuildingError | Program errored out during building |
| 1 | Building | Program building with activities, schedules, and other elements |
| 2 | Ready | Program ready to start |
| 3 | Running | Program running |
| 4 | Paused | Program paused from running state |
| 5 | Stopped | Program stopped |
| 6 | Scheduled | Program scheduled |
| 7 | Awaiting Trigger | Program waiting for a trigger |
| 8 | InactiveTrigger | Program trigger inactive |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [Interact with Automation Studio](atlas.en-us.noversion.mc-apis.meta/mc-apis/interacting_with_automation_studio_via_the_web_service_soap_api.htm)

## Related Topics

- Interact with Automation Studio (atlas.en-us.noversion.mc-apis.meta/mc-apis/interacting_with_automation_studio_via_the_web_service_soap_api.htm)
