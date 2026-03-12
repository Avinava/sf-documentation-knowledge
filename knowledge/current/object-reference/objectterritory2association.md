---
title: "ObjectTerritory2Association"
domain: object-reference
topic: objectterritory2association
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:13.379Z
estimatedTokens: 518
keywords: [ObjectTerritory2Association, association, assignment, territory, record, account, lead, Calls, Special, Access, Rules]
---

# ObjectTerritory2Association

> Represents an association (by assignment) between a territory and an
   object record such as an account or a lead.

# ObjectTerritory2Association

Represents an association (by assignment) between a territory and an object record such as an account or a lead.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Available after enabling Sales Territories.

Standard and partner users can access this object. If a territory model is in Active state, any standard or partner user can view that model, including its territories and assignment rules. For territories in an active model, any standard or partner user can view assigned records and assigned users subject to your sharing settings.

If you delete associations, you can query them for up to 12 hours. Keep in mind that deleted associations bypass the recycle bin.

## Fields

| Field Name | Details |
| --- | --- |
| AssociationCause | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe means by which the record was associated with the territory. User interface field label is Method.Possible values are:Territory2AssignmentRule—Territory assignment rule associationTerritory2Manual—Manual association |
| ObjectId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the object assigned to the territory.ObjectAvailabilityAccountAPI version 30.0 and laterLeadAPI version 55.0 and laterThis is a polymorphic relationship field.Relationship NameObjectRelationship TypeLookupRefers ToAccountLead | Object | Availability | Account | API version 30.0 and later | Lead | API version 55.0 and later |
| Object | Availability |
| Account | API version 30.0 and later |
| Lead | API version 55.0 and later |
| SobjectType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of the object.Possible values are:AccountLead |
| Territory2Id | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the territory that the record is assigned to.This is a relationship field.Relationship NameTerritory2Relationship TypeLookupRefers ToTerritory2 |
