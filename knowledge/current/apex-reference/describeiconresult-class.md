---
title: "DescribeIconResult Class"
domain: apex-reference
topic: describeiconresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.215Z
estimatedTokens: 993
namespace: Schema
keywords: [DescribeIconResult, Contains, icon, metadata, information, tab., Usage, Example, getContentType, getHeight, Note, getTheme, getUrl, getWidth]
---

# DescribeIconResult Class

> Contains icon metadata information for
a tab.

**Namespace:** `Schema`

# DescribeIconResult Class

Contains icon metadata information for a tab.

## Namespace

[Schema](atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm "The Schema namespace provides classes and methods for schema metadata information.")

## Usage

The getIcons method of the Schema.DescribeTabResult class returns a list of Schema.DescribeIconResult objects that describe colors used in a tab.

The methods in the Schema.DescribeIconResult class can be called using their property counterparts. For each method starting with get, you can omit the get prefix and the ending parentheses () to call the property counterpart. For example, iconResultObj.url is equivalent to iconResultObj.getUrl().

## Example

This sample shows how to get the icon information in the Sales app for the first tab’s first icon.

```

```

## DescribeIconResult Methods

The following are methods for DescribeIconResult. All are instance methods.

-   **[getContentType()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm#apex_Schema_DescribeIconResult_getContentType)**
    Returns the tab icon’s content type, such as image/png.
-   **[getHeight()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm#apex_Schema_DescribeIconResult_getHeight)**
    Returns the tab icon’s height in pixels.
-   **[getTheme()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm#apex_Schema_DescribeIconResult_getTheme)**
    Returns the tab’s icon theme.
-   **[getUrl()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm#apex_Schema_DescribeIconResult_getUrl)**
    Returns the tab’s icon fully qualified URL.
-   **[getWidth()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm#apex_Schema_DescribeIconResult_getWidth)**
    Returns the tab’s icon width in pixels.

### getContentType()

Returns the tab icon’s content type, such as image/png.

#### Signature

public String getContentType()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getHeight()

Returns the tab icon’s height in pixels.

#### Signature

public Integer getHeight()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If the icon content type is SVG, the icon won’t have a size and its height is zero.

### getTheme()

Returns the tab’s icon theme.

#### Signature

public String getTheme()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Possible theme values include theme3, theme4, and custom.

-   theme3 is the Salesforce theme introduced during Spring ‘10.
-   theme4 is the Salesforce theme introduced in Winter ‘14 for the mobile touchscreen version of Salesforce.
-   custom is the theme name associated with a custom icon.

### getUrl()

Returns the tab’s icon fully qualified URL.

#### Signature

public String getUrl()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getWidth()

Returns the tab’s icon width in pixels.

#### Signature

public Integer getWidth()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If the icon content type is SVG, the icon won’t have a size and its width is zero.

## Code Examples

```apex
// Get tab set describes for each app
List<Schema.DescribeTabSetResult> tabSetDesc = Schema.describeTabs();

// Iterate through each tab set
for(Schema.DescribeTabSetResult tsr : tabSetDesc) {            
    // Get tab info for the Sales app
    if (tsr.getLabel() == 'Sales') {
        // Get icon information for the first tab
        List<Schema.DescribeIconResult> iconDesc = tsr.getTabs()[0].getIcons();
        // Display the icon height and width of the first icon
        System.debug('Height: ' + iconDesc[0].getHeight());
        System.debug('Width: ' + iconDesc[0].getWidth());
    }            
}

// Example debug statement output
// DEBUG|Height: 32
// DEBUG|Width: 32
```

## Related Topics

- Schema (atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm)
- getContentType() (atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm)
- getHeight() (atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm)
- getTheme() (atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm)
- getUrl() (atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm)
- getWidth() (atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
