---
title: "List"
domain: mc-apis
topic: list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:22.567Z
estimatedTokens: 775
keywords: [marketing, subscribers, AutomatedEmail, customer, key, greater, Email, Manage, Welcome, permission, Cases, Items]
---

# List

> The List object is a marketing list of subscribers. To create or update a List where AutomatedEmail contains a customer key and has an ID greater than 0, you need the Email | Subscribers | List | Manage Welcome Email permission.

# List

The List object is a marketing list of subscribers. To create or update a List where AutomatedEmail contains a customer key and has an ID greater than 0, you need the Email | Subscribers | List | Manage Welcome Email permission.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AutomatedEmail | Email | Specifies email to send upon a subscriber joining a list. This property corresponds to the Welcome Email functionality in Marketing Cloud. |
| Category | xsd:int | ID of the folder that an item is located in. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| Description | xsd:string | Describes and provides information regarding the object. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| ListClassification | ListClassificationEnum | Specifies the classification for a list. Valid values include:ExactTargetListPublicationListSuppressionList |
| ListName | xsd:string | Name of a specific list. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| SendClassification | SendClassification | Indicates the send classification to use as part of a send definition. |
| Subscribers | Subscriber[] | Indicates subscribers associated with an object. |
| Type | ListTypeEnum | Indicates type of specific list. Valid values include Public, Private, Salesforce, GlobalUnsubscribe, and Master. Indicates the type of email to send to the address. Valid values include Text and HTML. |

## Use Cases

-   [Welcome Email](http://https://help.salesforce.com/articleView?id=mc_es_welcome_email.htm&type=5/en/documentation/exacttarget/content/welcome_email/)
-   [Create a List](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_list.htm "Creating_a_List")
-   [Create a List-Based Email Send Workflow](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_list_based_email_send_workflow.htm "Creating_a_List-Based_Email_Send_Workflow")

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)

## Related Topics

- Create a List (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_list.htm)
- Create a List-Based Email Send Workflow (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_list_based_email_send_workflow.htm)
