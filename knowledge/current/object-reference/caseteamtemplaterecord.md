---
title: "CaseTeamTemplateRecord"
domain: object-reference
topic: caseteamtemplaterecord
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.362Z
estimatedTokens: 279
keywords: [CaseTeamTemplateRecord, linking, Case, CaseTeamTemplate, objects, assign, predefined, team, customer, inquiry, record, point, ParentId, TeamTemplateId, Calls]
---

# CaseTeamTemplateRecord

> The CaseTeamTemplateRecord object is a linking object
    between the Case and CaseTeamTemplate objects. To assign a predefined case team to a case
    (customer inquiry), create a CaseTeamTemplateRecord record and point the
     ParentId to the case and the TeamTemplateId to the
    predefined case team.

# CaseTeamTemplateRecord

The CaseTeamTemplateRecord object is a linking object between the Case and CaseTeamTemplate objects. To assign a predefined case team to a case (customer inquiry), create a CaseTeamTemplateRecord record and point the ParentId to the case and the TeamTemplateId to the predefined case team.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

As of Spring ’20 and later, only users with read access to the Case object can access this object.

## Fields

| Field | Details |
| --- | --- |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the case with which the case team template record is associated.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToCase |
| TeamTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the predefined case team with which the case team template record is associated.This is a relationship field.Relationship NameTeamTemplateRelationship TypeLookupRefers ToCaseTeamTemplate |
