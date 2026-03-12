---
title: "CaseTeamMember"
domain: object-reference
topic: caseteammember
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:06.346Z
estimatedTokens: 519
keywords: [CaseTeamMember, case, team, member, works, users, help, resolve, Calls, Special, Access, Rules]
---

# CaseTeamMember

> Represents a case team member, who
				works with a team of other users to help resolve a case.

# CaseTeamMember

Represents a case team member, who works with a team of other users to help resolve a case.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only users with read access to the Case object can access this object.

When accessing from Apex code, use the WITH USER\_MODE clause to enable field-level and object-level security permissions checking for SOQL SELECT queries, including subqueries and cross-object relationships. See [Enforce User Mode for Database Operations](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| MemberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the user or contact who is a member on a case team.This is a polymorphic relationship field.Relationship NameMemberRelationship TypeLookupRefers ToContact, User |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the case with which the case team member is associated.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToCase |
| TeamRoleId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the case team role with which the case team member is associated.This is a relationship field.Relationship NameTeamRoleRelationship TypeLookupRefers ToCaseTeamRole |
| TeamTemplateId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the predefined team with which the case team member is associated.This is a relationship field.Relationship NameTeamTemplateRelationship TypeLookupRefers ToCaseTeamTemplate |
| TeamTemplateMemberId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the team member included in a predefined case team.This is a relationship field.Relationship NameTeamTemplateMemberRelationship TypeLookupRefers ToCaseTeamTemplateMember |
