---
title: "getPublishLocationStructureStatus(uploadId)"
domain: apex-reference
topic: getpublishlocationstructurestatusuploadid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.455Z
keywords: [getPublishLocationStructureStatus, uploadId, Retrieve, status, publish, location, structure, job., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getPublishLocationStructureStatus(uploadId)

> Retrieve the status of a publish location structure
    job.

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