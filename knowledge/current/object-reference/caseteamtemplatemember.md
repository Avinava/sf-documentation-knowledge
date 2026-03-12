---
title: "CaseTeamTemplateMember"
domain: object-reference
topic: caseteamtemplatemember
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:06.358Z
estimatedTokens: 216
keywords: [CaseTeamTemplateMember, member, predefined, case, team, group, users, helps, resolve, cases, Calls, Special, Access, Rules]
---

# CaseTeamTemplateMember

> Represents a member on a predefined case team, which is a
    group of users that helps resolve cases.

# CaseTeamTemplateMember

Represents a member on a predefined case team, which is a group of users that helps resolve cases.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only users with read access to the Case object can access this object.

## Fields

| Field | Details |
| --- | --- |
| MemberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the user or contact who is a team member on a predefined case team. |
| TeamRoleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the predefined case team member's case team role. |
| TeamTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the predefined case team's template. |
