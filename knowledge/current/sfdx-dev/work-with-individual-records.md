---
title: "Work With Individual Records"
domain: sfdx-dev
topic: work-with-individual-records
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.191Z
estimatedTokens: 879
keywords: [Work, Individual, Records, Everyone’s, process, unique, don’t, always, data, teammates, want, modify, quickly, record, commands]
---

# Work With Individual Records

> Everyone’s process is unique, and you don’t always need the same data as your teammates.
    When you want to create, modify, or delete individual records quickly, use the data record commands, such as data
      create record. With these commands you specify field values directly at the command
    line, so you don’t need any CSV or JSON data files. These commands work with both standard and
    custom Salesforce objects, and Tooling API objects.

# Work With Individual Records

Everyone’s process is unique, and you don’t always need the same data as your teammates. When you want to create, modify, or delete individual records quickly, use the data record commands, such as data create record. With these commands you specify field values directly at the command line, so you don’t need any CSV or JSON data files. These commands work with both standard and custom Salesforce objects, and Tooling API objects.

## Create a Record

This example shows how to create a record in the Account object in your default org:

```

```

Use the \--values flag to specify field values in the form <fieldName>=<value>. Be sure to use the object’s field API name and not its label. Separate multiple pairs with spaces, and use single quotes for individual values that include spaces. You must specify a value for all required object fields.

Use the \--use-tooling-api flag to create a Tooling API object record. This example creates a record in the TraceFlag Tooling API object:

```

```

## Get a Record

Use the data get record command to retrieve and display a single record of a Salesforce standard or Tooling API object. The command first displays basic information about the record, such as its ID, and then displays all the record’s fields, one field per line. Fields with no values are displayed as null.

Identify the record by either its ID (\--record-id flag) or with a list of field-value pairs (\--where flag). If your list of fields identifies more than one record, the command fails; the error displays how many records were found.

When using \--where to identify a record by its field values, be sure to use the object’s field API name and not its label. Separate multiple field-value pairs with spaces, and use single quotes for individual values that include spaces.

For example, to display the Account record that we added in the previous section, run this command:

```

```

If you noted the record ID when you created the record, you can use it to display the record this way:

```

```

Here’s the example for Tooling API objects:

```

```

## Update or Delete a Record

Use the data update|delete record commands to change an existing object or Tooling API record.

Identify the record by either its ID (\--record-id flag) or with a list of field-value pairs (\--where flag). If your list of fields identifies more than one record, the command fails; the error displays how many records were found.

To update a field, use the \--values flag to specify the new field value. For both \--values and \--where, be sure to use the object’s field API name and not its label. Separate multiple field-value pairs with spaces, and use single quotes for individual values that include spaces.

For example, let’s say the phone number for the Exciting Company account changed; here’s the CLI command to update the record:

```

```

Here’s how you delete the record:

```

```

This example shows how to delete a record of a Tooling API object using its record ID:

```

```

#### See Also

-   [*Salesforce CLI Command Reference*: data Commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm "Salesforce CLI Command Reference: data Commands - HTML (New Window)")

-   [*Tooling API*: TraceFlag](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_traceflag.htm "Tooling API: TraceFlag - HTML (New Window)")

## Code Examples

```
sf data create record --sobject Account \
   --values "Name='Exciting Company' Website=www.example.com NumberOfEmployees=45 Phone='(415) 555-1212'"
```

```
sf data create record --use-tooling-api --sobject TraceFlag \
   --values "DebugLevelId=7dl170000008U36AAE StartDate=2024-12-15T00:26:04.000+0000 \
   ExpirationDate=2024-12-15T00:56:04.000+0000 LogType=CLASS_TRACING TracedEntityId=01p17000000R6bLAAS"
```

```
sf data get record --sobject Account \
    --where "Name='Exciting Company' Website=www.example.com"
```

```
sf data get record --sobject Account --record-id 001Oy0000xyz123
```

```
sf data get record --use-tooling-api  --sobject TraceFlag --record-id 7tf8c00xx
```
