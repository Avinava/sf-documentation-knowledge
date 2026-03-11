---
title: "Deploying and Retrieving Metadata"
domain: metadata-api
topic: deploying-and-retrieving-metadata
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:50.168Z
keywords: [Deploying, Retrieving, Metadata, Example, See]
---

# Deploying and Retrieving Metadata

# Deploying and Retrieving Metadata

Use the [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.") and [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.") calls to move metadata (XML files) between a Salesforce org and a local file system. After you retrieve your XML files into a file system, you can manage changes in a source-code control system, copy and paste code or setup configurations, diff changes to components, and perform many other file-based development operations. At any time you can deploy those changes to another Salesforce org.

Data in XML files is formatted using the English (United States) locale. This formatting ensures that fields that depend on locale, such as date fields, are interpreted consistently during data migrations between organizations using different languages. Organizations can support multiple languages for presentation to their users.

The [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.") and [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.") calls are used primarily for these development scenarios:

-   Development of a custom application (or customization) in a sandbox organization. After development and testing are completed, the application or customization is then deployed into a production organization using Metadata API.
-   Team development of an application in a Developer Edition organization. After development and testing are completed, you can then distribute the application via Lightning Platform AppExchange.

You receive an API notification each time you retrieve 90% or more of the maximum number of custom fields that you can deploy at once with Metadata API. The maximum number of custom fields for one deployment is 45,000. The custom fields retrieved in one package.xml file are: 1) the sum of the fields on each object in the CustomObjects section of package.xml and 2) the sum of the custom fields in the CustomFields section of package.xml.

You can still retrieve above the deployable maximum up to [the limit on total size of retrieved files](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm). But you must use more than one deployment to deploy all of the custom fields.

## Example

Warning: You’ve retrieved 47,000 instances of CustomField. You can’t redeploy all these instances at the same time; the maximum is 45,000.

#### See Also

-   [Metadata Components and Types](atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm "Metadata components are not based on sObjects, like objects in the API. Instead, they are based on metadata types, such as ApexClass and CustomObject, which extend Metadata, the base class for all metadata types. A component is an instance of a metadata type.")
    
-   [Unsupported Metadata Types](atlas.en-us.api_meta.meta/api_meta/meta_unsupported_types.htm "Some Salesforce features have metadata types that aren’t available in Metadata API. These metadata types can’t be retrieved or deployed with Metadata API. To make changes to these types, you must do it manually in each of your organizations.")
    
-   [Metadata Type Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_metadata_type_limits.htm)