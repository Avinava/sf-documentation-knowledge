---
title: "submitInventoryAvailabilityUpload(fileUpload)"
domain: apex-reference
topic: submitinventoryavailabilityuploadfileupload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.455Z
keywords: [submitInventoryAvailabilityUpload, fileUpload, Upload, inventory, availability, data, file, Omnichannel, Inventory., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, Note]
---

# submitInventoryAvailabilityUpload(fileUpload)

> Upload an inventory availability data file to Omnichannel
      Inventory.

### submitInventoryAvailabilityUpload(fileUpload)

Upload an inventory availability data file to Omnichannel Inventory.

#### API Version

51.0 (NDJSON), 63.0 (CSV)

#### Requires Chatter

No

#### Signature

public static ConnectApi.OCIUploadInventoryAvailabilityOutputRepresentation submitInventoryAvailabilityUpload(ConnectApi.BinaryInput fileUpload)

#### Parameters

fileUpload

Type: [ConnectApi.BinaryInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

NDJSON or CSV file containing inventory availability data.

#### Return Value

Type: [ConnectApi.OCIUploadInventoryAvailabilityOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_upload_inventory_availability_output.htm "Response to an upload inventory availability job.")

#### Usage

To create an inventory data file, format the data as a series of NDJSON or CSV entries that represent locations and individual inventory records.

Inventory Import Data Considerations:

-   Separate the top-level entries with line feeds, not commas. Each entry must be on a single line.
-   When the system reads a location entry, it assigns the subsequent inventory entries to that location until it reads another location entry.
-   Legacy NDJSON requires that you specify a header record for each location entry ({"location":"wickenburg","mode":"UPDATE"}). The header isn’t required for a high-performance NDJSON layout or CSV file.
-   Each inventory record entry requires a unique recordId. Best practice is to use a UUID. The recordId protects against importing duplicate data. The recordId is provided in NDJSON and automatically generated for CSV.
-   Each inventory record entry requires an effectiveDate.
-   If provided, each futures entry requires a nonzero quantity and a future expectedDate.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The file must be in NDJSON or CSV format. For larger collections, use the Commerce API or split the data into multiple files. The Commerce API accepts GZIP, NDJSON, or CSV files up to 100 MB.

This example illustrates the data format:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

For readability, this example shows the first few entries on multiple lines. In the import file, each location and inventory record entry must be on a single line.

```

```