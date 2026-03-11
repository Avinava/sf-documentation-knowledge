---
title: "data update record"
domain: cli-commands
topic: data-update-record
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.138Z
keywords: [data, update, record, Updates, single, Salesforce, Tooling, API, object., Description, Examples, Flags, Aliases]
---

# data update record

> Updates a single record of a Salesforce or Tooling API object.

## data update record

Updates a single record of a Salesforce or Tooling API object.

### Description for data update record

Specify the record you want to update with either its ID or with a list of field-value pairs that identify the record. If your list of fields identifies more than one record, the update fails; the error displays how many records were found.

When using field-value pairs for both identifying the record and specifiyng the new field values, use the format <fieldName>=<value>. Enclose all field-value pairs in one set of double quotation marks, delimited by spaces. Enclose values that contain spaces in single quotes.

This command updates a record in Salesforce objects by default. Use the --use-tooling-api flag to update a Tooling API object.

### Examples for data update record

Update the Name field of an Account record with the specified (truncated) ID:

```

```

Update the Name field of an Account record whose current name is 'Old Acme':

```

```

Update the Name and Website fields of an Account record with the specified (truncated) ID:

```

```

Update the ExpirationDate field of a record of the Tooling API object TraceFlag using the specified (truncated) ID:

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-s | \--sobject SOBJECT

Required

API name of the Salesforce or Tooling API object that contains the record you're updating.

Type: option

\-i | \--record-id RECORD-ID

Optional

ID of the record you’re updating.

Type: option

\-w | \--where WHERE

Optional

List of <fieldName>=<value> pairs that identify the record you want to update.

Type: option

\-v | \--values VALUES

Required

Fields that you're updating, in the format of <fieldName>=<value> pairs.

Type: option

\-t | \--use-tooling-api

Optional

Use Tooling API so you can update a record in a Tooling API object.

Type: boolean

### Aliases for data update record

```

```