---
title: "Salesforce Object Behavior"
domain: object-reference
topic: salesforce-object-behavior
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:03.315Z
estimatedTokens: 1126
keywords: [Salesforce, Behavior, how, objects, choose, right, data, transactions, categorized, flow, storage, transaction, requiring, specific, licenses]
---

# Salesforce Object Behavior

> Learn how objects are related and how to choose the right Salesforce object for your
        data and transactions. Objects are categorized by data flow, storage, and transaction type,
        with some requiring specific licenses or managed packages.

# Salesforce Object Behavior

Learn how objects are related and how to choose the right Salesforce object for your data and transactions. Objects are categorized by data flow, storage, and transaction type, with some requiring specific licenses or managed packages.

Prefer listening to reading? Check out our AI-generated podcast on object behavior.

<!-- -->

Just as you pick different tools from your toolbox for different jobs, pick an object type based on the type of data you have and the kind of transactions you expect.

The type of object that you need is determined by the data you want to store in it and how you expect to interact with it.

Determine the properties of the data that you want to store:

-   Structure—hierarchical, tabular, or unstructured

-   Volume—high-scale or average

-   Size - maximum size of data to store

-   Storage—short-term or long-term storage


Determine how you want to interact with the data:

-   Transaction—ACID, OLAP, OLTP

-   Operation—Create, Read, Update, Delete

-   Latency—How often you must process or update the data for it to be useful


## Objects by Data Flow

Data flows into Salesforce from a variety of data sources. With the addition of Data Cloud, data also flows between objects that contain the same data but are of different types. For example, let's say that the data for an account is entered into a Sales org and then ingested into Data Cloud via the CRM connector. Any object that contains data for your org, including standard, custom, or external objects, can use the CRM connector to ingest data into Data Cloud. Other systems also connect to Data Cloud and store account data or metadata inside Data Cloud in their own schemas as Data Lake Objects (DLOs). The different schemas for objects containing account data are mapped to a single Account data model object (DMO) schema and then harmonized into an Account unified data model object.

![Data Flow for Account Object](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi%2Fimages%2FDataCloudObjects_DataFlow.png&folder=object_reference)

## Objects by Data Domain

CRM objects are stored on every org as long as you have a license for the feature that uses them. These objects include standard objects, custom objects, and entity interfaces. Big Objects are available only via licenses or managed packages and are stored differently, but are accessible to any org. Data Cloud objects are stored in Data Cloud and are packaged in data kits. Additional data can be represented in your org, but stored in third-party systems using custom external objects. You can also store data in systems that participate in our zero copy program and query them like native Data Cloud objects.

Data Cloud objects are stored in Data Cloud.

External data is stored outside Salesforce.

![Objects organized by where they are stored](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi%2Fimages%2FDataCloudObjects_DataStorage.png&folder=object_reference)

## Objects by Transaction Type

For data stored outside Salesforce, the transaction type can’t be guaranteed. However, the objects are grouped according to how most data of each type is stored and integrated with Salesforce.

ACID transactions are supported for standard objects, custom objects, entity interfaces, and custom external objects.

OLTP transactions are supported for standard and custom Big Objects.

OLAP transactions are supported for Data Cloud objects.

![Objects by transaction type.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi%2Fimages%2FDataCloudObjects_TransactionType.png&folder=object_reference)

-   **[Object Groups](atlas.en-us.object_reference.meta/object_reference/sforce_api_concepts_object_groups.htm)**
    Objects can be grouped in any number of ways. Object groups are based on where data is stored, how it's used, and which licenses are required to access it.
-   **[Salesforce Object Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_concepts_object_types.htm)**
    In the Salesforce Platform, an object type used to refer to whether an object was standard or custom. A standard object has a schema determined by Salesforce. A custom object has a schema determined or created by you. However, as the platform has continued to evolve, there are now many more types of objects.
-   **[Object Cheatsheet](atlas.en-us.object_reference.meta/object_reference/sforce_api_concepts_object_cheatsheet.htm)**
    At a glance, see how objects compare to each other.

## Related Topics

- Object Groups (atlas.en-us.object_reference.meta/object_reference/sforce_api_concepts_object_groups.htm)
- Salesforce Object Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_concepts_object_types.htm)
- Object Cheatsheet (atlas.en-us.object_reference.meta/object_reference/sforce_api_concepts_object_cheatsheet.htm)
