---
title: "SOSDeployment"
domain: object-reference
topic: sosdeployment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.379Z
estimatedTokens: 576
keywords: [SOSDeployment, general, settings, deploying, SOS, video, call, capability, native, mobile, application, API, version, 34.0, later]
---

# SOSDeployment

> Represents the general settings for deploying SOS video call
			capability in a native mobile application. This object is available in API version
		34.0 and later.

# SOSDeployment

Represents the general settings for deploying SOS video call capability in a native mobile application. This object is available in API version 34.0 and later.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the deployment. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the deployment. |
| OptionsIsBackwardFacingCameraEnabled | TypebooleanPropertiesCreate, Filter, UpdateDescriptionDetermines whether customers can use the backwards-facing camera on their mobile devices to talk to SOS agents. |
| OptionsIsEnabled | TypebooleanPropertiesCreate, Filter, UpdateDescriptionDetermines whether the deployment is enabled for customers to request new SOS video calls. |
| OptionsIsVoiceOnlyMode | TypebooleanPropertiesCreate, Filter, UpdateDescriptionDetermines whether video functionality is disabled for customers, making it so customers can only talk to SOS agents using only audio. |
| QueueId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the queue that’s associated with the SOS deployment. |

## Usage

Use this object to query and manage SOS deployments.
