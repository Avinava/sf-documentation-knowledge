---
title: "AppTabMember"
domain: object-reference
topic: apptabmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.795Z
estimatedTokens: 269
keywords: [AppTabMember, tabs, apps, API, version, 43.0, later, Calls]
---

# AppTabMember

> Represents the list of tabs for each of the available apps. This
		object is available in API version 43.0 and later.

# AppTabMember

Represents the list of tabs for each of the available apps. This object is available in API version 43.0 and later.

## Supported Calls

describeSObjects(), query()

## Fields

| Field Name | Details |
| --- | --- |
| AppDefinitionId | TypestringPropertiesFilter, Nillable, SortDescriptionThe ID of the AppDefinition object.This is a relationship field.Relationship NameAppDefinitionRelationship TypeLookupRefers ToAppDefinition |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA unique virtual Salesforce ID for the color. |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number used to sort this tab in the application. |
| TabDefinitionId | TypestringPropertiesFilter, Nillable, SortDescriptionThe ID of the TabDefinition object.This is a relationship field.Relationship NameTabDefinitionRelationship TypeLookupRefers ToTabDefinition |
| WorkspaceDriverField | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRefers to the workspace mapping in the CustomApplication Metadata API object. |
