// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.querySelectorAll('.btn--primary');
let resetColor = document.querySelector('.btn--reset');

chrome.storage.sync.get(function(data) {

  // changeColor.forEach((element, i) => {
  //   console.log('test');
  //   element.style.backgroundColor = data.colours[i].color;
  //   element.setAttribute('value', data.colours[i].color);
  // });

  console.log(data);

  for (const element of changeColor) {
	  console.log('for element: ', element);
  }
  
  for(let i = 0; i < changeColor.length; i++) {
    console.log(data);
  }


  changeColor.forEach(element => {
	  console.log('foreach element: ', element);
	});
  // changeColor.style.backgroundColor = data.color;
  // changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};

resetColor.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "";'});
  });
};
