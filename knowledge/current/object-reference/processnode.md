---
title: "ProcessNode"
domain: object-reference
topic: processnode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.230Z
estimatedTokens: 249
keywords: [ProcessNode, step, process, definition, Compare, ProcessInstanceNode, running, API, version, 31.0, later, Calls, Usage]
---

# ProcessNode

> Describes a step in a process definition. Compare to ProcessInstanceNode, which describes a step in a running process. This object is available in API version 31.0 and
		later.

# ProcessNode

Describes a step in a process definition. Compare to ProcessInstanceNode, which describes a step in a running process. This object is available in API version 31.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesFilter, Nillable, SortDescriptionA description of this node, no longer than 3,000 bytes. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe external name of the node that’s seen by users. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe unique node name. |
| ProcessDefinitionId | TypereferencePropertiesFilter, Group, SortDescriptionID of the object affected by this approval instance.A relationship field.Relationship NameProcessDefinitionRelationship TypeLookupRefers ToProcessDefinition |

## Usage

Use this object to get details about the process node or the process definition that it's associated with.
