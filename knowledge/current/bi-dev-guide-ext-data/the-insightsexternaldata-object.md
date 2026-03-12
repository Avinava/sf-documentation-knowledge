---
title: "The InsightsExternalData Object"
domain: bi-dev-guide-ext-data
topic: the-insightsexternaldata-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.165Z
estimatedTokens: 2476
keywords: [InsightsExternalData, configure, control, external, data, uploads, provide, metadata, trigger, start, upload, process, check, status, cancellation]
---

# The InsightsExternalData Object

> With the InsightsExternalData object, you can configure and control external data
      uploads. You can use it to provide metadata, trigger the start of the upload process, check
      status, and request cancellation and cleanup.

# The InsightsExternalData Object

With the InsightsExternalData object, you can configure and control external data uploads. You can use it to provide metadata, trigger the start of the upload process, check status, and request cancellation and cleanup.

The InsightsExternalData object is used with the InsightsExternalDataPart object, which holds the parts of the data to be uploaded. Together, they provide a programmatic way to upload a large file in parts and trigger a dataflow into a dataset. The first step is to insert a row into the InsightsExternalData object. Data parts are then uploaded to InsightsExternalDataPart objects. The Mode field is used to enable faster uploads. The Action field of the InsightsExternalData object is updated to start processing and request cancellations. After the Action field is updated to request processing, no user edits are allowed on the objects, except to request cancellation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_ext_data)

#### Note

The standard system fields (CreatedById, CreatedDate, LastModifiedById, LastModifiedDate, and SystemModstamp) are documented in [System Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/system_fields.htm) in the Salesforce Object Reference.

The InsightsExternalData object is available in API version 31 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Action | TypePicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe action to perform on this data. Picklist values are:AbortReserved for future use. The user no longer wants to upload the data and is requesting that the system stop processing, if possible.DeleteReserved for future use. The user wants to remove uploaded data parts as soon as possible. Implies that an Abort status is queued.NoneThe user hasn’t completed the data upload. This value is the default when the object is created.ProcessThe user completed the data upload and is requesting that the system process the data. |
| CompressedMetadataLength | TypeIntPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe length of the compressed metadata .json file. This field is overwritten when data is uploaded. This system field isn’t editable. |
| Dataflow | TypeStringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor dataflows that were created in API version 34.0 and later. The unique ID of the dataflow that was used to create the dataset. You can use this field to get the status of the dataflow. This system field isn’t editable. |
| Description | TypeStringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the dataset that is only used when creating the dataset. |
| EdgemartAlias | TypeStringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe alias of a dataset, which must be unique across an organization. The alias must follow the same guidelines as other field names, except that they can’t end with “__c”. Can be up to 80 characters. For more information, see Field Names in the CRM Analytics External Data Format Developer Guide. |
| EdgemartContainer | TypeStringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the app that contains the dataset.If the name is omitted when you’re creating a dataset, the name of the user’s private app is used.If the name is omitted for an existing dataset, the system resolves the app name.If the name is specified for an existing dataset, the name is required to match the name of the current app that contains the dataset.NoteUse the developer name or the ID of the app for the name. To get the developer name or ID, run this query:SELECT Id,DeveloperName,Name, AccessType,CreatedDate,Type FROM Folder where Type = 'Insights'For example, the display label of an app is Analytics Cloud Public Datasets, but the developer name is AnalyticsCloudPublicDatasets. |
| EdgemartLabel | TypeStringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe display name for the dataset. Can be up to 255 characters. |
| FileName | TypeStringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifier of the external data file, such as the file name. A unique value isn’t required. It can contain only alphanumeric characters and underscores. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. The maximum file name is 255 characters.NoteCRM Analytics doesn’t populate this field. You can manually update it via the External Data API. |
| Format | TypePicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe format of the uploaded data. Picklist values are:CsvThe data is in CSV format.BinaryReserved for Salesforce internal use. |
| isDependentOnLastUpload | TypeBooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionReserved for future use. When false, indicates that this upload depends on the previous upload to the same dataset name. |
| isIndependentParts | TypeBooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionReserved for future use. When true, indicates that file parts were divided on row boundaries and can be processed independently of each other. The default is false. |
| LicenseType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe license type of the external data file. Possible values are:Aqs (Analytics Query Service)Cdp (Data 360)DataPipelineQuery (Data Pipeline Query)EinsteinAnalytics (CRM Analytics)IntelligentApps (Intelligent Apps)Sonic (Salesforce Data Pipelines)The default value is EinsteinAnalytics. |
| MetaDataLength | TypeIntPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe length of the metadata .json file. This field is overwritten when data is uploaded.This system field isn’t editable. |
| MetadataJson | TypeBlob (Base64-encoded string)PropertiesCreate, Nillable, UpdateDescriptionMetadata in JSON format, which describes the structure of the uploaded file. |
| Mode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe upload mode for the data. Possible values are:IncrementalNoneThe default value is None. |
| NotificationEmail | TypeStringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address to send notifications to. Can be up to 255 characters and can contain only one email address. Defaults to the current user’s email address. |
| NotificationSent | TypePicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates when to send notifications about the upload. Picklist values are:AlwaysAlways send notifications.NeverNever send notifications.FailuresSend notifications if the upload process failed.WarningsSend notifications if warnings occurred during the upload.SuccessSend notifications if the upload is successful.SuccessFailuresSend notifications if the upload is successful or if the process failed.WarningsFailuresSend notifications if warnings or failures occurred during the upload.WarningsSuccessSend notifications if the upload is successful or if warnings occurred during the upload.The default value is 'WarningsFailures'. |
| Operation | TypePicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionIndicates which operation to use when you’re loading data into the dataset. Picklist values are:AppendAppend all data to the dataset. Creates a dataset if it doesn’t exist.NoteIf the dataset or rows contain a unique identifier, the append operation isn’t allowed.DeleteDelete the rows from the dataset. The rows to delete must contain one (and only one) field with a unique identifier.OverwriteCreate a dataset with the given data, and replace the dataset if it exists.UpsertInsert or update rows in the dataset. Creates a dataset if it doesn’t exist. The rows to upsert must contain one (and only one) field with a unique identifier. For more information about unique identifiers, see isUniqueId in the CRM Analytics External Data Format Developer Guide.NoteA metadata JSON file is required for the append, upsert, and delete operations. The data and metadata for the append and upsert operations must match the dataset on which the operation is happening. (All columns, dimensions, and measures must match exactly.) The metadata for the delete operation must be a subset of the dataset columns. |
| Status | TypePicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe status of this data upload. The initial value is null. Picklist values are:CompletedThe data upload job was completed successfully. Data parts are retained for 7 days after completion.CompletedWithWarningsThe data upload job completed, but contains warnings. Data parts are retained for 7 days after completion.FailedThe data upload job failed. Data parts are retained for 7 days after failure.InProgressThe data upload job is in progress.NewThe data upload job has been created.NotProcessedThe data upload job was aborted on user request. Data parts have been removed.QueuedThe data upload job has been scheduled. This system field isn’t editable.The default value is New. |
| StatusMessage | TypeStringPropertiesCreate, Nillable, UpdateDescriptionThe reason for the file upload failed or has warnings. This system field isn’t editable. |
| SubmittedDate | TypeStringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time when the upload was submitted or set to Process. This system field isn’t editable. |
| Target | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe target for the external data. Valid values are Dataset. |
