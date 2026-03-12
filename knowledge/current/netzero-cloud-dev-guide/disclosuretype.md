---
title: "DisclosureType"
domain: netzero-cloud-dev-guide
topic: disclosuretype
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:57.421Z
estimatedTokens: 603
keywords: [DisclosureType, disclosures, individual, organization, associated, metadata, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, API, version, 57.0, later, Calls]
---

# DisclosureType

> Represents the types of disclosures that are done by an individual or
         an organization and the associated metadata. This object is available in API version
      57.0 and later.

# DisclosureType

Represents the types of disclosures that are done by an individual or an organization and the associated metadata. This object is available in API version 57.0 and later.

## Supported SOAP API Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description about the disclosure type. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name for the DisclosureType object.The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API. |
| DisclosureBodyLogoId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe logo of the standard body to which an individual or a company is making a disclosure.This field is a relationship field.Relationship NameDisclosureBodyLogoRelationship TypeLookupRefers ToStaticResource |
| DisclosureBodyUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL of the disclosure standard body. |
| DisclosureCategory | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe name of the clause library category that's used for disclosure.Possible values are:0zMRN0000000001—ESGEnvSocGvnc—Environment, Social, and Governance |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the DisclosureType.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the DisclosureType. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<DisclosureType
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<description>This is ESG Disclosure Type</description>
	<disclosureBodyLogo>asdf</disclosureBodyLogo>
	<disclosureCategory>EnvSocGvnc</disclosureCategory>
	<disclosureBodyUrl>disclosure body url</disclosureBodyUrl>
	<isProtected>false</isProtected>
	<masterLabel>ESG</masterLabel>
</DisclosureType>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<fullName>Pkg</fullName>
	<types>
		<members>ESG</members>
		<name>DisclosureType</name>
	</types>
	<types>
		<name>StaticResource</name>
		<members>asdf</members>
	</types>
	<version>57.0</version>
</Package>
```
