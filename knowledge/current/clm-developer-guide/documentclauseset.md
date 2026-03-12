---
title: "DocumentClauseSet"
domain: clm-developer-guide
topic: documentclauseset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.755Z
estimatedTokens: 613
keywords: [DocumentClauseSet, grouping, clauses, hold, multiple, variations, clause, main, alternate, pre-approved, language, Calls, Special, Access, Rules]
---

# DocumentClauseSet

> Represents a grouping for clauses, which can hold multiple variations of the same
      clause such as main clause and alternate pre-approved clauses based on language.

# DocumentClauseSet

Represents a grouping for clauses, which can hold multiple variations of the same clause such as main clause and alternate pre-approved clauses based on language.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

DocumentClauseSet is available for users with the ClauseManagement user permission set licenses. Salesforce Org must have a ClauseManagement platform license to access this object.

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the category of the clause set.Possible values are:0zMRO000000003P—Test |
| CategoryReferenceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThis field is used for validating category values.This field is a relationship field.Relationship NameCategoryReferenceRelationship TypeLookupRefers ToClauseCatgConfiguration |
| DefaultLanguage | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the default language of the clause set.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the clause set. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the status of the clause set.Possible values are:ActiveArchivedDraftThe default value is Draft. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

DocumentClauseSetChangeEvent

Change events are available for the object.

DocumentClauseSetFeed

Feed tracking is available for the object.

DocumentClauseSetHistory

History is available for tracked fields of the object.

DocumentClauseSetOwnerSharingRule

Sharing rules are available for the object.

DocumentClauseSetShare

Sharing is available for the object.
