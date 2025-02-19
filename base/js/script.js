$(function () {
  // jQuery goes here...
  // Uncomment this line to fade out the red box on page load

  // SELECTOR

  // $(".red-box").fadeTo(3000, 0.2);
  // $(".green-box").fadeTo(2000, 0.5);
  // $(".blue-box").fadeTo(1000, 0.8);

  // ===================

  // $(".red-box").hide();
  // $(".green-box").show();
  // $(".red-box").toggle();
  // $(".green-box").toggle();

  // ===================

  // $(".blue-box").slideUp(2000);
  // $(".blue-box").slideDown(2000);
  // $(".red-box").slideToggle(2000);

  // ===================

  // $(".blue-box").animate(
  //   {
  //     "margin-left": "+=200px",
  //   },
  //   1000,
  //   "linear"
  // );

  // ===================

  // $(".blue-box").animate(
  //   {
  //     marginLeft: "200px",
  //     opacity: "0",
  //     height: "50px",
  //     width: "50px",
  //     marginTop: "25px",
  //   },
  //   1000
  // );
  // $("p").animate(
  //   {
  //     "font-size": "20px",
  //   },
  //   1000
  // );
  // =====================

  // $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn();

  // =====================

  // $(".red-box").fadeTo(1000, 0, () => {
  //   $(".green-box").fadeTo(1000, 0, () => {
  //     $(".blue-box").fadeTo(1000, 0);
  //   });
  // });

  // =====================

  // $(".lightbox").fadeIn(1000);

  // =====================

  // $("p").css("background-color", "rgba(180,180,30,08)");
  // $(".red-box").css("background-color", "rgba(180,180,30,08)");
  // $("#list").css("background-color", "rgba(180,180,30,08)");
  // $("input[type='text']").css("background-color", "rgba(180,180,30,08)");
  // $("h2,p,input").css("background-color", "rgba(180,180,30,08)");
  // $("li:last").css("background-color", "rgba(180,180,30,08)");
  // $("li:even").css("background-color", "rgba(180,180,30,08)");
  // $("li:odd").css("background-color", "rgba(180,180,30,08)");
  // $("input:selected").css("background-color", "rgba(180,180,30,0.8)");

  // =======================

  // $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").parents("body").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").parent().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").siblings().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8)");

  // =======================

  // $("#list")
  //   .children("li")
  //   .filter(":even")
  //   .css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list")
  //   .filter((index) => {
  //     return index % 3 === 1;
  //   })
  //   .css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").first().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").last().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").eq().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li")
  //   .not((index) => {
  //     return index % 3 === 2;
  //   })
  //   .css("background-color", "rgba(180, 180, 30, 0.8)");

  // adding new elements to the DOM

  // $("ul ul:first").append("<li>I'm gonna be the last sub-item</li>");
  // $("<li>I'm gonna be the last sub-item</li>").append("ul ul:first"); --> ko phải SELECTOR
  // $("ul ul").prepend("<li>I'm gonna be the last sub-item</li>");
  // $("<h4>Peter Sommerhoff</h4>").prependTo("#content");

  // $(".red-box").after("<div class='red-box'>Another red box</div>");
  // $(".blue-box").after("<div class='blue-box'>Blue friend</div>");

  // $(".blue-box").before(() => {
  //   return "<div class='blue-box'>Blue 2</div>";
  // });

  // $("p").after("#list");

  // replace element into DOM

  // $("li").replaceWith("<li>Replaced li.</li>");

  // $("li").replaceWith(() => {
  //   return "<li>Replace with function</li>";
  // });

  // var firstListItem = $("li:first");
  // $("p").replaceWith(firstListItem);

  // $(".red-box, .green-box").replaceWith(
  //   "<div class='green-box'>More green</div>"
  // );

  // $("<div class='green-box'>More Green</div>").replaceAll(
  //   ".red-box, .blue-box"
  // );

  // Remove HTML Elements from DOM

  // $("li").remove();
  // $("form").children().not("input:text, textarea, br").remove();

  // var detachListItem = $("li").detach(); // cắt toàn bộ li khỏi DOM
  // console.log(detachListItem);
  // $("#content").append(detachListItem);

  // $("p:first").empty();
  //$(".red-box, .green-box, .blue-box").empty(); // xóa nested html

  // attr(), prop(), val()

  // var specialLink = $("#special-link");
  // console.log(specialLink.attr("href")); // get giá trị của attribute
  // console.log(specialLink.attr("title"));

  // specialLink.attr("href", "http://petersommerhoff.com"); // set giá trị cho attribute

  // var checkbox = $("input:checkbox");
  // console.log(checkbox.prop("checked")); // true hay false
  // console.log(checkbox.attr("checked")); // lấy giá trị của checked attribute --> checked

  // var textInput = $("input:text");
  // console.log(textInput.val()); // lấy giá trị input

  // var rangeInput = $("input[type='range'");
  // console.log(rangeInput.val());

  // làm slide show

  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg",
  ];

  let i = 0;
  setInterval(() => {
    i = (i + 1) % images.length; // 0,1,2,0,1,2,0,1...
    galleryImage.fadeOut(() => {
      $(this).attr("src", images[i]); // this đại diện cho phần tử DOM hiện tại đang áp dụng
      $(this).fadeIn();
    });
    console.log(galleryImage.attr("src"));
  }, 2000);
});
