---
title: "IndustriesContext Class"
domain: omnistudio
topic: industriescontext-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.518Z
estimatedTokens: 2934
namespace: Context
keywords: [IndustriesContext, Contains, create, query, persist, delete, context., record's, status, context, based, tags, update, attributes, methods., addRecordsToContext, input, Example, buildContext, deleteContext]
---

# IndustriesContext Class

> Contains methods to create, query, persist, or delete a context. Also, query a record's
    status, query a context based on tags, or update context attributes by using the available
    methods.

**Namespace:** `Context`

# IndustriesContext Class

Contains methods to create, query, persist, or delete a context. Also, query a record's status, query a context based on tags, or update context attributes by using the available methods.

## Namespace

[Context](#apex_class_Context_IndustriesContext "Contains methods to create, query, persist, or delete a context. Also, query a record's status, query a context based on tags, or update context attributes by using the available methods.")

-   **[IndustriesContext Methods](atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm#apex_Context_IndustriesContext_methods)**
    Learn more about the available methods with the IndustriesContext class.

## IndustriesContext Methods

Learn more about the available methods with the IndustriesContext class.

The IndustriesContext class includes these methods.

-   **[addRecordsToContext(input)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm#apex_Context_IndustriesContext_addRecordsToContext)**
    Adds one or more records at a user-defined level in the hierarchy of the context.
-   **[buildContext(input)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm#apex_Context_IndustriesContext_buildContext)**
    Creates a context.
-   **[deleteContext(input)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm#apex_Context_IndustriesContext_deleteContext)**
    Deletes a context.
-   **[evictContextDefinition(input)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm#apex_Context_IndustriesContext_evictContextDefinition)**
    Removes the details of the context definition from cache.
-   **[filteringContext(input)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm#apex_Context_IndustriesContext_filteringContext)**
    Builds or queries a context based on a filter criteria.
-   **[getContext(input)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm#apex_Context_IndustriesContext_getContext)**
    Retrieves context details.
-   **[getContextTranslation(input)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm#apex_Context_IndustriesContext_getContextTranslation)**
    Retrieves context mappings based on a target mapping ID.
-   **[leanerQueryTags(input)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm#apex_Context_IndustriesContext_leanerQueryTags)**
    Queries context tags and returns an optimized, leaner result set compared to the standard queryTags.
-   **[persistContext(input)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm#apex_Context_IndustriesContext_persistContext)**
    Persists the current data or state of context to the database.
-   **[queryContextRecordsAndChildren(input)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm#apex_Context_IndustriesContext_queryContextRecordsAndChildren)**
    Queries Context records and children based on the dataPath instead of tags.
-   **[queryRecordStatus(input)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm#apex_Context_IndustriesContext_queryRecordStatus)**
    Queries the status of a record.
-   **[queryTags(input)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm#apex_Context_IndustriesContext_queryTags)**
    Queries a context by using tags.
-   **[updateContextAttributes(input)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm#apex_Context_IndustriesContext_updateContextAttributes)**
    Updates the attributes of a context.

### addRecordsToContext(input)

Adds one or more records at a user-defined level in the hierarchy of the context.

#### Signature

public Map<String,Object> addRecordsToContext(Map<String,Object> input)

```

```

#### Example

```

```

#### Parameters

input

Type: Map<String,Object>

contextId

Type: String

ID of the Context to which record described in inputData is added.

overWriteExistingRecords

Type: Boolean

Indicates if an already existing record with same ID as being added through inputData must be overriden.

inputData

Type: String

Record data to be added to the context, hierarchical data in stringified format.

isTaggedData

Type: Boolean

Describes if the inputData structure is using the taggedData Format.

#### Return Value

Type: Map<String,Object>

### buildContext(input)

Creates a context.

#### Signature

public Map<String,Object> buildContext(Map<String,Object> input)

```

```

#### Example

```

```

#### Parameters

input

Type: Map<String,Object>

Metadata about the context and payload data required to create a context.

#### Return Value

Type: Map<String,Object>

Details containing the context ID that’s created.

### deleteContext(input)

Deletes a context.

#### Signature

public void deleteContext(Map<String,Object> input)

```

```

#### Example

```

```

#### Parameters

input

Type: Map<String,Object>

Details containing the ID of the context to be deleted.

#### Return Value

Type: void

### evictContextDefinition(input)

Removes the details of the context definition from cache.

#### Signature

public void evictContextDefinition(Map<String,ANY> input)

```

```

#### Example

```

```

#### Parameters

input

Type: Map<String,ANY>

API name of the context definition to remove the details of the context definition from cache.

#### Return Value

Type: void

### filteringContext(input)

Builds or queries a context based on a filter criteria.

#### Signature

public Map<String, Object> industriesContexts.filteringContext(buildWithFilter);

#### Example

Type: BUILD

```

```

Type: QUERYRECORDANDCHILDREN or QUERYRECORDS

```

```

#### Parameters

input

Type: Enum

Object defining the type of operation. Operation Metadata along with filter criteria to be applied on the operation. Valid values are: BUILD,QUERYRECORDANDCHILDREN and QUERYRECORDS

filter: String

Metadata about the filter object.

build: Map<String,Object>

Metadata to build the context. Only for type with value BUILD.

query: Map<String,Object>

Metadata to query records in the context. Only for type with value QUERYRECORDANDCHILDREN and QUERYRECORDS.

#### Return Value

Type: Map<String,Object>

Mapping of the contextId or queryResults with the requested operation type.

### getContext(input)

Retrieves context details.

#### Signature

public Map<String,Object> getContext(Map<String,Object> input)

```

```

#### Example

```

```

#### Parameters

input

Type: Map<String,Object>

Details containing the ID of the context to be retrieved.

#### Return Value

Type: Map<String,Object>

Details of the retrieved context.

### getContextTranslation(input)

Retrieves context mappings based on a target mapping ID.

#### Signature

public Map<String,Object> getContextTranslation(Map<String,Object> input)

```

```

#### Example

```

```

#### Parameters

input

Type: Map<String,Object>

Details of the request parameters to retrieve context mappings. The details include list of persisted attributes and settings to indicate whether any dependencies are established or restricted fields are removed.

#### Return Value

Type: Map<String,Object>

Details of the retrieved context mappings.

### leanerQueryTags(input)

Queries context tags and returns an optimized, leaner result set compared to the standard queryTags.

#### Signature

public Map<String,Object> leanerQueryTags(Map<String,Object> input)

#### Usage

Use the leanerQueryTags method to retrieve tag values from a context instance with optimized performance. This method returns a leaner result set.

Before calling this method, you must first create a context instance using the buildContext method and obtain the contextId.

#### Example

```

```

#### Parameters

input

Type: Map<String,Object>

Input map that contains the parameters required to query the tags. Valid keys are:

-   contextId: (String) — ID of the context to query\[cite: 223\].
-   tags: (List<String>) — List of tag names to query from the context instance. Tags serve as aliases for nodes and attributes in the context structure.

#### Return Value

Type: Map<String,Object>

Returns a map that contains the query results. The map includes these keys:

-   contextId (String) — ID of the context instance.
-   recordIds (List<String>) — List of record IDs associated with the queried tags.
-   leanerQueryTagResult (Map<String,Object>) — Map that contains the query results. Each key represents a tag name, and its value contains the associated tag data with attribute information.

### persistContext(input)

Persists the current data or state of context to the database.

#### Signature

public Map<String,Object> persistContext(Map<String,Object> input)

```

```

#### Example

```

```

#### Parameters

input

Type: Map<String,Object>

Details to persist context such as context ID and target mapping ID.

#### Return Value

Type: Map<String,Object>

Reference ID for the persisted context.

### queryContextRecordsAndChildren(input)

Queries Context records and children based on the dataPath instead of tags.

#### Signature

Map<String, Object> industriesContexts.queryContextRecordsAndChildren(input: Map<String, Object>);

#### Example

```

```

#### Parameters

input

contextId: String

ID of the context to be queried.

queryPaths: Map<String,Object>

List of dataPath to be queried.

#### Return Value

queryResults: Map<String,Object>

Result containing the record data.

### queryRecordStatus(input)

Queries the status of a record.

#### Signature

public Map<String,Object> queryRecordStatus(Map<String,Object> input)

```

```

#### Example

```

```

#### Parameters

input

Type: Map<String,Object>

Details containing the context ID and list of record paths for context data to query the status for.

#### Return Value

Type: Map<String,Object>

Details containing the results of the query.

### queryTags(input)

Queries a context by using tags.

#### Signature

public Map<String,Object> queryTags(Map<String,Object> input)

```

```

#### Usage

The method works on the tagNames of the attribute or node.

#### Example

```

```

#### Parameters

input

Type: Map<String,Object>

Details containing the context ID and tags to be queried.

#### Return Value

Type: Map<String,Object>

Details containing the results of the query.

### updateContextAttributes(input)

Updates the attributes of a context.

#### Signature

public Map<String,Object> updateContextAttributes(Map<String,Object> input)

```

```

#### Usage

Use this method to update the attributes of a context.

-   This method works only with the names of the canonical structure, and not with tags.
-   The dataType of the values must match the dataType in the canonical structure. Also, it must match the dataType of the field if persistence is expected later.
-   The method supports attribute updates at different level. Pass an attributeMap corresponding to the given dataPath.
-   The API works at the per-record level.

#### Example

```

```

#### Parameters

input

Type: Map<String,Object>

Details containing the context ID and node path. The node path contains the path of the context record and list of attributes to be updated with their values.

#### Return Value

Type: Map<String,Object>

Details containing the updated attribute list.

## Code Examples

```apex
Context.IndustriesContext, addRecordsToContext, [Map<String,ANY>], Map<String,ANY>
```

```apex
Context.IndustriesContext industriesContexts = new Context.IndustriesContext();

Map<String, Object> inputAddRecord = new Map<String, Object>();
inputAddRecord.put('contextId', context.get('contextId').toString());
inputAddRecord.put('overWriteExistingRecords', true);
inputAddRecord.put('isTaggedData', false);
inputAddRecord.put('inputData', '{"Account":[{"id":"synthetic","businessObjectType":"Account","Name":"test_account"}]}');

Map<String, Object> ouputAddRecord = industriesContexts.addRecordsToContext(inputAddRecord);
```

```apex
Context.IndustriesContext, buildContext, [Map<String,ANY>], Map<String,ANY>
```

```apex
Context.IndustriesContext industriesContexts = new Context.IndustriesContext();

Map<String, Object> input = new Map<String, Object>(); 

Map<String, String> metadata = new Map<String, String>(); 
metadata.put('contextDefinitionId', '11Oxx0000006PinEAE');
metadata.put('mappingId','11jxx0000004LGRAA2');

String data = '{\'Account\':[{\'id\':\'001xx000003GYK0AAO\',\'businessObjectType\':\'Account\'}]}';
input.put('data', data);
input.put('metadata', metadata);

Map<String, Object> context = industriesContexts.buildContext(input);
System.debug(context.get('contextId'));
```

```apex
Context.IndustriesContext, deleteContext, [Map<String,ANY>], void
```

## Related Topics

- IndustriesContext Methods (atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm)
- addRecordsToContext(input) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm)
- buildContext(input) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm)
- deleteContext(input) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm)
- evictContextDefinition(input) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm)
- filteringContext(input) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm)
- getContext(input) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm)
- getContextTranslation(input) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm)
- leanerQueryTags(input) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm)
- persistContext(input) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_Context_IndustriesContext.htm)
