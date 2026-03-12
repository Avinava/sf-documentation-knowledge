---
title: "Enforce Object and Field Permissions"
domain: apex-guide
topic: enforce-object-and-field-permissions
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:32.706Z
estimatedTokens: 1272
keywords: [Enforce, Permissions, Apex, generally, runs, system, context, current, user's, field-level, security, FLS, aren’t, taken, account]
---

# Enforce Object and Field Permissions

> Apex generally runs in system context, so the current user's permissions and
        field-level security (FLS) aren’t taken into account during code execution. To
        enforce the FLS and object permissions of the current user, you can enforce user mode for
        database operations and SOQL queries. You can also check the current user's permissions for
        an object or a field, and then perform a specific DML operation or a query only if the user
        has sufficient permissions.

# Enforce Object and Field Permissions

Apex generally runs in system context, so the current user's permissions and field-level security (FLS) aren’t taken into account during code execution. To enforce the FLS and object permissions of the current user, you can enforce user mode for database operations and SOQL queries. You can also check the current user's permissions for an object or a field, and then perform a specific DML operation or a query only if the user has sufficient permissions.

## Enforce User Mode

 To enforce field-level security and object permissions of the current user, you can specify user mode access for database operations and SOQL queries. See [Enforce User Mode for Database Operations](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm).

## Check Field-Level Permissions

You can also enforce object-level and field-level permissions in your code by explicitly calling the access control methods of the [Schema.DescribeSObjectResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_sobject_describe.htm) and the [Schema.DescribeFieldResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_fields_describe.htm) classes. These methods check the current user's access permission levels so that you can perform a specific DML operation or a query only if the user has sufficient permissions.

For example, you can call the isAccessible, isCreateable, or isUpdateable methods of Schema.DescribeSObjectResult to verify whether the current user has read, create, or update access to an sObject, respectively. Similarly, Schema.DescribeFieldResult exposes these access control methods that you can call to check the current user's read, create, or update access for a field. In addition, you can call the isDeletable method provided by Schema.DescribeSObjectResult to check if the current user has permission to delete a specific sObject.

These examples call the access control methods.

To check the field-level update permission of the contact's email field before updating it:

```

```

To check the field-level create permission of the contact's email field before creating a new contact:

```

```

To check the field-level read permission of the contact's email field before querying for this field:

```

```

To check the object-level permission for the contact before deleting the contact:

```

```

## Considerations

-   Object-level and field-level permissions are distinct from sharing rules, which enforce specific record access. They can coexist. If sharing rules are defined in Salesforce, you can enforce them at the class level by declaring the class with the with sharing keyword. See [Use the with sharing, without sharing, and inherited sharing Keywords](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm "Use the with sharing or without sharing keywords on a class to specify whether sharing rules must be enforced. Use the inherited sharing keyword on a class to run the class in the sharing mode of the class that called it."). If you call the [Schema.DescribeSObjectResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_sobject_describe.htm) and [Schema.DescribeFieldResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_fields_describe.htm) access control methods, the verification of object and field-level permissions is performed in addition to the sharing rules that are in effect. Sometimes, the access level granted by a sharing rule can conflict with an object-level or field-level permission. In that case, object-level and field-level permissions take precedence over sharing rules.
-   Orgs with Experience Cloud sites enabled provide various settings to hide a user's personal information from other users. See [Manage Personal User Information Visibility](https://help.salesforce.com/s/articleView?id=platform.users_manage_personal_info_visibility.htm&type=5&language=en_US) and [Share Personal Contact Information Within Experience Cloud Sites](https://help.salesforce.com/articleView?id=networks_contact_info_visibility.htm&language=en_US). These settings aren’t enforced in Apex, even with security features such as the WITH USER\_MODE clause or the stripInaccessible method. To hide specific fields on the User object in Apex, follow the example code outlined in [Comply with a User’s Personal Information Visibility Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.communities_dev.meta/communities_dev/communities_dev_pii_settings.htm "HTML (New Window)").
-   Automated Process users can’t perform Object and FLS checks in custom code unless appropriate permission sets are explicitly applied to those users.

#### See Also

-   [*Salesforce Help*: Set Up Your Users’ Object, User, and Field Permissions](https://help.salesforce.com/s/articleView?id=platform.security_data_access_mgmt.htm&type=5&language=en_US)

## Code Examples

```
if (Schema.sObjectType.Contact.fields.Email.isUpdateable()) {
    // Update contact
}
```

```
if (Schema.sObjectType.Contact.fields.Email.isCreateable()) {
    // Create new contact
}
```

```
if (Schema.sObjectType.Contact.fields.Email.isAccessible()) {
    Contact c = [SELECT Email FROM Contact WHERE Id= :Id];
}
```

```
if (Schema.sObjectType.Contact.isDeletable()) {
    // Delete contact
}
```

## Related Topics

- Use the with sharing, without sharing, and inherited sharing Keywords (atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm)
