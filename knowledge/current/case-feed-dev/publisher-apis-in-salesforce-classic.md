---
title: "Publisher APIs in Salesforce Classic"
domain: case-feed-dev
topic: publisher-apis-in-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.302Z
estimatedTokens: 1756
keywords: [Publisher, APIs, Salesforce, Classic, JavaScript, API, lets, Visualforce, pages, components, interact, actions, you’ve, added, record]
---

# Publisher APIs in Salesforce Classic

> The Salesforce Classic Publisher JavaScript API lets your Visualforce pages and
      components interact with actions you’ve added to a record page in a Salesforce Classic app for
      objects that are feed-enabled. The Publisher API works in Salesforce Classic apps with
      standard navigation and console navigation. For example, you could develop a component that
      generates customized, pre-written text, adds that text to a new post in the Case Feed portal
      action, and submits the post to the portal, all with one click.

# Publisher APIs in Salesforce Classic

The Salesforce Classic Publisher JavaScript API lets your Visualforce pages and components interact with actions you’ve added to a record page in a Salesforce Classic app for objects that are feed-enabled. The Publisher API works in Salesforce Classic apps with standard navigation and console navigation. For example, you could develop a component that generates customized, pre-written text, adds that text to a new post in the Case Feed portal action, and submits the post to the portal, all with one click.

| Available in: Salesforce Classic (not available in all orgs) |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


Use the publish method on the Sfdc.canvas.publisher object to allow console components to interact with quick actions.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=case_feed_dev)

#### Tip

Starting with API version 43.0 of the Salesforce Classic JavaScript Publisher API, the methods used in Visualforce components work in Lightning Experience. You can use Visualforce pages in Lightning Experience through custom quick actions, or by adding it to the page in the Lightning App Builder. Just point to the 43.0 version of the Publisher API script in your Visualforce pages.

```

```

If you use the JavaScript Publisher API methods in custom code in a Lightning app, the targeted quick actions must be visible on the page. If you target an action that isn’t visible on the page, it fails.

## publisher.selectAction

| Description | Payload Values | Available Versions |
| --- | --- | --- |
| Selects the specified action and puts it in focus. | actionName—The action to select. Supported values are:action_name–A create, log a call, or custom Visualforce quick action. For example, action_name for a create contact action might be create_contact.Case.CaseComment—Case Feed portal actionCase.ChangeStatus—Case Feed change status actionCase.Email—Case Feed email actionCase.LogACall—Case Feed log a call actionFeedItem.TextPost—Standard Chatter post action (Available in API versions 32.0 and later)SocialPostAPIName.SocialPost—Social post action (Available in API versions 32.0 and later) | Available in API versions 29.0 and later. |

Code Sample

This code snippet selects the email action and puts it in focus.

Sfdc.canvas.publisher.publish({name:"publisher.selectAction",payload:{actionName:"Case.Email"}});

## publisher.setActionInputValues

| Description | Payload Values | Available Versions |
| --- | --- | --- |
| Specifies which fields on the action should be populated with specific values, and what those values are. | actionName—The action on which fields should be populated.The available field values depend on which action you specify.emailFields–Available on Case.Email; the standard available fields on the Case Feed email action:toccbccsubjectbodytemplateportalPostFields–Available on Case.CaseComment; the standard available fields on the Case Feed portal action:bodysendEmail (boolean)targetFields–Available on Case.ChangeStatus , Case.LogACall, FeedItem.TextPost, and the Social action; the standard available fields on those actions.On Case.ChangeStatus: commentBodyOn Case.LogACall: descriptionOn FeedItem.TextPost: bodyAttributes on body are value and insertType (optional). Valid values for insertType are begin, end, cursor, and replace. The default value is replace. (Available in API versions 32.0 and later)On SocialPostAPIName.SocialPost: content and insertType (optional). Valid values for insertType are begin, end, cursor, and replace . The default value is replace. (Available in API versions 32.0 and later)parentFields—Available on Case.ChangeStatus, Case.Email, and Case.LogACall; standard and custom fields on case. Lookup fields aren’t supported. | Available in API versions 29.0 and later. |

Code Sample

This code snippet populates the fields on an email message with predefined values, and sets the status of the associated case to Closed.

```

```

This code snippet inserts the phrase “Hello World” in the body of the Post action at the current cursor position.

```

```

## publisher.invokeAction

| Description | Payload Values | Available Versions |
| --- | --- | --- |
| Triggers the submit function (such as sending an email or posting a portal comment) on the specified action. | actionName—The action on which to trigger the submit function. Supported actions are:Case.EmailCase.CaseCommentCase.ChangeStatusCase.LogACallFeedItem.TextPost (Available in API versions 32.0 and later)SocialPostAPIName.SocialPost (Available in API versions 32.0 and later) | Available in API versions 29.0 and later. |

Code Sample

This code snippet triggers the submit function on the email action, sending an email message and generating a related feed item.

Sfdc.canvas.publisher.publish({name:"publisher.invokeAction", payload:{actionName:"Case.Email"}});

## publisher.customActionMessage

| Description | Payload Values | Available Versions |
| --- | --- | --- |
| Passes a custom event to a custom action. Supported for Visualforce-based custom actions only. | actionName—The Visualforce custom action to pass the event to.message–The event to pass to the custom action. | Available in API versions 29.0 and later. |

Code Sample

This code snippet passes the Hello world event to the action my\_custom\_action.

Sfdc.canvas.publisher.publish({name:"publisher.customActionMessage", payload:{actionName:"my\_custom\_action", message:"Hello world"}});

This code snippet is what my\_custom\_action uses to listen to the Hello world event.

Sfdc.canvas.publisher.subscribe(\[{name : "publisher.customActionMessage", onData : function(e) {alert(e.message);}}\]);

## publisher.refresh

Refreshes the current record page. This method has no arguments.

## Use Case and Sample Code

## Example

Universal Cable serves millions of phone and cable customers throughout the United States, with 4000 support agents in call centers of varying sizes around the country. Universal wanted to make it easy for agents to access the company’s extensive collection of articles in Salesforce Knowledge and share them with customers through email to help keep support costs in check.

Universal used the events on publish to create a custom console component that:

-   Displays a list of Knowledge articles, from most recently published to oldest.
-   Lets agents view an article by clicking its title.
-   Lets agents add the full, formatted text of an article to a message in the Case Feed email action by clicking the **Email** button in the console component.

![Case Feed with Knowledge console component](/docs/resources/img/en-us/260.0?doc_id=images%2Fcase_feed_with_console_component.jpg&folder=case_feed_dev)

This code sample shows an Apex class containing a custom controller used by the Visualforce page below.

```

```

This code sample shows the Visualforce page that’s used as the custom console component in the use case above.

```

```

## Code Examples

```
<script src="/canvas/sdk/js/43.0/publisher.js" type="text/javascript"></script>
```

```
Sfdc.canvas.publisher.publish({name:"publisher.setActionInputValues",
    payload:{actionName:"Case.Email",parentFields: {Status:{value:"Closed"}},
    emailFields: {to:{value:"customer@company.com"},cc:{value:"customer2@company.com"},
    bcc:{value:"supervisor@company.com"},
subject:{value:"Your Issue Has Been Resolved"},
    body:{value:"Thank you for working with our support department.
        We've resolved your issue and have closed this ticket, but 
        please feel free to contact us at any time if you encounter this
        problem again or need other assistance."}}}});
```

```
Sfdc.canvas.publisher.publish({name:"publisher.setActionInputValues", payload:{actionName:"FeedItem.TextPost", targetFields:{body:{value:"Hello World", insertType:"cursor"}}}});
```

```apex
public with sharing class KBController {    
   public List<FAQ__kav> articles {get; set;}       

    public KBController() {       
       articles = [select knowledgearticleid, id, title, content__c from FAQ__kav where 
      publishstatus = 'Online' and language='en_US' order by lastpublisheddate];    
   }
}
```

```
<apex:page sidebar="false" controller="KBController">   
   <script type='text/javascript' src='/canvas/sdk/js/publisher.js'/>   
   <style>
      .sampleTitle { background-color: #99A3AC;color:#FFFFFF;font-size:1.1em;
      font-weight: bold;padding:3px 6px 3px 6px; }  
      .sampleHeader { }  
      .sampleArticleList { min-width: 250px; padding: 8px 0 5px 0;}  
      .sampleUl { padding: 0; margin: 0; list-style: none;}  
      .sampleLi { display: block; position: relative; margin: 0;}  
      .sampleRow { min-height: 16px; padding: 4px 10px;}  
      .emailBtn { margin: 1px 1px 1px 3px; padding: 3px 8px; color: #333; 
         border: 1px solid #b5b5b5; border-bottom-color: #7f7f7f; background: #e8e8e9; 
         font-weight: bold; font-size: .9em; -moz-border-radius: 3px;
         -webkit-border-radius: 3px; order-radius: 3px; }  
      .emailBtn:active { background-position: right -60px; border-color: #585858; 
         border-bottom-color: #939393; }       
      .sampleArticle { padding-left: 4px; padding-bottom: 2px; font-weight: bold; 
         font-size: 1em; color: #222; }  
      .sampleLink { color: #015ba7; text-decoration: none; font-weight: bold; 
         font-size: .9em; }    
   </style>    
   <script>
      function emailArticle(content) {   
         Sfdc.canvas.publisher.publish({name: 'publisher.selectAction', 
         payload: { actionName: 'Case.Email'}}); 
         Sfdc.canvas.publisher.publish({name: 'publisher.setActionInputValues', 
         payload: {
            actionName: 'Case.Email',
            emailFields: { body: { value:content, format:'richtext', insert: true}}
         }});
     }
   </script>
   <div style="margin-left:-10px;margin-right:-10px;">
      <div class="sampleTitle">Latest Articles</div>
      <div class="sampleHeader" style=""></div>
      <div class="sampleArticleList">
         <apex:repeat value="{!articles}" var="article">
            <ul class="sampleUl">
               <li class="sampleLi">
                  <div class="sampleRow">
                  <div style="display:none;" id="content_{!article.id}">
                     <apex:outputText value="{!article.content__c}" escape="false"/>
                  </div>
                     <input type="button" title="Email" value="Email" class="emailBtn" 
                        onclick="emailArticle(document.getElementById
                           ('content_{!article.id}').innerHTML);"/>
                           <span class="sampleArticle">
                               <a href="/{!article.knowledgearticleid}"
                                   title="{!article.title}" class="sampleLink">
                                  {!article.title}</a>
                           </span>
                  </div>
               </li>
            </ul>
         </apex:repeat>
      </div>
   </div>
</apex:page>
```
