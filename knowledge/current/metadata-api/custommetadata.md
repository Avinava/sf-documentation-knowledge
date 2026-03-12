---
title: "CustomMetadata"
domain: metadata-api
topic: custommetadata
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:38.273Z
estimatedTokens: 2125
keywords: [CustomMetadata, Represents, record, custom, metadata, type., File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, CustomMetadataValue, Declarative, Metadata, Sample, Definitions]
---

# CustomMetadata

> Represents a record of a custom metadata
    type.

# CustomMetadata

Represents a record of a custom metadata type.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

CustomMetadata components have the suffix .md and are stored in the customMetadata folder. Unlike custom metadata types, custom metadata records don’t have a double-underscore suffix. Custom metadata record names are prepended with their custom metadata type name, excluding the \_\_mdt suffix but including the namespace of any types in an installed managed package.

## Version

CustomMetadata components are available in API version 31.0 and later.

## Special Access Rules

To create custom metadata records, you must have the “Customize Application” permission.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | A description of the custom metadata record. This field can contain a maximum of 1,000 characters. |
| label | string | A label that represents the object throughout the Salesforce Setup user interface. Custom metadata records are currently visible only through the packaging user interface. |
| protected | boolean | Boolean. Indicates whether the record is protected (true) or not (false). When a custom metadata type is released in a managed package, access is limited in specific ways.Code that’s in the same managed package as custom metadata records can read the records.Code that’s in the same managed package as custom metadata types can read the records that belong to that type.Code that’s in a managed package that doesn’t contain either the type or the protected record can’t read the protected records.Code that the subscriber creates and code that’s in an unmanaged package can’t read the protected records.The developer can modify protected records with a package upgrade or by using the Metadata Apex classes (if the Apex code is in the same namespace as either the records or their type). The subscriber can’t read or modify protected records. The developer name of a protected record can’t be changed after release.The subscriber can’t create records of a protected type.Records that are hidden by these access rules are also unavailable to REST, SOAP, SOQL, and Setup. |
| values | CustomMetadataValue[] | Represents one or more values for custom fields on the custom metadata record. |

## CustomMetadataValue

Represents a value for a custom field on the custom metadata record.

| Field Name | Field Type | Description |
| --- | --- | --- |
| field | string | Required. The non-object-qualified name of a custom field in the custom metadata type. This value corresponds to the name of a field on the custom metadata record’s custom metadata type. Include the namespace (if the type is from a managed package) and the __c suffix. The name of the custom metadata type isn’t required. For example, picklist1234__AlphaSort__c. |
| value | Any type | The value on a custom metadata record. Where fields are EntityDefinition and FieldDefinition, the qualified API names of the entity and the field it points to. This value can be null. |

## Declarative Metadata Sample Definitions

The following is an example of a CustomMetadata component. In this example, the sample app TravelApp deploys a Planets picklist, specifies its sort order, and adds picklist items to it.

Assuming Picklists R Us’s namespace is picklist1234, to define the Planets picklist, TravelApp deploys a file in the customMetadata folder, named picklist1234\_\_ReusablePicklist.Planets.md, with these contents. The xsi:type attribute specifies the type for the value of the AlphaSort\_\_c checkbox field.

```

```

Picklists R Us creates its Reusable Picklist Option custom metadata type by deploying a file in the objects folder, named ReusablePicklist\_\_mdt.object, with these contents.

```

```

To define the Mars picklist item, TravelApp deploys a file, named picklist1234\_\_ReusablePicklistOption.Mars.md, with these contents. This component file specifies types that apply to the ReusablePicklistOption\_\_mdt custom fields.

```

```

To define the Motel6 picklist item, TravelApp deploys a file, named picklist1234\_\_ReusablePicklistOption.Motel6.md, with these contents.

```

```

Because the SortOrder\_\_c field isn’t required, this file doesn’t require a value for SortOrder\_\_c. Alternatively, the file could have explicitly specified a value with xsi:nil to ensure that SortOrder\_\_c was cleared of any previous value.

```

```

This excerpt from a package.xml file illustrates the inclusion of custom metadata types and their namespaces in custom metadata records’ names. Assume that Picklists R Us’s namespace is picklist1234.

```

```

TravelApp, Inc.’s package.xml file uses a wildcard to install custom metadata, as is shown in this excerpt from their package.xml file. Unless you want to deploy or retrieve specific records, using a wildcard is easier than listing all of your custom metadata records in your package.xml file.

```

```

If the custom metadata is from a managed package, the name after the dot in the package.xml file—between the two dots in the file name—is qualified by the managed package’s namespace. For example, assuming TravelApp uses the namespace travelApp1234, the first member element in the TravelApp package.xml file appears to Galactic Tours as:

```

```

Here’s another example. In this case, we have an instance of custom metadata record, whose EntityDefinition field points to a custom object named SalesAgreement\_\_c. The FieldDefinition field points to the custom field CustomerReference\_\_c on SalesAgreement\_\_c. You can deploy new custom metadata records and retrieve existing ones with EntityDefinition and FieldDefinition fields using qualified API names of custom and standard entities and their fields.

```

```

## Usage

When specifying the value field in the CustomMetadataValue subtype, specify an appropriately typed object that’s based on your field type definition. In declarative metadata definitions for CustomMetadataValue, use the xsi:type attribute of the value element. For example, to specify a boolean value: <value xsi:type="xsd:boolean">true</value\>. Valid xsi:type attributes are:

| Custom metadata value | Custom field definition |
| --- | --- |
| xsi:type="xsd:boolean" | Checkbox |
| xsi:type="xsd:date" | Date |
| xsi:type="xsd:dateTime" | Date/Time |
| xsi:type="xsd:picklist" | Picklist |
| xsi:type="xsd:string" | Text |
| xsi:type="xsd:string" | Phone |
| xsi:type="xsd:string" | TextArea |
| xsi:type="xsd:string" | URL |
| xsi:type="xsd:string" | Email |
| xsi:type="xsd:int" | Number/Percent, with scale equal to 0 |
| xsi:type="xsd:double" | Number/Percent, with scale not equal to 0 |

You can also omit the xsi:type attribute. For example, <value\>true</value\>.

Although this attribute must be specified for any CustomMetadataValue, you can use an element with the xsi:nil attribute set to true to explicitly set the field’s value to null. For example, <value xsi:nil="true"/>.

Using null field values differs from leaving out the CustomMetadataValue for a particular field entirely. If you leave out the CustomMetadataValue, the value of the field doesn’t change. The field’s value is null for newly deployed custom metadata records and left at its previous value for updated custom metadata records.

When you retrieve CustomMetadataValue objects, the value field of the returned object holds a value of the correct type, specified by xsi:type in the case of declarative metadata definitions.

Custom number fields are stored as double values. When you retrieve a value from a Number type field with a scale 0, you will see a decimal number. For example, if the value in UI is 1234567, a query through the API returns 1234567.0.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata" 
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                   xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <description>All the planets in the solar system. Does not 
                 include asteroids.</description>
    <label>Planets</label>
    <values>
        <field>picklist1234__AlphaSort__c</field>
        <value xsi:type="xsd:boolean">false</value>
    </values>
</CustomMetadata>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <fields>
        <fullName>Picklist__c</fullName>
        <externalId>false</externalId>
        <label>Picklist</label>
        <length>40</length>
        <required>true</required>
        <type>Text</type>
        <unique>false</unique>
    </fields>
    <fields>
        <fullName>SortOrder__c</fullName>
        <externalId>false</externalId>
        <label>Non-Alphabetical Sort Order</label>
        <precision>3</precision>
        <scale>0</scale>
        <required>false</required>
        <type>Number</type>
        <unique>false</unique>
    </fields>
    <label>Reusable Picklist Option</label>
    <pluralLabel>Reusable Picklist Options</pluralLabel>
</CustomObject>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <label>Mars</label>
    <values>
        <field>picklist1234__Picklist__c</field>
        <value xsi:type="xsd:string">Planets</value>
    </values>
    <values>
        <field>picklist1234__SortOrder__c</field>
        <value xsi:type="xsd:int">4</value>
    </values>
</CustomMetadata>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <label>Motel 6</label>
    <values>
        <field>picklist1234__Picklist__c</field>
        <value xsi:type="xsd:string">Hotels</value>
    </values>
</CustomMetadata>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <label>Motel 6</label>
    <values>
        <field>picklist1234__Picklist__c</field>
        <value xsi:type="xsd:string">Hotels</value>
    </values>
    <values>
        <field>picklist1234__SortOrder__c</field>
        <value xsi:nil="true" />
    </values>
</CustomMetadata>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
