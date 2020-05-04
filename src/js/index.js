/**
 * Leche NIDO Widget
 */

$(document).ready(function () {
  /**
   * View
   */

  const view = {
    timeline: {
      circles: $(".timeline__circle"),
    },
  };

  /**
   * - Global -
   * Adding 'lecheNido' to browser window object
   * to allow global access to 'currentSelected'
   */

  window.lecheNido = {
    widget: {
      currentSelected: "",
    },
  };

  /**
   * Controller
   */

  const circleOnClick = (e) => {
    // Getting dot relationship
    selectContent(e.target.dataset.relationship);
  };

  const messageVisibility = (relationship) => {
    view.timeline.circles.each(function () {
      const r = $(this).data("relationship").toString();
      const msg = $(this).siblings(".timeline__message");

      if (r && msg) {
        if (r === relationship) {
          msg.show();
        } else {
          msg.hide();
        }
      }
    });
  };

  const listItemOnClick = (e) => {
    // Getting age and parsing
    selectContent(e.target.dataset.relationship);
  };

  const selectContent = (relationship) => {
    // Set span
    $(".timeline__span-container span").text(relationship);

    // Show message over selected circle
    messageVisibility(relationship);

    // Setting currentSelected in dataset attribute
    $("#leche-nido-widget").data("currentSelected", relationship);

    // Setting currentSelected in global window object
    window.lecheNido.widget.currentSelected = relationship;
  };

  /**
   * Init
   */
  (function () {
    // List items
    $(".timeline__list li").each(function () {
      $(this).on("click", listItemOnClick);
    });

    // Timeline circles
    view.timeline.circles.each(function () {
      $(this).on("click", circleOnClick);
    });
  })();
});
