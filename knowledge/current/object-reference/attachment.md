---
title: "Attachment"
domain: object-reference
topic: attachment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:05.185Z
estimatedTokens: 2108
keywords: [Attachment, file, User, uploaded, attached, parent, Calls, Usage]
---

# Attachment

> Represents a file that a User has uploaded and attached to a parent
   object.

# Attachment

Represents a file that a User has uploaded and attached to a parent object.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Body | Typebase64PropertiesCreate, UpdateDescriptionRequired. Encoded file data. |
| BodyLength | TypeintPropertiesFilter, Group, Nillable, SortDescriptionSize of the file (in bytes). |
| ConnectionReceivedId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the PartnerNetworkConnection that shared this record with your organization. This field is available if you enabled Salesforce to Salesforce. |
| ConnectionSentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the PartnerNetworkConnection that you shared this record with. This field is available if you enabled Salesforce to Salesforce. This field is supported using API versions earlier than 15.0. In all other API versions, this field’s value is null. You can use the new PartnerNetworkRecordConnection object to forward records to connections. |
| ContentType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe content type of the attachment.If the Don't allow HTML uploads as attachments or document records security setting is enabled for your organization, you cannot upload files with the following file extensions: .htm, .html, .htt, .htx, .mhtm, .mhtml, .shtm, .shtml, .acgi, .svg.When you insert a document or attachment through the API, make sure that this field is set to the appropriate MIME type. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the attachment. Maximum size is 500 characters. This field is available in API version 18.0 and later. |
| IsEncrypted | This information is about Shield Platform Encryption and not Classic Encryption.TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the attachment is encrypted using Shield Platform Encryption (true) or not (false). This field is available in API version 34.0 and later. |
| IsPartnerShared | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this record is shared with a connection using Salesforce to Salesforce. Label is Is Shared With Partner. |
| IsPrivate | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this record is viewable only by the owner and administrators (true) or viewable by all otherwise-allowed users (false). During a create or update call, it is possible to mark an Attachment record as private even if you are not the owner. This can result in a situation in which you can no longer access the record that you just inserted or updated. Label is Private.Attachments on tasks or events can't be marked private. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of the attached file. Maximum size is 255 characters. Label is File Name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the User who owns the attachment. This field isn’t required for API version 9.0 or later.The owner of an attachment on a task or event must be the same as the owner of the task or event.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToCalendar, User |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the parent object of the attachment. The following objects are supported as parents of attachments:AccountAssetCampaignCaseContactContractCustom objectsEmailMessageEmailTemplateEventLeadOpportunityProduct2SolutionTaskThis is a polymorphic relationship field.Relationship NameParentRelationship TypeLookupRefers ToAccount, Accreditation, AssessmentIndicatorDefinition, AssessmentTask, AssessmentTaskContentDocument, AssessmentTaskDefinition, AssessmentTaskOrder, Asset, Award, BoardCertification, BusinessLicense, BusinessMilestone, BusinessProfile, Campaign, CareBarrier, CareBarrierDeterminant, CareBarrierType, CareDeterminant, CareDeterminantType, CareDiagnosis, CareMetricTarget, CareObservationComponent, CarePgmProvHealthcareProvider, CareProgram, CareProgramCampaign, CareProgramEligibilityRule, CareProgramEnrollee, CareProgramEnrolleeProduct, CareProgramEnrollmentCard, CareProgramGoal, CareProgramProduct, CareProgramProvider, CareProgramTeamMember, CareProviderAdverseAction, CareProviderFacilitySpecialty, CareRegisteredDevice, CareRequest, CareRequestDrug, CareRequestExtension, CareRequestItem, CareSpecialty, CareTaxonomy, Case, CommSubscription, CommSubscriptionChannelType, CommSubscriptionConsent, CommSubscriptionTiming, Contact, Contract, CreditMemo, DelegatedAccount, EmailMessage, EmailTemplate, EngagementChannelType, EnrollmentEligibilityCriteria, Event, HealthcareFacility, HealthcareFacilityNetwork, HealthcarePayerNetwork, HealthcarePractitionerFacility, HealthcareProvider, HealthcareProviderNpi, HealthcareProviderSpecialty, HealthcareProviderTaxonomy, IdentityDocument, Image, IndividualApplication, Invoice, Lead, Location, MemberPlan, Opportunity, Order, OtherComponentTask, PersonEducation, PersonLifeEvent, Product2, ProductRequest, ProductRequestLineItem, PurchaserPlan, ReceivedDocument, ServiceAppointment, ServiceResource, Shift, SocialPost, Solution, Task, Visit, VisitedParty, Visitor, VolunteerProject, WorkOrder, WorkOrderLineItem |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

If you are importing Attachment data and want to set the value for an audit field, such as CreatedDate, contact Salesforce. For example, for compliance reasons, you may prefer to set the CreatedDate to the date the record was originally created in your system, rather than the date it was imported into Salesforce. Audit fields are automatically updated during API operations unless you request to set these fields yourself.

## Usage

The API sends and receives the binary file attachment data encoded as a base64Binary data type. Before creating a record, client applications must encode the binary attachment data as base64. Upon receiving a response, client applications must decode the base64 data to binary (this conversion is usually handled for you by the SOAP client).

The create call restricts these files to a maximum size of 25 MB. For a file attached to a Solution, the limit is 1.5 MB. The maximum email attachment size is 3 MB.

The API supports attachments on email in create, delete, or update calls. The query call does not return attachments parented by email, unless the user performing the query has the “Modify All Data” permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

-   Attachment records are not searched during text searches.
-   When issued by an administrator, the query results include Attachment records from the Recycle Bin.
-   When issued by a non-administrator, the queryAll() call results do not include Attachment records from the Recycle Bin.

Access to fields depends on the method being used:

-   All of the fields are accessible using the describeSObjects() and query() calls. With the create() call, you can insert the Name, ParentId, Body, IsPrivate, and OwnerId fields.
-   To modify existing records, the update() call gives you access to change the Name, Body, IsPrivate, and OwnerId fields.
-   You can access all of the fields using a query() call. However, you can't receive the Body field for multiple records in a single query() call. If your query returns the Body field, your client application must ensure that only one row with one Attachment is returned; otherwise, an error occurs. A more effective approach is to return IDs (but not Attachment records in the Body field) from a query() call and then pass them into retrieve() calls that return the Body field.
-   For information about accessing the attachments of archived activities, see Archived Activities.

#### See Also

-   [Note](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_note.htm "Represents a note, which is text associated with a custom object or a standard object, such as a Contact, Contract, or Opportunity.")

## Related Topics

- Note (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_note.htm)
