---
title: "DataKitObjectTemplate"
domain: metadata-api
topic: datakitobjecttemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.697Z
keywords: [DataKitObjectTemplate, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# DataKitObjectTemplate

# DataKitObjectTemplate

Represents the object in Data Kit Object Template. These object templates are added inside the data kit.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this metadata type’s name.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DataKitObjectTemplate components have the suffix .DataKitObjectTemplate and are stored in the DataKitObjectTemplate folder.

## Version

DataKitObjectTemplate components are available in API version 63.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| developerName | Field TypestringDescriptionRequired. Name of the data kit object template. This can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| entityPayload | Field TypestringDescriptionA string-based JSON payload containing the metadata of a data kit component. The payload is templatized to enable variable substitution during the deployment process. |
| masterLabel | Field TypestringDescriptionRequired. The label of the data kit object template. |
| parentDataPackageKitDefinitionName | Field TypestringDescriptionRequired. The linked data kit package definition in the data kit. |
| sourceObject | Field TypestringDescriptionThe developer name of the source object for the data kit object template. |
| sourceObjectType | Field TypestringDescriptionRequired. The object type of the metadata component in the data kit. Valid values are:MKT_DATA_TRANSFORMMKT_DATA_CONNECTIONIDENTITY_RESOLUTIONDATA_GRAPHEXT_DATA_SHARESEMANTIC_SEARCHDATA_ACTIONDATA_ACTION_TARGETMARKET_SEGMENTDATA_SPACE_MEMBERINTERNAL_DATA_CONNECTORMARKET_SEGMENT_ACTIVATIONSTREAMING_APP_AND_INGESTION_CONNECTORML_CONFIGURED_MODELACTIVATION_TARGETSEMANTIC_MODELPERSONALIZATION_RECOMMENDERPERSONALIZATION_POINTPERSONALIZATION_SCHEMAPERSONALIZATION_OBJECTIVEENGAGEMENT_SIGNALPERSONALIZATION_BATCH_DECISIONMC_CONNECTORML_PREDICTION_JOBML_RETRIEVERTUA_TEMPLATED_OBJECTIR_RELATED_LIST_ENRICHMENTTAG_METADATADATA_CLEAN_ROOM_PROVIDERIDP_CONFIGURATIONCOPY_FIELD_ENRICHMENTDATA_CUSTOM_CODEANALYTICS_VISUALIZATIONANALYTICS_DASHBOARDANALYTICS_WORKSPACESECONDARY_INDEXPOLICY_RULE_DEFINITION_METADATAPOLICY_RULE_DEFINITION_SET_METADATA |
| templateVersion | Field TypestringDescriptionThe version number of the template. |

## Declarative Metadata Sample Definition

The following is an example of a DataKitObjectTemplate component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").