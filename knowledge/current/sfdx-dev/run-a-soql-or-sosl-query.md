---
title: "Run a SOQL or SOSL Query"
domain: sfdx-dev
topic: run-a-soql-or-sosl-query
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.186Z
estimatedTokens: 650
keywords: [Run, SOQL, SOSL, Query, It’s, often, useful, CLI, command, quickly, Salesforce, search, specific, terms, across]
---

# Run a SOQL or SOSL Query

> It’s often useful to run a CLI command to quickly query a Salesforce object or search for specific terms across many objects. For example, maybe you want to see all the Account records for the energy industry, or search for contact or lead names that begin with the letters JO. Salesforce provides two robust search languages for just these use cases: SOQL and SOSL.

# Run a SOQL or SOSL Query

It’s often useful to run a CLI command to quickly query a Salesforce object or search for specific terms across many objects. For example, maybe you want to see all the Account records for the energy industry, or search for contact or lead names that begin with the letters JO. Salesforce provides two robust search languages for just these use cases: SOQL and SOSL.

## SOQL

Use Salesforce Object Query Language (SOQL) to search a single Salesforce or Tooling API object for specific information. SOQL is similar to the SELECT statement in the widely used Structured Query Language (SQL) but is designed specifically for Salesforce data.

This example shows how to run a simple SOQL query against the Account object in your default org:

```

```

If your query is long, you can store it in a file and specify the file name to the \--file flag, as shown in this example, which runs against an org with the alias new-scratch-org:

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

#### Tip

If your query returns more than 2,000 records, use the data export bulk command instead.

Use the \--all-rows flag to also return records that have been soft-deleted due to a merge or delete. By default, deleted records aren’t returned. To change the format of the output, such as to comma-separated values (CSV) or JSON, use the \--result-format flag.

```

```

To query a Tooling API object, include the \--use-tooling-api flag. This example also shows how to use the \--output-file to write output to a file in CSV format.

```

```

## SOSL

Use Salesforce Object Search Language (SOSL) search fields across multiple objects.

This SOSL query searches the contacts and leads in your default org for names that start with Jo:

```

```

If your SOSL search query is long, you can store it in a file and specify the filename to the \--file flag, as shown in this example, which runs against an org with the alias new-scratch-org:

```

```

Specify \--result-format csv to write a comma-separated value (CSV) file to disk:

```

```

#### See Also

-   [*Salesforce CLI Command Reference*: data Commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm "Salesforce CLI Command Reference: data Commands - HTML (New Window)")

-   [*SOQL and SOSL Reference Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_sosl_intro.htm "SOQL and SOSL Reference Guide - HTML (New Window)")

## Code Examples

```
sf data query --query "SELECT ID, Name FROM Account WHERE Industry='Energy'"
```

```
sf data query --file query.txt --target-org new-scratch-org
```

```
sf data query --query "SELECT ID, Name FROM Account WHERE Industry='Energy'" --all-rows --result-format json
```

```
sf data query --query "SELECT ID, Name FROM ApexClass" --use-tooling-api --result-format csv --output-file query-output.csv
```

```
sf data search 
  --query "FIND {Jo*} IN Name FIELDS Returning Contact(Name, Phone), Lead(Name, Phone)"
```
