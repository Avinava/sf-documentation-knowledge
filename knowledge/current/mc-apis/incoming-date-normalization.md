---
title: "Incoming Date Normalization"
domain: mc-apis
topic: incoming-date-normalization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:17.629Z
estimatedTokens: 626
keywords: [Incoming, Date, Normalization, dates, times, server, time, SOAP, message, API, Affected, Items]
---

> This page contains information about the normalization of incoming dates and times to the server time through a SOAP message on the API.

# Incoming Date Normalization

This page contains information about the normalization of incoming dates and times to the server time through a SOAP message on the API.

## Date and Time Format

The Marketing Cloud application normalizes the following three date and time formats represented in a SOAP message:

Format Example Description

yyyy-MM-ddTHH:mm:ddZ

2009-08-21T18:32:15Z

UTC format

yyyy-MM-ddTHH:mm:dd

2009-08-21T14:32:15

Unknown timezone, considered to be the server time

yyyy-MM-ddTHH:mm:dd-zz:zz

2009-08-21T12:02:15-06:30

Time offset from UTC by specified amount

All three of the times listed above refer to the same point in time on the server.

## Methods and Parameters Affected by Normalization

The time normalization applies to the following methods and parameters. The API searches for properties with a type of DateTime in any objects passed in through these parameters. The API then normalizes any time formats found, and this normalization applies recursively to any nested objects.

-   [Create](atlas.en-us.noversion.mc-apis.meta/mc-apis/create.htm "Create"): Options and Objects
-   [Retrieve](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve.htm "Retrieve"): RetrieveRequest
-   [Update](atlas.en-us.noversion.mc-apis.meta/mc-apis/update.htm "Update"): Options and Objects
-   [Delete](atlas.en-us.noversion.mc-apis.meta/mc-apis/delete.htm "Delete"): Options and Objects
-   [Query](atlas.en-us.noversion.mc-apis.meta/mc-apis/query.htm "Query"): QueryRequest
-   [Execute](atlas.en-us.noversion.mc-apis.meta/mc-apis/execute.htm "Execute"): Requests
-   [Extract](atlas.en-us.noversion.mc-apis.meta/mc-apis/extract.htm "Extract"): Requests
-   [Perform](atlas.en-us.noversion.mc-apis.meta/mc-apis/perform.htm "Perform"): Options and Definitions
-   [Configure](atlas.en-us.noversion.mc-apis.meta/mc-apis/configure.htm "Configure"): Options and Configurations
-   [Schedule](atlas.en-us.noversion.mc-apis.meta/mc-apis/schedule.htm "Schedule"): Options, Schedule, and Interactions

Any response including the incoming request object presents a different time in that response. For example, the CreateResult object on a Create call contains the object from the request and presents any dates in the returned object in server time.

If normalization causes problems for your SOAP API implementation, contact your Marketing Cloud representative to disable this feature.

## Related Items

[CreateResult Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/createresult.htm)

## Related Topics

- Create (atlas.en-us.noversion.mc-apis.meta/mc-apis/create.htm)
- Retrieve (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve.htm)
- Update (atlas.en-us.noversion.mc-apis.meta/mc-apis/update.htm)
- Delete (atlas.en-us.noversion.mc-apis.meta/mc-apis/delete.htm)
- Query (atlas.en-us.noversion.mc-apis.meta/mc-apis/query.htm)
- Execute (atlas.en-us.noversion.mc-apis.meta/mc-apis/execute.htm)
- Extract (atlas.en-us.noversion.mc-apis.meta/mc-apis/extract.htm)
- Perform (atlas.en-us.noversion.mc-apis.meta/mc-apis/perform.htm)
- Configure (atlas.en-us.noversion.mc-apis.meta/mc-apis/configure.htm)
- Schedule (atlas.en-us.noversion.mc-apis.meta/mc-apis/schedule.htm)
