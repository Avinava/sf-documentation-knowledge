---
title: "RetrieveRequest"
domain: mc-apis
topic: retrieverequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:18.760Z
estimatedTokens: 849
keywords: [RetrieveRequest, retrieves, system, Items]
---

> The RetrieveRequest object retrieves data from the system.

# RetrieveRequest

The RetrieveRequest object retrieves data from the system.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ClientIDs | ClientID[] | Specifies accounts and sub-accounts, including Enterprise 2.0, On-Your-Behalf, and Lock & Publish accounts, from which to retrieve data. |
| ContinueRequest | xsd:string | Represents the RequestID that identifies a previous Retrieve requestto continue processing (returns the next available batch of data for that request). |
| Filter | FilterPart | Specifies filter to apply to retrieve. |
| ObjectType | xsd:string | Specifies whether the object is a List, Subscriber, Email, or other type of object. |
| Options | RetrieveOptions | Options associated with a request. For a Configure call, options include CREATE or DELETE. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| Properties | xsd:ArrayOfString | Specifies an array of property definitions available for an object type. You can retrieve allowed properties using the Describe method. |
| QueryAllAccounts | xsd:boolean | Queries all accounts, including parent and all children, regarding an event (ignores specified ClientIDs). |
| RepeatLastResult | xsd:boolean | Used with RetrieveAllSinceLastBatch option to repeat returning a date-based request. |
| RespondTo | AsyncResponse[] | Reserved for future use. |
| RetrieveAllSinceLastBatch | xsd:boolean | Retrieve all data since last retrieve context. Works with added and modified data. You must include the same properties and filters as the previous request. |
| Retrieves | Request[] | Reserved for future use. |

## Related Items

-   [Retrieve a Subscriber](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve_a_subscriber_via_the_web_service_api.htm "Retrieve_a_Subscriber_Via_the_Web_Service_API")
-   [Retrieve Sent Event Details](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve_sentevent_details_for_job.htm "Retrieve_SentEvent_Details_for_Job")
-   [Retrieve a Triggered Send Summary](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_a_triggered_send_summary.htm "Retrieving_a_Triggered_Send_Summary")
-   [Retrieve Additional Email Attributes](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_additional_email_attributes.htm "Retrieving_Additional_Email_Attributes")
-   [Retrieve All Lists a Subscriber is On](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_all_lists_a_subscriber_is_on.htm "Retrieving_All_Lists_a_Subscriber_is_On")
-   [Retrieve All Lists for a Send](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_all_lists_for_a_send.htm "Retrieving_All_Lists_for_a_Send")
-   [Retrieve All Subscribers on a List](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_all_subscribers_on_a_list.htm "Retrieving_All_Subscribers_on_a_List")
-   [Retrieve the Audience of an Email Send Definition](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_audience_of_send_definition.htm "Retrieving_Audience_of_Send_Definition")
-   [Retrieve Data from a Data Extension](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_data_from_a_data_extension.htm "Retrieving_Data_from_a_Data_Extension")
-   [Retrieve the Results of an Import](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_the_results_of_an_import.htm "Retrieving_the_Results_of_an_Import")

## Related Topics

- Retrieve a Subscriber (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve_a_subscriber_via_the_web_service_api.htm)
- Retrieve Sent Event Details (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve_sentevent_details_for_job.htm)
- Retrieve a Triggered Send Summary (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_a_triggered_send_summary.htm)
- Retrieve Additional Email Attributes (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_additional_email_attributes.htm)
- Retrieve All Lists a Subscriber is On (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_all_lists_a_subscriber_is_on.htm)
- Retrieve All Lists for a Send (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_all_lists_for_a_send.htm)
- Retrieve All Subscribers on a List (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_all_subscribers_on_a_list.htm)
- Retrieve the Audience of an Email Send Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_audience_of_send_definition.htm)
- Retrieve Data from a Data Extension (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_data_from_a_data_extension.htm)
- Retrieve the Results of an Import (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_the_results_of_an_import.htm)
