---
title: "ConnectApi.OCIBaseOutputRepresentation"
domain: apex-reference
topic: connectapiocibaseoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.373Z
keywords: [ConnectApi.OCIBaseOutputRepresentation]
---

# ConnectApi.OCIBaseOutputRepresentation

# ConnectApi.OCIBaseOutputRepresentation

Base Omnichannel Inventory output class.

This class is abstract.

Superclass of:

-   [ConnectApi.OCIGetInventoryAvailabilityOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_get_inventory_availability_output.htm "Response to a request for inventory availability data.")
-   [ConnectApi.OCIPublishLocationStructureOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_publish_location_structure_output.htm "Response to a publish location structure request.")
-   [ConnectApi.OCIPublishLocationStructureStatusOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_publish_location_structure_status_output.htm "Detailed status of a publish location structure job.")
-   [ConnectApi.OCIUploadInventoryAvailabilityOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_upload_inventory_availability_output.htm "Response to an upload inventory availability job.")
-   [ConnectApi.OCIUploadInventoryAvailabilityStatusOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_upload_inventory_availability_status_output.htm "Detailed status of an upload inventory availability job.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.​ErrorResponse> | Any errors that were returned. | 51.0 |
| success | Boolean | Indicates whether the request was successful. | 51.0 |