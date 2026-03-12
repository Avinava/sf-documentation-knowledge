---
title: "SnippetAssignment"
domain: object-reference
topic: snippetassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.298Z
estimatedTokens: 205
keywords: [SnippetAssignment, relationship, snippet, campaign, Assignments, content, Account, Engagement, emails, email, templates, assigned, API, version, 47.0]
---

# SnippetAssignment

> Represents a relationship between a snippet and a campaign.
			Assignments are required to use snippet content in Account Engagement emails and email
			templates. A snippet can be assigned to more than one campaign. This object is
		available in API version 47.0 and later.

# SnippetAssignment

Represents a relationship between a snippet and a campaign. Assignments are required to use snippet content in Account Engagement emails and email templates. A snippet can be assigned to more than one campaign. This object is available in API version 47.0 and later.

## Supported Calls

create( ), delete( ), describeLayout( ), describeSObjects( ), getDeleted( ), getUpdated( ), query( ), retrieve( )

## Special Access Rules

Snippets are available in Account Engagement business units with the Sales, CRM, or Service permission set license.

## Fields

| Field | Details |
| --- | --- |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the parent object |
| SnippetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the related snippet record |
