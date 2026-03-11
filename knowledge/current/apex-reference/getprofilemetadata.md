---
title: "getProfileMetadata()"
domain: apex-reference
topic: getprofilemetadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [getProfileMetadata, Get, metadata, data, model, objects, profile, category, including, Individual, Contact, Point, Email, Unified, Address, objects., Metadata, includes, their, fields]
---

# getProfileMetadata()

> Get metadata for data model objects in the profile category, including Individual,
    Contact Point Email, Unified Individual, and Contact Point Address objects. Metadata includes
    the objects, their fields, and category.

### getProfileMetadata()

Get metadata for data model objects in the profile category, including Individual, Contact Point Email, Unified Individual, and Contact Point Address objects. Metadata includes the objects, their fields, and category.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryMetadataOutput getProfileMetadata()

#### Return Value

Type: [ConnectApi.CdpQueryMetadataOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_metadata_output.htm "Query metadata result.")