---
title: "Ideas Class"
domain: apex-reference
topic: ideas-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.575Z
estimatedTokens: 2054
namespace: System
keywords: [Ideas, Represents, zone, ideas., Usage, Example, findSimilar, idea, getAllRecentReplies, userID, communityID, getReadRecentReplies, getUnreadRecentReplies, markRead, ideaID]
---

# Ideas Class

> Represents zone ideas.

**Namespace:** `System`

# Ideas Class

Represents zone ideas.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Ideas is a zone of users who post, vote for, and comment on ideas. An Ideas zone provides an online, transparent way for you to attract, manage, and showcase innovation.

A set of recent replies (returned by methods, see below) includes ideas that a user posted or commented on that already have comments posted by another user. The returned ideas are listed based on the time of the last comment made by another user, with the most recent ideas appearing first.

The userID argument is a required argument that filters the results so only the ideas that the specified user has posted or commented on are returned.

The communityID argument filters the results so only the ideas within the specified zone are returned. If this argument is the empty string, then all recent replies for the specified user are returned regardless of the zone.

For more information on ideas, see “Using Ideas” in the Salesforce online help.

## Example

The following example finds ideas in a specific zone that have similar titles as a new idea:

```

```

The following example uses a Visualforce page in conjunction with a custom controller, that is, a special Apex class. For more information on Visualforce, see the [Visualforce Developer's Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/ "Adobe Acrobat PDF (New Window)").

This example creates an Apex method in the controller that returns unread recent replies. You can leverage this same example for the getAllRecentReplies and getReadRecentReplies methods. For this example to work, there must be ideas posted to the zone. In addition, at least one zone member must have posted a comment to another zone member's idea or comment.

```

```

The following is the markup for a Visualforce page that uses the above custom controller to list unread recent replies.

```

```

The following example uses a Visualforce page in conjunction with a custom controller to list ideas. Then, a second Visualforce page and custom controller is used to display a specific idea and mark it as read. For this example to work, there must be ideas posted to the zone.

```

```

The following is the markup for a Visualforce page that uses the above custom controller to list ideas:

```

```

The following example also uses a Visualforce page and custom controller, this time, to display the idea that is selected on the above idea list page. In this example, the markRead method marks the selected idea and associated comments as read by the user that is currently logged in. Note that the markRead method is in the constructor so that the idea is marked read immediately when the user goes to a page that uses this controller. For this example to work, there must be ideas posted to the zone. In addition, at least one zone member must have posted a comment to another zone member's idea or comment.

```

```

The following is the markup for a Visualforce page that uses the above custom controller to display the idea as read.

```

```

## Ideas Methods

The following are methods for Ideas. All methods are static.

-   **[findSimilar(idea)](atlas.en-us.apexref.meta/apexref/apex_classes_ideas.htm#apex_System_Ideas_findSimilar)**
    Returns a list of similar ideas based on the title of the specified idea.
-   **[getAllRecentReplies(userID, communityID)](atlas.en-us.apexref.meta/apexref/apex_classes_ideas.htm#apex_System_Ideas_getAllRecentReplies)**
    Returns ideas that have recent replies for the specified user or zone. This includes all read and unread replies.
-   **[getReadRecentReplies(userID, communityID)](atlas.en-us.apexref.meta/apexref/apex_classes_ideas.htm#apex_System_Ideas_getReadRecentReplies)**
    Returns ideas that have recent replies marked as read.
-   **[getUnreadRecentReplies(userID, communityID)](atlas.en-us.apexref.meta/apexref/apex_classes_ideas.htm#apex_System_Ideas_getUnreadRecentReplies)**
    Returns ideas that have recent replies marked as unread.
-   **[markRead(ideaID)](atlas.en-us.apexref.meta/apexref/apex_classes_ideas.htm#apex_System_Ideas_markRead)**
    Marks all comments as read for the user that is currently logged in.

### findSimilar(idea)

Returns a list of similar ideas based on the title of the specified idea.

#### Signature

public static ID\[\] findSimilar(Idea idea)

#### Parameters

idea

Type: Idea

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\[\]

#### Usage

Each findSimilar call counts against the SOSL query limits. See [Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm).

### getAllRecentReplies(userID, communityID)

Returns ideas that have recent replies for the specified user or zone. This includes all read and unread replies.

#### Signature

public static ID\[\] getAllRecentReplies(String userID, String communityID)

#### Parameters

userID

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

communityID

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\[\]

#### Usage

Each getAllRecentReplies call counts against the SOQL query limits. See [Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm).

### getReadRecentReplies(userID, communityID)

Returns ideas that have recent replies marked as read.

#### Signature

public static ID\[\] getReadRecentReplies(String userID, String communityID)

#### Parameters

userID

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

communityID

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\[\]

#### Usage

Each getReadRecentReplies call counts against the SOQL query limits. See [Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm).

### getUnreadRecentReplies(userID, communityID)

Returns ideas that have recent replies marked as unread.

#### Signature

public static ID\[\] getUnreadRecentReplies(String userID, String communityID)

#### Parameters

userID

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

communityID

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\[\]

#### Usage

Each getUnreadRecentReplies call counts against the SOQL query limits. See [Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm).

### markRead(ideaID)

Marks all comments as read for the user that is currently logged in.

#### Signature

public static Void markRead(String ideaID)

#### Parameters

ideaID

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

## Code Examples

```apex
public class FindSimilarIdeasController {

   public static void test() {
      // Instantiate a new idea 
      Idea idea = new Idea ();

      // Specify a title for the new idea
      idea.Title = 'Increase Vacation Time for Employees';

      // Specify the communityID (INTERNAL_IDEAS) in which to find similar ideas. 
      Community community = [ SELECT Id FROM Community WHERE Name = 'INTERNAL_IDEAS' ];

      idea.CommunityId = community.Id;

      ID[] results = Ideas.findSimilar(idea);
   }
}
```

```apex
// Create an Apex method to retrieve the recent replies marked as unread in all communities
public class IdeasController {

   public Idea[] getUnreadRecentReplies() {
       Idea[] recentReplies;
       if (recentReplies == null) {
           Id[] recentRepliesIds = Ideas.getUnreadRecentReplies(UserInfo.getUserId(), '');
           recentReplies = [SELECT Id, Title FROM Idea WHERE Id IN :recentRepliesIds];
       }
       return recentReplies;                                                                      
  }

}
```

```
<apex:page controller="IdeasController" showHeader="false">
    <apex:dataList value="{!unreadRecentReplies}" var="recentReplyIdea">
           <a href="/apex/viewIdea?id={!recentReplyIdea.Id}">
                 <apex:outputText value="{!recentReplyIdea.Title}" escape="true"/></a>
     </apex:dataList>             
</apex:page>
```

```apex
// Create a controller to use on a VisualForce page to list ideas
public class IdeaListController {

    public final Idea[] ideas {get; private set;}

    public IdeaListController() {
        Integer i = 0;
        ideas = new Idea[10];
        for (Idea tmp : Database.query
('SELECT Id, Title FROM Idea WHERE Id != null AND parentIdeaId = null LIMIT 10')) {
            i++;
            ideas.add(tmp);
        }
    }
}
```

```
<apex:page controller="IdeaListController" tabStyle="Idea" showHeader="false">

        <apex:dataList value="{!ideas}" var="idea" id="ideaList">
            <a href="/apex/viewIdea?id={!idea.id}">
<apex:outputText value="{!idea.title}" escape="true"/></a>                       
        </apex:dataList>

</apex:page>
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- findSimilar(idea) (atlas.en-us.apexref.meta/apexref/apex_classes_ideas.htm)
- getAllRecentReplies(userID, communityID) (atlas.en-us.apexref.meta/apexref/apex_classes_ideas.htm)
- getReadRecentReplies(userID, communityID) (atlas.en-us.apexref.meta/apexref/apex_classes_ideas.htm)
- getUnreadRecentReplies(userID, communityID) (atlas.en-us.apexref.meta/apexref/apex_classes_ideas.htm)
- markRead(ideaID) (atlas.en-us.apexref.meta/apexref/apex_classes_ideas.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
