---
title: "AutomationActivityInstance"
domain: mc-apis
topic: automationactivityinstance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:20.400Z
estimatedTokens: 773
keywords: [AutomationActivityInstance, specific, instance, activity, automation, Studio, account]
---

# AutomationActivityInstance

> The AutomationActivityInstance object defines the specific instance of an activity using an automation in Automation Studio for an account.

# AutomationActivityInstance

The AutomationActivityInstance object defines the specific instance of an activity using an automation in Automation Studio for an account.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ActivityDefinition | AutomationActivity | Identifies the activity definitionassociated with activity |
| ActivityID | xsd:string | Identifies the activity associated with activity |
| ActivityObject | APIObject | Indicates activity associated with automation instance |
| Automation | Automation | Identifies automation associated with activity |
| AutomationID | xsd:string | Identifies the specific automation associated with activity. If you already use ProgramID, it is still supported for migrated accounts. |
| AutomationInstance | AutomationInstance | Identifies the specific instance of an automation associated with activity. If you already use ProgramID, it is still supported for migrated accounts. |
| AutomationTask | AutomationTask | Identifies task within automation |
| AutomationTaskInstance | AutomationTaskInstance | Identifies instance of automation task associated with activity |
| Client | ClientID | Defines which account owns the automation |
| CompletedTime | xsd:string | Indicates time instance of activity completed |
| CorrelationID | xsd:string | Identifies calls involved in a specific asynchronous process |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type |
| Definition | APIObject | Indicates definition associated with automation instance |
| Description | xsd:string | Describes and provides information regarding the object |
| ID | xsd:int | Read-only legacy identifier for an object. Not supported on all objects. |
| IsActive | xsd:boolean | Specifies whether the object is active |
| ModifiedDate | Nullable | Indicates the last time object information was modified |
| Name | xsd:string | Name of the object or property |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object |
| ObjectState | xsd:string | Reserved for future use |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by client and stored by system. This property is accessible only via API. |
| ScheduledTime | xsd:dateTime | Indicates time scheduled for this instance of an activity |
| Sequence | xsd:int | Indicates sequence number for instance |
| SequenceID | xsd:int | Identifies sequence associated with instance |
| StartTime | xsd:dateTime | Indicates time this instance of an activity started |
| Status | xsd:int | Indicates status for this instance of an activity |
| StatusLastUpdate | xsd:dateTime | Indicates date and time status last updated |
| StatusMessage | xsd:string | Indicates message associated with status |
