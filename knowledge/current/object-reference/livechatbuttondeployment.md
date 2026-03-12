---
title: "LiveChatButtonDeployment"
domain: object-reference
topic: livechatbuttondeployment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.360Z
estimatedTokens: 167
keywords: [LiveChatButtonDeployment, Associates, automated, chat, invitation, specific, deployment, API, versions, 28.0, later, Calls, Usage]
---

# LiveChatButtonDeployment

> Associates an automated chat invitation with a specific
		deployment. This object is available in API versions 28.0 and
		later.

# LiveChatButtonDeployment

Associates an automated chat invitation with a specific deployment. This object is available in API versions 28.0 and later.

## Supported Calls

create(), delete()query(), update(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| ButtonId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the automated invitation associated with the deployment. |
| DeploymentId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the deployment that will feature the automated invitation. |

## Usage

Use this object to associate automated chat invitations with specific deployments.
