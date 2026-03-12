---
title: "DisclosureDefinitionVersion"
domain: netzero-cloud-dev-guide
topic: disclosuredefinitionversion
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:57.415Z
estimatedTokens: 962
keywords: [DisclosureDefinitionVersion, version, disclosure, definition, Parent, File, Suffix, Directory, Location, Special, Access, Rules, Declarative, Metadata, Sample, API, 57.0, later, Calls, SOAP]
---

# DisclosureDefinitionVersion

> Represents the version information about the disclosure
         definition. This object is available in API version 57.0 and later.

# DisclosureDefinitionVersion

Represents the version information about the disclosure definition. This object is available in API version 57.0 and later.

## Supported SOAP API Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| AuthoringMode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the authoring mode used to launch the disclosure authoring experience.Possible values are:Microsoft365Word—Microsoft 365 WordOmniScriptAndMcrsft365Wrd—OmniScript and Microsoft 365 WordOmniScriptForm—OmniScript Form |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the disclosure definition version. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name for the DisclosureDefinitionVersion object.The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API. |
| DisclosureDefinition | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe name of the disclosure definition associated with the version.This field is a relationship field.Possible values are:SFTemplateForCsrd—Salesforce Template for CSRD |
| DocumentTemplateGlobalKey | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe document template global key associated with the DOCX template for the disclosure definition version. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the disclosure definition version is an active version (true) or not (false).The default value is false. |
| IsCurrentVersion | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this is the current version of the disclosure definition (true) or not (false).The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the DisclosureDefinitionVersion.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the DisclosureDefinitionVersion. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| OmniScriptCnfgApiName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of the OmniScript configuration that's associated with the disclosure definition version. |
| OmniScriptConfiguration | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe OmniScript configuration that's associated with the disclosure definition version. |
| VersionNumber | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe version of the disclosure definition published by the author. |

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<DisclosureDefinitionVersion xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>This is GRI Disclosure Definition Version</description>
    <versionNumber>disclosure definition version number</versionNumber>
    <isActive>false</isActive>
    <disclosureDefinition>df10</disclosureDefinition>
    <omniScriptConfiguration>omni script configuration</omniScriptConfiguration>
    <omniScriptCnfgApiName>omni script config api name</omniScriptCnfgApiName>
    <isCurrentVersion>true</isCurrentVersion>
    <disclosureDefCurrVer>df10.Id</disclosureDefCurrVer>
    <documentTemplateGlobalKey>document template global key</documentTemplateGlobalKey>
    <authoringMode>OmniScriptForm</authoringMode>
    <masterLabel>GRI</masterLabel>
    <isProtected>false</isProtected>
</DisclosureDefinitionVersion>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<fullName>Pkg</fullName>
	<types>
		<members>GRI</members>
		<name>DisclosureDefinitionVersion</name>
	</types>
	<types>
		<members>df10</members>
		<name>DisclosureDefinition</name>
	</types>
	<types>
		<members>dt10</members>
		<name>DisclosureType</name>
	</types>
	<version>60.0</version>
</Package>
```
