---
title: "OmnichannelInventoryService Class"
domain: apex-reference
topic: omnichannelinventoryservice-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.257Z
estimatedTokens: 3744
namespace: ConnectApi
keywords: [OmnichannelInventoryService, inventory, reservation, Omnichannel, createReservation, createReservationInputRepresentation, API, Version, Requires, Chatter, fulfillReservation, fulfillReservationInputRepresentation, getInventoryAvailability, getInventoryAvailabilityUploadStatus, uploadId]
---

# OmnichannelInventoryService Class

> Create an inventory reservation in Omnichannel
    Inventory.

**Namespace:** `ConnectApi`

# OmnichannelInventoryService Class

Route orders to inventory locations in Order Management.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## OmnichannelInventoryService Methods

These methods are for OmnichannelInventoryService. All methods are static.

-   **[createReservation(createReservationInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm#apex_ConnectAPI_OmnichannelInventoryService_createReservation_1)**
    Create an inventory reservation in Omnichannel Inventory.
-   **[fulfillReservation(fulfillReservationInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm#apex_ConnectAPI_OmnichannelInventoryService_fulfillReservation_1)**
    Fulfill one or more inventory reservations.
-   **[getInventoryAvailability(inventoryAvailabilityInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm#apex_ConnectAPI_OmnichannelInventoryService_getInventoryAvailability_1)**
    Retrieve inventory availability data for one or more products at one or more inventory locations or location groups.
-   **[getInventoryAvailabilityUploadStatus(uploadId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm#apex_ConnectAPI_OmnichannelInventoryService_getInventoryAvailabilityUploadStatus_1)**
    Retrieve the status of an inventory availability upload job.
-   **[getPublishLocationStructureStatus(uploadId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm#apex_ConnectAPI_OmnichannelInventoryService_getPublishLocationStructureStatus_1)**
    Retrieve the status of a publish location structure job.
-   **[publishLocationStructure()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm#apex_ConnectAPI_OmnichannelInventoryService_publishLocationStructure_2)**
    Asynchronously publish information about your inventory locations and location groups to Omnichannel Inventory. The publish includes records whose IsEnabled and ShouldSyncWithOci fields are both true. This method returns an ID that you can use to retrieve the status of the publish job.
-   **[releaseReservation(releaseReservationInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm#apex_ConnectAPI_OmnichannelInventoryService_releaseReservation_1)**
    Release one or more existing inventory reservations to free up that inventory.
-   **[submitInventoryAvailabilityUpload(fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm#apex_ConnectAPI_OmnichannelInventoryService_submitInventoryAvailabilityUpload_2)**
    Upload an inventory availability data file to Omnichannel Inventory.
-   **[transferReservation(transferReservationInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm#apex_ConnectAPI_OmnichannelInventoryService_transferReservation_1)**
    Transfer one or more inventory reservations between locations or location groups. This API doesn’t change physical quantities, but reduces the reserved quantity at the source and increases it at the destination.
-   **[updateReservation(updateReservationInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm#apex_ConnectAPI_OmnichannelInventoryService_updateReservation_1)**
    Updates an existing reservation in Omnichannel Inventory. Add, remove, and update quantities for existing SKUs in the reservation.

### createReservation(createReservationInputRepresentation)

Create an inventory reservation in Omnichannel Inventory.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OCICreateReservationOutputRepresentation createReservation(ConnectApi.OCICreateReservationInputRepresentation createReservationInputRepresentation)

#### Parameters

createReservationInputRepresentation

Type: [ConnectApi.OCICreateReservationInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_o_c_i_create_reservation.htm "Data to reserve inventory at one or more Omnichannel Inventory locations or location groups.")

Data to reserve inventory at one or more Omnichannel Inventory locations or location groups.

#### Return Value

Type: [ConnectApi.OCICreateReservationOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_create_reservation_output.htm "Result of an Omnichannel Inventory reservation creation request.")

### fulfillReservation(fulfillReservationInputRepresentation)

Fulfill one or more inventory reservations.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OCIFulfillReservationOutputRepresentation fulfillReservation(ConnectApi.OCIFulfillReservationInputRepresentation fulfillReservationInputRepresentation)

#### Parameters

fulfillReservationInputRepresentation

Type: [ConnectApi.OCIFulfillReservationInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_o_c_i_fulfill_reservation.htm "A list of inventory reservations to fulfill.")

Wraps a list of inventory reservations to fulfill.

#### Return Value

Type: [ConnectApi.OCIFulfillReservationOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_fulfill_reservation_output.htm "Response to a request to fulfill one or more inventory reservations.")

### getInventoryAvailability(inventoryAvailabilityInputRepresentation)

Retrieve inventory availability data for one or more products at one or more inventory locations or location groups.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OCIGetInventoryAvailabilityOutputRepresentation getInventoryAvailability(ConnectApi.OCIGetInventoryAvailabilityInputRepresentation inventoryAvailabilityInputRepresentation)

#### Parameters

inventoryAvailabilityInputRepresentation

Type: [ConnectApi.OCIGetInventoryAvailabilityInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_o_c_i_get_inventory_availability.htm "Details of a request to retrieve inventory availability.")

Details of a request to retrieve inventory availability.

#### Return Value

Type: [ConnectApi.OCIGetInventoryAvailabilityOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_get_inventory_availability_output.htm "Response to a request for inventory availability data.")

### getInventoryAvailabilityUploadStatus(uploadId)

Retrieve the status of an inventory availability upload job.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OCIUploadInventoryAvailabilityStatusOutputRepresentation getInventoryAvailabilityUploadStatus(String uploadId)

#### Parameters

uploadId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The upload ID of the upload job.

#### Return Value

Type: [ConnectApi.OCIUploadInventoryAvailabilityStatusOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_upload_inventory_availability_status_output.htm "Detailed status of an upload inventory availability job.")

### getPublishLocationStructureStatus(uploadId)

Retrieve the status of a publish location structure job.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OCIPublishLocationStructureStatusOutputRepresentation getPublishLocationStructureStatus(String uploadId)

#### Parameters

uploadId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The upload ID of the publish job.

#### Return Value

Type: [ConnectApi.OCIPublishLocationStructureStatusOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_publish_location_structure_status_output.htm "Detailed status of a publish location structure job.")

### publishLocationStructure()

Asynchronously publish information about your inventory locations and location groups to Omnichannel Inventory. The publish includes records whose IsEnabled and ShouldSyncWithOci fields are both true. This method returns an ID that you can use to retrieve the status of the publish job.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OCIPublishLocationStructureOutputRepresentation publishLocationStructure()

#### Return Value

Type: [ConnectApi.OCIPublishLocationStructureOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_publish_location_structure_output.htm "Response to a publish location structure request.")

### releaseReservation(releaseReservationInputRepresentation)

Release one or more existing inventory reservations to free up that inventory.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OCIReleaseReservationOutputRepresentation releaseReservation(ConnectApi.OCIReleaseReservationInputRepresentation releaseReservationInputRepresentation)

#### Parameters

releaseReservationInputRepresentation

Type: [ConnectApi.OCIReleaseReservationInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_o_c_i_release_reservation.htm "Details of one or more inventory reservations to release.")

Details of one or more inventory reservations to release.

#### Return Value

Type: [ConnectApi.OCIReleaseReservationOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_release_reservation_output.htm "Response to a request to release one or more inventory reservations.")

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

### transferReservation(transferReservationInputRepresentation)

Transfer one or more inventory reservations between locations or location groups. This API doesn’t change physical quantities, but reduces the reserved quantity at the source and increases it at the destination.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OCITransferReservationOutputRepresentation transferReservation(ConnectApi.OCITransferReservationInputRepresentation transferReservationInputRepresentation)

#### Parameters

transferReservationInputRepresentation

Type: [ConnectApi.OCITransferReservationInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_o_c_i_transfer_reservation.htm "A list of inventory reservation transfers and specifies whether a single failure cancels the entire list.")

Wraps a list of inventory reservation transfers and specifies whether a single failure cancels the entire list.

#### Return Value

Type: [ConnectApi.OCITransferReservationOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_transfer_reservation_output.htm "Response to a request to transfer one or more inventory reservations.")

### updateReservation(updateReservationInputRepresentation)

Updates an existing reservation in Omnichannel Inventory. Add, remove, and update quantities for existing SKUs in the reservation.

#### API Version

61.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OCIUpdateReservationOutputRepresentation updateReservation(ConnectApi.OCIUpdateReservationInputRepresentation updateReservationInputRepresentation)

#### Parameters

updateReservationInputRepresentation

Type: [ConnectApi.OCIUpdateReservationInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_o_c_i_update_reservation.htm "Data to update one or more Omnichannel Inventory item reservations.")

Data to update one or more Omnichannel Inventory item reservations.

#### Return Value

Type: [ConnectApi.OCIUpdateReservationOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_update_reservation_output.htm "Result of an Omnichannel Inventory update request for reserved inventory.")

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

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- createReservation(createReservationInputRepresentation) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm)
- fulfillReservation(fulfillReservationInputRepresentation) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm)
- getInventoryAvailability(inventoryAvailabilityInputRepresentation) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm)
- getInventoryAvailabilityUploadStatus(uploadId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm)
- getPublishLocationStructureStatus(uploadId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm)
- publishLocationStructure() (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm)
- releaseReservation(releaseReservationInputRepresentation) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm)
- submitInventoryAvailabilityUpload(fileUpload) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm)
- transferReservation(transferReservationInputRepresentation) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm)
