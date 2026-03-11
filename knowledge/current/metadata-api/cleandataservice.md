---
title: "CleanDataService"
domain: metadata-api
topic: cleandataservice
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:51.138Z
keywords: [CleanDataService, Important, File, Suffix, Directory, Location, Version, Fields, CleanRule, FieldMapping, FieldMappingRow, FieldMappingField, Declarative, Metadata, Sample, Definition, Usage, Wildcard, Support, Manifest]
---

# CleanDataService

# CleanDataService

Represents a data service that adds and updates data in standard objects.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

CleanDataService components have the .cleanDataService suffix and are stored in the cleanDataServices directory. The name of the component file is based on the name of the object associated with the data service. For example, the component file name cleanDataServices/DataCloudCompanyMatch.cleanDataService describes a data service component called DataCloudCompanyMatch that's associated with the company name in account objects.

## Version

CleanDataService components are available in API version 66.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| cleanRules | CleanRule[] | Required. A list of data integration rules |
| description | string | Required. A description of the data service |
| masterLabel | string | Required. Label for this data service. Although this value is displayed, it’s an internal label for the data service and isn’t translated. |
| matchEngine | string | Required. A key that maps to the internal data service identifier. |

## CleanRule

Represents information that controls how the data service adds and updates data in an org.

| Field Name | Field Type | Description |
| --- | --- | --- |
| bulkEnabled | boolean | Required. If this field is set to true, Salesforce applies the data integration rule to existing records whenever the rule is updated or saved. |
| bypassTriggers | boolean | Required. If this field is set to true, Salesforce bypasses triggers when it applies the rule; otherwise, it applies triggers after it applies the rule. |
| bypassWorkflow | boolean | Required. If this field is set to true, Salesforce bypasses workflow rules when it applies the data integration rule; otherwise, it applies workflow rules after it applies the rule. |
| description | string | Required. User-friendly text that describes the data integration rule. |
| developerName | string | Required. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This unique name prevents conflicts with rules from other packages that have the same masterLabel.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| fieldMappings | FieldMapping[] | Required. A list of FieldMapping entries for the rule. |
| masterLabel | string | Required. Label for this object. This display value is the internal label that is not translated. |
| matchRule | string | Required. An internal label for a matching rule in the data service that’s associated with the CleanRule. |
| sourceSobjectType | string | Required. A virtual object in the data service that is associated with the CleanRule. Specifying a non-existent object causes an error. |
| status | string | Required. Status of the data integration rule. Valid values are Active and Inactive. |
| targetSobjectType | string | Required. A standard object that’s the target of additions and updates specified by this CleanRule. Specifying an object that the data service does not support causes an error. |

## FieldMapping

Represents a mapping between fields in the data service and fields in an object in the org.

| Field Name | Field Type | Description |
| --- | --- | --- |
| developerName | string | Required. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This unique name prevents conflicts with field mappings from other packages that have the same masterLabel.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| fieldMappingRows | FieldMappingRow[] | Required. A list of FieldMappingRow entries. Each entry represents a field in a standard object that maps to a field in the data service. |
| masterLabel | string | Required. Label for this object. This display value is the internal label that is not translated. |
| SObjectType | string | Required. The standard object associated with this FieldMapping. Specifying an object that the data service does not support causes an error. |

## FieldMappingRow

Represents the status of a CleanRule.

| Field Name | Field Type | Description |
| --- | --- | --- |
| fieldName | string | The display name for the field represented by the FieldMappingRow. |
| fieldMappingFields | FieldMappingField[] | Required. A list of FieldMappingField entries. Each entry is a field in a standard object that maps to a field in the data service. |
| mappingOperation | string | The comparison operation the data service applies when it compares the value of this FieldMappingRow to the mapped field in the object specified in SObjectType. The value of this field is AutoFill, which indicates that the data service only adds data if the object field is blank. |
| SObjectType | string | The standard object for the field mapped to the FieldMappingRow. Specifying an object that the data service does not support causes an error. |

## FieldMappingField

Represents a field in a standard object. A FieldMappingField maps to a FieldMappingRow entry in a data service.

| Field Name | Field Type | Description |
| --- | --- | --- |
| dataServiceField | string | Required. A field in the data service that is mapped to this field. |
| dataServiceObjectName | string | Required. An object in the data service that contains the FieldMappingRow associated with this FieldMappingField. Specifying a non-existent object causes an error. |
| priority | int | Required. Represents the priority that the data service uses when it updates the field, relative to other update rules for the same field. Valid values are 1-100. |

## Declarative Metadata Sample Definition

The following is an example of a CleanDataService component for the lead standard object.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Usage

Use CleanDataService to retrieve all the metadata that describes a data enrichment service. To configure the service in a new org, deploy the metadata you retrieved. Avoid using CRUD-Based Calls with CleanDataService.

To make small modifications to the CleanDataService component, use the Tooling API.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").