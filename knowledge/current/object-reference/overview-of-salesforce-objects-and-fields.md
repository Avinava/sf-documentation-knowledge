---
title: "Overview of Salesforce Objects and Fields"
domain: object-reference
topic: overview-of-salesforce-objects-and-fields
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:35:06.727Z
estimatedTokens: 1503
keywords: [Salesforce, Objects, analogous, database, tables, columns, structure, data, central, model, accounts—companies, organizations, involved, business, customers]
---

# Overview of Salesforce Objects and Fields

> Salesforce objects and fields are analogous to database tables and the
			table columns. Objects and fields structure data. For example, the central object in the
			Salesforce data model represents accounts—companies and organizations involved
			with your business, such as customers, partners, and competitors.

# Overview of Salesforce Objects and Fields

Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.

The term “record” describes a particular occurrence of an object (such as a specific account like “IBM” or “United Airlines” that is represented by an Account object). A record is analogous to a row in a database table.

Objects already created for you by Salesforce are called standard objects. Objects that you create in your organization with the user interface or with the Metadata API are called custom objects. Objects you create that map to data stored outside your organization are called external objects.

While this document describes all of the objects available in the API, your applications work with only the objects that you are authorized to access. Programmatic access to objects is determined by the objects defined in your organization, your organization configuration, your user permissions and access settings (which are configured by your organization’s Salesforce admin), your data sharing model, and other factors related specifically to the object.

Most of the objects accessible through the API are read-write objects. However, there are a few objects that are read-only. This fact is noted in the description for the object.

For details about the data types and size restrictions for each object’s fields, see the [Salesforce Field Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm "HTML (New Window)").

-   **[Salesforce Objects Release Notes](atlas.en-us.object_reference.meta/object_reference/objects_rns.htm)**
    Use the Salesforce Release Notes to learn about the most recent updates and changes to Salesforce Objects.
-   **[Primitive Data Types](atlas.en-us.object_reference.meta/object_reference/primitive_data_types.htm)**

-   **[Field Types](atlas.en-us.object_reference.meta/object_reference/field_types.htm)**
    In addition to the primitive data types, the API defines the following data types for fields.
-   **[API Field Properties](atlas.en-us.object_reference.meta/object_reference/access_for_fields.htm)**

-   **[Required Fields](atlas.en-us.object_reference.meta/object_reference/required_fields.htm)**

-   **[System Fields](atlas.en-us.object_reference.meta/object_reference/system_fields.htm)**
    System fields are read-only fields found on most objects. These fields are automatically updated during API operations. For example, the ID field is automatically generated during a create operation and the LastModifiedDate is automatically updated when a user modifies a record.
-   **[Frequently Occurring Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fequently_occurring_fields.htm)**
    In addition to system fields, these fields are found on many objects.
-   **[Compound Fields](atlas.en-us.object_reference.meta/object_reference/compound_fields.htm)**
    Compound fields group together multiple elements of primitive data types, such as numbers or strings, to represent complex data types, such as a location or an address. Compound fields are an abstraction that can simplify application code that handles the values, leading to more concise, understandable code.
-   **[Custom Objects](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_custom_objects.htm)**
    In the user interface, you can extend your org’s data by defining custom objects. Custom objects are custom database tables that allow you to store information unique to your organization. For custom objects, the custom flag—a Boolean field in the describe results—is true.
-   **[Custom Fields](atlas.en-us.object_reference.meta/object_reference/custom_fields.htm)**

-   **[AppExchange Object Prefixes and the API](atlas.en-us.object_reference.meta/object_reference/appexchange_api_prefix.htm)**

-   **[Relationships Among Standard Objects and Fields](atlas.en-us.object_reference.meta/object_reference/relationships_among_objects.htm)**

-   **[Factors that Affect Data Access](atlas.en-us.object_reference.meta/object_reference/obj_ref_data_access.htm)**
    Some factors affect access to your organization's data.
-   **[Field and Type Differences in Salesforce Apps and APIs](atlas.en-us.object_reference.meta/object_reference/api_ui_datatype_map.htm)**

-   **[External Objects](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_external_objects.htm)**
    External objects are supported in API version 32.0 and later. External objects are similar to custom objects, but external object record data is stored outside your Salesforce organization. For example, perhaps you have data that’s stored on premises in an enterprise resource planning (ERP) system. Instead of copying the data into your org, you can use external objects to access the data in real time via web service callouts.
-   **[Big Objects](atlas.en-us.object_reference.meta/object_reference/big_object.htm)**
    A big object stores and manages massive amounts of data on the Salesforce platform. You can archive data from other objects or bring massive datasets from outside systems into a big object to get a full view of your customers. Clients and external systems use a standard set of APIs to access big object data. A big object provides consistent performance, whether you have 1 million records, 100 million, or even 1 billion. This scale gives a big object its power and defines its features.
-   **[Object Interfaces](atlas.en-us.object_reference.meta/object_reference/object_interface.htm)**
    An object interface defines the business logic that an object implements. The object that implements the interface, called the **implementor**, stores the data and implements the business logic.

## Related Topics

- Salesforce Objects Release Notes (atlas.en-us.object_reference.meta/object_reference/objects_rns.htm)
- Primitive Data Types (atlas.en-us.object_reference.meta/object_reference/primitive_data_types.htm)
- Field Types (atlas.en-us.object_reference.meta/object_reference/field_types.htm)
- API Field Properties (atlas.en-us.object_reference.meta/object_reference/access_for_fields.htm)
- Required Fields (atlas.en-us.object_reference.meta/object_reference/required_fields.htm)
- System Fields (atlas.en-us.object_reference.meta/object_reference/system_fields.htm)
- Frequently Occurring Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fequently_occurring_fields.htm)
- Compound Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields.htm)
- Custom Objects (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_custom_objects.htm)
- Custom Fields (atlas.en-us.object_reference.meta/object_reference/custom_fields.htm)
