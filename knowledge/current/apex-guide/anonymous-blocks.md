---
title: "Anonymous Blocks"
domain: apex-guide
topic: anonymous-blocks
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.248Z
estimatedTokens: 1352
keywords: [Anonymous, Blocks, block, Apex, code, doesn’t, stored, metadata, compiled, executed, Executing, API, Author, Permission]
---

# Anonymous Blocks

> An anonymous block is Apex code that doesn’t get stored in the metadata, but that can
        be compiled and executed.

# Anonymous Blocks

An anonymous block is Apex code that doesn’t get stored in the metadata, but that can be compiled and executed.

| User Permissions Needed |
| --- |
| To execute anonymous Apex:(Anonymous Apex execution through the API allows restricted access without the “Author Apex” permission.) | “API Enabled” and “Author Apex” |
| If an anonymous Apex callout references a named credential as the endpoint: | Customize Application |

Compile and execute anonymous blocks using one of the following:

-   Developer Console
-   Salesforce extensions for Visual Studio Code
-   The executeAnonymous() SOAP API call:

    ```

    ```


You can use anonymous blocks to quickly evaluate Apex in the Developer Console or using the Salesforce Extensions for Visual Studio Code and Code Builder.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

Every time you run an anonymous block, the code and its references are compiled. For repetitive calls, we strongly recommend you use compiled classes, such as Apex REST endpoints.

Note the following about the content of an anonymous block (for executeAnonymous(), the code String):

-   Can include user-defined methods and exceptions.
-   User-defined methods can’t include the keyword static.
-   You don’t have to manually commit any database changes.
-   If an Apex trigger within an anonymous block completes successfully, the changes are committed to the database only after all operations in the block finish executing and don’t cause any errors. If your Apex trigger doesn’t complete successfully, any changes made to the database in the anonymous block are rolled back.
-   Unlike classes and triggers, anonymous blocks execute as the current user and can fail to compile if the code violates the user's object- and field-level permissions.
-   Don’t have a scope other than local. For example, although it’s legal to use the global access modifier, it has no meaning. The scope of the method is limited to the anonymous block.
-   When you define a class or interface (a custom type) in an anonymous block, it’s considered virtual by default when the anonymous block executes. This fact is true even if your custom type wasn’t defined with the virtual modifier. To avoid this from happening, save your class or interface in Salesforce. (Classes and interfaces defined in an anonymous block aren’t saved in your org.)

Even though a user-defined method can refer to itself or later methods without the need for forward declarations, variables can’t be referenced before their actual declaration. In the following example, the Integer int must be declared while myProcedure1 doesn’t:

```

```

The returned result for anonymous blocks includes:

-   Status information for the compile and execute phases of the call, including any errors that occur
-   The debug log content, including the output of any calls to the System.debug method (see [Debug Log](atlas.en-us.apexcode.meta/apexcode/apex_debugging_debug_log.htm))
-   The Apex stack trace of any uncaught code execution exceptions, including the class, method, and line number for each call stack element

For more information, see [executeAnonymous()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_executeanonymous.htm), [Working with Logs in the Developer Console](atlas.en-us.apexcode.meta/apexcode/apex_debugging_system_log_console.htm "Use the Logs tab in the Developer Console to open debug logs."), and [Salesforce extensions for Visual Studio Code and Code Builder](https://developer.salesforce.com/tools/vscode).

## Executing Anonymous Apex through the API and the Author Apex Permission

To run any Apex code with the executeAnonymous() API call, including Apex methods saved in the org, users must have the Author Apex permission. For users who don’t have the Author Apex permission, the API allows restricted execution of anonymous Apex. This exception applies only when users execute anonymous Apex through the API, or through a tool that uses the API, but not in the Developer Console. Such users are allowed to run the following in an anonymous block.

-   Code that they write in the anonymous block
-   Web service methods (methods declared with the webservice keyword) that are saved in the org
-   Any built-in Apex methods that are part of the Apex language

Running any other Apex code isn’t allowed when the user doesn’t have the Author Apex permission. For example, calling methods of custom Apex classes that are saved in the org isn’t allowed nor is using custom classes as arguments to built-in methods.

When users without the Author Apex permission run DML statements in an anonymous block, triggers can get fired as a result.

-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_triggers.htm "Triggers")

#### See Also

-   [Named Credentials as Callout Endpoints](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm "A named credential specifies the URL of a callout endpoint and its required authentication parameters in one definition. Salesforce manages all authentication for Apex callouts that specify a named credential as the callout endpoint so that your code doesn’t have to. You can also skip remote site settings, which are otherwise required for callouts to external sites, for the site defined in the named credential.")

## Code Examples

```
ExecuteAnonymousResult executeAnonymous(String code)
```

```
Integer int1 = 0;

void myProcedure1() {
    myProcedure2();
}

void myProcedure2() {
    int1++;
}

myProcedure1();
```

## Related Topics

- Debug Log (atlas.en-us.apexcode.meta/apexcode/apex_debugging_debug_log.htm)
- Working with Logs in the Developer Console (atlas.en-us.apexcode.meta/apexcode/apex_debugging_system_log_console.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_triggers.htm)
- Named Credentials as Callout Endpoints (atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm)
