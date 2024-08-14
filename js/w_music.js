window.onload = function () {
  // 获取所有需要逐字显示的元素
  const elements = [
    "salutation",
    "p1",
    "p2",
    "p3",
    "p4",
    "p5",
    "end1",
    "end2",
    "date",
  ];

  // 获取每个元素的文本内容
  const texts = elements.map((id) => document.getElementById(id).innerHTML);

  // 清空所有元素的文本内容，以便逐字显示
  elements.forEach((id) => (document.getElementById(id).innerHTML = ""));

  // 初始化索引
  let index = 0;
  let currentElementIndex = 0;
  let isTyping = false; // 标记是否正在逐字显示
  let musicPlayed = false; // 标记音乐是否已经播放

  // 获取音频元素
  const audio = document.getElementById("background-music");

  // 定义一个函数来逐字显示文本
  function typeWriter() {
    if (currentElementIndex < elements.length) {
      const elementId = elements[currentElementIndex];
      const element = document.getElementById(elementId);
      const text = texts[currentElementIndex];

      if (index < text.length) {
        // 将当前字符添加到当前元素的内容中
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 200); // 200 毫秒后调用 typeWriter
      } else {
        // 完成当前元素的逐字显示后，移动到下一个元素
        currentElementIndex++;
        index = 0; // 重置索引
        setTimeout(typeWriter, 200); // 确保当前元素完全显示后才开始下一个
      }
    }
  }

  // 处理点击事件以开始逐字显示和播放音乐
  document.body.addEventListener("click", function () {
    if (!isTyping) {
      isTyping = true; // 设置标记为正在逐字显示
      typeWriter(); // 开始逐字显示
    }

    if (!musicPlayed) {
      musicPlayed = true; // 设置标记为音乐已经播放
      audio.play(); // 播放音乐
    }
  });
};
