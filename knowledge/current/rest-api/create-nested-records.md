---
title: "Create Nested Records"
domain: rest-api
topic: create-nested-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:24.861Z
keywords: [Create, Nested, Records, See]
---

# Create Nested Records

# Create Nested Records

Use the sObject Tree resource to create nested records that share a root record type. For example, in a single request, you can create an account along with its child contacts, and a second account along with its child accounts and contacts. Once the request is processed, the records are created and parents and children are automatically linked by ID. In the request data, you supply the record hierarchies, required and optional field values, each record’s type, and a reference ID for each record, and then use the POST method of the resource. The response body will contain the IDs of the created records if the request is successful. Otherwise, the response contains only the reference ID of the record that caused the error and the error information.

The following example creates two sets of nested records. The first set includes an account and two child contact records. The second set includes an account, one child account record, and one child contact record. The record data is provided in newrecords.json.

Example for creating two new accounts and their child records

```

```

Example request body newrecords.json file for creating two new Accounts and their child records

```

```

Example response body after successfully creating records and relationships

```

```

Once the request is processed, all six records are created with the parent-child relationships specified in the request.

#### See Also

-   [sObject Tree](atlas.en-us.api_rest.meta/api_rest/resources_composite_sobject_tree.htm "Creates one or more sObject trees with root records of the specified type. An sObject tree is a collection of nested, parent-child records with a single root record.")