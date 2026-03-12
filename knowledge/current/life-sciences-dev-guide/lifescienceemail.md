---
title: "LifeScienceEmail"
domain: life-sciences-dev-guide
topic: lifescienceemail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.393Z
estimatedTokens: 3369
keywords: [LifeScienceEmail, collection, sendable, messages, manages, creation, sending, tracking, email, communications, stores, including, content, status, attempts]
---

# LifeScienceEmail

> Represents a collection of sendable messages that manages the creation,
         sending, and tracking of email communications. This object stores the details of each
         email, including the content, the status of sending attempts, and any responses
         received. This object is available in API version 65.0 and later.

# LifeScienceEmail

Represents a collection of sendable messages that manages the creation, sending, and tracking of email communications. This object stores the details of each email, including the content, the status of sending attempts, and any responses received. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttachmentIdentifiers | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA semicolon-separated list of IDs for attachments that need to be sent with the email transaction. This denormalized field displays the attachment names from the content document, allowing for additional attachments to be tracked and sent along with the email. |
| AttachmentNames | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA list of attachment names that were selected for the email template. This is a denormalized field (simplified view) that pulls data from the content document to display the names of the attachments included with the email. |
| BccEmailAddressList | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA list of email addresses in .csv format that are copied from the email template and included in the bcc field of the email. |
| BodyAttachmentIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Stores the Salesforce ID of the standard attachment or content version record that contains the formatted content of the email body. This ensures the email body is properly linked and formatted when the email is sent. |
| BouncedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the email is marked as bounced, indicating that it couldn’t be delivered to the recipient. |
| BouncedReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason why the email bounced, providing insight into the delivery failure (for example, invalid email address, mailbox full, or server issues). |
| CancelledDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the email is canceled. |
| CcEmailAddressList | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA list of email addresses to be included in the cc field when sending the email. These recipients will receive a copy of the email but aren’t the primary recipients. |
| CommSubscriptionConsentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA lookup field that links the email transaction to the consent record that indicates whether the recipient opted into or out of receiving emails.This field is a relationship field.Relationship NameCommSubscriptionConsentRefers ToCommSubscriptionConsent |
| EmailLanguage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the language in which the linked email template is written. |
| EmailStatus | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDisplays the status of the email based on recipient actions or system updates (Sent, Scheduled, Cancelled, Opened, Bounced).This field is a calculated field. |
| EmailTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA lookup field that links the email transaction to the related email template used for the communication.This field is a relationship field.Relationship NameEmailTemplateRefers ToLifeSciEmailTemplate |
| ErrorMessage | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe error message generated if there was an issue sending the email. |
| FailedAttemptCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of failed attempts made to send the email. |
| FirstOpenedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the email is first opened by the recipient. |
| FromUserEmailAddress | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user email address from which the email is sent. If you use an org-wide email address, emails are sent from that address instead. |
| IsBounced | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an email has bounced.The default value is false. |
| IsConsentIgnored | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that recipient consent preferences are ignored when the email is sent.The default value is false. |
| IsHtmlBody | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the email body is in HTML format.The default value is false. |
| LastEventDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the status information related to the email was last updated. |
| LastOpenedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the email is last opened by the recipient. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. An automatically generated unique identifier for the record in the format ET-{0000000000}. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner or creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PresentationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA lookup field that links the email transaction to a specific presentation that the sales representative attaches as an email attachment. This field stores the reference to the presentation that must be included in the email as an attachment, ensuring the correct presentation is sent with the email.This field is a relationship field.Relationship NamePresentationRefers ToPresentation |
| ResponseStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionTracks the recipient's response to an RSVP request from the .ics (iCalendar) tracking service.Possible values are:AcceptedDeclinedTentative |
| ScheduledDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the date and time when the email is scheduled to be sent. This allows the email to be delivered at the most appropriate or strategic timing, ensuring better engagement and relevance for the recipient. |
| SenderEmailAddress | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field stores the final sender's email address after evaluating different possible sources. It can be either the user's email or an organization-wide email address, depending on the scenario. Unlike FromEmail, which might be directly associated with the individual user, SenderEmailAddress can be a standard organizational email (for example, no-reply) if configured. |
| SenderTerritoryId | Reserved for future use. |
| SenderUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA lookup field that links to the user who sent the email. This field tracks the specific individual responsible for sending the email.This field is a relationship field.Relationship NameSenderUserRefers ToUser |
| SenderUserName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the final sender's name after evaluating various potential sources. The value is determined based on the FromUser and the email settings, and is populated in the system code (EmailQueueSenderHandler.cls). The sender’s name can be derived from either the user’s details or an organization-wide email configuration, depending on the email context. |
| SentDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe exact date and time when the email was sent. |
| SentToContactPointEmailId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact point email address that the email was sent to. Derived from the associated contact point email (ContactPointEmail object). Opt information is derived from the associated communication subscription consent (CommSubscriptionConsent object).This field is a relationship field.Relationship NameSentToContactPointEmailRefers ToContactPointEmail |
| SentToEmailAddress | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address where the email is sent. This field captures the recipient's email address.For automated emails, the recipient's email is stored in this field. |
| SourceReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA polymorphic lookup field that links the email transaction to a specific record from various objects, such as Provider Visit or Task. This allows the email transaction to be associated with the relevant event or task, providing context and traceability for the communication.This field is a polymorphic relationship field.Relationship NameSourceReferenceRecordRefers ToDigitalSignatureRequest, ProviderVisit, Task |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Indicates the status of the email request.Possible values are:CancelledFailedNewPreparingRetrySuccess |
| SubjectText | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The subject line of the email, providing a summary of the content or purpose of the message. The subject is visible to recipients in their inbox. |
| ToAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. A reference to the account as the message recipient.This field is a relationship field.Relationship NameToAccountRefers ToAccount |
| ToContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA lookup field that references the contact as the email recipient. This field is necessary to track recipient-specific events, such as bounced emails, based on the contact’s information.This field is a relationship field.Relationship NameToContactRefers ToContact |
| UrgencyType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the urgency of the email, determining when it should be sent.Possible values are:ImmediateScheduled |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LifeScienceEmailChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[LifeScienceEmailFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LifeScienceEmailHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LifeScienceEmailShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LifeScienceEmailChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- LifeScienceEmailFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- LifeScienceEmailHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- LifeScienceEmailShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
