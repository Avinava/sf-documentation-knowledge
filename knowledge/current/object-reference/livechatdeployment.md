---
title: "LiveChatDeployment"
domain: object-reference
topic: livechatdeployment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.370Z
estimatedTokens: 782
keywords: [LiveChatDeployment, general, settings, deploying, Live, Agent, website, API, version, 24.0, later, Calls, Usage]
---

# LiveChatDeployment

> Represents the general settings for deploying Live Agent on a
   website. This object is available in API version 24.0 and later.

# LiveChatDeployment

Represents the general settings for deploying Live Agent on a website. This object is available in API version 24.0 and later.

## Supported Calls

create(), query(), update(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| BrandingId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe record ID of the static image resource that’s displayed in the chat window. |
| ConnectionTimeoutDuration | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionIndicates the amount of time before the chat times out, in seconds. |
| ConnectionWarningDuration | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionIndicates the amount of time before a time-out warning is displayed to the agent, in seconds. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Domains | TypetextareaPropertiesCreate, Filter (unavailable in API version 25.0 and later), Nillable, Sort (unavailable in API version 25.0 and later)DescriptionA comma-separated list of domains the deployment is allowlisted for. Leave this blank to allow the deployment to be used on any domain. |
| HasTranscriptSave | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionDetermines whether visitors can download and save transcripts from the chat window. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the deployment. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe name of the deployment |
| MobileBrandingId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe record ID of the static image resource displayed in the mobile version of the chat window. |
| OptionsHasPrechatApi | TypebooleanPropertiesCreate, FilterDescriptionDetermines whether developers can access the Pre-Chat API. |
| SiteId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe record ID of the site used for loading static resources. |
| WindowTitle | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe text displayed in the title bar of the browser window used to launch the chat window. |

## Usage

Use this object to query and manage live chat deployments.
