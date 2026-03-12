---
title: "EmbeddedServiceBranding"
domain: tooling-api
topic: embeddedservicebranding
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.363Z
estimatedTokens: 1309
keywords: [EmbeddedServiceBranding, branding, Embedded, Service, deployment, Tooling, API, version, 39.0, later, SOAP, Calls, REST, HTTP]
---

# EmbeddedServiceBranding

> Represents branding for each Embedded Service deployment. Available in Tooling API
        version 39.0 and later.

# EmbeddedServiceBranding

Represents branding for each Embedded Service deployment. Available in Tooling API version 39.0 and later.

## Supported SOAP Calls

create(), delete(), describe(), query(), retrieve(), update()

## Supported REST HTTP Methods

DELETE, GET, HEAD, PATCH, POST, PUT, Query

## Fields

| Field | Details |
| --- | --- |
| ContrastInvertedColor | TypestringPropertiesFilter, Group, Nillable SortDescriptionAccent branding color used in the embedded component, displayed as a hexadecimal value. Changes made to this field in the API aren’t reflected in the embedded component. Available in API version 43.0 and later. |
| ContrastPrimaryColor | TypestringPropertiesFilter, Group, Nillable SortDescriptionAccent branding color used in the embedded component, displayed as a hexadecimal value. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the branding component.This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Font | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionFont used in the text of the embedded component. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated EmbeddedServiceBranding in Metadata API. The full name can include a namespaceprefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the embedded component.Possible values are:ar—Arabicda—Danishde—Germanen_US—Englishes—Spanishfi—Finnishfr—Frenchiw—Hebrewja—Japaneseko—Koreannl_BE—Dutch (Belgium)no—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaiur—Urduzh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for the embedded component. |
| Metadata | TypeEmbeddedServiceBrandingPropertiesCreate, Nillable, UpdateDescriptionThe embedded service branding's metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| NavBarColor | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionColor used for the navigation bar in the embedded component. |
| NavBarTextColor | TypestringPropertiesFilter, Group, Nillable, SortDescriptionColor used for the text and icons in the header in the embedded component, displayed as a hexadecimal value. Available in API version 49.0 and later. |
| PrimaryColor | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionPrimary branding color used in the embedded component. |
| SecondaryColor | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSecondary branding color used in the embedded component. |
| SecondaryNavBarColor | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSecondary branding color used for the header in the embedded component, displayed as a hexadecimal value. It applies to the header in the chat feature when it's trying to reconnect because of lost internet connection. Available in API version 49.0 and later. |
