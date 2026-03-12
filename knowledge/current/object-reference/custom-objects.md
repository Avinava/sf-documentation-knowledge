---
title: "Custom Objects"
domain: object-reference
topic: custom-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.340Z
estimatedTokens: 394
keywords: [Custom, Objects, entities, support, their, standard, user, extend, org’s, data, defining, database, tables, allow, store, unique, organization, flag—a, describe]
---

# Custom Objects

> In the user interface, you can extend your org’s data by defining
      custom objects. Custom objects are custom database tables that allow you to store information
      unique to your organization. For custom objects, the custom flag—a
      Boolean field in the describe results—is true.

# Custom Objects

In the user interface, you can extend your org’s data by defining custom objects. Custom objects are custom database tables that allow you to store information unique to your organization. For custom objects, the custom flag—a Boolean field in the describe results—is true.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Client applications with sufficient permissions can invoke API calls on existing custom objects. You can create custom objects with the user interface, or by using the metadata WSDL with a client application or using the Salesforce Extensions for Visual Studio Code. For more information about using the metadata WSDL to create custom objects, see the [Lightning Platform Metadata API Developer's Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/). For more information about Visual Studio Code, see [Salesforce Extensions for Visual Studio Code.](https://forcedotcom.github.io/salesforcedx-vscode/ "HTML (New Window)")

Use the following topics to understand how the API interacts with custom objects and fields:

-   [Naming Conventions for Custom Objects](#i1436351)
-   [Relationships Among Custom Objects](#i1436378)
-   [Audit Fields for Custom Objects](#i1436539)
-   [Sharing and Custom Objects](#objects_custom_objects_sharing)
-   [Tags and Custom Objects](#custom_object_tags)
-   [Standard Fields for Custom Objects](#custom_object_fields)
-   [Required Fields in Custom Objects](#i1436563)
-   [Managed Packages and API Names](#objects_managed_packages)

## Naming Conventions for Custom Objects

Your Salesforce admin defines an associated name field for each custom object during setup. Custom objects must have unique names within your org.

In the API, the names of custom objects include a suffix of two underscores followed by a lowercase “c”. For example, a custom object labeled “Issue” in the Salesforce user interface is Issue\_\_c in that organization’s WSDL.

Relationships change the naming convention. See [Relationships Among Custom Objects](#i1436378) for more information.

For a custom object record to appear in the Salesforce user interface, its name field must be populated. If you use the API to create a custom object record that doesn’t have a name, the record’s ID is used as its name.

## Relationships Among Custom Objects

Custom objects behave and relate to other objects just like standard objects do, as described in [Relationships Among Objects](atlas.en-us.object_reference.meta/object_reference/relationships_among_objects.htm). For example, cascading deletes are supported in custom objects in a master-detail relationship.

Custom objects can also have many-to-many relationships with other custom objects or standard objects. A many-to-many relationship allows each record of one object to be linked to multiple records from another object and vice versa. For more information, see [Relationships Among Objects](atlas.en-us.object_reference.meta/object_reference/relationships_among_objects.htm).

Custom objects require special treatment so that they can participate in Relationship Queries. For the relationship field name of a custom object, \_\_r is appended to the name to create the ID. Also, \_\_c is appended to the name to create the parent object pointer. For example, if the relationship field name is MyRel, the name of the ID becomes MyRelId\_\_r, the parent object pointer becomes MyRel\_\_c, and the relationship name is MyRel\_\_r. For more information, see Understanding Relationship Names, Custom Objects, and Custom Fields in the [Salesforce SOQL and SOSL Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").

This table summarizes whether a standard object can be:

-   The master in a master-detail relationship with a custom object. Master-detail relationships involve cascading deletes and sharing rules that the parent controls.
-   The lookup in a lookup relationship on a custom object. In other words, whether a custom object can have a lookup to the standard object.
-   Extended with custom fields.

| Standard Object | Master-Detail | Lookup | Custom Fields |
| --- | --- | --- | --- |
| Account | Yes | Yes | Yes |
| Campaign | Yes | Yes | Yes |
| Case | Yes | Yes | Yes |
| Contact | Yes | Yes | Yes |
| Contract | Yes | Yes | Yes |
| Event | No | No | Yes |
| Lead | No | No | Yes |
| Opportunity | Yes | Yes | Yes |
| Product2 | No | Yes | Yes |
| Solution | Yes | Yes | Yes |
| Task | No | No | Yes |
| User | No | Yes | Yes |

## Audit Fields for Custom Objects

Custom objects can have the same audit fields as standard objects. When you create a custom object, the four audit fields, CreatedById, CreatedDate, LastModifiedById, and LastModifiedDate, are created and populated for the object. These fields are read only. If you import data into Salesforce custom objects and want to retain the audit field values from the source system, you can set the values when you create the custom objects. The only audit field you can’t set a value for is SystemModstamp. Your organization must be API enabled, and you must have the “Modify All Data” permission.

1.  From Setup, enter User Interface in the Quick Find box, then select **User Interface** under Customize.
2.  Under Setup, select **Enable “Set Audit Fields upon Record Creation” and “Update Records with Inactive Owners” User Permissions**.
3.  In the permission set or profile that you want to set audit fields with, enable the permission **Set Audit Fields upon Record Creation**.
4.  Using the API, create a record and set its audit fields.

Note these restrictions:

-   CreatedDate can't be greater than the LastModifiedDate.
-   You can't set any date field to be greater than the current time.

For more information about audit fields, see [System Fields](atlas.en-us.object_reference.meta/object_reference/system_fields.htm "System fields are read-only fields found on most objects. These fields are automatically updated during API operations. For example, the ID field is automatically generated during a create operation and the LastModifiedDate is automatically updated when a user modifies a record.").

## Sharing and Custom Objects

A sharing rule object is created for each custom object that doesn’t have a master-detail relationship to another object. They’re similar to standard object sharing rules, for example AccountOwnerSharingRule. If the user creating the custom object has the “Manage Sharing” permission, a sharing rule object is automatically created for it.

Apex sharing reasons can be retrieved describing the custom object's sharing object, and examining the information in the rowCause field. The name of a sharing object for each custom object is of the form: MyObjectName\_\_Share, similar to AccountShare and other standard object sharing objects.

## Tags and Custom Objects

When a custom object is created, a Tag object related to it’s also created. These object names are of the form: MyObjectName\_\_Tag, similar to AccountTag and other standard object tag objects.

## Standard Fields for Custom Objects

When a custom object is created, Salesforce assigns some standard fields to the object or entity. For details, see [Custom Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_custom_objects_list.htm "HTML (New Window)").

## Required Fields in Custom Objects

In the user interface, you can mark a custom field as required, and this rule is also enforced in the API. Each custom field has a nillable attribute, with a data type boolean. The default value is false. If set to true, each request supplies a value (or leaves the current value) to this field. Otherwise, the request fails. When the value is set to true, the next time the field is edited or created, the validation applies. If no value is supplied or default value specified, the request fails.

To edit the nillable attribute, you must log in as a user with the “Customize Application” permission.

If you change a custom object field to be required in an existing client application or integration, be sure that a value is supplied for that field. For example, if the custom picklist field Education Level on the contact object is required, supply a default value for that custom field. If a required field doesn’t have a specified or default value, an error with the status code REQUIRED\_FIELD\_MISSING is returned.

## Managed Packages and API Names

If you have an unmanaged package and a managed package version becomes available, the API names of custom fields, custom objects, and Scontrol objects in the package change. A namespace prefix is added to each component to make it unique: *name*\_\_c becomes *prefix*\_\_*name*\_\_c. To move from an unmanaged package to a managed package version of the same application, export your data, uninstall the old package, and install the new package. Then review the name changes and import your data with the relevant mapping. For details, see the [ISVforce Guide](https://resources.docs.salesforce.com/260/latest/en-us/sfdc/pdf/salesforce_packaging_guide.pdf "Adobe Acrobat PDF (New Window)").

#### See Also

-   [Custom Objects](atlas.en-us.object_reference.meta/object_reference/sforce_api_custom_objects_list.htm "This section provides details on custom objects, entities that support custom objects, and their standard fields.")

## Related Topics

- FSL__Time_Dependency__c (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fsl__time_dependency__c.htm)
- Custom Metadata Type __mdt __mdt (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_custommetadatatype__mdt.htm)
- Custom Object __c __c (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_custom_object__c.htm)
- Custom Object __Feed __Feed (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_customobject__feed.htm)
- Relationships Among Objects (atlas.en-us.object_reference.meta/object_reference/relationships_among_objects.htm)
- Relationships Among
          Objects (atlas.en-us.object_reference.meta/object_reference/relationships_among_objects.htm)
- System Fields (atlas.en-us.object_reference.meta/object_reference/system_fields.htm)
- Custom Objects (atlas.en-us.object_reference.meta/object_reference/sforce_api_custom_objects_list.htm)
