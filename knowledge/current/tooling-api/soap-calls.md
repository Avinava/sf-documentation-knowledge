---
title: "SOAP Calls"
domain: tooling-api
topic: soap-calls
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:43.528Z
estimatedTokens: 2780
keywords: [SOAP, Calls, you’re, strongly, typed, language, Java, generates, Web, service, client, code, usage, authentication, API]
---

# SOAP Calls

> Use SOAP if you’re using a strongly typed language like Java that
            generates Web service client code. For details about usage, syntax, and
         authentication, see the SOAP API Developer Guide.

# SOAP Calls

Use SOAP if you’re using a strongly typed language like Java that generates Web service client code. For details about usage, syntax, and authentication, see the SOAP API Developer Guide.

To access the Tooling API WSDL, from Setup, enter API in the Quick Find box, then select **API** and click **Generate Tooling WSDL**.

Like the Salesforce SOAP API, Tooling API uses the following calls.

create()

Adds one or more records to your organization’s data. When creating objects with the Metadata field, only one object can be processed in a request.

delete()

Deletes one or more records from your organization’s data.

describeLayout()

Retrieve metadata about page layouts for a specified SOjbect.

describeGlobal()

Lists the available Tooling API objects and their metadata.

describeSObjects()

Describes the metadata (field list and object properties) for the specified object or array of objects.

Call describeGlobal() to retrieve a list of all Tooling API objects for your organization, then iterate through the list and use describeSObjects() to obtain metadata about individual objects.

describeValueType()

Describes the metadata for a specified namespace and value type. For information about describeValueType, see the Metadata API Developer Guide.

describeWorkitemActions()

Describes which actions are available for a specified work item.

executeanonymous(string apexcode)

Executes the specified block of Apex anonymously and returns the result.

query()

Executes a query against a Tooling API object and returns data that matches the specified criteria.

queryMore()

Retrieves the next batch of objects from a query().

retrieve()

Retrieves one or more records based on the specified IDs.

runTests()

Runs one or more methods within an Apex class, using the synchronous test execution mechanism. All test methods in a synchronous test run must be in the same class.

The synchronous runTests() call accepts a [RunTestsRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_runtests_request.htm "HTML (New Window)") object.

For sample code and more information, see [runTests()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_runtests.htm "HTML (New Window)").

runTestsAsynchronous()

Runs one or more methods within one or more Apex classes, using the asynchronous test execution mechanism.

This example shows a call to a class that calls the runTestsAsynchronous endpoint.

```

```

For more runTestsAsynchronous() example code, see [ApexTestQueueItem](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextestqueueitem.htm "Represents a single Apex class in the Apex job queue. Available in API version 30.0 and later.").

All parameters are mandatory. To provide values for only some parameters, specify the others as null.

-   The classids, suiteids, classNames, and suiteNames parameters must all be specified. To provide values for only some of these parameters, specify the others as null. To use TestLevel.RunLocalTests or TestLevel.RunAllTestsInOrg, specify all class- and suite-related parameters as null.
-   A value for maxFailedTests is mandatory. To allow all tests in your org to run, regardless of how many tests fail, set maxFailedTests to \-1. To stop the test run from executing new tests after a given number of tests fail, set maxFailedTests to an integer value from 0 to 1,000,000. This integer value sets the maximum allowable test failures. A value of 0 causes the test run to stop if any failure occurs. A value of 1 causes the test run to stop on the second failure, and so on. Keep in mind that high values can cause slow performance. Each 1,000 tests that you add to your maxFailedTests value adds about 3 seconds to your test run, not including the time that the tests take to execute.
-   The testLevel parameter is available and required in API version 37.0 and later, but its value can be null. Other permissible values include:

    RunSpecifiedTests

    Only the tests that you specify are run.

    RunLocalTests

    All tests in your org are run, except the ones that originate from installed managed packages.

    Omit identifiers for specific tests when you use this value.

    RunAllTestsInOrg

    All tests are run. The tests include all tests in your org, including tests of managed packages.

    Omit identifiers for specific tests when you use this value.

-   The tests parameter is available and required in API version 41.0 and later, but its value can be null. This property is an array of type [TestsNode](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_runtests_request.htm "HTML (New Window)").
-   The skipCodeCoverage parameter is available in API version 43.0 and later, but its value can be null. This property is a boolean that indicates whether to opt out of collecting code coverage information during the test run.

search()

Search for records that match a specified text string.

update()

Updates one or more existing records in your org’s data. When updating objects with the Metadata field, only one object can be updated per request.

upsert()

Creates records and updates existing records; uses a custom field to determine the presence of existing records. To upsert objects with the Metadata field, pass in only one object per request.

## SOAP Headers

The SOAP headers available in the Tooling API WSDL are described in [SOAP Headers for Tooling API](atlas.en-us.api_tooling.meta/api_tooling/intro_api_tooling_soap_headers.htm#intro_api_tooling_soap_headers "Tooling API provides SOAP headers similar to the SOAP API headers.").

## Examples

These examples use C#, but you can use any language that supports Web services.

To compile Apex classes or triggers in Developer Edition or sandbox organizations, use create(). The next sample uses [ApexClass](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexclass.htm "Represents the saved copy of an Apex class. ApexClass uses the cached version of the class unless one is unavailable. Available from API version 28.0 or later.") to compile a simple class with a single method called SayHello.

```

```

The IsCheckOnly parameter on [ContainerAsyncRequest](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_containerasyncrequest.htm "Allows you to compile and asynchronously deploy a MetadataContainer object to your organization.") indicates whether an asynchronous request compiles code but doesn’t execute or save it (true), or compiles and save the code (false).

The next example expands upon the first by modifying the SayHello() method to accept a person’s first and last name. This example uses [MetadataContainer](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacontainer.htm "Manages working copies of ApexClassMember, ApexTriggerMember, ApexPageMember, and ApexComponentMember objects, including collections of objects to be deployed together.") with [ApexClassMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexclassmember.htm "Represents the working copy of an Apex class for editing, saving, or compiling in a MetadataContainer.") to retrieve and update the class, and [ContainerAsyncRequest](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_containerasyncrequest.htm "Allows you to compile and asynchronously deploy a MetadataContainer object to your organization.") to compile and deploy the changes to the server. You can use the same method with [ApexTriggerMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextriggermember.htm "Represents the working copy of an Apex trigger for editing, saving, or compiling in a MetadataContainer."), [ApexComponentMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexcomponentmember.htm "Represents the working copy of a Visualforce component for editing, saving, or compiling in a MetadataContainer."), and [ApexPageMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexpagemember.htm "Represents the working copy of a Visualforce page for editing, saving, or compiling in a MetadataContainer.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

To test your code, modify the IsCheckOnly parameter in the next sample, and log in to your organization after a successful execution to verify the results.

-   When IsCheckOnly = true, the SayHello() method remains the same. ApexClassMember contains the compiled results, but the class on the server remains the same.
-   When IsCheckOnly = false, the SayHello() method shows the change to accept a person’s first and last name.

```

```

To access Apex class and trigger data in a structured format, use a [SymbolTable](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_symboltable.htm "A complex type that represents all user-defined tokens in the Body of an ApexClass, ApexClassMember, or ApexTriggerMember and their associated line and column locations within the Body.").

The next sample queries the [ApexClassMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexclassmember.htm "Represents the working copy of an Apex class for editing, saving, or compiling in a MetadataContainer.") object created in the previous example to obtain the [SymbolTable](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_symboltable.htm "A complex type that represents all user-defined tokens in the Body of an ApexClass, ApexClassMember, or ApexTriggerMember and their associated line and column locations within the Body.") of the modified class.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

The SOQL statement used depends on when the data is retrieved.

-   To execute the query from within the previous sample, use the ID of the [ContainerAsyncRequest](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_containerasyncrequest.htm "Allows you to compile and asynchronously deploy a MetadataContainer object to your organization."). For example, SELECT Body, ContentEntityId, SymbolTable FROM ApexClassMember where MetadataContainerId = '" + requestId \+ "'"
-   Otherwise, use the ID of the modified class as shown in the next sample. For example, SELECT ContentEntityId, SymbolTable FROM ApexClassMember where ContentEntityId = '" + classId + "'"

```

```

To add checkpoints to your code for debugging, use [ApexExecutionOverlayAction](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexexecutionoverlayaction.htm "Specifies an Apex code snippet or SOQL query to execute at a specific line of code in an Apex class or trigger. Optionally, generates a heap dump.").

This sample adds a checkpoint to the class from the previous samples:

```

```

#### See Also

-   [Tooling API Objects](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_list.htm)

-   [SOAP API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/ "SOAP API Developer Guide - HTML (New Window)")

## Code Examples

```
conn.runTestsAsynchronous(classids, suiteids, maxFailedTests, testLevel.value,
   classNames, suiteNames, tests, skipCodeCoverage)
```

```apex
String classBody = "public class Messages {
"
      + "public string SayHello() {
"
      + " return 'Hello';
" + "}
"
      + "}";

   // create an ApexClass object and set the body 
   ApexClass apexClass = new ApexClass();
   apexClass.Body = classBody;
   ApexClass[] classes = { apexClass };

   // call create() to add the class
   SaveResult[] saveResults = sforce.create(classes);
   for (int i = 0; i < saveResults.Length; i++)
      {
      if (saveResults[i].success)
         {
           Console.WriteLine("Successfully created Class: " +
            saveResults[i].id);
         }
      else
         {
            Console.WriteLine("Error: could not create Class ");
            Console.WriteLine("   The error reported was: " +
            saveResults[i].errors[0].message + "
");
         }
      }
```

```apex
String updatedClassBody = "public class Messages {
"
    + "public string SayHello(string fName, string lName) {
"
    + " return 'Hello ' + fName + ' ' + lName;
" + "}
"
    + "}";

 //create the metadata container object
 MetadataContainer Container = new MetadataContainer();
 Container.Name = "SampleContainer";

 MetadataContainer[] Containers = { Container };
 SaveResult[] containerResults = sforce.create(Containers);
 if (containerResults[0].success)
 {
    String containerId = containerResults[0].id;

    //create the ApexClassMember object
    ApexClassMember classMember = new ApexClassMember();
    //pass in the class ID from the first example
    classMember.ContentEntityId = classId;
    classMember.Body = updatedClassBody;
    //pass the ID of the container created in the first step
    classMember.MetadataContainerId = containerId;
    ApexClassMember[] classMembers = { classMember };

    SaveResult[] MembersResults = sforce.create(classMembers);
    if (MembersResults[0].success)
    {
       //create the ContainerAsyncRequest object
       ContainerAsyncRequest request = new ContainerAsyncRequest();
       //if the code compiled successfully, save the updated class to the server
       //change to IsCheckOnly = true to compile without saving 
       request.IsCheckOnly = false;
       request.MetadataContainerId = containerId;
       ContainerAsyncRequest[] requests = { request };
       SaveResult[] RequestResults = sforce.create(requests);
       if (RequestResults[0].success)
       {
          string requestId = RequestResults[0].id;

          //poll the server until the process completes
          QueryResult queryResult = null;
          String soql = "SELECT Id, State, ErrorMsg 
                         FROM ContainerAsyncRequest 
                         Where id = '" + requestId + "'";
          queryResult = sforce.query(soql);
          if (queryResult.size > 0)
          {
             ContainerAsyncRequest _request = (ContainerAsyncRequest)queryResult.records[0];
             while (_request.State.ToLower() == "queued")
             {
                //pause the process for 2 seconds
                Thread.Sleep(2000);

                //poll the server again for completion
                queryResult = sforce.query(soql);
                _request = (ContainerAsyncRequest)queryResult.records[0];
             }

             //now process the result
             switch (_request.State)
             {
                case "Invalidated":
                   break;

                case "Completed":
                //class compiled successfully
                //see the next example on how to process the SymbolTable 
                   break;

                case "Failed":
             . .   break;

                case "Error":
                   break;

                case "Aborted":
                   break;

                }
             }
             else
             {
                //no rows returned
             }
          }
          else
          {
             Console.WriteLine("Error: could not create ContainerAsyncRequest object");
             Console.WriteLine("   The error reported was: " +
             RequestResults[0].errors[0].message + "
");
          }
       }
       else
       {
          Console.WriteLine("Error: could not create Class Member ");
          Console.WriteLine("   The error reported was: " +
          MembersResults[0].errors[0].message + "
");
       }
    }
    else
    {
    .. Console.WriteLine("Error: could not create MetadataContainer ");
       Console.WriteLine("   The error reported was: " +
       containerResults[0].errors[0].message + "
");
    }
 }
```

```apex
//use the ID of the class from the previous step
   string classId = "01pA00000036itIIAQ";
   QueryResult queryResult = null;
   String soql = "SELECT ContentEntityId, SymbolTable FROM ApexClassMember where ContentEntityId = '" + classId + "'";

   queryResult = sforce.query(soql);
   if (queryResult.size > 0)
   {
      ApexClassMember apexClass = (ApexClassMember)queryResult.records[0];
      SymbolTable symbolTable = apexClass.SymbolTable;

      foreach (Method _method in symbolTable.methods)
      {
         //here's the SayHello method
         String _methodName = _method.name;

         //report the modifiers on the method such as global, public, private, or static
         String _methodVisibility = _method.modifiers;

         //get the method's return type
         string _methodReturnType = _method.returnType;

         //get the fName & lName parameters
         foreach (Parameter _parameter in _method.parameters)
         {
            string _paramName = _parameter.name;
            string _parmType = _parameter.type;
         }
      }
   }
   else
   {
      //unable to locate class
   }
```

```
//use the ID of the class from the first sample.
   string classId = "01pA00000036itIIAQ";

   ApexExecutionOverlayAction action = new ApexExecutionOverlayAction();
   action.ExecutableEntityId = classId;
   action.Line = 3;
   action.LineSpecified = true;
   action.Iteration = 1;
   action.IterationSpecified = true;
   ApexExecutionOverlayAction[] actions = { action };

   SaveResult[] actionResults = sforce.create(actions);
   if (actionResults[0].success)
   {
      // checkpoint created successfully
   }
   else
   {
      Console.WriteLine("Error: could not create Checkpoint ");
      Console.WriteLine("   The error reported was: " +
      actionResults[0].errors[0].message + "
");
   }
```

## Related Topics

- ApexTestQueueItem (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextestqueueitem.htm)
- SOAP Headers for Tooling API (atlas.en-us.api_tooling.meta/api_tooling/intro_api_tooling_soap_headers.htm)
- ApexClass (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexclass.htm)
- ContainerAsyncRequest (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_containerasyncrequest.htm)
- MetadataContainer (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacontainer.htm)
- ApexClassMember (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexclassmember.htm)
- ApexTriggerMember (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextriggermember.htm)
- ApexComponentMember (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexcomponentmember.htm)
- ApexPageMember (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexpagemember.htm)
- SymbolTable (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_symboltable.htm)
