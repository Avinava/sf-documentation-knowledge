---
title: "getProfileMetadata(dataModelName)"
domain: apex-reference
topic: getprofilemetadatadatamodelname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [getProfileMetadata, dataModelName, Get, metadata, data, model, object, profile, category, such, Individual, Contact, Point, Email, Unified, Address., Metadata, includes, list, fields]
---

# getProfileMetadata(dataModelName)

> Get metadata for a data model object in the profile category, such as Individual, Contact
    Point Email, Unified Individual, and Contact Point Address. Metadata includes the list of
    fields, data types, and indexes available for lookup.

### getProfileMetadata(dataModelName)

Get metadata for a data model object in the profile category, such as Individual, Contact Point Email, Unified Individual, and Contact Point Address. Metadata includes the list of fields, data types, and indexes available for lookup.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryMetadataOutput getProfileMetadata(String dataModelName)

#### Parameters

dataModelName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data model object, for example, UnifiedIndividual\_\_dlm.

#### Return Value

Type: [ConnectApi.CdpQueryMetadataOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_metadata_output.htm "Query metadata result.")