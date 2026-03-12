---
title: "CustomFulfillmentScopeCnfg"
domain: revenue-cloud
topic: customfulfillmentscopecnfg
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:12.793Z
estimatedTokens: 997
keywords: [CustomFulfillmentScopeCnfg, user-defined, scope, define, customize, scope-specific, validation, orchestration, flexible, fulfillment, API, version, 64.0, later, SOAP]
---

# CustomFulfillmentScopeCnfg

> Represents a user-defined scope to define and customize scope-specific
         validation and orchestration for flexible fulfillment. This object is available in API
      version 64.0 and later.

# CustomFulfillmentScopeCnfg

Represents a user-defined scope to define and customize scope-specific validation and orchestration for flexible fulfillment. This object is available in API version 64.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| AssetContextTag | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContext tag that's used to derive custom scope value from assets. This field is available in API version 65.0 and later. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired.Name of the custom fulfillment scope. |
| DoesParticipatingAssetImpact | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired.Indicates whether the technical assets related to sales transactions impact the fulfillment line item actions (true) or not (false). If set to true, Dynamic Revenue Orchestrator reuses the existing technical assets with the same custom value.The default value is false. |
| FallbackScope | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionScope that's used when custom scope can't be determined.Valid value is:LineItemIf an empty value is returned, then ID of the line item is used.The default value is LineItem. |
| IsAssetized | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the fulfillment line items grouped by the custom scope are assetized true or not (false). If set to false, then the scope can't be associated with assetizable products.The default value is false. |
| ItemContextTag | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired.Context tag that's used to derive custom scope from item context nodes. The supported value is of string type only. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the CustomFulfillmentScopeCnfg tooling API object. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel of the custom fulfillment scope. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
