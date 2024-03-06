output.getOnTheList = {
    
    //Get on the list from home page//
    getOnTheListHome: {
        listOfLocations: (APP_ID)+":id/placesAddress",
    },
    
    // Get on the list page //
    visitInfo: {
        waitListHeader: (APP_ID) + ":id/waitlistBannerHeader",
        restaurantName: (APP_ID) + ":id/restaurantName",
        restaurantAdress: (APP_ID) + ":id/waitlistPoint",
        editButton: (APP_ID) + ":id/editWaitList",
        currentWaitTime: (APP_ID) + ":id/current_waitTime",
        partySizeTitle: (APP_ID) + ":id/yourPartySizeHeader",
        partySizeContent: (APP_ID) + ":id/partySizeContent",
        whenTitle: (APP_ID) + ":id/whenTimesSlotsHeader",
        whenContent: (APP_ID) + ":id/whenTimesSlots",
        specialOccasionTitle: (APP_ID) + ":id/specialOccasionHeader",
        specialOccasionContent: (APP_ID) + ":id/specialOccasion",
        bottomMessage: (APP_ID) + ":id/cd_bottom_screen",
        confirmButton: (APP_ID) + ":id/confirm_waitlist",
    },

    // Party Size page 
    partySize: {
        partySizeGetOnTheListAt: (APP_ID) + ":id/pickSelectionBannerHeader",
        partySizeStoreName: (APP_ID) + ":id/restaurantName",
        partySizeStoreAdress: (APP_ID) + ":id/pickSelectionPoint",
        estimatedTime: (APP_ID) + ":id/estimatedTime",
        generalList: (APP_ID) + ":id/pickerSelectionList",
        listEspecificNumber: (APP_ID) + ":id/numberpicker_input",
        confirmButton: (APP_ID) + ":id/confirm",
    },

    // When - page 
    When: {
            
        whenGetOnTheListAt: (APP_ID)+":id/pickSelectionBannerHeader",
        whenStoreName: (APP_ID)+":id/restaurantName",
        whenStoreAdress: (APP_ID)+":id/pickSelectionPoint",    
        currentTimeSelected: (APP_ID)+":id/estimateTimeBackground",
        whenGeneralList: (APP_ID)+":id/pickerSelectionList",
        whenEspecificItemList: (APP_ID)+":id/numberpicker_input",
        whenReservation: (APP_ID)+":id/numberpicker_input",
        whenConfirm: (APP_ID)+":id/confirm",
    },


    // Special Occasion - page
    specialOccasion: {
        
        specialOccasionGetOnTheListAt: (APP_ID)+":id/pickSelectionBannerHeader",
        specialOccasionStoreName: (APP_ID)+":id/restaurantName",
        specialOccasionStoreAdress: (APP_ID)+":id/pickSelectionPoint",
        ocasionSelected: (APP_ID)+":id/estimateTimeBackground",
        specialOccasionGeneralList: (APP_ID)+":id/pickerSelectionList",
        specialOccasionEspecificList: (APP_ID)+":id/numberpicker_input",
        confirmButton: (APP_ID)+":id/confirm",
    },

    // Confirmation Page
    waitlistConfirmation: {
        titleYouAreOnTheList: (APP_ID) + ":id/waitlistConfirmationTitle",
        closeButton: (APP_ID) + ":id/closeButton",
        confirmationMessage: (APP_ID) + ":id/waitlistConfirmationMessage",
        confirmationVideo: (APP_ID) + ":id/waitlistConfirmationVideo",

        // Confirmation - Sub Header //
        waitListDetailsTitle: (APP_ID) + ":id/waitlistDetailsTitle",
        guestQuantity: (APP_ID) + ":id/textGuestsNumber",
        reservationHour: (APP_ID) + ":id/textBookingHour",
    },

    //  You are on the List page //
youAreOnTheList: {
    
    waitListHeader: (APP_ID)+":id/waitListHeader",
    guestQuantityOnPage: (APP_ID)+":id/guestsNumber",
    reservationHourOnPage: (APP_ID)+":id/bookingHour",
    storeNameOnPage: (APP_ID)+":id/infoRestaurantName",
    adressNameOnPage: (APP_ID)+":id/infoRestaurantAddress",
    currentTime: (APP_ID)+":id/current_waitTime",
    joinDRBanner: (APP_ID)+":id/yellowBlock",
    shareMatesTitle: (APP_ID)+":id/shareMates",
    shareMatesMessage: (APP_ID)+":id/textSessionShare",
    emailField: (APP_ID)+":id/descriptionEditText",
    shareMatesButton: (APP_ID)+":id/buttonShare",
    },

    // Modify or Cancel 
    modifyOrCancel: {
        modifyOrCancelTitle: (APP_ID) + ":id/modifyOrCancelHeader",
        modifyOrCancelMessage: (APP_ID) + ":id/textSessionModifyCancel",
        modifyButton: (APP_ID) + ":id/buttonModify",
        removeMyNameButton: (APP_ID) + ":id/buttonCancel",
        contactUs: (APP_ID) + ":id/textSessionCall",
        callButton: (APP_ID) + ":id/callButton",
    },

    // Canceled //
    Canceled: {
        titleHeader: (APP_ID) + ":id/cancelHeader",
        canceledMessage: (APP_ID) + ":id/cancelInfo",
        storeName: (APP_ID) + ":id/infoRestaurantName",
        storeAdress: (APP_ID) + ":id/infoRestaurantAddress",
        statusCanceled: (APP_ID) + ":id/canceled",
        changeYourMindTitle: (APP_ID) + ":id/cancelSubHeader",
        getBackButton: (APP_ID) + ":id/buttonGetBack",
        needToContactLabel: (APP_ID) + ":id/buttonGetBack",
        callButton: (APP_ID) + ":id/callButton",
    },
}