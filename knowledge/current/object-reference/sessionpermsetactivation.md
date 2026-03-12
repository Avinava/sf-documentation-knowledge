---
title: "SessionPermSetActivation"
domain: object-reference
topic: sessionpermsetactivation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:16.986Z
estimatedTokens: 672
keywords: [SessionPermSetActivation, permission, assignment, activated, individual, user, session, inserted, activation, event, fires, allowing, settings, apply, user’s]
---

# SessionPermSetActivation

> The SessionPermSetActivation object represents a
   permission set assignment activated during an individual user session. When a SessionPermSetActivation object is inserted into a
   permission set, an activation event fires, allowing the permission settings to apply to the
   user’s specific session. This object is available in API versions 37.0 and
  later.

# SessionPermSetActivation

The SessionPermSetActivation object represents a permission set assignment activated during an individual user session. When a SessionPermSetActivation object is inserted into a permission set, an activation event fires, allowing the permission settings to apply to the user’s specific session. This object is available in API versions 37.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

If you include session-based permission sets in a permission set group, the permissions in them do not require session-based activation for users assigned to the group.

## Special Access Rules

As of Summer ’20 and later, only users who have one of these permissions can access this object:

-   View Setup and Configuration
-   Manage Session Permission Set Activations

## Fields

| Field Name | Details |
| --- | --- |
| AuthSessionId | TypereferencePropertiesFilter, Group, SortDescriptionThe session ID related to this permission set assignment for its duration.This is a relationship field.Relationship NameAuthSessionRelationship TypeLookupRefers ToAuthSession |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe session details, such as device used and browser. |
| PermissionSetGroupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe permission set group ID related to this permission set group assignment and user for its duration. This field is available in API version 53.0 and later.This is a relationship field.Relationship NamePermissionSetGroupRelationship TypeLookupRefers ToPermissionSetGroup |
| PermissionSetId | TypereferencePropertiesFilter, Group, SortDescriptionThe permission set ID related to this permission set assignment and user for its duration.This is a relationship field.Relationship NamePermissionSetRelationship TypeLookupRefers ToPermissionSet |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionThe user ID of the user to whom this permission set assignment applies for its duration.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |

## Usage

Use SessionPermSetActivation to create a permission set available only for a specified session’s duration. For example, create permission sets that provide access to specific applications only during authenticated sessions.

In the following Apex example, an identified session is activated after session information is submitted via a button. Successful activation results in a confirmation message displayed to the user.

```

```

## Code Examples

```apex
public class SessionPermSetActivationController {
    // id of the session permission set to be activated
    private final String sessionPermSetId = '0PSxx00000004rJ';
    private final String sessionId; 
    
    public SessionPermSetActivationController() {
        Map<String, String> sessionManagement = Auth.SessionManagement.getCurrentSession();
        String parentSessionId = sessionManagement.get('ParentId');
        String currentSessionId = sessionManagement.get('SessionId');
        
        sessionId = parentSessionId != null ? parentSessionId : currentSessionId;
    }
    
    public PageReference activate() {
        // activate the permission set
        SessionPermSetActivation activation = new SessionPermSetActivation();
        activation.AuthSessionId = sessionId;
        activation.PermissionSetId = sessionPermSetId;
        activation.Description = 'created by SessionPermSetActivationController';
    
        insert activation;
        return null;
    }
    
    public boolean getActivated() {
        Integer alreadyActivated =  [SELECT count()  
                                            FROM SessionPermSetActivation  
                                            WHERE AuthSessionId = :sessionId
                                            And PermissionSetId = :sessionPermSetId  LIMIT 1];
        return alreadyActivated > 0;
    }
}


<apex:page controller="SessionPermSetActivationController">
      <apex:outputPanel rendered="{!!Activated}">
          <h3>Activate Session Permission Set</h3>
          <br />
          <apex:form >
                <apex:commandButton action="{!activate}" value="Activate" id="activateButton"/>
          </apex:form>
      </apex:outputPanel>
      <apex:outputPanel rendered="{!Activated}">
          <h3>Session Permission Set is already active.</h3>
      </apex:outputPanel>
</apex:page>
```
