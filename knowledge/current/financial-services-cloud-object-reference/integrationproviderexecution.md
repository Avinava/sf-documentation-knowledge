---
title: "IntegrationProviderExecution"
domain: financial-services-cloud-object-reference
topic: integrationproviderexecution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.836Z
estimatedTokens: 721
keywords: [IntegrationProviderExecution, execution, instance, integration, provider, API, version, 61.0, later, Calls]
---

# IntegrationProviderExecution

> Represents the execution instance of an integration provider.  This
      object is available in API version 61.0 and later.

# IntegrationProviderExecution

Represents the execution instance of an integration provider. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ErrorCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe error code returned from the integration execution. |
| ExecutionDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time an integration is executed. |
| ExecutionStepInstanceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe instance of the integration execution.This field is a relationship field.Relationship NameExecutionStepInstanceRefers ToFulfillmentStep |
| IntegrationProviderDefId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe integration definition associated with the integration execution.This field is a relationship field.Relationship NameIntegrationProviderDefRefers ToIntegrationProviderDef |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the party credit profile record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ReferenceObjectIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe object referenced to execute an integration. |
| RequestPayloadId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe content document that stores the request payload associated with the integration execution.This field is a relationship field.Relationship NameRequestPayloadRefers ToContentDocument |
| ResponsePayloadId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe content document that stores the response payload associated with the integration execution.This field is a relationship field.Relationship NameResponsePayloadRefers ToContentDocument |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the integration execution.Possible values are:FailedIn ProgressNot Started—PendingSuccess |
