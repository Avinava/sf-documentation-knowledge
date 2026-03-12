---
title: "Map Data Fields"
domain: api-asynch
topic: map-data-fields
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:59.215Z
estimatedTokens: 858
keywords: [Map, Data, Bulk, API, import, exported, directly, Microsoft, Outlook, Google, Contacts, third-party, sources, any, CSV]
---

# Map Data Fields

> To use Bulk API to import data that was exported directly from Microsoft Outlook,
        Google Contacts, and other third-party sources, map data fields in any CSV import file to
        Salesforce data fields. It's not necessary for the CSV import file to be Bulk
        API-compatible.

# Map Data Fields

To use Bulk API to import data that was exported directly from Microsoft Outlook, Google Contacts, and other third-party sources, map data fields in any CSV import file to Salesforce data fields. It's not necessary for the CSV import file to be Bulk API-compatible.

For example, say you have a CSV import file that includes a field called Number that you want to map to the standard Salesforce field AccountNumber. When you add a batch job using Bulk API, data from your Number field is imported into (or updates) the AccountNumber field in Salesforce.

To add a batch job that maps data fields to Salesforce data fields:

1.  Create a transformation spec (spec.csv) that defines data field mappings. (This file is different from the CSV import file that contains your data.)
2.  Create a job that specifies an object and action, just as you would for any other Bulk API job.
3.  Upload the transformation spec.
4.  Send data to the server in batches.

## Considerations

-   Transformation specs must be CSV files. XML and JSON files aren’t supported.
-   Transformation specs must have a file size less than 8192 characters.
-   Transformation specs (spec.csv files) must use UTF-8 encoding. CSV import files don’t need to use UTF-8 encoding. (You can specify the encoding in the Content-Type header.)
-   Transformation specs aren’t persistent; their scopes are limited to the current job.

## Create a Transformation Spec That Defines Mappings

The transformation spec (spec.csv) provides the instructions for how to map the data in your import file to Salesforce data fields.

The spec.csv file contains four fields:

| Field | Description |
| --- | --- |
| Salesforce Field | The Salesforce field you want to map to. |
| Csv Header | The field in your import file you want to map. |
| Value | A default value.Bulk API uses this value in two instances:When there’s no value present in the import file for the field specified in the Csv Header fieldWhen there’s no value defined for the Csv Header field in the spec.csv fileThis field is optional. |
| Hint | Tells Bulk API how to interpret data in the import file.Bulk API can use this value to do two things:Interpret Java format strings for date and time fieldsDefine what is true using regular expressions for boolean fieldsThis field is optional. |

Here’s a sample spec.csv file:

```

```

This spec.csv file tells Bulk API to:

-   Map the Full Name field in the import file to the LastName and FirstName fields in Salesforce.
-   Map the Job Title field in the import file to the Title field in Salesforce.
-   Map the Lead Source field in the import file to the LeadSource field in Salesforce, *and* use Import as the default value when no values are present are in the import file.
-   Use Imported from XYZ.csv as the default value for the Description field in Salesforce.
-   Map the Date of Birth field in the import file to the Birthdate field in Salesforce, *and* use the dd MM yy format to convert Date of Birth field formats into an acceptable format for Bulk API.

The corresponding contents of the import file can look like this:

```

```

The corresponding request body after transformation looks like this:

```

```

## Upload the Transformation Spec

To upload the transformation spec, send a POST request to this URI:

```

```

You can find the My Domain name and My Domain login URL for your org on the My Domain page in Setup.

## Code Examples

```
Salesforce Field,Csv Header,Value,Hint
Name,Full Name,,
Title,Job Title,,
LeadSource,Lead Source,Import,
Description,,Imported from XYZ.csv,
Birthdate,Date of Birth,,dd MM yy
```

```
Full Name,Job Title,Lead Source,Date of Birth,Comment
"Cat, Tom",DSH,Interview,10 Feb 40,likes Jerry
Jerry Mouse,House Mouse,,10 Feb 40,likes Tom
```

```
LastName,FirstName,Title,LeadSource,Description,Birthdate
Cat,Tom,DSH,Interview,Imported from XYZ.csv,1940-02-10Z
Mouse,Jerry,House Mouse,Import,Imported from XYZ.csv,1940-02-10Z
```

```
https://MyDomainName.my.salesforce.com/services/async/APIversion/job/jobid/spec
```
