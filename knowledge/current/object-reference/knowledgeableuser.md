---
title: "KnowledgeableUser"
domain: object-reference
topic: knowledgeableuser
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.438Z
estimatedTokens: 218
keywords: [KnowledgeableUser, user, identified, knowledgeable, specific, topic, ranks, relative, users, API, version, 31.0, later, Calls]
---

# KnowledgeableUser

> Represents a user identified as knowledgeable about a specific topic,
   and ranks them relative to other knowledgeable users. This object is available in API
  version 31.0 and later.

# KnowledgeableUser

Represents a user identified as knowledgeable about a specific topic, and ranks them relative to other knowledgeable users. This object is available in API version 31.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| NetworkId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the Experience Cloud site the topic exists in. This field is available only if digigal experiences is enabled for your org. |
| RawRank | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRank of this user’s knowledge on the topic relative to other users. |
| TopicId | TypereferencePropertiesFilter, Group, SortDescriptionUnique ID for the topic in Salesforce. |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionUnique ID for the user in Salesforce. |
