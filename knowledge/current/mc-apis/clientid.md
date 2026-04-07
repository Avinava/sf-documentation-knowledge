---
title: "ClientID"
domain: mc-apis
topic: clientid
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:15.677Z
estimatedTokens: 370
keywords: [ClientID, owner, subaccount, imply, ownership, Send, Client, email, attributed]
---

> The ClientID object contains the ID of the owner of a subaccount. Use this object to set imply ownership of an object to a subaccount. For example, the Send object contains a Client property that enables the email send to be attributed to subaccount. If no ClientID is specified, the email send is at

# ClientID

The ClientID object contains the ID of the owner of a subaccount. Use this object to set imply ownership of an object to a subaccount. For example, the Send object contains a Client property that enables the email send to be attributed to subaccount. If no ClientID is specified, the email send is attributed to the main SOAP API account.

> Marketing Cloud maintains the PartnerClientKey property for legacy functionality and backwards compatibility. To avoid performance issues, we discourage the use of this property in new code or integrations. Replace this property with ClientID whenever possible.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ClientID1 | xsd:int | Specifies system account ID (deprecated) |
| CreatedBy | xsd:int | Returns user ID for user who created object |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| EnterpriseID | xsd:long | Reserved for future use. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| ModifiedBy | xsd:int | Returns user ID for user who modified object. |
| PartnerClientKey | xsd:string | User-defined partner key for an account. |
| PartnerUserKey | xsd:string | Specifies the partner key value of a user. |
| UserID | xsd:int | Indicates username for an account. |
