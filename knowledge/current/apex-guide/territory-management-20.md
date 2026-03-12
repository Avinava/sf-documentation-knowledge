---
title: "Territory Management 2.0"
domain: apex-guide
topic: territory-management-20
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:32.156Z
estimatedTokens: 287
keywords: [Territory, Management, 2.0, trigger, support, Territory2, UserTerritory2Association, standard, objects, automate, actions, processes, related, changes, territory, management, records., Sample, Trigger]
---

# Territory Management 2.0

> With trigger support for the Territory2 and UserTerritory2Association standard objects,
        you can automate actions and processes related to changes in these territory management
        records.

# Territory Management 2.0

With trigger support for the Territory2 and UserTerritory2Association standard objects, you can automate actions and processes related to changes in these territory management records.

## Sample Trigger for Territory2

This example trigger fires after Territory2 records have been created or deleted. This example trigger assumes that an organization has a custom field called TerritoryCount\_\_c defined on the Territory2Model object to track the net number of territories in each territory model. The trigger code increments or decrements the value in the TerritoryCount\_\_c field each time a territory is created or deleted.

```

```

## Sample Trigger for UserTerritory2Association

This example trigger fires after UserTerritory2Association records have been created. This example trigger sends an email notification to the Sales Operations group letting them know that users have been added to territories. It identifies the user who added users to territories. Then, it identifies each added user along with which territory the user was added to and which territory model the territory belongs to.

```

```

## Code Examples

```apex
trigger maintainTerritoryCount on Territory2 (after insert, after delete) {
    // Track the effective delta for each model
    Map<Id, Integer> modelMap = new Map<Id, Integer>();
    for(Territory2 terr : (Trigger.isInsert ? Trigger.new : Trigger.old)) {
       Integer offset = 0;
       if(modelMap.containsKey(terr.territory2ModelId)) {
           offset = modelMap.get(terr.territory2ModelId);
       }
       offset += (Trigger.isInsert ? 1 : -1);
       modelMap.put(terr.territory2ModelId, offset);
    }
    // We have a custom field on Territory2Model called TerritoryCount__c
    List<Territory2Model> models = [SELECT Id, TerritoryCount__c FROM 
                            Territory2Model WHERE Id IN :modelMap.keySet()];
    for(Territory2Model tm : models) {
       // In case the field is not defined with a default of 0
       if(tm.TerritoryCount__c == null) {
           tm.TerritoryCount__c = 0;
       }
       tm.TerritoryCount__c += modelMap.get(tm.Id);
    }
    // Bulk update the field on all the impacted models
    update(models);
}
```

```apex
trigger notifySalesOps on UserTerritory2Association (after insert) {
    // Query the details of the users and territories involved
    List<UserTerritory2Association> utaList = [SELECT Id, User.FirstName, User.LastName, 
       Territory2.Name, Territory2.Territory2Model.Name 
       FROM UserTerritory2Association WHERE Id IN :Trigger.New];
            
    // Email message to send
    Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
    mail.setToAddresses(new String[]{'salesOps@acme.com'}); 
    mail.setSubject('Users added to territories notification');     
            
    // Build the message body   
    List<String> msgBody = new List<String>();
    String addedToTerrStr = '{0}, {1} added to territory {2} in model {3} 
';    
    msgBody.add('The following users were added to territories by ' +  
        UserInfo.getFirstName() + ', ' + UserInfo.getLastName() + '
');
    for(UserTerritory2Association uta : utaList) {
       msgBody.add(String.format(addedToTerrStr, 
           new String[]{uta.User.FirstName, uta.User.LastName,
                        uta.Territory2.Name, uta.Territory2.Territory2Model.Name}));    
    } 
    
    // Set the message body and send the email
    mail.setPlainTextBody(String.join(msgBody,''));
    Messaging.sendEmail(new Messaging.Email[] { mail });
}
```
