---
title: "MobileConnectSendSMSActivity"
domain: mc-apis
topic: mobileconnectsendsmsactivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:22.757Z
estimatedTokens: 396
keywords: [MobileConnectSendSMSActivity, activity, send, SMS, message, MobileConnect]
---

# MobileConnectSendSMSActivity

> The MobileConnectSendSMSActivity object defines an activity used to send an SMS message in MobileConnect.

# MobileConnectSendSMSActivity

The MobileConnectSendSMSActivity object defines an activity used to send an SMS message in MobileConnect.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Defines which account owns the activity |
| CorrelationID | xsd:string | Identifies calls involved in a specific asynchronous process |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type |
| Description | xsd:string | Describes and provides information regarding the object |
| ID | xsd:int | Read-only legacy identifier for an object. Not supported on all objects |
| InteractionObjectID | xsd:string | Returns associated ID for activities within the asynchronous process of the overall conversation or program |
| Keyword | xsd:string | Keyword associated with activity |
| ModifiedDate | Nullable | Indicates the last time object information was modified |
| Name | xsd:string | Name of the object or property |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object |
| ObjectState | xsd:string | Reserved for future use |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by client and stored by system. This property is accessible only via API. |
