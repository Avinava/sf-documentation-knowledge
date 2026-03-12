---
title: "Field Types"
domain: object-reference
topic: field-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:03.201Z
estimatedTokens: 5101
keywords: [addition, primitive, data, API, AnyType, Calculated, ComboBox, Currency, DataCategoryGroupReference, Email, JunctionIdList, Multi-Select, Picklist, Percent, Phone]
---

# Field Types

> In addition to the primitive data types, the API defines the following data types for fields.

# Field Types

In addition to the primitive data types, the API defines the following data types for fields.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

For fields that contain strings, behavior is different beginning with API version 15.0. In API versions previous to 15.0, if you specify a value for a field, and that value is too large, the value is truncated. For API version 15.0 and later, if a value is specified that is too large, the operation fails and the fault code STRING\_TOO\_LONG is returned. AllowFieldTruncationHeader allows you to specify that the previous behavior, truncation, be used instead of the new behavior in API versions 15.0 and later. This header has no effect in versions 14.0 and earlier. The affected fields are: anyType, email, encryptedstring, multipicklist, phone, picklist, string, and textarea.

| Field Type | What the Field Contains |
| --- | --- |
| address | A compound data type that contains address field data. See Address Compound Fields. |
| anyType | Polymorphic data type that returns string, picklist, reference, Boolean, currency, int, double, percent, ID, date, datetime, url, or email data depending on the kind of field involved. See AnyType Field Type. |
| calculated | Fields that are defined by a formula. See Calculated Field Type. |
| combobox | A combobox, which includes a set of enumerated values and allows the user to specify a value not in the list. See ComboBox Field Type. |
| currency | Currency values. See Currency Field Type. |
| DataCategoryGroupReference | Reference to a data category group or a category unique name. See DataCategoryGroupReference Field Type. |
| email | Email addresses. See Email Field Type. |
| encryptedstring | Encrypted text fields contain any combination of letters, numbers, or symbols that are stored in encrypted form. You can set a maximum length of up to 175 characters. Available in API versions 11.0 and later. |
| floatarray | Reserved for future use. |
| ID | Primary key field for the object. See ID Field Type.NoteMost Web services tools, including .NET and WSC, map the ID simple type defined in the API WSDL (Enterprise or Partner) to a string. However, other tools generate a specific ID class to represent the ID simple type. Consult your Web services toolkit documentation for more information. |
| JunctionIdList | A string array of referenced ID values that represent the many-to-many relationship of an underlying junction entity. Query and manipulate the string array to query and manipulate the underlying junction entities in a single API call. See JunctionIdList Field Type.WarningAdding a JunctionIdList field name to the fieldsToNull property deletes all related junction records. This action can’t be undone. |
| location | A compound data type that contains latitude and longitude values for geolocation fields. See Geolocation Compound Field. |
| masterrecord | When records are merged, the ID of the record that is saved (the other records are deleted). |
| multipicklist | Multi-select picklists, which include a set of enumerated values from which multiple values can be selected. See Multi-Select Picklist Field Type. |
| percent | Percentage values. See Percent Field Type. |
| phone | Phone numbers. Values can include alphabetic characters. Client applications are responsible for phone number formatting. See Phone Field Type. |
| picklist | Picklists, which include a set of enumerated values from which one value can be selected. See Picklist Field Type. |
| reference | Cross-references to a different object. Analogous to a foreign key field in SQL. See Reference Field Type. |
| textarea | String that’s displayed as a multiline text field. See Textarea Field Type. |
| textarray | Reserved for future use. |
| url | URL values. Client applications commonly display URLs as hyperlinks. See URL Field Type. |

These field types extend [primitive data types](atlas.en-us.object_reference.meta/object_reference/primitive_data_types.htm). Many of these field types follow common data typing conventions that are made explicit in their metadata. However, certain field types have unique characteristics that you must understand before using them in your client application.

These field types apply to both standard and custom fields. They’re enumerated in the type field of the [Field Types](#field_types "In addition to the primitive data types, the API defines the following data types for fields.") type, which is described in the fields property of the DescribeSObjectResult.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Some numeric fields have precision and scale limits. In addition, certain text fields have length restrictions. These restrictions are enforced when you create() or update() objects. However, the API can return data that doesn’t meet these restrictions.

## AnyType Field Type

The anyType field type is dynamic and returns string, date, number, or boolean data depending on the kind of field involved. For example, the element in a SOAP message has an xsi:type="xsd:string" attribute if the field is of type string. This field type is used in history objects for the NewValue and OldValue fields. It’s also a valid field type for fieldType and soapType.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Most SOAP toolkits automatically deserialize this element into the correct native type.

## Calculated Field Type

Calculated fields are read-only fields in the API. These fields are defined by a formula, which is an algorithm that derives its value from other fields, expressions, or values. You can filter on these fields in SOQL, but you don’t replicate these fields. The length of text calculated fields is 3,900 characters or less—anything longer is truncated.

Calculated fields are called formula fields in the Salesforce user interface.

## ComboBox Field Type

A combobox is a picklist that also allows users to type a value that isn’t already specified in the list. A combobox is defined as a string value.

## Currency Field Type

Currency fields contain currency values, such as the ExpectedRevenue field in a Campaign, and are defined as type double.

For orgs that have the multicurrency option enabled, the CurrencyIsoCode field is defined for any object that can have currency fields. The CurrencyIsoCode field and currency fields are linked in a special way. On any specific record, the CurrencyIsoCode field defines the currency of that record. Therefore, the values of all currency fields on that record are expressed in that currency.

For most cases, clients don’t need to consider the linking of the CurrencyIsoCode field and the currency fields on an object. However, consider these points.

-   The CurrencyIsoCode field exists only for those orgs that have enabled multicurrency support.
-   When you display the currency values in a user interface, it’s recommended that you prepend each currency value with its CurrencyIsoCode value and a space separator.
-   The CurrencyIsoCode field is a restricted picklist field. The set of allowable values, defined in the CurrencyType object, can vary from org to org. Attempting to set it to a value that isn’t defined for an org causes the operation to be rejected.
-   If you update the CurrencyIsoCode field on an object, it implicitly converts all currency values on that object to the new currency code. The field uses the conversion rates that are defined for that org in the Salesforce user interface. If you specify currency values in that same update() call, the new currency values you specify are interpreted in the new CurrencyIsoCode field value, without conversion.
-   The picklist values in a CurrencyIsoCode field don’t exactly match the labels displayed in Salesforce.

To perform currency conversions, client applications can look up the CurrencyIsoCode in the CurrencyType object.

## DataCategoryGroupReference Field Type

A data category group has categories that classify articles in Salesforce Knowledge and questions in the Answers feature. Every article and question object has two fields of type DataCategoryGroupReference which contain the category group and category unique name. You can use the describeDataCategoryGroups() and describeDataCategoryGroupStructures() calls to retrieve the category groups and categories related to these objects.

## Email Field Type

Email fields contain email addresses. Client applications are responsible for specifying valid and properly formatted email addresses in create() and update() calls.

## ID Field Type

With rare exceptions, all objects in the API have a field of type ID. The field is named Id and contains a unique identifier for each record in the object. It’s analogous to a primary key in relational databases. When you create() a new record, the Web service generates an ID value for the record, ensuring that it’s unique within your org’s data. You can’t use the update() call on ID fields. Because the ID value stays constant over the lifetime of the record, you can refer to the record by its ID value in subsequent API calls. Also, the ID value contains a three-character code that identifies the object type, which client applications can retrieve via the describeSObjects() call.

In addition, certain objects, including custom objects, have one or more fields of type reference that contain the ID value for a related record. These fields have names that end in the suffix “Id”, for example, OwnerId in the account object. OwnerId contains the ID of the user who owns that object. Unlike the field named Id, reference fields are analogous to foreign keys and can be changed via the update() call. For more information, see [Reference Field Type](#i1435823).

Some API calls, such as retrieve() and delete(), accept an array of IDs as parameters—each array element uniquely identifies the row to retrieve or delete. Similarly, the update() call accepts an array of sObject records—each sObject contains an Id field that uniquely identifies the sObject.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Most Web services tools, including .NET and WSC, map the ID simple type defined in the API WSDL (Enterprise or Partner) to a string. However, other tools generate a specific ID class to represent the ID simple type. Consult your web services toolkit documentation for more information.

**15-Character and 18-Character IDs, and Case Sensitivity**

Salesforce IDs are often represented by 15-character, base-62, strings. Each of the 15 characters can be a numeric digit (0-9), a lowercase letter (a-z), or an uppercase letter (A-Z). These 15-character IDs are *case-sensitive*. To Salesforce, 000000000000Abc isn’t the same as 000000000000aBC.

Don’t use 15-character IDs in case-insensitive applications like Microsoft Access™. These applications incorrectly consider 000000000000Abc to be the same as 000000000000aBC.

To avoid these issues, all API calls return an 18-character ID that’s *case-safe*, meaning that it’s compared correctly by case-insensitive applications. The extra 3 characters at the end of the ID encode the case of the preceding 15 characters. Use 18-character IDs in all API calls when creating, editing, or deleting data.

![Case-insenstive applications give incorrect results when comparing 15-character IDs](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi%2Fimages%2Fcase_of_ids.1.png&folder=object_reference)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

18-character IDs are *case-safe*, but not *case-insensitive*. In other words, if you manually change the case of an 18-character ID, Salesforce detects that the three extra characters don’t match the case of the preceding characters and returns an error.

![Salesforce gives an error if you change the case of an 18-character ID](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi%2Fimages%2Fcase_of_ids.2.png&folder=object_reference)

To convert the 18-character ID to a 15-character version, you may truncate the last three characters. However, Salesforce recommends that you use the 18-character ID.

## JunctionIdList Field Type

Starting in API version 34.0, the JunctionIdList field type lets you directly manipulate the many-to-many relationship of an entity. You no longer need to manipulate underlying junction entity records. JunctionIdList fields can be queried and updated like any other field on the entity. Queries or updates to JunctionIdList fields act as queries or updates to the underlying junction entity records. Fields of type JunctionIdList appear in the WSDL as an unbounded array of type ID.

Query JunctionIdList fields like any other field. For example, this SOQL query includes TaskWhoIds, which is a JunctionIdList field.

```

```

The total number of records allowed in a single SOQL query can’t exceed 500 when one of the fields being queried on is a JunctionIdList type. If the number of IDs in the query exceeds 500, the query fails and returns the MALFORMED\_QUERY exception.

The restriction is (total number of entity records) \* (total number of records in the entity's JunctionIdList field) must equal less than 500. For example, you query on the EventWhoIds JunctionIdList field for a list of events. There are 101 events and for each event, there are 5 records in the EventWhoIds JunctionIdList. Therefore, the SOQL query would be querying for 505 records in total, which is over the 500 limit, and you get an exception.

To avoid exceeding the limit, reformulate the query so it includes fewer than 500 junction IDs or query a parent/child relationship instead of junction IDs.

All JunctionIdLists are read-only in Apex. Attempting to set a new value on an existing object results in an exception.

## Multi-Select Picklist Field Type

Multi-select picklist fields contain a list of one or more items from which a user can choose multiple items. One of the items can be configured as the default item. Selections are maintained as a string containing a series of attributes delimited by semicolons. For example, a query can return the values of a multivalue picklist as “first value; second value; third value”. For information on querying multi-select picklists, see Query Multi-Select Picklists in the [Salesforce SOQL and SOSL Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").

## Percent Field Type

Percent fields contain percent values. Percent fields are defined as type double.

## Phone Field Type

Phone fields contain phone numbers, which can include alphabetic characters. Client applications are responsible for phone number formatting.

## Picklist Field Type

Picklist fields contain a list of one or more items from which a user chooses a single item. They display as dropdown lists in the Salesforce user interface. One of the items can be configured as the default item.

In the Field object associated with the DescribeSObjectResult, the restrictedPicklist field defines whether the field is a restricted picklist or not. The API doesn’t enforce the list of values for advisory (unrestricted) picklist fields on create() or update(). When inserting an unrestricted picklist field that doesn’t have a PicklistEntry, the system creates an “inactive” picklist value. This value can be promoted to an “active” picklist value by adding the picklist value in the Salesforce user interface.

When creating new, inactive picklists, the API checks to see if there’s a match. This check is case-insensitive.

In the Field object associated with the DescribeSObjectResult, the picklistValues field contains an array of items (PicklistEntry objects). Each PicklistEntry defines the item’s label, value, and whether it’s the default item in the picklist (a picklist has no more than one default value).

Enumerated fields support localization of the labels to the language of the user. For example, for the Industry field on an Account, the value “Agriculture” can be translated to various languages. The enumerated field values are fixed and don’t change with a user’s language. However, each value may have a specified “label” field that provides the localized label for that value. Always use the value when inserting or updating a field. The query() call always returns the value, not the label. Use the corresponding label for a value in the describeSObjectResult when displaying the value to the user in any user interface.

The API supports the retrieval of the certain picklists in the following objects: CaseStatus, ContractStatus, LeadStatus, OpportunityStage, PartnerRole, SolutionStatus, TaskPriority, and TaskStatus. Each object represents a value in the respective picklist. These picklist entries always specify some other piece of information, such as whether the status is converted. Your client application can invoke the query() call on any of these objects (such as CaseStatus) to retrieve the set of values in the picklist. The application can then use that information while processing other objects (such as Case objects) to find more information about those objects (such as a given case). These objects are read-only via the API. To modify items in picklists, you must use the Salesforce user interface.

## Reference Field Type

A reference field contains an Id value that points to a unique record (usually the parent record) on another object. A reference field is analogous to the concept of a foreign key in relational databases. The name of a reference field ends, by convention, with the letters Id (such as CaseId or OpportunityId). For example, in the OpportunityCompetitor object, the OpportunityId field is a reference field that points to the Opportunity object. It contains an ID value that uniquely identifies an Opportunity record.

Sometimes, an object can refer to another object of its same type. For example, an Account can have a parent link that points to another Account.

The Event and Task objects both have WhoId and WhatId cross-reference ID fields. Each of these cross-reference fields can point to one of several other objects. The WhoId field can point to a Contact or Lead, and the WhatId field can point to an Account, Opportunity, Campaign, or Case. In addition, if the WhoId field refers to a Lead, then the WhatId field must be empty.

You can describe and query each cross-referenced object. When you query a cross-reference ID field, it returns an object ID of the appropriate type. You can then query that ID to get additional information about the object, using the ID in the id field for that query.

The cross-reference ID field value is either:

-   a valid record in your organization, or
-   an empty value, which indicates an empty reference

The cross-reference ID field value, if non-null, is guaranteed to be an object in your org. However, it isn’t guaranteed that you can query that object. Users with the “View All Data” permission can always query that object. Other users can be restricted from viewing or editing the referenced object.

When specifying a value for a cross-reference ID field in a create() or update() call, the value must be a valid value of type ID, and the user must have appropriate access to that object. The exact requirements vary from field to field.

## Textarea Field Type

Textarea fields contain text that can be longer than 4,000 bytes. Unlike string fields, textarea fields can’t be specified in the WHERE clause of a queryString of a query() call. To filter records on this field, you must do so while processing records in the QueryResult. For fields with this restriction, its filterable field in the Field type (described in the fields property of the DescribeSObjectResult) is false.

## URL Field Type

URL fields contain URLs. Client applications are responsible for specifying valid and properly formatted URLs in create() and update() calls.

## Code Examples

```
SELECT Id, Subject, TaskWhoIds 
FROM Task
WHERE LastModifiedDate > LAST_WEEK
```

## Related Topics

- Address Compound Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
- Geolocation Compound Field (atlas.en-us.object_reference.meta/object_reference/compound_fields_geolocation.htm)
- primitive data types (atlas.en-us.object_reference.meta/object_reference/primitive_data_types.htm)
