---
title: "Send"
domain: mc-apis
topic: send
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:24.912Z
estimatedTokens: 1469
keywords: [Send, email, retrieves, aggregate, data, JobID, Items]
---

# Send

> The Send object sends email and retrieves aggregate data based on a JobID.

# Send

The Send object sends email and retrieves aggregate data based on a JobID.

-   To create a Send using a list, you need the Email | Subscribers | List | SendEmailToList permission.
-   To create or update a Send where the list ID is the All Subs List ID, you need the Email | Subscribers | All Subscribers | Send and View permissions.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Additional | xsd:string | The ID for a send that customers use as a campaign ID. |
| BccEmail | xsd:string | Indicates email addresses to receive blind carbon copy of a message. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| Duplicates | xsd:int | Represent the number of duplicate email addresses associated with a send (exists only when a send occurs to multiple lists). |
| Email | Email | Default email address for object. Indicates if subscriber information can be used for email sends. |
| EmailName | xsd:string | Specifies the name of an email message associated with a send. |
| EmailSendDefinition | EmailSendDefinition | Indicates email send definition to which the send object is attached. |
| Events | TrackingEvent[] | Reserved for future use. |
| ExistingUndeliverables | xsd:int | Indicates whether bounces occurred on previous send. |
| ExistingUnsubscribes | xsd:int | Indicates whether unsubscriptions occurred on previous send. |
| ForwardedEmails | xsd:int | Number of emails forwarded for a send. |
| FromAddress | xsd:string | Indicates From address associated with a object. Deprecated for email send definitions and triggered send definitions. |
| FromName | xsd:string | Specifies the default email message From Name. Deprecated for email send definitions and triggered send definitions. |
| HardBounces | xsd:int | Indicates number of hard bounces associated with a send. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| InvalidAddresses | xsd:int | Specifies the number of invalid addresses associated with a send. |
| IsAlwaysOn | xsd:boolean | Indicates whether the request can be performed while the system is is maintenance mode. A value of true indicates that the system processes the request. |
| IsMultipart | xsd:boolean | Indicates whether the email is sent with Multipart/MIME enabled. |
| Links | Link[] | Contains an array of links included in a send. |
| List | List[] | List associated with an object. |
| MissingAddresses | xsd:int | Specifies number of missing addresses encountered within a send. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| NumberDelivered | Nullable`1 | Number of sent emails that did not bounce. |
| NumberErrored | xsd:int | Number of emails not sent as part of a send because an error occurred while trying to build the email. |
| NumberExcluded | xsd:int | Indicates the number recipients excluded froman email send because of a held, unsubscribed, master unsubscribed, or global unsubscribed status. |
| NumberSent | Nullable`1 | Number of emails actually sent as part of an email send. This number reflects all of the sent messages and may include bounced messages. |
| NumberTargeted | xsd:int | Indicates the number of possible recipients for an email send. This number does not include unsubscribed or excluded subscribers for a given list or data extension. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| OtherBounces | xsd:int | Specifies number of Other-type bounces in a send. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| PreviewURL | xsd:string | Indicates URL used to preview the message associated with a send. |
| SendDate | xsd:dateTime | Indicates the date on which a send occurred. Set this value to have a CST (Central Standard Time) value. |
| SendLimit | xsd:int | Indicates limit of messages to send as part of a send definition within a predefined send window. |
| SendWindowClose | xsd:dateTime | Defines the end of a send window for a send definition. |
| SendWindowOpen | xsd:dateTime | Defines the beginning of a send window for a send definition. |
| SentDate | Nullable`1 | Indicates date on which a send took place. |
| SoftBounces | xsd:int | Indicates number of soft bounces associated with a specific send. |
| Sources | APIObject[] | Specifies multiple sources included in a campaign. |
| Status | xsd:string | Defines status of object. Status of an address. |
| Subject | xsd:string | Contains subject area information for a message. |
| SuppressionLists | AudienceItem[] | Array of suppression lists associated with a send. |
| UniqueClicks | xsd:int | Indicates number of unique clicks on message. |
| UniqueOpens | xsd:int | Indicates number of unique opens resulting from a triggered send. |
| Unsubscribes | xsd:int | Indicates the number of unsubscribe events associated with a send. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
