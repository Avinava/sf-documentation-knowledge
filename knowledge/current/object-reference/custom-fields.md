---
title: "Custom Fields"
domain: object-reference
topic: custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.183Z
estimatedTokens: 1063
keywords: [Custom, Salesforce, administrators, define, standard, objects, their, organization, user, creation, flag—a, object—is, Client, applications, cannot]
---

# Custom Fields

> Salesforce administrators can define custom fields for standard or custom objects in their
   organization using the user interface. During creation, the custom
   flag—a Boolean field in the Field object—is set to true. Client applications cannot
   define custom fields via the API. Usually, client

# Custom Fields

Salesforce administrators can define custom fields for standard or custom objects in their organization using the user interface. During creation, the custom flag—a Boolean field in the Field object—is set to true. Client applications cannot define custom fields via the API. Usually, client applications do not need to know whether a field is a standard field or a custom field.

Note that all numeric custom fields are handled as type double.

## Objects That Support Custom Fields

To identify the standard objects that support custom fields, see the table in [Relationships Among Custom Objects](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_custom_objects.htm#i1436378).

## Naming Conventions for Custom Fields

Custom objects have an associated name field that is defined by your Salesforce administrator. Custom fields must have unique names within the same object.

In the API, the names of custom fields are identified by a suffix of two underscores immediately followed by a lowercase “c” character. For example, a custom object labeled “Issue” in the user interface is seen as Issue\_\_c in that organization's WSDL. Similarly, a custom field labeled “Hire Date” in the user interface is seen as Hire\_Date\_\_c in that organization's WSDL.

Relationships change the naming convention, see [Relationships Among Custom Objects](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_custom_objects.htm#i1436378) for more information.

## External ID Attribute on Custom Fields

In the user interface, you can identify one custom field on an object as being an external ID field. The field type must be a text, number, or email field. An external ID contains record IDs from a system outside of Salesforce. You can match against this field during import or integration, or when upserting records.

## Uniqueness for Custom Fields

In the user interface, you can specify that a custom field on a custom object contain unique values across all the records of that custom object type. The uniqueness can be either case sensitive or case insensitive. In the API, you can find out if a field is unique by issuing a describe call against the custom object and inspecting two attribute values:

-   If the unique field is set to true, the custom field values must be unique across all records of that custom object type in the organization. A value of false means the field can have the same value in different records of that custom object type.
-   If the caseSensitive field is set to true, the uniqueness (if enabled) is case sensitive. For example “ABC” and “abc” are considered two unique values. If the value is false, then “ABC” and “abc” are considered the same value.

These values cannot be set or modified using API calls. If a custom field on a custom object has unique set to true, and you try to insert a duplicate value, a DUPLICATE\_VALUE exception code is returned.

## Default Values in Custom Fields

You can set a default value on a custom field using a formula field:

-   The user logged in for API activity must be have the “Customize Application” permission.
-   The field must have a data type of currency, date, datetime, int, double, percent, string, textarea, email, phone, or url. You cannot use composite fields like Address, Person, Names, nor Fiscal Periods. Note that you can set a checkbox as checked or unchecked by default using the user interface, but you cannot set it using a formula field.
-   Default formulas run on fields, and the results are saved, even if the fields are hidden by field-level security.
-   Default values are not used for lead conversion, importing, or merging records.

## Managed Packages and API Names

If you have an unmanaged package and a managed package version becomes available, the API names of custom fields, custom objects, and Scontrol objects in the package change. A namespace prefix is added to each component to make it unique: *name*\_\_c becomes *prefix*\_\_*name*\_\_c. To move from an unmanaged package to a managed package version of the same application, export your data, uninstall the old package, and install the new package. Then review the name changes and import your data with the relevant mapping.

## Related Topics

- Relationships Among Custom Objects (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_custom_objects.htm)
