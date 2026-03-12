---
title: "MarketingAppExtension"
domain: tooling-api
topic: marketingappextension
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.015Z
estimatedTokens: 902
keywords: [MarketingAppExtension, Represents, integration, third-party, app, service, generates, prospect, external, activity., API, version, 53.0, later., Important, Supported, SOAP, Calls, REST, HTTP]
---

# MarketingAppExtension

> Represents an integration with a
            third-party app or service that generates prospect external activity. Available in API
            version 53.0 and later.

# MarketingAppExtension

Represents an integration with a third-party app or service that generates prospect external activity. Available in API version 53.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s field names.

## Supported SOAP Calls

describeLayout(), describeSObjects(), query(), retrieve(), search()

## Supported REST HTTP Methods

GET, PATCH, POST

## Special Access Rules

MarketingAppExtension is available to customers with Account Engagement Plus, Advanced, or Premium editions.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesNillableDescriptionThe description of the activity for internal reference. Appears in the UI. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name for the MarketingAppExtension object. In the UI, this field is API Name.This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API. Appears in the UI as API Name. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionThis field makes data for a Marketing App Extension available to use in Account Engagement automations. Label is Active in Automations.The default value is false. Appears in the UI. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the MarketingAppExtensionPossible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, idLookup, SortDescriptionLabel for the MarketingAppExtension. In the UI, this field is Extension Name. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
