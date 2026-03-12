---
title: "CalculationProcedure"
domain: object-reference
topic: calculationprocedure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.894Z
estimatedTokens: 603
keywords: [CalculationProcedure, Performs, series, calculations, matrix, lookups, user-defined, variables, constants, label, Expression, API, version, 53.0, later]
---

# CalculationProcedure

> Performs a series of calculations using matrix lookups and user-defined
         variables and constants. The label for this object is Expression Set. This object is
      available in API version 53.0 and later.

# CalculationProcedure

Performs a series of calculations using matrix lookups and user-defined variables and constants. The label for this object is Expression Set. This object is available in API version 53.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object has been deprecated as of API version 55.0. In API version 55.0 and later, use the new Expression Set objects in Business Rules Engine instead.

Expression Sets accept input variables and return output variables, both in JSON format. Expression Sets are especially useful for determining prices, rates, and quotes.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Access to Expression Sets requires OmniStudio licenses.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA text description of the Expression Set. |
| InputVariablesMetadata | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionMetadata for the Expression Set's input variables. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it's possible the user only accessed this record or list view (LastReferencedDate) but didn't view it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe Expression Set name. |
| OutputVariablesMetadata | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionMetadata for the Expression Set's output variables. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this Expression Set. Default value is the user logged in to the API to perform the create action.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Usage

OmniScripts and Integration Procedures can call Expression Sets. Expression Sets can call Decision Matrices.
