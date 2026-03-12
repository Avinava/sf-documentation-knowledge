---
title: "Common Migration Issues"
domain: daas
topic: common-migration-issues
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.017Z
estimatedTokens: 2500
keywords: [Common, Migration, Issues, Ant, Tool, retired, Spring, ’24, continues, function, future, API, versions, isn’t, updated]
---

# Common Migration Issues

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Common Migration Issues

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

There are a number of common issues you may run into when migrating metadata and deploying changes. These issues can be grouped into three categories:

-   Metadata — Special considerations for dealing with certain metadata components
-   Connectivity — Problems connecting to an organization or polling for results
-   Testing and Code Coverage — Testing Apex before deployment

## Common Metadata Issues

The most common metadata issues are detailed below:

-   Retrieving custom fields on standard objects — When you use the wildcard symbol in package.xml, to retrieve all objects, you will not retrieve standard objects, or custom fields on standard objects. To retrieve custom fields on standard objects, see [Constructing a Project Manifest](atlas.en-us.daas.meta/daas/daas_package.htm).
-   Profiles or permission sets and field-level security — The contents of a retrieved profile or permission set depend on the other contents of the retrieve request. For example, field-level security for fields included in custom objects are returned at the same time as profiles or permission sets. For more information, see [Profile](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_profile.htm "HTML (New Window)") and [PermissionSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_permissionset.htm "HTML (New Window)") in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/ "HTML (New Window)").
-   Understanding packages — Packages are used to bundle related components so they can be shared with multiple organizations, or distributed on Lightning Platform AppExchange. Managed packages are packages that can be upgraded in the installer's organization. They differ from unmanaged packages in that some components are locked, in order to permit upgrades. Metadata components that are not in any package can be accessed with the unpackaged attribute of sf:retrieve and sf:deploy.
-   Workflow — A .workflow file is a container for the individual workflow components associated with an object, including WorkflowAlert, WorkflowFieldUpdate, WorkflowOutboundMessage, WorkflowRule, and WorkflowTask. To retrieve all workflows, include the following XML in package.xml:

    ```

    ```

-   Retrieving or deploying components that depend on an object definition — The following metadata components are dependent on a particular object for their definition: CustomField, Picklist, RecordType, Weblink, and ValidationRule. This means you must dot-qualify the component name with the object name in package.xml, and may not use the wildcard symbol. For more information, see [Constructing a Project Manifest](atlas.en-us.daas.meta/daas/daas_package.htm).
-   Personal folders — Users' personal folders, for both reports and documents, are not exposed in the Metadata API. To migrate reports or documents you must move them to a public folder.

## Connection Problems

The most common connection problems are detailed below:

-   Request timed out — When you retrieve or deploy metadata, the request is sent asynchronously, meaning that the response is not returned immediately. Because these calls are asynchronous, the server will process a deploy() to completion even if the Ant Migration Tool times out. If the deploy succeeds, the changes will be committed to the server. If the deploy fails after timing out, there is no way to retrieve the error message from the server. For this reason, it is important to tune your pollWaitMillis and maxPoll parameters if you receive time-out errors:

    -   pollWaitMillis — The number of milliseconds to wait between polls for retrieve/deploy results. The default value is 10000 milliseconds (ten seconds). For long-running processes, increase this number to reduce the total number of polling requests, which count against your daily API limits.
    -   maxPoll — The number of polling attempts to be performed before aborting. The default value is 200. When combined with the default value of pollWaitMillis (10000), this means the Ant Migration Tool will give the server process a total of 2,000 seconds (33 minutes) to complete before timing out. The total time is computed as 200 poll attempts, waiting 10 seconds between each.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

    #### Note

    Since these parameters have default values, they do not have to be specified, and may not exist on your named targets. To add these parameters, include them in the target definition. For example:

    ```

    ```

-   Invalid username, password, security token; or user locked out - This error indicates a problem with the credentials in build.properties:
    -   Username — Verify that your username is correct on this account. When connecting to a sandbox instance your sandbox name is appended to your username. For example, if your production username is foo@salesforce.com, and one of your sandboxes is called bar, then your sandbox username is foo@salesforce.com.bar.
    -   Password — Verify that your password is correct for this account. Note that you security token is appended to the end of your pasword.
    -   Security token — The security token is a 25-digit string appended to your password. To reset your security token, go to the Reset My Security Token page in your personal settings.
    -   Locked out — If you unsuccessfully attempt to log into an organization too many times, you may be temporarily locked out. The number of times you may fail to connect and the lockout duration depend on your organization settings. Either contact your administrator to have the lock removed, or wait until the lockout period expires.
    -   Connection mismatch between sandbox and production — If all of your connection credentials in build.properties are correct, you may have a URL mismatch. The server URL is different for sandbox and production environments. In build.properties, the sf.serverurl value for production is https://login.salesforce.com. For sandbox environments, the value is https://test.salesforce.com.
-   Proxy settings — If you connect through a proxy, you will need to follow the Ant [Proxy Configuration](http://ant.apache.org/manual/proxy.html "HTML (New Window)") instructions.

## Testing in Apex

When you deploy to a production organization and don’t specify the tests to run, every unit test in your organization namespace is executed. Before you deploy Apex, the following must be true:

-   Unit tests must cover at least 75% of your Apex code, and all of those tests must complete successfully.

    Note the following.

    -   When deploying Apex to a production organization, each unit test in your organization namespace is executed by default.
    -   Calls to System.debug aren’t counted as part of Apex code coverage.
    -   Test methods and test classes aren’t counted as part of Apex code coverage.
    -   While only 75% of your Apex code must be covered by tests, don’t focus on the percentage of code that is covered. Instead, make sure that every use case of your application is covered, including positive and negative cases, as well as bulk and single records. This approach ensures that 75% or more of your code is covered by unit tests.
-   Every trigger must have some test coverage.
-   All classes and triggers must compile successfully.

If you specify the tests to run, the code coverage calculation for the deployment is slightly different See [Running a Subset of Tests in a Deployment](atlas.en-us.daas.meta/daas/forcemigrationtool_deploy_run_specific_tests.htm "Test levels enable you to have more control over which tests are run in a deployment. To shorten deployment time to production, run a subset of tests when deploying Apex components. The default test execution behavior in production has also changed. By default, if no test level is specified, no tests are executed, unless your deployment package contains Apex classes or triggers.").

Salesforce recommends that you write tests for the following:

Single action

Test to verify that a single record produces the correct, expected result.

Bulk actions

Any Apex code, whether a trigger, a class or an extension, may be invoked for 1 to 200 records. You must test not only the single record case, but the bulk cases as well.

Positive behavior

Test to verify that the expected behavior occurs through every expected permutation, that is, that the user filled out everything correctly and did not go past the limits.

Negative behavior

There are likely limits to your applications, such as not being able to add a future date, not being able to specify a negative amount, and so on. You must test for the negative case and verify that the error messages are correctly produced as well as for the positive, within the limits cases.

Restricted user

Test whether a user with restricted access to the sObjects used in your code sees the expected behavior. That is, whether they can run the code or receive error messages.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

Conditional and ternary operators are not considered executed unless both the positive and negative branches are executed.

For more information, see “[Understanding Testing in Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_testing_intro.htm "HTML (New Window)")” in the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/ "HTML (New Window)").

## Code Examples

```
<types>
    <members>*</members>
    <name>Workflow</name>
</types>
```

```
<sf:retrieve 
  username="${sf.username}"
  password="${sf.password}"
  sessionId="${sf.sessionId}"
  serverurl="${sf.serverurl}"
  retrieveTarget="retrieveUnpackaged"
  unpackaged="unpackaged/package.xml"
  pollWaitMillis="10000"
  maxPoll="100"/>
```

## Related Topics

- Constructing a Project Manifest (atlas.en-us.daas.meta/daas/daas_package.htm)
- Running a Subset of Tests in a Deployment (atlas.en-us.daas.meta/daas/forcemigrationtool_deploy_run_specific_tests.htm)
