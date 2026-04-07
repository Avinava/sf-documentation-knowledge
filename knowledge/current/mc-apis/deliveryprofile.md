---
title: "DeliveryProfile"
domain: mc-apis
topic: deliveryprofile
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:21.505Z
estimatedTokens: 843
keywords: [DeliveryProfile, delivery, profile, account, address, domain, inclusion, footer, Items]
---

# DeliveryProfile

> The DeliveryProfile object contains information on a single delivery profile within an account, such as IP address, domain, header inclusion, and footer inclusion information.

# DeliveryProfile

The DeliveryProfile object contains information on a single delivery profile within an account, such as IP address, domain, header inclusion, and footer inclusion information.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| Description | xsd:string | Describes and provides information regarding the object. |
| DomainType | DeliveryProfileDomainTypeEnum | Defines the type of domain associated with a delivery profile or send definition. Valid values include DefaultDomain or CustomDomain. |
| FooterContentArea | ContentArea | Defines footer content area to use as part of a delivery profile or send definition. |
| FooterSalutationSource | SalutationSourceEnum | Defines source of a footer salutation to use as part of a delivery profile or send definition. Valid values include:DefaultContentLibraryNone |
| HeaderContentArea | ContentArea | Defines content area to be used in the header of a delivery profile or a send definition. |
| HeaderSalutationSource | SalutationSourceEnum | Defines source of header salutation for a delivery profile or send definition. Valid values include:DefaultContentLibraryNone |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| PrivateDomain | PrivateDomain | Defines private domain to use as part of a delivery profile or send definition. |
| PrivateDomainSet | PrivateDomainSet | Contains information on the private domain set associated with a delivery profile. |
| PrivateIP | PrivateIP | Contains information on the private IP address associated with a delivery profile. |
| SMIMESignatureCertificate | Certificate | Contains information on SMIME certificate used to authenticate email. |
| SourceAddressType | DeliveryProfileSourceAddressTypeEnum | Indicates the source IP address type used with the delivery profile. Valid values include DefaultPrivateIPAddress and CustomPrivateIPAddress. |
| SubscriberLevelPrivateDomain | xsd:boolean | Indicates the use of a subscriber level private domain |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
