---
title: "DescribeTabSetResult Class"
domain: apex-reference
topic: describetabsetresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.233Z
estimatedTokens: 1353
namespace: Schema
keywords: [DescribeTabSetResult, display, description, standard, custom, app., Usage, Example, getDescription, getLabel, getLogoUrl, getNamespace, getTabs, isSelected]
---

# DescribeTabSetResult Class

> Returns the display description for the standard or custom
  app.

**Namespace:** `Schema`

# DescribeTabSetResult Class

Contains metadata information about a Salesforce Classic standard or custom app available in the Salesforce user interface.

## Namespace

[Schema](atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm "The Schema namespace provides classes and methods for schema metadata information.")

## Usage

The Schema.describeTabs method returns a list of Schema.DescribeTabSetResult objects that describe Salesforce Classic standard and custom apps.

The methods in the Schema.DescribeTabSetResult class can be called using their property counterparts. For each method starting with get, you can omit the get prefix and the ending parentheses () to call the property counterpart. For example, tabSetResultObj.label is equivalent to tabSetResultObj.getLabel(). Similarly, for each method starting with is, omit the is prefix and the ending parentheses (). For example, tabSetResultObj.isSelected is equivalent to tabSetResultObj.selected.

## Example

This example shows how to call the Schema.describeTabs method to get describe information for all available Salesforce Classic apps. This example iterates through each describe result and gets more metadata information for the Sales app.

```

```

## DescribeTabSetResult Methods

The following are methods for DescribeTabSetResult. All are instance methods.

-   **[getDescription()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabsetresult.htm#apex_Schema_DescribeTabSetResult_getDescription)**
    Returns the display description for the standard or custom app.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabsetresult.htm#apex_Schema_DescribeTabSetResult_getLabel)**
    Returns the display label for the standard or custom app.
-   **[getLogoUrl()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabsetresult.htm#apex_Schema_DescribeTabSetResult_getLogoUrl)**
    Returns a fully qualified URL to the logo image associated with the standard or custom app.
-   **[getNamespace()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabsetresult.htm#apex_Schema_DescribeTabSetResult_getNamespace)**
    Returns the developer namespace prefix of a Salesforce AppExchange managed package.
-   **[getTabs()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabsetresult.htm#apex_Schema_DescribeTabSetResult_getTabs)**
    Returns metadata information about the standard or custom app’s displayed tabs.
-   **[isSelected()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabsetresult.htm#apex_Schema_DescribeTabSetResult_isSelected)**
    Returns true if this standard or custom app is the user’s currently selected app in Salesforce Classic. Otherwise, returns false.

### getDescription()

Returns the display description for the standard or custom app.

#### Signature

public String getDescription()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLabel()

Returns the display label for the standard or custom app.

#### Signature

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

The display label changes when tabs are renamed in the Salesforce user interface. See the Salesforce online help for more information.

### getLogoUrl()

Returns a fully qualified URL to the logo image associated with the standard or custom app.

#### Signature

public String getLogoUrl()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getNamespace()

Returns the developer namespace prefix of a Salesforce AppExchange managed package.

#### Signature

public String getNamespace()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This namespace prefix corresponds to the namespace prefix of the Developer Edition organization that was enabled to allow publishing a managed package. This method applies to a custom app containing a set of tabs and installed as part of a managed package.

### getTabs()

Returns metadata information about the standard or custom app’s displayed tabs.

#### Signature

public List<Schema.DescribeTabResult> getTabs()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.DescribeTabResult](atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabresult.htm#apex_class_schema_describetabresult "Contains tab metadata information for a tab in a standard or custom app available in the Salesforce user interface.")\>

### isSelected()

Returns true if this standard or custom app is the user’s currently selected app in Salesforce Classic. Otherwise, returns false.

#### Signature

public Boolean isSelected()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Code Examples

```apex
// App we're interested to get more info about
String appName = 'Sales';

// Get tab set describes for each app
List<Schema.DescribeTabSetResult> tabSetDesc = Schema.describeTabs();

// Iterate through each tab set describe for each app and display the info
for(Schema.DescribeTabSetResult tsr : tabSetDesc) {
    // Get more information for the Sales app            
    if (tsr.getLabel() == appName) {
        // Find out if the app is selected
        if (tsr.isSelected()) {
            System.debug('The ' + appName + ' app is selected. ');
        }
        // Get the app's Logo URL and namespace
        String logo = tsr.getLogoUrl();
        System.debug('Logo URL: ' + logo);
        String ns = tsr.getNamespace();
        if (ns == '') {
            System.debug('The ' + appName + ' app has no namespace defined.');
        }
        else {
            System.debug('Namespace: ' + ns);
        }
        // Get the number of tabs
        System.debug('The ' + appName + ' app has ' + tsr.getTabs().size() + ' tabs.');
    }            
}

// Example debug statement output
// DEBUG|The Sales app is selected.
// DEBUG|Logo URL: https://MyDomainName.my.salesforce.com/img/seasonLogos/2014_winter_aloha.png
// DEBUG|The Sales app has no namespace defined.
// DEBUG|The Sales app has 14 tabs.
```

## Related Topics

- Schema (atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm)
- getDescription() (atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabsetresult.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabsetresult.htm)
- getLogoUrl() (atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabsetresult.htm)
- getNamespace() (atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabsetresult.htm)
- getTabs() (atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabsetresult.htm)
- isSelected() (atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabsetresult.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Schema.DescribeTabResult (atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabresult.htm)
