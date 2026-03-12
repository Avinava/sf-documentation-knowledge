---
title: "Apex Save Process Customization"
domain: retail-api
topic: apex-save-process-customization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.653Z
estimatedTokens: 357
keywords: [Apex, Save, Process, Customization, different, workflow, customize, calls]
---

# Apex Save Process Customization

> This section provides information on the different workflow process to customize the
        save process using APEX calls.

# Apex Save Process Customization

This section provides information on the different workflow process to customize the save process using APEX calls.

1.  Change a Managed Package SObject field value.

    ```

    ```

2.  Delete a Managed Package SObject record.

    ```

    ```

3.  Add custom SObject to Promotion Save.

    You can add additional SObjects to be saved during the promotion SObjects database commit.

    ```

    ```

    The TPM\_Promotion class ensures all promotion related SObjects are committed on an all or none fashion while encapsulating all operations in a transaction. Since the hook will be called from multiple places in multiple TPM processes, the best practice is to use the provided methods for handling custom records and relationships to ensure no incomplete or invalid data is committed. The SObject write order for your custom sobject records are determined by the order of the append calls.

4.  Add custom SObject to Save with Relationship.

    ```

    ```

5.  Save Custom Data in TPM UI.

    Save the custom data that was sent for save along with the Promotion data.In your callable class, you can access the custom state that was set as part of the promotion state.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

    #### Note

    This state is serialized. Deserialize it before being able to access the data.

    ```

    ```

## Code Examples

```
// Get the TPM_Promotion instance
TPM_Promotion promotion = (TPM_Promotion) args.get('promotion');

// Update the Promotion__c SObject field
Promotion__c myPromo = (Promotion__c) promotion.getPromotion().getRecord();
myPromo.Slogan_Language_1__c = 'My New Slogan';

// Update the First Tactic__c Group Text
Tactic__c myTactic = (Tactic__c) promotion.getTactics()[0].getRecord();
myTactic.Group_Text__c = 'My New group text';
```

```
// Get the TPM_Promotion instance
TPM_Promotion promotion = (TPM_Promotion) args.get('promotion');

// Delete the first Tactic__c SObject
TPM_Promotion.Record tacticRecordWrapper = promotion.getTactics()[0];
if (!tacticRecordWrapper.isDeleted()) { // We can also check if the record is new with isNew()
    tacticRecordWrapper.setIsDeleted(true);
}
```

```
// Get the TPM_Promotion instance
TPM_Promotion promotion = (TPM_Promotion) args.get('Promotion');

// Append a new SObject to be saved
MyCustomSObject__c mySObject = new MyCustomSObject__c();
TPM_Promotion.Record myRecordWrapper = promotion.append(mySObject);
```

```
// Get the TPM_Promotion instance
TPM_Promotion promotion = (TPM_Promotion) args.get('Promotion');

// Append a new SObject to be saved
MyCustomSObject__c mySObject = new MyCustomSObject__c();
TPM_Promotion.Record myRecordWrapper = promotion.append(mySObject);

// Add relationship to the Promotion__c record
promotion.addRelationship(
    myRecordWrapper,
    MyCustomSObject__c.Promotion__c,
    promotion.getPromotion()
);

// Append an additional Child SObject
MyChildSObject__c myChildSObject = new MyChildSObject__c();
TPM_Promotion.Record myChildRecordWrapper = promotion.append(myChildSObject);

// Relate the child object to our custom object
promotion.addRelationship(
    myChildRecordWrapper,
    MyChildSObject__c.MyCustomSObject__c,
    myRecordWrapper
);
```

```
// Get the TPM_Promotion instance
TPM_Promotion promotion = (TPM_Promotion) args.get('promotion');

// Get the custom data serialized data
String payloadString = (String) args.get('customState');

// Deserialize it to be able to access the data
MyCustomStructure payload = (MyCustomStructure) JSON.deserialize(payloadString, MyCustomStructure.class);

// Add the retrieved records to be saved on the promotion transaction
if (payload.myRecords != null) {
    for (MyRecord__c mr: payload.myRecords) {
        // Add the sobject record to the list of objects to insert or update
        TPM_Promotion.Record = wrapper = promotion.append(mr);
        // Relate it to the promotion (if needed)
        promotion.addRelationship(
            wrapper,
            MyRecord__c.Promotion__c,
            promotion.getPromotion()
        );
    }
}
```
