---
title: "$ObjectType"
domain: pages
topic: objecttype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.393Z
estimatedTokens: 417
keywords: [$ObjectType, merge, referencing, standard, custom, objects, Accounts, Cases, Opportunities, their, Usage]
---

# $ObjectType

> A global merge field type to use when referencing standard or custom objects (such as
  Accounts, Cases, or Opportunities) and the values of their fields.

# $ObjectType

A global merge field type to use when referencing standard or custom objects (such as Accounts, Cases, or Opportunities) and the values of their fields.

## Usage

Use dot notation to specify an object, such as {!$ObjectType.Case}.

Optionally, select a field on that object using the following syntax: {!$ObjectType.Role\_Limit\_\_c.Fields.Limit\_\_c}.

## Example

This example retrieves the label for the Account Name field:

```

```

You can also use dynamic references to retrieve information about an object through $ObjectType. For example, {!$ObjectType.Account.Fields\['Name'\].Type}

-   **[Object Schema Details Available Using $ObjectType](atlas.en-us.pages.meta/pages/pages_variables_global_objecttype_schema_objects_reference.htm)**
    Use the $ObjectType global variable to access schema information about the objects in your organization. For example, to access the name, label, and accessibility of an object.
-   **[Field Schema Details Available Using $ObjectType](atlas.en-us.pages.meta/pages/pages_variables_global_objecttype_schema_fields_reference.htm)**
    The $ObjectType global variable provides access to a variety of schema information about the objects in your organization. Use it to reference names, labels, and data types of fields on an object, for example.

#### See Also

-   [Dynamic References to Schema Details Using $ObjectType](atlas.en-us.pages.meta/pages/pages_dynamic_vf_globals_objecttype.htm "The $ObjectType global variable provides access to a variety of schema information about the objects in your organization. Use it to reference names, labels, and data types of fields on an object, for example.")

## Code Examples

```
{!$ObjectType.Account.Fields.Name.Label}
```

## Related Topics

- Object Schema Details Available Using $ObjectType (atlas.en-us.pages.meta/pages/pages_variables_global_objecttype_schema_objects_reference.htm)
- Field Schema Details Available Using $ObjectType (atlas.en-us.pages.meta/pages/pages_variables_global_objecttype_schema_fields_reference.htm)
- Dynamic References to Schema Details Using $ObjectType (atlas.en-us.pages.meta/pages/pages_dynamic_vf_globals_objecttype.htm)
