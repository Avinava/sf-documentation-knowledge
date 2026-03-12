---
title: "Expense"
domain: life-sciences-dev-guide
topic: expense
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.073Z
estimatedTokens: 560
keywords: [Expense, Life, Sciences, Cloud, extend, standard, represent, expenses, visit, API, version, 65.0, later, Calls]
---

# Expense

> Life Sciences Cloud fields extend the standard Expense object to represent
         expenses related to a visit. This object is
         available in API version 65.0 and later.

# Expense

Life Sciences Cloud fields extend the standard Expense object to represent expenses related to a visit. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The amount of the expense. |
| ExpenseNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the expense. |
| ExpenseOriginId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated provider visit record.This field is a polymorphic relationship field.Relationship NameExpenseOriginRefers ToVisit |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIf this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner or creator of the expense.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RelatedExpenseType | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated expense type record.This field is a relationship field.Relationship NameRelatedExpenseTypeRefers ToExpenseType |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the record in the external source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external source system from which the record was imported. |
| TransactionDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The date when the expense is incurred for the provider visit. |
