---
title: "Objects and SOAP API Calls and Headers for Apex"
domain: api
topic: objects-and-soap-api-calls-and-headers-for-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.890Z
estimatedTokens: 782
keywords: [Objects, SOAP, API, Calls, Apex, Salesforce, including, extend, implement, any, IDEs, contact, representative]
---

# Objects and SOAP API Calls and Headers for Apex

> These Salesforce Objects and SOAP API calls and headers are
    available by default for Apex. For information on all other SOAP API calls, including those that
    can be used to extend or implement any existing Apex IDEs, contact your Salesforce
      representative.

# Objects and SOAP API Calls and Headers for Apex

These Salesforce Objects and SOAP API calls and headers are available by default for Apex. For information on all other SOAP API calls, including those that can be used to extend or implement any existing Apex IDEs, contact your Salesforce representative.

Apex class methods can be exposed as custom SOAP Web service calls. This allows an external application to invoke an Apex Web service to perform an action in Salesforce. Use the webservice keyword to define these methods. For more information, see [Considerations for Using the webservice Keyword](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_web_services_methods_considerations.htm).

Any Apex code saved using SOAP API calls uses the same version of SOAP API as the endpoint of the request. For example, if you want to use SOAP API version 66.0 , use endpoint 66.0:

```

```

These Salesforce objects are available for Apex.

-   [ApexTestQueueItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apextestqueueitem.htm "HTML (New Window)")
-   [ApexTestResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apextestresult.htm "HTML (New Window)")
-   [ApexTestResultLimits](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apextestresultlimits.htm "HTML (New Window)")
-   [ApexTestRunResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apextestrunresult.htm "HTML (New Window)")

Use these SOAP API calls to deploy your Apex.

-   [compileAndTest()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_compileandtest.htm "HTML (New Window)")
-   [compileClasses()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_compileclasses.htm "HTML (New Window)")
-   [compileTriggers()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_compiletriggers.htm "HTML (New Window)")
-   [executeanonymous()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_executeanonymous.htm "HTML (New Window)")
-   [runTests()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_runtests.htm "HTML (New Window)")

All these calls take Apex code that contains the class or trigger, as well as the values for any fields that need to be set.

These SOAP headers are available in SOAP API calls for Apex.

-   [DebuggingHeader](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_header_debuggingheader.htm "HTML (New Window)")
-   [PackageVersionHeader](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_header_packageversionheader.htm "HTML (New Window)")

#### See Also

-   [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm)

## Code Examples

```
https://MyDomain.salesforce.com/services/Soap/s/66.0
```
