---
title: "Developer Community Integration Scenario"
domain: mc-apis
topic: developer-community-integration-scenario
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:16.686Z
estimatedTokens: 1683
keywords: [Scenario, Scaling, Developer, Community, Integration, Owen, manages, CRM, system, Northern, Trail, Outfitters, part, duties, include, planning, new, Marketing, Cloud, account, wishes, database, record, staff, wants, Understanding, Model, Creating, Import, Definition, Manipulating, Extracting, Handling, Errors, Exceptions, Items]
---

> Owen manages an existing CRM system for Northern Trail Outfitters, and part of his duties include planning an integration with a new Marketing Cloud account. While Northern Trail Outfitters wishes to use the CRM as the database of record, the marketing staff wants to use information from that CRM to

# Developer Community Integration Scenario

## Scenario

Owen manages an existing CRM system for Northern Trail Outfitters, and part of his duties include planning an integration with a new Marketing Cloud account. While Northern Trail Outfitters wishes to use the CRM as the database of record, the marketing staff wants to use information from that CRM to send emails to customers and subscribers. Those email messages include:

-   A welcome email sent to new customers
-   A monthly newsletter sent to opted-in subscribers
-   Transactional emails based off of customer activities on the Northern Trail Outfitters website, such as reminders about special events for which a customer has signed up

Northern Trail Outfitters also wants to use the integration to perform analytic tasks on the data, both in Marketing Cloud and the CRM system.

Owen's tasks focus primary on the integration of the information of the two systems, as marketing handles the creating and sending of the email messages. He is working in a .NET/C# environment and receives the appropriate Marketing Cloud credentials from his supervisor.

![OwenCRMSystem.jpg](/docs/resources/img/en-us/noversion?doc_id=images%2Fowencrmsystem.jpg&folder=mc-apis)

Before doing anything else, Owen must successfully connect his development environment to the Marketing Cloud SOAP API. Since he is writing .NET/C# code, Owen connects using Visual Studio and successfully executes a call to retrieve the availability status of the API.

Owen also researches authentication issues to make sure the two systems can interact. He discovers how to get a usertoken for entity direct login, allowing his CRM application to directly access sections of Marketing Cloud and have them show up directly in the CRM system.

## Understanding the Data Model

Owen decides to store subscriber information in Marketing Cloud on data extensions to facilitate the exchange of information between the two systems. Now, he has to decide how to move the data from one system to another in order to keep both systems in sync regarding the most current data.

At this point, Owen turns to the documentation to determine how to perform the following actions:

-   Import existing CRM data into Marketing Cloud
-   Update information within Marketing Cloud based on what actions the subscriber takes
-   Export updated information and mail analytics information back into the CRM system

Owen learns about import definitions as a method of getting information into Marketing Cloud. He also learns about retrieving information from data extensions as a method of getting information out of data extensions programmatically. Finally, Owen learns about different methods of mapping fields between Marketing Cloud and the CRM system to make sure that all information ends up in the correct place.

Once he has reviewed all of the available information on imports, data extensions, and mapping, Owen familiarizes himself with the available API guidelines and best practices to ensure his code is efficient and complete.

![OwenCRMSystem2.jpg](/docs/resources/img/en-us/noversion?doc_id=images%2Fowencrmsystem2.jpg&folder=mc-apis)

Owen learns that the actual mapping of the fields occurs within the import definition. However, before the import can take place, he must make sure the data extension fields have the correct data type to receive the information from the CRM system. The correct fields also facilitate moving information back into the CRM system.

## Creating the Import Definition

Owen creates the import definition starting with a single user and a single data extension. The import definition uses CSV data exported from the CRM system and placed on the Marketing Cloud enhanced FTP site. This site hosts the file until the import definition picks up the file and imports the information into the appropriate data extension.

## Manipulating Data Within Marketing Cloud

Owen learns that information within Marketing Cloud receives updates based on the actions a subscriber takes on an email. This can include tracking information, updates to subscriber information, or unsubscribing from future email sends. The application can also segment out data using filters and query activities. Owen uses a combination of these features to segment out updated users and prepare files to be exported from Marketing Cloud:

1.  Owen creates data filters to segment out subscribers based on their behavior regarding the email messages (such as customer service survey responses or messages not opened).
2.  Owen creates query activities to segment out subscribers in the same geographical location.

## Extracting Information From Marketing Cloud

To export information from Marketing Cloud, Owen creates and performs an extract to move information back to the FTP site.

## Using Tracking Information

Based on the tracking information returned to Owen, he can update records in the CRM to reflect any changes in contact information or behavior. Any changes made in the CRM system can also be re-imported into Marketing Cloud using the import definitions previously mentioned.

## Handling Errors and Exceptions

Owen wants to implement error and exception handling so that the system does not inadvertantly import the same data multiple times or erase previously imported data. He consults the data management best practices for the best way to plan.

Owen also learns the error code information sounding the import process.

## Scaling

At this point, Owen wishes to scale his operation to handle the following aspects:

-   Handling multiple data extensions
-   Adding more automation
-   Pulling in data from a 3rd party (such as a web analytics firm)

## Related Items

-   [Connect to the API using WCF](atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_web_service_api_using_wcf.htm)
-   [Retrieve the Availability Status of a Marketing Cloud Account](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_the_availability_status_of_an_exacttarget_account.htm)
-   [Create an Import Definition](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_an_import_definition.htm)
-   [Create a FilterDefinition Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_filterdefinition_object.htm)
-   [Create a Query Activity](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_query_activity.htm)
-   [Create a Data Extract](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_data_extract_activity_with_the_soap_web_service_api.htm)
-   [SOAP API Best Practices](atlas.en-us.noversion.mc-apis.meta/mc-apis/soap_api_best_practices.htm)
-   [43000-43999 ImportDefinition Object Error Codes](atlas.en-us.noversion.mc-apis.meta/mc-apis/43000_43999_importdefinition_object.htm)

## Related Topics

- Connect to the API using WCF (atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_web_service_api_using_wcf.htm)
- Retrieve the Availability Status of a Marketing Cloud Account (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_the_availability_status_of_an_exacttarget_account.htm)
- Create an Import Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_an_import_definition.htm)
- Create a FilterDefinition Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_filterdefinition_object.htm)
- Create a Query Activity (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_query_activity.htm)
- Create a Data Extract (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_data_extract_activity_with_the_soap_web_service_api.htm)
- SOAP API Best Practices (atlas.en-us.noversion.mc-apis.meta/mc-apis/soap_api_best_practices.htm)
- 43000-43999 ImportDefinition Object Error Codes (atlas.en-us.noversion.mc-apis.meta/mc-apis/43000_43999_importdefinition_object.htm)
