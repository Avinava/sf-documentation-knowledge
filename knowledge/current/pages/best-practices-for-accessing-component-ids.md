---
title: "Best Practices for Accessing Component
IDs"
domain: pages
topic: best-practices-for-accessing-component-ids
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:21.860Z
estimatedTokens: 879
keywords: [Best, Practices, Accessing, Component, IDs, refer, Visualforce, JavaScript, another, Web-enabled, language, specify, attribute, DOM, constructed]
---

# Best Practices for Accessing Component
IDs

> To refer to a Visualforce component in JavaScript or another Web-enabled language, you must
specify a value for the id attribute for that component. A DOM ID is constructed from a combination
of the id attribute of the
component and the id attributes
of all components that contain the element.

# Best Practices for Accessing Component IDs

To refer to a Visualforce component in JavaScript or another Web-enabled language, you must specify a value for the id attribute for that component. A DOM ID is constructed from a combination of the id attribute of the component and the id attributes of all components that contain the element.

Use the $Component global variable to simplify referencing the DOM ID that is generated for a Visualforce component, and reduce some of the dependency on the overall page structure. To reference a specific Visualforce component’s DOM ID, add a component path specifier to $Component, using dot notation to separate each level in the component hierarchy of the page. For example, use $Component.itemId to reference a component at the same level in the Visualforce component hierarchy, or use $Component.grandparentId.parentId.itemId to specify a more complete component path.

A $Component path specifier is matched against the component hierarchy:

-   At the current level of the component hierarchy where $Component is used; and then
-   At each successive higher level in the component hierarchy, until a match is found, or the top-level of the component hierarchy is reached.

There is no backtracking, so if the ID you’re trying to match requires a traversal up and then back down, it won’t match.

The following example illustrates several uses of $Component:

```

```

## Using Unique IDs

Within each hierarchy segment in a page, the component id must be unique. However, Salesforce recommends you use an id that is unique on the page for every component you need to reference, and any components above it in the component hierarchy that are needed to reference it.

For example, suppose you had two data tables in a single page. If both data tables are contained in the same page block, they must have unique id attributes. If each is contained in a separate page block, it’s possible to give them the same component id. If you do so, however, the only way to reference a specific data table is to assign an id to every component and then reference the data table component using the complete hierarchy, rather than letting Visualforce do it automatically. If the page hierarchy ever changes, your program will no longer work.

## Iterating with Component IDs

Some components, such as tables and lists, support iteration over a collection of records. After you assign an ID for these types of components, the system assigns a unique “compound ID” to each iteration of the component based on the initial ID.

For example, the following page contains a data table with an ID set to theTable.

```

```

When the page is rendered, the <apex:dataTable\> component results in the following HTML:

```

```

Each table cell has a unique ID based on the ID value of the containing components. The first table cell in the first row has the ID thePage:theTable:0:firstColumn, the second cell in the first row has the ID thePage:theTable:0:secondColumn, the first cell in the second row has the ID thePage:theTable:1:firstColumn, and so on.

To refer to all entries in a column, you have to iterate across the table rows, referring to each <td\> element that has an ID following the format of the column.

The same type of ID generation is done for elements within the table cells. For example, the account name in the first row is generated as a span with the ID thePage:theTable:0:accountName. Notice that ID does not include the value of the ID for the column it’s in.

## Code Examples

```
<apex:page >

    <style>
    .clicker { border: 1px solid #999; cursor: pointer;
        margin: .5em; padding: 1em; width: 10em; text-align: center; }
    </style>

    <apex:form id="theForm">
        <apex:pageBlock id="thePageBlock" title="Targeting IDs with $Component">
            <apex:pageBlockSection id="theSection">
                <apex:pageBlockSectionItem id="theSectionItem">
                    All the alerts refer to this component.
                    
                    <p>The full DOM ID resembles something like this:<br/>
                    j_id0:theForm:thePageBlock:theSection:theSectionItem</p>
                </apex:pageBlockSectionItem>

                <!-- Works because this outputPanel has a parent in common 
                     with "theSectionItem" component -->
                <apex:outputPanel layout="block" styleClass="clicker"
                    onclick="alert('{!$Component.theSectionItem}');">
                    First click here
                </apex:outputPanel>
            </apex:pageBlockSection>
            
            <apex:pageBlockButtons id="theButtons" location="bottom">
                <!-- Works because this outputPanel has a grandparent ("theSection")
                     in common with "theSectionItem" -->
                <apex:outputPanel layout="block" styleClass="clicker"
                    onclick="alert('{!$Component.theSection.theSectionItem}');">
                    Second click here
                </apex:outputPanel>

                <!-- Works because this outputPanel has a distant ancestor ("theForm")
                     in common with "theSectionItem" -->
                <apex:outputPanel layout="block" styleClass="clicker"
                    onclick="alert('
                    {!$Component.theForm.thePageBlock.theSection.theSectionItem}');">
                    Third click here
                </apex:outputPanel>
            </apex:pageBlockButtons>

        </apex:pageBlock>

        <!-- Works because this outputPanel is a sibling to "thePageBlock",
             and specifies the complete ID path from that sibling -->
        <apex:outputPanel layout="block" styleClass="clicker"
            onclick="alert('{!$Component.thePageBlock.theSection.theSectionItem}');">
            Fourth click here
        </apex:outputPanel>
        
        <hr/>
        
        <!-- Won't work because this outputPanel doesn't provide a path 
             that includes a sibling or common ancestor -->
        <apex:outputPanel layout="block" styleClass="clicker"
            onclick="alert('{!$Component.theSection.theSectionItem}');">
            This won't work
        </apex:outputPanel>

        <!-- Won't work because this outputPanel doesn't provide a path 
             that includes a sibling or common ancestor -->
        <apex:outputPanel layout="block" styleClass="clicker"
            onclick="alert('{!$Component.theSectionItem}');">
            Won't work either
        </apex:outputPanel>

    </apex:form>
</apex:page>
```

```
<apex:page standardController="Account" recordSetVar="accounts" id="thePage">
    <apex:dataTable value="{!accounts}" var="account" id="theTable">
        <apex:column id="firstColumn">
            <apex:outputText value="{!account.name}"/>
        </apex:column>
        <apex:column id="secondColumn">
            <apex:outputText value="{!account.owner.name}"/>
        </apex:column>
    </apex:dataTable>
</apex:page>
```

```
<table id="thePage:theTable" border="0" cellpadding="0" cellspacing="0">
<colgroup span="2"/>
<tbody>
    <tr class="">
        <td id="thePage:theTable:0:firstColumn">
            <span id="thePage:theTable:0:accountName">Burlington Textiles</span>
        </td>
        <td id="thePage:theTable:0:secondColumn">
            <span id="thePage:theTable:0:accountOwner">Vforce Developer</span>
        </td>
    </tr>
    <tr class="">
        <td id="thePage:theTable:1:firstColumn">
            <span id="thePage:theTable:1:accountName">Dickenson</span>
        </td>
        <td id="thePage:theTable:1:secondColumn">
            <span id="thePage:theTable:1:accountOwner">Vforce Developer</span>
        </td>
    </tr>
</table>
```
