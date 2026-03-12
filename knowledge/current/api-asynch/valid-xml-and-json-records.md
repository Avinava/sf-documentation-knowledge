---
title: "Valid XML and JSON Records"
domain: api-asynch
topic: valid-xml-and-json-records
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.472Z
estimatedTokens: 634
keywords: [XML, JSON, Records, batch, file, uses, sObject, tag, representing, record]
---

# Valid XML and JSON Records

> A batch request in an XML or JSON file contains records for one object type. Each
      batch in an XML file uses this format, with each sObject
      tag representing a record.

# Valid XML and JSON Records

A batch request in an XML or JSON file contains records for one object type. Each batch in an XML file uses this format, with each sObject tag representing a record.

```

```

Each batch in a JSON file uses this format with each JSON object representing a record.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

You must include the type field for a polymorphic field and exclude it for non-polymorphic fields in any batch. If you don’t the batch fails. A polymorphic field can refer to more than one type of object as a parent. For example, either a contact or a lead can be the parent of a task. In other words, the WhoId field of a task can contain the ID of either a contact or a lead.

When generating records in XML or JSON files:

-   Fields that aren’t defined in the file for a record are ignored when you update records. To set a field value to null in XML, set the xsi:nil value for the field to true. For example, <description xsi:nil="true"/> sets the description field to null. Setting xsi:nil to false has no effect. If you define a field value and set xsi:nil to false, the value still gets assigned. To specify a null value in JSON, set the field value to null. For example, "description" : null.
-   Fields with a double data type can include fractional values. Values can be stored in scientific notation if the number is large enough (or, for negative numbers, small enough), as indicated by the[W3C XML Schema Part 2: Datatypes Second Edition specification](http://www.w3.org/TR/xmlschema-2/#double "HTML (New Window)")

#### See Also

-   [Sample XML File](atlas.en-us.api_asynch.meta/api_asynch/datafiles_xml_sample_file.htm "This XML sample includes two records for the Account object. Each record contains three fields. You can include any field for an object that you're processing. If you use this file to update existing accounts, any fields that aren't defined in the XML file are ignored during the update. You must include all required fields when you create a record.")

-   [Sample JSON File](atlas.en-us.api_asynch.meta/api_asynch/datafiles_json_sample_file.htm "This JSON sample includes two records for the Account object. Each record contains three fields. You can include any field for an object that you’re processing. If you use this file to update existing accounts, fields not defined in the JSON file are ignored during the update. You must include all required fields when you create a record.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<sObjects xmlns="http://www.force.com/2009/06/asyncapi/dataload">
   <sObject>
      <field_name>field_value</field_name>
      ...
   </sObject>
   <sObject>
      <field_name>field_value</field_name>
      ...
   </sObject>
</sObjects>
```

```
[
   {
      "field_name" : "field_value"
      ...
   },
   {
      "field_name" : "field_value"
      ...
   }
]
```

## Related Topics

- Sample XML File (atlas.en-us.api_asynch.meta/api_asynch/datafiles_xml_sample_file.htm)
- Sample JSON File (atlas.en-us.api_asynch.meta/api_asynch/datafiles_json_sample_file.htm)
