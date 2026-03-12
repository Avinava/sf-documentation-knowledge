---
title: "Get Lookup Field Suggestions for a Specified Object"
domain: uiapi
topic: get-lookup-field-suggestions-for-a-specified-object
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.467Z
estimatedTokens: 884
keywords: [Lookup, Suggestions, user, edits, resource, search, display, recently, matches, matching, any, match, searchable, specify, filter]
---

# Get Lookup Field Suggestions for a Specified Object

> When a user edits a lookup field, use this resource to search for
      and display suggestions for a specified object. You can search for most recently used matches,
      for matching names, or for any match in a searchable field. You can also specify lookup filter
      bindings for dependent lookups.

# Get Lookup Field Suggestions for a Specified Object

When a user edits a lookup field, use this resource to search for and display suggestions for a specified object. You can search for most recently used matches, for matching names, or for any match in a searchable field. You can also specify lookup filter bindings for dependent lookups.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=uiapi)

#### Note

In version 60.0 and later, use the [POST method](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_post.htm "When a user edits a lookup field, use this resource to search for and display suggestions. You can search for most recently used matches, for matching names, or for any match in a searchable field. You must specify dependent lookup field values used by lookup filters in the `sourceRecord` request body parameter.") for lookup field suggestions. The POST method is a more secure way of transferring data where the parameters are sent in the message body.

Resource

```

```

-   objectApiName—The API name of a source object.
-   fieldApiName—The API name of a lookup field on the source object.
-   targetApiName—The API name of the target (lookup) object.

Available Version

41.0–62.0

HTTP Method

GET

Example

See [Get Lookup Field Suggestions](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_get.htm#ui_api_resources_lookup_get "When a user edits a lookup field, use this resource to search for and display suggestions. You can search for most recently used matches, for matching names, or for any match in a searchable field. You can also specify lookup filter bindings for dependent lookups.").

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dependent​FieldBindings | String[] | The dependent field bindings for dependent lookups. These field bindings represent the lookup filter that restricts the valid values for the field.Specify field bindings in a comma-separated list in the format dependentFieldBindings={fieldApiName}​={fieldValue},{field2ApiName}={field2Value}.To know whether a field is a dependent lookup, check the Object Info response body for a non-null filteredLookupInfo property. Specify the name and a value for each field in the controllingFields property. Get the field values from the Record response body. Both responses are returned from the /ui-api/record-ui/{recordIds} resource. | Optional | 41.0 |
| page | Integer | The page number. The default value is 1. | Optional | 41.0 |
| pageSize | Integer | The number of items per page. The default value is 25. | Optional | 41.0 |
| q | String | The term the user is searching for.When searchType=Search, specify at least 2 characters. A wildcard at the end of the search term is implied. For example, q=ca returns Cat and Cats.When searchType=TypeAhead, specify at least 3 characters. A wildcard at the end of the search term is implied. You can’t use a ?. | Required if searchType is TypeAhead. | 41.0 |
| searchType | String | The type of search to perform. One of these values:Recent—Return most recently used matches.Search—Search for records with searchable fields that match the query term.TypeAhead—Search for records whose names start with the query term.The default value is Recent. | Optional | 41.0 |

Response Body

[Record Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_collection.htm#ui_api_responses_record_collection "A paginated collection of Record response bodies.")

## Code Examples

```
/ui-api/lookups/{objectApiName}/{fieldApiName}/{targetApiName}
```

## Related Topics

- POST method (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_post.htm)
- Get Lookup Field Suggestions (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_get.htm)
- Object Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm)
- Record (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm)
- /ui-api/record-ui/{recordIds} (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm)
- Record Collection (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_collection.htm)
