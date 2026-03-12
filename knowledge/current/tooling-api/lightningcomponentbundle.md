---
title: "LightningComponentBundle"
domain: tooling-api
topic: lightningcomponentbundle
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.934Z
estimatedTokens: 1245
keywords: [LightningComponentBundle, Represents, Lightning, web, component, bundle., bundle, contains, its, related, resources., API, version, 45.0, later., Supported, SOAP, Calls, REST, HTTP]
---

# LightningComponentBundle

> Represents a Lightning web component bundle. A
            bundle contains a Lightning web component and its related resources. Available in
        API version 45.0 and later.

# LightningComponentBundle

Represents a Lightning web component bundle. A bundle contains a Lightning web component and its related resources. Available in API version 45.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API HTTP Methods

Query, GET, POST, PATCH, DELETE

## Fields

| Field Name | Details |
| --- | --- |
| ApiVersion | TypedoublePropertiesFilter, Nillable, SortDescriptionThe API version for this bundle. Every bundle has an API version specified at creation. |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionThe text description of the bundle. Maximum size of 255 characters. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the record in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe unique name used as the LightningComponentBundle identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsExplicitImport | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether imports between files are done explicitly by the developer (true) or implicitly by the framework (false). |
| IsExposed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the component is available to other namespaces, including namespaces outside of a managed package. If true and TargetConfigs is present, the component is also available to Salesforce builders such as Lightning App Builder and Experience Builder. If false, the component isn't available to builders and other namespaces. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the MasterLabel. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionMaster label for the Lightning bundle. This internal label doesn’t get translated. |
| Metadata | Typemns:LightningComponentBundlePropertiesCreate, Nillable, UpdateDescriptionThe LightningComponentBundle metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| TargetConfigs | TypetextareaPropertiesNillableDescriptionConfigurations for each target. Each target is a Lightning page type that can be configured in Lightning App Builder. |

## Usage

For more information about Lightning web components, see [Lightning Web Components Developer Guide](https://developer.salesforce.com/docs/component-library/documentation/lwc "HTML (New Window)").
