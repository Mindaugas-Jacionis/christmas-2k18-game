(function() {
  const app = document.getElementById("app");
  const christmasTree = document.createElement("div");
  const scoreBoard = document.createElement("div");
  const present = "🎁";
  const interval = 10;
  let score = 0;
  let allPresents = [];
  let time = 0;

  christmasTree.className = "Christmas-tree";
  christmasTree.textContent = "🎄";

  scoreBoard.className = "Score";
  scoreBoard.textContent = score;

  app.appendChild(christmasTree);
  app.appendChild(scoreBoard);

  const checkCollision = currentPresent => {
    const horizontalCollision =
      currentPresent.offsetLeft <
        christmasTree.offsetLeft + christmasTree.offsetWidth &&
      currentPresent.offsetLeft + currentPresent.offsetWidth >
        christmasTree.offsetLeft;

    const verticalCollision =
      currentPresent.offsetTop <
        christmasTree.offsetTop + christmasTree.offsetHeight &&
      currentPresent.offsetHeight + currentPresent.offsetTop >
        christmasTree.offsetTop;

    return horizontalCollision && verticalCollision;
  };

  const render = () => {
    allPresents.forEach(currentPresent => {
      if (checkCollision(currentPresent)) {
        currentPresent.remove();
        score++;
      }
    });

    scoreBoard.textContent = score;
  };

  const startGame = () => {
    intervalId = setInterval(() => {
      time += interval;

      if (time % 1000 === 0) {
        const newPresent = document.createElement("div");
        newPresent.className = "Present";
        newPresent.textContent = present;
        app.appendChild(newPresent);
        allPresents = [...allPresents, newPresent];
      }

      render();
    }, interval);
  };

  render();
  window.addEventListener("load", startGame);
})();
