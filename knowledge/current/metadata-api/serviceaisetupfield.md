---
title: "ServiceAISetupField"
domain: metadata-api
topic: serviceaisetupfield
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:54.586Z
keywords: [ServiceAISetupField, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Usage]
---

# ServiceAISetupField

# ServiceAISetupField

Represents a field on cases or knowledge articles that Einstein uses to identify relevant articles in Einstein Article Recommendations. This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

ServiceAISetupField components have the suffix .serviceAiSetupField and are stored in the serviceAiSetupFields folder.

## Version

ServiceAISetupField components are available in API version 51.0 and later.

## Special Access Rules

This type is available only if Einstein Article Recommendations is enabled in your org and the Main Services Agreement has been accepted.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| entity | string | Required. The Case or KnowledgeArticle object for the field. |
| field | string | Required. The API name of the field. |
| fieldMappingType | ServiceAISetupFieldType (enumeration of type string) | Required. The field type. Valid values are:CASE_DESCCASE_SUBJARTICLE_TITLEARTICLE_CONTENTARTICLE_SUMMARY |
| fieldPosition | int | Required. A positive number used to rank the field’s importance. The value 1 is most important; higher numbers indicate less important fields. Einstein considers fields in the order of importance. |
| name | string | Required. A reference to the field. |
| setupDefinition | string | Required. A reference to the parent ServiceAISetupDefinition. |

## Declarative Metadata Sample Definition

The following is an example of a ServiceAISetupField component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Usage

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").