"use strict"
// https://t.me/c/1924089996/599

// $(document).ready(function () {

//     $( ".btn" ).on( "click", function () {
//         var inputValue = $("input").val();
//         var h2 = $(`<h2 class="mx-auto">${inputValue}</h2>`);
//         $("h2").remove();
//         $(".col-md-12").append(h2);
//         h2.addClass("bottomText");
//     });
// });

// https://t.me/c/1924089996/600

// $(document).ready(function () {

//     $(".btn").on("click", function () {
//         var inputValue = document.querySelector("input").value;
//         $('h2').each(function() {
//             $(this).remove();
//         });
//         if (!Number.isNaN(Number(inputValue))) {
//             for (let i = 1; i <= Number(inputValue); i++) {
//                 $(".col-md-12").append(function(index, html) {
//                     return $(`<h2 class="mx-auto">${inputValue}</h2>`);
//                 });
//             }
//         }else{
//             $(".col-md-12").append($(`<h2 class="mx-auto">${inputValue}</h2>`));
//         }
//         $('h2').each(function() {
//             $(this).addClass("bottomText");
//         });
//     });
// });

// https://t.me/c/1924089996/609 - 01:00 

// $(document).ready(function () {

//     $(".btn").on("click", function () {
//         var inputValue = document.querySelector("input").value;
//         $('h2').each(function () {
//             $(this).remove();
//         });
//         if (inputValue && inputValue.trim()) {
//             if (!Number.isNaN(Number(inputValue))) {
//                 for (let i = 1; i <= Number(inputValue); i++) {
//                     $(".col-md-12").append(function (index, html) {
//                         return $(`<h2 class="mx-auto">${inputValue}</h2>`);
//                     });
//                 }
//             } else {
//                 $(".col-md-12").append($(`<h2 class="mx-auto">${inputValue}</h2>`));
//             }
//             $('h2').each(function () {
//                 $(this).addClass("bottomText");
//             });
//         }
//     });
// });
