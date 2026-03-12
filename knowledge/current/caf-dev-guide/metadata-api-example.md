---
title: "Metadata API Example"
domain: caf-dev-guide
topic: metadata-api-example
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.240Z
estimatedTokens: 199
keywords: [Metadata, API, custom, address]
---

# Metadata API Example

> To create a custom address field on an object, use Metadata API.

# Metadata API Example

To create a custom address field on an object, use Metadata API.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=caf_dev_guide)

#### Note

Before you create a custom address field, review the [Custom Address Fields Requirements and Limitations](atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_limitations.htm "Before you enable Custom Address Fields, configure State and Country/Territory picklists and review the limitations of this feature."). To discuss the feature and ask questions, join the [Custom Address Fields Discussion](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000H3KISA0) group on the Trailblazer Community.

This example creates a custom object of type Address on the Account object.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">       
    <fields>
        <fullName>MailingAddress__c</fullName>
        <externalId>false</externalId>
        <label>Mailing Address</label>
        <required>false</required>
        <type>Address</type>
        <unique>false</unique>
   </fields>
 </CustomObject>
```

## Related Topics

- Custom Address Fields Requirements and Limitations (atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_limitations.htm)
