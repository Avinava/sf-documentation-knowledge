---
title: "LoyaltyProgramMember"
domain: loyalty
topic: loyaltyprogrammember
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.249Z
estimatedTokens: 1823
keywords: [LoyaltyProgramMember, member, belongs, loyalty, program, individual, corporate, API, version, 51.0, later, Calls, Associated, Objects]
---

# LoyaltyProgramMember

> Represents information about member who belongs to a loyalty program.
      The member can be individual or corporate type. This object is available in API version
    51.0 and later.

# LoyaltyProgramMember

Represents information about member who belongs to a loyalty program. The member can be individual or corporate type. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the account with which the loyalty program member is associated. This field is optional for a Group type member.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| CanReceivePartnerPromotions | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the member can receive partner promotions for the program (true) or not (false). |
| CanReceivePromotions | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the member can receive promotions for the program (true) or not (false). |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the contact with which the loyalty program member is associated. This field is optional for a Group type member.This is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| EnrollmentChannel | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionChannel through which membership is enrolled.Possible values are:CallCenterEmailFranchiseMobilePartnerPOSPrintSocialStoreWeb |
| EnrollmentDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Date when the member enrolled to the loyalty program. |
| GroupCreatedByMemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe Individual or Corporate type loyalty program member who created the group or requested for the group to be created. This field is available in API version 53.0 and later.This is a relationship field.Relationship NameGroupCreatedByMemberRelationship TypeLookupRefers ToLoyaltyProgramMember |
| GroupName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the group when the type of membership in the loyalty program is Group. This field is available in API version 53.0 and later. |
| IsEligibleForTierAssessment | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the member is eligible for tier assessment. A member is eligible for tier assessment when there is a change in their qualifying points balance. This field is available in API version 58.0 and later.The default value is false. |
| LastActivityDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the loyalty program member last performed a transaction. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| MemberStatus | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The status of the member in the loyalty program.Possible values are:ActiveInactiveMerged—This value is available in API version 56.0 and later. |
| MemberType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. The type of membership in the loyalty program.Possible values are:CorporateGroupIndividual |
| MembershipEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the membership ends. |
| MembershipLastRenewalDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe most recent date when the membership was renewed. |
| MembershipNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe membership number of the loyalty program. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the loyalty program.This is a relationship field.Relationship NameProgramRelationship TypeLookupRefers ToLoyaltyProgram |
| ReferralCode | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe code that the member can share with others who want to join the loyalty program. If no referral code is entered during enrollment, an automatic referral code is generated for the member. This field is available in API version 57.0 and later. |
| ReferredById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to Member who referred to the program.This is a relationship field.Relationship NameReferredByRelationship TypeLookupRefers ToLoyaltyProgramMember |
| RelatedCorporateMembershipId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe related corporate membership ID of the loyalty program.This is a relationship field.Relationship NameRelatedCorporateMembershipRelationship TypeLookupRefers ToLoyaltyProgramMember |
| StatementFrequency | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe frequency of loyalty balance statements.Possible values are:MonthlyQuarterly |
| StatementLastGeneratedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the statement is last generated. |
| StatementMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe mode of loyalty balance statements.Possible values are:EmailMail |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyProgramMemberChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[LoyaltyProgramMemberHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[LoyaltyProgramMemberOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[LoyaltyProgramMemberShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
