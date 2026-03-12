---
title: "apex:componentBody"
domain: pages
topic: apexcomponentbody
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.348Z
estimatedTokens: 223
keywords: [apex, componentBody, tag, custom, component, author, define, location, user, insert, content, especially, useful, generating, iteration]
---

# apex:componentBody

> This tag allows a custom component author to define a location where a user can insert content into the custom component. This is especially useful for generating custom iteration components. This component is valid only within an <apex:component> tag, and only a single definition per custom compone

# apex:componentBody

This tag allows a custom component author to define a location where a user can insert content into the custom component. This is especially useful for generating custom iteration components. This component is valid only within an <apex:component\> tag, and only a single definition per custom component is allowed.

## Simple Example

```

```

## Advanced Example

```

```

The example above renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 13.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 13.0 | global |

## Code Examples

```
<!-- Page: --> 
<apex:page>
    <apex:outputText value="(page) This is before the custom component"/><br/>
    <c:bodyExample>
        <apex:outputText value="(page) This is between the custom component" /> <br/>
    </c:bodyExample>
    <apex:outputText value="(page) This is after the custom component"/><br/>
</apex:page>

<!-- Component: bodyExample -->
<apex:component>
    <apex:outputText value="First custom component output" /> <br/>
    <apex:componentBody />
    <apex:outputText value="Second custom component output" /><br/>
</apex:component>
```

```apex
<!-- Page: --> 
<apex:page >
    <c:myaccounts var="a">
        <apex:panelGrid columns="2" border="1">
            <apex:outputText value="{!a.name}"/>
            <apex:panelGroup >
                <apex:panelGrid columns="1">
                    <apex:outputText value="{!a.billingstreet}"/>
                    <apex:panelGroup >
                        <apex:outputText value="{!a.billingCity}, 
                            {!a.billingState} {!a.billingpostalcode}"/>
                    </apex:panelGroup>
                </apex:panelGrid>
            </apex:panelGroup>
        </apex:panelGrid>
    </c:myaccounts>
</apex:page>

<!-- Component: myaccounts-->
<apex:component controller="myAccountsCon">
    <apex:attribute name="var" type="String" description="The variable to represent
                        a single account in the iteration."/>
    <apex:repeat var="componentAccount" value="{!accounts}">
        <apex:componentBody >
            <apex:variable var="{!var}" value="{!componentAccount}"/>     
        </apex:componentBody>
    </apex:repeat>
</apex:component>
            
/*** Controller ***/
public class myAccountsCon {

public List<Account> accounts {
    get {
    accounts = [select name, billingcity, billingstate, billingstreet, billingpostalcode 
    from account where ownerid = :userinfo.getuserid()];

    return accounts;
    }
    set;
    }
}
```

```
<table width="100%" cellspacing="0" cellpadding="0" border="0" id="bodyTable" class="outer">
    <!-- Start page content table -->
    <tbody><tr><td id="bodyCell" class="oRight">
        <!-- Start page content -->
        <a name="skiplink"><img width="1" height="1"
                        title="Content Starts Here" class="skiplink" 
                        alt="Content Starts Here" src="/s.gif"/></a><span id="j_id0:j_id1">
        <table border="1">
            <tbody>
                <tr>
                    <td>sForce</td>
                    <td><table>
                        <tbody>
                            <tr>
                                <td>The Land's Mark @ One Market</td>
                            </tr>
                            <tr>
                                <td>San Francisco, CA 94087</td>
                            </tr>
                        </tbody>
                    </table>
                    </td>
                </tr>
            </tbody>
        </table>
            <table border="1">
                <tbody>
                    <tr>
                        <td>University U</td>
                        <td>
            <table>
                <tbody>
                    <tr>
                        <td>888 N Euclid 
                            Hallis Center, Room 501
                            Tucson, AZ 85721
                            United States</td>
                   </tr>
                    <tr>
                        <td>Tucson, AZ </td>
                    </tr>
                </tbody>
            </table>
            </td>
            </tr>
        </tbody>
            </table>
            </span>
    </td>
    </tr>
    </tbody>
</table>
```
