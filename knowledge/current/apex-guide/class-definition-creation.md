---
title: "Class Definition Creation"
domain: apex-guide
topic: class-definition-creation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.523Z
keywords: [Class, Definition, Creation, Note, Apex, Editor]
---

# Class Definition Creation

# Class Definition Creation

Use the class editor to create a class in Salesforce.

1.  From Setup, enter Apex Classes in the Quick Find box, then select **Apex Classes**.
2.  Click **New**.
3.  Click **Version Settings** to specify the version of Apex and the API used with this class. If your organization has installed managed packages from the AppExchange, you can also specify which version of each managed package to use with this class. Use the default values for all versions. This associates the class with the most recent version of Apex and the API, as well as each managed package. You can specify an older version of a managed package if you want to access components or functionality that differs from the most recent package version. You can specify an older version of Apex and the API to maintain specific behavior.
4.  In the class editor, enter the Apex code for the class. A single class can be up to 1 million characters in length, not including comments, test methods, or classes defined using @IsTest.
5.  Click **Save** to save your changes and return to the class detail screen, or click **Quick Save** to save your changes and continue editing your class. Your Apex class must compile correctly before you can save your class.

Classes can also be automatically generated from a WSDL by clicking **Generate from WSDL**. See [SOAP Services: Defining a Class from a WSDL Document](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex.htm).

Once saved, classes can be invoked through class methods or variables by other Apex code, such as a trigger.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

To aid backwards-compatibility, classes are stored with the version settings for a specified version of Apex and the API. If the Apex class references components, such as a custom object, in installed managed packages, the version settings for each managed package referenced by the class is saved too. Additionally, classes are stored with an isValid flag that is set to true as long as dependent metadata hasn’t changed since the class was last compiled. If any changes are made to object names or fields that are used in the class, including superficial changes such as edits to an object or field description, or if changes are made to a class that calls this class, the isValid flag is set to false. When a trigger or Web service call invokes the class, the code is recompiled and the user is notified if there are any errors. If there are no errors, the isValid flag is reset to true.

## The Apex Class Editor

The Apex and Visualforce editor has the following functionality:

Syntax highlighting

The editor automatically applies syntax highlighting for keywords and all functions and operators.

Search (![search icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fsearch.gif&folder=apexcode))

Search enables you to search for text within the current page, class, or trigger. To use search, enter a string in the Search textbox and click **Find Next**.

-   To replace a found search string with another string, enter the new string in the Replace textbox and click **replace** to replace just that instance, or **Replace All** to replace that instance and all other instances of the search string that occur in the page, class, or trigger.
-   To make the search operation case sensitive, select the **Match Case** option.
-   To use a regular expression as your search string, select the **Regular Expressions** option. The regular expressions follow JavaScript's regular expression rules. A search using regular expressions can find strings that wrap over more than one line.
    
    If you use the replace operation with a string found by a regular expression, the replace operation can also bind regular expression group variables ($1, $2, and so on) from the found search string. For example, to replace an <h1\> tag with an <h2\> tag and keep all the attributes on the original <h1\> intact, search for <h1(\\s+)(.\*)\> and replace it with <h2$1$2\>.
    

Go to line (![Go to line arrow](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fgo_to_line.gif&folder=apexcode))

This button allows you to highlight a specified line number. If the line isn’t currently visible, the editor scrolls to that line.

Undo (![Undo button](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fundo.gif&folder=apexcode)) and Redo (![Redo button](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fredo.gif&folder=apexcode))

Use undo to reverse an editing action and redo to recreate an editing action that was undone.

Font size

Select a font size from the dropdown list to control the size of the characters displayed in the editor.

Line and column position

The line and column position of the cursor is displayed in the status bar at the bottom of the editor. This can be used with go to line (![Go to line arrow](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fgo_to_line.gif&folder=apexcode)) to quickly navigate through the editor.

Line and character count

The total number of lines and characters is displayed in the status bar at the bottom of the editor.

1.  [Naming Conventions](atlas.en-us.apexcode.meta/apexcode/apex_classes_naming_conventions.htm)  
    
2.  [Name Shadowing](atlas.en-us.apexcode.meta/apexcode/apex_classes_name_shadowing.htm)  
    

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_java_diffs.htm "Differences Between Apex Classes and Java Classes")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_namespace_prefix.htm "Namespace Prefix")