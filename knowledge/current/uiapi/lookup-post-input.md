---
title: "Lookup Post Input"
domain: uiapi
topic: lookup-post-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:20.225Z
estimatedTokens: 991
keywords: [Lookup, Post, Input, suggestions]
---

# Lookup Post Input

> Get lookup field suggestions.

# Lookup Post Input

Get lookup field suggestions.

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

#### See Also

-   [Get Lookup Field Suggestions With POST](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_post.htm "When a user edits a lookup field, use this resource to search for and display suggestions. You can search for most recently used matches, for matching names, or for any match in a searchable field. You must specify dependent lookup field values used by lookup filters in the `sourceRecord` request body parameter.")

## Code Examples

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

```
GET /ui-api/records/500R0000000bKpBIAU?fields=Case.AccountId
```

```
{
  "apiName": "Case",
  "id": "500Z7000000bhdFIAQ",
  "fields": {
    "AccountId": {
      "displayValue": null,
      "value": "001R0000003IG0MIAW"
    }
  },
  ...Some properties removed for space...
}
```

```
POST /ui-api/lookups/case/ContactId
{
    "sourceRecord": {
        "fields": {
            "Id": "500Z7000000bhdFIAQ",
            "AccountId": "001R0000003IG0MIAW"
        }
    },
     "orderBy": [
        {
           "fieldApiName": "Name", 
           "isAscending":true
        }
     ]  
}
```

## Related Topics

- Object Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm)
- /ui-api/record-ui/{recordIds} (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm)
- Record (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm)
- List Order By Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_order_by_input.htm)
- Record Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_record_input.htm)
- Get Lookup Field Suggestions With POST (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_post.htm)
