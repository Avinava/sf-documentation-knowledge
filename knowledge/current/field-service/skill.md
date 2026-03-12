---
title: "Skill"
domain: field-service
topic: skill
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:54.017Z
estimatedTokens: 561
keywords: [Skill, settings, service, route, chats, agents, Chat, skills, assigned, File, Suffix, Directory, Location, Version, SkillAssignments, category, group, users, resources, Workforce]
---

# Skill

> Represents a category or group of Chat users or  service resources in
   Field Service or Workforce Engagement. This object is available in API version 24.0 and
  later.

# Skill

Represents a category or group of Chat users or service resources in Field Service or Workforce Engagement. This object is available in API version 24.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

For information about WDC skills on a user's profile, see the ProfileSkill topic.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the skill. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the skill. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed the skill. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the skill. |
| TypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe skill type associated with the skill.This field is a relationship field.This field is available in API version 58.0 and later.Relationship NameTypeRefers ToSkillType |

## Usage

Chat

Use this object to assign Chat users to groups based on their abilities. The skills associated with a LiveChatButton determine which agents receive chat requests that come in through that button.

Field Service

Use this object to track certifications and areas of expertise in your workforce. After you create a skill, you can:

-   Assign it to a service resource via the Skills related list on the resource’s detail page. When you assign a skill to a service resource, you can specify their skill level and the duration of the skill.
-   Add it as a required skill via the Skill Requirements related list on any work type, work order, or work order line item. When you add a required skill to a work record, you can specify the skill level.

Workforce Engagement

Use this object to specify areas of expertise in your workforce. After you create a skill, you can:

-   Assign it to a service resource via the Skills related list on the resource’s detail page.
-   Add it as a required skill via the Skill Requirements related list on a job profile.

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
