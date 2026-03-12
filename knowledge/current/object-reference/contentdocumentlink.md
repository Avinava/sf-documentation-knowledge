---
title: "ContentDocumentLink"
domain: object-reference
topic: contentdocumentlink
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.087Z
estimatedTokens: 2740
keywords: [ContentDocumentLink, link, Salesforce, CRM, Content, document, file, ContentNote, it's, shared, users, groups, records, libraries, versions]
---

# ContentDocumentLink

> Represents the link between a Salesforce CRM Content document, Salesforce file, or ContentNote and where it's shared. A file can be shared with other users, groups,
			records, and Salesforce CRM Content libraries. This object is available in versions 21.0 and later for Salesforce CRM Content documents and Salesforce Files.

# ContentDocumentLink

Represents the link between a Salesforce CRM Content document, Salesforce file, or ContentNote and where it's shared. A file can be shared with other users, groups, records, and Salesforce CRM Content libraries. This object is available in versions 21.0 and later for Salesforce CRM Content documents and Salesforce Files.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

-   In API versions 59.0 and later, enable the Query All Files permission to query without a filter on id, LinkedEntityId, and documentID fields. The View All Data permission is required to enable Query All Files.
-   In API versions 33.0 and later, you can create and delete ContentDocumentLink objects with a LinkedEntityId of any record type that can be tracked in the feed, even if feed tracking is disabled for that record type.
-   In API versions 25.0 and later, you can create ContentDocumentLink objects with a LinkEntityId of type User, CollaborationGroup, or Organization.
-   In API versions 21.0 and later, users with explicit Viewer access (the file has been directly shared with the user) to a file can delete ContentDocumentLink objects between the file and other users who have Viewer access. In the same API versions, any user with Viewer access to a file can delete ContentDocumentLink objects between the file and organizations or groups of which they are a member.
-   For orgs with Digital Experiences enabled, a document can only be shared with users and groups that are a part of the Experience Cloud site the file was created in.

## Fields

| Field | Details |
| --- | --- |
| ContentDocumentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the document.This is a relationship field.Relationship NameContentDocumentRelationship TypeLookupRefers ToContentDocument |
| LinkedEntityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the linked object. Can include Chatter users, groups, records (any that support Chatter feed tracking including custom objects), and Salesforce CRM Content libraries.Using the API only, you can relate notes to custom settings.This is a polymorphic relationship field.Relationship NameLinkedEntityRelationship TypeLookupRefers ToAccount, Accreditation, ActivationTarget, ActivationTrgtIntOrgAccess, ApiAnomalyEventStore, AssessmentIndicatorDefinition, AssessmentTask, AssessmentTaskContentDocument, AssessmentTaskDefinition, AssessmentTaskIndDefinition, AssessmentTaskOrder, Asset, AssetRelationship, AssignedResource, Award, BoardCertification, BusinessLicense, BusinessMilestone, BusinessProfile, Campaign, CareBarrier, CareBarrierDeterminant, CareBarrierType, CareDeterminant, CareDeterminantType, CareDiagnosis, CareInterventionType, CareMetricTarget, CareObservation, CareObservationComponent, CarePgmProvHealthcareProvider, CarePreauth, CarePreauthItem, CareProgram, CareProgramCampaign, CareProgramEligibilityRule, CareProgramEnrollee, CareProgramEnrolleeProduct, CareProgramEnrollmentCard, CareProgramGoal, CareProgramProduct, CareProgramProvider, CareProgramTeamMember, CareProviderAdverseAction, CareProviderFacilitySpecialty, CareProviderSearchableField, CareRegisteredDevice, CareRequest, CareRequestDrug, CareRequestExtension, CareRequestItem, CareSpecialty, CareSpecialtyTaxonomy, CareTaxonomy, Case, CodeSet, CollaborationGroup, CommSubscription, CommSubscriptionChannelType, CommSubscriptionConsent, CommSubscriptionTiming, ConsumptionSchedule, Contact, ContactEncounter, ContactEncounterParticipant, ContentWorkspace, Contract, ConversationEntry, CoverageBenefit, CoverageBenefitItem, CredentialStuffingEventStore, CreditMemo, CreditMemoLine, Dashboard, DashboardComponent, DataStream, DelegatedAccount, DocumentChecklistItem, EmailMessage, EmailTemplate, EngagementChannelType, EnhancedLetterhead, EnrollmentEligibilityCriteria, Event, HealthcareFacility, HealthcareFacilityNetwork, HealthcarePayerNetwork, HealthcarePractitionerFacility, HealthcareProvider, HealthcareProviderNpi, HealthcareProviderSpecialty, HealthcareProviderTaxonomy, Identifier, Image, IndividualApplication, Invoice, InvoiceLine, Lead, ListEmail, Location, MarketSegment, MarketSegmentActivation, MemberPlan, MessagingSession, MktCalculatedInsight, OperatingHours, Opportunity, Order, OrderItem, Organization, OtherComponentTask, OutgoingEmail, PartyConsent, PersonEducation, PersonLanguage, PersonLifeEvent, PersonName, PlanBenefit, PlanBenefitItem, Product2, ProductFulfillmentLocation, ProductItem, ProductItemTransaction, ProductRequest, ProductRequestLineItem, ProductRequired, ProductTransfer, ProfileSkill, ProfileSkillEndorsement, ProfileSkillUser, ProviderSearchSyncLog, PurchaserPlan, PurchaserPlanAssn, ReceivedDocument, Report, ReportAnomalyEventStore, ResourceAbsence, ResourcePreference, ReturnOrder, ReturnOrderLineItem, ServiceAppointment, ServiceResource, ServiceResourceSkill, ServiceTerritory, ServiceTerritoryMember, ServiceTerritoryWorkType, SessionHijackingEventStore, Shift, Shipment, ShipmentItem, Site, SkillRequirement, SocialPost, Solution, Task, ThreatDetectionFeedback, Topic, User, Visit, VisitedParty, Visitor, VoiceCall, VolunteerProject, WorkBadgeDefinition, WorkOrder, WorkOrderLineItem, WorkType, WorkTypeGroup, WorkTypeGroupMember |
| ShareType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. The permission granted to the user of the shared file in a library. This is determined by the permission the user already has in the library. This field is available in API version 25.0 and later.VViewer permission. The user can explicitly view but not edit the shared file.CCollaborator permission. The user can explicitly view and edit the shared file. You can retrieve the ShareType for ContentDocumentLink, but you can't create a ContentDocumentLink with a ShareType of C from an Apex trigger.IInferred permission. The user’s permission is determined by the related record. For shares with a library, this is defined by the permissions the user has in that library. Inferred permission on shares with libraries and file owners is available in API versions 21.0 and later. Inferred permission on shares with standard objects is available in API versions 36.0 and later. |
| Visibility | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether this file is available to all users, internal users, or shared users. This field is available in API version 26.0 and later.Visibility can have the following values.AllUsers—The file is available to all users who have permission to see the file.InternalUsers—The file is available only to internal users who have permission to see the file.SharedUsers—The file is available to all users who can see the feed to which the file is posted. SharedUsers is used only for files shared with users, and is available only when an org has private org-wide sharing on by default. The SharedUsers value is available in API version 32.0 and later.Note the following exceptions for Visibility.AllUsers & InternalUsers values apply to files posted on standard and custom object records, but not to users, groups, or content libraries.For posts to a record feed, Visibility is set to InternalUsers for all internal users by default.External users can set Visibility only to AllUsers.On user and group posts, only internal users can set Visibility to InternalUsers.For posts to a user feed, if the organization-wide default for user sharing is set to private, Visibility is set to SharedUsers.Only internal users can update Visibility.Visibility can be updated on links to files posted on standard and custom object records, but not to users, groups, or content libraries.Visibility is updatable in API version 43.0 and later.The visibility setting on ContentDocumentLink determines a file’s visibility on a record post. When a file has multiple references posted in a feed, the file’s visibility is determined by the most visible setting. |

## Usage

Use this object to query the locations where a file is shared or query which files are linked to a particular location. For example, the following query returns a particular document shared with a Chatter group:

```

```

-   You can't run a query without filters against ContentDocumentLink.
-   You can't filter on ContentDocument fields if you're filtering by ContentDocumentId. You can only filter on ContentDocument fields if you're filtering by LinkedEntityId.
-   You can't filter on the related object fields. For example, you can't filter on the properties of the account to which a file is linked. You can filter on the properties of the file, such as the title field.

A SOQL query must filter on one of Id, ContentDocumentId, or LinkedEntityId.

The ContentDocumentLink object supports triggers before and after these operations: insert, update, delete. A ContentDocumentLink trigger executes whenever there is an addition or deletion of the ContentDocumentLink. When a file is deleted, a ContentDocument delete trigger executes, but the cascaded ContentDocumentLink delete does not trigger ContentDocumentLink triggers.

## Example

This trigger for the ContentDocumentLink object prevents public XLSX files from being shared.

```

```

The trigger calls this helper class.

```

```

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Apex has a per organization limit of 10 concurrent requests that last longer than 5 seconds. A trigger that uploads files, like bulk ContentVersion creation, can easily hit the SOQL queries limit.

## Associated Objects

This object has the following associated objects. Unless noted, associated objects are available in the same API version as this object.

[ContentDocumentLinkChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 55.0)

Change events are available for the object.

#### See Also

-   [ContentDocument](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdocument.htm "Represents a document that was uploaded to a library in Salesforce Files or Salesforce CRM content. This object is available in versions 17.0 and later for Salesforce CRM.This object is available in API version 21.0 and later for Salesforce Files.")

## Code Examples

```
SELECT ContentDocument.title FROM ContentDocumentLink WHERE ContentDocumentId = '069D00000000so2' AND LinkedEntityId = '0D5000000089123'
```

```
trigger NoShareXLSX on ContentDocumentLink (after insert) {
    for (ContentDocumentLink cdl : trigger.new) {
        if (!CDLHelper.isSharingAllowed(cdl)) {
            cdl.addError('Sorry, you cannot share this file.');
        }
    }
}
```

```apex
public class CDLHelper {

    /**
     * Gets FileExtension of the inserted content.
     */
    public static String getFileExtension(ContentDocumentLink cdl) {
        String fileExtension;
        String docId = cdl.ContentDocumentId;
        FileExtension = [select FileExtension from ContentVersion where ContentDocumentId = :docId].get(0).FileExtension;
        return FileExtension;
    }

    /**
     * Checks the file's PublishStatus and FileExtension to decide whether user can share the file with others.
     * PublishStatus 'P' means the document is in a public library.
     */
    public static boolean isSharingAllowed(ContentDocumentLink cdl) {
        String docId = cdl.ContentDocumentId;
        ContentVersion version = [select PublishStatus,FileExtension from ContentVersion where ContentDocumentId = :docId].get(0);
        if (version.PublishStatus.equals('P') && (version.FileExtension != null && version.FileExtension.equals('xlsx'))) {
            return false;
        }
        return true;
    }

    /**
     * Gets the parent account name if the file is linked to an account.
     */
    public static String getAccountName(ContentDocumentLink cdl) {
        String name;
        String id = cdl.LinkedEntityId;
        if (id.substring(0,3) == '001') {
            name = [select Name from Account where Id = :id].get(0).Name;
        } 
        return name;
    }
}
```

## Related Topics

- ContentDocumentLinkChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ContentDocument (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdocument.htm)
