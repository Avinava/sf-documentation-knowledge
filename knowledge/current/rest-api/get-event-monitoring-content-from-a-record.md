---
title: "Get Event Monitoring Content from a Record"
domain: rest-api
topic: get-event-monitoring-content-from-a-record
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.858Z
estimatedTokens: 187
keywords: [Event, Monitoring, Content, Record, sObject, Blob, Retrieve, resource, data]
---

# Get Event Monitoring Content from a Record

> Use the sObject Blob
		Retrieve resource to retrieve BLOB data for a given record.

# Get Event Monitoring Content from a Record

Use the [sObject Blob Retrieve](atlas.en-us.api_rest.meta/api_rest/resources_sobject_blob_retrieve.htm#resources_sobject_blob_retrieve "Gets the specified blob field from an individual record and returns it as binary data. Only certain standard objects have blob fields, such as Attachment, ContentNote, ContentVersion, Document, Folder, and Note.") resource to retrieve BLOB data for a given record.

Example

You can use REST API to retrieve BLOB data for event monitoring. Use a GET request similar to this:

```

```

Example response body

Event monitoring content is returned in binary form. Note that the response content type won’t be JSON or XML because the returned data is binary.

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/EventLogFile/0ATD000000000pyOAA/LogFile -H "Authorization: Bearer token"
```

```
HTTP/1.1 200 OK
Date: Tue, 06 Aug 2013 16:46:10 GMT
Sforce-Limit-Info: api-usage=135/5000
Content-Type: application/octetstream
Transfer-Encoding: chunked
"EVENT_TYPE", "ORGANIZATION_ID", "TIMESTAMP","USER_ID", "CLIENT_IP",
"URI", "REFERRER_URI", "RUN_TIME"
"URI", "00DD0000000K5xD", "20130728185606.020", "005D0000001REDy",
"10.0.62.141", "/secur/contentDoor", "https-//login-salesforce-com/",
"11"
"URI", "00DD0000000K5xD", "20130728185556.930", "005D0000001REI0",
"10.0.62.141", "/secur/logout.jsp", "https-//MyDomainName-my-salesforce-com/00O/o",
"54"
"URI", "00DD0000000K5xD", "20130728185536.725", "005D0000001REI0",
"10.0.62.141", "/00OD0000001ckx3",
"https-//MyDomainName-my-salesforce-com/00OD0000001ckx3", "93"
```

## Related Topics

- sObject Blob
		Retrieve (atlas.en-us.api_rest.meta/api_rest/resources_sobject_blob_retrieve.htm)
