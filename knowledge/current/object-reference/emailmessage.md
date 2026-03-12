---
title: "EmailMessage"
domain: object-reference
topic: emailmessage
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.386Z
estimatedTokens: 6165
keywords: [EmailMessage, email, Salesforce, Calls, Special, Access, Rules, Usage, Sample, Code—Apex, Associated, Objects]
---

# EmailMessage

> Represents an email in Salesforce.

# EmailMessage

Represents an email in Salesforce.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

EmailMessage is only available for orgs that use Email-to-Case or Enhanced Email, which is automatically enabled for most customers.

To use reply and forward functionality, FromAddress must specify an email address that exists in EmailMessageRelation, with a RelationType of FromAddress.

The Status field is mostly read-only. You can change the status only from New to Read.

The HtmlBody and RelatedToId fields are supported in Classic list views but not in Lightning list views. In related lists and search results in Lightning Experience, these fields either don’t appear, show blank values, or result in an error.

update() is supported when an email record is in Draft status, and IsPrivateDraft is false. It’s also supported if the email status is Draft, IsPrivateDraft is true, and CreatedBy is associated with the current user. When the email record isn’t in Draft status, the IsExternallyVisible field and custom fields only can be updated.

Set the Update Email Messages user permission for users, such as an Automated Case User, who run automated processes that modify email message-related records. With the Update Email Message permission set, users’ processes can modify EmailMessageRelation and ContentDocumentLink records that are related to an email message that isn’t in Draft status. Don’t set this user permission for other users.

Access to an email message depends on the associated object. The user who created the email is specified in CreatedById and always has access, unless that user is a guest user. Guest users have read access if the message is marked as IsExternallyVisible.

The object that’s used to determine access differs for Email-to-Case and Enhanced Email.

-   Email-to-Case—When Email-to-Case is enabled and the email is Case-based (the ParentId field is Case), access depends on the user’s access to the related Case record. If the email message is a draft, only the user in the CreatedById field or users with the Modify All Data permission can access it.
-   Enhanced Email—Access is activity-based. The ActivityId field specifies an associated Task record. You can control access to activity-based objects with the [Access Activities permission](https://help.salesforce.com/s/articleView?id=sales.activity_access_user_perm.htm&type=5&language=en_US "HTML (New Window)"). Users with the Modify All Data permission can also access the message.

When you use the API to insert EmailMessage records in bulk, the same access rules apply: access is based on cases in ParentId fields or by tasks in ActivityId fields. When inserting a single record, set the CreatedById field to the user performing the operation or leave it blank.

## Fields

| Field | Details |
| --- | --- |
| ActivityId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the activity that is associated with the email. Usually represents an open task that is created for the case owner when a new unread email message is received. ActivityId can only be specified for emails on cases. It’s auto-created for other entities.If an EmailMessage has a related task, and fields on the email record are updated, we may delete the related task and create a new related task. |
| AttachmentIds | TypestringPropertiesCreate, Nillable, UpdateDescriptionA comma-separated list of email attachments. This is used by the Send Email quick action when you use Salesforce Classic email templates. Maximum length is 32, 768 characters. |
| AutomationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionA picklist value that determines if an outgoing email was manually created or AI-generated.Possible values are:AiAssisted–Email is AI-generated, but sent by human.AiAutomated–Email is generated and sent by AI.Null–Email is created and sent by human. |
| BccAddress | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA string array of email addresses for recipients who were sent a visually impaired carbon copy of the email message. Include only email addresses that aren’t associated with Contact, Lead, or User records in Salesforce. If the recipient is a contact, lead, or user, add their ID to the BccIds field instead of adding their email address to the BccAddress field. When adding their ID, the email message is automatically associated with the contact, lead, or user. For an Experience Cloud site user who isn’t the sender of the email, this field returns null.You can’t send emails unless there’s at least one recipient. |
| BccIds | TypeJunctionIdListPropertiesCreate, UpdateDescriptionA string array of IDs for contacts, leads, and users who were sent a visually impaired carbon copy of the email message. Each ID is linked to an EmailMessageRelation record, which represents the relationship between an email message and a Contact, Lead, or User record. For an Experience Cloud site user who isn’t the sender of the email, this list is empty.Adding a JunctionIdList field name to the fieldsToNull property deletes all related junction records. This action can’t be undone. |
| CcAddress | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA string array of email addresses for recipients who were sent a carbon copy of the email message. Include only email addresses that aren’t associated with Contact, Lead, or User records in Salesforce. If the recipient is a contact, lead, or user, add their ID to the CcIds field instead of adding their email address to the CcAddress field. Then the email message is automatically associated with the contact, lead, or user.You can’t send emails unless there’s at least one recipient. |
| CcIds | TypeJunctionIdListPropertiesCreate, UpdateDescriptionA string array of IDs for contacts, leads, and users who were sent a carbon copy of the email message. Each ID is linked to an EmailMessageRelation record, which represents the relationship between an email message and a Contact, Lead, or User record.Adding a JunctionIdList field name to the fieldsToNull property deletes all related junction records. This action can’t be undone. |
| ClientThreadIdentifier | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA value used by third-party email clients to identify which thread an email belongs to. See Email-to-Case Threading for more information.Available in API versions 56.0 and later. |
| ContentDocumentIds | TypeJunctionIdListPropertiesCreate, UpdateDescriptionA string array of IDs for content documents such as files and attachments that are associated with an email. Each ID is linked to a ContentDocumentLink record, which represents the relationship between an email message and a content document record.Adding a JunctionIdList field name to the fieldsToNull property deletes all related junction records. This action can’t be undone. |
| Division | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionA logical segment of your organization's data. For example, if your company is organized into different business units, you could create a division for each business unit, such as “North America,” “Healthcare,” or “Consulting.” Available only if the organization has the Division permission enabled. |
| EmailRoutingAddressId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the ID of the email routing address used to create the email. This value is set when the email is processed by Email-to-Case service. When this field is set, EmailMessage.Incoming cannot be false.Relationship NameEmailRoutingAddressRelationship TypeLookupRefers ToEmailRoutingAddress |
| EmailTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email template, if any, that was chosen for the email. This field is populated in Lightning Experience only.This is a relationship field.Relationship NameEmailTemplateRelationship TypeLookupRefers ToEmailTemplate |
| FirstOpenedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date the email was first opened.To see this field, enable email tracking in your org. |
| FromAddress | TypeemailPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe address that originated the email. When using this field, specify an email address that exists in EmailMessageRelation, with a RelationType of FromAddress.EmailMessages in Draft status with IsPrivateDraft set to true must use the user's address, a verified org-wide email address, or a verified Email-to-Case routing address in the FromAddress field. |
| FromId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe contact, lead, or user who sent the email. Maximum length is 18 characters. |
| FromName | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sender’s name. When using this field, specify an email address that exists in EmailMessageRelation, with a RelationType of FromAddress. |
| HasAttachment | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the email was sent with an attachment (true) or not (false). |
| Headers | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe Internet message headers of the incoming email. Used for debugging and tracing purposes. Doesn’t apply to outgoing emails. |
| HtmlBody | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe body of the email in HTML format.You can’t send emails unless at least one of these fields has content.Subject fieldHTML Body or Text Body fieldAs the sender, you can provide the content, or it can be automatically inserted using predefined values. An email template can also include the content for these fields. |
| Incoming | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the email was received (true) or sent (false). |
| IsBounced | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the email bounced.This field is set to True for bounced emails in orgs using Lightning Threading. It’s not set to True for orgs using Ref ID threading.To see this field, enable bounce management in your org. |
| IsClientManaged | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIf EmailMessage is created with IsClientManaged set to true, users can modify EmailMessage.ContentDocumentIds to link file attachments even when the Status of the EmailMessage isn’t set to Draft. When this field is set to true and Enhanced Email is enabled, a Task record is created for the EmailMessage regardless of Email-to-Case settings. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| IsExternallyVisible | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf the Experience Cloud site case feed is enabled, IsExternallyVisible controls the external visibility of emails in sites. When IsExternallyVisible is set to true—its default value—external users see the email message in the case feed.Emails remain visible in the Emails related list whether or not this field is set to true. For security reasons, we recommend that you remove this related list from your case page layout for external community users.Only emails with a value in the ParentId field can be made externally visible in sites.This field can’t be updated if the email’s Status is set to Draft.The Enable Case Feeds in Experience Cloud Sites organization preference in Setup makes case-related emails, comments, and updates visible to site members.When this preference is off, IsExternallyVisible is True by default for the EmailMessage. When this preference is on, IsExternallyVisible defaults to True only if the case contact email is the sender or the recipient of the EmailMessage. Otherwise, IsExternallyVisible defaults to False. |
| IsOpened | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the email has been opened.To see this field, enable email tracking in your org. |
| IsPrivateDraft | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIf IsPrivateDraft is set to true, then only the CreatedById user can view, update, and send this email draft. If IsPrivateDraft is set to false, then any user with permissions to work on the case can see these drafts. After the email is sent, then this field is updated to be false. Public drafts are loaded and visible in Salesforce Classic while Private Drafts are only used in Lightning Experience. |
| IsTracked | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the email is being tracked.To see this field, enable email tracking in your org. |
| LastOpenedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date the email was last opened.To see this field, enable email tracking in your org. |
| MessageDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date the email was created.For inbound emails, Email-to-Case sets this field using the Date header. The Date header is set by the email client and is subject to the sender's time preferences. |
| MessageIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the email message. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionA name for the email message that's derived from the first 255 characters of the Subject field. If the Subject field is empty, a localized string of [No Subject] is used. This field is read-only and can’t be created or updated. Available in API versions 56.0 and later. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the case that’s associated with the email.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToCase |
| RelatedToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe RelatedToId represents nonhuman objects such as accounts, opportunities, campaigns, cases, or custom objects. RelatedToIds are polymorphic. Polymorphic means a RelatedToId is equivalent to the ID of a related object.You must have access to at least one entity listed under Refers To to access RelatedToId.You can update RelatedToId when IsClientManaged is set to true.RelatedtoId and ParentId should have the same value when ParentId is set. You might see unexpected results otherwise.This is a polymorphic relationship field.Relationship NameRelatedToRelationship TypeLookupRefers ToAccount, Accreditation, AssessmentIndicatorDefinition, AssessmentTask, AssessmentTaskContentDocument, AssessmentTaskDefinition, AssessmentTaskOrder, Asset, AssetRelationship, AssignedResource, Award, BoardCertification, BusinessLicense, BusinessMilestone, BusinessProfile, Campaign, CareBarrier, CareBarrierDeterminant, CareBarrierType, CareDeterminant, CareDeterminantType, CareDiagnosis, CareInterventionType, CareMetricTarget, CareObservation, CareObservationComponent, CarePgmProvHealthcareProvider, CarePreauth, CarePreauthItem, CareProgram, CareProgramCampaign, CareProgramEligibilityRule, CareProgramEnrollee, CareProgramEnrolleeProduct, CareProgramEnrollmentCard, CareProgramGoal, CareProgramProduct, CareProgramProvider, CareProgramTeamMember, CareProviderAdverseAction, CareProviderFacilitySpecialty, CareProviderSearchableField, CareRegisteredDevice, CareRequest, CareRequestDrug, CareRequestExtension, CareRequestItem, CareSpecialty, CareSpecialtyTaxonomy, CareTaxonomy, Case, CommSubscriptionConsent, ContactEncounter, ContactEncounterParticipant, ContactRequest, Contract, CoverageBenefit, CoverageBenefitItem, CreditMemo, DelegatedAccount, DocumentChecklistItem, EnrollmentEligibilityCriteria, HealthcareFacility, HealthcareFacilityNetwork, HealthcarePayerNetwork, HealthcarePractitionerFacility, HealthcareProvider, HealthcareProviderNpi, HealthcareProviderSpecialty, HealthcareProviderTaxonomy, IdentityDocument, Image, IndividualApplication, Invoice, ListEmail, Location, MemberPlan, Opportunity, Order, OtherComponentTask, PartyConsent, PersonLifeEvent, PlanBenefit, PlanBenefitItem, ProcessException, Product2, ProductItem, ProductRequest, ProductRequestLineItem, ProductTransfer, PurchaserPlan, ReceivedDocument, ResourceAbsence, ReturnOrder, ReturnOrderLineItem, ServiceAppointment, ServiceResource, Shift, Shipment, ShipmentItem, Solution, Visit, VisitedParty, VolunteerProject, WorkOrder, WorkOrderLineItem |
| ReplyToEmailMessageId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the inbound or outbound email message the current email message is a reply to. It’s not possible to reply to a message whose Status is Draft.This is a relationship field.This is only set for Case related Email replies at setup.Relationship NameReplyToEmailMessageRelationship TypeLookupRefers ToEmailMessage |
| Source | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionWhen Sync Email as Salesforce Activity is enabled, this value reflects from where the email was captured automatically. Available in API version 64.0 and later.Possible values are:Einstein Activity Capture–Captured as an entire email message by Einstein Activity Capture.Einstein Activity Capture Limited–Captured as a header-only email by Einstein Activity Capture. The sender, recipients, date, and time of the message were captured, not the subject or body.Email Integration App Manual-Captured to track the email message records created or edited from the mailapp.Migrated Captured Email-An email that was captured in Einstein Activity Capture and migrated to an updated version of Einstein Activity Capture in which Sync Email as Activity is turned on. Available in API version 65.0 and later.Migrated Captured Email Header Only-An email that was captured in Einstein Activity Capture and migrated as header-only data to an updated version of Einstein Activity Capture in which Sync Email as Activity is turned on. Available in API version 65.0 and later. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the email.The Status field is mostly read-only. You can change the status only from New to Read.Possible values are:0 (New)1 (Read)2 (Replied)3 (Sent)4 (Forwarded)5 (Draft)For emails not sent as part of a case, only the status 3 (Sent) is valid. |
| Subject | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe subject line of the email.You can’t send emails unless at least one of these fields has content.Subject fieldHTML Body or Text Body fieldAs the sender, you can provide the content, or it can be automatically inserted using predefined values. An email template can also include the content for these fields. |
| TextBody | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe body of the email, in plain text format. If TextBody isn’t set, then it’s extracted from HtmlBody.You can’t send emails unless at least one of these fields has content.Subject fieldHTML Body or Text Body fieldAs the sender, you can provide the content, or it can be automatically inserted using predefined values. An email template can also include the content for these fields |
| ThreadIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the email thread the email message belongs to. This field is used by features that sync emails directly from an inbox into Salesforce. This field is not used by On-Demand Email-to-Case. |
| ToAddress | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA string array of email addresses for recipients who were sent the email message. Include only email addresses that aren’t associated with Contact, Lead, or User records in Salesforce. If the recipient is a contact, lead, or user, add their ID to the ToIds field instead of adding their email address to the ToAddress field. Then the email message is automatically associated with the contact, lead, or user.You can’t send emails unless there’s at least one recipient. |
| ToIds | TypeJunctionIdListPropertiesCreate, UpdateDescriptionA string array of IDs for contacts, leads, and users who were sent a carbon copy of the email message. Each ID is linked to an EmailMessageRelation record, which represents the relationship between an email message and a Contact, Lead, or User record.Adding a JunctionIdList field name to the fieldsToNull property deletes all related junction records. This action can’t be undone. |
| ValidatedFromAddress | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionA picklist value with either the sender's address, org-wide email addresses, or Email-to-Case routing address. The email address must be verified. If the sender’s email address is used, the sender must be the current user.ValidatedFromAddress isn’t suitable for use in Group By or Sort By statements. Use FromAddress instead. |

## Usage

EmailMessage is limited to 50 custom fields.

If your org uses Email-to-Case, a case is created when an email is sent to one of your company’s addresses. The email, which is related to the case by the ParentID field, is stored as an EmailMessage record. When users view the email, they see the EmailMessage record.

If your org uses Enhanced Email, each email is stored as an EmailMessage record and a Task record. When users view an email, they see the EmailMessage record.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

In an org with Email-to-Case enabled, an inbound (Incoming = true) email with case as the parent record won’t create a task automatically. This functionality respects the Create Task from Email setting for each Email-to-Case routing address.

If you would like to change the recipients or contents of an outbound email, don’t use automation tools, like Flows or Apex triggers, to update EmailMessage records. Unless they are for a draft, updates to EmailMessage records will not be reflected in the actual sent email. To update an email’s data before it’s sent, use Quick Action predefined values or a [QuickActionDefaultsHandler](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_QuickAction_QuickActionDefaultsHandler.htm).

When a Flow creates an EmailMessage with set values in the audit fields (like CreatedBy and CreatedDate), any FeedItem automatically created for that EmailMessage will not share the same audit field values.

## Sample Code—Apex

This sample logs email activity in Salesforce.

```

```

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EmailMessageChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

#### See Also

-   [Case](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_case.htm "Represents a case, which is a customer issue or problem.")

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Code Examples

```
// if EnhancedEmail Perm is not enabled, continue logging the email as a task

// if EnhancedEmail Perm is enabled, create an EmailMessage object
EmailMessage emailMessage = new EmailMessage();
emailMessage.status = '3'; // email was sent
emailMessage.relatedToId = '006B0000003weZGIAY'; // related to record e.g. an opportunity
emailMessage.fromAddress = 'sender@example.com'; // from address
emailMessage.fromName = 'Dan Perkins'; // from name
emailMessage.subject = 'This is the Subject!'; // email subject
emailMessage.htmlBody = '<html><body><b>Hello</b></body></html>'; // email body
// Contact, Lead or User Ids of recipients
String[] toIds = new String[]{'003B000000AxcEjIAJ'}; 
emailMessage.toIds = toIds;
// additional recipients who don’t have a corresponding contact, lead or user id in the Salesforce org (optional)
emailMessage.toAddress = 'emailnotinsalesforce@toexample.com, anotherone@toexample.com';
insert emailMessage; // insert

// Add Email Message Relation for id of the sender
EmailMessageRelation emr = new EmailMessageRelation();
emr.emailMessageId = emailMessage.id;
emr.relationId = '005B0000003qHvOIAU'; // user id of the sender
emr.relationType = 'FromAddress';
insert emr;
```

## Related Topics

- EmailMessageChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- Case (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_case.htm)
- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
