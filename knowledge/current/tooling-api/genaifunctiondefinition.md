---
title: "GenAiFunctionDefinition"
domain: tooling-api
topic: genaifunctiondefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.945Z
estimatedTokens: 568
keywords: [GenAiFunctionDefinition, agent, action, API, version, 60.0, later, SOAP, Calls, REST, Special, Access, Rules]
---

# GenAiFunctionDefinition

> Represents an agent action. This object is available in API
      version 60.0 and later.

# GenAiFunctionDefinition

Represents an agent action. This object is available in API version 60.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To access this object, Agents must be enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesNillableDescriptionA description explaining the general purpose and domain of the action. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name for this object. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated object in Metadata API. The full name can include a namespace prefix. |
| InvocationTarget | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionTarget invocation used by invocation operations. |
| InvocationTargetType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionInvocable action types used by invocation operations.Possible values are:apexflowgeneratePromptResponse |
| IsConfirmationRequired | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether confirmation is required for this action.The default value is false. |
| IsIncludeInProgressIndicator | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the ProgressIndicatorMessage is displayed. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the GenAiFunctionDefinition. The value for this field is the language value of the org. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe master label for the generative AI action. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionProvides access to the associated type. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the GenAiFunctionDefinition. |
| ProgressIndicatorMessage | TypestringPropertiesFilter, Group, SortDescriptionMessage displayed when an action is taking longer than expected to execute. |
