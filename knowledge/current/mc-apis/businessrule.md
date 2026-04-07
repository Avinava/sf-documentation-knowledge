---
title: "BusinessRule"
domain: mc-apis
topic: businessrule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:20.498Z
estimatedTokens: 654
keywords: [BusinessRule, business, rules, account, retrieve, Marketing, Cloud, admin, Items]
---

# BusinessRule

> The BusinessRule object contains business rules for your account. To update or retrieve the BusinessRule object, you must be a Marketing Cloud admin.

# BusinessRule

The BusinessRule object contains business rules for your account. To update or retrieve the BusinessRule object, you must be a Marketing Cloud admin.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| BusinessRuleID | xsd:int | Reserved for future use. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| Data | xsd:int | Data associated with label or brand tag,switched in by system to provide brand tag information (such as email footers). |
| Description | xsd:string | Describes and provides information regarding the object. |
| DisplayName | xsd:string | Name to be displayed for an item within a Portfolio. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| IsInheritedFromParent | xsd:boolean | Reserved for future use. |
| IsViewable | xsd:boolean | Indicates whether the property is viewable by the end-user in the profile center. |
| MemberBusinessRuleID | xsd:int | Reserved for future use. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| ProductCode | xsd:string | Reserved for future use. |
| Quality | xsd:string | Reserved for future use. |
| Type | xsd:string | Indicates type of specific list. Valid values include Public, Private, Salesforce, GlobalUnsubscribe, and Master. Indicates the type of email to send to the address. Valid values include Text and HTML. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
