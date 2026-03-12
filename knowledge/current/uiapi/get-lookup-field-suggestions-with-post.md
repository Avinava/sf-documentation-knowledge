---
title: "Get Lookup Field Suggestions With POST"
domain: uiapi
topic: get-lookup-field-suggestions-with-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.477Z
estimatedTokens: 1913
keywords: [Lookup, Suggestions, POST, user, edits, resource, search, display, recently, matches, matching, any, match, searchable, specify]
---

# Get Lookup Field Suggestions With POST

> When a user edits a lookup field, use this resource to search for
      and display suggestions. You can search for most recently used matches, for matching names, or
      for any match in a searchable field. You must specify dependent lookup field values used by
      lookup filters in the `sourceRecord` request body parameter.

# Get Lookup Field Suggestions With POST

When a user edits a lookup field, use this resource to search for and display suggestions. You can search for most recently used matches, for matching names, or for any match in a searchable field. You must specify dependent lookup field values used by lookup filters in the \`sourceRecord\` request body parameter.

Resource

```

```

-   objectApiName—The API name of a source object.
-   fieldApiName—The API name of a lookup field on the source object.

Available Version

60.0

HTTP Method

POST

Example: Get Most Recently Used Records

A lookup relationship field links a source object to a target object. To edit a lookup field, users click on a lookup field to search for and select a value from a popup list. The target object provides the values in the list.

For example, the Opportunity object has an AccountId lookup field. When a user edits an Opportunity record, the user selects an Account to associate with the Opportunity. To build a UI that suggests the most recently used Account records to the user, use this resource. The default value of the searchType parameter is Recent, so the request doesn’t specify it.

```

```

Example: Search for Suggestions using request parameters

To search all searchable fields for suggestions, set searchType=Search. This example searches for strings that start with the characters ca (a wildcard is implied).

```

```

Example: Search Record Names for Suggestions using request parameters

To search record name fields for suggestions, set searchType=TypeAhead. This example searches record names for strings that start with the characters ta (a wildcard is implied).

```

```

Request Parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Integer | The page number. The default value is 1. | Optional | 60.0 |
| pageSize | Integer | The number of items per page. The default value is 25. | Optional | 60.0 |
| q | String | The term the user is searching for.When searchType=Search, specify at least 2 characters. A wildcard at the end of the search term is implied. For example, q=ca returns Cat and Cats.When searchType=TypeAhead, specify at least 3 characters. A wildcard at the end of the search term is implied. You can’t use a ?. | Required if searchType is TypeAhead. | 60.0 |
| searchType | String | The type of search to perform. One of these values:Recent—Return most recently used matches.Search—Search for records with searchable fields that match the query term.TypeAhead—Search for records whose names start with the query term.The default value is Recent. | Optional | 60.0 |
| targetApiName | String[] | The API name of the object that you want results for. The name must correspond to one of the target objects of the lookup field. If not provided, by default, results for all target objects of the lookup field are returned. If targetApiName isn’t specified, then the field configuration is used. If the field is polymorphic, several queries are considered and you receive results for every target that can lead to performance issues. | Optional | 60.0 |

Request Body for POST

Example: Search Dependent Lookups for Suggestions using the request body

Some lookup fields have lookup filters that restrict their valid values by referencing fields on the source object. These fields are called dependent lookups. For example, you can filter the Case Contact field to show only contacts that are associated with the account selected in the Case Account Name field.

In the Salesforce UI, this lookup filter is Contact Name: Account Name ID EQUALS Case: Account Name ID. In the User Interface API, lookup filter information appears in the filteredLookupInfo property of the [Object Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm#ui_api_responses_object_info "The metadata for an object.") response body, which is returned from several resources, including [/ui-api/record-ui/{recordIds}](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm#ui_api_resources_record_ui "Get layout information, metadata, and data to build UI for a single record or for a collection of records."). If the filteredLookupInfo property is non-null, the field it describes is a dependent lookup.

In this example, the Case object’s ContactId field has a filteredLookupInfo property containing a controllingFields property. The controlling field is AccountId. To restrict the lookup search, you must pass all controlling fields and their values to the lookups resource in the sourceRecord request body property.

```

```

To get the value for AccountId, look in the [Record](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm#ui_api_responses_record "The field data, API name, child relationship data, and record type information for a record.") response body, which is returned from several resources, including [/ui-api/record-ui/{recordIds}](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm#ui_api_resources_record_ui "Get layout information, metadata, and data to build UI for a single record or for a collection of records."). For example, to retrieve the value of the AccountId field present on the Case 500R0000000bKpBIAU:

```

```

```

```

To filter the suggestions for a dependent lookup, specify the names and values of the controlling fields in the sourceRecord request body property. (This example has one controlling field).

Request body:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| orderBy | List Order By Input[] | Information describing how to order the results. | Optional | 63.0 |
| sourceRecord | Record Input | The source record in which the lookup relationship field is being edited.The presence of the source record “Id” is required within the “fields” property. Accepted values are “null” when creating a new record and a valid record ID when updating an existing record.Some lookup fields have lookup filters that restrict the values they can accept by referencing fields on the source object. These fields are called dependent lookup fields or controlling fields. You must pass all controlling fields and their values to the lookups resource within the “fields” property.To know whether a field is a lookup controlling field, check the Object Info response body for a non-null filteredLookupInfo property. Get the field values from the Record response body. Both responses are returned from the /ui-api/record-ui/{recordIds} resource.Properties “allowSaveOnDuplicate” and “apiName” are not used. | Required | 60.0 |

Response Body

[Lookup Values](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_lookup_values.htm#ui_api_responses_lookup_values "Records in a lookup relationship, organized by object type.")

#### See Also

-   [Get Lookup Field Suggestions](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_get.htm "When a user edits a lookup field, use this resource to search for and display suggestions. You can search for most recently used matches, for matching names, or for any match in a searchable field. You can also specify lookup filter bindings for dependent lookups.")

-   [Get Lookup Field Suggestions for a Specified Object](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_object_get.htm "When a user edits a lookup field, use this resource to search for and display suggestions for a specified object. You can search for most recently used matches, for matching names, or for any match in a searchable field. You can also specify lookup filter bindings for dependent lookups.")

## Code Examples

```
/ui-api/lookups/{objectApiName}/{fieldApiName}
```

```
POST /ui-api/lookups/Opportunity/AccountId
```

```
POST /ui-api/lookups/Opportunity/AccountId?searchType=Search&q=ca
```

```
POST /ui-api/lookups/Opportunity/AccountId?searchType=TypeAhead&q=ta
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

- Object Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm)
- /ui-api/record-ui/{recordIds} (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm)
- Record (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm)
- List Order By Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_order_by_input.htm)
- Record
                      Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_record_input.htm)
- Lookup Values (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_lookup_values.htm)
- Get Lookup Field Suggestions (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_get.htm)
- Get Lookup Field Suggestions for a Specified Object (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_object_get.htm)
