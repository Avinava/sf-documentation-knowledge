---
title: "data create record"
domain: cli-commands
topic: data-create-record
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.689Z
keywords: [data, create, record, Create, insert, Salesforce, Tooling, API, object., Description, Examples, Flags, Aliases]
---

# data create record

> Create and insert a record into a Salesforce or Tooling API object.

## data create record

Create and insert a record into a Salesforce or Tooling API object.

### Description for data create record

You must specify a value for all required fields of the object.

When specifying fields, use the format <fieldName>=<value>. Enclose all field-value pairs in one set of double quotation marks, delimited by spaces. Enclose values that contain spaces in single quotes.

This command inserts a record into Salesforce objects by default. Use the --use-tooling-api flag to insert into a Tooling API object.

### Examples for data create record

Insert a record into the Account object of your default org; only the required Name field has a value:

```

```

Insert an Account record with values for two fields, one value contains a space; the command uses the org with alias "my-scratch":

```

```

Insert a record into the Tooling API object TraceFlag:

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

API name of the Salesforce or Tooling API object that you're inserting a record into.

Type: option

\-v | \--values VALUES

Required

Values for the flags in the form <fieldName>=<value>, separate multiple pairs with spaces.

Type: option

\-t | \--use-tooling-api

Optional

Use Tooling API so you can insert a record in a Tooling API object.

Type: boolean

### Aliases for data create record

```

```