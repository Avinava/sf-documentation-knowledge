---
title: "ReplyMailManagementConfiguration"
domain: mc-apis
topic: replymailmanagementconfiguration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:23.287Z
estimatedTokens: 1129
keywords: [ReplyMailManagementConfiguration, configuration, settings, reply, mail, management, account, Items]
---

# ReplyMailManagementConfiguration

> The ReplyMailManagementConfiguration object contains configuration settings for the reply mail management in an account.

# ReplyMailManagementConfiguration

The ReplyMailManagementConfiguration object contains configuration settings for the reply mail management in an account.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AutoReplyBody | xsd:string | Contains the content of the message sent as an automatic reply. |
| AutoReplySubject | xsd:string | Contains the subject of the email message sent as an automatic reply. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| DeleteAutoReplies | xsd:boolean | Specifies whether auto-replies to a send are deleted instead of forwarded to the RMM-configured email address. A value of true indicates the auto-replies are deleted. A value of false allows the messages to be forwarded. |
| DNSRedirectComplete | xsd:boolean | Specifies whether a reply domain's DNS has been redirected to the Marketing Cloud IP addresses. A value of true indicates a reply domain's DNS has been redirected. |
| EmailDisplayName | xsd:string | Specifies the From name associated with the From email address as part of reply mail management configuration. |
| EmailReplyAddress | xsd:string | Specifies the From email address to be used for outbound email messages within a reply mail management configuration. |
| ForwardingAddress | xsd:string | Specifies forwarding address for inbound emails resulting from a send. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| ReplySubdomain | xsd:string | Specifies subdomain associated with a reply mail management subdomain. |
| SendAutoReplies | xsd:boolean | Indicates whether automatic replies are sent as part of a reply mail management configuration. A value of true indicates that automatic replies are sent. |
| SupportLeaveKeyword | xsd:boolean | Indicates whether a reply mail management configuration supports a leave keyword. A value of true indicates support for a leave keyword. |
| SupportMisspelledKeywords | xsd:boolean | Indicates whether a reply mail management configuration supports misspelled keywords.A value of true indicates support for misspelled keywords. |
| SupportOptOutKeyword | xsd:boolean | Indicates whether a reply mail management configuration supports an opt-out keyword. A value of true indicates support for an opt-out keyword. |
| SupportRemoveKeyword | xsd:boolean | Indicates whether a reply mail management configuration supports a remove keyword. A value of true indicates support for a remove keyword. |
| SupportUnsubKeyword | xsd:boolean | Indicates whether a reply mail management configuration supports a unsubscribe keyword. A value of true indicates support for a unsubscribe keyword. |
| SupportUnsubscribeKeyword | xsd:boolean | Indicates whether a reply mail management configuration supports a unsubscribe keyword. A value of true indicates support for a unsubscribe keyword. |
| SupportUnsubscribes | xsd:boolean | Indicates whether a reply mail management configuration allows subscribers to unsubscribe. A value of true indicates subscribers can unsubscribe via the reply mail management configuration. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [Manage Reply Mail Management](atlas.en-us.noversion.mc-apis.meta/mc-apis/managing_reply_mail_management_via_the_web_service_api.htm "Managing_Reply_Mail_Management_via_the_Web_Service_API")

## Related Topics

- Manage Reply Mail Management (atlas.en-us.noversion.mc-apis.meta/mc-apis/managing_reply_mail_management_via_the_web_service_api.htm)
