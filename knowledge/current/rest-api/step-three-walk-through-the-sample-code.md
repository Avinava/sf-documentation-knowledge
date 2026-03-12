---
title: "Step Three: Walk Through the Sample Code"
domain: rest-api
topic: step-three-walk-through-the-sample-code
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.087Z
estimatedTokens: 1316
keywords: [Step, Three, Walk, Sample, Code, access, different, resources, Salesforce, series, REST, requests, try, examples, sure]
---

# Step Three: Walk Through the Sample Code

> To access different types of resources in Salesforce, make a series of REST requests.
        Before you try these examples, make sure to complete the prerequisites and obtain an access
        token in Step 1 of this Quick Start.

# Step Three: Walk Through the Sample Code

To access different types of resources in Salesforce, make a series of REST requests. Before you try these examples, make sure to complete the prerequisites and obtain an access token in Step 1 of this Quick Start.

You can copy and paste these examples to send them with cURL. But first replace MyDomainName in the base URI with your Salesforce domain. For information on the anatomy of a REST request, see [REST Resources and Requests](atlas.en-us.api_rest.meta/api_rest/intro_rest_resources.htm "REST API is based on the usage of resources—pieces of data in Salesforce, such as records, collections of records, query results, metadata, or API information. Each resource is exposed by a uniform resource identifier (URI) and is accessed by sending HTTP requests to the corresponding URI.").

## Get the Salesforce Version

To retrieve information about each available Salesforce version, submit a [Versions](atlas.en-us.api_rest.meta/api_rest/resources_versions.htm "Lists summary information about each Salesforce version currently available, including the version, label, and a link to each version's root.") request. In this case, the request doesn’t require authentication.

```

```

The output from this request, including the response header, specifies all valid versions. Your result can include more than one value.

```

```

## Get a List of Resources

To retrieve a list of the resources available for Salesforce, in this example, for version 66.0, submit a [Resources by Version](atlas.en-us.api_rest.meta/api_rest/resources_discoveryresource.htm "Lists available resources for the specified API version, including resource name and URI.") request.

```

```

The output from this request shows that sobjects is one of the available resources in Salesforce version 66.0.

```

```

## Get a List of Available Objects

To request a list of the available objects, submit a [Describe Global](atlas.en-us.api_rest.meta/api_rest/resources_describeGlobal.htm "Lists the available objects and the associated metadata. This resource returns both custom and standard objects.") request.

```

```

The output from this request shows that the Account object is available.

```

```

## Get Basic Object Information

To retrieve basic information about the available Account object’s metadata, submit a [sObject Basic Information](atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info.htm "Retrieves basic metadata for a specified object, or creates a new record for the specified object.") request.

```

```

The output from this request shows basic attributes of the Account object such as its name and label, and it lists the most recently used accounts.

```

```

## Get a List of Fields

To retrieve more detailed information, submit a [sObject Describe](atlas.en-us.api_rest.meta/api_rest/resources_sobject_describe.htm "Completely describes the individual metadata at all levels for the specified object. For example, this can be used to retrieve the fields, URLs, and child relationships for the Account object.") request.

```

```

The output from this request shows more detailed information about the Account object, such as its field attributes and child relationships.

```

```

## Execute a SOQL Query

To execute a SOQL query that retrieves a list of all the Account name values, submit a [Query](atlas.en-us.api_rest.meta/api_rest/resources_query.htm "Runs the specified SOQL query.") request.

```

```

The output lists the available Account names, and each name’s preceding attributes include the Account IDs.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

You can find more information about SOQL in the [Salesforce SOQL and SOSL Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").

## Update a Field on a Record

To retrieve one of the accounts and update its billing city, submit an [sObject Rows](atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm "Accesses records based on a specified object and record ID. Retrieves, updates, or deletes records based on the HTTP method. Use the GET method to retrieve records or specific field values, the DELETE method to delete records, or the PATCH method to update records.") request. To update the object, create a text file called patchaccount.json containing the new billing city information.

```

```

Specify this JSON file in the REST request. The cURL notation requires the —d option when specifying data. For more information, see [http://curl.haxx.se/docs/manpage.html](http://curl.haxx.se/docs/manpage.html "HTML (New Window)").

Also, specify the PATCH method, which is used to update a REST resource. This cURL command retrieves the specified Account object using its ID field and updates its billing city.

```

```

No response body is returned, just the headers.

```

```

To see that the billing address has changed to Fremont, refresh the page on the account.

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/quickstart_oauth.htm "Step Two: Set Up Authentication")
-   [Next →](atlas.en-us.api_rest.meta/api_rest/quickstart_using_other_tools.htm "Using Other Tools")

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/
```

```
Content-Length: 88 
Content-Type: application/json; 
charset=UTF-8 Server:
[
    {
        "label":"Spring '11",
        "url":"/services/data/v21.0",
        "version":"21.0"
    }
    ...
]
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/ -H "Authorization: Bearer access_token"
```

```
{
    "sobjects" : "/services/data/v66.0/sobjects",
    "search" : "/services/data/v66.0/search",
    "query" : "/services/data/v66.0/query",
    "recent" : "/services/data/v66.0/recent"
}
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/ -H "Authorization: Bearer access_token"
```

## Related Topics

- REST Resources and Requests (atlas.en-us.api_rest.meta/api_rest/intro_rest_resources.htm)
- Versions (atlas.en-us.api_rest.meta/api_rest/resources_versions.htm)
- Resources by Version (atlas.en-us.api_rest.meta/api_rest/resources_discoveryresource.htm)
- Describe Global (atlas.en-us.api_rest.meta/api_rest/resources_describeGlobal.htm)
- sObject Basic Information (atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info.htm)
- sObject Describe (atlas.en-us.api_rest.meta/api_rest/resources_sobject_describe.htm)
- Query (atlas.en-us.api_rest.meta/api_rest/resources_query.htm)
- sObject Rows (atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm)
- ← Previous (atlas.en-us.api_rest.meta/api_rest/quickstart_oauth.htm)
- Next → (atlas.en-us.api_rest.meta/api_rest/quickstart_using_other_tools.htm)
