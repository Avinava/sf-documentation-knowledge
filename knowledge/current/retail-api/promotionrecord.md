---
title: "Promotion.Record"
domain: retail-api
topic: promotionrecord
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.056Z
estimatedTokens: 1041
keywords: [Promotion.Record, APEX, wrapper, Promotion, SObject, Records, instance, wraps, Record, parent, TPM_Promotion, provide, manipulate, order, flag]
---

# Promotion.Record

> This APEX class provides a wrapper to Promotion SObject Records. Each instance wraps an
  SObject Record related to the parent TPM_Promotion and provide methods to manipulate them in order
  to flag them for insertion or deletion. It also provides methods to extract the underlying SObject
  records so updates can be made.

# Promotion.Record

This APEX class provides a wrapper to Promotion SObject Records. Each instance wraps an SObject Record related to the parent TPM\_Promotion and provide methods to manipulate them in order to flag them for insertion or deletion. It also provides methods to extract the underlying SObject records so updates can be made.

## Namespace

```

```

## Example Implementation

```

```

-   **[TPM\_Promotion.Record Methods](atlas.en-us.retail_api.meta/retail_api/tpm_promotion.record.htm#tpm_promotion_record_method)**


## TPM\_Promotion.Record Methods

The following are methods for TPM\_Promotion.Record.

-   **[global Boolean isDeleted](atlas.en-us.retail_api.meta/retail_api/tpm_promotion.record.htm#method_globalBoolean)**
    Indicates if the record is flagged for deletion or if it will be updated during save.
-   **[global Boolean isNew](atlas.en-us.retail_api.meta/retail_api/tpm_promotion.record.htm#unique_148834552)**
    Indicates if the record is new or already exists in the database.
-   **[global Id getId](atlas.en-us.retail_api.meta/retail_api/tpm_promotion.record.htm#unique_520109786)**
    Returns the temporary id for the wrapped record. Promotion save process uses temporary id’s for records that are not still committed to the database.
-   **[global SObject getOriginalRecord](atlas.en-us.retail_api.meta/retail_api/tpm_promotion.record.htm#unique_1584933701)**
    Returns the original SObject record as stored in the database. If the record is new, this method returns null.
-   **[global SObject getRecord](atlas.en-us.retail_api.meta/retail_api/tpm_promotion.record.htm#unique_634911820)**
    Returns the wrapped SObject record. The returned record field values can be updated.
-   **[global void setFields](atlas.en-us.retail_api.meta/retail_api/tpm_promotion.record.htm#unique_1449110431)**
    Sets the fields passed in the map as fields for the wrapped SObject record. The IsNew and IsDeleted fields will map to the is New() and is Deleted() methods. If a key in the map is not an SObject field, it will be ignored.
-   **[global void setIsDeleted](atlas.en-us.retail_api.meta/retail_api/tpm_promotion.record.htm#unique_1989016176)**
    Sets the record to be deleted or to update the existing one.
-   **[global void setIsNew](atlas.en-us.retail_api.meta/retail_api/tpm_promotion.record.htm#unique_816417671)**
    Sets the record to be inserted as a new record or to update the existing one.

### global Boolean isDeleted

Indicates if the record is flagged for deletion or if it will be updated during save.

#### API Version

55

#### Signature

global Boolean isDeleted()

### global Boolean isNew

Indicates if the record is new or already exists in the database.

#### API Version

55

#### Signature

global Boolean isNew()

### global Id getId

Returns the temporary id for the wrapped record. Promotion save process uses temporary id’s for records that are not still committed to the database.

#### API Version

55

#### Signature

global Id getId()

### global SObject getOriginalRecord

Returns the original SObject record as stored in the database. If the record is new, this method returns null.

#### API Version

55

#### Signature

global SObject getOriginalRecord()

### global SObject getRecord

Returns the wrapped SObject record. The returned record field values can be updated.

#### API Version

55

#### Signature

global SObject getRecord()

#### Example

```

```

### global void setFields

Sets the fields passed in the map as fields for the wrapped SObject record. The IsNew and IsDeleted fields will map to the is New() and is Deleted() methods. If a key in the map is not an SObject field, it will be ignored.

#### API Version

55

#### Signature

global void setFields(Map<String, Object\> fieldValues)

#### Example

```

```

### global void setIsDeleted

Sets the record to be deleted or to update the existing one.

#### API Version

55

#### Signature

global void setIsDeleted(Boolean value)

### global void setIsNew

Sets the record to be inserted as a new record or to update the existing one.

#### API Version

55

#### Signature

global void setIsNew(Boolean value)

## Code Examples

```apex
cgcloud.TPM_Promotion tpmPromotion;

// Append the object to create a wrapper
cgcloud.TPM_Promotion.Record myRecord = tpmPromotion.append(new MyRecord__c());

// Set field values using a Map
myRecord.setField(new Map<String, Object> {
    'IsNew' => true, // The record is new
    'IsDeleted' => false, // The record is not flagged for deletion
    'MyField1__c' => 'Hello',
    'MyField2__c' => 'World!'
});

// Extract the SObject
MyRecord__c rec = (MyRecord__c) myRecord.getRecord();

myRecord.isNew(); // true
myRecord.isDeleted(); // false
myRecord.getId(); // A temporary SFDC Id
rec.Field1__c; // 'Hello'
rec.Field2__c; // 'World!'
```

```
cgcloud.TPM_Promotion.Record myRecord;

// Extract the SObject
MyRecord__c rec = (MyRecord__c) myRecord.getRecord();

// Fields can be changed and they'll be saved during promotion save
rec.MyField1__c = 'Hello';
rec.MyField2__c = 'World!;
```

```apex
cgcloud.TPM_Promotion tpmPromotion;

// Append the object to create a wrapper
cgcloud.TPM_Promotion.Record myRecord = tpmPromotion.append(new MyRecord__c());

// Set field values using a Map
myRecord.setField(new Map<String, Object> {
    'IsNew' => true, // The record is new
    'IsDeleted' => false, // The record is not flagged for deletion
    'MyField1__c' => 'Hello',
    'MyField2__c' => 'World!'
});

// Extract the SObject
MyRecord__c rec = (MyRecord__c) myRecord.getRecord();

myRecord.isNew(); // true
myRecord.isDeleted(); // false
myRecord.getId(); // A temporary SFDC Id
rec.Field1__c; // 'Hello'
rec.Field2__c; // 'World!'
```

## Related Topics

- TPM_Promotion.Record Methods (atlas.en-us.retail_api.meta/retail_api/tpm_promotion.record.htm)
- global Boolean isDeleted (atlas.en-us.retail_api.meta/retail_api/tpm_promotion.record.htm)
- global Boolean isNew (atlas.en-us.retail_api.meta/retail_api/tpm_promotion.record.htm)
- global Id getId (atlas.en-us.retail_api.meta/retail_api/tpm_promotion.record.htm)
- global SObject getOriginalRecord (atlas.en-us.retail_api.meta/retail_api/tpm_promotion.record.htm)
- global SObject getRecord (atlas.en-us.retail_api.meta/retail_api/tpm_promotion.record.htm)
- global void setFields (atlas.en-us.retail_api.meta/retail_api/tpm_promotion.record.htm)
- global void setIsDeleted (atlas.en-us.retail_api.meta/retail_api/tpm_promotion.record.htm)
- global void setIsNew (atlas.en-us.retail_api.meta/retail_api/tpm_promotion.record.htm)
