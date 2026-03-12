---
title: "Get Lookup Field Suggestions"
domain: uiapi
topic: get-lookup-field-suggestions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.461Z
estimatedTokens: 1688
keywords: [Lookup, Suggestions, user, edits, resource, search, display, recently, matches, matching, any, match, searchable, specify, filter]
---

# Get Lookup Field Suggestions

> When a user edits a lookup field, use this resource to search for
      and display suggestions. You can search for most recently used matches, for matching names, or
      for any match in a searchable field. You can also specify lookup filter bindings for dependent
      lookups.

# Get Lookup Field Suggestions

When a user edits a lookup field, use this resource to search for and display suggestions. You can search for most recently used matches, for matching names, or for any match in a searchable field. You can also specify lookup filter bindings for dependent lookups.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=uiapi)

#### Note

In version 60.0 and later, use the [POST method](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_post.htm "When a user edits a lookup field, use this resource to search for and display suggestions. You can search for most recently used matches, for matching names, or for any match in a searchable field. You must specify dependent lookup field values used by lookup filters in the `sourceRecord` request body parameter.") for lookup field suggestions. The POST method is a more secure way of transferring data where the parameters are sent in the message body.

Resource

```

```

-   objectApiName—The API name of a source object.
-   fieldApiName—The API name of a lookup field on the source object.

Available Version

41.0–62.0

HTTP Method

GET

Example: Get Most Recently Used Records

A lookup relationship field links a source object to a target object. To edit a lookup field, users click a lookup icon to search for and select a value from a popup list. The target object provides the values in the list.

For example, the Opportunity object has an AccountId lookup field. When a user edits an Opportunity record, the user selects an Account to associate with the Opportunity. To build a UI that suggests the most recently used Account records to the user, use this resource. The default value of the searchType parameter is Recent, so the request doesn’t specify it.

```

```

Example: Search for Suggestions

To search all searchable fields for suggestions, set searchType=Search. This example searches for strings that start with the characters ca (a wildcard is implied).

```

```

Example: Search Record Names for Suggestions

To search record name fields for suggestions, set searchType=TypeAhead. This example searches record names for strings that start with the characters ta (a wildcard is implied).

```

```

Example: Search Dependent Lookups for Suggestions

Some lookup fields have lookup filters that restrict their valid values by referencing fields on the source object. These fields are called dependent lookups. For example, you can filter the Case Contact field to show only contacts that are associated with the account selected in the Case Account Name field.

In the Salesforce UI, this lookup filter is Contact Name: Account Name ID EQUALS Case: Account Name ID. In the User Interface API, lookup filter information appears in the filteredLookupInfo property of the [Object Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm#ui_api_responses_object_info "The metadata for an object.") response body, which is returned from several resources, including [/ui-api/record-ui/{recordIds}](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm#ui_api_resources_record_ui "Get layout information, metadata, and data to build UI for a single record or for a collection of records."). If the filteredLookupInfo property is non-null, the field it describes is a dependent lookup.

In this example, the Case object’s ContactId field has a filteredLookupInfo property containing a controllingFields property. The controlling field is AccountId. To restrict the lookup search, you must pass all controlling fields and their values to the lookups resource in the dependentFieldBindings parameter.

```

```

To get the value for AccountId, look in the [Record](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm#ui_api_responses_record "The field data, API name, child relationship data, and record type information for a record.") response body, which is returned from several resources, including [/ui-api/record-ui/{recordIds}](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm#ui_api_resources_record_ui "Get layout information, metadata, and data to build UI for a single record or for a collection of records.").

```

```

To filter the suggestions for a dependent lookup, specify the names and values of the controlling fields in the dependentFieldBindings query parameter. (This example has one controlling field).

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| targetApiName | String[] | The API name of the object that you want results for. The name must correspond to one of the target objects of the lookup field. If not provided, by default, results for all target objects of the lookup field are returned. If targetApiName isn’t specified, then the field configuration is used. If the field is polymorphic, several queries are considered and you receive results for every target that can lead to performance issues. | Optional | 59.0 |
| dependent​FieldBindings | String[] | The dependent field bindings for dependent lookups. These field bindings represent the lookup filter that restricts the valid values for the field.Specify field bindings in a comma-separated list in the format dependentFieldBindings={fieldApiName}​={fieldValue},{field2ApiName}={field2Value}.To know whether a field is a dependent lookup, check the Object Info response body for a non-null filteredLookupInfo property. Specify the name and a value for each field in the controllingFields property. Get the field values from the Record response body. Both responses are returned from the /ui-api/record-ui/{recordIds} resource. | Optional | 41.0 |
| page | Integer | The page number. The default value is 1. | Optional | 41.0 |
| pageSize | Integer | The number of items per page. The default value is 25. | Optional | 41.0 |
| q | String | The term the user is searching for.When searchType=Search, specify at least 2 characters. A wildcard at the end of the search term is implied. For example, q=ca returns Cat and Cats.When searchType=TypeAhead, specify at least 3 characters. A wildcard at the end of the search term is implied. You can’t use a ?. | Required if searchType is TypeAhead. | 41.0 |
| searchType | String | The type of search to perform. One of these values:Recent—Return most recently used matches.Search—Search for records with searchable fields that match the query term.TypeAhead—Search for records whose names start with the query term.The default value is Recent. | Optional | 41.0 |

Response Body

[Lookup Values](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_lookup_values.htm#ui_api_responses_lookup_values "Records in a lookup relationship, organized by object type.")

## Code Examples

```
/ui-api/lookups/{objectApiName}/{fieldApiName}
```

```
GET /ui-api/lookups/Opportunity/AccountId
```

```
GET /ui-api/lookups/Opportunity/AccountId?searchType=Search&q=ca
```

```
GET /ui-api/lookups/Opportunity/AccountId?searchType=TypeAhead&q=ta
```

```
"objectInfos" : {
    ...
    "Case" : {       
      "apiName" : "Case",
      ...
      "fields" : {
       ...
        "ContactId" : {
          "apiName" : "ContactId",
          ...properties removed for space...
          "filteredLookupInfo" : {
            "controllingFields" : [ "AccountId" ],
            "dependent" : true,
            "optionalFilter" : false
          },
          ...
          "sortable" : true,
          "unique" : false,
          "updateable" : true
        },
        ...
```

## Related Topics

- POST method (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_post.htm)
- Object Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm)
- /ui-api/record-ui/{recordIds} (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm)
- Record (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm)
- Lookup Values (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_lookup_values.htm)
