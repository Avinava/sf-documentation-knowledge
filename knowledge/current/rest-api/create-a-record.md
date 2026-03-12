---
title: "Create a Record"
domain: rest-api
topic: create-a-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.951Z
estimatedTokens: 323
keywords: [Record, sObject, Basic, resource, new, records, supply, data, send, POST, HTTP, call, successful]
---

# Create a Record

> Use the sObject Basic Information resource to create new records. You
            supply the required field values in the request data, and send the request using the
            POST HTTP method. The response body contains the ID of the new record if the call is
            successful.

# Create a Record

Use the [sObject Basic Information](atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info.htm "Retrieves basic metadata for a specified object, or creates a new record for the specified object.") resource to create new records. You supply the required field values in the request data, and send the request using the POST HTTP method. The response body contains the ID of the new record if the call is successful.

The following example request creates a new Account record, with the field values for the new record provided in newaccount.json. Only the name field is specified in this example, but you could also provide values for other Account fields.

Example for creating a new Account

```

```

Example request body newaccount.json file for creating a new Account

```

```

Example response body after successfully creating a new Account

```

```

Example of an error when attempting to create a new Account

An invalid rquest body newaccount.json file for creating a new Account:

```

```

The resulting error:

```

```

#### See Also

-   [Create Records Using sObject Basic Information](atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info_post.htm "Creates a new record for a specified object based on field values in the request body.")

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/ -H "Authorization: Bearer token" -H "Content-Type: application/json" -d "@newaccount.json"
```

```
{
  "Name" : "Express Logistics and Transport"
}
```

```
{
  "id" : "001D000000IqhSLIAZ",
  "errors" : [ ],
  "success" : true
}
```

```
{
  "id" : "001D000000IqhSLIAZ",
  "Name" : "Express Donuts and Pies"
}
```

```
[{"message":"The Id field should not be specified in the sobject data.",
"errorCode":"INVALID_FIELD"}]
```

## Related Topics

- sObject Basic Information (atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info.htm)
- Create Records Using sObject Basic Information (atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info_post.htm)
