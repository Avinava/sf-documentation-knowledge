---
title: "sObject Tree"
domain: rest-api
topic: sobject-tree
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.445Z
estimatedTokens: 959
keywords: [sObject, Tree, Creates, trees, root, records, specified, type., tree, collection, nested, parent-child, single, record., Syntax, Example]
---

# sObject Tree

> Creates one or more sObject trees with root records of the
      specified type. An sObject tree is a collection of nested, parent-child records with a single
      root record.

# sObject Tree

Creates one or more sObject trees with root records of the specified type. An sObject tree is a collection of nested, parent-child records with a single root record.

In the request data, you supply the record hierarchies, required and optional field values, each record’s type, and a reference ID for each record. Objects are created in the same order that they’re listed in the request. Upon success, the response contains the IDs of the created records. If an error occurs while creating a record, the entire request fails. In this case, the response contains only the reference ID of the record that caused the error and the error information. The response bodies and HTTP statuses of the requests are returned in a single response body. The entire request counts as a single call toward your API limits.

The request can contain the following:

-   Up to a total of 200 records across all trees
-   Up to five records of different types
-   sObject trees up to five levels deep

Because an sObject tree can contain a single record, you can use this resource to create up to 200 unrelated records of the same type.

When the request is processed and records are created, triggers, processes, and workflow rules fire separately for each of the following groups of records.

-   Root records across all sObject trees in the request
-   All second-level records of the same type—for example, second-level Contacts across all sObject trees in the request
-   All third-level records of the same type
-   All fourth-level records of the same type
-   All fifth-level records of the same type

## Syntax

URI

/services/data/vXX.X/composite/tree/sObjectName

Formats

JSON, XML

HTTP method

POST

Authentication

Authorization: Bearer token

Parameters

None required

Request body

[sObject Tree Request Body](atlas.en-us.api_rest.meta/api_rest/requests_composite_sobject_tree.htm "Describes a collection of sObject trees to create with the sObject Tree resource.")

Response body

[sObject Tree Response Body](atlas.en-us.api_rest.meta/api_rest/responses_composite_sobject_tree.htm "Describes the result of an sObject Tree request.")

## Example

-   For an example of creating unrelated records of the same type, see [Create Multiple Records](atlas.en-us.api_rest.meta/api_rest/dome_composite_sobject_tree_flat.htm "While the resource can be used to create nested records, you can also create multiple, unrelated records of the same type. In a single request, you can create up to two hundred records. In the request data, you supply the required and optional field values for each record, each record’s type, and a reference ID for each record, and then use the POST method of the resource. The response body will contain the IDs of the created records if the request is successful. Otherwise, the response contains only the reference ID of the record that caused the error and the error information.").
-   For an example of creating nested records, see [Create Nested Records](atlas.en-us.api_rest.meta/api_rest/dome_composite_sobject_tree_create.htm "Use the sObject Tree resource to create nested records that share a root record type. For example, in a single request, you can create an account along with its child contacts, and a second account along with its child accounts and contacts. Once the request is processed, the records are created and parents and children are automatically linked by ID. In the request data, you supply the record hierarchies, required and optional field values, each record’s type, and a reference ID for each record, and then use the POST method of the resource. The response body will contain the IDs of the created records if the request is successful. Otherwise, the response contains only the reference ID of the record that caused the error and the error information.").

## Related Topics

- sObject Tree Request Body (atlas.en-us.api_rest.meta/api_rest/requests_composite_sobject_tree.htm)
- sObject Tree Response Body (atlas.en-us.api_rest.meta/api_rest/responses_composite_sobject_tree.htm)
- Create Multiple Records (atlas.en-us.api_rest.meta/api_rest/dome_composite_sobject_tree_flat.htm)
- Create Nested Records (atlas.en-us.api_rest.meta/api_rest/dome_composite_sobject_tree_create.htm)
