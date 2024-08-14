const timeline = document.querySelector('#timeline');
const dom = document.querySelector('#connection-box')

// 渲染事件
events.forEach(item => {
  const li = document.createElement('li');
  
  li.innerHTML = `
    <i class="node-icon">
      <img src="${typeImg[item.type].img}" alt="${item.type}图标" />
    </i>
    <span class="time">${item.date}</span>
    <span class="txt" style="color: ${typeImg[item.type].color}">${item.text}</span>
  `;
  
  timeline.appendChild(li);
});

// 点击事件处理函数
function handleClick(item) {
  if (item.type === 'img') {
    const modal = document.querySelector('.modal-content');
    const img = document.createElement('img');
    img.src = item.img;
    modal.appendChild(img);
    showModal(); // 假设 showModal 是你已有的函数
  } else if (item.type === 'link') {
    window.open(item.href);
  } else if (item.type === 'other') {
    // 处理其他类型
    console.log('其他类型的处理');
  }
}

// 渲染联系方式
list.forEach(item => {
  const li = document.createElement('li');
  li.role = 'button';
  
  const icon = document.createElement('i');
  icon.className = `iconfont icon-${item.icon}`;
  
  // 添加点击事件
  icon.addEventListener('click', () => handleClick(item));
  
  li.appendChild(icon);
  dom.appendChild(li);
})