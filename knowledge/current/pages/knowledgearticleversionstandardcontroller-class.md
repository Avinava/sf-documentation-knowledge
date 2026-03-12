---
title: "KnowledgeArticleVersionStandardController Class"
domain: pages
topic: knowledgearticleversionstandardcontroller-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.758Z
estimatedTokens: 612
namespace: ApexPages
keywords: [objects, offer, article-specific, functionality, addition, provided, StandardController, Usage]
---

# KnowledgeArticleVersionStandardController Class

> KnowledgeArticleVersionStandardController
        objects offer article-specific functionality in addition to what is provided by the StandardController.

**Namespace:** `ApexPages`

# KnowledgeArticleVersionStandardController Class

KnowledgeArticleVersionStandardController objects offer article-specific functionality in addition to what is provided by the StandardController.

## Namespace

ApexPages

## Usage

In addition to the method listed above, the KnowledgeArticleVersionStandardController class inherits all the methods associated with StandardController.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Though inherited, the edit, delete, and save methods don't serve a function when used with the KnowledgeArticleVersionStandardController class.

## Example

The following example shows how a KnowledgeArticleVersionStandardController object can be used to create a custom extension controller. In this example, you create a class named AgentContributionArticleController that allows customer-support agents to see pre-populated fields on the draft articles they create while closing cases.

Prerequisites:

1.  Create an article type called FAQ. For instructions, see “Create Article Types” in the Salesforce online help.
2.  Create a text custom field called Details. For instructions, see “Add Custom Fields to Article Types” in the Salesforce online help.
3.  Create a category group called Geography and assign it to a category called USA. For instructions, see “Create and Modify Category Groups” and “Add Data Categories to Category Groups” in the Salesforce online help.
4.  Create a category group called Topics and assign it a category called Maintenance.

```

```

```

```

If you created the custom extension controller for the purpose described in the previous example (that is, to modify submitted-via-case articles), complete the following steps after creating the class:

1.  Log into your Salesforce organization and from Setup, enter Knowledge Settings in the Quick Find box, then select **Knowledge Settings**.
2.  Click **Edit**.
3.  Assign the class to the Use Apex customization field. This associates the article type specified in the new class with the article type assigned to closed cases.
4.  Click **Save**.

-   **[KnowledgeArticleVersionStandardController Constructors](atlas.en-us.pages.meta/pages/apex_ApexPages_KnowledgeArticleVersionStandardController_constructors.htm)**

-   **[KnowledgeArticleVersionStandardController Methods](atlas.en-us.pages.meta/pages/apex_ApexPages_KnowledgeArticleVersionStandardController_methods.htm)**

## Code Examples

```apex
/** Custom extension controller for the simplified article edit page that 
    appears when an article is created on the close-case page.
*/
public class AgentContributionArticleController {
    // The constructor must take a ApexPages.KnowledgeArticleVersionStandardController as an argument
    public AgentContributionArticleController(
        ApexPages.KnowledgeArticleVersionStandardController ctl) {
        // This is the SObject for the new article. 
        //It can optionally be cast to the proper article type.
        // For example, FAQ__kav article = (FAQ__kav) ctl.getRecord();
        SObject article = ctl.getRecord();   
        // This returns the ID of the case that was closed.
        String sourceId = ctl.getSourceId(); 
        Case c = [SELECT Subject, Description FROM Case WHERE Id=:sourceId];
        
        // This overrides the default behavior of pre-filling the 
        // title of the article with the subject of the closed case. 
        article.put('title', 'From Case: '+c.subject);  
        article.put('details__c',c.description);  
        
        // Only one category per category group can be specified.
        ctl.selectDataCategory('Geography','USA');  
        ctl.selectDataCategory('Topics','Maintenance');                        
    }
}
```

```apex
/** Test class for the custom extension controller.
*/
@isTest
private class AgentContributionArticleControllerTest {
    static testMethod void testAgentContributionArticleController() { 
         String caseSubject = 'my test';
         String caseDesc = 'my test description';

         Case c = new Case();
         c.subject= caseSubject;
         c.description = caseDesc;
         insert c;
         String caseId = c.id;
         System.debug('Created Case: ' + caseId);
         
         ApexPages.currentPage().getParameters().put('sourceId', caseId);
         ApexPages.currentPage().getParameters().put('sfdc.override', '1');
         
         ApexPages.KnowledgeArticleVersionStandardController ctl = 
            new ApexPages.KnowledgeArticleVersionStandardController(new FAQ__kav());
         
         new AgentContributionArticleController(ctl);

         System.assertEquals(caseId, ctl.getSourceId());
         System.assertEquals('From Case: '+caseSubject, ctl.getRecord().get('title'));
         System.assertEquals(caseDesc, ctl.getRecord().get('details__c'));
   }
}
```

## Related Topics

- KnowledgeArticleVersionStandardController Constructors (atlas.en-us.pages.meta/pages/apex_ApexPages_KnowledgeArticleVersionStandardController_constructors.htm)
- KnowledgeArticleVersionStandardController Methods (atlas.en-us.pages.meta/pages/apex_ApexPages_KnowledgeArticleVersionStandardController_methods.htm)
