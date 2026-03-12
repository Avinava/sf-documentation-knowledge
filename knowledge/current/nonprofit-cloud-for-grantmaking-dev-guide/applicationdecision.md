---
title: "ApplicationDecision"
domain: nonprofit-cloud-for-grantmaking-dev-guide
topic: applicationdecision
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.953Z
estimatedTokens: 589
keywords: [ApplicationDecision, final, decision, performed, Application, API, version, 56.0, later, Calls, Special, Access, Rules]
---

# ApplicationDecision

> Represents a final decision performed for the specified Application. This object is
      available in API version
      56.0
      and later.

# ApplicationDecision

Represents a final decision performed for the specified Application. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and the Manage Application system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| ApplicationDecision | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the decision for the application.Possible values are:AwardDeny |
| ApplicationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the application.This field is a polymorphic relationship field.Relationship NameApplicationRelationship TypeLookupRefers ToIndividualApplication |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe information about the decision provided on the application. |
| DecisionAuthorityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user responsible for the application decision.This field is a relationship field.Relationship NameDecisionAuthorityRelationship TypeLookupRefers ToUser |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the preliminary application. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PreliminaryApplicationRefId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the preliminary application reference.This field is a relationship field.Relationship NamePreliminaryApplicationRefRelationship TypeLookupRefers ToPreliminaryApplicationRef |
