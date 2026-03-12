---
title: "DatasetExport"
domain: sfFieldRef
topic: datasetexport
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.947Z
estimatedTokens: 396
keywords: [DatasetExport, dataset, exported, CRM, Analytics, data, converted, csv, file, schema, stored, separate, JSON, files, two]
---

# DatasetExport

> Represents a dataset exported from CRM Analytics. When a dataset is exported,
      the data is converted into a .csv file and the schema is stored in a separate JSON file. These
      files are stored in two objects: DatasetExport and DatasetExportPart. DatasetExport acts as
      the header and includes the JSON schema.

# DatasetExport

Represents a dataset exported from CRM Analytics. When a dataset is exported, the data is converted into a .csv file and the schema is stored in a separate JSON file. These files are stored in two objects: DatasetExport and DatasetExportPart. DatasetExport acts as the header and includes the JSON schema.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [DatasetExport](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_datasetexport.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CompressedMetadataLength | Compressed Metadata Length | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Dataset Export ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Metadata | Metadata | base64 |  |  |  |  |
| MetadataLength | Metadata Length | int | 9 |  |  |  |
| Owner | Owner | string |  | 18 |  |  |
| PublisherInfo | Publisher Info | string |  | 1000 |  |  |
| PublisherType | Publisher Type | picklist |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
