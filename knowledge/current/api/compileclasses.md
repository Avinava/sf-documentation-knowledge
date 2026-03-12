---
title: "compileClasses()"
domain: api
topic: compileclasses
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.822Z
estimatedTokens: 284
keywords: [compileClasses, Compile, Apex, Developer, Edition, sandbox, organizations, Usage, Sample, Code—Java, Arguments]
---

# compileClasses()

> Compile your Apex in Developer Edition or sandbox organizations.

# compileClasses()

Compile your Apex in Developer Edition or sandbox organizations.

## Syntax

```

```

## Usage

Use this call to compile Apex classes in Developer Edition or sandbox organizations. Production organizations must use [compileAndTest()](atlas.en-us.api.meta/api/sforce_api_calls_compileandtest.htm "Compile and test your Apex in a single call.").

This call supports the [DebuggingHeader](atlas.en-us.api.meta/api/sforce_api_header_debuggingheader.htm "Return the debug log in the output header, DebuggingInfo, and specify the level of detail in the debug log.") and the [SessionHeader](atlas.en-us.api.meta/api/sforce_api_header_sessionheader.htm "Specifies the session ID returned from the login server after a successful login(). This session ID is used in all subsequent calls.").

## Sample Code—Java

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| scripts | string | A request that includes the Apex classes and the values for any fields that need to be set for this request. |

## Response

[CompileClassResult](atlas.en-us.api.meta/api/sforce_api_calls_compileandtest_result.htm)

## Code Examples

```
CompileClassResult[] = compileClasses(string[] classList);
```

```apex
public void compileClassesSample() {
    String p1 = "public class p1 {
"
      + "public static Integer var1 = 0;
"
      + "public static void methodA() {
"
      + " var1 = 1;
" + "}
"
      + "public static void methodB() {
"
      + " p2.MethodA();
" + "}
"
      + "}";
    String p2 = "public class p2 {
"
      + "public static Integer var1 = 0;
"
      + "public static void methodA() {
"
      + " var1 = 1;
" + "}
"
      + "public static void methodB() {
"
      + " p1.MethodA();
" + "}
"
      + "}";
    CompileClassResult[] r = new CompileClassResult[0];
    try {
        r = apexBinding.compileClasses(new String[]{p1, p2});
    } catch (RemoteException e) {
        System.out.println("An unexpected error occurred: "
          + e.getMessage());
    }
    if (!r[0].isSuccess()) {
        System.out.println("Couldn't compile class p1 because: "
          + r[0].getProblem());
    }
    if (!r[1].isSuccess()) {
        System.out.println("Couldn't compile class p2 because: "
          + r[1].getProblem());
    }
}
```

## Related Topics

- CompileClassResult (atlas.en-us.api.meta/api/sforce_api_calls_compileandtest_result.htm)
- compileAndTest() (atlas.en-us.api.meta/api/sforce_api_calls_compileandtest.htm)
- DebuggingHeader (atlas.en-us.api.meta/api/sforce_api_header_debuggingheader.htm)
- SessionHeader (atlas.en-us.api.meta/api/sforce_api_header_sessionheader.htm)
