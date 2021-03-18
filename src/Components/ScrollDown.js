export const ByItem = (itemName) => {
  const naviItem = document.getElementById("navi");
  const naviHeight = naviItem.getBoundingClientRect();

  if (itemName === "ch") {
    itemName = "intro";
  }
  try {
    const item = document.getElementById(itemName);
    const location = item.getBoundingClientRect();

    var diffItemNavi = location.top - naviHeight.height;
    if (diffItemNavi < 0) diffItemNavi = 0;
    window.scrollTo({ top: diffItemNavi, behavior: "smooth" });
  } catch (err) {
    return;
  }
};

const isElementUnder = (element, triggerDiff) => {
  const { top } = element.getBoundingClientRect();
  const { innerHeight } = window;

  return top > innerHeight + (triggerDiff || 0);
};

export const ByDiff = () => {
  const naviItem = document.getElementById("navi");
  const naviHeight = naviItem.getBoundingClientRect();

  const elements = document.querySelectorAll(".up-on-scroll");
  elements.forEach((element) => {
    if (isElementUnder(element, 20)) {
      element.style.opacity = "0";
      element.style.transform =
        "translateY(" + naviHeight.height.toString() + "px)";
    } else {
      element.style.opacity = "1";
      element.style.transform = "translateY(0px)";
    }
  });
};
