---
title: "ManagedContent Class"
domain: apex-reference
topic: managedcontent-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.391Z
estimatedTokens: 19548
namespace: ConnectApi
keywords: [ManagedContent, Clone, managed, content., Create, get, delete, update, digital, asset, management, DAM, provider, instance., Delete, replace, variants., Get, channels., content]
---

# ManagedContent Class

> Clone managed content. Create and get managed content. Create, delete, or update a
  digital asset management (DAM) provider instance. Delete and replace variants. Get channels. Get a
  managed content space. Get DAM providers. Get targets that managed content space folders can be
  shared with. Get and update targets that managed content space folders are shared with. Publish
  and unpublish content.

**Namespace:** `ConnectApi`

# ManagedContent Class

Clone managed content. Create and get managed content. Create, delete, or update a digital asset management (DAM) provider instance. Delete and replace variants. Get channels. Get a managed content space. Get DAM providers. Get targets that managed content space folders can be shared with. Get and update targets that managed content space folders are shared with. Publish and unpublish content.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## ManagedContent Methods

These methods are for ManagedContent. All methods are static.

-   **[cloneManagedContentDocument(contentKeyOrId, ManagedContentCloneInputParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_cloneManagedContentDocument_1)**
    Clone a piece of managed content.
-   **[createManagedContent(ManagedContentInputParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_createManagedContent_1)**
    Create managed content.
-   **[createManagedContentProvider(providerInstanceInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_createManagedContentProvider_2)**
    Create a digital asset management (DAM) provider instance.
-   **[createManagedContentWithMedia(ManagedContentInputParam, contentData)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_createManagedContentWithMedia_2)**
    Create managed content with content data.
-   **[deleteManagedContentProviderInstance(providerInstanceId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_deleteManagedContentProviderInstance_1)**
    Delete a digital asset management (DAM) provider instance.
-   **[deleteManagedContentVariant(variantId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_deleteManagedContentVariant_1)**
    Delete a managed content variant.
-   **[getAllContent(channelId, pageParam, pageSize, language, managedContentType, includeMetadata, startDate, endDate)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getAllContent_1)**
    Get all managed content versions for a channel.
-   **[getAllContent(channelId, pageParam, pageSize, language, managedContentType, includeMetadata, startDate, endDate, showAbsoluteUrl)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getAllContent_2)**
    Get all managed content versions for a channel with absolute URLs.
-   **[getAllDeliveryChannels(pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getAllDeliveryChannels_1)**
    Get managed content delivery channels for the context user.
-   **[getAllManagedContent(communityId, pageParam, pageSize, language, managedContentType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getAllManagedContent_1)**
    Get all managed content versions for an Experience Cloud site.
-   **[getAllManagedContent(communityId, pageParam, pageSize, language, managedContentType, showAbsoluteUrl)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getAllManagedContent_2)**
    Get all managed content versions for an Experience Cloud site with absolute URLs.
-   **[getContentByContentKeys(channelId, contentKeys, pageParam, pageSize, language, managedContentType, includeMetadata, startDate, endDate, showAbsoluteUrl)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getContentByContentKeys_2)**
    Get managed content versions for a channel using a list of content keys.
-   **[getContentByIds(channelId, managedContentIds, pageParam, pageSize, language, managedContentType, includeMetadata, startDate, endDate)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getContentByIds_2)**
    Get managed content versions for a channel using a list of managed content IDs.
-   **[getContentByIds(channelId, managedContentIds, pageParam, pageSize, language, managedContentType, includeMetadata, startDate, endDate, showAbsoluteUrl)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getContentByIds_3)**
    Get managed content versions for a channel with absolute URLs using a list of managed content IDs.
-   **[getManagedContentByContentKeys(communityId, contentKeys, pageParam, pageSize, language, managedContentType, showAbsoluteUrl)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentByContentKeys_2)**
    Get managed content versions for an Experience Cloud site using a list of content keys.
-   **[getManagedContentByIds(communityId, managedContentIds, pageParam, pageSize, language, managedContentType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentByIds_2)**
    Get managed content versions for an Experience Cloud site using a list of managed content IDs.
-   **[getManagedContentByIds(communityId, managedContentIds, pageParam, pageSize, language, managedContentType, showAbsoluteUrl)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentByIds_3)**
    Get managed content versions for an Experience Cloud site with absolute URLs using a list of managed content IDs.
-   **[getManagedContentByTopics(communityId, topics, pageParam, pageSize, language, managedContentType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentByTopics_3)**
    Get managed content versions using a list of content topic names.
-   **[getManagedContentByTopics(communityId, topics, pageParam, pageSize, language, managedContentType, showAbsoluteUrl)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentByTopics_4)**
    Get managed content versions with absolute URLs using a list of content topic names.
-   **[getManagedContentByTopicsAndContentKeys(communityId, contentKeys, topics, pageParam, pageSize, language, managedContentType, showAbsoluteUrl)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentByTopicsAndContentKeys_3a)**
    Get managed content versions using a list of content keys and content topic names.
-   **[getManagedContentByTopicsAndIds(communityId, managedContentIds, topics, pageParam, pageSize, language, managedContentType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentByTopicsAndIds_4)**
    Get managed content versions using a list of managed content IDs and content topic names.
-   **[getManagedContentByTopicsAndIds(communityId, managedContentIds, topics, pageParam, pageSize, language, managedContentType, showAbsoluteUrl)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentByTopicsAndIds_5)**
    Get managed content versions with absolute URLs using a list of managed content IDs and content topic names.
-   **[getManagedContentProviders()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentProviders_1)**
    Get digital asset management (DAM) providers.
-   **[getManagedContentProvidersForSpace(contentSpaceId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentProvidersForSpace_2)**
    Get digital asset management (DAM) providers for a managed content space.
-   **[getMCSFolderShares(folderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getMCSFolderShares_1)**
    Get targets that a managed content space folder is shared with.
-   **[getMCSFolderShareTargets(folderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getMCSFolderShareTargets_1)**
    Get targets that a managed content space folder can be shared with.
-   **[patchMCSFolderShares(folderId, mcsFolderShareCollectionUpdateInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_patchMCSFolderShares_2)**
    Update the targets that a managed content space folder is shared with.
-   **[publish(publishInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_publish_1)**
    Publish content.
-   **[replaceManagedContentVariant(variantId, ManagedContentVariantInputParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_replaceManagedContentVariant_3)**
    Replace a managed content variant.
-   **[replaceManagedContentVariantWithMedia(variantId, ManagedContentVariantInputParam, contentData)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_replaceManagedContentVariantWithMedia_4)**
    Replace a managed content variant, including content data.
-   **[unpublish(unpublishInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_unpublish_1)**
    Unpublish content.
-   **[updateManagedContentProviderInstance(providerInstanceId, providerInstanceInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_updateManagedContentProviderInstance_2)**
    Update a digital asset management (DAM) provider instance.

### cloneManagedContentDocument(contentKeyOrId, ManagedContentCloneInputParam)

Clone a piece of managed content.

#### API Version

61.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDocumentClone cloneManagedContentDocument(String contentKeyOrId, ConnectApi.ManagedContentDocumentCloneInput ManagedContentCloneInputParam)

#### Parameters

contentKeyOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Content key or ID of the managed content to clone.

ManagedContentCloneInputParam

Type: [ConnectApi.ManagedContentDocumentCloneInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_document_clone.htm "Managed content clone input.")

ConnectApi.ManagedContentDocumentCloneInput class specifying the details for the cloned content.

#### Return Value

Type: [ConnectApi.ManagedContentDocumentClone](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_document_clone.htm "Managed content document clone.")

### createManagedContent(ManagedContentInputParam)

Create managed content.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDocument createManagedContent(ConnectApi.ManagedContentDocumentInput ManagedContentInputParam)

#### Parameters

ManagedContentInputParam

Type: [ConnectApi.ManagedContentDocumentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content.htm "Input representation for a piece of managed content.")

A ConnectApi.ManagedContentDocumentInput input class with information to create managed content.

#### Return Value

Type: [ConnectApi.ManagedContentDocument](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_document.htm "Information about a piece of managed content in an authoring space.")

### createManagedContentProvider(providerInstanceInput)

Create a digital asset management (DAM) provider instance.

#### API Version

65.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentProviderInstance createManagedContentProvider(ConnectApi.ManagedContentProviderInstanceInput providerInstanceInput)

#### Parameters

providerInstanceInput

Type: [ConnectApi.ManagedContentProviderInstanceInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_provider_instance.htm "Create or update a managed content provider instance.")

ConnectApi.ManagedContentProviderInstanceInput class with the required information to create an instance.

#### Return Value

Type: [ConnectApi.ManagedContentProviderInstance](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_provider_instance.htm "Information about a managed content provider instance.")

### createManagedContentWithMedia(ManagedContentInputParam, contentData)

Create managed content with content data.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDocument createManagedContentWithMedia(ConnectApi.ManagedContentDocumentInput ManagedContentInputParam, ConnectApi.BinaryInput contentData)

#### Parameters

ManagedContentInputParam

Type: [ConnectApi.ManagedContentDocumentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content.htm "Input representation for a piece of managed content.")

A ConnectApi.ManagedContentDocumentInput input class with information to create managed content.

contentData

Type: [ConnectApi.BinaryInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

A new binary file of the content data for the managed content.

#### Return Value

Type: [ConnectApi.ManagedContentDocument](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_document.htm "Information about a piece of managed content in an authoring space.")

### deleteManagedContentProviderInstance(providerInstanceId)

Delete a digital asset management (DAM) provider instance.

You can’t delete a DAM provider instance that’s in use. Delete managed content that’s associated with a DAM provider instance before deleting the instance.

#### API Version

65.0

#### Requires Chatter

No

#### Signature

public static Void deleteManagedContentProviderInstance(String providerInstanceId)

#### Parameters

providerInstanceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the provider instance to delete.

#### Return Value

Type: Void

### deleteManagedContentVariant(variantId)

Delete a managed content variant.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static Void deleteManagedContentVariant(String variantId)

#### Parameters

variantId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the variant to delete.

#### Return Value

Type: Void

### getAllContent(channelId, pageParam, pageSize, language, managedContentType, includeMetadata, startDate, endDate)

Get all managed content versions for a channel.

#### API Version

48.0

#### Available to Guest Users

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVersionCollection getAllContent(String channelId, Integer pageParam, Integer pageSize, String language, String managedContentType, Boolean includeMetadata, String startDate, String endDate)

#### Parameters

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. For performance reasons, we recommend 25 or fewer items per page. If you pass in null, the default size is 25.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the context user’s language. If the context user’s language isn’t available, the language defaults to the content type’s original language.

managedContentType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name of the content type, such as cms\_document or cms\_image.

includeMetadata

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include metadata in the response (true) or not (false). The default value is false.

startDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Publish start date in ISO 8601 format, for example, 2011-02-25T18:24:31.000Z.

endDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Publish end date in ISO 8601 format, for example, 2011-02-25T18:24:31.000Z.

#### Return Value

Type: [ConnectApi.ManagedContentVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_version_collection.htm "Collection of managed content versions.")

### getAllContent(channelId, pageParam, pageSize, language, managedContentType, includeMetadata, startDate, endDate, showAbsoluteUrl)

Get all managed content versions for a channel with absolute URLs.

#### API Version

50.0

#### Available to Guest Users

50.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVersionCollection getAllContent(String channelId, Integer pageParam, Integer pageSize, String language, String managedContentType, Boolean includeMetadata, String startDate, String endDate, Boolean showAbsoluteUrl)

#### Parameters

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. For performance reasons, we recommend 25 or fewer items per page. If you pass in null, the default size is 25.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the context user’s language. If the context user’s language isn’t available, the language defaults to the content type’s original language.

managedContentType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name of the content type, such as cms\_document or cms\_image.

includeMetadata

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include metadata in the response (true) or not (false). The default value is false.

startDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Publish start date in ISO 8601 format, for example, 2011-02-25T18:24:31.000Z.

endDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Publish end date in ISO 8601 format, for example, 2011-02-25T18:24:31.000Z.

showAbsoluteUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to show absolute URLs in the output class (true) or not (false). The default value is false.

#### Return Value

Type: [ConnectApi.ManagedContentVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_version_collection.htm "Collection of managed content versions.")

### getAllDeliveryChannels(pageParam, pageSize)

Get managed content delivery channels for the context user.

#### API Version

48.0–61.0

In version 62.0 and later, use [getChannels(pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getChannels_1 "Get managed content delivery channels for the context user.") in the ManagedContentDelivery class to get all delivery channels.

#### Available to Guest Users

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentChannelCollection getAllDeliveryChannels(Integer pageParam, Integer pageSize)

#### Parameters

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.ManagedContentChannelCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel_collection.htm "Collection of managed content channels.")

### getAllManagedContent(communityId, pageParam, pageSize, language, managedContentType)

Get all managed content versions for an Experience Cloud site.

#### API Version

47.0

#### Available to Guest Users

47.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVersionCollection getAllManagedContent(String communityId, Integer pageParam, Integer pageSize, String language, String managedContentType)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. For performance reasons, we recommend 25 or fewer items per page. If you pass in null, the default size is 25.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the context user’s language. If the context user’s language isn’t available, the language defaults to the content type’s original language.

managedContentType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name of the content type, such as cms\_document or cms\_image.

#### Return Value

Type: [ConnectApi.ManagedContentVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_version_collection.htm "Collection of managed content versions.")

### getAllManagedContent(communityId, pageParam, pageSize, language, managedContentType, showAbsoluteUrl)

Get all managed content versions for an Experience Cloud site with absolute URLs.

#### API Version

50.0

#### Available to Guest Users

50.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVersionCollection getAllManagedContent(String communityId, Integer pageParam, Integer pageSize, String language, String managedContentType, Boolean showAbsoluteUrl)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. For performance reasons, we recommend 25 or fewer items per page. If you pass in null, the default size is 25.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the context user’s language. If the context user’s language isn’t available, the language defaults to the content type’s original language.

managedContentType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name of the content type, such as cms\_document or cms\_image.

showAbsoluteUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to show absolute URLs in the output class (true) or not (false). The default value is false.

#### Return Value

Type: [ConnectApi.ManagedContentVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_version_collection.htm "Collection of managed content versions.")

### getContentByContentKeys(channelId, contentKeys, pageParam, pageSize, language, managedContentType, includeMetadata, startDate, endDate, showAbsoluteUrl)

Get managed content versions for a channel using a list of content keys.

#### API Version

51.0

#### Available to Guest Users

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVersionCollection getContentByContentKeys(String channelId, List<String\> contentKeys, Integer pageParam, Integer pageSize, String language, String managedContentType, Boolean includeMetadata, String startDate, String endDate, Boolean showAbsoluteUrl)

#### Parameters

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

contentKeys

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 50 content keys for the managed content. A content key is a universally unique identifier (UUID) such as MCA4CCV5QS2BAB5H7YRCRPTCWGZQ.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. For performance reasons, we recommend 25 or fewer items per page. If you pass in null, the default size is 25.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the context user’s language. If the context user’s language isn’t available, the language defaults to the content type’s original language.

managedContentType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name of the content type, such as cms\_document or cms\_image.

includeMetadata

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include metadata in the response (true) or not (false). The default value is false.

startDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Publish start date in ISO 8601 format, for example, 2011-02-25T18:24:31.000Z.

endDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Publish end date in ISO 8601 format, for example, 2011-02-25T18:24:31.000Z.

showAbsoluteUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to show absolute URLs in the output class (true) or not (false). The default value is false.

#### Return Value

Type: [ConnectApi.ManagedContentVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_version_collection.htm "Collection of managed content versions.")

### getContentByIds(channelId, managedContentIds, pageParam, pageSize, language, managedContentType, includeMetadata, startDate, endDate)

Get managed content versions for a channel using a list of managed content IDs.

#### API Version

48.0

#### Available to Guest Users

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVersionCollection getContentByIds(String channelId, List<String\> managedContentIds, Integer pageParam, Integer pageSize, String language, String managedContentType, Boolean includeMetadata, String startDate, String endDate)

#### Parameters

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

managedContentIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of managed content IDs. HTTP/2 clients support up to 200 IDs. HTTP/1.1 clients don’t.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. For performance reasons, we recommend 25 or fewer items per page. If you pass in null, the default size is 25.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the context user’s language. If the context user’s language isn’t available, the language defaults to the content type’s original language.

managedContentType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name of the content type, such as cms\_document or cms\_image.

includeMetadata

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include metadata in the response (true) or not (false). The default value is false.

startDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Publish start date in ISO 8601 format, for example, 2011-02-25T18:24:31.000Z.

endDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Publish end date in ISO 8601 format, for example, 2011-02-25T18:24:31.000Z.

#### Return Value

Type: [ConnectApi.ManagedContentVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_version_collection.htm "Collection of managed content versions.")

### getContentByIds(channelId, managedContentIds, pageParam, pageSize, language, managedContentType, includeMetadata, startDate, endDate, showAbsoluteUrl)

Get managed content versions for a channel with absolute URLs using a list of managed content IDs.

#### API Version

50.0

#### Available to Guest Users

50.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVersionCollection getContentByIds(String channelId, List<String\> managedContentIds, Integer pageParam, Integer pageSize, String language, String managedContentType, Boolean includeMetadata, String startDate, String endDate, Boolean showAbsoluteUrl)

#### Parameters

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

managedContentIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of managed content IDs. HTTP/2 clients support up to 200 IDs. HTTP/1.1 clients don’t.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. For performance reasons, we recommend 25 or fewer items per page. If you pass in null, the default size is 25.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the context user’s language. If the context user’s language isn’t available, the language defaults to the content type’s original language.

managedContentType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name of the content type, such as cms\_document or cms\_image.

includeMetadata

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include metadata in the response (true) or not (false). The default value is false.

startDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Publish start date in ISO 8601 format, for example, 2011-02-25T18:24:31.000Z.

endDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Publish end date in ISO 8601 format, for example, 2011-02-25T18:24:31.000Z.

showAbsoluteUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to show absolute URLs in the output class (true) or not (false). The default value is false.

#### Return Value

Type: [ConnectApi.ManagedContentVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_version_collection.htm "Collection of managed content versions.")

### getManagedContentByContentKeys(communityId, contentKeys, pageParam, pageSize, language, managedContentType, showAbsoluteUrl)

Get managed content versions for an Experience Cloud site using a list of content keys.

#### API Version

51.0

#### Available to Guest Users

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVersionCollection getManagedContentByContentKeys(String communityId, List<String\> contentKeys, Integer pageParam, Integer pageSize, String language, String managedContentType, Boolean showAbsoluteUrl)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

contentKeys

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 50 content keys for the managed content. A content key is a universally unique identifier (UUID) such as MCA4CCV5QS2BAB5H7YRCRPTCWGZQ.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. For performance reasons, we recommend 25 or fewer items per page. If you pass in null, the default size is 25.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the context user’s language. If the context user’s language isn’t available, the language defaults to the content type’s original language.

managedContentType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name of the content type, such as cms\_document or cms\_image.

showAbsoluteUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to show absolute URLs in the output class (true) or not (false). The default value is false.

#### Return Value

Type: [ConnectApi.ManagedContentVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_version_collection.htm "Collection of managed content versions.")

### getManagedContentByIds(communityId, managedContentIds, pageParam, pageSize, language, managedContentType)

Get managed content versions for an Experience Cloud site using a list of managed content IDs.

#### API Version

47.0

#### Available to Guest Users

47.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVersionCollection getManagedContentByIds(String communityId, List<String\> managedContentIds, Integer pageParam, Integer pageSize, String language, String managedContentType)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

managedContentIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of managed content IDs. HTTP/2 clients support up to 200 IDs. HTTP/1.1 clients don’t.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. For performance reasons, we recommend 25 or fewer items per page. If you pass in null, the default size is 25.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the context user’s language. If the context user’s language isn’t available, the language defaults to the content type’s original language.

managedContentType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name of the content type, such as cms\_document or cms\_image.

#### Return Value

Type: [ConnectApi.ManagedContentVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_version_collection.htm "Collection of managed content versions.")

### getManagedContentByIds(communityId, managedContentIds, pageParam, pageSize, language, managedContentType, showAbsoluteUrl)

Get managed content versions for an Experience Cloud site with absolute URLs using a list of managed content IDs.

#### API Version

50.0

#### Available to Guest Users

50.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVersionCollection getManagedContentByIds(String communityId, List<String\> managedContentIds, Integer pageParam, Integer pageSize, String language, String managedContentType, Boolean showAbsoluteUrl)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

managedContentIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of managed content IDs. HTTP/2 clients support up to 200 IDs. HTTP/1.1 clients don’t.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. For performance reasons, we recommend 25 or fewer items per page. If you pass in null, the default size is 25.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the context user’s language. If the context user’s language isn’t available, the language defaults to the content type’s original language.

managedContentType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name of the content type, such as cms\_document or cms\_image.

showAbsoluteUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to show absolute URLs in the output class (true) or not (false). The default value is false.

#### Return Value

Type: [ConnectApi.ManagedContentVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_version_collection.htm "Collection of managed content versions.")

### getManagedContentByTopics(communityId, topics, pageParam, pageSize, language, managedContentType)

Get managed content versions using a list of content topic names.

#### API Version

47.0

#### Available to Guest Users

47.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVersionCollection getManagedContentByTopics(String communityId, List<String\> topics, Integer pageParam, Integer pageSize, String language, String managedContentType)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

topics

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of up to 15 content topic names.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. For performance reasons, we recommend 25 or fewer items per page. If you pass in null, the default size is 25.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the context user’s language. If the context user’s language isn’t available, the language defaults to the content type’s original language.

managedContentType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name of the content type, such as cms\_document or cms\_image.

#### Return Value

Type: [ConnectApi.ManagedContentVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_version_collection.htm "Collection of managed content versions.")

### getManagedContentByTopics(communityId, topics, pageParam, pageSize, language, managedContentType, showAbsoluteUrl)

Get managed content versions with absolute URLs using a list of content topic names.

#### API Version

50.0

#### Available to Guest Users

50.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVersionCollection getManagedContentByTopics(String communityId, List<String\> topics, Integer pageParam, Integer pageSize, String language, String managedContentType, Boolean showAbsoluteUrl)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

topics

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of up to 15 content topic names.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. For performance reasons, we recommend 25 or fewer items per page. If you pass in null, the default size is 25.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the context user’s language. If the context user’s language isn’t available, the language defaults to the content type’s original language.

managedContentType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name of the content type, such as cms\_document or cms\_image.

showAbsoluteUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to show absolute URLs in the output class (true) or not (false). The default value is false.

#### Return Value

Type: [ConnectApi.ManagedContentVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_version_collection.htm "Collection of managed content versions.")

### getManagedContentByTopicsAndContentKeys(communityId, contentKeys, topics, pageParam, pageSize, language, managedContentType, showAbsoluteUrl)

Get managed content versions using a list of content keys and content topic names.

#### API Version

51.0

#### Available to Guest Users

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVersionCollection getManagedContentByTopicsAndContentKeys(String communityId, List<String\> contentKeys, List<String\> topics, Integer pageParam, Integer pageSize, String language, String managedContentType, Boolean showAbsoluteUrl)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

contentKeys

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 50 content keys for the managed content. A content key is a universally unique identifier (UUID) such as MCA4CCV5QS2BAB5H7YRCRPTCWGZQ.

topics

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of up to 15 content topic names.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. For performance reasons, we recommend 25 or fewer items per page. If you pass in null, the default size is 25.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the context user’s language. If the context user’s language isn’t available, the language defaults to the content type’s original language.

managedContentType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name of the content type, such as cms\_document or cms\_image.

showAbsoluteUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to show absolute URLs in the output class (true) or not (false). The default value is false.

#### Return Value

Type: [ConnectApi.ManagedContentVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_version_collection.htm "Collection of managed content versions.")

### getManagedContentByTopicsAndIds(communityId, managedContentIds, topics, pageParam, pageSize, language, managedContentType)

Get managed content versions using a list of managed content IDs and content topic names.

#### API Version

47.0

#### Available to Guest Users

47.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVersionCollection getManagedContentByTopicsAndIds(String communityId, List<String\> managedContentIds, List<String\> topics, Integer pageParam, Integer pageSize, String language, String managedContentType)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

managedContentIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of managed content IDs. HTTP/2 clients support up to 200 IDs. HTTP/1.1 clients don’t.

topics

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of up to 15 content topic names.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. For performance reasons, we recommend 25 or fewer items per page. If you pass in null, the default size is 25.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the context user’s language. If the context user’s language isn’t available, the language defaults to the content type’s original language.

managedContentType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name of the content type, such as cms\_document or cms\_image.

#### Return Value

Type: [ConnectApi.ManagedContentVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_version_collection.htm "Collection of managed content versions.")

### getManagedContentByTopicsAndIds(communityId, managedContentIds, topics, pageParam, pageSize, language, managedContentType, showAbsoluteUrl)

Get managed content versions with absolute URLs using a list of managed content IDs and content topic names.

#### API Version

50.0

#### Available to Guest Users

50.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVersionCollection getManagedContentByTopicsAndIds(String communityId, List<String\> managedContentIds, List<String\> topics, Integer pageParam, Integer pageSize, String language, String managedContentType, Boolean showAbsoluteUrl)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

managedContentIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of managed content IDs. HTTP/2 clients support up to 200 IDs. HTTP/1.1 clients don’t.

topics

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of up to 15 content topic names.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. For performance reasons, we recommend 25 or fewer items per page. If you pass in null, the default size is 25.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the context user’s language. If the context user’s language isn’t available, the language defaults to the content type’s original language.

managedContentType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name of the content type, such as cms\_document or cms\_image.

showAbsoluteUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to show absolute URLs in the output class (true) or not (false). The default value is false.

#### Return Value

Type: [ConnectApi.ManagedContentVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_version_collection.htm "Collection of managed content versions.")

### getManagedContentProviders()

Get digital asset management (DAM) providers.

#### API Version

65.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentProviderCollection getManagedContentProviders()

#### Return Value

Type: [ConnectApi.ManagedContentProviderCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_provider_collection.htm "Collection of managed content providers.")

### getManagedContentProvidersForSpace(contentSpaceId)

Get digital asset management (DAM) providers for a managed content space.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentProviderCollection getManagedContentProvidersForSpace(String contentSpaceId)

#### Parameters

contentSpaceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the managed content space.

#### Return Value

Type: [ConnectApi.ManagedContentProviderCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_provider_collection.htm "Collection of managed content providers.")

### getMCSFolderShares(folderId)

Get targets that a managed content space folder is shared with.

To get the targets that a managed content space folder can be shared with, use [getMCSFolderShareTargets(folderId)](#apex_ConnectAPI_ManagedContent_getMCSFolderShareTargets_1 "Get targets that a managed content space folder can be shared with.").

#### API Version

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.MCSFolderShareCollection getMCSFolderShares(String folderId)

#### Parameters

folderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the folder.

#### Return Value

Type: [ConnectApi.MCSFolderShareCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_m_c_s_folder_share_collection.htm "Collection of targets that a managed content space folder is shared with.")

### getMCSFolderShareTargets(folderId)

Get targets that a managed content space folder can be shared with.

To get the targets that a managed content space folder is shared with, use [getMCSFolderShares(folderId)](#apex_ConnectAPI_ManagedContent_getMCSFolderShares_1 "Get targets that a managed content space folder is shared with.").

#### API Version

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.MCSFolderShareTargetCollection getMCSFolderShareTargets(String folderId)

#### Parameters

folderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the folder.

#### Return Value

Type: [ConnectApi.MCSFolderShareTargetCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_m_c_s_folder_share_target_collection.htm "Collection of targets that a managed content space folder can be shared with.")

### patchMCSFolderShares(folderId, mcsFolderShareCollectionUpdateInput)

Update the targets that a managed content space folder is shared with.

Workspaces are the only supported sharing targets. To get the targets that a managed content space folder is shared with, use [getMCSFolderShares(folderId)](#apex_ConnectAPI_ManagedContent_getMCSFolderShares_1 "Get targets that a managed content space folder is shared with."). To get the targets that a managed content space folder can be shared with, use [getMCSFolderShareTargets(folderId)](#apex_ConnectAPI_ManagedContent_getMCSFolderShareTargets_1 "Get targets that a managed content space folder can be shared with.").

#### API Version

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.MCSFolderShareCollection patchMCSFolderShares(String folderId, ConnectApi.MCSFolderShareCollectionUpdateInput mcsFolderShareCollectionUpdateInput)

#### Parameters

folderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the folder.

mcsFolderShareCollectionUpdateInput

Type: [ConnectApi.MCSFolderShareCollectionUpdateInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_m_c_s_folder_share_collection_update.htm "Update the targets that a managed content space folder is shared with.")

ConnectApi.MCSFolderShareCollectionUpdateInput input class with the targets to share and unshare.

#### Return Value

Type: [ConnectApi.MCSFolderShareCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_m_c_s_folder_share_collection.htm "Collection of targets that a managed content space folder is shared with.")

### publish(publishInput)

Publish content.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentPublishOutput publish(ConnectApi.ManagedContentPublishInput publishInput)

#### Parameters

publishInput

Type: [ConnectApi.ManagedContentPublishInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_publish.htm "Input for publishing content.")

A ConnectApi.ManagedContentPublishInput request body specifying the content to publish.

#### Return Value

Type: [ConnectApi.ManagedContentPublishOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_publish_output.htm "Information about a Publish action")

### replaceManagedContentVariant(variantId, ManagedContentVariantInputParam)

Replace a managed content variant.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVariant replaceManagedContentVariant(String variantId, ConnectApi.ManagedContentVariantUpdateInput ManagedContentVariantInputParam)

#### Parameters

variantId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the managed content variant to replace.

ManagedContentVariantInputParam

Type: [ConnectApi.ManagedContentVariantUpdateInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_variant_update.htm "Input representation for replacing a managed content variant.")

A ConnectApi.ManagedContentVariantUpdateInput input class with information about the managed content variant that is replacing the existing variant.

#### Return Value

Type: [ConnectApi.ManagedContentVariant](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_variant.htm "Managed content variant.")

### replaceManagedContentVariantWithMedia(variantId, ManagedContentVariantInputParam, contentData)

Replace a managed content variant, including content data.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVariant replaceManagedContentVariantWithMedia(String variantId, ConnectApi.ManagedContentVariantUpdateInput ManagedContentVariantInputParam, ConnectApi.BinaryInput contentData)

#### Parameters

variantId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the managed content variant to replace.

ManagedContentVariantInputParam

Type: [ConnectApi.ManagedContentVariantUpdateInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_variant_update.htm "Input representation for replacing a managed content variant.")

A ConnectApi.ManagedContentVariantUpdateInput input class with information about the managed content variant that is replacing the existing variant.

contentData

Type: [ConnectApi.BinaryInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

A new binary file to replace the content data of the managed content variant.

#### Return Value

Type: [ConnectApi.ManagedContentVariant](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_variant.htm "Managed content variant.")

### unpublish(unpublishInput)

Unpublish content.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentUnpublishOutput unpublish(ConnectApi.ManagedContentUnpublishInput unpublishInput)

#### Parameters

unpublishInput

Type: [ConnectApi.ManagedContentUnpublishInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_unpublish.htm "Input for unpublishing content.")

A ConnectApi,ManagedContentUnpublishInput request body specifying the content to unpublish.

#### Return Value

Type: [ConnectApi.ManagedContentUnpublishOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_unpublish_output.htm "Managed content unpublish action.")

### updateManagedContentProviderInstance(providerInstanceId, providerInstanceInput)

Update a digital asset management (DAM) provider instance.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentProviderInstance updateManagedContentProviderInstance(String providerInstanceId, ConnectApi.ManagedContentProviderInput providerInstanceInput)

#### Parameters

providerInstanceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the provider instance to update.

providerInstanceInput

Type: [ConnectApi.ManagedContentProviderInstanceInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_provider_instance.htm "Create or update a managed content provider instance.")

ConnectApi.ManagedContentProviderInstanceInput class with the required information to update an instance.

#### Return Value

Type: [ConnectApi.ManagedContentProviderInstance](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_provider_instance.htm "Information about a managed content provider instance.")

## Retired ManagedContent Methods

These methods for ManagedContent are retired.

-   **[getAllDeliveryChannels(pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#unique_1286680801)**
    Get managed content delivery channels for the context user.
-   **[getManagedContentSpace(contentSpaceId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentSpace_1)**
    Get a managed content space.

### getAllDeliveryChannels(pageParam, pageSize)

Get managed content delivery channels for the context user.

#### API Version

48.0–61.0

In version 62.0 and later, use [getChannels(pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getChannels_1 "Get managed content delivery channels for the context user.") in the ManagedContentDelivery class to get all delivery channels.

#### Available to Guest Users

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentChannelCollection getAllDeliveryChannels(Integer pageParam, Integer pageSize)

#### Parameters

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.ManagedContentChannelCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel_collection.htm "Collection of managed content channels.")

### getManagedContentSpace(contentSpaceId)

Get a managed content space.

#### API Version

55.0–63.0

In version 64.0 and later, use [getManagedContentSpace(contentSpaceId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm#apex_ConnectAPI_ManagedContentSpaces_getManagedContentSpace_2 "Get a managed content space.") in the ManagedContentSpaces class to get a managed content space.

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentSpace getManagedContentSpace(String contentSpaceId)

#### Parameters

contentSpaceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the managed content space.

#### Return Value

Type: [ConnectApi.ManagedContentSpace](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_space.htm "Managed content space.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- cloneManagedContentDocument(contentKeyOrId, ManagedContentCloneInputParam) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm)
- createManagedContent(ManagedContentInputParam) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm)
- createManagedContentProvider(providerInstanceInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm)
- createManagedContentWithMedia(ManagedContentInputParam, contentData) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm)
- deleteManagedContentProviderInstance(providerInstanceId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm)
- deleteManagedContentVariant(variantId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm)
- getAllContent(channelId, pageParam, pageSize, language, managedContentType, includeMetadata, startDate, endDate) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm)
- getAllContent(channelId, pageParam, pageSize, language, managedContentType, includeMetadata, startDate, endDate, showAbsoluteUrl) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm)
- getAllDeliveryChannels(pageParam, pageSize) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm)
