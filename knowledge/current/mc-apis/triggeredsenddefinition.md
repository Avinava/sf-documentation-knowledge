---
title: "TriggeredSendDefinition"
domain: mc-apis
topic: triggeredsenddefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:25.526Z
estimatedTokens: 2416
keywords: [TriggeredSendDefinition, triggered, send, account, Items]
---

# TriggeredSendDefinition

> The TriggeredSendDefinition object defines a triggered send in the account.

# TriggeredSendDefinition

The TriggeredSendDefinition object defines a triggered send in the account.

-   To create or update a TriggeredSendDefinition where the list ID is the All Subs List ID, you need the Email | Subscribers | All Subscribers | View and SendEmailToList permissions.
-   To update a TriggeredSendDefinition where the TriggeredSendStatus is Active, Moved, Inactive, or Canceled, you need the Email | Interactions | Messages | Email | Triggered | Start, Move, Pause, or Archive permissions, respectively.
-   To update a TriggeredSendDefinition where RefreshContent is enabled, you need the Email | Interactions | Messages | Email | Triggered | Publish Changes permission.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AllowedSlots | xsd:short | Reserved for future use |
| AutoAddSubscribers | xsd:boolean | Indicates whether a triggered send recipient is added to a subscriber list. If set to True, the call automatically adds the email address associated with the triggered send to a specified subscriber list. |
| AutoUpdateSubscribers | xsd:boolean | Indicates if any subscriber information is updated as part of a triggered send. If set to True, the triggered send call updates any applicable subscriber information with information from the send. |
| BatchInterval | xsd:int | Deprecated |
| BccEmail | xsd:string | Indicates email addresses to receive blind carbon copy of a message. This property allows access to the BCC feature. if enabled on the account. The API returns no tracking information for BCC emails and does not error out if the BCC feature is disabled. You cannot specify this property at send time. Either specify the BccEmail in a triggered send or email send definition, or create a profile attribute and pass in a value at send time. |
| CategoryID | xsd:int | Specifies the identifier of the folder |
| CCEmail | xsd:string | Carbon copy email address. You cannot specify this property at send time. Either specify the CCEmail in a triggered send or email send definition, or create a profile attribute and pass in a value at send time. |
| Client | ClientID | Specifies the account ownership and context of an object |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud |
| DeliveryProfile | DeliveryProfile | Identifies the delivery profile included in a send classification |
| Description | xsd:string | Describes and provides information regarding the object |
| DisableOnEmailBuildError | xsd:boolean | Indicates whether an email send continues or not after reaching an error threshold specified by Marketing Cloud. This property corresponds to a Marketing Cloud checkbox. Contact your Marketing Cloud representative to change the threshold. The error threshold defaults to 10. |
| DomainType | DeliveryProfileDomainTypeEnum | Defines the type of domain (DefaultDomain or CustomDomain) associated with a delivery profile or send definition |
| DynamicEmailSubject | xsd:string | Contains content to be used in a dynamic subject line |
| Email | Email | Refers to the Email object representing the email used in the send |
| EmailSubject | xsd:string | Subject for an email send |
| ExclusionFilter | xsd:string | Contains a string of AMPscript that can evaluate to true or false. Use this property to exclude email addresses from a send definition that match that string value. This property can cause performance issues with send time for large amounts of email addresses. Use the data filter function instead. |
| ExclusionListCollection | TriggeredSendExclusionList[] | Specifies one or many exclusion lists |
| FooterContentArea | ContentArea | Defines footer content area to use as part of a delivery profile or send definition |
| FooterSalutationSource | SalutationSourceEnum | Defines source of a footer salutation to use as part of a delivery profile or send definition. Valid values include:DefaultContent LibraryNone |
| FromAddress | xsd:string | Indicates From address associated with a object. Deprecated for email send definitions and triggered send definitions. |
| FromName | xsd:string | Specifies the default email message From Name. Deprecated for email send definitions and triggered send definitions. |
| HeaderContentArea | ContentArea | Defines content area to be used in the header of a delivery profile or a send definition |
| HeaderSalutationSource | SalutationSourceEnum | Defines source of header salutation for a delivery profile or send definition. Valid values include:DefaultContent LibraryNone |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| InteractionObjectID | xsd:string | Returns associated ID for activities within the asynchronous process of the overall conversation or program |
| IsAlwaysOn | xsd:boolean | Indicates whether the request can be performed while the system is maintenance mode. A value of true indicates that the system processes the request. |
| IsMultipart | xsd:boolean | Indicates whether the email is sent with Multipart/MIME enabled |
| IsSendLogging | xsd:boolean | Indicates whether send logging is enabled for the specified send definition |
| IsWrapped | xsd:boolean | Indicates whether an email send contains the links necessary to process tracking information for clicks |
| Keyword | xsd:string | Reserved for future use |
| List | List | List associated with an object |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified |
| Name | xsd:string | Name of the object or property |
| NewSlotTrigger | xsd:int | Deprecated |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object |
| ObjectState | xsd:string | Reserved for future use |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| PreHeader | xsd:string | Contains text used in preheader of email message on mobile devices. |
| Priority | xsd:string | Defines the priority for a triggered send. Valid values include Low, Medium, and High. |
| PrivateDomain | PrivateDomain | Defines private domain to use as part of a delivery profile or send definition |
| PrivateIP | PrivateIP | Contains information on the private IP address associated with a delivery profile |
| RefreshContent | xsd:boolean | Indicates whether the triggered send definition refreshes content as part of the send. A value of true indicates that the triggered send contains refreshed content. |
| ReplyToAddress | xsd:string | Specifies the reply address used for any messages sent using this send definition. |
| ReplyToDisplayName | xsd:string | Optional value that specifies the display name for the email address contained in the ReplyToAddress property. |
| SendClassification | SendClassification | Indicates the send classification to use as part of a send definition |
| SenderProfile | SenderProfile | Identifies the sender profile included in the send classification |
| SendLimit | xsd:int | Indicates limit of messages to send as part of a send definition within a predefined send window |
| SendSourceCustomerKey | xsd:string | Deprecated |
| SendSourceDataExtension | DataExtension | Indicates the data extension used as the source of information for a triggered send definition |
| SendWindowClose | xsd:dateTime | Defines the end of a send window for a send definition |
| SendWindowDelete | xsd:boolean | Indicates whether an existing send window for a send definition is deleted |
| SendWindowOpen | xsd:dateTime | Defines the beginning of a send window for a send definition |
| SourceAddressType | DeliveryProfileSourceAddressTypeEnum | Indicates the source IP address type used with the delivery profile. Valid values include DefaultPrivateIPAddress and CustomPrivateIPAddress. |
| SuppressTracking | xsd:boolean | Indicates whether the send definition suppresses tracking results for associated sends |
| TriggeredSendClass | TriggeredSendClassEnum | Indicates usage of the triggered send for standard API sends or SMTPRestV2 SMTP relay sends |
| TriggeredSendStatus | TriggeredSendStatusEnum | Represent status of triggered send. Valid values include:New (Same as New in UI)Inactive (Same as Paused in UI)Active (Same as Running in UI)Canceled (Same as Archived in UI)Deleted (Not displayed in UI) |
| TriggeredSendSubClass | TriggeredSendSubClassEnum | Indicates if and how a template applies to SMTPRestV2 SMTP relay sends |
| TriggeredSendType | TriggeredSendTypeEnum | Deprecated |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [Data Filters](https://help.salesforce.com/articleView?id=mc_es_data_filters_with_enhanced_subscriber_feature.htm&type=5)
-   [Create a Triggered Send Email Campaign Workflow](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_email_campaign_workflow.htm)
-   [Create a Triggered Send Definition](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_send_definition.htm)

## Related Topics

- Create a Triggered Send Email Campaign Workflow (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_email_campaign_workflow.htm)
- Create a Triggered Send Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_send_definition.htm)
