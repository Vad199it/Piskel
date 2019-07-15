export default function renderTools() {
  const toolsContainer = document.querySelector('main .tools-container');
  toolsContainer.innerHTML = `
  <ul class="tool-size">
          <div class="description">
            <span class="description-title">Pen size</span>
            <p class="description-text">from 1 to 4 pixels</p>
          </div>
          <li class="size px1"></li>
          <li class="size px2"></li>
          <li class="size px3"></li>
          <li class="size px4"></li>
        </ul>

        <ul class="tools-select">
          <li class="tool pen">
            <i class="fas fa-pen"></i>
          </li>
          <li class="tool mirror-pen">
            <i class="fas fa-grip-lines-vertical"></i>
          </li>
          <li class="tool paint-bucket">
            <i class="fas fa-fill-drip"></i>
          </li>
          <li class="tool paint-bucket-all">
            <i class="fas fa-paint-roller"></i>
          </li>
          <li class="tool eraser">
            <i class="fas fa-eraser"></i>
            </li>
          <li class="tool stroke">
            <i class="fas fa-minus"></i>
          </li>
          <li class="tool rect">
            <i class="far fa-square"></i>
            </li>
            <li class="tool ellipse">
            <i class="far fa-circle"></i>
            </li>
            <li class="tool triangle">
            <i class="fas fa-caret-up fa-2x"></i>
          </li>
          <li class="tool dithering">
            <i class="fas fa-chess-board"></i>
            </li>
            <li class="tool magic-eraser">
            <i class="fas fa-magic"></i>
            </li>
            <li class="tool move">
            <i class="fas fa-hand-paper"></i>
           </li>
          <li class="tool darken">
            <i class="fas fa-moon"></i>
           </li>
          <li class="tool lighten">
            <i class="fas fa-sun"></i>
           </li>
          <li class="tool color-picker">
            <i class="fas fa-eye-dropper"></i>
          </li>
        </ul>

        <div class="choose-color">
          <input type="color" name="second-color" class="second-color" value="#ffffff">
          <input type="color" name="color" class="color">
        </div>
        
        <button class="hot-keys">
        <i class="fas fa-keyboard fa-3x"></i>
        </button>
        
        <div class="modal">
            <div class="modal_cross"><i class="far fa-times-circle fa-2x"></i></div>
            <ul class="shortcut-container">
                 <li class="shortcut">
                    <div class="shortcut-block">P</div>
                     <p class="shortcut-name">Pen tool</p>
                 </li>
                 
                 <li class="shortcut">
                    <div class="shortcut-block">C</div>
                     <p class="shortcut-name">MirrorPen Tool</p>
                 </li>
                 
                 <li class="shortcut">
                    <div class="shortcut-block">B</div>
                     <p class="shortcut-name">PaintBucket Tool</p>
                 </li>
                 
                 <li class="shortcut">
                    <div class="shortcut-block">A</div>
                     <p class="shortcut-name">PaintBucketAll Tool</p>
                 </li>
                 
                 <li class="shortcut">
                    <div class="shortcut-block">E</div>
                     <p class="shortcut-name">Eraser Tool</p>
                 </li>
                 
                 <li class="shortcut">
                    <div class="shortcut-block">M</div>
                     <p class="shortcut-name">MagicErser Tool</p>
                 </li>
                 
                 <li class="shortcut">
                    <div class="shortcut-block">S</div>
                     <p class="shortcut-name">Stroke Tool</p>
                 </li>
                 
                 <li class="shortcut">
                    <div class="shortcut-block">R</div>
                     <p class="shortcut-name">Rect Tool</p>
                 </li>
                 
                 <li class="shortcut">
                    <div class="shortcut-block">C</div>
                     <p class="shortcut-name">Ellipse Tool</p>
                 </li>
                 
                 <li class="shortcut">
                    <div class="shortcut-block">T</div>
                     <p class="shortcut-name">Triangle Tool</p>
                 </li>
                 
                 <li class="shortcut">
                    <div class="shortcut-block">D</div>
                     <p class="shortcut-name">Brightness(-) Tool</p>
                 </li>
                 
                 <li class="shortcut">
                    <div class="shortcut-block">L</div>
                     <p class="shortcut-name">Brightness(+) Tool</p>
                 </li>
                 
                 <li class="shortcut">
                    <div class="shortcut-block">J</div>
                     <p class="shortcut-name">Move tool</p>
                 </li>
                 
                 <li class="shortcut">
                    <div class="shortcut-block">I</div>
                     <p class="shortcut-name">Dithering tool</p>
                 </li>
                 
                 <li class="shortcut" >
                    <div class="shortcut-block">O</div>
                     <p class="shortcut-name">Color Picker tool</p>
                 </li>
            </ul>
       </div>
       
        <div class="overlay" id="overlay-modal"></div> `;
}
