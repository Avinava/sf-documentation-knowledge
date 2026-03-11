---
title: "getPromptTemplates(query, sortBy, offset, pageLimit, fields, type, relatedEntity, isActive)"
domain: apex-reference
topic: getprompttemplatesquery-sortby-offset-pagelimit-fields-type-relatedentity-isacti
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.078Z
keywords: [getPromptTemplates, query, sortBy, offset, pageLimit, fields, type, relatedEntity, isActive, Get, list, prompt, templates, specified, filters., API, Version, Requires, Chatter, Signature]
---

# getPromptTemplates(query, sortBy, offset, pageLimit, fields, type, relatedEntity, isActive)

> Get a list of prompt templates using the specified filters.

### getPromptTemplates(query, sortBy, offset, pageLimit, fields, type, relatedEntity, isActive)

Get a list of prompt templates using the specified filters.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.EinsteinPromptRecordCollectionOutputRepresentation getPromptTemplates(String query, String sortBy, Integer offset, Integer pageLimit, List<String\> fields, String type, String relatedEntity, Boolean isActive)

#### Parameters

query

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

User-entered search string. If null, all prompt template records are returned.

sortBy

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Field to sort the returned prompt template records by, such as createdDate. If null, records are returned in the order they’re retrieved.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Used for pagination. Number of rows to skip between returned prompt template records. The default value is 0.

pageLimit

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Used for pagination. Maximum number of prompt template records returned per page. The default value is 50.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of prompt template record fields to return, such as createdDate. If null, all fields are returned.

type

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Prompt template type to filter records by, such as einstein\_gpt\_\_salesEmail. If null, records of all types are returned.

relatedEntity

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Related entity to filter records by, such as Contact. If null, all records with all related entities are returned.

isActive

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return active prompt templates only. The default is false.

#### Return Value

Type: [ConnectApi.EinsteinPromptRecordCollectionOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_einstein_prompt_record_collection_output.htm "List of prompt template records.")

#### Usage

To get a list of prompt templates, you must have Einstein Generative AI enabled and the Execute Prompt Templates user permission.

#### Example

```

```