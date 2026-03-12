---
title: "OmniSupervisorConfig"
domain: tooling-api
topic: omnisupervisorconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.330Z
estimatedTokens: 841
keywords: [OmniSupervisorConfig, Omni-Channel, supervisor, configuration, assigned, group, supervisors, API, version, 57.0, later, SOAP, Calls, REST, Special]
---

# OmniSupervisorConfig

> Represents the Omni-Channel supervisor configuration for an assigned group of
         supervisors. This object is available in API version 57.0 and later.

# OmniSupervisorConfig

Represents the Omni-Channel supervisor configuration for an assigned group of supervisors. This object is available in API version 57.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&language=en_US) must be enabled. Access to tooling objects requires Salesforce admin privileges or the Customize Application permission.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata type in Metadata API. The full name can include a namespace prefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsTimelineHidden | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf set to true, hides the agent timeline from the supervisors assigned to this supervisor configuration. The default value is false. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionPossible values are the languages that Omni-Channel supports. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label of the Omni-Channel supervisor configuration. |
| Metadata | Typemns:OmniSupervisorConfigPropertiesCreate, Nillable, UpdateDescriptionThe Omni-Channel supervisor configuration’s metadata. |
| SkillVisibility | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDetermines which work items based on skills are visible to the supervisors assigned to this supervisor configuration. Possible values are:AllSkills—Show work items with all skill requirements selected in this supervisor configuration.AnySkill—Show work items with at least one skill requirement selected in this supervisor configuration. |
