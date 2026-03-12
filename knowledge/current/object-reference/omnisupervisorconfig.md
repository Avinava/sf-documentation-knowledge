---
title: "OmniSupervisorConfig"
domain: object-reference
topic: omnisupervisorconfig
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.390Z
estimatedTokens: 788
keywords: [OmniSupervisorConfig, Command, Center, Service, configuration, assigned, group, supervisors, API, version, 41.0, later, Calls, Special, Access]
---

# OmniSupervisorConfig

> Represents the Command Center for Service configuration for an assigned
   group of supervisors. This object is available in API version 41.0 and later.

# OmniSupervisorConfig

Represents the Command Center for Service configuration for an assigned group of supervisors. This object is available in API version 41.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve() update(), upsert()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) must be enabled.

As of Spring ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| IsTimelineHidden | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf set to true, hides the agent timeline from the supervisors assigned to this Command Center for Service configuration. The default value is false.This field is available in API version 53.0 and later. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of this Command Center for Service configuration. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, SortDescriptionA unique label name for this Command Center for Service configuration. The name must begin with a letter. The name can contain alphanumeric characters and underscores. The name can’t contain spaces, two consecutive underscores, or end with an underscore. The name appears as Command Center for Service Configuration Name in the UI. |
| SkillVisibility | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines which work items based on skills are visible to the supervisors assigned to this Command Center for Service configuration. Possible values are:AllSkills — Show work items with all skill requirements selected in this Command Center for Service configuration.AnySkill — Show work items with at least one skill requirement selected in this Command Center for Service configuration.This field is available in API version 53.0 and later. |
