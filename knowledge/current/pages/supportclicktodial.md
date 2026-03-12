---
title: "support:clickToDial"
domain: pages
topic: supportclicktodial
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.169Z
estimatedTokens: 485
keywords: [support, clickToDial, component, renders, phone, number, click-to-dial, enabled, Open, CTI, Salesforce, Classic, CRM, Call, Center]
---

# support:clickToDial

> A component that renders a valid phone number as click-to-dial enabled for Open CTI for Salesforce Classic or Salesforce CRM Call Center. This field respects any existing click-to-dial commands for computer-telephony integrations (CTI) with Salesforce.

# support:clickToDial

A component that renders a valid phone number as click-to-dial enabled for Open CTI for Salesforce Classic or Salesforce CRM Call Center. This field respects any existing click-to-dial commands for computer-telephony integrations (CTI) with Salesforce.

**Note:**

-   If you create a Visualforce page with a custom console component, you must set the showHeader attribute to true. If this attribute is set to false, click-to-dial is disabled.
-   This component works with Open CTI for Lightning Experience.
-   This component doesn't support Open CTI Phone iFrames.
-   This component works with the enableClickToDial, disableClickToDial, and onClickToDial Open CTI methods.
-   This component doesn’t work with embedded Visualforce pages within standard page layouts in Salesforce Classic.

## This example displays the click to dial component.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| entityId | String | The entity ID of the record from which to invoke click-to-dial. |  | 28.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| number | String | The phone number that invokes click-to-dial functionality. | Yes | 28.0 |  |
| params | String | Optional parameters related to when click-to-dial is invoked, such as any case or account parameters. |  | 28.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

#### See Also

-   [*Open CTI Developer Guide*: Methods for Lightning Experience](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_cti.meta/api_cti/sforce_api_cti_methods_intro_lightning.htm "Open CTI Developer Guide: Methods for Lightning
    Experience - html (New Window)")

## Code Examples

```
<apex:page standardController="Account" showHeader="true">
                <support:clickToDial
                    number="415-555-1234"
                    entityId="001XB000000HFUM"
                    params="myparam1,myparam2"
                />
            </apex:page>
```
