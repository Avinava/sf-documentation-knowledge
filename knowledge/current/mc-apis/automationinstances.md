---
title: "AutomationInstances"
domain: mc-apis
topic: automationinstances
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:15.498Z
estimatedTokens: 359
keywords: [AutomationInstances, collection, automation, instances, Studio, account]
---

> The AutomationInstances object defines a collection of automation instances in Automation Studio for an account.

# AutomationInstances

The AutomationInstances object defines a collection of automation instances in Automation Studio for an account.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AutomationInstanceCollection | AutomationInstance[] | Identifies collection of automation instances within an account |
| Client | ClientID | Defines which account owns the automation |
| CorrelationID | xsd:string | Identifies calls involved in a specific asynchronous process |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type |
| ID | xsd:int | Read-only legacy identifier for an object. Not supported on all objects. |
| InstanceCount | xsd:int | Indicates number of instances within collection |
| ModifiedDate | Nullable | Indicates the last time object information was modified |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object |
| ObjectState | xsd:string | Reserved for future use |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by client and stored by system. This property is accessible only via API. |
