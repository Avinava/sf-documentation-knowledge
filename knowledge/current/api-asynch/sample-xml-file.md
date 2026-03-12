---
title: "Sample XML File"
domain: api-asynch
topic: sample-xml-file
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.469Z
estimatedTokens: 316
keywords: [Sample, XML, File, includes, two, records, Account, record, three, include, any, you're, processing, accounts, aren't]
---

# Sample XML File

> This XML sample includes two records for the Account object. Each record contains
      three fields. You can include any field for an object that you're processing. If you use this
      file to update existing accounts, any fields that aren't defined in the XML file are ignored
      during the update. You must include all required fields when you create a record.

# Sample XML File

This XML sample includes two records for the Account object. Each record contains three fields. You can include any field for an object that you're processing. If you use this file to update existing accounts, any fields that aren't defined in the XML file are ignored during the update. You must include all required fields when you create a record.

```

```

#### See Also

-   [Sample CSV File](atlas.en-us.api_asynch.meta/api_asynch/datafiles_csv_sample_file.htm "The CSV sample includes two records for the Contact object. Each record contains six fields. You can include any field for an object that you’re processing. If you use a CSV file to update existing accounts, fields that aren’t defined in the CSV file are ignored during the update. Include all required fields when you create a record.")

-   [Sample JSON File](atlas.en-us.api_asynch.meta/api_asynch/datafiles_json_sample_file.htm "This JSON sample includes two records for the Account object. Each record contains three fields. You can include any field for an object that you’re processing. If you use this file to update existing accounts, fields not defined in the JSON file are ignored during the update. You must include all required fields when you create a record.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<sObjects xmlns="http://www.force.com/2009/06/asyncapi/dataload">
   <sObject>
      <Name>Xytrex Co.</Name>
      <Description>Industrial Cleaning Supply Company</Description>
      <Account Number>ABC15797531</Account Number>
   </sObject>
   <sObject>
      <Name>Watson and Powell, Inc.</Name>
      <Description>Law firm. New York Headquarters</Description>
      <Account Number>ABC24689753</Account Number>
   </sObject>
</sObjects>
```

## Related Topics

- Sample CSV File (atlas.en-us.api_asynch.meta/api_asynch/datafiles_csv_sample_file.htm)
- Sample JSON File (atlas.en-us.api_asynch.meta/api_asynch/datafiles_json_sample_file.htm)
