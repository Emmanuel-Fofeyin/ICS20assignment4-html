// Copyright (c) 2022 Emmanuel-Fofeyin All rights reserved
//
// Created by: Emmanuel-Fofeyin
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20assignment4-html/sw.js", {
    scope: "/ICS20assignment4-html/",
  })
}

;("use strict")

/**
 * This function calculates the cost of a pizza
 */
function myButtonClicked() {
  // input
  const sizeLarge = document.getElementById("large").checked
  const oneTopping = document.getElementById("one").checked
  const twoTopping = document.getElementById("two").checked
  const threeTopping = document.getElementById("three").checked
  const fourTopping = document.getElementById("four").checked
  var size
  var toppings

  // process and output
  const TAX = 0.13

  if (sizeLarge == true) {
    size = 6.0
  }

  if (sizeLarge == false) {
    size = 10.0
  }

  if (oneTopping == true) {
    toppings = 1.0
  }

  if (twoTopping == true) {
    toppings = 1.75
  }

  if (threeTopping == true) {
    toppings = 2.5
  }

  if (fourTopping == true) {
    toppings = 3.35
  }

  var total = (size + toppings) * (1 + TAX)
  document.getElementById("cost").innerHTML =
    "The total cost is $" + total.toFixed(2)
}
