---
title: "SendDefinition"
domain: mc-apis
topic: senddefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:20.218Z
estimatedTokens: 1055
keywords: [SendDefinition, base, representing, settings, send, Items]
---

> The SendDefinition object is the base class representing the settings for a send.

# SendDefinition

The SendDefinition object is the base class representing the settings for a send.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| CategoryID | xsd:int | Specifies the identifier of the folder. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| DeliveryProfile | DeliveryProfile | Identifies the delivery profile included in a send classification. |
| Description | xsd:string | Describes and provides information regarding the object. |
| DomainType | DeliveryProfileDomainTypeEnum | Defines the type of domain associated with a delivery profile or send definition. Valid values include DefaultDomain or CustomDomain. |
| FooterContentArea | ContentArea | Defines footer content area to use as part of a delivery profile or send definition. |
| FooterSalutationSource | SalutationSourceEnum | Defines source of a footer salutation to use as part of a delivery profile or send definition. Valid values include:DefaultContent LibraryNone |
| FromAddress | xsd:string | Indicates From address associated with a object. Deprecated for email send definitions and triggered send definitions. |
| FromName | xsd:string | Specifies the default email message From Name. Deprecated for email send definitions and triggered send definitions. |
| HeaderContentArea | ContentArea | Defines content area to be used in the header of a delivery profile or a send definition. |
| HeaderSalutationSource | SalutationSourceEnum | Defines source of header salutation for a delivery profile or send definition. Valid values include:DefaultContent LibraryNone |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| InteractionObjectID | xsd:string | Returns associated ID for activities within the asynchronous process of the overall conversation or program. |
| IsSendLogging | xsd:boolean | Indicates whether send logging is enabled for the specified send definition |
| Keyword | xsd:string | Reserved for future use. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| PrivateDomain | PrivateDomain | Defines private domain to use as part of a delivery profile or send definition. |
| PrivateIP | PrivateIP | Contains information on the private IP address associated with a delivery profile. |
| SendClassification | SendClassification | Indicates the send classification to use as part of a send definition. |
| SenderProfile | SenderProfile | Identifies the sender profile included in the send classification. |
| SourceAddressType | DeliveryProfileSourceAddressTypeEnum | Indicates the source IP address type used with the delivery profile. Valid values include DefaultPrivateIPAddress and CustomPrivateIPAddress. |
| SuppressTracking | xsd:boolean | Indicates whether the send definition suppresses tracking results for associated sends. |

## Description

Valid values for the HeaderSalutationSource and FooterSalutationSource properties includes the following:

## Related Items

-   [TriggeredSendDefinition Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/triggeredsenddefinition.htm)
-   [EmailSendDefinition Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/emailsenddefinition.htm)

## Related Topics

- TriggeredSendDefinition Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/triggeredsenddefinition.htm)
- EmailSendDefinition Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/emailsenddefinition.htm)
