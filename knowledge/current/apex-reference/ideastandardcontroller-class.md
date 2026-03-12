---
title: "IdeaStandardController Class"
domain: apex-reference
topic: ideastandardcontroller-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:31.803Z
estimatedTokens: 695
namespace: ApexPages
keywords: [IdeaStandardController, objects, offer, Ideas-specific, functionality, addition, provided, StandardController, Usage, Instantiation, getCommentList]
---

# IdeaStandardController Class

> IdeaStandardController objects offer Ideas-specific functionality in addition to what is
provided by the StandardController.

**Namespace:** `ApexPages`

# IdeaStandardController Class

IdeaStandardController objects offer Ideas-specific functionality in addition to what is provided by the StandardController.

## Namespace

[ApexPages](atlas.en-us.apexref.meta/apexref/apex_namespace_ApexPages.htm "The ApexPages namespace provides classes used in Visualforce controllers.")

## Usage

A method in the IdeaStandardController object is called by and operated on a particular instance of an IdeaStandardController.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The IdeaStandardSetController and IdeaStandardController classes are currently available through a limited release program. For information on enabling these classes for your organization, contact your Salesforce representative.

In addition to the methods listed in this class, the IdeaStandardController class inherits all the methods associated with the StandardController class.

## Instantiation

An IdeaStandardController object cannot be instantiated. An instance can be obtained through a constructor of a custom extension controller when using the standard ideas controller.

## Example

The following example shows how an IdeaStandardController object can be used in the constructor for a custom list controller. This example provides the framework for manipulating the comment list data before displaying it on a Visualforce page.

```

```

The following Visualforce markup shows how the IdeaStandardController example shown above can be used in a page. This page must be named detailPage for this example to work.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

For the Visualforce page to display the idea and its comments, in the following example you need to specify the ID of a specific idea (for example, /apex/detailPage?id=<ideaID>) whose comments you want to view.

```

```

#### See Also

-   [StandardController Class](atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm#apex_pages_standardcontroller "Use a StandardController when defining an extension for a standard controller.")


## IdeaStandardController Methods

The following are instance methods for IdeaStandardController.

-   **[getCommentList()](atlas.en-us.apexref.meta/apexref/apex_pages_ideastandardcontroller.htm#apex_ApexPages_IdeaStandardController_getCommentList)**
    Returns the list of read-only comments from the current page.

### getCommentList()

Returns the list of read-only comments from the current page.

#### Signature

public IdeaComment\[\] getCommentList()

#### Return Value

Type: IdeaComment\[\]

This method returns the following comment properties:

-   id
-   commentBody
-   createdDate
-   createdBy.Id
-   createdBy.communityNickname

## Code Examples

```apex
public class MyIdeaExtension {
    
    private final ApexPages.IdeaStandardController ideaController;
    
    public MyIdeaExtension(ApexPages.IdeaStandardController controller) {
        ideaController = (ApexPages.IdeaStandardController)controller;
    }
    
    public List<IdeaComment> getModifiedComments() {
        IdeaComment[] comments = ideaController.getCommentList();
        // modify comments here
        return comments;
    }
    
}
```

```
<!-- page named detailPage -->
<apex:page standardController="Idea" extensions="MyIdeaExtension">
    <apex:pageBlock title="Idea Section">
        <ideas:detailOutputLink page="detailPage" ideaId="{!idea.id}">{!idea.title}
        </ideas:detailOutputLink>
        <br/><br/>
        <apex:outputText >{!idea.body}</apex:outputText>
    </apex:pageBlock>
    <apex:pageBlock title="Comments Section">
        <apex:dataList var="a" value="{!modifiedComments}" id="list">
            {!a.commentBody}
        </apex:dataList>
        <ideas:detailOutputLink page="detailPage" ideaId="{!idea.id}" 
               pageOffset="-1">Prev</ideas:detailOutputLink>
        | 
        <ideas:detailOutputLink page="detailPage" ideaId="{!idea.id}" 
               pageOffset="1">Next</ideas:detailOutputLink>   
    </apex:pageBlock>
</apex:page>
```

## Related Topics

- ApexPages (atlas.en-us.apexref.meta/apexref/apex_namespace_ApexPages.htm)
- StandardController Class (atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm)
- getCommentList() (atlas.en-us.apexref.meta/apexref/apex_pages_ideastandardcontroller.htm)
