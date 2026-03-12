---
title: "Dynamic Apex"
domain: apex-guide
topic: dynamic-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.275Z
estimatedTokens: 748
keywords: [Dynamic, Apex, enables, developers, create, flexible, applications, providing, ability]
---

# Dynamic Apex

> Dynamic Apex enables developers to create more flexible applications by providing them with the
ability to:

# Dynamic Apex

Dynamic Apex enables developers to create more flexible applications by providing them with the ability to:

-   [Access sObject and field describe information](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describe_objects_understanding.htm)

    Describe information provides metadata information about sObject and field properties. For example, the describe information for an sObject includes whether that type of sObject supports operations like create or undelete, the sObject's name and label, the sObject's fields and child objects, and so on. The describe information for a field includes whether the field has a default value, whether it is a calculated field, the type of the field, and so on.

    Note that describe information provides information about *objects* in an organization, not individual records.

-   [Access Salesforce app information](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describeTabs.htm)

    You can obtain describe information for standard and custom apps available in the Salesforce user interface. Each app corresponds to a collection of tabs. Describe information for an app includes the app’s label, namespace, and tabs. Describe information for a tab includes the sObject associated with the tab, tab icons and colors.

-   [Write dynamic SOQL queries](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_soql.htm), [dynamic SOSL queries](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_sosl.htm) and [dynamic DML](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_dml.htm)

    Dynamic SOQL and SOSL queries provide the ability to execute SOQL or SOSL as a string at runtime, while dynamic DML provides the ability to create a record dynamically and then insert it into the database using DML. Using dynamic SOQL, SOSL, and DML, an application can be tailored precisely to the organization as well as the user's permissions. This can be useful for applications that are installed from AppExchange.


1.  [Understanding Apex Describe Information](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describe_objects_understanding.htm)

2.  [Using Field Tokens](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_field_tokens.htm)

3.  [Understanding Describe Information Permissions](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_permissions.htm)

4.  [Describing sObjects Using Schema Method](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describeSObject.htm)

5.  [Describing Tabs Using Schema Methods](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describeTabs.htm)

6.  [Accessing All sObjects](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_global_describe.htm)

7.  [Accessing All Data Categories Associated with an sObject](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_data_categories.htm)

8.  [Dynamic SOQL](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_soql.htm)

9.  [Dynamic SOSL](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_sosl.htm)

10.  [Dynamic DML](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_dml.htm)

## Related Topics

- Access sObject and field describe information (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describe_objects_understanding.htm)
- Access Salesforce app information (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describeTabs.htm)
- Write dynamic SOQL queries (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_soql.htm)
- dynamic SOSL queries (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_sosl.htm)
- dynamic DML (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_dml.htm)
- Understanding Apex Describe Information (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describe_objects_understanding.htm)
- Using Field Tokens (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_field_tokens.htm)
- Understanding Describe Information Permissions (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_permissions.htm)
- Describing sObjects Using Schema Method (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describeSObject.htm)
- Describing Tabs Using Schema Methods (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describeTabs.htm)
