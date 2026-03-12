---
title: "SurveySubject"
domain: object-reference
topic: surveysubject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.588Z
estimatedTokens: 867
keywords: [SurveySubject, relationship, survey, another, account, case, Calls, Associated, Objects]
---

# SurveySubject

> Represents a relationship between a survey and another object, such
			as an account or a case.

# SurveySubject

Represents a relationship between a survey and another object, such as an account or a case.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the SurveySubject record was last referenced by another object. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed the SurveySubject record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the SurveySubject record. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionUnique identifier of the SurveyInvitation object or SurveyResponse object that is associated with this survey-object relationship.Relationship NameParentRelationship TypeLookupRefers ToSurveyInvitation, SurveyResponse |
| SubjectEntityType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionObject that the survey is associated with. Possible values include:AccountAssetBankerBranchUnitBranchUnitBusinessMemberBranchUnitCustomerBusinessLicenseApplicationBusinessMilestoneCampaignCareProgramCaseClaimClaimParticipantContactEmployeeEventIncidentIndividualApplicationInsurancePolicyInsurancePolicyParticipantLeadLearningItemSubmission—Available in API version 58.0 and later.LiveChatTranscriptLoyaltyProgramLoyaltyProgramMemberLoyaltyProgramPartnerMaterialityStakeholderMessagingSessionOpportunityOrderPersonalLifeEventProducerProduct2PromotionRebateProgramRetailStoreServiceAppointmentServiceResourceSolutionTaskTransactionJournalUserVideoCallVisitVoiceCallVolunteerProjectWorkOrderCustom Objects |
| SubjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the object that’s associated with the survey. |
| SurveyId | TypereferencePropertiesFilter, Group, SortDescriptionUnique identifier of the survey that’s associated with the record that’s represented by SubjectId. |
| SurveyInvitationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier of the survey invitation that's associated with another object. |
| SurveyResponseId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier of the survey response that's associated with another object. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SurveySubjectChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Related Topics

- SurveySubjectChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
