---
title: "AutomationNotification"
domain: mc-apis
topic: automationnotification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:15.504Z
estimatedTokens: 421
keywords: [AutomationNotification, notification, automation]
---

> The AutomationNotification object indicates a notification associated with an automation.

# AutomationNotification

The AutomationNotification object indicates a notification associated with an automation.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Address | AutomationInstance[] | Identifies collection of automation instances within an account |
| Body | xsd:string | Includes text associated with the notification |
| ChannelType | xsd:string | Indicates channel associated with notification |
| Client | ClientID | Defines which account owns the automation |
| CorrelationID | xsd:string | Identifies calls involved in a specific asynchronous process |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type |
| Description | xsd:string | Includes description of notification |
| ID | xsd:int | Read-only legacy identifier for an object. Not supported on all objects. |
| ModifiedDate | Nullable | Indicates the last time object information was modified |
| Name | xsd:string | Name of the object or property |
| NotificationType | xsd:string | Indicates notifications to use when automation completes |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object |
| ObjectState | xsd:string | Reserved for future use |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by client and stored by system. This property is accessible only via API. |
