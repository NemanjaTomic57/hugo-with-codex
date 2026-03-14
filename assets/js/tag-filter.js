document.addEventListener("DOMContentLoaded", () => {
  const filterRoot = document.querySelector("[data-tag-filter]");
  const postItems = Array.from(document.querySelectorAll("[data-post-tags]"));

  if (!filterRoot || postItems.length === 0) {
    return;
  }

  const buttons = Array.from(filterRoot.querySelectorAll("[data-tag]"));
  const resetButton = filterRoot.querySelector("[data-tag-reset]");

  const setPressedState = (activeTag) => {
    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.tag === activeTag));
    });

    if (resetButton) {
      resetButton.setAttribute("aria-pressed", String(activeTag === null));
    }
  };

  const applyFilter = (activeTag) => {
    postItems.forEach((item) => {
      const tags = item.dataset.postTags ? item.dataset.postTags.split(",") : [];
      const isVisible = activeTag === null || tags.includes(activeTag);
      item.classList.toggle("is-hidden", !isVisible);
    });

    setPressedState(activeTag);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.tag || null));
  });

  if (resetButton) {
    resetButton.addEventListener("click", () => applyFilter(null));
  }

  applyFilter(null);
});
