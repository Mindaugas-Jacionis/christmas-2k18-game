(function() {
  const app = document.getElementById("app");
  const christmasTree = document.createElement("div");
  const scoreBoard = document.createElement("div");
  const present = "🎁";
  const interval = 10;
  const appPaddingVertical = 100;
  // using keyCode instead of key, as in other languages symbol might differ
  const upKeyCodes = [87, 38]; // w & arrow up
  const downKeyCodes = [83, 40]; // s & arrow down
  let controlsInterval = -1;
  let score = 0;
  let allPresents = [];
  let time = 0;

  christmasTree.className = "Christmas-tree";
  christmasTree.textContent = "🎄";

  scoreBoard.className = "Score";
  scoreBoard.textContent = score;

  app.appendChild(christmasTree);
  app.appendChild(scoreBoard);
  app.style.padding = `${appPaddingVertical}px 0`;

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

  const move = direction => {
    const currentPosition = christmasTree.offsetTop;
    let newPosition = currentPosition;
    if (direction === "up") {
      newPosition = newPosition - 1;
    }
    if (direction === "down") {
      newPosition = newPosition + 1;
    }

    christmasTree.style.top = `${newPosition}px`;
  };

  const handleControls = ({ keyCode }) => {
    let direction = null;
    direction = upKeyCodes.includes(keyCode) ? "up" : direction;
    direction = downKeyCodes.includes(keyCode) ? "down" : direction;
    if (direction && controlsInterval === -1) {
      controlsInterval = setInterval(() => move(direction), 5);
    }
  };

  const render = () => {
    allPresents.forEach(currentPresent => {
      if (checkCollision(currentPresent)) {
        currentPresent.remove();
        score++;
      }

      if (currentPresent.offsetLeft === 0) {
        currentPresent.remove();
      }
    });

    scoreBoard.textContent = score;
  };

  const randomPosition = () => {
    const { floor, random } = Math;
    const screenHeight = app.offsetHeight - 2 * appPaddingVertical;
    const topOffset = floor(random() * screenHeight) + appPaddingVertical;

    return topOffset;
  };

  const startGame = () => {
    intervalId = setInterval(() => {
      time += interval;

      if (time % 1000 === 0) {
        const newPresent = document.createElement("div");
        const topOffset = randomPosition();

        newPresent.className = "Present";
        newPresent.textContent = present;
        newPresent.style.top = `${topOffset}px`;

        app.appendChild(newPresent);
        allPresents = [...allPresents, newPresent];
      }

      render();
    }, interval);
  };

  const renderStart = () => {
    const overlay = document.createElement("div");
    const startButton = document.createElement("button");

    overlay.className = "Overlay";
    overlay.appendChild(startButton);

    startButton.type = "button";
    startButton.textContent = "Start";

    app.appendChild(overlay);

    startButton.addEventListener("click", () => {
      overlay.remove();
      startGame();
    });
  };

  render();
  window.addEventListener("load", renderStart);
  document.addEventListener("keydown", handleControls);
  document.addEventListener("keyup", () => {
    console.log();
    clearInterval(controlsInterval);
    controlsInterval = -1;
  });
})();
