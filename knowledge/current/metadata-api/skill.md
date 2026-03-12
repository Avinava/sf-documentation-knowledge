---
title: "Skill"
domain: metadata-api
topic: skill
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:42.281Z
estimatedTokens: 679
keywords: [Skill, settings, service, route, chats, agents, Chat, skills, assigned, File, Suffix, Directory, Location, Version, SkillAssignments]
---

# Skill

> Represents the settings for a skill used for field service or
            to route chats to agents in Chat, such as the name of the skill and which agents the
            skills are assigned to.

# Skill

Represents the settings for a skill used for field service or to route chats to agents in Chat, such as the name of the skill and which agents the skills are assigned to.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

Skill values are stored in the <developer\_name>.skill file in the skills directory.

## Version

Skill is available in API version 28.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| assignments | SkillAssignments | Specifies how skills are assigned to Chat users. Skills can be assigned to sets of users or sets of profiles. |
| description | string | Specifies the description of the skill. This field is available in API version 38.0 and later. |
| label | string | Specifies the name of the skill. |
| skillType | string | Specifies the skill type, such as language or department, associated with the skill. This field is available in API version 58.0 and later. |

## SkillAssignments

Represents which users and user profiles to whom specific skills are assigned.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| profiles | SkillProfileAssignments | Specifies the profiles that are associated with a specific skill. |
| users | SkillUserAssignments | Specifies the users that are associated with a specific skill. |

## SkillProfileAssignments

Represents the profiles that are associated with a specific skill.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| profile | string | Specifies the custom name of the profile associated with a specific skill. |

## SkillUserAssignments

Represents the users that are associated with a specific skill.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| user | string | Specifies the username of the user associated with a specific skill. |

## Declarative Metadata Sample Definition

This is a sample of a skill file.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Skill xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>My Skill 1</label>
    <assignments>
        <profiles>
            <profile>LiveAgentOperator</profile>
            <profile>LiveAgentSupervisor</profile>
        </profiles>
        <users>
            <user>jdoe@acme.com</user>
        </users>
    </assignments>
</Skill>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
