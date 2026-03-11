---
title: "Understanding Metadata API"
domain: metadata-api
topic: understanding-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:53.172Z
keywords: [Understanding, Metadata, API, Salesforce, Functionality, See]
---

# Understanding Metadata API

# Understanding Metadata API

## Salesforce Metadata

Metadata is data that describes other data. To understand how Salesforce defines metadata, contrast business data with Salesforce metadata. Business data includes the records that directly correspond to your company’s business such as an address, account, or product. Salesforce metadata describes the schema, process, presentation, authorization, and general configuration of your Salesforce org.

To contrast Salesforce metadata with business data, first examine how schema metadata describes the properties of business data. For example, the Salesforce standard object [Address](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_address.htm) has schema metadata and business data. Address fields such as Address Type, City, and Postal Code, are all schema metadata. The corresponding values in each field, such as Mailing address, Chicago, IL, and 60106, are all data. While personally identifiable information (PII) is usually found in business data, metadata can also include PII, such as custom object names, report names, etc.

Metadata in Salesforce also defines how your org functions. For example, process metadata describes what happens when a user presses the Save button. Presentation metadata concerns the layout of your org, and authorization metadata determines user access. Salesforce metadata also describes your org’s general configuration. For example, you can configure Chatter to block emoticons in posts.

Metadata API works with metadata types and components. A metadata type defines the structure of application metadata. A metadata component is an instance of a metadata type. The fields and values of a metadata type are all metadata. For example, the metadata type [CustomTab](atlas.en-us.api_meta.meta/api_meta/meta_tab.htm "Represents a custom tab. Custom tabs let you display custom object data or other web content in Salesforce. When you add a custom tab to an app in Salesforce Classic, it appears as a tab. When you add a custom tab to an app in Lightning Experience, it appears as an item in the app’s navigation bar and in the App Launcher. When a tab displays a custom object, the tab name is the same as the custom object name. For page, s-control, or URL tabs, the name is arbitrary.") represents a custom tab that displays content. The CustomTab field hasSidebar indicates if the tab is on the sidebar panel, which is an example of metadata determining presentation. Metadata types like CustomTab build the metadata model that describe how your org is structured, displayed, or functions. Use Metadata API to develop customizations and build tools that manage the metadata model, not the data itself.

## Metadata API Functionality

The main purpose of Metadata API is to move metadata between Salesforce orgs during the development process. Use Metadata API to deploy, retrieve, create, update, or delete customization information, such as custom object definitions and page layouts. Metadata API doesn’t work directly with business data. To create, retrieve, update, or delete records such as accounts or leads, use [SOAP API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/ "HTML (New Window)") or [REST API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/ "HTML (New Window)").

You can move metadata with one of two ways. The first method is with Metadata API deploy() and retrieve() calls. Admins often use the deploy() and retrieve() calls to move the full metadata model. These calls are best fit for the final stages of development, such as deploying tested customizations to the production org.

The second method is source push and pull commands that move only changes in metadata. These commands use source tracking, which makes them friendlier for developers and better for intermediary stages of development.

#### See Also

-   [Metadata Components and Types](atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm "Metadata components are not based on sObjects, like objects in the API. Instead, they are based on metadata types, such as ApexClass and CustomObject, which extend Metadata, the base class for all metadata types. A component is an instance of a metadata type.")
    
-   [Deploying and Retrieving Metadata](atlas.en-us.api_meta.meta/api_meta/file_based.htm)
    
-   [source Commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_source.htm#cli_reference_force_source)