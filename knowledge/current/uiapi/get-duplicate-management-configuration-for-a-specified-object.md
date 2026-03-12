---
title: "Get Duplicate Management Configuration for a Specified Object"
domain: uiapi
topic: get-duplicate-management-configuration-for-a-specified-object
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.332Z
estimatedTokens: 560
keywords: [Duplicate, Management, Configuration, whether, configured, object's, rules, matching, know, check, records]
---

# Get Duplicate Management Configuration for a Specified Object

> Learn whether duplicate management is configured for the specified
      object. If duplicate management is configured, learn about the object's duplicate rules and
      matching rules. Use the information in the response to know when to check for duplicate
      records.

# Get Duplicate Management Configuration for a Specified Object

Learn whether duplicate management is configured for the specified object. If duplicate management is configured, learn about the object's duplicate rules and matching rules. Use the information in the response to know when to check for duplicate records.

Resource

```

```

objectApiName—The API name of a [supported object](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.").

Available Version

50.0

HTTP Method

GET

Example

Use the following request to learn what duplicate management is configured for the custom object Movie.

```

```

The response tells you that duplicate management is configured, and that the fields Name and Year are used to check for duplicates.

```

```

From the preceding response, you know to check the Name and Year fields when adding or updating a Movie record. For example, you can check if a movie with the name "Aliens" and the release year "1986" already exists.

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recordTypeId | String | The record type ID (RecordType object) used to return the correct duplicate configuration. This field is optional, except for the Person Account object. If you’re searching for duplicate Person Account records, you must specify the Person Account record type ID here. | Optional | 52.0 |

Response Body

[Duplicates Configuration](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicates_configuration.htm "Contains information about duplicate management configuration for an object. Learn whether duplicate management is configured, which fields are used to determine whether duplicate records exist, and which duplicate rules are active.")

#### See Also

-   [Check for Duplicate Records](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_predupe_create.htm "Before updating or creating a record, you can check whether a duplicate record exists. Use the response to learn whether to block or allow the action, and whether to warn the user.")

## Code Examples

```
/ui-api/duplicates/{objectApiName}
```

```
/ui-api/duplicates/Movie__c
```

```
// duplicate rules and matching rules are configured for Movie
dedupeEnabled: true

// these fields are used to check for duplicate records
dedupeFields
0: Name
1: Year__c
...
```

```
ui-api/predupe{
"apiName" : "Movie__c",
"fields" :
{"Name": "Aliens",
  "Year__c": "1986"
}
```

## Related Topics

- supported
            object (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- Duplicates Configuration (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicates_configuration.htm)
- Check for Duplicate Records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_predupe_create.htm)
