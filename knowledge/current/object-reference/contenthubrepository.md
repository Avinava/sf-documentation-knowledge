---
title: "ContentHubRepository"
domain: object-reference
topic: contenthubrepository
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.131Z
estimatedTokens: 364
keywords: [ContentHubRepository, Files, Connect, external, data, source, Microsoft, SharePoint, OneDrive, Business, API, version, 33.0, later, Special]
---

# ContentHubRepository

> Represents a Files Connect external data source such as Microsoft
			SharePoint or OneDrive for Business. This object is available in API version 33.0
		and later.

# ContentHubRepository

Represents a Files Connect external data source such as Microsoft SharePoint or OneDrive for Business. This object is available in API version 33.0 and later.

## Special Access Rules

Chatter and Files Connect must be enabled for the organization.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the record in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionMaster label for the external data source. This display value is the internal label and does not get translated. |
| Type | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe data source type. Possible values are:contenthubGoogleDrivecontenthubOffice365contenthubOneDrivecontenthubSharepointcontenthubBoxcontenthubQuip |
