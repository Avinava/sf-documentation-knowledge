---
title: "Create Custom Component for Guest User Flows"
domain: lightning
topic: create-custom-component-for-guest-user-flows
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.182Z
estimatedTokens: 402
keywords: [Custom, Component, Guest, User, Flows, Allow, Experience, Cloud, users, provide, alternative, registration, screens, complex, decision]
---

# Create Custom Component for Guest User Flows

> Allow flows for your Experience Cloud guest users to provide alternative user
        registration screens, complex decision trees, and conditional forms to gather user
        information. The following example uses the Site Class API. For more information, see “Site
        Class” in the Salesforce Apex Developer Guide.

# Create Custom Component for Guest User Flows

Allow flows for your Experience Cloud guest users to provide alternative user registration screens, complex decision trees, and conditional forms to gather user information. The following example uses the Site Class API. For more information, see “Site Class” in the Salesforce Apex Developer Guide.

## 1\. Create a Custom Aura Component

Using Guest User Flows for login or self registration requires a custom component that implements lightning:availableForFlowScreens.

Here’s the sample code for a simple data collection preferences flow.

```

```

Controller file:

```

```

Design file:

```

```

## 2\. Create an Apex Class

The following example creates a class, CommunitySelfRegController, which is used with your Aura component to register new Experience Cloud site users.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Adding self registration with a flow requires the following:

-   The UserPreferencesHideS1BrowserUI preference should be set to True. This prevents the mobile UI from defaulting to the Salesforce Mobile App interface rather than your Experience Builder site.
-   CommunityNickname is required and must be a unique value.
-   The self registration preference should be enabled in your site with a valid profile and account.

```

```

#### See Also

-   [*Salesforce Help*: Allow Guest Users to Access Flows](https://help.salesforce.com/HTViewHelpDoc?id=rss_flow_guestuser.htm&language=en_US "Salesforce Help: Allow Guest Users to Access
    Flows - HTML (New Window)")

## Code Examples

```
<aura:component implements="lightning:availableForFlowScreens" controller="CommunitySelfRegController">
    <aura:attribute name="email" type="String" default=""/>
    <aura:attribute name="fname" type="String" default=""/>
    <aura:attribute name="lname" type="String" default=""/>
    <aura:attribute name="starturl" type="String" default=""/>
    <aura:attribute name="password" type="String" default=""/>
    <aura:attribute name="hasOptedTracking" type="Boolean" default="false"/>
    <aura:attribute name="hasOptedSolicit" type="Boolean" default="false"/>
    <aura:attribute name="op_url" type="String" default="" description="login url after user is created. "/>
    
    <aura:handler name="init" value="{!this}" action="{!c.init}" />
    
    <aura:if isTrue="{! (empty(v.op_url))}">
        <!-- empty url, the user is not yet created  -->
        <h3> Registering user. Please wait. </h3>
        
        <aura:set attribute="else">
            <!-- User created, show link to login -->
            <h3> Success! Your account has been created. </h3>
            
            <button class="slds-button slds-button_neutral" onclick="{!c.login}">Login</button>
        </aura:set>
    </aura:if>
</aura:component>
```

```
({
    init : function(cmp) {
        let email = cmp.get("v.email"), 
            fname = cmp.get("v.fname"), 
            lname = cmp.get("v.lname"), 
            pass = cmp.get("v.password"), 
            startUrl = cmp.get("v.starturl"), 
            hasOptedSolicit = cmp.get("v.hasOptedSolicit"),
            hasOptedTracking = cmp.get("v.hasOptedTracking");
       
        let action = cmp.get("c.createExternalUser");
        action.setParams(
            { 
                username: email, 
                password: pass, 
                startUrl: startUrl,
                fname: fname, 
                lname: lname,
                hasOptedTracking: hasOptedTracking,
                hasOptedSolicit: hasOptedSolicit
            });

        action.setCallback(this, function(res) {
            if (action.getState() === "SUCCESS") {
                cmp.set("v.op_url", res.getReturnValue());
            } 
        });
        $A.enqueueAction(action);
    }, 
    
    login: function(cmp){
        let url = cmp.get("v.op_url"); 
        window.location.href = url;  
    }
})
```

```
<design:component>
    <design:attribute name="email" />
    <design:attribute name="fname"  />
    <design:attribute name="lname" />
    <design:attribute name="password" />
    <design:attribute name="hasOptedTracking" />
    <design:attribute name="hasOptedSolicit" />
</design:component>
```

```apex
public class CommunitySelfRegController {
    @AuraEnabled
    public static String createExternalUser(
        String username, String password, String startUrl, String fname, 
        String lname, Boolean hasOptedTracking, Boolean hasOptedSolicit) {
            Savepoint sp = null;
            try {
                sp = Database.setsavepoint();
                system.debug(sp);
                
                // Creating a user object. 
                User u = new User();
                u.Username = username;
                u.Email = username;
                u.FirstName = fname;
                u.LastName = lname;

                // Default UI for mobile is set to S1 for user created using site object. 
                // Enable this perm to change it to community (Experience Cloud).
                u.UserPreferencesHideS1BrowserUI = true;
                
                // Generating unique value for Experience Cloud nickname. 
				String nickname = ((fname != null && fname.length() > 0) ? fname.substring(0,1) : '' ) + lname.substring(0,1);
            	nickname += String.valueOf(Crypto.getRandomInteger()).substring(1,7);
                u.CommunityNickname = nickname;
                
                System.debug('creating user');
                
                // Creating portal user. 
                // Passing in null account ID forces the system to read this from the network setting (set using Experience Workspaces).
                String userId = Site.createPortalUser(u, null, password);
                
                // Setting consent selection values. 
                // For this, GDPR (Individual and Consent Management) needs to be enabled in the org. 
                Individual ind = new Individual();
                ind.LastName = lname;
                ind.HasOptedOutSolicit = !hasOptedSolicit;
                ind.HasOptedOutTracking = !hasOptedTracking;
                insert(ind);
                
                // Other contact information can be updated here. 
                Contact contact = new Contact();
                contact.Id = u.ContactId;
                contact.IndividualId = ind.Id;
                update(contact);       
                
                // return login url. 
                if (userId != null && password != null && password.length() > 1) {  
                    ApexPages.PageReference lgn = Site.login(username, password, startUrl);
                    return lgn.getUrl();
                }
            }
            catch (Exception ex) {
                Database.rollback(sp);
                System.debug(ex.getMessage());
                return null;
            }
            return null; 
        }   
}
Collapse 
    
}
```
