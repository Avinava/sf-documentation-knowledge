---
title: "Availability Records, Upload"
domain: chatterapi
topic: availability-records-upload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.016Z
estimatedTokens: 757
keywords: [Availability, Records, Upload, Asynchronously, inventory, data, Omnichannel, check, status, jobs, either, NDJSON, CSV, file]
---

# Availability Records, Upload

> Asynchronously upload inventory data to Omnichannel Inventory and check the status of
    upload jobs. Upload inventory data using either a NDJSON or CSV file.

# Availability Records, Upload

Asynchronously upload inventory data to Omnichannel Inventory and check the status of upload jobs. Upload inventory data using either a NDJSON or CSV file.

Available resources are:

| Resource | Description |
| --- | --- |
| /commerce/oci/availability-records/uploads | POST - Upload an inventory availability data file to Omnichannel Inventory. |
| /commerce/oci/availability-records/uploads/uploadId | GET - Retrieve the status of an inventory availability upload job. |

Resource

```

```

Available version

51.0 (JSON), 63.0 (CSV)

HTTP methods

POST

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fileUpload | Binary | JSON or CSV file containing inventory availability data. | Required | 51.0 (JSON)63.0 (CSV) |

To create an inventory data file, format the data as a series of NDJSON or CSV entries that represent locations and individual inventory records.

Inventory Import Data Considerations:

-   Separate the top-level entries with line feeds, not commas. Each entry must be on a single line.
-   When the system reads a location entry, it assigns the subsequent inventory entries to that location until it reads another location entry.
-   Legacy NDJSON requires that you specify a header record for each location entry ({"location":"wickenburg","mode":"UPDATE"}). The header isn’t required for a high-performance NDJSON layout or CSV file.
-   Each inventory record entry requires a unique recordId. Best practice is to use a UUID. The recordId protects against importing duplicate data. The recordId is provided in NDJSON and automatically generated for CSV.
-   Each inventory record entry requires an effectiveDate.
-   If provided, each futures entry requires a nonzero quantity and a future expectedDate.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The file must be in NDJSON or CSV format. For larger collections, use the Commerce API or split the data into multiple files. The Commerce API accepts GZIP, NDJSON, or CSV files up to 100 MB.

This example illustrates the data format:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

For readability, this example shows the first few entries on multiple lines. In the import file, each location and inventory record entry must be on a single line.

```

```

Response body for POST

[OCI Upload Inventory Availability Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_upload_inventory_availability_output.htm "Response to an upload inventory availability job.")

Resource

```

```

Available version

51.0 (JSON), 62.0 (CSV)

HTTP methods

GET

Response body for GET

[OCI Upload Inventory Availability Status Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_upload_inventory_availability_status_output.htm "Detailed status of an upload inventory availability job.")

## Code Examples

```
{
  "location":"Warehouse-A",  // location identifier
  "mode":"UPDATE"  // must be UPDATE (other operations might be available in future releases)
}
{
  "recordId":"0a87539d-f3dd-47bc-91c7-9c752e39dbe0",  // unique identifier for the inventory record
  "onHand":10,
  "sku":"12389156",
  "effectiveDate":"2020-12-08T14:05:22.790896-07:00",
  "futures":[  // list of future restocks
    {
    "quantity":1,
    "expectedDate":"2021-04-18T14:05:22.781-07:00"
    },
    {
    "quantity":5,
    "expectedDate":"2021-05-18T14:05:22.781-07:00"
    }
  ],
  "safetyStockCount":0
}
{
  "recordId":"0a87539d-f3dd-47bc-91c7-9c752e312345",
  "onHand":10,
  "sku":"9485728",
  "effectiveDate":"2020-12-08T14:05:22.790896-07:00",
  "futures":[
    {
    "quantity":10,
    "expectedDate":"2021-04-18T14:05:22.781-07:00"
    }
  ],
  "safetyStockCount":0
}
{"location":"Warehouse-B","mode":"UPDATE"}
{"recordId":"0a87539d-f3dd-47bc-91c7-9c75abc123de","onHand":10,"sku":"12389156","effectiveDate":"2020-12-08T14:05:22.790896-07:00","futures":[{"quantity":1,"expectedDate":"2021-04-18T14:05:22.781-07:00"}],"safetyStockCount":0}
{"recordId":"0a87539d-f3dd-47bc-91c7-9c75abc98765","onHand":10,"sku":"93867201","effectiveDate":"2020-12-08T14:05:22.790896-07:00","futures":[{"quantity":5,"expectedDate":"2021-04-18T14:05:22.781-07:00"}],"safetyStockCount":0}
```

## Related Topics

- OCI Upload Inventory Availability Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_upload_inventory_availability_output.htm)
- OCI Upload Inventory Availability Status Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_upload_inventory_availability_status_output.htm)
