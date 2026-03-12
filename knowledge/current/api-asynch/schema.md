---
title: "Schema"
domain: api-asynch
topic: schema
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.294Z
estimatedTokens: 423
keywords: [Schema, Bulk, API, service, described, XML, Document, XSD, file, Versions]
---

# Schema

> The Bulk API service is described by an XML Schema
            Document (XSD) file.

# Schema

The Bulk API service is described by an XML Schema Document (XSD) file.

You can download the schema file for an API version by using this URI:

**Web\_Services\_SOAP\_endpoint\_hostname**/services/async/**APIversion**/AsyncApi.xsd

For example, if you're working with version 66.0 of the Bulk API, the URI for a production org is in this format.

https://MyDomainName.my.salesforce.com/services/async/66.0/AsyncApi.xsd

You can find the My Domain name and My Domain login URL for your org on the My Domain page in Setup. Or, to get the hostname of your My Domain login URL in Apex, use the getMyDomainHostname() method of the System.DomainCreator class.

## Schema and API Versions

The schema file is available for API versions earlier than the current release. You can download the schema file for API version 18.0 and later. For example, if you want to download the schema file for API version 31.0, use this URI:

https://MyDomainName.my.salesforce.com/services/async/31.0/AsyncApi.xsd

#### See Also

-   [JobInfo](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_jobinfo.htm "A job contains one or more batches of data for you to submit to Salesforce for processing. When a job is created, Salesforce sets the job state to Open.")

-   [BatchInfo](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_batchinfo.htm "A BatchInfo contains one batch of data for you to submit to Salesforce for processing.")

-   [Errors](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_errors.htm "Operations that you perform with Bulk API can trigger error codes. This list shows the most common error codes and the Bulk API action that possibly triggered them.")

## Related Topics

- JobInfo (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_jobinfo.htm)
- BatchInfo (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_batchinfo.htm)
- Errors (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_errors.htm)
