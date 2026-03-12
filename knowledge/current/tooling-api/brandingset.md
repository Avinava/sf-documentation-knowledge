---
title: "BrandingSet"
domain: tooling-api
topic: brandingset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:43.921Z
estimatedTokens: 1070
keywords: [BrandingSet, branding, Experience, Builder, site, defined, Theme, panel, API, version, 40.0, later, SOAP, Calls, REST]
---

# BrandingSet

> Represents a set of branding properties for an Experience Builder site, as
      defined in the Theme panel in Experience Builder. This object is available in API version
    40.0 and later.

# BrandingSet

Represents a set of branding properties for an Experience Builder site, as defined in the Theme panel in Experience Builder. This object is available in API version 40.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesFilter, Nillable, SortDescriptionA description of the branding set. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionUnique name of the branding set. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the branding set in Metadata API. The full name can include a namespace prefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the branding set.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe manageable state of the branding set that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe user interface name of the branding set. |
| Metadata | TypeBrandingSetPropertiesCreate, Nillable, UpdateDescriptionThe branding set's metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| Type | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of branding set.Possible values are:b2b:branding-b2bb2c-lite-storefront:brandingcitizen:branding-citizencpt:branding-cptcypress:branding-cypressember:branding-emberes-channel-menuhelpCenter:branding-helpCenteridentity:branding-identityinsurance:branding-insurancejepson:branding-jepsonkoa:branding-koakokua:branding-kokualogin:branding-loginlogin:branding-login2lpi:branding-lpimfg:branding-mfgmortgage:branding-mortgagenapili:branding-napilinapili:branding-napili-mergedprm:branding-prm-mergedservice:branding-servicestarter:branding-starterstella:branding-stellasurveytalon-template-byo:brandingwebster:branding-webster |

## Usage

To work with branding set properties, use [BrandingSetProperty](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_brandingsetproperty.htm "Represents a branding set property in the Theme panel in Experience Builder. This object is available in API version 40.0 and later.").

## Related Topics

- BrandingSetProperty (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_brandingsetproperty.htm)
