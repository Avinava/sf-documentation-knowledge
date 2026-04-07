---
title: "Delete a Subscriber Profile Attribute"
domain: mc-apis
topic: delete-a-subscriber-profile-attribute
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:21.498Z
estimatedTokens: 597
keywords: [Subscriber, Profile, Attribute, deleting, SOAP, API, Why, How, Sample, Java, Code, Axis, 1.4]
---

# Delete a Subscriber Profile Attribute

> This page contains information  about deleting a subscriber profile attribute using the SOAP API.

# Delete a Subscriber Profile Attribute

This page contains information about deleting a subscriber profile attribute using the SOAP API.

## Why Delete a Subscriber Profile Attribute

You can remove subscriber profile attributes with this call when you no longer want to use or retain this information.

## How to Delete a Subscriber Profile Attribute

Use the sample code below as a model to create your own API call. Use the SOAP request to validate that you've included all applicable information.

### Sample Java Code (Axis 1.4)

```apex
public void testDeleteAttributeForSubscriber() throws RemoteException {
        Soap_PortType stub = init();
        ConfigureRequestMsg configureRequestMsg = new ConfigureRequestMsg();
        PropertyDefinition definition = new PropertyDefinition();
        //create special Attribute under profile management, this attribute holds html content
        definition.setName("SamplePropertyDefinition");
        definition.setPropertyType(PropertyType.value1);
        //Set ClientID to create attribute on sub-account
        ConfigureOptions options = new ConfigureOptions();
        ClientID clientID = new ClientID();
        clientID.setID(232538);
        options.setClient(clientID);  //this creates attribute in sub-account
        //definition.setClient(clientID); //this creates attribute in parent-account
        configureRequestMsg.setOptions(options);
        configureRequestMsg.setAction("delete");
        APIObject[] objects = {definition};
        configureRequestMsg.setConfigurations(objects);
        //API call to delete to Attribute....
        ConfigureResponseMsg responseMsg = stub.configure(configureRequestMsg);
        assertNotNull(responseMsg.getOverallStatusMessage());
    }
```

### SOAP Request

```
<s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
     <ConfigureRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
          <Action>delete</Action>
          <Options>
              <Client>
                  <ID>232538</ID>
                  <!--SubAccount-->
              </Client>
          </Options>
          <Configurations>
              <Configuration xsi:type="PropertyDefinition">
                  <Name>Subject_Revoooo</Name>
              </Configuration>
          </Configurations>
    </ConfigureRequestMsg>
</s:Body>
```
