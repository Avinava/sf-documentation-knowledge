---
title: "AppDefinition"
domain: object-reference
topic: appdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.648Z
estimatedTokens: 935
keywords: [AppDefinition, metadata, app, navigation, items, apps, current, user, access, API, version, 43.0, later, Calls]
---

# AppDefinition

> Represents the metadata of an app and its navigation items. Metadata is
			returned only for apps that the current user can access. This object is available
		in API version 43.0 and later.

# AppDefinition

Represents the metadata of an app and its navigation items. Metadata is returned only for apps that the current user can access. This object is available in API version 43.0 and later.

## Supported Calls

describeSObjects(), query()

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe optional description of the application. |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe developer name of the application. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA unique virtual Salesforce ID for the application. |
| HeaderColor | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe header color in the application. Specify the color with a hexadecimal code, such as #0000FF for blue. |
| Id | TypeIDPropertiesDefaulted on create, Filter, Group, idLookup, SortDescriptionA default Salesforce ID. |
| IsLargeFormFactorSupported | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the Large form factor is set in the CustomApplication metadata. |
| IsMediumFormFactorSupported | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the Medium form factor is set in the CustomApplication metadata. |
| IsNavAutoTempTabsDisabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the navigation automatically creates temporary tabs settings. |
| IsNavPersonalizationDisabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether navigation personalization is disabled. |
| IsNavTabPersistenceDisabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether workspace tabs are cleared for each new console session. |
| IsOmniPinnedViewEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the Omni-Channel component is enabled in sidebar view. The default is false. |
| IsOverrideOrgTheme | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether to override the global theme for the org. When true, the color scheme and logo that the user has set are used. When false, the global theme for the org is used, even if the user has set a color scheme and logo. |
| IsSmallFormFactorSupported | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the Small form factor is set in the CustomApplication metadata. |
| Label | TypestringPropertiesFilter, Nillable, SortDescriptionThe localized label value corresponding to the MasterLabel field. |
| LogoUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe logo URL of the application as selected by the admin. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe non-translated label entered when the application was created. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the application. |
| NavType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of navigation for the application. The value Standard is for Lightning Experience. The value Console is for Salesforce console. A null value is for Salesforce Classic. |
| UiType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the type of custom application. The value Aloha is for Salesforce Classic, and Lightning is for Lightning Experience. |
| UtilityBar | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the utility bar associated with this application. |
