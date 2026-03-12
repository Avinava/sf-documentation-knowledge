---
title: "runTests()"
domain: api
topic: runtests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.507Z
estimatedTokens: 378
keywords: [runTests, Run, Apex, unit, tests, Usage, Sample, Code—Java, Arguments]
---

# runTests()

> Run your Apex unit tests.

# runTests()

Run your Apex unit tests.

## Syntax

```

```

## Usage

To facilitate the development of robust, error-free code, Apex supports the creation and execution of unit tests. Unit tests are class methods that verify whether a particular piece of code is working properly. Unit test methods take no arguments, commit no data to the database, and send no emails. Such methods are flagged with the @isTest annotation in the method definition. Unit test methods must be defined in test classes, that is, classes annotated with @isTest. Use this call to run your Apex unit tests.

This call supports the [DebuggingHeader](atlas.en-us.api.meta/api/sforce_api_header_debuggingheader.htm "Return the debug log in the output header, DebuggingInfo, and specify the level of detail in the debug log.") and the [SessionHeader](atlas.en-us.api.meta/api/sforce_api_header_sessionheader.htm "Specifies the session ID returned from the login server after a successful login(). This session ID is used in all subsequent calls.").

## Sample Code—Java

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| request | RunTestsRequest | A request that includes the Apex unit tests and the values for any fields that need to be set for this request. |

## Response

[RunTestsResult](atlas.en-us.api.meta/api/sforce_api_calls_runtests_result.htm "Contains information about the execution of unit tests, including whether unit tests were completed successfully, code coverage results, and failures.")

## Code Examples

```
RunTestsResult[] = binding.runTests(RunTestsRequest request);
```

```apex
public void runTestsSample() {
   String sessionId = "sessionID goes here";
   String url = "url goes here";
   // Set the Apex stub with session ID received from logging in with the partner API
   _SessionHeader sh = new _SessionHeader();
   apexBinding.setHeader(
      new ApexServiceLocator().getServiceName().getNamespaceURI(),
      "SessionHeader", sh);
   // Set the URL received from logging in with the partner API to the Apex stub
   apexBinding._setProperty(ApexBindingStub.ENDPOINT_ADDRESS_PROPERTY, url);

   // Set the debugging header
   _DebuggingHeader dh = new _DebuggingHeader();
   dh.setDebugLevel(LogType.Profiling);
   apexBinding.setHeader(
      new ApexServiceLocator().getServiceName().getNamespaceURI(),
      "DebuggingHeader", dh);

   long start = System.currentTimeMillis();
   RunTestsRequest rtr = new RunTestsRequest();
   rtr.setAllTests(true);
   RunTestsResult res = null;
   try {
      res = apexBinding.runTests(rtr);
   } catch (RemoteException e) {
      System.out.println("An unexpected error occurred: " + e.getMessage());
   }

   System.out.println("Number of tests: " + res.getNumTestsRun());
   System.out.println("Number of failures: " + res.getNumFailures());
   if (res.getNumFailures() > 0) {
      for (RunTestFailure rtf : res.getFailures()) {
         System.out.println("Failure: " + (rtf.getNamespace() ==
         null ? "" : rtf.getNamespace() + ".")
         + rtf.getName() + "." + rtf.getMethodName() + ": "
         + rtf.getMessage() + "
" + rtf.getStackTrace());
      }
   }
   if (res.getCodeCoverage() != null) {
      for (CodeCoverageResult ccr : res.getCodeCoverage()) {
         System.out.println("Code coverage for " + ccr.getType() +
         (ccr.getNamespace() == null ? "" : ccr.getNamespace() + ".")
         + ccr.getName() + ": "
         + ccr.getNumLocationsNotCovered()
         + " locations not covered out of "
         + ccr.getNumLocations());
   
      if (ccr.getNumLocationsNotCovered() > 0) {
         for (CodeLocation cl : ccr.getLocationsNotCovered())
            System.out.println("\tLine " + cl.getLine());
         }
      }
   }
   System.out.println("Finished in " +
   (System.currentTimeMillis() - start) + "ms");
}
```

## Related Topics

- RunTestsResult (atlas.en-us.api.meta/api/sforce_api_calls_runtests_result.htm)
- RunTestsRequest (atlas.en-us.api.meta/api/sforce_api_calls_runtests_request.htm)
- DebuggingHeader (atlas.en-us.api.meta/api/sforce_api_header_debuggingheader.htm)
- SessionHeader (atlas.en-us.api.meta/api/sforce_api_header_sessionheader.htm)
