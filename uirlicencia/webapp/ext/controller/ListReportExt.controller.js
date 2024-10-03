sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onAceptar: function(oEvent) {
            MessageToast.show("Solicitud aceptada.");
        },
        onRechazar: function(oEvent) {
        MessageToast.show("Solicitud rechazada.");
        }
    };
});