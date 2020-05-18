/**
 * Journey Widget
 */

$(document).ready(function () {
  /**
   * Controllers
   */

  const circleOnClick = (e, data) => {
    selectContent(e.target.dataset.relationship, data);
  };

  const messageVisibility = (relationship, data) => {
    data.circles.each(function () {
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

  const listItemOnClick = (e, data) => {
    selectContent(e.target.dataset.relationship, data);
  };

  const selectContent = (relationship, data) => {
    // Set span
    $(data.prefix + ".timeline__span-container span").text(relationship);

    // Show message over selected circle
    messageVisibility(relationship, data);

    // Setting up current selected dot
    data.currentSelected = relationship;

    // Dispatch event
    data.dispatch();
  };

  /**
   * Init
   */

  $(".journey-widget__container").each(function () {
    /**
     * Setting up data
     */
    const id = $(this).parent().parent().data("id");
    const prefix = ".elementor-element-" + id + " ";
    const circles = $(prefix + ".timeline__circle");

    const data = {
      id,
      prefix,
      circles,
      dispatch: function () {
        window.dispatchEvent(event);
      },
    };

    /**
     * Custom event to send widget data all along the website
     */
    const event = new CustomEvent("journeyWidget", { detail: data });

    /**
     * Events
     */

    // List items
    $(prefix + ".timeline__list li").each(function () {
      $(this).on("click", function (e) {
        listItemOnClick(e, data);
      });
    });

    // Timeline circles
    circles.each(function () {
      $(this).on("click", function (e) {
        circleOnClick(e, data);
      });
    });
  });
});
