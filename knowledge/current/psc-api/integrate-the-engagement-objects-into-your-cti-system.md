---
title: "Integrate the Engagement Objects Into Your CTI System"
domain: psc-api
topic: integrate-the-engagement-objects-into-your-cti-system
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:31.577Z
estimatedTokens: 904
keywords: [Integrate, Engagement, Objects, CTI, System, Modify, adapter, customer, service, representative, CSR, accepts, incoming, call, softphone]
---

# Integrate the Engagement Objects Into Your CTI System

> Modify your CTI adapter so that when a customer service representative (CSR) accepts an
        incoming call using the softphone, an engagement interaction record for the call is created.
        Engagement Interaction is part of the Engagement data model, which has two other objects,
        Engagement Attendee and Engagement Topic. These objects store details such as the start and
        end date and time of an interaction, what an interaction is about, and attendee
        details.

# Integrate the Engagement Objects Into Your CTI System

Modify your CTI adapter so that when a customer service representative (CSR) accepts an incoming call using the softphone, an engagement interaction record for the call is created. Engagement Interaction is part of the Engagement data model, which has two other objects, Engagement Attendee and Engagement Topic. These objects store details such as the start and end date and time of an interaction, what an interaction is about, and attendee details.

## Modifications to the CTI Adapter

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=psc_api)

#### Note

We use the Open CTI demo adapter as an example to describe the changes that you’re required to make. To interact with the engagement objects, make similar modifications to your adapter using Engagement Connect APIs or the sObject API.

The Engagement Connect APIs ([REST](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/engagement_connect_apis.htm) or [Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/service_excellence_apex_reference.htm)) provide a way to create, get, and delete engagement attendee, engagement interaction, and engagement topic records.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=psc_api)

#### Note

Using the Connect APIs, you can perform all three operations on all three engagement objects in a single API call.

Alternatively, use the sObject API to perform CRUD operations on the engagement objects.

The demo adapter triggers an Aura component code when an incoming call is accepted using the softphone. The callInitiatedPanel.cmp is displayed that contains the accept listener.

```

```

At the same time, an event is raised, which is captured by the accept method in the callInitiatedPanelController.js file.

```

```

The method brings up the Connected panel defined in the helper. The panel contains the SoftphoneContactSearchController Apex class, which is called from the callInitiatedPanelHelper.js file.

```

```

The SoftphoneContactSearchController Apex class contains the createEngagementInteraction method, which uses the connect API to create an engagement interaction record as shown in this example:

```

```

if you want to create engagement attendee and engagement topic records along with the engagement interaction record using the connect API, you can change the input to the createEngagementInteraction method. . This example shows how to create engagement attendee records using the Connect API:

```

```

Engagement attendee records for internal attendees of an engagement are automatically created after an engagement interaction record is created. If necessary, stop the automatic creation of engagement attendee records by turning off the [Auto-Creation of Internal Attendee Record](https://help.salesforce.com/s/articleView?id=ind.disable_automatic_creation_of_attendees.htm&type=5&language=en_US) org preference.

When the call ends, another Aura component code is triggered.

```

```

The endCall listener invokes the endCall method in the connectedPanelController.js file.

```

```

If necessary, add methods to update engagement interaction, engagement attendee, and engagement topic records to the SoftphoneContactSearchController Apex class.

Alternatively, use the sObject API to perform CRUD operations on the engagement objects. This example shows how to create or edit engagement attendee or engagement topic records using the sObject API:

```

```

## Code Examples

```
<button class="slds-size--1-of-2 slds-button slds-button--brand"
onclick="{!c.accept}">Accept</button>
```

```
accept : function(cmp, event, helper) {
helper.renderConnectedPanel(cmp);
},
```

```
renderConnectedPanel : function(cmp){
    var recordId = cmp.get('v.recordId');
    var account = cmp.get('v.account');
    var recparam=(recordId)?recordId:'UNKNOWN';
    sforce.opencti.runApex({
        apexClass : 'SoftphoneContactSearchController',
        methodName : 'createEngagementInteraction',
        methodParams : 'recordId='+recparam ,
        callback : function(result) {
            cmp.getEvent('editPanel').setParams({
                label : 'Open CTI Softphone: ' + cmp.get('v.state')
            }).fire();
            if (result.success) {
                sforce.opencti.screenPop({
                    type : sforce.opencti.SCREENPOP_TYPE.SOBJECT,
                    params : { recordId : result.returnValue.runApex }
                });
            } else {
                throw new Error('Unable to make a call. Contact your admin.');
            }
            cmp.getEvent('renderPanel').setParams({
                type : 'c:connectedPanel',
                attributes : {
                    showDialPad : false,
                    recordId : recordId,
                    engagementId : result.returnValue.runApex,
                    callType : 'Inbound',
                    account : account,
                    recordName: cmp.get('v.recordName'),
                    presence : cmp.get('v.presence')
                }
            }).fire();
        }
    });
}
```

```
// Create Engagement Interaction using connect API
webService static String createEngagementInteraction(String recordId) {
    system.debug('In create Engagement Interaction');
    ConnectApi.EngagementInteractionCreateInput interactionInput = new
ConnectApi.EngagementInteractionCreateInput();
    interactionInput.communicationChannel = 'Voice Call';
    interactionInput.attendeeVerified = false;
    interactionInput.startDateTime =
datetime.now().formatGMT('yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'');
    interactionInput.status = 'New';
    if(recordId !='UNKNOWN' ){
        interactionInput.initiatingAttendeeId = recordId;
        interactionInput.attendeeAuthenticated = true;
    }
    ConnectApi.EngagementsCreateInput containerInput = new
ConnectApi.EngagementsCreateInput();
    containerInput.engagementInteraction = interactionInput;
    ConnectApi.EngagementsCreateOutput output =
ConnectApi.EngagementContainerConnect.createEngagementInteraction(containerInput);
    return output.engagementInteraction.id;
}
```

```apex
List<ConnectApi.EngagementAttendeeCreateInput> eaList = new
List<ConnectApi.EngagementAttendeeCreateInput>();
ConnectApi.EngagementAttendeeCreateInput internalAttendeeInput = new
ConnectApi.EngagementAttendeeCreateInput();
internalAttendeeInput.startDateTime =
datetime.now().formatGMT('yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'');
internalAttendeeInput.internalAttendeeId = UserInfo.getUserId();
eaList.add(internalAttendeeInput);
if(recordId !='UNKNOWN' ){
    ConnectApi.EngagementAttendeeCreateInput externalAttendeeInput = new
ConnectApi.EngagementAttendeeCreateInput();
    externalAttendeeInput.startDateTime =
datetime.now().formatGMT('yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'');
    externalAttendeeInput.externalAttendeeId = recordId;
    eaList.add(externalAttendeeInput);
}
interactionInput.engagementAttendees = eaList;
```
