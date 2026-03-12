---
title: "DataStreamDefinition"
domain: metadata-api
topic: datastreamdefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:38.257Z
estimatedTokens: 913
keywords: [DataStreamDefinition, data, ingestion, connection, API, file, retrieval, settings, Suffix, Directory, Location, Version, Special, Access, Rules]
---

# DataStreamDefinition

> Contains data ingestion information such as
   connection, API, and file retrieval settings.

# DataStreamDefinition

Contains data ingestion information such as connection, API, and file retrieval settings.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

DataStreamDefinition components have the suffix dataStreamDefinition and are stored in the dataStreamDefinitions folder.

## Version

DataStreamDefinition components are available in API version 50.0 and later.

## Special Access Rules

You need the Salesforce CustomizeApplication permission to access this object.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| areHeadersIncludedInFile | boolean | If true, headers are included in the file if this is a single file stream. |
| bulkIngest | boolean | If true, files are aggregated before data is ingested if the file names contain a wildcard. For example, profiles*.csv. |
| definitionCreationType | string | Required. Enum tracks the source of an object or field creation. Valid values are:CustomStandardValid values available in API version 62.0 and later are:ADGCalculated_InsightCG_AudienceChunkDirectory_TableExternalSemanticTransformVector_Embedding |
| dataConnector | string | Required. Describe whether this data stream definition was created by a customer or by an internal system. |
| dataConnectorType | DataConnectorType (enumeration of type string) | The ingestion data source. Valid values are:ACCOUNTENGAGEMENTAwsS3AzureBlobBIG_QUERYCuratedEntityDataCloudExternalPlatformGoogleCloudStorageIngestApiREDSHIFTSalesforceCommerceCloudSalesforceDotComSalesforceInteractionStudioSalesforceMarketingCloudSFTPSnowflakeStreamingAppUPLOAD |
| dataExtensionIdentifier | string | For a Marketing Cloud data extension, the unique identifier. |
| dataExtractField | string | Name of the transport field that’s used when the extract method is CDC. |
| dataExtractMethods | DataImportDataExtractMethods (enumeration of type string) | Describes how to identify the data to be extracted. Valid values include:DATETIME_CDCFULL_REFRESHNUMERIC_CDCBINARY_CDC (reserved for future use) |
| dataPlatDataSetBundle | string | Identifies which data set bundle this definition was created from. Useful in cases where the same item can be configured across data connections. |
| dataPlatformDataSet | string | The description is provided by the developer. |
| dataPlatformDataSetItemName | string | Name of the Data Platform Set Item. |
| dataSource | string | Required. A reference to the data source from which the data originated. This is usually the API name or a unique system identifier, such as the enterprise ID (EID) of the customer in the format MC_<EID>. Example: MCEnterprise or MC_12345. |
| description | string | Required. A description of the data stream definition. |
| fileNameWildcard | string | File or wildcard (*) used when finding files. |
| internalOrganization | string | The name of the internal organization. |
| isLimitedToNewFiles | boolean | If true, file retrieval is limited to new files. |
| isMissingFileFailure | boolean | If true, treat the case of missing files as a failure. |
| masterLabel | string | Required. UI label for this data stream definition. |
| mktDataLakeObject | string | Required. Reference to the landing entity (target) where data will be stored. |
| mktDataTranObject | string | Reference to the object that’s used to transport information from the source to a landing entity (target). |
