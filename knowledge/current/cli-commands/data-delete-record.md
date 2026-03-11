---
title: "data delete record"
domain: cli-commands
topic: data-delete-record
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.689Z
keywords: [data, delete, record, Deletes, single, Salesforce, Tooling, API, object., Description, Examples, Flags, Aliases]
---

# data delete record

> Deletes a single record from a Salesforce or Tooling API object.

## data delete record

Deletes a single record from a Salesforce or Tooling API object.

### Description for data delete record

Specify the record you want to delete with either its ID or with a list of field-value pairs that identify the record. If your list of fields identifies more than one record, the delete fails; the error displays how many records were found.

When specifying field-value pairs, use the format <fieldName>=<value>. Enclose all field-value pairs in one set of double quotation marks, delimited by spaces. Enclose values that contain spaces in single quotes.

This command deletes a record from Salesforce objects by default. Use the --use-tooling-api flag to delete from a Tooling API object.

### Examples for data delete record

Delete a record from Account with the specified (truncated) ID:

```

```

Delete a record from Account whose name equals "Acme":

```

```

Delete a record from Account identified with two field values, one that contains a space; the command uses the org with alias "my-scratch":

```

```

Delete a record from the Tooling API object TraceFlag with the specified (truncated) ID:

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

API name of the Salesforce or Tooling API object that you're deleting a record from.

Type: option

\-i | \--record-id RECORD-ID

Optional

ID of the record you’re deleting.

Type: option

\-w | \--where WHERE

Optional

List of <fieldName>=<value> pairs that identify the record you want to delete.

Type: option

\-t | \--use-tooling-api

Optional

Use Tooling API so you can delete a record from a Tooling API object.

Type: boolean

### Aliases for data delete record

```

```