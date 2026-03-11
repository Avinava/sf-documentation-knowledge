---
title: "EventDelivery"
domain: metadata-api
topic: eventdelivery
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:52.314Z
keywords: [EventDelivery, File, Suffix, Directory, Location, Version, Limits, Fields, EventParameterMap, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# EventDelivery

# EventDelivery

Represents how an event instance maps to a target payload. Removed in API version 46.0. This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

Event delivery components have the suffix file path .delivery, and are stored in the eventDeliveries folder.

## Version

Event delivery components are available in API versions 41.0 to 45.0.

## Limits

Your org can have a maximum of 2500 EventDelivery object instances.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| eventParameters | EventParameterMap[] | An array of parameters to deliver in addition to the published event’s data. |
| eventSubscription | string | Required. The ID of the subscription to deliver the data to. |
| referenceData | string | User-defined non-unique identifier. |
| type | EventDeliveryType (enumeration of type string) | Required. Determines what action occurs when the event is delivered to the listeners on behalf of the subscribers.Valid values are:StartFlow—When the event occurs, it’s delivered to a flow of type CustomEvent. Those flows are built through Process Builder.ResumeFlow—Reserved for future use. |

## EventParameterMap

Parameters to deliver in addition to the published event’s data.

If type is StartFlow, you must include a parameter where parameterName is FlowVersionName and parameterValue is the name of the flow that you want to start. The flow name must include its version number. For example, myFlow-3.

Each event delivery can have up to 10 parameters.

| Field Name | Field Type | Description |
| --- | --- | --- |
| parameterName | string | The parameter name. |
| parameterValue | string | The parameter value. |

## Declarative Metadata Sample Definition

The following is an example of an event delivery file.

```

```

The following is an example package.xml that deploys or retrieves all the available event delivery metadata in your org.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").