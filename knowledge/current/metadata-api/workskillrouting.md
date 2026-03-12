---
title: "WorkSkillRouting"
domain: metadata-api
topic: workskillrouting
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:43.254Z
estimatedTokens: 899
keywords: [WorkSkillRouting, setup, stores, WorkSkillRoutingAttribute, objects, route, work, item, agent, skills, necessary, take, extends, Metadata, inherits]
---

# WorkSkillRouting

> Represents a setup object that stores a set of
      WorkSkillRoutingAttribute objects. These objects are used to route a work item to an agent who
      has the skills necessary to take the work.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# WorkSkillRouting

Represents a setup object that stores a set of WorkSkillRoutingAttribute objects. These objects are used to route a work item to an agent who has the skills necessary to take the work. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

WorkSkillRouting components have the suffix workSkillRouting and are stored in the workSkillRoutings folder.

## Version

WorkSkillRouting components are available in API version 46.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
|  |  |  |
| isActive | boolean | Required. Indicates whether assignment rules are active and can be evaluated. |
| masterLabel | string | Required. The label for this object. This display value is the internal label that is not translated. |
| relatedEntity | string | Required. Type of Salesforce object that the attributes are associated with. |
| workSkillRoutingAttributes | WorkSkillRoutingAttribute[] | A set of mappings between work-item field values and skills. Create one attribute mapping set for each object. |

## WorkSkillRoutingAttribute

Represents the routing assignments between object attributes and skills. Attributes are used to route a work item to an agent who has the skills necessary to take the work.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| field | string | Required. Field that this attribute applies to. |
| isAdditionalSkill | boolean | After a designated timeout period, additional skills are dropped from Omni-Channel routing. The case is then routed to the best-matched agent even if they don’t have all the skills. |
| skill | string | Required. Skill used to route the work item when the attribute maps to the value selected. |
| skillLevel | int | Level of the skill required. This value can range from 0 to 10. |
| skillPriority | int | For additional skills, specify the order in which a skill is dropped if after the Drop Additional Skills Timeout on the routing configuration, no agent with that skill is available. Skills with a lower priority rank (9 or 10) are dropped first. Skills with a higher priority rank (0 or 1) are dropped last. Skills with the same priority value are dropped as a group. You can set skill priority using attribute setup for skills-based routing or Apex code. Available in API version 49.0 and later. |
| value | string | Attribute value that is assigned to the selected skill. |

## Declarative Metadata Sample Definition

The following is an example of a WorkSkillRouting component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<WorkSkillRouting xmlns="http://soap.sforce.com/2006/04/metadata">
  <isActive>true</isActive>
  <masterLabel>Attribute setup for skills-based routing for Case object</masterLabel>
  <relatedEntity>Case</relatedEntity>
  <workSkillRoutingAttributes>
    <field>Case.Origin</field>
    <isAdditionalSkill>false</isAdditionalSkill>
    <skill>Technical_Skill</skill>
    <skillLevel>3</skillLevel>
    <skillPriority>2</skillPriority>
    <value>Web</value>
  </workSkillRoutingAttributes>
</WorkSkillRouting>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
