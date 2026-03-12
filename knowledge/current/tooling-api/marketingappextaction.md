---
title: "MarketingAppExtAction"
domain: tooling-api
topic: marketingappextaction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.139Z
estimatedTokens: 626
keywords: [MarketingAppExtAction, Action, add, Engagement, Studio, programs, Account, execute, third-party, app, API, version, 56.0, later, SOAP]
---

# MarketingAppExtAction

> Represents an Action Type, which is an action that you can add to Engagement
         Studio programs in Account Engagement and execute in a third-party app. This object is
      available in API version 56.0 and later.

# MarketingAppExtAction

Represents an Action Type, which is an action that you can add to Engagement Studio programs in Account Engagement and execute in a third-party app. This object is available in API version 56.0 and later.

## Supported SOAP Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

MarketingAppExtAction is available to customers with Account Engagement Plus, Advanced, or Premium editions.

## Fields

| Field | Details |
| --- | --- |
| ActionName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the action for internal use. Appears in the UI. |
| ActionParams | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe parameters for the invocable action. Appears in the UI. |
| ActionSchema | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe JSON schema for the invocable action. Appears in the UI. |
| ActionSelector | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionInvocable action selector. Appears in the UI. |
| ApiName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThis name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API. Appears in the UI. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the action for internal reference. Appears in the UI. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe default value is false. Appears in the UI. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MarketingAppExtensionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThis field is a relationship field.Relationship NameMarketingAppExtensionRelationship TypeLookupRefers ToMarketingAppExtension |
| Version | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionReserved for future use. |
