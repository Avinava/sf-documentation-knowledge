---
title: "Schema Class"
domain: apex-reference
topic: schema-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.574Z
keywords: [Schema, Class, Returns, information, standard, custom, apps, available, running, user., describeTabs, Signature, Return, Value, Usage, Note, Example]
---

# Schema Class

> Returns information about the standard and custom apps
available to the running user.

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