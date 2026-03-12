---
title: "Sample CSV Files"
domain: api-asynch
topic: sample-csv-files
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.426Z
estimatedTokens: 672
keywords: [Sample, CSV, Files, examples, demonstrate, different, ways, data, Bulk, API, 2.0, Simple, Alternate, Line, Ending]
---

# Sample CSV Files

> These examples demonstrate different ways to use CSV data with Bulk API 2.0.

# Sample CSV Files

These examples demonstrate different ways to use CSV data with Bulk API 2.0.

## Simple CSV

This example contains three Account records and specifies the Name, Description, and NumberOfEmployees fields for each record.

```

```

A job that uses this CSV data might be defined with the following job properties.

```

```

## CSV with Alternate Line Ending

This example contains two Contact records and specifies three fields for each record. The data was created on a Windows platform, and each line ends with a carriage return and line feed. The carriage return is displayed as “^M” in this example.

```

```

A job that uses this CSV data and specifies that carriage return + line feed is used as the line ending sequence would use the following job properties.

```

```

## CSV with Semicolon Delimiter and Escaped Fields

This example contains two Contact records and specifies five fields for each record. The field delimiter is a semicolon instead of a comma. The Description fields contain characters that must be escaped using double quotes, including a line break in the second record.

```

```

A job that uses this CSV data and specifies that semicolon is used as the column delimiter would use the following job properties.

```

```

## CSV with Relationship Field

This example contains two Contact records and specifies FirstName, LastName, and Owner.Email fields for each record. This example assumes a unique User record exists that has an Email value of “mfellow@salesforce.com”, and creates a relationship with this record and the Contact records. If the User record doesn’t exist, or if there are multiple User records with an Email value of “mfellow@salesforce.com”, the relationship can’t be created and the job fails.

```

```

A job that uses this CSV data might be defined with the following job properties.

```

```

## CSV for Upsert Using External IDs

This example contains three Contact records and specifies FirstName, LastName, Phone, and ExternalId\_\_c for each record. This example assumes the custom ExternalId\_\_c external ID field has been added to Contact.

```

```

A job that uses this CSV data might be an upsert job defined with the following properties.

```

```

You can also associate records using external IDs. For more information, see [Upserting Records and Associating with an External ID](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_upsert.htm).

#### See Also

-   [Bulk API 2.0 Older Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm "Bulk API 2.0 Older Documentation - html (New Window)")

## Code Examples

```
Name,Description,NumberOfEmployees
TestAccount1,Description of TestAccount1,30
TestAccount2,Another description,40
TestAccount3,Yet another description,50
```

```
{
  "object" : "Account",
  "contentType" : "CSV",
  "operation" : "insert"
}
```

```
FirstName,LastName,Description^M
Tom,Jones,Branding guru^M
Ian,Dury,Fuzzy logic expert^M
```

```
{
  "object" : "Contact",
  "contentType" : "CSV",
  "operation" : "insert",
  "lineEnding" : "CRLF"
}
```

```
FirstName;LastName;Title;Birthdate;Description
Tom;Jones;Senior Director;1940-06-07Z;"Self-described as ""the top"" branding guru"
Ian;Dury;Chief Imagineer;1965-12-11Z;"Expert in fuzzy logic design; Knowledgeable in AI
Influential in technology purchases."
```
