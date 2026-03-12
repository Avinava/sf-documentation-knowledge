---
title: "MarketingAppExtActivity"
domain: tooling-api
topic: marketingappextactivity
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.148Z
estimatedTokens: 1060
keywords: [MarketingAppExtActivity, Activity, prospect, occurs, third-party, app, Account, Engagement, automations, API, version, 53.0, later, SOAP, Calls]
---

# MarketingAppExtActivity

> Represents an Activity Type, which is a
            prospect activity that occurs in a third-party app and can be used in Account Engagement
            automations. . Available in API version 53.0 and later.

# MarketingAppExtActivity

Represents an Activity Type, which is a prospect activity that occurs in a third-party app and can be used in Account Engagement automations. . Available in API version 53.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s field names.

## Supported SOAP Calls

create(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

GET, HEAD, PATCH, POST, Query

## Special Access Rules

MarketingAppExtActivity is available to customers with Account Engagement Plus, Advanced, or Premium editions.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the activity for internal reference. Appears in the UI. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name for the MarketingAppExtActivity object. In the UI, this field is Extension API Name.This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API. Appears in the UI as API Name. |
| EndpointUrl | TypestringPropertiesFilter, NillableDescriptionA sample endpoint that can be used to help connect the activity type to a third-party app. Appears in the UI. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field makes data for the Activity Type available to use in Account Engagement automations. Label is Active in Automations.The default value is false. Appears in the UI. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the MarketingAppExtActivity.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MarketingAppExtensionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThis is a relationship field. It identifies the Marketing App Extention that the Activity Type is associated with. Appears in the UI.Relationship NameMarketingAppExtensionRelationship TypeLookupRefers ToMarketingAppExtension |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the MarketingAppExtActivity. In the UI, this field is Activity Name. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
