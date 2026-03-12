---
title: "FinServ_FinancialAccountRole__c"
domain: financial-services-cloud-object-reference
topic: finservfinancialaccountrolec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.142Z
estimatedTokens: 845
keywords: [FinServ_FinancialAccountRole__c, role, occupied, person, organizational, entity, involved, financial, account, beneficiary, trustee, FinServ, _FinancialAccountRole, Calls]
---

# FinServ_FinancialAccountRole__c

> Represents the role occupied by a person or organizational entity
            that is involved with a financial account, such as a beneficiary or
        trustee.

# FinServ\_FinancialAccountRole\_\_c

Represents the role occupied by a person or organizational entity that is involved with a financial account, such as a beneficiary or trustee.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the organizational entity or person currently occupies this role (true) or not (false). |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies is enabled, contains the currency ISO code associated with the record. |
| Editable__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this field is editable (true) or not (false). |
| EndDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnd date when the organizational entity or person relinquished this role. |
| FinancialAccount__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionFinancial account that this role is related to. |
| Name | TypestringPropertiesDefaulted on create, Filter, idLookup, SortDescriptionName of the financial account role. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record type associated with this financial account role. |
| RelatedAccount__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the organizational entity that is involved with the financial account. |
| RelatedContact__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the person who is involved with the financial account. |
| Role__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRole that describes how the organizational entity or person is involved with the financial account.Don’t manually update the role to either primary owner or secondary owner, because these roles are automatically assigned based on the primary owner and joint owner of the corresponding financial account record.Valid values:When the record type is set to Account Role:AccountantAdditional OwnerAdministratorAdvisorAnnuitantAppoint / Remove AuthorityAuthorized AgentAuthorized Agent / Beneficial OwnerAuthorized IndividualAuthorized SignerBeneficiaryBusiness ManagerCommittee MemberConservatorControl PersonCorporationCustodianDeceased GrantorDecedentDiscretionaryFoundationFull AuthorityGrantorGuardianInsuredInterested PartyMinor Primary OwnerOriginal DepositorOtherPower of AttorneyProprietorTOD BeneficiaryTrusteePrimary OwnerJoint OwnerWhen the record type is set to Contact Role:AccountantBeneficial OwnerBeneficiaryBusiness ManagerGrantorTrustee |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the role in an external data source. |
| StartDate__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionStart date when the organizational entity or person assumed this role. The default value is the current date. |
