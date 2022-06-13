const toggleHintBoard = (btnTypeHint, hintBoard) => {
  [...btnTypeHint].forEach((btn) =>
    btn.addEventListener("click", (e) => {
      [...hintBoard].forEach((board) => {
        if (board.classList.contains(e.target.classList[2])) {
          board.classList.toggle("visible");
        }
      });
    })
  );
};
export default { toggleHintBoard };
