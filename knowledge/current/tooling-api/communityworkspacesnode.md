---
title: "CommunityWorkspacesNode"
domain: tooling-api
topic: communityworkspacesnode
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.030Z
estimatedTokens: 479
keywords: [CommunityWorkspacesNode, node, Experience, Workspaces, Tooling, API, version, 39.0, later, SOAP, Calls, REST, HTTP]
---

# CommunityWorkspacesNode

> Represents a
            node used in Experience Workspaces. Available in Tooling API version 39.0 and
        later.

# CommunityWorkspacesNode

Represents a node used in Experience Workspaces. Available in Tooling API version 39.0 and later.

## Supported SOAP Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesFilter, Nillable, SortDescriptionA description of the field. |
| DevName | TypestringPropertiesFilter, Group Nillable, SortDescriptionAPI name of the chart. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. |
| ExternalId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA unique system-generated numerical identifier for the user. |
| HelpLocator | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URL for the help page. |
| Label | TypestringPropertiesFilter, Group Nillable, SortDescriptionThe display label of the Workspaces component. |
| Locator | TypestringPropertiesFilter, Nillable, SortDescriptionThe aura component list (aura page) or page URL (aloha page). |
| NetworkID | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Experience Cloud site. |
| PageType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionType of page accessed within Experience Workspaces. |
| Parent | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe devName of the parent node. |
| Workspace | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe devName of the workspace the node belongs to. |
