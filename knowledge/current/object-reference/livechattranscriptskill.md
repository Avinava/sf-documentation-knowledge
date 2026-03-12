---
title: "LiveChatTranscriptSkill"
domain: object-reference
topic: livechattranscriptskill
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.428Z
estimatedTokens: 189
keywords: [LiveChatTranscriptSkill, join, LiveChatTranscript, Skill, API, version, 25.0, later, Calls, Usage]
---

# LiveChatTranscriptSkill

> Represents a join between LiveChatTranscript and Skill. This
  object is available in API version 25.0 and later.

# LiveChatTranscriptSkill

Represents a join between LiveChatTranscript and Skill. This object is available in API version 25.0 and later.

## Supported Calls

create(), delete(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update()

## Fields

| Field Name | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the transcript. |
| SkillId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe record ID of the skill. |
| TranscriptId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe record ID of the transcript. |

## Usage

Use this object to assign a specific skill to a specific transcript for multi-skill routing.
