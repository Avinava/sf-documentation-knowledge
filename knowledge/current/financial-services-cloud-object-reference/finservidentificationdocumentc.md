---
title: "FinServ_IdentificationDocument__c"
domain: financial-services-cloud-object-reference
topic: finservidentificationdocumentc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.452Z
estimatedTokens: 1099
keywords: [FinServ_IdentificationDocument__c, documents, verify, individual’s, identity, FinServ, _IdentificationDocument, Calls]
---

# FinServ_IdentificationDocument__c

> Represents information about documents used to verify an individual’s
         identity.

# FinServ\_IdentificationDocument\_\_c

Represents information about documents used to verify an individual’s identity.

## Supported Calls

create(), delete(), describeLayout(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the identification document. |
| DocumentNumber__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber listed on the identification document. |
| DocumentType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of document used to verify the person’s identity. Valid values:Green CardLicenseOtherPassportVisa |
| ExpirationDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate the document expires. |
| IssueDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate the document was issued. |
| IssuingCountry__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe country in which the document was issued. Valid values:AfghanistanAland IslandsAlbaniaAlgeriaAndorraAngolaAnguillaAntarcticaAntigua and BarbudaArgentinaArmeniaArubaAustraliaAustriaAzerbaijanBahamasBahrainBangladeshBarbadosBelarusBelgiumBelizeBeninBermudaBhutanBolivia, Plurinational State ofBonaire, Sint Eustatius and SabaBosnia and HerzegovinaBotswanaBouvet IslandBrazilBritish Indian Ocean TerritoryBrunei DarussalamBulgariaBurkina FasoBurundiCambodiaCameroonCanadaCape VerdeCayman IslandsCentral African RepublicChadChileChinaChristmas IslandCocos (Keeling) IslandsColombiaComorosCongoCongo, the Democratic Republic of theCook IslandsCosta RicaCote d’IvoireCroatiaCubaCuraçaoCyprusCzech RepublicDenmarkDjiboutiDominicaDominican RepublicEcuadorEgyptEl SalvadorEquatorial GuineaEritreaEstoniaEthiopiaFalkland Islands (Malvinas)Faroe IslandsFijiFinlandFranceFrench GuianaFrench PolynesiaFrench Southern TerritoriesGabonGambiaGeorgiaGermanyGhanaGibraltarGreeceGreenlandGrenadaGuadeloupeGuatemalaGuernseyGuineaGuinea-BissauGuyanaHaitiHeard Island and McDonald IslandsHoly See (Vatican City State)HondurasHungaryIcelandIndiaIndonesiaIran, Islamic Republic ofIraqIrelandIsle of ManIsraelItalyJamaicaJapanJerseyJordanKazakhstanKenyaKiribatiKorea, Democratic People’s Republic ofKorea, Republic ofKuwaitKyrgyzstanLao People’s Democratic RepublicLatviaLebanonLesothoLiberiaLibyan Arab JamahiriyaLiechtensteinLithuaniaLuxembourgMacaoMacedonia, the former Yugoslav Republic ofMadagascarMalawiMalaysiaMaldivesMaliMaltaMartiniqueMauritaniaMauritiusMayotteMexicoMoldova, Republic ofMonacoMongoliaMontenegroMontserratMoroccoMozambiqueMyanmarNamibiaNauruNepalNetherlandsNew CaledoniaNew ZealandNicaraguaNigerNigeriaNiueNorfolk IslandNorwayOmanPakistanPalestinePanamaPapua New GuineaParaguayPeruPhilippinesPitcairnPolandPortugalQatarReunionRomaniaRussian FederationRwandaSaint BarthélemySaint Helena, Ascension and Tristan da CunhaSaint Kitts and NevisSaint LuciaSaint Martin (French part)Saint Pierre and MiquelonSaint Vincent and the GrenadinesSamoaSan MarinoSao Tome and PrincipeSaudi ArabiaSenegalSerbiaSeychellesSierra LeoneSingaporeSint Maarten (Dutch part)SlovakiaSloveniaSolomon IslandsSomaliaSouth AfricaSouth Georgia and the South Sandwich IslandsSouth SudanSpainSri LankaSudanSurinameSvalbard and Jan MayenSwazilandSwedenSwitzerlandSyrian Arab RepublicTaiwanTajikistanTanzania, United Republic ofThailandTimor-LesteTogoTokelauTongaTrinidad and TobagoTunisiaTurkeyTurkmenistanTurks and Caicos IslandsTuvaluUgandaUkraineUnited Arab EmiratesUnited KingdomUnited StatesUruguayUzbekistanVanuatuVenezuela, Bolivarian Republic ofVietnamVirgin Islands, BritishWallis and FutunaWestern SaharaYemenZambiaZimbabwe |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the financial account in an external data source. |
| VerifiedBy__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the person who verified the document. |
| VerifiedOn__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate the identification document was verified. |
