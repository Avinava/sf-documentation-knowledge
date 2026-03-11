---
title: "getAllMetadata(entityType, entityCategory,
        entityName, dataspace)"
domain: apex-reference
topic: getallmetadataentitytype-entitycategory-entityname-dataspace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [getAllMetadata, entityType, entityCategory, entityName, dataspace, Get, metadata, filtering, entity, type, category, name, data, space., API, Version, Requires, Chatter, Signature, Parameters]
---

# getAllMetadata(entityType, entityCategory,
        entityName, dataspace)

> Get all metadata, filtering for entity type, category, name, and data space.

### getAllMetadata(entityType, entityCategory, entityName, dataspace)

Get all metadata, filtering for entity type, category, name, and data space.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryMetadataOutput getAllMetadata(String entityType, String entityCategory, String entityName, String dataspace)

#### Parameters

entityType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Type of metadata entity requested. Valid values are DataLakeObject, DataModelObject, and CalculatedInsight. If unspecified, all types are returned.

entityCategory

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Category of the metadata entity. Valid values are Profile, Engagement, and Related. If unspecified, all category entities are returned.

entityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Metadata name of the entity, for example UnifiedIndividual\_\_dlm. If unspecified, a complete list of entities is returned.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.CdpQueryMetadataOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_metadata_output.htm "Query metadata result.")