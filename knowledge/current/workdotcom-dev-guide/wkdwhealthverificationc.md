---
title: "wkdw__HealthVerification__c"
domain: workdotcom-dev-guide
topic: wkdwhealthverificationc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.477Z
estimatedTokens: 829
keywords: [wkdw__HealthVerification__c, verification, user’s, COVID-19, status, wkdw, _HealthVerification, Calls]
---

# wkdw__HealthVerification__c

> Represents a request for verification of a user’s COVID-19
      status.

# wkdw\_\_HealthVerification\_\_c

Represents a request for verification of a user’s COVID-19 status.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. A null value can mean that the record was only referenced and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number representing the health verification. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. The default value is the user logged in to the API who ran create(). This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| wkdw__Case__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe related case record. This is a relationship field.Relationship Namewkdw__Case__rRelationship TypeLookupRefers ToCase |
| wkdw__DeclinationReason__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionReason the employee declines to respond to the health status verification request. One value—Not specified—is provided, but you can create more values. |
| wkdw__Declined__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, indicates that the employee declined to respond to the health status verification request. The default value is false. |
| wkdw__Employee__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe employee whose health status is being verified. This is a relationship field.Relationship Namewkdw__Employee__rRelationship TypeLookupRefers ToEmployee |
| wkdw__HealthCredentialDocumentDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date of the document provided as proof of the employee’s health status. |
| wkdw__HealthCredentialExpirationDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expiration date, if any, of the document provided as proof of the employee’s health status. |
| wkdw__Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the health verification. The following values are provided, but you can create your own.Not VerifiedVerifiedDeclinedPending Approval |
| wkdw__Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe method of health verification. The following values are provided, but you can create your own.Documentation of COVID-19 RecoveryNegative COVID-19 Test ResultsProof of Vaccination |
| wkdw__VerificationDate__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date the employee submitted the verification. |
