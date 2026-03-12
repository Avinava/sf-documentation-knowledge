---
title: "Map Columns"
domain: dataLoader
topic: map-columns
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.245Z
estimatedTokens: 734
keywords: [Map, Columns, running, Data, Loader, batch, mode, command, line, file, maps, Salesforce, access, objects]
---

# Map Columns

> When running Data Loader in batch mode from the command line, you must create a
    properties file that maps values between Salesforce and data access objects.

# Map Columns

When running Data Loader in batch mode from the command line, you must create a properties file that maps values between Salesforce and data access objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.

1.  Create a mapping file and give it an extension of .sdl.
2.  Observe the following syntax:
    -   On each line, pair a data source with its destination.
    -   In an import file, put the data source on the left, an equals sign (=) as a separator, and the destination on the right. In an export file, put the destination on the left, an equals sign (=) as a separator, and the data source on the right.
    -   Data sources can be either column names or constants. Constants can be specified for insert, update, and upsert operations. Surround constants with double quotation marks, as in “sampleconstant”. Values without quotation marks are treated as column names.
    -   Destinations must be column names.
    -   You can map constants by surrounding them with double quotation marks, as in:

        ```

        ```

3.  In your configuration file, use the parameter process.mappingFile to specify the name of your mapping file.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

If your field name contains a space, you must escape the space by prepending it with a backslash (\\). For example:

```

```

Column Mapping Example for Data Insert

The Salesforce fields are on the right.

```

```

Column Mapping Example for Data Export

The Salesforce fields are on the left.

```

```

Column Mapping for Constant Values

Data Loader supports the ability to assign constants to fields when you insert, update, and upsert data. If you have a field that must contain the same value for each record, you must specify that constant in the .sdl mapping file instead of specifying the field and value in the CSV file or the export query.

The constant must be enclosed in double quotation marks. For example, if you're importing data, the syntax is "constantvalue"=field1.

If you have multiple fields that must contain the same value, you must specify the constant and the field names separated by commas. For example, if you're importing data, the syntax is "constantvalue"=field1, field2.

Here's an example of an .sdl file for inserting data. The Salesforce fields are on the right. The first two lines map a data source to a destination field, and the last three lines map a constant to a destination field.

```

```

A constant must contain at least one alphanumeric character.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

If you specify a constant value that contains spaces, you must escape the spaces by prepending each with a backslash (\\). For example:

```

```

## Code Examples

```
"Canada"=BillingCountry
```

```
Account\ Name=Name
```

```
SLA__C=SLA__c
    BILLINGCITY=BillingCity
    SYSTEMMODSTAMP=
    OWNERID=OwnerId
    CUSTOMERPRIORITY__C=CustomerPriority__c
    ANNUALREVENUE=AnnualRevenue
    DESCRIPTION=Description
    BILLINGSTREET=BillingStreet
    SHIPPINGSTATE=ShippingState
```

```
Id=account_number
  Name=name
  Phone=phone
```

```
Name=Name
  NumEmployees=NumberOfEmployees
  "Aerospace"=Industry
  "California"=BillingState, ShippingState
  "New"=Customer_Type__c
```
