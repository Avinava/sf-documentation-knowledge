---
title: "DataKitDeployEvent"
domain: object-reference
topic: datakitdeployevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.040Z
estimatedTokens: 538
keywords: [DataKitDeployEvent, data, kit, deployment, event, notifies, subscribers, status, component, API, version, 61.0, later, Calls, Special]
---

# DataKitDeployEvent

> Represents a data kit deployment event that notifies subscribers of the
			status of the data kit component deployment. This object is available in API version
			61.0 or later.

# DataKitDeployEvent

Represents a data kit deployment event that notifies subscribers of the status of the data kit component deployment. This object is available in API version 61.0 or later.

## Supported Calls

create(), describeSObjects()

## Special Access Rules

Users that have access to Data Cloud.

## Fields

| Field | Details |
| --- | --- |
| DataKitDeployStatus | TypepicklistPropertiesCreate, Nillable, Restricted picklistDescriptionThe deployment status of the components deployed from a data kit. This field is available in API version 63.0 and later. Possible values are:ActiveDeletingErrorInactiveProcessing |
| DataKitName | TypestringPropertiesCreate, NillableDescriptionName of the data kit from which a component is deployed. |
| DataspaceName | TypestringPropertiesCreate, NillableDescriptionName of the data space into which a component is deployed. |
| DeployStartTime | TypedateTimePropertiesCreate, NillableDescriptionThe date and time the deployment starts. |
| ErrorDetails | TypetextareaPropertiesCreate, NillableDescriptionExplanation of the error. |
| EventCreationDate | TypedateTimePropertiesCreate, NillableDescriptionThe date and time the data kit deploy creation event was created. |
| EventPublishDate | TypedateTimePropertiesCreate, NillableDescriptionThe date and time of the data kit deploy publish event. |
| EventType | TypepicklistPropertiesCreate, Nillable, Restricted picklistDescriptionThe event type action of the data kit components. Available in API version 66.0 and later. Possible values are:DeployUndeploy |
| EventUuid | TypestringPropertiesNillableDescriptionThe unique ID of the event. |
| IsDataKitDeployStatusSuccess | TypestringPropertiesCreate, NillableDescriptionStatus of the data kit component deployment. Possible values are:ActiveFailure |
| JobIdentifier | TypestringPropertiesCreate, NillableDescriptionData kit component deployment job identifier. |
| ReplayId | TypestringPropertiesNillableDescriptionThe ID of the data kit deploy event replay. |
| TemplateName | TypestringPropertiesCreate, NillableDescriptionThe template name from which the data kit deploy event is created. |
