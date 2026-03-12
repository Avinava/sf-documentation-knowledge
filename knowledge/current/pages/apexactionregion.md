---
title: "apex:actionRegion"
domain: pages
topic: apexactionregion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.086Z
estimatedTokens: 628
keywords: [apex, actionRegion, area, Visualforce, demarcates, components, processed, Force.com, server, AJAX, generated, Attributes]
---

# apex:actionRegion

> An area of a Visualforce page that demarcates which components
		should be processed by the Force.com server when an AJAX request is
		generated.

# apex:actionRegion

An area of a Visualforce page that demarcates which components should be processed by the Force.com server when an AJAX request is generated.

Only the components in the body of the <apex:actionRegion\> are processed by the server, thereby increasing the performance of the page.

Use this component to get user input for a controller method that does not correspond to a field on an sObject. Only <apex:inputField\> and <apex:outputField\> can be used with sObject fields.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Note that an <apex:actionRegion\> component only defines which components the server processes during a request—it doesn’t define what areas of the page are re-rendered when the request completes. To control that behavior, use the rerender attribute on an <apex:actionSupport\>, <apex:actionPoller\>, <apex:commandButton\>, <apex:commandLink\>, <apex:tab\>, or <apex:tabPanel\> component.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 10.0 | global |
| immediate | Boolean | A Boolean value that specifies whether the action associated with this component should happen immediately, without processing any validation rules associated with the fields on the page. If set to true, the action happens immediately and validation rules are skipped. If not specified, this value defaults to false. See Use the immediate Attribute Carefully. |  | 11.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| renderRegionOnly | Boolean | A Boolean value that specifies whether AJAX-invoked behavior outside of the actionRegion should be disabled when the actionRegion is processed. If set to true, no component outside the actionRegion is included in the AJAX response. If set to false, all components in the page are included in the response. If not specified, this value defaults to true. |  | 10.0 | global |

#### See Also

-   [*Apex Developer Guide*: Using the transient Keyword](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_transient.htm "Apex Developer Guide: Using the transient Keyword - html (New Window)")

## Code Examples

```
<!-- For this example to render fully, associate the page
with a valid opportunity record in the URL.
For example: https://MyDomain_login_URL/apex/myPage?id=001D000000IRt53 -->

<apex:page standardController="Opportunity">
  <apex:form >
    <apex:pageBlock title="Edit Opportunity" id="thePageBlock" mode="edit">

      <apex:pageBlockButtons >
        <apex:commandButton value="Save" action="{!save}"/>
        <apex:commandButton value="Cancel" action="{!cancel}"/>
      </apex:pageBlockButtons>

    <apex:pageBlockSection columns="1">
      <apex:inputField value="{!opportunity.name}"/>
      <apex:pageBlockSectionItem>
      <apex:outputLabel value="{!$ObjectType.opportunity.fields.stageName.label}"
                        for="stage"/>
      <!--
           Without the actionregion, selecting a stage from the picklist would cause
           a validation error if you hadn't already entered data in the required name
           and close date fields.  It would also update the timestamp.
      -->
      <apex:actionRegion>
        <apex:inputField value="{!opportunity.stageName}" id="stage">
          <apex:actionSupport event="onchange" rerender="thePageBlock"
                              status="status"/>
          </apex:inputField>
          </apex:actionRegion>
      </apex:pageBlockSectionItem>
        <apex:inputfield value="{!opportunity.closedate}"/>
        {!text(now())}
        </apex:pageBlockSection>

      </apex:pageBlock>
    </apex:form>
</apex:page>
```

## Related Topics

- Use the immediate Attribute Carefully (atlas.en-us.pages.meta/pages/pages_best_practices_perf_immediate_attr.htm)
