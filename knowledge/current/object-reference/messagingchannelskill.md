---
title: "MessagingChannelSkill"
domain: object-reference
topic: messagingchannelskill
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.798Z
estimatedTokens: 223
keywords: [MessagingChannelSkill, Junction, association, MessagingChannel, Skill, API, version, 45.0, later, Calls]
---

# MessagingChannelSkill

> Junction object that represents an association between
			MessagingChannel and Skill. This object is available in API version 45.0 and
		later.

# MessagingChannelSkill

Junction object that represents an association between MessagingChannel and Skill. This object is available in API version 45.0 and later.

For example, when we want to use Omni-Channel skills-based routing in Live message, this object maintains the mapping between the messaging channel and the skill.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| MessagingChannelId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the MessagingChannel.This is a relationship field.Relationship NameMessagingChannelRelationship TypeLookupRefers ToMessagingChannel |
| SkillId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the Skill.This is a relationship field.Relationship NameSkillRelationship TypeLookupRefers ToSkill |

## Related Topics

- MessagingChannel (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_messagingchannel.htm)
- Skill (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_skill.htm)
