---
title: "Sample Call Center Definition File"
domain: api-cti
topic: sample-call-center-definition-file
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.658Z
estimatedTokens: 322
keywords: [Sample, Call, Center, Definition, File, looks, different, org, Salesforce, Classic, Lightning, Experience, XML]
---

# Sample Call Center Definition File

> Each call center definition file looks different. This example shows you what a
                call center definition file looks like for an org using Salesforce Classic and Lightning Experience.

# Sample Call Center Definition File

Each call center definition file looks different. This example shows you what a call center definition file looks like for an org using Salesforce Classic and Lightning Experience.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_cti)

#### Important

The way you implement Open CTI depends on your org’s user interface. There are separate Open CTI APIs for Salesforce Classic and Lightning Experience. The reqSalesforceCompatibilityMode item in your call center definition file identifies the user interface you plan to use—Salesforce Classic, Lightning Experience, or both. If no value is specified, the default is Classic. This item is optional, but to make calls in Lightning Experience you must specify Lightning or Classic\_and\_Lightning.

## Sample XML for an Org Using Salesforce Classic

```

```

## Sample XML for an Org Using Lightning Experience

```

```

#### See Also

-   [Why Your UI Matters—Open CTI for Salesforce Classic vs. Lightning Experience](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_lightning_vs_classic.htm "The way you implement Open CTI depends on your org’s user interface. There are separate Open CTI APIs for Salesforce Classic and Lightning Experience.")

## Code Examples

```
<!--
     All sections and items whose name value begins with "req" are
     required in a valid call center definition file. The sortOrder
     and label attributes can be changed for all required sections
     and items except reqGeneralInfo, reqInternalName, and
     reqDisplayName, in which only the label attribute can be altered.

     Note that the value for the reqInternalName item is limited to
     40 alphanumeric characters and must start with an alphabetic
     character. reqInternalName must be unique for all call centers
     that you define.
-->
<callCenter>
   <section sortOrder="0" name="reqGeneralInfo" label="General Information">
    <item sortOrder="0" name="reqInternalName" label="InternalName">DemoAdapter</item>
    <item sortOrder="1" name="reqDisplayName" label="Display Name">Demo Call Center Adapter</item>
    <item sortOrder="2" name="reqAdapterUrl" label="CTI Adapter URL">https://domain:port/softphone</item>
    <item sortOrder="3" name="reqUseApi" label="Use CTI API">true</item>
    <item sortOrder="4" name="reqSoftphoneHeight" label="Softphone Height">300</item>
    <item sortOrder="5" name="reqSoftphoneWidth" label="Softphone Width">500</item>
    <item sortOrder="6" name="reqSalesforceCompatibilityMode" label=" Salesforce Compatibility Mode">Classic</item>
   </section>
   <section sortOrder="1" name="reqDialingOptions" label="Dialing Options">
    <item sortOrder="0" name="reqOutsidePrefix" label="Outside Prefix">9</item>
    <item sortOrder="1" name="reqLongDistPrefix" label="Long Distance Prefix">1</item>
    <item sortOrder="2" name="reqInternationalPrefix" label="International Prefix">01</item>
   </section>
</callCenter>
```

```
<callCenter>
   <section sortOrder="0" name="reqGeneralInfo" label="General Information">
    <item sortOrder="0" name="reqInternalName" label="InternalName">OpenCTI</item>
    <item sortOrder="1" name="reqDisplayName" label="Display Name">OpenCTI</item>
    <item sortOrder="2" name="reqAdapterUrl" label="CTI Adapter URL">https://domain:port/softphone</item>
    <item sortOrder="3" name="reqUseApi" label="Use CTI API">true</item>
    <item sortOrder="4" name="reqSoftphoneHeight" label="Softphone Height">300</item>
    <item sortOrder="5" name="reqSoftphoneWidth" label="Softphone Width">500</item>
    <item sortOrder="6" name="reqSalesforceCompatibilityMode" label="Salesforce Compatibility Mode">Lightning</item>
   </section>
   <section sortOrder="1" name="reqDialingOptions" label="Dialing Options">
    <item sortOrder="0" name="reqOutsidePrefix" label="Outside Prefix">9</item>
    <item sortOrder="1" name="reqLongDistPrefix" label="Long Distance Prefix">1</item>
    <item sortOrder="2" name="reqInternationalPrefix" label="International Prefix">01</item>
   </section>
</callCenter>
```

## Related Topics

- Why Your UI Matters—Open CTI for Salesforce Classic vs. Lightning Experience (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_lightning_vs_classic.htm)
