---
title: "Create a Record"
domain: rest-api
topic: create-a-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:24.987Z
keywords: [Create, Record, See]
---

# Create a Record

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