---
title: "Composite Subrequest Result"
domain: rest-api
topic: composite-subrequest-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.319Z
keywords: [Composite, Subrequest, Result, Properties, Example, Behavior, Responses, There, Illegal, Characters, Reference, IDs, References, Null, Fields, Note, Aren’t, Specified, Parent, Request]
---

# Composite Subrequest Result

# Composite Subrequest Result

The composite subrequest result describes the result for a subrequest.

## Properties

| Name | Type | Description |
| --- | --- | --- |
| body | The type depends on the response type of the subrequest. | The response body of this subrequest. See the documentation for the subrequest resource for more information.If the subrequest returns an error, the body includes the error code and message. For more details on error responses, see Status Codes and Error Responses. |
| httpHeaders | Map<String, String> | Response headers and their values for this subrequest. The Composite resource doesn’t support the Content-Length header, so subrequest responses don’t include this header and neither does the top-level response. |
| httpStatusCode | Integer | An HTTP status code for this subrequest. If allOrNone is set to true in the composite request and a subrequest returns an error, all other subrequests return the 400 HTTP status code. |
| referenceId | String | The reference ID specified in the subrequest. This property lets you easily associate subrequests with their results. |

## Example

```

```

The following example shows the response for a subrequest that had an error while trying to create a Contact:

```

```

## Behavior and Responses If There Are Illegal Characters in Reference IDs

The referenceIds must not contain anything besides letters, numbers, and underscores (’\_’).

The API’s behavior if there are illegal characters depends on the API version and the release. (The pertinent API version that is used to make the composite request. That version isn’t necessarily the same as the API version specified in the url parameters in the subrequests.)

For example, consider the following request. It attempts to do the following:

-   Create an account named “Cloudy Consulting”.
-   Create a Contact, “Mary Smith”, linked to the Cloudy Consulting account.
-   Create another new account, named “Easy Spaces”.

It has illegal characters in the first reference ID, refNewAccount\[1\].

```

```

**Version 51.0 and Earlier**

In API version 51.0 and earlier, illegal characters in a reference ID cause all the subrequests that use that reference ID to fail. In this example, the response is:

```

```

The two accounts are created (even though the first account uses illegal characters in its reference ID). But the attempt to create a contact (using the reference ID containing illegal characters) fails.

**Responses for Version 51.0 and Earlier in Previous Releases**

The response shown above is that for the Summer ’21 release and later. In releases before Summer ’21, problematic reference IDs in the response were truncated if the IDs contained ‘(’ or ‘\[’. So the response would have been:

```

```

Starting with the Summer ’21 release, problematic reference IDs are no longer truncated. This change makes it easier to match the parts of the response to the request.

**Version 52.0 and Later**

In API version 52.0 and later, any illegal characters in reference IDs cause the whole request to fail. The response to the example above is:

```

```

**Summary**

![a summary of the error responses](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_rest%2Fimages%2Fcomposite_illegal_characters.png&folder=api_rest)

## Behavior for References to Null Fields

The API’s behavior if there are references to null fields depends on the API version. (The pertinent API version is that used to make the composite request. That version isn’t necessarily the same as the API version specified in the url parameters in the subrequests.)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

This behavior only applies to requests where the parent request uses an [sObject Rows](atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm "Accesses records based on a specified object and record ID. Retrieves, updates, or deletes records based on the HTTP method. Use the GET method to retrieve records or specific field values, the DELETE method to delete records, or the PATCH method to update records.") resource (for example, /services/data/v*XX.X*/sobjects/Contact/*id*).

For example, consider this request. It locates an existing Contact and then uses @{refContact.FirstName} and @{refContact.LastName} to create a record.

```

```

What happens if the Contact’s first name is null (not set)?

**Responses for Version 51.0 and Earlier**

In API version 51.0 and earlier, the fact that the Contact’s FirstName field is null causes the dependent subrequest to fail.

```

```

That example assumes that allOrNone is set to false. If it’s true, the whole composite request is rolled back. See [allOrNone Parameters in Composite and Collections Requests](atlas.en-us.api_rest.meta/api_rest/resources_composite_allornone.htm "If a Composite request uses sObject Collections, there are two or more allOrNone parameters that can interact, one on the Composite request and one on each sObject Collections subrequest.").

**Responses for Version 52.0 and Later**

In API version 52.0 and later, the request succeeds.

```

```

## Behavior for References to Fields That Aren’t Specified in the Parent Request

In dependent subrequests, you must always only use fields that are explicitly selected in parent requests. If this practice isn’t followed, the API’s behavior depends on the API version. (The pertinent API version is that used to make the composite request. That version isn’t necessarily the same as the API version specified in the url parameters in the subrequests.)

For example, consider the following request. It attempts to:

1.  Locate a specific Contact.
2.  Use @{refContact.records\[0\].AccountId} to get that Contact’s Account ID.

However, the parent request doesn’t explicitly query for the AccountId.

```

```

**Responses for Version 51.0 and Earlier**

In API version 51.0 and earlier, there are *rare cases* where such a request succeeds.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

The fact that a request like this sometimes succeeds should never be relied upon. If you plan to use a field from a parent request’s result, you should always explicitly select that field in the parent request.

**Responses for Version 52.0 and Later**

In API version 52.0 and later, the request always fails:

```

```

To make such a request work, you must explicitly obtain the AccountId in the parent request:

```

```