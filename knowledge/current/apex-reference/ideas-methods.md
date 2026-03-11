---
title: "Ideas Methods"
domain: apex-reference
topic: ideas-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.307Z
keywords: [Ideas, Methods, Returns, list, similar, ideas, based, title, specified, idea., findSimilar, idea, Signature, Parameters, Return, Value, Usage, getAllRecentReplies, userID, communityID]
---

# Ideas Methods

> Returns a list of similar ideas based on the title of the specified idea.

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