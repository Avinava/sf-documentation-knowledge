---
title: "Configuration Entities"
domain: retail-api
topic: configuration-entities
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.692Z
estimatedTokens: 960
keywords: [Configuration, Entities, Business, API, records, Workflows, Output, Entity, Workflow, Step, Input, Structure]
---

# Configuration Entities

> Business Object API records contains Workflows and Output Entities.

# Configuration Entities

Business Object API records contains Workflows and Output Entities.

-   Workflows: The available workflows for this Business Object
-   Output Entities: Entities of type Output this Business Object manipulates

## Business Object API Entity

Business Object API use the concept of “Entities” to identify “kinds” of objects in both the data input (Input Payloads) and output (Generated Objects or Records). Entities are used to group similar types of information. This information is later used to determine which Workflow Steps are executed with which input.

| Object | Description | Required/Optional |
| --- | --- | --- |
| Name | Name of the Entity. | Required |
| Location | If the entity is an Input or Output entity. | Required |
| Description | High-level description of the entity. | Required |
| Path | List of comma separated JSON paths where entities of this type will be found on the input payloadDefines the path of the entity with these structures:- .objectProperty.property- .arrayProperty[*].property- .property- .arrayProperty[*]- An empty path (represents the root of the input object and is considered as a valid path)NoteFor a successful configuration, ensure that the path property adheres to the specified structure:- Mark the array property [*] at the end of the field name.- Ensure that the path property is a dot-separated list of fields. For example, .AnchorAccount, .CommitDate.- Specify multiple paths by separating paths with a comma [,].- Validate the path before a record is saved; an error message appears if the path doesn't match. | Required |

## Business Object API Workflow

Business Object API Workflow is akin to a process or method to be executed for the given Business Object. Different workflows can be created to suit different needs and different processes, such a “create” workflow or an “update” workflow. Each workflow contains:

-   Input Entities and Mapping: A list of the input entities this workflow is able to handle. Use the mapping properties to map each input entity type to an output entity
-   Workflow Steps: Ordered list of workflow steps that will be executed when the Workflow is requested to be run. Each workflow step will be executed for all the entities of a given type present in the input or output

You can see the input payload schema required for a Workflow by clicking on the “View Schema” button on the workflow page.

| Object | Description | Required/Optional |
| --- | --- | --- |
| Name | Name of the Workflow. | Required |
| Business Object API | Business Object the Workflow belongs to | Required |
| Description | High-level description of the workflow. | Required |

## Business Object API Workflow Step

Business Object API Workflow Steps represent individual functions to be executed to achieve the expected final result. Workflow Steps map to an APEX class which implements the Step behavior:

| Object | Description | Required/Optional |
| --- | --- | --- |
| Name | Name of the business rule. | Required |
| Entity | Entity of the Input the rule must be applied to. | Optional |
| Method | Action method that is passed to the callable class. | Optional |
| Classname | Name of the APEX Callable class implementing the transformation. | Required |
| Description | High-level overview of what the rule does | Optional |
| Sales Org | Sales Organization | Required |

These Workflow steps can be shared between different workflows. Each Workflow Step contains:

-   Step Input Structures: List of input structure records that reflect the expected inputs for the rule.

## Business Object API Workflow Step Input Structure

Define the input structures used for the related workflow step. This information is used to validate the input payload. Different types of expected inputs can be defined based on the SObject record type.
