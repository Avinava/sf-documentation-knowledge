---
title: "DatasetExport"
domain: object-reference
topic: datasetexport
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.069Z
estimatedTokens: 725
keywords: [DatasetExport, dataset, exported, CRM, Analytics, data, converted, csv, file, schema, stored, separate, JSON, files, two]
---

# DatasetExport

> Represents a dataset exported from CRM Analytics. When a dataset is exported,
      the data is converted into a .csv file and the schema is stored in a separate JSON file. These
      files are stored in two objects: DatasetExport and DatasetExportPart. DatasetExport acts as
      the header and includes the JSON schema.

# DatasetExport

Represents a dataset exported from CRM Analytics. When a dataset is exported, the data is converted into a .csv file and the schema is stored in a separate JSON file. These files are stored in two objects: DatasetExport and DatasetExportPart. DatasetExport acts as the header and includes the JSON schema.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| CompressedMetadataLength | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThis field is required when a record in an object contains a BLOB (binary large object) field. In the DataExport object, Metadata is the BLOB field. |
| Metadata | Typebase64PropertiesNillableDescriptionContains the JSON schema that describes the data in the CSV. This schema includes column metadata such as type, format, and defaultValue. |
| MetadataLength | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThis field is required when a record in an object contains a BLOB (binary large object) field. In the DataExport object, Metadata is the BLOB field. |
| Owner | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUser ID of the owner, as specified in the userId parameter in the export node of the dataflow that created the record. Only the specified owner can read the content of the record. |
| PublisherInfo | TypestringPropertiesFilter, idLookup, SortDescriptionIdentifies the export record to facilitate searching when a user has multiple export records. By default, this column is set to the ID of the dataflow that generated the export record, concatenated with the name of the specific export node. PublisherInfo is unique within your organization.NoteA dataflow can have multiple export nodes. |
| PublisherType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionTarget of the export, as specified in the target parameter in the export node of the dataflow that created the record. The value must be EinsteinDiscovery. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionStatus of the export. The possible values are:NewInProgressCompletedCanceledFailedNoteThe content of the Metadata field can be downloaded when the status is Completed. |

## Usage

This object is used with the DatasetExportPart object for exporting data from a dataset in CRM Analytics for use in Einstein Discovery. An export is initiated using the export node in an Analytics dataflow.

#### See Also

-   [DatasetExportPart](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datasetexportpart.htm "Represents a dataset exported from CRM Analytics. When a dataset is exported, the data is converted into a .csv file and the schema is stored in a separate JSON file. These files are stored in two objects: DatasetExport and DatasetExportPart. DatasetExportPart contains parts of the .csv file.")

## Related Topics

- DatasetExportPart (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datasetexportpart.htm)
