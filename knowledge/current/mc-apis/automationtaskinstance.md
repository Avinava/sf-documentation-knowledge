---
title: "AutomationTaskInstance"
domain: mc-apis
topic: automationtaskinstance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:15.521Z
estimatedTokens: 518
keywords: [AutomationTaskInstance, specific, instance, task, automation, Studio, account]
---

> The AutomationTaskInstance object defines a specific instance of a task associated with an automation in Automation Studio for an account.

# AutomationTaskInstance

The AutomationTaskInstance object defines a specific instance of a task associated with an automation in Automation Studio for an account.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Activities | AutomationActivity[] | Identifies the activities associated with task |
| ActivityInstances | AutomationActivityInstance[] | Identifies specific instances of activies associated with task |
| Automation | Automation | Identifies automation associated with task |
| AutomationInstance | AutomationInstance | Identifies the specific instance of an automation associated with task |
| AutomationTaskType | xsd:string | Identifies type of activity associated with task |
| Client | ClientID | Defines which account owns the task |
| CorrelationID | xsd:string | Identifies calls involved in a specific asynchronous process |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type |
| Description | xsd:string | Describes and provides information regarding the object |
| ID | xsd:int | Read-only legacy identifier for an object. Not supported on all objects. |
| ModifiedDate | Nullable | Indicates the last time object information was modified |
| Name | xsd:string | Name of the object or property |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object |
| ObjectState | xsd:string | Reserved for future use |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by client and stored by system. This property is accessible only via API. |
| Sequence | xsd:int | Indicates sequence number associated with instance |
| StepDefinition | AutomationTask | Indicates step definition within automation task associated with instance |
