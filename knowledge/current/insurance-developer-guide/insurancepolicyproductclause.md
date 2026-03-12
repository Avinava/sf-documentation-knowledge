---
title: "InsurancePolicyProductClause"
domain: insurance-developer-guide
topic: insurancepolicyproductclause
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.142Z
estimatedTokens: 1065
keywords: [InsurancePolicyProductClause, clauses, associated, products, applicable, specific, insurance, policy, record, clause, product, API, version, 65.0, later]
---

# InsurancePolicyProductClause

> Represents all clauses associated with the products that are applicable to a
         specific insurance policy. The object contains one record for each clause associated with a
         product that is applicable to a policy.  This object is available in API version 65.0
      and later.

# InsurancePolicyProductClause

Represents all clauses associated with the products that are applicable to a specific insurance policy. The object contains one record for each clause associated with a product that is applicable to a policy. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicableObjectType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the type of object the insurance policy product clause applies to. Possible values are:InsurancePolicyAsset—Insurance Policy AssetInsurancePolicyCoverage—Insurance Policy CoverageInsurancePolicyParticipant—Insurance Policy Participant |
| ClauseText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe generated clause text based on rule evaluation. |
| ConstraintModelDeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe developer name of the constraint model. |
| CreationMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates how the insurance policy product clause is added. Possible values are:AutoAddedManual |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe description of the insurance policy product clause. |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the insurance policy product clause becomes active. |
| ExpirationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the insurance policy product clause becomes inactive. |
| InsurancePolicyAssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the policy asset associated with the insurance policy product clause. This field is a relationship field.Relationship NameInsurancePolicyAssetRefers ToInsurancePolicyAsset |
| InsurancePolicyCoverageId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the policy coverage associated with the insurance policy product clause. This field is a relationship field.Relationship NameInsurancePolicyCoverageRefers ToInsurancePolicyCoverage |
| InsurancePolicyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the policy associated with the insurance policy product clause. This field is a relationship field.Relationship NameInsurancePolicyRelationship TypeMaster-detailRefers ToInsurancePolicy (the master object) |
| InsurancePolicyParticipantId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the participant associated with the insurance policy product clause. This field is a relationship field.Relationship NameInsurancePolicyParticipantRefers ToInsurancePolicyParticipant |
| InsuranceProductClauseId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the insurance product clause associated with the insurance policy product clause. This field is a relationship field.Relationship NameInsuranceProductClauseRefers ToInsuranceProductClause |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate), but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, SortDescriptionThe name of the insurance policy product clause. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe name of the system from where the insurance policy product clause originated. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe unique identifier of the insurance policy product clause record in the source system. |
