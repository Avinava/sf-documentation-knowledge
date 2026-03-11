---
title: "getInventoryAvailabilityUploadStatus(uploadId)"
domain: apex-reference
topic: getinventoryavailabilityuploadstatusuploadid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.455Z
keywords: [getInventoryAvailabilityUploadStatus, uploadId, Retrieve, status, inventory, availability, upload, job., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getInventoryAvailabilityUploadStatus(uploadId)

> Retrieve the status of an inventory availability upload
    job.

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