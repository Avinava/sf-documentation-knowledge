---
title: "ApplicantApplicantRelation"
domain: financial-services-cloud-object-reference
topic: applicantapplicantrelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.388Z
estimatedTokens: 1826
keywords: [ApplicantApplicantRelation, relationship, applicants, applicant, either, business, entity, individual, API, version, 61.0, later, Calls, Associated, Objects]
---

# ApplicantApplicantRelation

> Represents the relationship between applicants, where an applicant can be
         either a business entity or an individual. This object is available in API version
      61.0 and later.

# ApplicantApplicantRelation

Represents the relationship between applicants, where an applicant can be either a business entity or an individual. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRepresents information about a group that is applying.This field is a relationship field.Relationship NameApplicantRelationship TypeLookupRefers ToApplicant |
| ApplicantRole | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies how the applicant organization is associated with the related applicant.Possible values are:ParentSubsidiary |
| DecisionMakingAuthorityType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the type of the decision-making authority.Possible values are:Authorized SignatoryBoard MemberSenior Managing Official |
| DeclarationType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the formal manner or approach used to officially state the stakeholder's role or position.Possible values are:Official RegisterPrimary ResearchSelf declarationThird PartyVerified |
| IsDecisionMakingAuthority | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the stakeholder is a decision-making authority (true) or not (false).The default value is false. |
| IsShareholder | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the stakeholder is a shareholder (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-number identifier for the relationship. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the relationship record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record type associated with the relationship.This field is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| RelatedApplicantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe individual or group that's associated with the applicant.This field is a relationship field.Relationship NameRelatedApplicantRelationship TypeLookupRefers ToApplicant |
| RelatedApplicantRole | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies how the related applicant is associated with the applicant organization.Possible values are:SubsidiaryParentCEOCFO |
| ShareholderHierarchyLevel | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the hierarchical level between the account and the intermediate shareholder. The shareholder hierarchy level is applicable only to an intermediate share holder. |
| ShareholderHierarchyRole | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the shareholder's ownership type.Possible values are:Domestic Ultimate OwnerImmediate ShareholderIntermediate ShareholderUltimate Beneficial Owner |
| ShareholderType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the type of the shareholder.Possible values are:ShareholdingVoting RightsBeneficiary of a TrustSole ProprietorPartner |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the relationship between the applicant and the related applicant started. |
| TotalSharePercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total percentage of shares owned by the stakeholder, combining both direct and indirect ownership. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApplicantApplicantRelationChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ApplicantApplicantRelationFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ApplicantApplicantRelationHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ApplicantApplicantRelationOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ApplicantApplicantRelationShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ApplicantApplicantRelationChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ApplicantApplicantRelationFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ApplicantApplicantRelationHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ApplicantApplicantRelationOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ApplicantApplicantRelationShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
