---
title: "getProfileMetadata(dataModelName, dataspace)"
domain: apex-reference
topic: getprofilemetadatadatamodelname-dataspace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [getProfileMetadata, dataModelName, dataspace, Get, metadata, data, model, object, profile, category, such, Individual, Contact, Point, Email, Unified, Address., specify, space., Metadata]
---

# getProfileMetadata(dataModelName, dataspace)

> Get metadata for a data model object in the profile category, such as Individual, Contact
        Point Email, Unified Individual, and Contact Point Address. Also, specify the data space.
        Metadata includes the list of fields, data types, and indexes available for
        lookup.

### getProfileMetadata(dataModelName, dataspace)

Get metadata for a data model object in the profile category, such as Individual, Contact Point Email, Unified Individual, and Contact Point Address. Also, specify the data space. Metadata includes the list of fields, data types, and indexes available for lookup.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryMetadataOutput getProfileMetadata(String dataModelName, String dataspace)

#### Parameters

dataModelName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data model object, for example, UnifiedIndividual\_\_dlm.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.CdpQueryMetadataOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_metadata_output.htm "Query metadata result.")