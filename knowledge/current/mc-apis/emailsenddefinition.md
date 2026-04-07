---
title: "EmailSendDefinition"
domain: mc-apis
topic: emailsenddefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:16.778Z
estimatedTokens: 2348
keywords: [EmailSendDefinition, message, sender, profile, delivery, audience]
---

> The EmailSendDefinition object contains the message information, sender profile, delivery profile, and audience information.

# EmailSendDefinition

The EmailSendDefinition object contains the message information, sender profile, delivery profile, and audience information.

-   To create an EmailSendDefinition with a SendDefinitionList where the DataSourceTypeID=List and SendDefinitionListType=SourceList, you need the Email | Subscribers | List | SendEmailToList permission.
-   To create or update an EmailSendDefinition with a SendDefinitionList where the ID is the All Subs List, you need the Email | Subscribers | All Subscribers | SendEmailToList and View permissions.
-   To start or test an EmailSendDefinition using the perform method, you need the Email | Content | Email | Send or Test Send permissions.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Additional | xsd:string | The ID for a send that customers use as a campaign ID. This property contains external campaign ID information or more metadata that appears in the tracking extract, and there is a personalization string for it. You can set this information at the time of the send or within an email send definition. |
| AutoBccEmail | xsd:string | Defines blind carbon copy email address to which to send a message as part of an email send definition. |
| BccEmail | xsd:string | Indicates email addresses to receive blind carbon copy of a message. The BccEmail property allows access to the BCC feature if enabled on the account. It does not error out if feature is not enabled. The API returns no tracking information for BCC emails. You must specify this property in an email send definition, as you cannot specify this property at send time. You can create a profile attribute for this property and pass in a value at send time, however. |
| CategoryID | xsd:int | Specifies the identifier of the folder. |
| CCEmail | xsd:string | Carbon copy email address. You must specify the CCEmail property in an email send definition, as you cannot specify this property at send time. You can create a profile attribute for this property and pass in a value at send time, however. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| DeduplicateByEmail | xsd:boolean | Indicates whether a send definition de-duplicates multiple emails sent to the same email address. Set to true to ensure that only one message is sent to a single email address, if that email appears on several different lists or data extensions in a send definition. |
| DeliveryProfile | DeliveryProfile | Identifies the delivery profile included in a send classification. |
| DeliveryScheduledTime | xsd:dateTime | Defines scheduled data and time for a send related to an email send definition. |
| Description | xsd:string | Describes and provides information regarding the object. |
| DomainType | DeliveryProfileDomainTypeEnum | Defines the type of domain associated with a delivery profile or send definition. Valid values include DefaultDomain or CustomDomain. |
| DynamicEmailSubject | xsd:string | Contains content to be used in a dynamic subject line. |
| Email | Email | Default email address for object. Indicates if subscriber information can be used for email sends. |
| EmailSubject | xsd:string | Subject for an email send. This property is required when updating a user-initiated send definition. If you don't pass the new subject to the email send definition, it retains the old subject for that definition. You must also specify the send classification to use as part of the send. |
| ExclusionFilter | xsd:string | Contains a string of AMPscript that can evaluate to true or false, used to exclude email addresses from a send definition. If you include an ExclusionFilter in a create call, you must also include the SendDefinitionList property. The ExclusionFilter property can cause performance issues with send time for large amounts of email addresses. Use the data filter function if you experience performance problems. |
| FooterContentArea | ContentArea | Defines footer content area to use as part of a delivery profile or send definition. |
| FooterSalutationSource | SalutationSourceEnum | Defines source of a footer salutation to use as part of a delivery profile or send definition. Valid values include:DefaultContent LibraryNone |
| FromAddress | xsd:string | Indicates From address associated with a object. Deprecated for email send definitions and triggered send definitions. |
| FromName | xsd:string | Specifies the default email message From Name. Deprecated for email send definitions and triggered send definitions. |
| HeaderContentArea | ContentArea | Defines content area to be used in the header of a delivery profile or a send definition. |
| HeaderSalutationSource | SalutationSourceEnum | Defines source of header salutation for a delivery profile or send definition. Valid values include:DefaultContent LibraryNone |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| InteractionObjectID | xsd:string | Returns associated ID for activities within the asynchronous process of the overall conversation or program. |
| IsMultipart | xsd:boolean | Indicates whether the email is sent with Multipart/MIME enabled. |
| IsSeedListSend | xsd:boolean | Indicates whether a email send includes the use of a seed list. |
| IsSendLogging | xsd:boolean | Indicates whether send logging is enabled for the specified send definition |
| IsWrapped | xsd:boolean | Indicates whether an email send contains the links necessary to process tracking information for clicks. |
| Keyword | xsd:string | Reserved for future use. |
| MessageDeliveryType | MessageDeliveryTypeEnum | Enumerates the types of message delivery options available for email send definitions. Valid values include:Standard - use as default unless your account is configured to handle burst sendingDelayedDeliveryByMTAQueue |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| PreHeader | xsd:string | Contains text used in preheader of email message on mobile devices. |
| PrivateDomain | PrivateDomain | Defines private domain to use as part of a delivery profile or send definition. |
| PrivateIP | PrivateIP | Contains information on the private IP address associated with a delivery profile. |
| ReplyToAddress | xsd:string | Specifies the reply address used for any messages sent using this send definition. |
| ReplyToDisplayName | xsd:string | Optional value that specifies the display name for the email address contained in the ReplyToAddress property. |
| SeedListOccurance | xsd:int | Property definition. |
| SendClassification | SendClassification | Indicates the send classification to use as part of a send definition. This field is required when updating a user-initiated send definition. |
| SendDefinitionList | SendDefinitionList[] | Indicates the subscriber list to use as part of an email send definition. |
| SenderProfile | SenderProfile | Identifies the sender profile included in the send classification. |
| SendLimit | xsd:int | Indicates limit of messages to send as part of a send definition within a predefined send window. |
| SendWindowClose | xsd:dateTime | Defines the end of a send window for a send definition. |
| SendWindowDelete | xsd:boolean | Indicates whether an existing send window for a send definition is deleted. |
| SendWindowOpen | xsd:dateTime | Defines the beginning of a send window for a send definition. |
| SourceAddressType | DeliveryProfileSourceAddressTypeEnum | Indicates the source IP address type used with the delivery profile. Valid values include DefaultPrivateIPAddress and CustomPrivateIPAddress. |
| SuppressTracking | xsd:boolean | Indicates whether the send definition suppresses tracking results for associated sends. |
| TestEmailAddr | xsd:string | Defines an email address to which to send a test message as part of an email send definition.Use the Test action when sending a test email to an email send definition. |
| TimeZone | TimeZone | Contains time zone information for an Account. For Create and Update calls, this property defines the time zone for an Account object. On a Retrieve call, TimeZone indicates which time zone is in effect for the Account object in question. Without a specific time zone, the Account defaults to Central Standard Time. |
| TrackingUsers | TrackingUser[] | Defines account users with access to tracking information for that send definition. |
