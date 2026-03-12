---
title: "LifeSciEmailTemplate"
domain: life-sciences-dev-guide
topic: lifesciemailtemplate
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:46.318Z
estimatedTokens: 2305
keywords: [LifeSciEmailTemplate, collection, pre-designed, approved, email, templates, end, users, send, healthcare, professionals, HCPs, help, consistent, professional]
---

# LifeSciEmailTemplate

> Represents a collection of pre-designed and approved email templates that end
         users send to healthcare professionals (HCPs). These templates help users create and send
         consistent, professional emails quickly and efficiently. This object is available in
      API version 65.0 and later.

# LifeSciEmailTemplate

Represents a collection of pre-designed and approved email templates that end users send to healthcare professionals (HCPs). These templates help users create and send consistent, professional emails quickly and efficiently. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttachmentObjectType | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the parent objects associated with the record. To configure this field, add the Account picklist value.A sales representative selects which object-level attachments, such as Account, are available for the email template. The values configured for this field enable additional attachments from the selected objects to be included when sending the email. |
| BccEmailIdList | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA list of email addresses to include in the BCC list on emails sent from this template. |
| CanAttachiCalendarFile | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an iCalendar (.ics) file is generated and attached to the email.The default value is false. |
| CanSendPresentationLinks | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether sales representatives can share presentations as unique links in email content.The default value is false. |
| CommunicationSubscriptionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the communication subscription associated with the email template.This field is a relationship field.Relationship NameCommunicationSubscriptionRefers ToCommSubscription |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of the purpose or content of the email template. |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the email template is no longer available for use by sales representatives. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The date when the email template becomes available for use by sales representatives. |
| EmailInvitationActionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the type of action for which the template is used when sending invitations.Possible values are:CancelCreateUpdate |
| EmailInvitationContextType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the context in which the email template can be used, such as for provider visits.Possible values are:ProviderVisit |
| HasSendConsentAcknowledgement | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhen selected, allows the template to be used for sending customizable emails based on captured consent. Used for custom reporting.The default value is false. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the email template is active or inactive.The default value is false. |
| IsDefaultAutoEmailTemplate | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIdentifies whether this template is the default for sending invitations automatically.The default value is false. |
| IsSubjectLineEditable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAllows the sender to modify the email subject before sending.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The title or name of the email template. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner or creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the product related to the email template.This field is a polymorphic relationship field.Relationship NameProductRefers ToLifeSciMarketableProduct, Product2 |
| ReplyToEmailAddress | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address where recipients can send replies. |
| ReplyToType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of email address used for replies. Create these picklist values:Sales Rep Email Address: Uses the sales representative's email address as the Reply to email in the delivered message.Reply To Email Address: Uses the email address specified in the Reply To Email Address field instead of the sales representative's email. |
| SenderEmailFieldApiName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the API name of custom fields that customers create to store the sender’s email address. Enables customers to use a predefined sender email for specific email templates, rather than using the sales representative's email. |
| SenderType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the type of sender for the email. Create these picklist values:Sales Rep Email Address: Uses the sales representative's email address as the sender.Sender Email Field API Name: Uses the email address specified in the Sender Email Field API Name field instead of the sales representative's email.To configure this field, add picklist values to control the sender information used for email transactions created with this template. By default, the picklist includes "Sales Rep," but you can customize it by adding field API names that contain different sender email addresses. |
| ShouldIgnoreEmailConsent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIgnores email consent preferences for this template and sends the email regardless of the recipient's opt-in status.The default value is false. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
| SurveyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA lookup field that links a survey to the email template. To add the survey invitation link to the email, populate the Account field in the Survey Invitation record.This field is a relationship field.Relationship NameSurveyRefers ToSurvey |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LifeSciEmailTemplateChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[LifeSciEmailTemplateFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LifeSciEmailTemplateHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LifeSciEmailTemplateChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- LifeSciEmailTemplateFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- LifeSciEmailTemplateHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
