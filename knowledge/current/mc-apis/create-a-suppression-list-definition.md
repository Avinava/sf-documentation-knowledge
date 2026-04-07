---
title: "Create a Suppression List Definition"
domain: mc-apis
topic: create-a-suppression-list-definition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:16.219Z
estimatedTokens: 2114
keywords: [Suppression, Definition, regarding, creating, retrieving, Why, Retrieve, How, Sample, NET, Code, Contexts]
---

> This page contains information  regarding creating and retrieving a suppression list definition.

# Create a Suppression List Definition

This page contains information regarding creating and retrieving a suppression list definition.

## Why Create and Retrieve a Suppression List Definition

The suppression list definition allows you to associate a suppression list with a specific context, such as a send classification or a business unit. When you conduct a send in that specific context, the suppression list prevents subscribers on the list from receving that message. If multiple suppression lists apply to a single context (such as a send classification within a business unit), none of the addresses on either suppression list receives that message.

## How to Create and Retrieve a Suppression List Definition

Use the sample code below as a model for your own call.

### Sample .NET Code

This code sample defines all available contexts. When creating your own code, include only the contexts specific to your needs.

#### Create a Suppression List Definition

```apex
private void CreateSLD()
{
    Marketing Cloud.Integration.WSDL.SuppressionListDefinition sld = new SuppressionListDefinition();
    sld.Name = "a name";
    sld.Description = "a description";
    #region Add any needed fields
    // Specify more fields just like you would to create a Data Extension
    sld.Fields = new DataExtensionField[1];
    sld.Fields[0] = new DataExtensionField();
    sld.Fields[0].Name = "Age";
    sld.Fields[0].FieldType = DataExtensionFieldType.Number;
    sld.Fields[0].FieldTypeSpecified = true;
    #endregion
    #region Add any needed contexts
    sld.Contexts = new SuppressionListContext[6];
    #region Add Enterprise-Operational context
    sld.Contexts[0] = new SuppressionListContext();
    sld.Contexts[0].Client = new ClientID();
    sld.Contexts[0].Client.EnterpriseID = 1234;
    sld.Contexts[0].Client.EnterpriseIDSpecified = true;
    sld.Contexts[0].Context = SuppressionListContextEnum.Enterprise;
    sld.Contexts[0].ContextSpecified = true;
    sld.Contexts[0].SendClassificationType = SendClassificationTypeEnum.Operational;
    sld.Contexts[0].SendClassificationTypeSpecified = true;
    #endregion
    #region Add Enterprise-Marketing context
    sld.Contexts[0] = new SuppressionListContext();
    sld.Contexts[0].Client = new ClientID();
    sld.Contexts[0].Client.EnterpriseID = 1234;
    sld.Contexts[0].Client.EnterpriseIDSpecified = true;
    sld.Contexts[0].Context = SuppressionListContextEnum.Enterprise;
    sld.Contexts[0].ContextSpecified = true;
    sld.Contexts[0].SendClassificationType = SendClassificationTypeEnum.Marketing;
    sld.Contexts[0].SendClassificationTypeSpecified = true;
    #endregion
    #region Add BusinessUnit-Operational context
    sld.Contexts[0] = new SuppressionListContext();
    sld.Contexts[0].Client = new ClientID();
    sld.Contexts[0].Client.ID = 5678;
    sld.Contexts[0].Client.IDSpecified = true;
    sld.Contexts[0].Context = SuppressionListContextEnum.BusinessUnit;
    sld.Contexts[0].ContextSpecified = true;
    sld.Contexts[0].SendClassificationType = SendClassificationTypeEnum.Operational;
    sld.Contexts[0].SendClassificationTypeSpecified = true;
    #endregion
    #region Add BusinessUnit-Marketing context
    sld.Contexts[0] = new SuppressionListContext();
    sld.Contexts[0].Client = new ClientID();
    sld.Contexts[0].Client.ID = 5678;
    sld.Contexts[0].Client.IDSpecified = true;
    sld.Contexts[0].Context = SuppressionListContextEnum.BusinessUnit;
    sld.Contexts[0].ContextSpecified = true;
    sld.Contexts[0].SendClassificationType = SendClassificationTypeEnum.Marketing;
    sld.Contexts[0].SendClassificationTypeSpecified = true;
    #endregion
    #region Add SendClassification context
    sld.Contexts[0] = new SuppressionListContext();
    sld.Contexts[0].Client = new ClientID();
    sld.Contexts[0].Client.ID = 5678;
    sld.Contexts[0].Client.IDSpecified = true;
    sld.Contexts[0].Context = SuppressionListContextEnum.SendClassification;
    sld.Contexts[0].ContextSpecified = true;
    sld.Contexts[0].SendClassification = new SendClassification();
    sld.Contexts[0].SendClassification.ObjectID = "some GUID";
    #endregion
    #region Add Send context
    sld.Contexts[0] = new SuppressionListContext();
    sld.Contexts[0].Client = new ClientID();
    sld.Contexts[0].Client.ID = 5678;
    sld.Contexts[0].Client.IDSpecified = true;
    sld.Contexts[0].Context = SuppressionListContextEnum.Send;
    sld.Contexts[0].ContextSpecified = true;
    sld.Contexts[0].Send = new Send();
    sld.Contexts[0].Send.ID = 9012;
    sld.Contexts[0].Send.IDSpecified = true;
    #endregion
    #endregion
    string requestKey = string.Empty;
    string status = string.Empty;
    Marketing Cloud.Integration.IPartnerFrameworkInterface inter = Marketing Cloud.Integration.Helper.GetInterfaceProxy(Principal);
    var results = inter.Create(null, new APIObject[] { sld }, ref requestKey, out status);
    if (status.Equals(PartnerAPICommon.StatusCodes.OK))
    {
// Successfully created it
// Go get the ObjectID
        for (int i = 0; i < results.Length; i++)
        {
            string newID = results[i].NewObjectID;
        }
    }
}
```

#### Retrieving a Suppression List Definition

```apex
private void RetrieveSLD()
{
    #region Build the Retrieve Request
    Marketing Cloud.Integration.WSDL.RetrieveRequest rr = new RetrieveRequest();
    rr.ObjectType = "SuppressionListDefinition";
    rr.Properties = new string[] { "ObjectID", "CustomerKey", "Name", "Category", "Client.CreatedBy", "CreatedDate", "Client.ModifiedBy", "ModifiedDate", "Client.ID", "Client.EnterpriseID", "Description" };
    #region Set the filter criteria
    Marketing Cloud.Integration.WSDL.SimpleFilterPart sfp = new SimpleFilterPart();
    rr.Filter = sfp;
    #region Retrieve a single item
    sfp.Property = "ObjectID";
    sfp.SimpleOperator = SimpleOperators.equals;
    sfp.Value = new string[1] { "the ID from above" };
    #endregion
    #region Retrieve all items in a folder
    sfp.Property = "Category";
    sfp.SimpleOperator = SimpleOperators.equals;
    sfp.Value = new string[1] { "CategoryID" };
    #endregion
    #endregion
    #endregion
    #region Make the call
    APIObject[] results = null;
    string requestID = null;
    string status = null;
    Marketing Cloud.Integration.IPartnerFrameworkInterface inter = Marketing Cloud.Integration.Helper.GetInterfaceProxy(Principal);
    status = inter.Retrieve(rr, ref requestID, out results);
    #endregion
    #region Process the results
    if (status.Equals(PartnerAPICommon.StatusCodes.OK) || status.Equals(PartnerAPICommon.StatusCodes.MoreDataAvailable))
    {
    for (int i = 0; i < results.Length; i++)
        {
            // Do something with the results
        }
    }
    #endregion
}
```

#### Retrieve All Contexts Associated with a Suppression List Definition

```apex
private void RetrieveAllContextsAssociatedWithAnSLD()
{
    #region Build the Retrieve Request
    Marketing Cloud.Integration.WSDL.RetrieveRequest rr = new RetrieveRequest();
    rr.ObjectType = "SuppressionListContext";
    rr.Properties = new string[] { "ObjectID", "Definition.ObjectID", "Definition.CustomerKey", "Definition.Name", "Definition.Category", "Definition.Description"
, "Context","SendClassification.ObjectID","Send.ID","SendClassificationType"
, "Client.CreatedBy", "CreatedDate", "Client.ModifiedBy", "ModifiedDate", "Client.ID", "Client.EnterpriseID"};
    #region Set the filter criteria
    Marketing Cloud.Integration.WSDL.SimpleFilterPart sfp = new SimpleFilterPart();
    rr.Filter = sfp;
    #region Retrieve the contexts associated with an SLD
    sfp.Property = "Definition.ObjectID";
    sfp.SimpleOperator = SimpleOperators.equals;
    sfp.Value = new string[1] { "the ID from above" };
    #endregion
    #endregion
    #endregion
    #region Make the call
    APIObject[] results = null;
    string requestID = null;
    string status = null;
    Marketing Cloud.Integration.IPartnerFrameworkInterface inter = Marketing Cloud.Integration.Helper.GetInterfaceProxy(Principal);
    status = inter.Retrieve(rr, ref requestID, out results);
    #endregion
    #region Process the results
    if (status.Equals(PartnerAPICommon.StatusCodes.OK) || status.Equals(PartnerAPICommon.StatusCodes.MoreDataAvailable))
    {
        for (int i = 0; i < results.Length; i++)
        {
            // Do something with the results
            }
    }
    #endregion
}
```
