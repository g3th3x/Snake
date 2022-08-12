function animation(obj) {
  const { clear, update, render } = obj;
  let pTimestamp = 0;

  requestAnimationFrame(animate);

  function animate(timestamp) {
    requestAnimationFrame(animate);
    const diff = timestamp - pTimestamp;
    pTimestamp = timestamp;

    const fps = 1000 / diff;
    secondPart = diff / 1000;

    const params = {
      timestamp,
      pTimestamp,
      diff,
      fps,
      secondPart,
    };

    update(params);
    clear();
    render(params);
  }
}
