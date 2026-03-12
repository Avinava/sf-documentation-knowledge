---
title: "compileAndTest()"
domain: api
topic: compileandtest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.805Z
estimatedTokens: 464
keywords: [compileAndTest, Compile, test, Apex, call, Usage, Sample, Code—Java, Arguments]
---

# compileAndTest()

> Compile and test your Apex in a single call.

# compileAndTest()

Compile and test your Apex in a single call.

## Syntax

```

```

## Usage

Use this call to both compile and test the Apex you specify with a single call. Production organizations (not a Developer Edition or Sandbox Edition) must use this call instead of [compileClasses()](atlas.en-us.api.meta/api/sforce_api_calls_compileclasses.htm) or [compileTriggers()](atlas.en-us.api.meta/api/sforce_api_calls_compiletriggers.htm "Compile your Apex triggers in Developer Edition or sandbox organizations.").

This call supports the [DebuggingHeader](atlas.en-us.api.meta/api/sforce_api_header_debuggingheader.htm "Return the debug log in the output header, DebuggingInfo, and specify the level of detail in the debug log.") and the [SessionHeader](atlas.en-us.api.meta/api/sforce_api_header_sessionheader.htm "Specifies the session ID returned from the login server after a successful login(). This session ID is used in all subsequent calls.").

All specified tests must pass, otherwise data is not saved to the database. If this call is invoked in a production organization, the [RunTestsRequest](atlas.en-us.api.meta/api/sforce_api_calls_runtests_request.htm) property of the [CompileAndTestRequest](atlas.en-us.api.meta/api/sforce_api_calls_compileandtest_request.htm) is ignored, and all unit tests defined in the organization are run and must pass.

## Sample Code—Java

Note that the following example sets checkOnly to true so that this class is compiled and tested, but the classes are not saved to the database.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| request | CompileAndTestRequest | A request that includes the Apex and the values for any fields that need to be set for this request. |

## Response

[CompileAndTestResult](atlas.en-us.api.meta/api/sforce_api_calls_compileandtest_result.htm)

## Code Examples

```
CompileAndTestResult[] = compileAndTest(CompileAndTestRequest request);
```

```apex
{
    CompileAndTestRequest request;
    CompileAndTestResult result = null;

    String triggerBody = "trigger t1 on Account (before insert){ " +
      "  for(Account a:Trigger.new){ " +
      "   a.description = 't1_UPDATE';}" +
      "}";

    String testClassBody = "@isTest private class TestT1{" +
      "    // Test for the trigger" +
      "    public static testmethod void test1(){" +
      "      Account a  = new Account(name='TEST');" +
      "      insert(a);" +
      "      a = [select id,description from Account where id=:a.id];" +
      "      System.assert(a.description.contains('t1_UPDATE'));" +
      "    }" +
      "    // Test for the class" +
      "    public static testmethod void test2(){" +
      "      String s = C1.method1();" +
      "      System.assert(s=='HELLO');" +
      "    }" +
      "}";

    String classBody = "public class C1{" +
      "    public static String s ='HELLO';" +
      "    public static String method1(){" +
      "      return(s);" +
      "    }" +
      "}";

    request = new CompileAndTestRequest();

    request.setClasses(new String[]{classBody, testClassBody});
    request.setTriggers(new String[]{triggerBody});
    request.setCheckOnly(true);

    try {
        result = apexBinding.compileAndTest(request);
    } catch (RemoteException e) {
        System.out.println("An unexpected error occurred: " + e.getMessage());
    }
    assert (result.isSuccess());
}
```

## Related Topics

- CompileAndTestResult (atlas.en-us.api.meta/api/sforce_api_calls_compileandtest_result.htm)
- CompileAndTestRequest (atlas.en-us.api.meta/api/sforce_api_calls_compileandtest_request.htm)
- compileClasses() (atlas.en-us.api.meta/api/sforce_api_calls_compileclasses.htm)
- compileTriggers() (atlas.en-us.api.meta/api/sforce_api_calls_compiletriggers.htm)
- DebuggingHeader (atlas.en-us.api.meta/api/sforce_api_header_debuggingheader.htm)
- SessionHeader (atlas.en-us.api.meta/api/sforce_api_header_sessionheader.htm)
- RunTestsRequest (atlas.en-us.api.meta/api/sforce_api_calls_runtests_request.htm)
