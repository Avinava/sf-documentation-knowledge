---
title: "DatasetExportPart"
domain: object-reference
topic: datasetexportpart
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.079Z
estimatedTokens: 554
keywords: [DatasetExportPart, dataset, exported, CRM, Analytics, data, converted, csv, file, schema, stored, separate, JSON, files, two]
---

# DatasetExportPart

> Represents a dataset exported from CRM Analytics. When a dataset is exported,
      the data is converted into a .csv file and the schema is stored in a separate JSON file. These
      files are stored in two objects: DatasetExport and DatasetExportPart. DatasetExportPart
      contains parts of the .csv file.

# DatasetExportPart

Represents a dataset exported from CRM Analytics. When a dataset is exported, the data is converted into a .csv file and the schema is stored in a separate JSON file. These files are stored in two objects: DatasetExport and DatasetExportPart. DatasetExportPart contains parts of the .csv file.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| CompressedDataFileLength | TypeintPropertiesFilter, Group, SortDescriptionThis field is required when a record in an object contains a BLOB (binary large object) field. In the DataExportPart object, DataFile is the BLOB field. |
| DataFile | Typebase64DescriptionContains a part of the dataset data from the generated .csv file. Maximum size is 32 MB. |
| DataFileLength | TypeintPropertiesFilter, Group, SortDescriptionThis field is required when a record in an object contains a BLOB (binary large object) field. In the DataExportPart object, DataFile is the BLOB field. |
| DatasetExportId | TypereferencePropertiesFilter, Group, SortDescriptionID of the parent record that the part record is associated with. |
| Owner | TypestringPropertiesFilter, Group, SortDescriptionUser ID of the owner, as specified in the userId parameter in the export node of the dataflow that created the record. Only the specified owner can read the content of the record. |
| PartNumber | TypeintPropertiesFilter, Group, SortDescriptionUsed with the DatasetExportId to uniquely identify the data part. Parts are assembled sequentially based on their numbers. |

## Usage

This object is used with the DatasetExport object for exporting data from a dataset in CRM Analytics for use in Einstein Discovery. An export is initiated using the export node in an Analytics dataflow.

#### See Also

-   [DatasetExport](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datasetexport.htm "Represents a dataset exported from CRM Analytics. When a dataset is exported, the data is converted into a .csv file and the schema is stored in a separate JSON file. These files are stored in two objects: DatasetExport and DatasetExportPart. DatasetExport acts as the header and includes the JSON schema.")

## Related Topics

- DatasetExport (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datasetexport.htm)
