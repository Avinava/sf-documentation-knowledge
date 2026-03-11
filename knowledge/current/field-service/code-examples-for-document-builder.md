---
title: "Code Examples for Document Builder"
domain: field-service
topic: code-examples-for-document-builder
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:47:12.231Z
keywords: [Code, Examples, Document, Builder, Important, Static, Text, Images]
---

# Code Examples for Document Builder

# Code Examples for Document Builder

Build custom components for Document Builder with Lightning web components (LWCs).

With custom components, the sky’s the limit, but these code samples can get you started on your own Document Builder customization journey.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=field_service_dev)

#### Important

For custom LWCs to appear on mobile document preview, you must include this code in your js-meta.xml file: <supportedFormFactor type="Small" />

## Static Text

The header and medium header base components come with color and padding configuration. This code creates a medium header component.

```

```

## Static Images

Here’s some sample code to create custom static images. This code creates a Static Image component.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=field_service_dev)

#### Important

Don’t use static resources, as they aren’t supported offline and are deprecated. Only use ContentAsset in your LWC. See [Using Assets in LWC](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_content_assets), [How to Create Assets](https://help.salesforce.com/s/articleView?id=experience.admin_files_asset_files_create.htm&type=5&language=en_US), and [Viewing and Editing Assets](https://help.salesforce.com/s/articleView?id=experience.files_asset_files_edit_view.htm&type=5&language=en_US).

```

```

This code uses SFDX to deploy contentAssets.

```

```