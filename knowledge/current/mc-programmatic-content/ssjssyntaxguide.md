---
title: "ssjs_syntaxGuide"
domain: mc-programmatic-content
topic: ssjssyntaxguide
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:28.564Z
estimatedTokens: 1634
keywords: [ssjs_syntaxGuide, document, correctly, form, server-side, JavaScript, function, calls, declare, variables, keywords, Block, Personalization, Tags, Attributes]
---

# ssjs_syntaxGuide

> Use the information in this document to correctly form server-side JavaScript function calls, declare variables and values, and reference server-side JavaScript keywords.

Use the information in this document to correctly form server-side JavaScript function calls, declare variables and values, and reference server-side JavaScript keywords.

## Declare a Server-Side JavaScript Block

Use Script tags to delineate JavaScript blocks to be processed by the application. The application processes these tags as case-insensitive instances. Unless required to distinguish a value, the application treats quotation marks as optional.

The application executes the server-side JavaScript at the time of rendering, and the variables do not maintain this state after that rendering.

This example demonstrates the minimum syntax necessary to declare a server-side JavaScript block:

```
<script runat=server>
    [Insert JavaScript Here]
</script>
```

You must specify that the JavaScript run at the server or the browser tries to run it on the client side and return an error.

This example demonstrates the full syntax:

```
<script runat=server language="JavaScript" executioncontexttype="Post" executioncontextname=test>
    [Insert JavaScript Here]
</script>
```

The example contains three parameters you can specify as the need arises:

1.  For the Language parameter, you can specify either JavaScript or AMPscript. The system defaults to JavaScript.
2.  For ExecutionContextType, you can specify either Get or Post. If no parameter is specified, the system defaults to Get.
3.  For ExecutionContextName, you can specify a named context to execute.

## Personalization String

Server-side JavaScript uses personalization tokens for subscriber and system attributes, data extension fields, variables, functions, and JavaScript code expressions.

### Supported Personalization String Tags

Use these tags as part of your personalization strings:

-   ctrl:field - References subscriber attribute values, system attribute values, and sendable data extension field values
-   crtl:var - References variables created in AMPscript or server-side JavaScript script blocks
-   ctrl:eval - Embeds JavaScript expressions as content substitutions

### Supported Attributes

You can use these attributes in your personalization strings:

-   Name - Identifies the attribute, sendable data extension field, or variable. You must include this value for all attribute and variable data sources.
-   Default - Provides an optional default value for all tags. The system returns this value if the data source is null or an empty string.
-   Format- Specifies a format for the personalization string. Use the values specified at these links for reference:
    -   [](http://msdn.microsoft.com/en-us/library/dwhawy9k\(VS.71)[http://msdn.microsoft.com/en-us/library/dwhawy9k(VS.71).aspx](http://msdn.microsoft.com/en-us/library/dwhawy9k\(VS.71\).aspx)
    -   [](http://msdn.microsoft.com/en-us/library/az4se3k1\(VS.71)[http://msdn.microsoft.com/en-us/library/az4se3k1(VS.71).aspx](http://msdn.microsoft.com/en-us/library/az4se3k1\(VS.71\).aspx)
-   Language- Specifies the language of the expression. Accepted values include javascript and ampscript, and the system defaults to javascript if no value is supplied.

### Syntax Samples

Use the following examples as models for constructing your own server-side JavaScript calls. These calls can be used anywhere in a landing page to provide personalized information.

#### Accessing an Attribute Name

```
<ctrl:field name=AttributeName />
```

#### Accessing a Sendable Data Extension Field

```
<ctrl:field name=SendableDataExtensionField />
```

#### Accessing an Attribute Name with a Default Value

```
<ctrl:field name=AttributeName default="Default Value" />
```

#### Accessing a Variable

```
<ctrl:var name=JSVar />
```

or

```
<ctrl:var name=@AmpVar />
```

The full syntax adds default and format values:

```
<ctrl:var name=JSVar default=test format=g />
```

#### Evaluating an Expression

```
<ctrl:eval >"a".toUpperCase() + "B".toLowerCase()</ctrl:eval>
The full syntax adds language, default, and format values:
```
```
<ctrl:eval language=javascript default=none format=G>MyVal.toUpper()</ctrl:eval>
```

You can use full-function syntax or the equivalent simple expression syntax in server-side JavaScript. For example, these two expressions accomplish the same goal:

```
return "B".toUpperCase();
```
```
"B".toUpperCase()
```

## Platform Object Support for Server-Side JavaScript

Server-side JavaScript interacts with information from Marketing Cloud through the outlined methods and libraries. To use these libraries, you must first load the library.

The Core library currently stands at version 1.1.1 and supports ECMAscript 3.0. This version represents the current, original version of the server-side JavaScript library and contains no revisions.

The numbers used in this section represent examples only. Load the library using the syntax below:

```
Platform.Load("InsertLibraryNameHere","1.2");
```

The first parameter specifies the name of the library, and the second parameter specifies the version of the library. The loading code requires both parameters, but the minor number for the library is optional. Therefore, the version number must be present, but you can express it as "1" or "1.2". If no minor value is listed, the load gets the most recent version of that minor update.

For example, to load the Core server-side JavaScript library, use this example:

```
Platform.Load("Core","1");
```

Given that the Core library has 1, 1.1, and 2.0 versions, the load gets version 1.1 of the library. If there was a 1.2 version available, the call would return that version instead.

```
Platform.Load("Core","1.2");
```

Given that the Core library has 1, 1.1, 1.2 and 2.0 versions, the load gets version 1.2 of the library.

## Methods

Server-side JavaScript supports the following methods:

-   Add - Invokes the web service API Create method on an API object
-   Remove - Invokes the web service API Delete method on an API object
-   Update - Invokes the web service API Update method on an API object
-   Retrieve - Invokes the web service API Retrieve method on an API object

## Code Access Security

Server-side JavaScript can only access the .NET CLR (Common Language Runtime) objects exposed through the outlined libraries. Attempts to access disallowed CLR objects will result in an error.

## Core Library Functions

Core library server-side JavaScript functions allow you to use standard JSON and JavaScript functionality to interact with Marketing Cloud. Platform objects can function within landing pages and applications.
