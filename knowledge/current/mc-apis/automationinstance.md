---
title: "AutomationInstance"
domain: mc-apis
topic: automationinstance
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:15.492Z
estimatedTokens: 765
keywords: [AutomationInstance, automation, Studio, account, Items]
---

> The AutomationInstance object defines an automation in Automation Studio for an account.

# AutomationInstance

The AutomationInstance object defines an automation in Automation Studio for an account.

> The only supported operators for the AutomationInstance object are: IN, EQUALS. Complex filter is not supported.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AutomationID | xsd:string | Identifies automation associated with this instance. If you already use ProgramID, it is still supported for migrated accounts. |
| AutomationSource | AutomationSource | Identifies source of automation |
| AutomationTasks | AutomationTasks[] | Identifies tasks within automation |
| AutomationType | xsd:string | Identifies type of automation |
| Client | ClientID | Defines which account owns the automation |
| CompletedTime | xsd:dateTime | Indicates when automation completed |
| CorrelationID | xsd:string | Identifies calls involved in a specific asynchronous process |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type |
| Description | xsd:string | Describes and provides information regarding the object |
| ID | xsd:int | Read-only legacy identifier for an object. Not supported on all objects |
| InteractionObjectID | xsd:string | Returns associated ID for activities within the asynchronous process of the overall conversation or program |
| IsActive | xsd:boolean | Specifies whether the object is active |
| Keyword | xsd:string | Reserved for future use |
| ModifiedDate | Nullable | Indicates the last time object information was modified |
| Name | xsd:string | Name of the object or property |
| Notifications | AutomationNotification[] | Indicates notifications to use when automation completes |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object |
| ObjectState | xsd:string | Reserved for future use |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by client and stored by system. This property is accessible only via API. |
| Schedule | ScheduleDefinition | Indicates schedule for automation |
| ScheduledTime | xsd:dateTime | Keeps requests in asynchronous queue until time specified in call |
| StartTime | xsd:dateTime | Indicates time this instance of an automation started |
| Status | xsd:int | Indicates status of automation |
| StatusLastUpdate | xsd:dateTime | Indicates date and time status last updated |
| StatusMessage | xsd:string | Indicates message associated with status |
| TaskInstances | AutomationTaskInstance[] | Indicates instances of tasks associated with this automation instance |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
