---
title: "Sample CSV File"
domain: api-asynch
topic: sample-csv-file
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.423Z
estimatedTokens: 514
keywords: [Sample, CSV, File, includes, two, records, Contact, record, six, include, any, you’re, processing, accounts, aren’t]
---

# Sample CSV File

> The CSV sample includes two records for the Contact object. Each record contains six
    fields. You can include any field for an object that you’re processing. If you use a CSV file to
    update existing accounts, fields that aren’t defined in the CSV file are ignored during the
    update. Include all required fields when you create a record.

# Sample CSV File

The CSV sample includes two records for the Contact object. Each record contains six fields. You can include any field for an object that you’re processing. If you use a CSV file to update existing accounts, fields that aren’t defined in the CSV file are ignored during the update. Include all required fields when you create a record.

This sample sets a relationship between the records that you’re processing and existing contact records with the email addresses buyer@salesforcesample.com and cto@salesforcesample.com. If you try to insert the records in this sample into an org that doesn’t contain contacts with those email addresses, the insertion fails.

To use this sample CSV for testing purposes, either remove ReportsTo.Email and its associated values or pre-insert contacts in your org that have these email addresses.

```

```

The Description field for the last record includes a line break, which is why the field value is enclosed in double quotes.

#### See Also

-   [Sample XML File](atlas.en-us.api_asynch.meta/api_asynch/datafiles_xml_sample_file.htm "This XML sample includes two records for the Account object. Each record contains three fields. You can include any field for an object that you're processing. If you use this file to update existing accounts, any fields that aren't defined in the XML file are ignored during the update. You must include all required fields when you create a record.")

-   [Sample JSON File](atlas.en-us.api_asynch.meta/api_asynch/datafiles_json_sample_file.htm "This JSON sample includes two records for the Account object. Each record contains three fields. You can include any field for an object that you’re processing. If you use this file to update existing accounts, fields not defined in the JSON file are ignored during the update. You must include all required fields when you create a record.")

-   [Data Loader Guide](https://resources.docs.salesforce.com/260/latest/en-us/sfdc/pdf/salesforce_data_loader.pdf "Data Loader Guide - Adobe Acrobat PDF (New Window)")

## Code Examples

```
FirstName,LastName,Title,ReportsTo.Email,Birthdate,Description
Tom,Jones,Senior Director,buyer@salesforcesample.com,1940-06-07Z,"Self-described as ""the top"" branding guru on the West Coast"
Ian,Dury,Chief Imagineer,cto@salesforcesample.com,,"World-renowned expert in fuzzy logic design. 
Influential in technology purchases."
```

## Related Topics

- Sample XML File (atlas.en-us.api_asynch.meta/api_asynch/datafiles_xml_sample_file.htm)
- Sample JSON File (atlas.en-us.api_asynch.meta/api_asynch/datafiles_json_sample_file.htm)
