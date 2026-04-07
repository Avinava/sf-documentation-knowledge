---
title: "SendClassification"
domain: mc-apis
topic: sendclassification
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.201Z
estimatedTokens: 755
keywords: [SendClassification, send, classification, Marketing, Cloud, Items]
---

> The SendClassification object represents a send classification in Marketing Cloud.

# SendClassification

The SendClassification object represents a send classification in Marketing Cloud.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ArchiveEmail | xsd:boolean | Property definition. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| DeliveryProfile | DeliveryProfile | Identifies the delivery profile included in a send classification. |
| Description | xsd:string | Describes and provides information regarding the object. |
| HonorPublicationListOptOutsForTransactionalSends | xsd:boolean | Indicates whether a publication list sends transactional email messages to subscribers that have opted out of receiving email messages. If this property is true, any subscribers that have opted out of receiving email messages on a publication list do not receive transactional email messages. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| SendClassificationType | SendClassificationTypeEnum | Defines the type for the applicable send classification. Valid values include Operational and Marketing. |
| SenderProfile | SenderProfile | Identifies the sender profile included in the send classification. |
| SendPriority | SendPriorityEnum | Indicates priority set for a specific send. Valid values include:BurstNormalLowYour account must be enabled for burst sending to use this feature. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
    -   [Create a Send Classification](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_send_classification.htm "Creating_a_Send_Classification")
    -   [Create a Triggered Send Email Campaign Workflow](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_email_campaign_workflow.htm "Creating_a_Triggered_Email_Campaign_Workflow")

## Related Topics

- Create a Send Classification (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_send_classification.htm)
- Create a Triggered Send Email Campaign Workflow (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_email_campaign_workflow.htm)
