---
title: "Work With Small Datasets"
domain: sfdx-dev
topic: work-with-small-datasets
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.196Z
estimatedTokens: 1976
keywords: [Work, Small, Datasets, data, export, import, tree, commands, move, orgs, fewer, records, JSON, files, describe]
---

# Work With Small Datasets

> Use the data export|import tree commands to move
        small sets of data between orgs, such as fewer than 3,000 records. These commands use JSON
        files to describe Salesforce records and the relationships between them. Developers can use
        these commands to quickly and easily create small sets of representative data in a scratch
        org when developing or testing their code.

# Work With Small Datasets

Use the data export|import tree commands to move small sets of data between orgs, such as fewer than 3,000 records. These commands use JSON files to describe Salesforce records and the relationships between them. Developers can use these commands to quickly and easily create small sets of representative data in a scratch org when developing or testing their code.

The data export tree command uses one or more SOQL queries to select the data in an org that it writes to the JSON files. The queries can be for one or more Salesforce objects, using either a multi-level relationship query or multiple individual queries. The JSON files use the sObject tree format, which is a collection of nested parent-child records with a single root record. You then use these JSON files to import data into an org with the data import tree command.

When exporting records from two or more Salesforce objects, we recommend using the \--plan flag. Specifying this flag generates separate JSON files for each object and a plan definition file that aggregates them, thus making imports easier. When using plans, you can export up to five levels of child objects using a relationship query, or export multiple objects that don't necessarily have relationships by specifying multiple queries.

Let’s look at a few examples to see the power of these commands.

## Data from a Single Salesforce Object

For this example, imagine you created a set of useful Account records while working on your application in a scratch org. Exporting these records allows you to save this data as a JSON file in your version control system. Later, you can use this file to import the same set of Account records into a new scratch org or sandbox as you continue to develop and refine your application.

This example shows how to export Account records from your default org:

```

```

The \--query flag specifies the SOQL query that selects the records you want to export; in this case it’s very simple and touches just one object: Account. For simplicity, the example SOQL query includes only a few Account fields, but in real life you include the writable fields that you want to export. Don’t include fields that aren’t writable, such as formula fields. The \--output-dir flag specifies the directory in which to write the single JSON file.

The output JSON file is always named after the queried object, in this case Account.json. The file is in the sObject Tree format and looks something like this:

```

```

For each record, the type key specifies its object, such as Account in our example. The referenceID key is a stand-in for a record ID; when imported into a new org the record gets a different ID than in the org where it was exported from. These stand-in IDs help preserve relationships, such as lookups, between imported records.

To import these records into a new scratch org, use this CLI command:

```

```

You use the \--files flag to specify the JSON file that has the records, and \--target-org to specify the org into which you want to import the records.

## Data from Salesforce Objects with Parent/Child Relationships

Now imagine you created a useful set of both Account and Contact records while working on your application in a scratch org. To export records from both of these objects, you must use a SOQL relationship query. When combined with the \--plan flag, the query results in multiple data JSON files and a plan definition file that includes references to preserve the relationships between records from different objects. As a result, your data is correctly imported into a new org.

Here’s what your new export command looks like. The SOQL query now has a relationship subquery that includes child Contact records for each Account record found. As before, the SOQL query includes only a few fields, but you can specify any writable fields required by your dataset:

```

```

When the command finishes, the output directory contains an Account.json file with the Account records, just as before. But it also now contains a Contact.json file with Contact records, and a file called Account-Contact-plan.json that details the plan for importing all the records. The plan outlines the relationships between the objects that were exported and specifies the order in which to load them when imported. For example, contacts typically have references to accounts, so the Account records must be imported before the Contact records.

Here’s the corresponding command to import these records into an org with alias new-scratch-org:

```

```

This import uses the \--plan flag to specify the name of the plan definition file created by the export command. Without a plan you must import each object separately, so using a plan makes imports much easier.

## Data from Salesforce Objects with Junction Relationships

A junction object is a Salesforce object with two master-detail relationships that models a many-to-many relationship between two objects. An example of a junction object is AccountContactRelation, which represents a relationship between a contact and one or more accounts.

Let’s say you created several many-to-many relationships between your contacts and accounts while working on your application in a scratch org. To export the records from both these objects while preserving the junction object relationships, you must specify multiple queries during the export. To do so, use the \--query flag multiple times when executing the data export tree command. For example, you can combine individual queries against the Account, Contact, and AccountContactRelation objects, ensuring that the references for all exported data match and can then be imported into a new org.

```

```

When executing the data export tree with multiple queries, the plan definition file is always named plan.json. As always, this file outlines the relationships between the exported objects and specifies the order in which records are loaded during import. The import command itself is similar to previous examples.

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

#### Tip

To automatically enable the feature to relate a contact to multiple accounts in a scratch org, specify the ContactsToMultipleAccounts feature in the scratch org definition file. For example:

```

```

#### See Also

-   [*Salesforce CLI Command Reference*: data Commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm "Salesforce CLI Command Reference: data Commands - HTML (New Window)")

-   [*SOQL and SOSL Reference Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_sosl_intro.htm "SOQL and SOSL Reference Guide - HTML (New Window)")

-   [*REST API Developer Guide*: sObject Tree](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite_sobject_tree.htm "REST API Developer Guide: sObject Tree - HTML (New Window)")

-   [*Salesforce Help*: Create a Many-to-Many Object Relationship (Junction Objects)](https://help.salesforce.com/s/articleView?id=platform.relationships_manytomany.htm&language=en_US "Salesforce Help: Create a Many-to-Many Object Relationship (Junction
    Objects) - HTML (New Window)")

-   [*Salesforce Help*: Contacts to Multiple Accounts](https://help.salesforce.com/s/articleView?id=sales.shared_contacts_overview.htm&type=5&language=en_US "Salesforce Help: Contacts to Multiple Accounts - HTML (New Window)")

-   [*Object Reference for the Salesforce Platform*: AccountContactRelation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountcontactrelation.htm "Object Reference for the Salesforce Platform: AccountContactRelation - HTML (New Window)")

## Code Examples

```
sf data export tree \
--query "SELECT Name, Industry, TickerSymbol from Account" \
--output-dir test-data
```

```
{
    "records": [
        {
            "attributes": {
                "type": "Account",
                "referenceId": "AccountRef1"
            },
            "Name": "Edge Communications",
            "Industry": "Electronics",
            "TickerSymbol": "EDGE"
        },
        {
            "attributes": {
                "type": "Account",
                "referenceId": "AccountRef2"
            },
            "Name": "Burlington Textiles Corp of America",
            "Industry": "Apparel",
            "TickerSymbol": "BTXT"
        }
   ]
}
```

```
sf data import tree \
--files test-data/Account.json \
--target-org new-scratch-org
```

```
sf data export tree \
    --query "SELECT Name, Industry, TickerSymbol, (SELECT FirstName, LastName, Email, Phone FROM Contacts) FROM Account"  \
    --output-dir test-data --plan
```

```
sf data import tree \
    --plan test-data/Account-Contact-plan.json --target-org new-scratch-org
```
