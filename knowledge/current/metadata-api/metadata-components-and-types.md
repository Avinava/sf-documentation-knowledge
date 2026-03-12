---
title: "Metadata Components and Types"
domain: metadata-api
topic: metadata-components-and-types
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:41.469Z
estimatedTokens: 1459
keywords: [Metadata, Components, Types, components, based, sObjects, objects, API., Instead, they, metadata, types, such, ApexClass, CustomObject, which, extend, base, types., component]
---

# Metadata Components and Types

> Metadata components are not based on sObjects, like objects in the API. Instead, they
        are based on metadata types, such as ApexClass and CustomObject, which extend Metadata, the
        base class for all metadata types. A component is an instance of a
            metadata type.

# Metadata Components and Types

Metadata components are not based on sObjects, like objects in the API. Instead, they are based on metadata types, such as ApexClass and CustomObject, which extend Metadata, the base class for all metadata types. A component is an instance of a metadata type.

For example, CustomObject is a metadata type for custom objects, and the MyCustomObject\_\_c component is an instance of a custom object.

A metadata type can be identified in the metadata WSDL as any complexType that extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") complexType. A complexType that is a metadata type includes the following element in its WSDL definition:

```

```

CustomObject and BusinessProcess extend Metadata so they are metadata types; ActionOverride doesn't extend Metadata so it's not a metadata type.

You can individually deploy or retrieve a component for a metadata type. For example, you can retrieve an individual BusinessProcess component, but you can't retrieve an individual ActionOverride component. You can only retrieve an ActionOverride component by retrieving its encompassing CustomObject component.

Metadata components can be manipulated by [asynchronous Metadata API calls](atlas.en-us.api_meta.meta/api_meta/meta_calls_intro.htm "Use the CRUD-based metadata calls to create, update, or delete setup and configuration components for your organization or application. These configuration components include custom objects, custom fields, and other configuration metadata. The metadata calls mimic the behavior in the Salesforce user interface for creating, updating, or deleting components. Whatever rules apply there also apply to these calls.") or [declarative (or file-based) Metadata API calls](atlas.en-us.api_meta.meta/api_meta/file_based.htm).

Most of the components can be accessed using Salesforce Extensions for Visual Studio Code. Exceptions are noted in the description of the object.

## Field Data Types

Each component field has a specific field type. These field types can correspond to other components defined in the WSDL, or primitive data types, like string, that are commonly used in strongly typed programming languages.

These field data types are used in the messages that are exchanged between your client application and the API. When writing your client application, follow the data typing rules defined for your programming language and development environment. Your development tool handles the mapping of typed data in your programming language with these data types.

For more information, see [Primitive Data Types in the Salesforce Object Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/primitive_data_types.htm "html (New Window)").

## Enumeration Fields

Some component fields have a data type that is an enumeration. An enumeration is the API equivalent of a picklist. The valid values of the field are restricted to a strict set of possible values, all having the same data type. These values are listed in the field description column for each enumeration field. See [sortBy](atlas.en-us.api_meta.meta/api_meta/meta_dashboard.htm "Represents a dashboard. Dashboards are visual representations of data that allow you to see key metrics and performance at a glance.") for an example of an enumeration field of type string. The XML below shows a sample definition of an enumeration of type string in the WSDL.

```

```

## Supported Calls

All of the metadata types are supported by the main calls, unless it is stated otherwise in the individual component sections. The main Metadata API calls are:

-   [CRUD calls](atlas.en-us.api_meta.meta/api_meta/meta_crud_based_calls_intro.htm "Use CRUD-based calls to work with metadata components in a manner similar to how synchronous API calls in the enterprise WSDL act upon objects."), such as [createMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm "Adds one or more new metadata components to your organization synchronously.") and [deleteMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_deleteMetadata.htm "Deletes one or more metadata components from your organization synchronously.")
-   [File-based calls](atlas.en-us.api_meta.meta/api_meta/meta_file_based_calls_intro.htm "Use file-based calls to deploy or retrieve XML components."), such as [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.") and [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.")
-   [Utility calls](atlas.en-us.api_meta.meta/api_meta/meta_utility_calls_intro.htm "Use utility calls to gather information that is useful for working with the file-based or CRUD-based calls."), such as [listMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_listmetadata.htm "This call retrieves property information about metadata components in your organization. Data is returned for the components that match the criteria specified in the queries parameter. The queries array can contain up to three ListMetadataQuery queries for each call. This call supports every metadata type: both top-level, such as CustomObject and ApexClass, and child types, such as CustomField and RecordType.") and [describeMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_describe.htm "This call retrieves the metadata that describes your organization. This information includes Apex classes and triggers, custom objects, custom fields on standard objects, tab sets that define an app, and many other metadata types.")

## Code Examples

```
<xsd:extension base="tns:Metadata">
```

```
<xsd:simpleType name="DashboardComponentFilter">
    <xsd:restriction base="xsd:string">
        <xsd:enumeration value="RowLabelAscending"/>
        <xsd:enumeration value="RowLabelDescending"/>
        <xsd:enumeration value="RowValueAscending"/>
        <xsd:enumeration value="RowValueDescending"/>
    </xsd:restriction>
</xsd:simpleType>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- asynchronous Metadata API calls (atlas.en-us.api_meta.meta/api_meta/meta_calls_intro.htm)
- declarative (or file-based) Metadata API calls (atlas.en-us.api_meta.meta/api_meta/file_based.htm)
- sortBy (atlas.en-us.api_meta.meta/api_meta/meta_dashboard.htm)
- CRUD calls (atlas.en-us.api_meta.meta/api_meta/meta_crud_based_calls_intro.htm)
- createMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm)
- deleteMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_deleteMetadata.htm)
- File-based calls (atlas.en-us.api_meta.meta/api_meta/meta_file_based_calls_intro.htm)
- deploy() (atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)
- retrieve() (atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm)
