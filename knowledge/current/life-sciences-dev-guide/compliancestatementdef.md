---
title: "ComplianceStatementDef"
domain: life-sciences-dev-guide
topic: compliancestatementdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:59.741Z
estimatedTokens: 967
keywords: [ComplianceStatementDef, ensure, adherence, regulatory, requirements, health, care, provider, engagements, Stores, essential, compliance, that's, across, multiple, cases, including, visits, consent, capture, statements, configured, require, acknowledgement, purely, informational, Their, intended, audience, vary, accounts, engaged, end, user, themselves]
---

> Used to ensure adherence to regulatory requirements during health care
         provider engagements. Stores essential compliance information that's displayed across
         multiple use cases, including visits and consent capture. Compliance statements can be
         configured to require acknowledgement, have an optional acknowledgement, or be purely
         informational. Their intended audience can vary from the accounts that are being engaged
         with to the end user themselves.

# ComplianceStatementDef

Used to ensure adherence to regulatory requirements during health care provider engagements. Stores essential compliance information that's displayed across multiple use cases, including visits and consent capture. Compliance statements can be configured to require acknowledgement, have an optional acknowledgement, or be purely informational. Their intended audience can vary from the accounts that are being engaged with to the end user themselves.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DisplayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDisplay order of statements when there are multiple for a given context. |
| FilterAttributeValues | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAttributes to filter compliance statements such as target audience location or language. |
| JurisdictionCountries | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionRepresents the jurisdiction countries to which the compliance statement is applicable. |
| JurisdictionType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRepresents the jurisdiction type to which the compliance statement is applicable.Possible values are:CityCountryState |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| ModuleType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the module for which the expense type is available.Possible values are:ConsentMedicalInquiryProviderVisitRemoteEngagement |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of compliance statement record. Auto-number is populated. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner or creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
| StatementRequirementLevel | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequirement level for the compliance agreements.Possible values are:NoneOptionalRequiredThe default value is None. |
| StatementText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionCompliance statement text. |
| StatementType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of compliance statements.Possible values are:ComplianceAgreementComplianceNoteDisclaimerTermsAndConditionsThe default value is ComplianceNote. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRepresents the cloud using the object. This is a read-only field and you can't specify or update its value.Possible values are:LifeSciences |
