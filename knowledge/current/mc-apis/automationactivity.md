---
title: "AutomationActivity"
domain: mc-apis
topic: automationactivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:20.393Z
estimatedTokens: 454
keywords: [AutomationActivity, activity, automation, Studio, account]
---

# AutomationActivity

> The AutomationActivity defines an activity using an automation in Automation Studio for an account.

# AutomationActivity

The AutomationActivity defines an activity using an automation in Automation Studio for an account.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ActivityObject | APIObject | Indicates activity object assoicated with automation |
| Automation | Automation | Identifies automation associated with activity |
| AutomationTask | AutomationTask | Identifies task within automation |
| Client | ClientID | Defines which account owns the automation |
| CorrelationID | xsd:string | Identifies calls involved in a specific asynchronous process |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type |
| Definition | APIObject | Indicates definition associated with automation |
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
| Sequence | ScheduleDefinition | Indicates schedule for automation |
