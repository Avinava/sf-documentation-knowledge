---
title: "BatchProcessJobDefinition"
domain: omnistudio
topic: batchprocessjobdefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.366Z
keywords: [BatchProcessJobDefinition, Note, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# BatchProcessJobDefinition

# BatchProcessJobDefinition

Represents the details of a Batch Management job. This object is available in API version 51.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Data and processes in your org are impacted if you update or delete a BatchProcessJobDefinition record. Update or delete a Batch Management job using the [Metadata API](atlas.en-us.industries_reference.meta/industries_reference/batch_metadata.htm "Use a Metadata API to create, update, and activate Batch Management jobs.").

## Supported SOAP API Calls

describeSObjects(), query(), retrieve()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| BatchJobDefinitionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the associated batch job definition.This is a relationship field.Relationship NameBatchJobDefinitionRelationship TypeLookupRefers ToBatchJobDefinition |
| BatchJobDefinitionName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the associated batch job definition. |
| BatchSize | TypeintPropertiesFilter, Group, SortDescriptionRequired. The number of records that each Batch Management job part can process. The maximum number of transaction journal records that a batch management job can process for flow or loyalty program process is 2000. |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionThe description of the Batch Management job. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name of the Batch Management job. |
| FlowDefinitionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe input variable of the associated flow that uniquely identifies each record that the Batch Management job processes. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe name of the Batch Management job.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language in which the batch job is created.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label of the Batch Management job. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionThe Batch Management job's metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| ProcessGroup | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe group or team for which the Batch Management job processes records. |
| RecordIdVariable | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier that identifies each record that must be processed by the Batch Management job. |
| RetryCount | TypeintPropertiesDefaulted on create, Filter, Group, SortDescriptionRequired. The number of times this Batch Management job must be rerun in case it fails. |
| RetryInterval | TypeintPropertiesDefaulted on create, Filter, Group, SortDescriptionRequired. The number of milliseconds after which the Batch Management job must be rerun in case it fails. A retry interval can be 1,000–10,000 milliseconds. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the Batch Management job.Possible values are:ActiveInactive |
| Type | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of process for which the Batch Management job processes records.Possible values are:FlowBulkUpdateConsumptionOveragesCalculationDecisionTableRefreshDeepCloneSalesAgreementEntitlementCreationBatchJobHighScaleBreProcessIndustriesLSCommercialLoyaltyProgramProcessManagerProvisioningNetUnitRateCalculationPbbToOptyConversionProductCatalogCacheRefreshRatableSummaryCreationSummaryCreationThe default value is Flow. Other types may be available to you depending on the licenses available in your org.This field is available in API version 55.0 and later. |
| TypeInstance | TypestringPropertiesFilter, Group, SortDescriptionRequired. The API name of the process that the Batch Management job must execute. |