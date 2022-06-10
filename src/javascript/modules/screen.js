class Screen {
  constructor({ width, height }) {
    this.screen = { width, height };
  }

  isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };
}

class ScreenMouseTracker extends Screen {
  constructor({ width, height }) {
    super({ width, height });
    this.mouse = { x: 0, y: 0 };
    this.mouseStored = { ...this.mouse };
  }

  setMouseCoords = (event) => {
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  };

  trackMousePosition() {
    window.addEventListener("mousemove", this.setMouseCoords);
  }
}

class ScreenWithMouseStored extends ScreenMouseTracker {
  constructor({ width, height }) {
    super({ width, height });
    this.mouseStored = { ...this.mouse };
  }

  updateMouseStored({ x, y }) {
    this.mouseStored = { x, y };
  }

  isStoredMousePosition = () => {
    return (
      this.mouseStored.x === this.mouse.x && this.mouseStored.y === this.mouse.y
    );
  };
}

export { ScreenWithMouseStored as ScreenInstance };
