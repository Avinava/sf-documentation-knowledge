---
title: "Schema Class"
domain: apex-reference
topic: schema-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.960Z
estimatedTokens: 2669
namespace: System
keywords: [Schema, Describes, metadata, such, field, list, specified, SObjects., default, describe, option, SObjectDescribeOptions.DEFERRED, which, indicates, lazy, initialization, attributes, first, use., getGlobalDescribe]
---

# Schema Class

> Describes metadata such as field list and object properties for the
      specified list of SObjects. The default describe option for this method is
      SObjectDescribeOptions.DEFERRED, which indicates lazy initialization of describe attributes on
      first use.

**Namespace:** `System`

# Schema Class

Contains methods for obtaining schema describe information.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Schema Methods

The following are methods for Schema. All methods are static.

-   **[getGlobalDescribe()](atlas.en-us.apexref.meta/apexref/apex_methods_system_schema.htm#apex_System_Schema_getGlobalDescribe)**
    Returns a map of all sObject names (keys) to sObject tokens (values) for the standard and custom objects defined in your organization.
-   **[describeDataCategoryGroups(sObjectNames)](atlas.en-us.apexref.meta/apexref/apex_methods_system_schema.htm#apex_System_Schema_describeDataCategoryGroups)**
    Returns a list of the category groups associated with the specified objects.
-   **[describeSObjects(sObjectTypes)](atlas.en-us.apexref.meta/apexref/apex_methods_system_schema.htm#apex_System_Schema_describeSObjects)**
    Describes metadata (field list and object properties) for the specified sObject or array of sObjects.
-   **[describeSObjects(SObjectTypes, SObjectDescribeOptions)](atlas.en-us.apexref.meta/apexref/apex_methods_system_schema.htm#apex_System_schema_describeSObjects_2)**
    Describes metadata such as field list and object properties for the specified list of SObjects. The default describe option for this method is SObjectDescribeOptions.DEFERRED, which indicates lazy initialization of describe attributes on first use.
-   **[describeTabs()](atlas.en-us.apexref.meta/apexref/apex_methods_system_schema.htm#apex_System_Schema_describeTabs)**
    Returns information about the standard and custom apps available to the running user.
-   **[describeDataCategoryGroupStructures(pairs,topCategoriesOnly)](atlas.en-us.apexref.meta/apexref/apex_methods_system_schema.htm#apex_System_Schema_describeDataCategoryGroupStructures)**
    Returns available category groups along with their data category structure for objects specified in the request.

### getGlobalDescribe()

Returns a map of all sObject names (keys) to sObject tokens (values) for the standard and custom objects defined in your organization.

#### Signature

public static Map<String, Schema.SObjectType> getGlobalDescribe()

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")\>

#### Usage

For more information on accessing SObjects, see [Accessing All sObjects](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_global_describe.htm).

#### Example

```

```

### describeDataCategoryGroups(sObjectNames)

Returns a list of the category groups associated with the specified objects.

#### Signature

public static List<Schema.DescribeDataCategoryGroupResult> describeDataCategoryGroups(List<String\> sObjectNames)

#### Parameters

sObjectNames

Type: List<String>

#### Return Value

Type: List<Schema.DescribeDataCategoryGroupResult>

#### Usage

You can specify one of the following sObject names:

-   KnowledgeArticleVersion—to retrieve category groups associated with article types.
-   Question—to retrieve category groups associated with questions.

For more information and code examples using describeDataCategoryGroups, see [Accessing All Data Categories Associated with an sObject](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_data_categories.htm).

For additional information about articles and questions, see “Work with Articles and Translations” in the Salesforce online help.

### describeSObjects(sObjectTypes)

Describes metadata (field list and object properties) for the specified sObject or array of sObjects.

#### Signature

public static List<Schema.DescribeSObjectResult> describeSObjects(List<String\> sObjectTypes)

#### Parameters

sObjectTypes

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The sObjectTypes argument is a list of sObject type names you want to describe.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.DescribeSObjectResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_methods_system_sobject_describe "Contains methods for describing SObjects. None of the methods take an argument.")\>

#### Usage

This method is similar to the getDescribe method on the Schema.sObjectType token. Unlike the getDescribe method, this method allows you to specify the sObject type dynamically and describe more than one sObject at a time.

You can first call getGlobalDescribe to retrieve a list of all objects for your organization, then iterate through the list and use describeSObjects to obtain metadata about individual objects.

#### Example

```

```

### describeSObjects(SObjectTypes, SObjectDescribeOptions)

Describes metadata such as field list and object properties for the specified list of SObjects. The default describe option for this method is SObjectDescribeOptions.DEFERRED, which indicates lazy initialization of describe attributes on first use.

#### Signature

public static List<Schema.DescribeSObjectResult> describeSObjects(List<String\> SObjectTypes, Object SObjectDescribeOptions)

#### Parameters

SObjectTypes

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The list of SObject types to describe.

SObjectDescribeOptions

Type: Object

The effective describe option used for the SObject.

#### Return Value

Type: List<[Schema.DescribeSObjectResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_methods_system_sobject_describe "Contains methods for describing SObjects. None of the methods take an argument.")\>

### describeTabs()

Returns information about the standard and custom apps available to the running user.

#### Signature

public static List<Schema.DescribeTabSetResult> describeTabs()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.DescribeTabSetResult](atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabsetresult.htm#apex_class_schema_describetabsetresult "Contains metadata information about a Salesforce Classic standard or custom app available in the Salesforce user interface.")\>

#### Usage

An app is a group of tabs that works as a unit to provide application functionality. For example, two of the standard Salesforce apps are “Sales” and “Service.”

The describeTabs method returns the minimum required metadata that can be used to render apps in another user interface. Typically, this call is used by partner applications to render Salesforce data in another user interface, such as in a mobile or connected app.

In the Salesforce user interface, users have access to standard apps (and can also have access to custom apps) as listed in the Salesforce app menu at the top of the page. Selecting an app name in the menu allows the user to switch between the listed apps at any time.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The “All Tabs” tab isn’t included in the list of described tabs.

#### Example

This example shows how to call the describeTabs method.

```

```

This longer example shows how to obtain describe metadata information for the Sales app. For each tab, the example gets describe information, such as the icon URL, whether the tab is custom or not, and colors. The describe information is written to the debug output.

```

```

### describeDataCategoryGroupStructures(pairs,topCategoriesOnly)

Returns available category groups along with their data category structure for objects specified in the request.

#### Signature

public static List<Schema.DescribeDataCategoryGroupStructureResult> describeDataCategory GroupStructures(List<Schema.DataCategoryGroupSobjectTypePair> pairs,Boolean topCategoriesOnly)

#### Parameters

pairs

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.DataCategoryGroupSobjectTypePair](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategoryGroupSobjectTypePair.htm#apex_class_Schema_DataCategoryGroupSobjectTypePair "Specifies a category group and an associated object.")\>

The pairs argument is one or more category groups and objects to query Schema.DataCategoryGroupSobjectTypePairs. Visible data categories are retrieved for the specified object. For more information on data category group visibility, see “Data Category Visibility” in Salesforce Help.

topCategoriesOnly

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Use true to return only the top visible category and false to return all the visible categories, depending on the user's data category group visibility settings. For more information on data category group visibility, see Data Category Visibility in Salesforce Help.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.Describe​DataCategoryGroupStructureResult](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupStructureResult.htm#apex_class_Schema_DescribeDataCategoryGroupStructureResult "Contains the category groups and categories associated with KnowledgeArticleVersion and Question.")\>

## Code Examples

```apex
Map<String, Schema.SObjectType> gd = 
Schema.getGlobalDescribe();
```

```
Schema.DescribeSObjectResult[] descResult = Schema.describeSObjects(
                                                                   new String[]{'Account','Contact'});
```

```
Schema.DescribeTabSetResult[] tabSetDesc = Schema.describeTabs();
```

```apex
// Get tab set describes for each app
List<Schema.DescribeTabSetResult> tabSetDesc = Schema.describeTabs();

// Iterate through each tab set describe for each app and display the info
for(DescribeTabSetResult tsr : tabSetDesc) {
    String appLabel = tsr.getLabel();
    System.debug('Label: ' + appLabel);
    System.debug('Logo URL: ' + tsr.getLogoUrl());
    System.debug('isSelected: ' + tsr.isSelected());
    String ns = tsr.getNamespace();
    if (ns == '') {
        System.debug('The ' + appLabel + ' app has no namespace defined.');
    }
    else {
        System.debug('Namespace: ' + ns);
    }
    
    // Display tab info for the Sales app
    if (appLabel == 'Sales') {
        List<Schema.DescribeTabResult> tabDesc = tsr.getTabs();
        System.debug('-- Tab information for the Sales app --');
        for(Schema.DescribeTabResult tr : tabDesc) {
            System.debug('getLabel: ' + tr.getLabel());
            System.debug('getColors: ' + tr.getColors());
            System.debug('getIconUrl: ' + tr.getIconUrl());
            System.debug('getIcons: ' + tr.getIcons());
            System.debug('getMiniIconUrl: ' + tr.getMiniIconUrl());
            System.debug('getSobjectName: ' + tr.getSobjectName());
            System.debug('getUrl: ' + tr.getUrl());
            System.debug('isCustom: ' + tr.isCustom());
        }
    }
}

// Example debug statement output
// DEBUG|Label: Sales
// DEBUG|Logo URL: https://MyDomainName.my.salesforce.com/img/seasonLogos/2014_winter_aloha.png
// DEBUG|isSelected: true
// DEBUG|The Sales app has no namespace defined.// DEBUG|-- Tab information for the Sales app --
// (This is an example debug output for the Accounts tab.)
// DEBUG|getLabel: Accounts
// DEBUG|getColors: (Schema.DescribeColorResult[getColor=236FBD;getContext=primary;getTheme=theme4;], 
//       Schema.DescribeColorResult[getColor=236FBD;getContext=primary;getTheme=theme3;], 
//       Schema.DescribeColorResult[getColor=236FBD;getContext=primary;getTheme=theme2;])
// DEBUG|getIconUrl: https://MyDomainName.my.salesforce.com/img/icon/accounts32.png
// DEBUG|getIcons: (Schema.DescribeIconResult[getContentType=image/png;getHeight=32;getTheme=theme3;
//       getUrl=https://MyDomainName.my.salesforce.com/img/icon/accounts32.png;getWidth=32;], 
//       Schema.DescribeIconResult[getContentType=image/png;getHeight=16;getTheme=theme3;
//       getUrl=https://MyDomainName.my.salesforce.com/img/icon/accounts16.png;getWidth=16;])
// DEBUG|getMiniIconUrl: https://MyDomainName.my.salesforce.com/img/icon/accounts16.png
// DEBUG|getSobjectName: Account
// DEBUG|getUrl: https://MyDomainName.my.salesforce.com/001/o
// DEBUG|isCustom: false
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- getGlobalDescribe() (atlas.en-us.apexref.meta/apexref/apex_methods_system_schema.htm)
- describeDataCategoryGroups(sObjectNames) (atlas.en-us.apexref.meta/apexref/apex_methods_system_schema.htm)
- describeSObjects(sObjectTypes) (atlas.en-us.apexref.meta/apexref/apex_methods_system_schema.htm)
- describeSObjects(SObjectTypes, SObjectDescribeOptions) (atlas.en-us.apexref.meta/apexref/apex_methods_system_schema.htm)
- describeTabs() (atlas.en-us.apexref.meta/apexref/apex_methods_system_schema.htm)
- describeDataCategoryGroupStructures(pairs,topCategoriesOnly) (atlas.en-us.apexref.meta/apexref/apex_methods_system_schema.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Schema.SObjectType (atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm)
