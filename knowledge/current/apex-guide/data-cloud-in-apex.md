---
title: "Data Cloud In Apex"
domain: apex-guide
topic: data-cloud-in-apex
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:32.132Z
estimatedTokens: 910
keywords: [Data, Cloud, Apex, objects, constraints, considerations, detailed, topic, Further, mock, SOQL, query, responses, data, model, DMOs, testing, stub, test, class.]
---

# Data Cloud In Apex

> You can use Apex with Data Cloud objects, with constraints and considerations that
        are detailed in this topic . Further, you can mock SOQL query responses for Data Cloud data
        model objects (DMOs) in Apex testing by using SOQL stub methods and a test
        class.

# Data Cloud In Apex

You can use Apex with Data Cloud objects, with constraints and considerations that are detailed in this topic . Further, you can mock SOQL query responses for Data Cloud data model objects (DMOs) in Apex testing by using SOQL stub methods and a test class.

## Using SOQL in Apex with Data Cloud Objects

Static SOQL is supported with Data Cloud data model objects (DMOs) as a more direct alternative to using either dynamic SOQL or ConnectAPI. Additionally, SOQL queries against DMOs using Apex Database.QueryLocator or in FOR loops is supported in API version 61.0 and later. In versions earlier than 61.0, only the first 201 records are returned. Batch Apex is blocked against DMOs when using QueryLocators, but is supported when using Iterable.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexcode)

#### Warning

Running SOQL queries against DMOs can result in Data Services credits being consumed from your Data Cloud subscription. For more information on how usage is billed, see [Data Cloud Billable Usage Types](https://help.salesforce.com/s/articleView?id=data.c360_a_data_usage_types.htm&type=5&language=en_US). Use caution when using FOR loops, query locators, recursion, or any mechanism that can result in multiple queries to Data Cloud.

A static SOQL query against Data Cloud from Apex is considered a callout and is subject to the same restrictions as HTTP callouts from Apex. For example, if there is pending DML, this sample code can result in an unexpected exception with this message: UnexpectedException: A callout was unsuccessful because of pending uncommitted work related to a process, flow, or Apex operation. Commit or roll back the work, and then try again.

insert new Account(Name='Test'); List<ssot\_Account\_dlm> dmo1 = \[Select Id from ssot\_Account\_dlm\];

## Security Considerations

You must consider field- and record-level access when using Apex with Data Cloud data model objects (DMOs). DMOs in all data spaces are accessible from Apex in system mode, even when a permission set for the data space isn’t explicitly assigned. Read-only object-level access checks are supported if the user has access to the data space. There’s currently no support for field-level security or for record-level access control. Apex features, such as WITH USER\_MODE, WITH SECURITY\_ENFORCED, describe calls, and  Security.stripInaccessible(), can check only object-level access for DMOs.

Starting with API version 61.0, you can get information on a specific DMO using SObjectType.getDescribe(). There’s no field-level security to be enforced because all fields on DMOs that are accessed by field describes and security model checks are read only. You can’t use Schema.getGlobalDescribe() to discover exposed DMOs. Instead, use the Schema.describeSObjects(List<String>) method with the known DMO API names.

This example uses static SOQL with the UnifiedIndividual\_\_dlm Data Cloud object.

//Static SOQL example List<UnifiedIndividual\_\_dlm> unifiedIndividuals = \[ SELECT Id, ssot\_\_FirstName\_\_c, ssot\_\_LastName\_\_c, ssot\_\_Email\_\_c, ssot\_\_SkyMilesBalance\_\_c, ssot\_\_MedallionStatus\_\_c FROM UnifiedIndividual\_\_dlm WHERE ssot\_\_CompanyId\_\_c = :companyId \];

-   **[Mock SOQL Tests for Data Cloud Data Model Objects](atlas.en-us.apexcode.meta/apexcode/MockSOQLTestsForDMOs.htm)**
    You can mock SOQL query responses for Data Cloud data model objects (DMOs) in Apex testing by using the new SOQL stub methods and a new test class. Use static or dynamic SOQL queries against DMOs and return mock records in a testing context.

## Related Topics

- Mock SOQL Tests for Data Cloud Data Model Objects (atlas.en-us.apexcode.meta/apexcode/MockSOQLTestsForDMOs.htm)
