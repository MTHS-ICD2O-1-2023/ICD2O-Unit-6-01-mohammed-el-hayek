// Copyright (c) 2024 Mohammed EL-hayek All rights reserved
//
// Created by: Mohammed
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker support"
*/
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-01-Mohammed-El-Hayek/sw.js", {
    scope: "/ICS2O-Unit-6-01-Mohammed-El-Hayek/",
  })
}

function myButtonClicked() {
  alert("Answer will be supported soon")
}