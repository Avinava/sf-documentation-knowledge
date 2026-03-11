---
title: "Build Context Action"
domain: omnistudio
topic: build-context-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.410Z
keywords: [Build, Context, Action, Special, Access, Rules, Supported, REST, HTTP, Methods, Inputs, Outputs, Usage, Example]
---

# Build Context Action

# Build Context Action

Build and cache context data associated with a context definition.

This action is available in API version 59.0 and later.

## Special Access Rules

Available in Developer, Enterprise, Professional, and Unlimited editions for Industries clouds where Context Service is enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/buildContext

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| contextData | TypestringDescriptionOptional. JSON data that's used to build context data. |
| contextDefinitionId | TypestringDescriptionRequired. The ID or developer name of the context definition record that's used to build context data. |
| contextMappingId | TypestringDescriptionOptional. The context mapping record ID or name that identifies which Salesforce object and mappings to use for building context data. |
| isTaggedData | TypebooleanDescriptionOptional. Indicates whether the associated context node is tagged with a key (true) or not (false). |

## Outputs

| Output | Details |
| --- | --- |
| contextDefinitionId | TypestringDescriptionThe ID or Developer Name of the Context Definition record that was used to build context data. |
| contextId | TypestringDescriptionID of the cached context data. |
| contextMappingId | TypestringDescriptionThe Context Mapping record ID or Name that identifies which Salesforce object and mappings to use for building context data. |

## Usage

Build context invocable action is a wrapper over Build Context business API. The API fetches the data passed in request and saves the data to the cache. This is useful when the same data is required in multiple steps of the process.

## Example

POST

This sample request is for the Build Context action. In this example, we are inserting new records to hydrate input values (input hydration). To use existing records instead, reference the IDs directly rather than providing full record data.

```

```

This sample response is for the Build Context action.

```

```