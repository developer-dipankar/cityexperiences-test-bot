const {
  v4: uuidv4
} = require('uuid');
const {
  detectIntent
} = require('./model');
const qa = require('./QA.json');

const datafetch = async ({bookingId}) => {
  try {
    const axios = require('axios');
    let data = JSON.stringify({
      query: `query orderDetailsQuery($bookingId: String, $orderId: String, $email: String, $loggedInUserId: String, $locale: String!, $token: String, $requiredToken: String!, $correlationId: String!, $withSms: Boolean!) {
      searchOrders(bookingId: $bookingId, orderId: $orderId, email: $email, loggedInUserId: $loggedInUserId) {
        orders {
          orderId
          bookingId
          shortUrlId
          accountingFreeze
          assignedEventTime
          assignedBoardingTime
          expiration
          payAfterEvent
          email
          customerId
          contactId
          bookingNotes
          notes
          officeComments
          orderStatus
          manualOrderStatus
          tableNumbers
          serverName
          isVoidedGCOrder
          cartId
          cartBalance(correlationId: $correlationId)
          depositOrder
          itineraryDeposit
          cruiseConcierge
          depositDueDate
          isGroupLeaderToSharePaymentLink
          externalFiles
          seatMapHold
          gcActivated {
            productId
            number
            amount
            orderId
            activatedOn
            activatedBy
            voidTime
            voidUser
            activeHistory
            activateId
            giftCardId
            status
            __typename
          }
          engravings {
            id
            value
            __typename
          }
          orderNotes {
            id
            value
            __typename
          }
          orderNotesInternal {
            id
            value
            __typename
          }
          nonLineItems {
            id
            name
            description
            __typename
          }
          floorPlan
          fnbOpsFile
          flags {
            flag
            note
            __typename
          }
          companyId
          costRateId
          costRate(correlationId: $correlationId) {
            CostRateID
            CostRateName
            __typename
          }
          propertyId
          agentUserId
          sourceId
          siteId
          currency
          rates {
            CAD
            USD
            GBP
            AUD
            EUR
            __typename
          }
          loggedInUsername
          showPricesOnConfirm
          invoices
          summary {
            total
            balance
            __typename
          }
          pricing
          couponDiscounts {
            refunded
            appliedProducts
            couponCode
            discount
            totalDiscount
            taxes {
              TaxName
              TaxDiscount
              __typename
            }
            __typename
          }
          billing {
            groupName
            parkingId
            billingAgreeTermsConditions
            billingPhoneAgreeTermsConditions
            billingDateOfBirthMonth
            billingDateOfBirthDay
            billingDateOfBirthYear
            billingTitle
            firstName
            lastName
            email
            address
            city
            country
            companyName
            phoneNumber
            state
            zip
            salesforceInfo
            externalId
            vendorReferenceNumber
            isOnboardRevenueBooking
            billingSenderName
            billingRecipientName
            billingRecipientContactNumber
            billingRecipientDestination
            billingContentsOfPackage
            shipping {
              firstName
              lastName
              email
              city
              phoneNumber
              state
              address
              address2
              country
              zip
              trackingDetails {
                shippingStatus
                trackingLink
                trackingNumber
                __typename
              }
              __typename
            }
            shippingMultiple {
              shippingId
              firstName
              lastName
              email
              city
              phoneNumber
              state
              address
              address2
              country
              zip
              trackingDetails {
                shippingStatus
                trackingLink
                trackingNumber
                __typename
              }
              giftCards {
                id
                ticketId
                productName
                ticketPrice
                internalName
                __typename
              }
              __typename
            }
            membershipId
            timeshareVoucher
            __typename
          }
          items {
            tickets {
              bookingTypeId
              date
              linkedTourEventIds
              qtys {
                qty
                ticketId
                vehicleId
                vehicleMake
                vehicleModel
                vehicleLengthFt
                appliedItems {
                  ticketId
                  qty
                  couponCode
                  __typename
                }
                vehicleTrim
                vehicleYear
                price
                itemName
                groupName
                attendees {
                  firstName
                  lastName
                  weight
                  height
                  dob
                  attendeePhoneNumber
                  attendeePhoneCountry
                  attendeeEmail
                  attendeeAge
                  attendeeShirtSize
                  attendeeShoeSize
                  attendeeOtherTourPlans
                  attendeeGender
                  attendeeNationality
                  attendeePassportNumber
                  attendeePassportExpirationDate
                  vehicleRegistration
                  registrationExpiration
                  licenseNumber
                  idExpiration
                  timeshareVoucher
                  __typename
                }
                __typename
              }
              compQtys {
                qty
                ticketId
                __typename
              }
              timedTicketTypeId
              tourId
              numberOfGuests
              cruiseShipId
              editedBy
              editedOn
              productNotes
              deckId
              __typename
            }
            giftcards {
              amount
              design
              message
              recipientEmail
              recipientName
              __typename
            }
            giftMembership {
              amount
              message
              recipientEmail
              recipientName
              __typename
            }
            __typename
          }
          refundToNewCC {
            amount
            error
            errorMessage
            status
            __typename
          }
          coordinatorName
          captainName
          foodAndBeverageManager
          accountManager
          customPrintTicketsStr
          proposal {
            isDraft
            isSignedBySeller
            dateSignedBySeller
            counterSignProposalByOthers
            pendingSignature
            skipSignature
            emailAddressToSendProposalTo
            firstName
            lastName
            phone
            address
            isDifferenceContact
            proposalIntroduction
            paymentTermsSection
            nameOfOrganization
            depositRequired
            depositPercentage
            depositDueDate
            cruiseDetails
            contractItinerary
            showTaxesAndFeesTotalOnly
            sendType
            quickQuoteAcknowledged
            tempQuoteAcknowledged
            orderStatus
            termsAndConditionsLookup
            entertainment
            addOns
            timeline
            setup
            contractTerms
            bookedArea
            parkingNotes
            termsAndConditions
            startTime
            endTime
            boardingTime
            yachtName
            sellerName
            vesselId
            proposalTemplateId
            signatureDate
            customTermsAndConditions {
              isDraft
              termsAndConditionsId
              termsAndConditionsName
              __typename
            }
            signedDoc
            __typename
          }
          oldProposals {
            isDraft
            isSignedBySeller
            dateSignedBySeller
            counterSignProposalByOthers
            pendingSignature
            skipSignature
            emailAddressToSendProposalTo
            firstName
            lastName
            phone
            address
            isDifferenceContact
            proposalIntroduction
            paymentTermsSection
            nameOfOrganization
            depositRequired
            depositPercentage
            depositDueDate
            cruiseDetails
            contractItinerary
            sendType
            quickQuoteAcknowledged
            tempQuoteAcknowledged
            orderStatus
            termsAndConditionsLookup
            entertainment
            addOns
            timeline
            setup
            contractTerms
            bookedArea
            parkingNotes
            termsAndConditions
            startTime
            endTime
            boardingTime
            yachtName
            sellerName
            vesselId
            proposalTemplateId
            signatureDate
            isInvoice
            signedDoc
            __typename
          }
          chargeback(token: $token, correlationId: $correlationId) {
            chargebackId
            caseNo
            status
            paymentId
            notes
            __typename
          }
          company(correlationId: $correlationId) {
            propertyId
            costRateId
            additionalCostRateIds
            name
            customerId
            paymentTerms
            isHideRefund
            commissionTemplateId
            settings {
              id
              value
              __typename
            }
            __typename
          }
          confirmation(locale: $locale, correlationId: $correlationId) {
            utilizedGroupTicketTimeLine
            availableGroupTickets
            boardingGroupId
            boardingGroupName
            hashProductsId
            vendorCompanyId
            agentName
            vendorAccountName
            eventStatus
            latestTransactionId
            eventRank
            eventType
            commissionIncentive {
              commissionAmount
              commissionPercentage
              __typename
            }
            peakHours
            insuranceNotApplicable
            returnTrip {
              startDate
              startTime
              endTime
              peakHours
              __typename
            }
            ip
            voucherURL
            boardTime
            boardingTime
            departTime
            dockTime
            barcodesReady
            barcodes {
              productId
              productName
              firstName
              lastName
              email
              assignedToUser
              individualWaiversSent
              ticketNumber
              active
              qr
              scanned
              fullyScanned
              count
              lastScanTime
              timeline {
                desc
                fromStop
                gateId
                time
                toStop
                type
                user
                manualOverride
                __typename
              }
              __typename
            }
            couponsPurchased {
              productName
              ticketNumber
              __typename
            }
            thirdPartyInfo {
              isOmniWeb
              hideManageBooking
              fullRefundForWebRedemptionOnly
              hideRefundForSelfService
              __typename
            }
            invitationLink
            purchaseDate
            timeOfPurchase
            tourDate
            QRCode
            baseCurrency
            fullName
            tourName
            tourTimeStart
            tourTimeEnd
            couponCode
            discount
            subtotal
            gcTotal
            total
            insurance
            charity
            tax
            bookingId
            address
            city
            state
            zip
            country
            email
            phoneNumber
            orderId
            totalInUsedCurrency
            usedCurrency
            invoiceId
            purchaseOrderNo
            invoiceInfoExists
            lineItems {
              ticketId
              attendees {
                firstName
                lastName
                weight
                height
                dob
                attendeePhoneNumber
                attendeePhoneCountry
                attendeeEmail
                attendeeAge
                attendeeShirtSize
                attendeeShoeSize
                attendeeOtherTourPlans
                attendeeGender
                attendeeNationality
                attendeePassportNumber
                attendeePassportExpirationDate
                vehicleRegistration
                registrationExpiration
                licenseNumber
                idExpiration
                __typename
              }
              __typename
            }
            lineItemsDesc {
              attachments {
                type
                url
                __typename
              }
              desc
              maxScans
              ticketDesc
              ticketPrice
              defaultCostRatePrice
              qty
              compType
              isInsurance
              isTicket
              isEnhancement
              isCelebrationPackageEnh
              isBeverageEnh
              isFoodEnh
              isMerchEnh
              isYachtEnh
              isDonationEnh
              isDiscountAdj
              discountType
              discountAmount
              couponAppliedItems {
                ticketId
                couponCode
                qty
                __typename
              }
              isShippingOption
              total
              ticketId
              packageInfo
              isPhysicalGiftCard
              printerStation
              ecTicketTypes
              passType
              __typename
            }
            udfs {
              UDFCategoryName
              UDFName
              UDFType
              UDFValue
              __typename
            }
            timeline {
              description
              type
              timestamp
              __typename
            }
            taxes {
              name
              amount
              __typename
            }
            orderFees {
              ticketId
              qty
              itemName
              __typename
            }
            orderModificationFee {
              ticketId
              qty
              itemName
              __typename
            }
            shippingOption {
              ticketId
              qty
              itemName
              __typename
            }
            payments {
              invoice
              cardName
              lastFour
              expMonth
              expYear
              cardLogo
              amount
              type
              date
              giftcardHoldAmount
              giftcardNo
              id
              forId
              checkNumber
              realizeDate
              extraInfo
              currencyInfo {
                amountInCurrency
                currency
                exchangeRate
                defaultCurrency
                __typename
              }
              hasStoredPayment
              externalTransactionId
              cash
              payee {
                firstName
                lastName
                email
                __typename
              }
              walletType
              __typename
            }
            tourAddress
            tourCity
            tourState
            tourCountry
            tourLat
            tourLong
            giftcards {
              GiftcardNo
              GiftcardExpiryDate
              CashOutBalance
              RestrictedBalance
              TotalBalance
              qr
              __typename
            }
            allowRefunds
            hideQrCode
            hideTransferOrderInSelfServiceSetting
            hideAddTicketsInSelfServiceSetting
            hideRefundInSelfServiceSetting
            cutoffTimeToEditSpecialRequestsSelfServiceSetting
            collectAttendeePhoneSetting
            collectAttendeeEmailSetting
            privateTourRequest
            publicTourRequest
            hideEventTimeSetting
            hideTourDateTimeSetting
            hideEventEndTimeSetting
            sendBalanceDueReminderTourSetting
            collectAttendeePassportInfoSetting
            collectAttendeeGenderSetting
            sendCovidReminderEmail
            collectChildAttendeeAgeGenderSetting
            collectAttendeeAgeSetting
            collectAttendeeShirtSizeSetting
            enableSigingWaiversForBookingSetting
            enableSigningIndividualBarcodeWaiversForBookingSetting
            collectAttendeeShoeSizeSetting
            collectAttendeeOtherTourPlansSetting
            allowUseToTicketsForPayAfterEventSetting
            orderInvoicedCoupons {
              amount
              invoiceId
              company
              timestamp
              __typename
            }
            fromStopId
            toStopId
            departure
            destination
            __typename
          }
          passes {
            id
            customerId
            orderId
            activationDate
            validUntil
            date
            cancelled
            timezone
            timesUsed
            activations {
              deviceId
              timestamp
              lat
              long
              device {
                id
                deviceInfo {
                  id
                  value
                  __typename
                }
                __typename
              }
              __typename
            }
            locks
            lockedOnDevice {
              id
              deviceInfo {
                id
                value
                __typename
              }
              __typename
            }
            isUsable
            isActive
            price
            tax
            total
            propertyId
            productId
            product {
              translations {
                id
                values {
                  id
                  value
                  __typename
                }
                __typename
              }
              __typename
            }
            timeline {
              description
              type
              timestamp
              __typename
            }
            __typename
          }
          relatedOrders {
            orderId
            bookingId
            name
            qty
            __typename
          }
          loyaltyPointsLine(correlationId: $correlationId) {
            points
            __typename
          }
          photos {
            url
            deleted
            redeemed
            __typename
          }
          tourQuestions {
            specialRequests
            departureAirline
            departureFlightNumber
            menuDietaryNotes
            departureFlightTime
            dropOffLocation
            attendeeAlternateTourTimePreference
            departurePickupStreetNumber
            departurePickupLocation
            arrivalPickupLocation
            hotelPickup
            hotelPickupOther
            getPetInfo
            petInfoBreed
            petInfoSize
            petInfoTotal
            petInfoNotes
            isBikePickUp
            isOneWayTramInfo
            tramDate
            bikesTotal
            attendeeGradeLevelInfo
            customerLanguage
            howDidYouHearAboutUs
            howDidYouHearAboutUsOnCompanyWebsite
            schoolPrivateTourRequestQuestions
            generalPrivateTourRequestQuestions
            __typename
          }
          vendorDetails {
            vendorOrderStatus
            vendorHoldReason
            vendorHoldReasonNote
            __typename
          }
          itineraryNotes(correlationId: $correlationId)
          getSmsChannelList(correlationId: $correlationId, token: $requiredToken) @include(if: $withSms) {
            messageText
            isSentByCustomer
            logTimestamp
            userName
            __typename
          }
          addCardPayLater
          __typename
        }
        __typename
      }
    }`,
      variables: {"bookingId":bookingId,"locale":"en",
      "requiredToken":"na","correlationId":"dipankar.naskar-23d590c2-927b-409e-9728-4418307f5d8e","withSms":false}
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://ailnim2knnaq3prureqxyddjsm.appsync-api.us-west-2.amazonaws.com/graphql',
      headers: { 
        'authority': 'ailnim2knnaq3prureqxyddjsm.appsync-api.us-west-2.amazonaws.com', 
        'accept': '*/*', 
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8', 
        'content-type': 'application/json', 
        'origin': 'http://localhost:8080', 
        'referer': 'http://localhost:8080/', 
        'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"', 
        'sec-ch-ua-mobile': '?0', 
        'sec-ch-ua-platform': '"macOS"', 
        'sec-fetch-dest': 'empty', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-site': 'cross-site', 
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', 
        'x-api-key': 'da2-n6qkjrpkgrgx5bpg6hpymktf44', 
        'x-force-gql': 'us'
      },
      data : data
    };
    
    const resp = (await axios.request(config)).data.data;
    return resp;
    // .then((response) => {
    //   console.log(JSON.stringify(response.data.data));
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    
  } catch (error) {
    
  }

}

const botId = 'D4ALYGLD6O';
const botAliasId = 'TSTALIASID';
const localeId = 'en_US';
const sessionId = uuidv4();;

const invoke = async ({
  text
}) => {
  let params = {
    botId,
    botAliasId,
    localeId,
    sessionId,
    text
  };
  const intentDetails = await detectIntent(params);
  //   console.log(JSON.stringify({intentDetails}, 0, 2));
  let {
    sessionState: {
      intent
    } = {},
    interpretations
  } = intentDetails;
  let ansKey = null;
  let rawResp = null;
  if (intent.name == 'CreateOrder') {
    if (intent.name == 'CreateOrder' && intent.slots.country === null) {
      ansKey = 'CreateOrder_slots_country_null';
    } else if (intent.name == 'CreateOrder' && intent.slots.city === null) {
      ansKey = 'CreateOrder_slots_city_null';
      if (intent.slots.top_experiences && intent.slots.top_experiences.value.interpretedValue == 'statueofliberty') {
        ansKey = 'CreateOrder_slots_top_experiences_statueofliberty';
      } else if (intent.slots.top_experiences && intent.slots.top_experiences.value.interpretedValue == 'alcatraz') {
        ansKey = 'CreateOrder_slots_top_experiences_alcatraz';
      }
    } else if (intent.slots.top_experiences && intent.slots.top_experiences.value.interpretedValue == 'statueofliberty') {
      ansKey = 'CreateOrder_slots_top_experiences_statueofliberty';
    } else if (intent.slots.top_experiences && intent.slots.top_experiences.value.interpretedValue == 'alcatraz') {
      ansKey = 'CreateOrder_slots_top_experiences_alcatraz';
    } else if (intent.slots.city && intent.slots.city.value.interpretedValue == 'toronto') {
      ansKey = 'CreateOrder_slots_city_toronto';
    }
  } else if (intent.name == 'ManageMyBooking') {
    if (intent.slots.bookingId === null) {
      ansKey = 'ManageMyBooking_slots_bookingId_null';
    } else {
      // console.log(intent.slots.bookingId);
      const data = await datafetch({bookingId: intent.slots.bookingId.value.interpretedValue});
      rawResp = data.searchOrders.orders[0];
    }
  }
  let qaObj = rawResp || qa[intent.name] || qa[`${intent.name}_${intent.confirmationState}`] || qa[ansKey];
  const scores = interpretations.filter(({
    intent,
    nluConfidence
  }) => intent.name && nluConfidence && nluConfidence.score).map(({
    intent,
    nluConfidence
  }) => ({
    name: intent.name,
    score: nluConfidence.score
  }))
  console.log('USER:', params.text);
  console.log('BOT', JSON.stringify({
    qaObj
  }, 0, 2));
  console.log('scores', JSON.stringify({
    scores
  }));
};

(async () => {
  // const u = [
  //     'make a reservation',
  //     'yes',
  //     'Canada',
  //     'toronto',
  //     'statue of liberty'
  // ];

  const u = [
    'manage my reservation',
    '24791497'
  ];

  for (const q of u) {
    await invoke({
      text: q
    });
    console.log('==========');
  }

})();