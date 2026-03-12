---
title: "LoyaltyProgramMember"
domain: referral-marketing
topic: loyaltyprogrammember
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.199Z
estimatedTokens: 1989
keywords: [LoyaltyProgramMember, referral, program, advocate, API, version, 59.0, later, Calls, Associated, Objects]
---

# LoyaltyProgramMember

> Represents the details of a referral program advocate. This
      object is available in API version 59.0 and later.

# LoyaltyProgramMember

Represents the details of a referral program advocate. This object is available in API version 59.0 and later.

In a B2C referral program, existing customers can sign up as advocates of the referral program and refer their friends to the company. In a B2C referral program, existing partners can sign up as advocates of the referral program and refer businesses to the company

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of Business Account record for the B2B referral program's advocate. Specify the advocate’s AccountId only when the advocate’s membership type is Corporate.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| CanReceivePartnerPromotions | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionReserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation.The default value is false. |
| CanReceivePromotions | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the advocate wants to receive marketing communication about referral promotions (true) or not (false).The default value is false. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of Contact record for the B2C referral program's advocate. Specify the advocate’s ContactId only when the advocate’s membership type is Individual.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| EnrollmentChannel | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe channel that was used by the customer to enroll as an advocate of the referral program.Possible values are:CallCenter—Call CenterEmailFranchiseMobilePOSPartnerPrintSocialStoreWebThe default value is POS. |
| EnrollmentDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The date on which the advocate enrolled in the referral program. |
| IsEligibleForTierAssessment | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionReserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation.The default value is false. |
| LastActivityDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| MemberStatus | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Specifies the status of the advocate in the referral program.Possible values are:ActiveInactiveMerged—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation. |
| MemberType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. Specifies the advocate’s membership type.Possible values are:Corporate—Specify when an organization is enrolling in the referral program.Individual—Specify when a person in enrolling in the referral program.The default value is Individual. |
| MembershipEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the advocate’s referral program membership ends. |
| MembershipLastRenewalDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the advocate renewed their referral program membership. |
| MembershipNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe unique referral program membership number of the advocate. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the referral program that the advocate belongs to.This field is a relationship field.Relationship NameProgramRelationship TypeLookupRefers ToLoyaltyProgram |
| ReferralCode | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe referral code of the advocate. If you don’t specify a referral code, a code is automatically generated for the member. |
| ReferredById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Loyalty Program Member ID of the person or organization who has referred the advocate to join the referral program.This field is a relationship field.Relationship NameReferredByRelationship TypeLookupRefers ToLoyaltyProgramMember |
| RelatedCorporateMembershipId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Corporate type Loyalty Program Member record that belongs to the organization that the advocate belongs to.This field is a relationship field.Relationship NameRelatedCorporateMembershipRelationship TypeLookupRefers ToLoyaltyProgramMember |
| StatementFrequency | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the frequency at which the advocate’s referral statement must be generated.Possible values are:MonthlyQuarterlyThe default value is Monthly. |
| StatementLastGeneratedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the advocate’s referral statement was last generated. |
| StatementMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the methods that must be used to share the advocate’s referral statement with the advocate.Possible values are:EmailMailThe default value is Mail. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyProgramMemberHistory](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LoyaltyProgramMemberOwnerSharingRule](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[LoyaltyProgramMemberShare](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LoyaltyProgramMemberHistory (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm)
- LoyaltyProgramMemberOwnerSharingRule (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_ownersharingrule.htm)
- LoyaltyProgramMemberShare (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_share.htm)
