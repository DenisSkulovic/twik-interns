export const twikPopupWrapper_click = (e) => {
  e.stopPropagation();
  console.log("click popup");
};

export const twikOverlay_click = (e) => {
  e.stopPropagation();
  console.log("overlay click");
};
