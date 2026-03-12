---
title: "External IDs for Salesforce Connect External Objects"
domain: apex-guide
topic: external-ids-for-salesforce-connect-external-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:32.972Z
estimatedTokens: 408
keywords: [External, IDs, Salesforce, Connect, Objects, access, external, data, custom, adapter, values, standard, field, come, DataSource.Column, named, ExternalId., Important, Example]
---

# External IDs for Salesforce Connect External Objects

> When you access external data with a custom adapter for Salesforce Connect, the
        values of the External ID standard field on an external object come from the DataSource.Column named ExternalId.

# External IDs for Salesforce Connect External Objects

When you access external data with a custom adapter for Salesforce Connect, the values of the External ID standard field on an external object come from the DataSource.Column named ExternalId.

Each external object has an External ID standard field. Its values uniquely identify each external object record in your org. When the external object is the parent in an external lookup relationship, the External ID standard field is used to identify the child records.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

-   The custom adapter’s Apex code must declare the DataSource.Column named ExternalId and provide its values.
-   Don’t use sensitive data as the values of the External ID standard field or fields designated as name fields, because Salesforce sometimes stores those values.
    -   External lookup relationship fields on child records store and display the External ID values of the parent records.
    -   For internal use only, Salesforce stores the External ID value of each row that’s retrieved from the external system. This behavior doesn’t apply to external objects that are associated with high-data-volume external data sources.

## Example

This excerpt from a sample DataSource.Connection class shows the DataSource.Column named ExternalId.

```

```

#### See Also

-   [*Apex Reference Guide*: Column Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_DataSource_Column.htm "Apex Reference Guide: Column Class - HTML (New Window)")

## Code Examples

```apex
override global List<DataSource.Table> sync() {
        List<DataSource.Table> tables =
        new List<DataSource.Table>();
    List<DataSource.Column> columns;
    columns = new List<DataSource.Column>();
    columns.add(DataSource.Column.text('title', 255));
    columns.add(DataSource.Column.text('description',255));
    columns.add(DataSource.Column.text('createdDate',255));
    columns.add(DataSource.Column.text('modifiedDate',255));
    columns.add(DataSource.Column.url('selfLink'));
    columns.add(DataSource.Column.url('DisplayUrl'));
    columns.add(DataSource.Column.text('ExternalId',255));
    tables.add(DataSource.Table.get('googleDrive','title',
        columns));
    return tables;
    }
```
