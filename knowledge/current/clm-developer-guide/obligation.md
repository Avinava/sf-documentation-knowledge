---
title: "Obligation"
domain: clm-developer-guide
topic: obligation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.885Z
estimatedTokens: 1018
keywords: [Obligation, parties, fulfill, agreed, conditions, contractual, commitments, commitment, assists, strategy, achieve, desired, outcome, timeframe, reduce]
---

# Obligation

> Represents an obligation between parties to fulfill agreed
         conditions, such as contractual commitments. The obligation commitment assists with a
      strategy to achieve the desired outcome within a set timeframe and reduce risk with compliance
      tracking. For example, payment due dates, contract terms, renewals. This object is available
      in API version 59.0 and later.

# Obligation

Represents an obligation between parties to fulfill agreed conditions, such as contractual commitments. The obligation commitment assists with a strategy to achieve the desired outcome within a set timeframe and reduce risk with compliance tracking. For example, payment due dates, contract terms, renewals. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if your org has ObligationManagement permission license.

## Fields

| Field | Details |
| --- | --- |
| AssigneeUserId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the assignee user associated with the obligation.This field is a relationship field.Relationship NameAssigneeUserRelationship TypeLookupRefers ToUser |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the obligation. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the obligation. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the obligation. |
| OtherPartyAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the other party account associated with the obligation.This field is a relationship field.Relationship NameOtherPartyAccountRelationship TypeLookupRefers ToAccount |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user that owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Party | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe party who executes or delivers the obligation. The default value is First_Party.Possible values are:FIRST_PARTYOTHER_PARTY |
| ReferenceContractId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe contract associated with the obligation.This field is a relationship field.Relationship NameReferenceContractRelationship TypeLookupRefers ToContract |
| ReferenceObjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe object associated with the obligation. For example, Contract.This field is a relationship field.Relationship NameReferenceObjectRelationship TypeLookupRefers ToContract |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe start date of the obligation. |
| State | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe start date of the obligation.Possible values are:ActiveExpiredInActive—InactiveOnHold—On HoldThe default value is OnHold. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the obligation.Possible values are:Compliant—CompliantNon Compliant—Non CompliantAt Risk—At RiskNone—NoneThe default value is Compliant. |
| StatusChangeReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason to change the obligation status. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of Obligation. For example, Manufacturing Obligation, or Payment Obligation. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ObligationChangeEvent

Change events are available for the object.

ObligationFeed

Feed tracking is available for the object.

ObligationHistory

History is available for tracked fields of the object.

ObligationOwnerSharingRule

Sharing rules are available for the object.

ObligationShare

Sharing is available for the object.
