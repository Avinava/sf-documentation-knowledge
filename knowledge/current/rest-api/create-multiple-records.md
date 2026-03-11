---
title: "Create Multiple Records"
domain: rest-api
topic: create-multiple-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:24.865Z
keywords: [Create, Multiple, Records, See]
---

# Create Multiple Records

# Create Multiple Records

While the resource can be used to create nested records, you can also create multiple, unrelated records of the same type. In a single request, you can create up to two hundred records. In the request data, you supply the required and optional field values for each record, each record’s type, and a reference ID for each record, and then use the POST method of the resource. The response body will contain the IDs of the created records if the request is successful. Otherwise, the response contains only the reference ID of the record that caused the error and the error information.

The following example creates four new accounts. The record data is provided in newrecords.json.

Example for creating four new accounts

```

```

Example request body newrecords.json file for creating four new accounts

```

```

Example response body after successfully creating records

```

```

#### See Also

-   [sObject Tree](atlas.en-us.api_rest.meta/api_rest/resources_composite_sobject_tree.htm "Creates one or more sObject trees with root records of the specified type. An sObject tree is a collection of nested, parent-child records with a single root record.")