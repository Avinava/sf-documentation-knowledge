---
title: "Financial Services Cloud Custom Validation Rules"
domain: financial-services-cloud-object-reference
topic: financial-services-cloud-custom-validation-rules
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.770Z
estimatedTokens: 2113
namespace: FinServ
keywords: [Financial, Services, Cloud, Custom, Validation, Rules, ensure, integrity, data]
---

# Financial Services Cloud Custom Validation Rules

> Custom validation rules ensure the integrity of your Financial Services Cloud
  data.

**Namespace:** `FinServ`

# Financial Services Cloud Custom Validation Rules

Custom validation rules ensure the integrity of your Financial Services Cloud data.

Custom validation rules use the FinServ namespace prefix. For example, FinServ\_\_NonPortalUserReferrer is a custom validation rule on Account that validates that internal referrers are Salesforce users.

| Validation Rule Name | Host Object | Default Status |
| --- | --- | --- |
| NonPortalUserReferrer | Account | Active |
| NotAllowingConversionFromIndividual (retired) | Account | Inactive |
| NotAllowingConversionToIndividual (retired) | Account | Inactive |
| SingleReferredByEntryByRecord | Account | Active |
| AARCanOnlyBeDeactivated | AccountAccountRelation | Active |
| AccountAndRelatedAccountCannotBeSame | AccountAccountRelation | Active |
| AccountCannotBeAnIndividual | AccountAccountRelation | Active |
| CannotCreateInactiveRecord | AccountAccountRelation | Active |
| InactiveAARCannotBeEdited | AccountAccountRelation | Active |
| NoJointOwnerForIndividualAccounts | AssetsAndLiabilities | Active |
| PrimaryAndJointOwnerCannotBeSame | AssetsAndLiabilities | Active |
| BirthdateCannotBeInFuture | Contact | Active |
| CannotHaveMoreThanOnePrimaryAddress | Contact | Active |
| ContactCannotBeAssociatedToHousehold | Contact | Active |
| IndividualCannotHaveMoreThanOneContact (retired) | Contact | Inactive |
| NonPortalUserReferrer | Contact | Active |
| NotAllowingConversionFromIndividual (retired) | Contact | Inactive |
| NotAllowingConversionToIndividual (retired) | Contact | Inactive |
| SingleReferredByEntryByRecord | Contact | Active |
| CannotCreateInactiveRecord | ContactContactRelation | Active |
| CCRCanOnlyBeDeactivated | ContactContactRelation | Active |
| ContactAndRelatedContactCannotBeSame | ContactContactRelation | Active |
| InactiveCCRCannotBeEdited | ContactContactRelation | Active |
| YearOfGradCannotBeInFuture | Education | Active |
| EndDateCannotBeInFuture | Employment | Active |
| StartDateCannotBeInFuture | Employment | Active |
| StartDateCannotBeLaterThanEndDate | Employment | Active |
| ManagedAndHeldAwayCannotBeBothSelected | FinancialAccount | Active |
| NoJointOwnerForIndividualAccounts | FinancialAccount | Active |
| PrimaryAndJointOwnerCannotBeSame | FinancialAccount | Active |
| CannotCreateInactiveRecord | FinancialAccountRole | Active |
| FARCannotBeModified | FinancialAccountRole | Active |
| InactiveFARCannotBeEdited | FinancialAccountRole | Active |
| InactiveRecordCannotBeReactivated (retired) | FinancialAccountRole | Active |
| OwnershipRolesCannotBeDeactivated | FinancialAccountRole | Active |
| OwnershipRolesCannotBeModified (retired) | FinancialAccountRole | Active |
| RelatedAccountOrContactRequired | FinancialAccountRole | Active |
| RoleIsMandatory | FinancialAccountRole | Active |
| ExpDateCannotBeLaterThanStart | IdentificationDocument | Active |
| IssueDateCannotBeInFuture | IdentificationDocument | Active |
| VerificationDateTimeCannotBeInFuture | IdentificationDocument | Active |
| NonPortalUserReferrer | Lead | Active |
| SingleReferredByEntryByRecord | Lead | Active |
| NonPortalUserReferrer | Opportunity | Active |
| SingleReferredByEntryByRecord | Opportunity | Active |
| ProhibitUpdates | ReciprocalRole | Active |
| AccountOrFinancialAccountRequired | Revenue | Active |

| Object | Validation Rule Details |
| --- | --- |
| Account | NonPortalUserReferrer: Validation fails if the value of the UserType field on the ReferredByUser is not Standard.NotAllowingConversionFromIndividual (retired): This validation rule has been retired.NotAllowingConversionToIndividual (retired): This validation rule has been retired.SingleReferredByEntryByRecord: Validation fails if both ReferredByUser__c and ReferredByContact__c are not blank. |
| AccountAccountRelation | AARCanOnlyBeDeactivated: Validation fails if Account__c or RelatedAccount__c is changed on an existing record.AccountAndRelatedAccountCannotBeSame: Validation fails if Account__c is the same as RelatedAccount__c.AccountCannotBeAnIndividual: : Validation fails if the IndividualType__c field on the account or related account is set to Individual.CannotCreateInactiveRecord: : Validation fails if a record is marked inactive when created.InactiveAARCannotBeEdited: Validation fails if a user tries to edit an existing record that’s marked inactive. |
| AssetsAndLiabilities | NoJointOwnerForIndividualAccounts: Validation fails if the JointOwner__c field is not blank andOwnership__c field value is Individual.PrimaryAndJointOwnerCannotBeSame: Validation fails if the PrimaryOwner__c is the same as the JointOwner__c. |
| Contact | BirthdateCannotBeInFuture: Validation fails if birthdate__c is in the future.CannotHaveMoreThanOnePrimaryAddress: Validation fails if more than one address (mailing, billing, shipping, or other) is marked as primary.ContactCannotBeAssociatedToHousehold: Validation fails if account record type is IndustriesHousehold.IndividualCannotHaveMoreThanOneContact (retired): This validation rule has been retired.NonPortalUserReferrer: Validation fails if the value of the UserType field on the ReferredByUser is not Standard.NotAllowingConversionFromIndividual (retired): This validation rule has been retired.NotAllowingConversionToIndividual (retired): This validation rule has been retired.SingleReferredByEntryByRecord: Validation fails if both ReferredByUser__c and ReferredByContact__c are not blank. |
| ContactContactRelation | CannotCreateInactiveRecord: Validation fails if a record is marked inactive when created.CCRCanOnlyBeDeactivated: Validation fails if the contact, related contact, or role is changed on an existing record.ContactAndRelatedContactCannotBeSame: Validation fails if the contact is the same as the related contact.InactiveCCRCannotBeEdited: Validation fails if a user tries to edit an existing record that’s marked inactive. |
| Education | YearOfGradCannotBeInFuture: Validation fails if the year of GraduationDate__c is after this year. |
| Employment | EndDateCannotBeInFuture: Validation fails if EndDate__c is after today.StartDateCannotBeInFuture: Validation fails if StartDate__c is after today.StartDateCannotBeLaterThanEndDate: Validation fails if StartDate__c is later than EndDate__c. |
| FinancialAccount | ManagedAndHeldAwayCannotBeBothSelected: Validation fails if both Managed__c and HeldAway__c are checked.NoJointOwnerForIndividualAccounts: Validation fails if JointOwner__cis not blank and Ownership__c is Individual.PrimaryAndJointOwnerCannotBeSame: Validation fails if PrimaryOwner__c is the same as JointOwner__c. |
| FinancialAccountRole | CannotCreateInactiveRecord: Validation fails if the EndDate__c is blank and the record is inactive.FARCannotBeModified: Validation fails if RelatedAccount__c, RelatedContact__c, FinancialAccount__c, or Role__c is changed on an existing record.InactiveFARCannotBeEdited: Validation fails when any edits are made to an existing inactive record.InactiveRecordCannotBeReactivated (retired): This validation rule has been retired.OwnershipRolesCannotBeDeactivated: Validation fails if an inactive record is updated to active.OwnershipRolesCannotBeModified (retired): This validation rule has been retired.RelatedAccountOrContactRequired: Validation fails if RelatedAccount__c and RelatedContact__c are both blank.RoleIsMandatory: Validation fails if Role is blank. |
| IdentificationDocument | ExpDateCannotBeLaterThanStart: Validation fails if IssueDate__c is after the ExpirationDate__c.IssueDateCannotBeInFuture: Validation fails if IssueDate__c is after today.VerificationDateTimeCannotBeInFuture: Validation fails if VerificationOn__c is in the future. |
| Lead | NonPortalUserReferrer: Validation fails if the value of the UserType field on the ReferredByUser is not Standard.SingleReferredByEntryByRecord: Validation fails if ReferredByUser__c and ReferredByContact__c are both blank or both not blank. |
| Opportunity | NonPortalUserReferrer: Validation fails if the value of the UserType field on the ReferredByUser is not Standard.SingleReferredByEntryByRecord: Validation fails if both ReferredByUser__c and ReferredByContact__c are not blank. |
| ReciprocalRole | ProhibitUpdates: Validation fails if CreateInverseRole__c, Name, InverseRole__c, or RecordTypeId is changed. |
| Revenue | AccountOrFinancialAccountRequired: Validation fails if Account__c and FinancialAccount__c are both blank or both not blank. |
