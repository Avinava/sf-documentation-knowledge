---
title: "When to Use Tooling API"
domain: tooling-api
topic: when-to-use-tooling-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.002Z
keywords: [Tooling, API, See]
---

# When to Use Tooling API

# When to Use Tooling API

Use Tooling API when you need fine-grained access to an org’s metadata. Tooling API’s SOQL capabilities for many metadata types allow you to retrieve smaller pieces of metadata. Smaller retrieves improve performance, which makes Tooling API a better fit for developing interactive applications.

Because Tooling API allows you to change just one element within a complex type, it can be easier to use than Metadata API. Other use cases include:

-   Source control integration
-   Continuous integration
-   Apex classes or trigger deployment

Some of the specific tasks you can accomplish using the Tooling API:

Retrieve metadata about an object’s field

Use [FieldDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_fielddefinition.htm "Represents a standard or custom field, providing row-based access to field metadata. Contrast FieldDefinition with EntityParticle, which represents each element of a field that can be presented in a user interface. FieldDefinition has parity with metadata type Field.").

Retrieve custom or standard object properties

Use [EntityDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_entitydefinition.htm "Provides row-based access to metadata about standard and custom objects.").

Manage working copies of Apex classes and triggers and Visualforce pages and components.

Use [ApexClassMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexclassmember.htm "Represents the working copy of an Apex class for editing, saving, or compiling in a MetadataContainer."), [ApexTriggerMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextriggermember.htm "Represents the working copy of an Apex trigger for editing, saving, or compiling in a MetadataContainer."), [ApexPageMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexpagemember.htm "Represents the working copy of a Visualforce page for editing, saving, or compiling in a MetadataContainer."), [ApexComponentMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexcomponentmember.htm "Represents the working copy of a Visualforce component for editing, saving, or compiling in a MetadataContainer."), and [MetadataContainer](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacontainer.htm "Manages working copies of ApexClassMember, ApexTriggerMember, ApexPageMember, and ApexComponentMember objects, including collections of objects to be deployed together.") .

Manage working copies of static resource files.

Use [StaticResource](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_staticresource.htm "Represents the working copy of a static resource file for editing or saving. Static resources allow you to upload content that you can reference in a Visualforce page, including images, stylesheets, JavaScript, and other files. Available in Tooling API version 29.0 and later.").

Check for updates and errors in working copies of Apex classes and triggers and Visualforce pages and components.

[ContainerAsyncRequest](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_containerasyncrequest.htm "Allows you to compile and asynchronously deploy a MetadataContainer object to your organization.")

Commit changes to your organization.

Use [ContainerAsyncRequest](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_containerasyncrequest.htm "Allows you to compile and asynchronously deploy a MetadataContainer object to your organization.").

Set heap dump markers.

Use [ApexExecutionOverlayAction](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexexecutionoverlayaction.htm "Specifies an Apex code snippet or SOQL query to execute at a specific line of code in an Apex class or trigger. Optionally, generates a heap dump.")

Overlay Apex code or SOQL statements on an Apex execution.

Use [ApexExecutionOverlayAction](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexexecutionoverlayaction.htm "Specifies an Apex code snippet or SOQL query to execute at a specific line of code in an Apex class or trigger. Optionally, generates a heap dump.").

Execute anonymous Apex.

For sample code, see [SOAP Calls](atlas.en-us.api_tooling.meta/api_tooling/intro_soap_overview.htm) and [REST Overview](atlas.en-us.api_tooling.meta/api_tooling/intro_rest_overview.htm "Use REST if you’re using a language that isn’t strongly typed, like JavaScript.").

Generate log files for yourself or for other users.

Set checkpoints with [TraceFlag](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_traceflag.htm "Represents a trace flag that triggers an Apex debug log at the specified logging level.")

Access debug log and heap dump files.

Use [ApexLog](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexlog.htm "Represents a debug log.") and [ApexExecutionOverlayResult](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexexecutionoverlayresult.htm "Represents the result from the Apex code snippet or SOQL query defined in the associated ApexExecutionOverlayAction, and the resulting heap dump if one was returned. Available from API version 28.0 or later.").

Manage custom fields on custom objects.

Use [CustomField](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_customfield.htm "Represents a custom field on a custom object that stores data unique to your organization. Includes access to the associated CustomField object and related fields in Salesforce Metadata API. Available from API version 28.0 or later.").

Access code coverage results.

Use [ApexCodeCoverage](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexcodecoverage.htm "Represents code coverage test results for an Apex class or trigger. Available in Tooling API version 29.0 and later."), [ApexOrgWideCoverage](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexorgwidecoverage.htm "Represents code coverage test results for an entire organization. Available in Tooling API version 29.0 and later."), and [ApexCodeCoverageAggregate](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexcodecoverageaggregate.htm "Represents aggregate code coverage test results for an Apex class or trigger. Available in Tooling API version 29.0 and later.").

Execute tests, and manage test results.

Use [ApexTestQueueItem](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextestqueueitem.htm "Represents a single Apex class in the Apex job queue. Available in API version 30.0 and later.") and [ApexTestResult](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextestresult.htm "Represents the result of an Apex test method execution. Available from API version 30.0 or later.").

Manage validation rules and workflow rules.

Use [ValidationRule](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_validationrule.htm "Represents a validation rule or workflow rule which specifies the formula for when a condition is met. Available from API version 34.0 or later.") and [WorkflowRule](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_workflowrule.htm "Represents a workflow rule that is used to fire off a specific workflow action when the specified criteria is met. Includes access to the associated WorkflowRule object in Salesforce Metadata API.").

#### See Also

-   [REST Overview](atlas.en-us.api_tooling.meta/api_tooling/intro_rest_overview.htm "Use REST if you’re using a language that isn’t strongly typed, like JavaScript.")
    
-   [SOAP Calls](atlas.en-us.api_tooling.meta/api_tooling/intro_soap_overview.htm)