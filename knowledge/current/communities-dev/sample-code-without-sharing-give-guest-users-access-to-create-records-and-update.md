---
title: "Sample Code Without Sharing: Give Guest Users Access to Create Records and Update Them
        Later"
domain: communities-dev
topic: sample-code-without-sharing-give-guest-users-access-to-create-records-and-update
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.453Z
estimatedTokens: 1008
keywords: [Sample, Code, Sharing, Give, Guest, Users, Access, Records, Later, samples, support, two, separate, interactions, interaction]
---

# Sample Code Without Sharing: Give Guest Users Access to Create Records and Update Them
        Later

> These code samples support two separate interactions. In the first interaction, the guest
        user creates a case. For security reasons, an Apex method replaces the record ID with an
        encrypted string. When the guest user wants to close the case later, they enter that
        encrypted string. An Apex method decrypts the string to get the record ID, uses the record
        ID to select the case, and updates the case’s status.

# Sample Code Without Sharing: Give Guest Users Access to Create Records and Update Them Later

These code samples support two separate interactions. In the first interaction, the guest user creates a case. For security reasons, an Apex method replaces the record ID with an encrypted string. When the guest user wants to close the case later, they enter that encrypted string. An Apex method decrypts the string to get the record ID, uses the record ID to select the case, and updates the case’s status.

## Aura Component: CreateCase.cmp

This sample Aura component displays components for record creation and closure.

To create a case, the guest user uses components to enter case details. After record creation, lightning:card components display the new case’s encrypted token or the status of the case that matches the token.

For demonstration purposes, this sample displays a component where the guest user enters the case’s token directly. To implement this scenario, provide the guest user with a link that contains the token, and retrieve the token from the URL.

```

```

## Component Controller: CreateCaseController.js

This sample JavaScript controller processes events for the Aura component and calls the methods in the helper file.

```

```

## JavaScript Helper: CaseHelper.js

This JavaScript helper has two methods:

makeCase()

The makeCase() method creates an asynchronous request to create a case with the submitted data. When the request completes, the callback stores the new case’s unique token in the caseID field in a variable used by the Aura component.

updateCase()

The updateCase() method uses a token entered by the guest user to asynchronously update the case that matches the token. The method’s callback catches the response from the Apex method and stores the value in the case\_status variable.

```

```

## Apex Controller: GuestUserCreateForLater.cls

This sample Apex controller receives calls to create and update cases. It uses the [User Encryption Decryption](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FYjU2UAL) AppExchange package to encrypt and decrypt data.

CreateCase()

The CreateCase() Apex method creates a case with the guest user’s input. After record creation, it generates an encrypted string from the record ID, the record’s CreatedDate field, and the current timestamp. The Apex replaces the new case’s ID with the encrypted string.

UpdateCase()

The UpdateCase() method decrypts the provided string, validates the results, and uses the information to update the original record’s status. The response is the status of the record or an error message, if one occurred.

Define the class with the with sharing keyword because it doesn’t directly access the records.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=communities_dev)

#### Warning

Any system or individual on the internet can invoke @AuraEnabled classes. Make sure that the query can update only the correct record.

```

```

## Apex Helper Class: GuestUserCaseHelperWS.apxc

This sample Apex helper class defines methods that retrieve a record by its ID and update a record. The Apex controller calls this method.

Define the class with the without sharing keyword so that it can retrieve and update the record without requiring sharing.

```

```

#### See Also

-   [*Salesforce Help*: Secure Guest Users’ Sharing Settings and Record Access](https://help.salesforce.com/articleView?id=networks_secure_guest_user_sharing.htm&language=en_US "Salesforce Help: Secure Guest Users’ Sharing Settings and Record
    Access - HTML (New Window)")

-   [*Apex Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm "Apex Developer Guide - HTML (New Window)")

-   [*Lightning Aura Components Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/intro_framework.htm "Lightning Aura Components Developer Guide - HTML (New Window)")

## Code Examples

```
<aura:component controller="GuestUserCreateForLater">
    <aura:attribute name="caseID" type="String"/>
    <aura:attribute name="case_status" type="String"/>
    <aura:attribute name="subject" type="String"/>
    <aura:attribute name="description" type="String"/>
    <aura:attribute name="email" type="String"/>

     Enter details to create a new case
    <lightning:input type="email" name="email" required="true" value="{!v.email}" aura:id="email" label="Where should we send email updates?"/>
    <lightning:input name="subject" label="Subject" required="true" value="{!v.subject}" aura:id="subject"/>
    <lightning:textarea name="description" required="true" label="Description" value="{!v.description}" aura:id="description"/>
    <lightning:button name="submit" variant="brand" label="Create case" title="Create case" onclick="{!c.submitCase}"/>
        
    <aura:if isTrue="{!v.caseID}">
        <lightning:card title="Case">
            <p class="slds-p-horizontal--small">
                New case created:
                <p>{!v.caseID}</p>
            </p>
        </lightning:card>
    </aura:if>

    Or enter an existing case token to close the case
    <lightning:textarea name="existing_case" required="false" label="Existing case token" aura:id="existing_case"/>
	<lightning:button name="submit" variant="brand" label="Close case" title="Close case" onclick="{!c.updateCase}"/>
    <aura:if isTrue="{!v.case_status}">
        <lightning:card title="Case">
            <p class="slds-p-horizontal--small">
                Case status: 
                <p>{!v.case_status}</p>
            </p>
        </lightning:card>
    </aura:if>
</aura:component>
```

```
({
    submitCase : function(component, event, helper) {
        helper.makeCase(component, event, helper);
    },
    updateCase : function(component,event,helper){
        helper.updateCase(component,event,helper);
    }
})
```

```
({
    makeCase : function(component, event, helper) {
        var subject = component.find("subject").get("v.value");
        var description = component.find("description").get("v.value");
        var email = component.find("email").get("v.value");

        var action = component.get("c.CreateCase");
        action.setParams({
            "subject": subject,
            "description": description,
            "email": email
        });
        action.setCallback(this, function(response){
            component.set("v.caseID", response.getReturnValue());
        });
        $A.enqueueAction(action);
    },
    updateCase : function(component,event,helper){
        var case_token = component.find("existing_case").get("v.value");
        var action = component.get("c.UpdateCase");
        action.setParams({
            "token":case_token
        });
        action.setCallback(this, function(response){
            component.set("v.case_status", response.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})
```

```apex
public with sharing class GuestUserCreateForLater {
    
    @AuraEnabled
    public static String CreateCase(String subject, 
                                         String description, 
                                         String email){
		Case new_case = new Case(Subject=subject, 
                                 Description=description,
                                 SuppliedEmail=email);
        insert new_case;
        
       List<Case> results = GuestUserCaseHelperWS.getCase(new_case.Id);


        String encryptedID = ued.UserCryptoHelper.doEncrypt(results[0].Id+'|'+ results[0].CreatedDate.getTime() +'|'+System.DateTime.now().getTime());
        return encryptedID;
    }
    
    public static final Long validTimestampMinutes = 10;

    @AuraEnabled
    public static String UpdateCase(String token){
        String status = 'Case not found';
        String decrypted_token = '';
        try {
            decrypted_token = ued.UserCryptoHelper.doDecrypt(token);
        } catch(Exception e) {
            return status;
        }
        String[] decrypted_parts = decrypted_token.split('\\|');
        String decryptedRecordId = decrypted_parts[0];
        String created_timestamp = decrypted_parts[1];
        String original_request_timestamp = decrypted_parts[2];


        if( isTimestampValid(System.Long.valueOf(original_request_timestamp))) {

        	List<Case> caseList = GuestUserCaseHelperWS.getCase(decryptedRecordId, created_timestamp);
            if(caseList.size() == 1){
    	       Case case_to_update = caseList[0];
                        case_to_update.Status = 'Closed';
                try {
                         GuestUserCaseHelperWS.updateCase(case_to_update);
                         status = 'Closed';
                } catch(DmlException e){
                         System.debug('An unexpected error has occurred: ' + e.getMessage());
                }
            }else{
                status = 'Case not found';
            }
        }
        return status;
    }

    private static Boolean isTimestampValid(Long timestamp)
    {
        return ((System.now().getTime() - timestamp) / 60000) < validTimestampMinutes;
    }
}
```

```apex
public without sharing class GuestUserCaseHelperWS {

    public static List<Case> getCase(String caseID, Datetime created_date)
    {
        List<Case> results = [SELECT Case.CaseNumber, Case.CreatedDate, Case.Status  
        FROM Case 
        WHERE Case.Id=:caseIDAND Case.CreatedDate=:created_date];
        return results;
    }

    public static Case updateCase(Case case_to_update)
    {
        update case_to_update;
        return case_to_update;
    }
}
```
