---
title: "BatchProcessJobDefinition"
domain: metadata-api
topic: batchprocessjobdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:50.790Z
keywords: [BatchProcessJobDefinition, Important, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, BatchDataSource, BatchDataSrcFilterCriteria, BatchDataSourceOrderField, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# BatchProcessJobDefinition

# BatchProcessJobDefinition

Represents the details of a Batch Management job definition.

This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

BatchProcessJobDefinition components have the suffix .batchProcessJobDefinition and are stored in the batchProcessJobDefinitions folder.

## Version

BatchProcessJobDefinition components are available in API version 51.0 and later.

## Special Access Rules

To use this metadata type, your Salesforce org must have the Loyalty Management or the Rebate Management license. The Loyalty Program Process type is only available in orgs that have Loyalty Management enabled.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| batchSize | integer | Required. Number of records that each Batch Management job can process. Flow type Batch Management jobs can process up to 2000 records and Loyalty Program Process type Batch Management jobs can process up to 250 records. |
| dataSource | BatchDataSource[] | Required. Source of information whose records must be processed by the Batch Management job. |
| description | string | Description of the Batch Management job, up to 255 characters. |
| executionProcessApiName | string | API name of process that must be executed by the Batch Management job. This field is available in API version 55.0 and later.If the batch job’s type is Flow, enter the API name of an active flow that the batch job must execute.If the batch job’s type is Loyalty Program Process, enter:Transaction_Journals if you want the batch job to process Transaction Journal records by applying the applicable active loyalty program process of the type TransactionJournal.API name of an active loyalty process of the type TierProcessing if you want the batch job to run the loyalty program process to assess the tier of eligible members. The API name consists of the name of the process, the process type, and the name of the loyalty program separated by two consecutive underscores. For example, the process API name is Update Member Tier__TierProcessing__Inner Circle if the process name is Update Member Tier, the process type is TierProcessing, and the loyalty program name is Inner Circle.You can use database-based APEX classes that let you use flex queues in the Batch Management job, allowing to place more than 5 jobs in a queue. This functionality is applicable to all Industry Clouds that use managed packages. See Apex Flex Queue. |
| flowApiName | string | API name of an active flow process that must be executed by the Batch Management job.You can either specify the flow API name in the executionProcessApiName field or in the flowApiName field. |
| flowInputVariable | string | Input variable of associated flow that is used by the batch job to uniquely identify records. |
| masterLabel | string | Required. Name of the Batch Management job, up to 80 characters. |
| processGroup | string | Required. Name of the group for which the Batch Management job processes records. |
| retryCount | integer | Required. Number of times this Batch Management job must be rerun in case it fails. The maximum retry count is 3. Valid values are 1–3. |
| retryInterval | integer | Required. Number of milliseconds after which the Batch Management job must be rerun in case it fails. Valid values are 1,000–10,000. |
| status | string | Indicates the status of the Batch Management job. Valid values are Active and Inactive. |
| type | string (enumeration of type string) | The type of process that the Batch Management job must execute. This field is available in API version 55.0 and later. Valid values are:FlowLoyalty Program Process |

## BatchDataSource

Represents the source of information whose records must be processed by the Batch Management job.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| condition | string | Required. Criteria defined to filter the records. |
| criteria | string | Type of filter criteria that’s used to filter records for processing. |
| dataSourceType | string | Type of data source that's used to create the batch job definition. Valid values are:SingleSobjectMultiSobjectAvailable in API version 64.0 and later. |
| filters | BatchDataSrcFilterCriteria[] | Filter criterion that decides which records must be processed by the Batch Management job. |
| orderFields | BatchDataSourceOrderField | Fields that are used to order the records before the records are added to a batch in a job. |
| sourceObject | string | Required. API name of an object whose records must be processed by the batch job.If the batch job type is Loyalty Program Process, the source object must be:TransactionJournal if the batch job is used to process transaction journals by applying the applicable loyalty program process.An object that stores the details of loyalty program members whose tier must be assessed by the loyalty program process specified in the executionProcessApiName field. |
| sourceObjectField | string | API name of the source object field that uniquely identifies records for which the batch job is executed. This field is available in API version 57.0 and later.This field is only applicable when the batch job’s type is Loyalty Program Process and a TierProcess type active loyalty program process is specified in the executionProcessApiName field. Specify the API name of a field that is a lookup to the LoyaltyProgramMember object and uniquely identifies the members whose tier must be assessed. |

## BatchDataSrcFilterCriteria

Represents the filter conditions that decide which records must be processed by the Batch Management job.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| domainObjectName | string | Name of the object the field is associated with. Available in API version 64.0 and later. |
| dynamicValueType | string | Data type of the input variable used as a filter. |
| fieldName | string | Required. Name of the field that must be used to filter records. |
| fieldPath | string | Stores the path to a field in the object. Available in API version 64.0 and later. |
| fieldValue | string | Required. Value of the field that must be filtered. Specify the field if isDynamicValue is set to False. |
| isDynamicValue | boolean | Required. Indicates whether the filter criteria is dynamic. |
| operator | string (enumeration of type string) | Required. Operator that is specified in the filter criteria. Valid values are:equalsexcludesgreaterThangreaterThanOrEqualToinincludeslessThanLessThanOrEqualToGreaterOrEquallikenotEqualsnotIn |
| sequenceNo | integer | Required. Sequence number used to refer the criteria in a filter. |

## BatchDataSourceOrderField

Represents the fields that are used to group data.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| domainObjectName | string | Required. Name of the object the field is associated with. Available in API version 64.0 and later. |
| fieldName | string | Required. Name of the field that must be used to filter records. Available in API version 64.0 and later. |
| fieldPath | string | Required. Stores the path to a field in the object. Available in API version 64.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a BatchProcessJobDefinition component.

```

```

The following is an example of a Flow object used in Metadata API.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").