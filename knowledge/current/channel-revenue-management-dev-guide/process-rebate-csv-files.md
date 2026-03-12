---
title: "Process Rebate CSV Files"
domain: channel-revenue-management-dev-guide
topic: process-rebate-csv-files
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:10.089Z
estimatedTokens: 265
keywords: [Process, Rebate, CSV, Files, uploaded, file, Bulk, API, 2.0, convert, file’s, data, records, target, REST]
---

# Process Rebate CSV Files

> Process an uploaded CSV file using Bulk API 2.0 and convert the
         file’s data into records in the target object.

# Process Rebate CSV Files

Process an uploaded CSV file using Bulk API 2.0 and convert the file’s data into records in the target object.

This object is available in API version 51.0 and later for users with Rebate Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/rebatesProcessCSV

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| recordId | TypeIDDescriptionRequired. The ID of the received document record that includes the CSV file to be converted. |
| entityAPIName | TypestringDescriptionRequired. The API name of the target object that receives the processed CSV file records. |
| lineEnding | TypestringDescriptionOptional. The line ending request header that specifies whether the line endings can be read either as line feeds (LFs) or as line feeds (CRLFs) for fields of type Text Area and Text Area (Long). The default value is LF. |

## Usage

**Sample Request**

```

```

**Sample Response**

```

```

## Code Examples

```
{
   "inputs":[{
      "recordId": "0io4S000000TPsyQAG",
      "entityAPIName" : "TransactionJournal"
   }]
}
```

```
{
   "errors":null,
   "isSuccess":true,
}
```
