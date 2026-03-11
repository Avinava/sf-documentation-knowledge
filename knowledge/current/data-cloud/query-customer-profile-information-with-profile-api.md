---
title: "Query Customer Profile Information with Profile API"
domain: data-cloud
topic: query-customer-profile-information-with-profile-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.405Z
keywords: [Query, Customer, Profile, Information, API, Note, Key, Properties, Call, Reference, Connected, App, Setup, Important, Acquire, Exchange, Access, Token, Data, Cloud]
---

# Query Customer Profile Information with Profile API

# Query Customer Profile Information with Profile API

Data Cloud Profile API calls are used to look up and search customer profile information. These API calls can be included in your external web or mobile apps to look up customer profile information.

Using Data Cloud Profile API calls, you can build the complete Data Cloud pages by retrieving the Profile info along with computed engagement insights.

The calls only support the data model objects in the profile category, such as Individual, Contact Point Email, Unified Individual, and Contact Point Address. They also support retrieving the computed attributes related to the Individual field. For example, the computed value of the **total sales quantity in the last 6 months** for a customer profile.

These calls do NOT support the engagement category data model objects like Sales Order.

Data Cloud Profile API calls follow the REST standard specification.

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

Unified profile objects that are filtered on the index column have accelerated response rates. Other Profile category objects can’t guarantee a faster response.

## Key Properties

-   You must explicitly specify the fields you want to retrieve, or only the data from the first 10 alphabetically sorted fields or attributes of the entity will be included in your response. This restriction of 10 fields doesn’t apply when you explicitly mention the field names.
-   You can retrieve a maximum of 50 fields.
-   Only the AND logical operator and equality comparator operator are supported.
-   There are no limits on the number of filters you can have in your query.
-   The default return limit is 49,999 rows. A max limit of 49,999 is allowed.
-   For date and time fields, use the format:
    
    ```
    
    ```
    

## Call Reference

[GET /api/v1/profile/metadata](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_profile_meta.htm "Returns the list of data model objects, their fields, and category.")

[GET /api/v1/profile/metadata/{dataModelName}](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_profile_meta_dmname.htm "Returns the metadata for the data model object. Metadata includes the list of fields, data types, and indexes available for lookup.")

[GET /api/v1/profile/{dataModelName}](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_profile_dmname.htm "Returns data model objects based on search filters. Use this API call to retrieve the object records after applying the selected filters.")

[GET /api/v1/profile/{dataModelName}/{Id}](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_profile_dmname_id.htm "Returns data model objects based on search indexes and filters. Use this API call to retrieve the object record based on the primary key or secondary keys. Returns an empty list when records aren’t found.")

[GET /api/v1/profile/{dataModelName}/{Id}/{childDataModelName}](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_profile_dmname_id_child_dmname.htm "Returns data model objects and child objects based on indexes and search filters.")

[GET /api/v1/profile/{dataModelName}/{Id}/calculated-insights/{ci-name}](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_profile_dmname_id_ci_ci_name.htm "Returns data model objects and a computed view based on indexes and search filters.")

## Connected App Setup

![Important](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note_important.png&folder=c360a_api)

#### Important

Your orgs must be provisioned with Data Cloud licenses and the users must be assigned to appropriate roles for having full access to objects in the Data Cloud. Refer to [User Roles and Permission Sets in Data Cloud](https://help.salesforce.com/s/articleView?id=sf.c360_a_userpermissions.htm&type=5&language=en_US) before setting up the Connected App.

[Set Up a Connected App](https://help.salesforce.com/s/articleView?id=sf.c360_a_set_up_tableau_connected_app.htm&type=5&language=en_US) to discover new insights about your customers.

## Acquire and Exchange Your Access Token for Data Cloud

Refer to [Getting Started](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_getting_started_with_cdp.htm "Use this section to understand the prerequisites required to get started with Data Cloud API libraries and SDKs.") page to acquire the token.

## Troubleshooting

If you receive the User hasn't approved this consumer yet error message, double-check the following configuration parameters:

-   Make sure you have Users may self-authorize in the connected app configuration.
-   Make sure you select refresh\_token scope and AT LEAST one other scope apart from this (not counting custom scopes).
-   In the self-authorization URL, set the scope parameter value as api refresh\_token cdpquery cdpprofile.
-   The first time you call the self-authorization URL, you must respond to a consent page asking for permission for each of the scopes you requested in the URL.

-   **[GET /api/v1/profile/metadata](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_profile_meta.htm)**  
    Returns the list of data model objects, their fields, and category.
-   **[GET /api/v1/profile/metadata/{dataModelName}](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_profile_meta_dmname.htm)**  
    Returns the metadata for the data model object. Metadata includes the list of fields, data types, and indexes available for lookup.
-   **[GET /api/v1/profile/{dataModelName}](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_profile_dmname.htm)**  
    Returns data model objects based on search filters. Use this API call to retrieve the object records after applying the selected filters.
-   **[GET /api/v1/profile/{dataModelName}/{Id}](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_profile_dmname_id.htm)**  
    Returns data model objects based on search indexes and filters. Use this API call to retrieve the object record based on the primary key or secondary keys. Returns an empty list when records aren’t found.
-   **[GET /api/v1/profile/{dataModelName}/{Id}/{childDataModelName}](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_profile_dmname_id_child_dmname.htm)**  
    Returns data model objects and child objects based on indexes and search filters.
-   **[GET /api/v1/profile/{dataModelName}/{Id}/calculated-insights/{ci-name}](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_profile_dmname_id_ci_ci_name.htm)**  
    Returns data model objects and a computed view based on indexes and search filters.

#### See Also

-   [API Limits for Profile, Query, and Calculated Insights](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_limits.htm "There are three distinct classes of APIs used to extract data from Data Cloud (formerly Customer Data Platform): Profile, Query, and Calculated Insights.")