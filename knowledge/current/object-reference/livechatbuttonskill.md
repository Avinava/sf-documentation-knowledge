---
title: "LiveChatButtonSkill"
domain: object-reference
topic: livechatbuttonskill
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.363Z
estimatedTokens: 171
keywords: [LiveChatButtonSkill, skills, LiveChatButton, except, currently, assigned, retrieve, skill, query, API, version, 25.0, later, Calls, Usage]
---

# LiveChatButtonSkill

> Represents all the skills available to a LiveChatButton  except the one
   currently assigned. To retrieve the skill currently assigned, query LiveChatButton. This
  object is available in API version 25.0 and later.

# LiveChatButtonSkill

Represents all the skills available to a LiveChatButton except the one currently assigned. To retrieve the skill currently assigned, query LiveChatButton. This object is available in API version 25.0 and later.

## Supported Calls

create(), delete(), update(), query()

## Fields

| Field Name | Details |
| --- | --- |
| ButtonID | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe record ID of the button. |
| SkillID | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe record ID of the skill. |

## Usage

Use this object to assign a specific skill to a specific button for multi-skill routing. For example:

```

```

## Code Examples

```apex
String myButtonId = "button_Id";
String myButtonDevName = "button_DeveloperName";
List<String> skillIds = new List<String>();

//Get one skill ID from button
for(LiveChatButton lcb : [SELECT SkillId FROM LiveChatButton WHERE DeveloperName =:
myButtonDevName]) {
    skillIds.add(lcb.SkillId); 
}
//Get remaining skills from LiveChatButtonSkill join object
for(LiveChatButtonSkill lcbs : [SELECT SkillID FROM LiveChatButtonSkill WHERE ButtonId =:
myButtonId]) {
    skillIds.add(lcbs.SkillId); 
}
//Retrieve all skills into a single list
List<Skill> skills = [SELECT Id, DeveloperName FROM Skill WHERE Id IN :SkillIds];
```
