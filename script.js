// Select The Elements
const previewBtn = document.getElementById('preview-btn');
const previewCard = document.getElementById('preview-card')
const textInput = document.getElementById('btn-text');
const fontFamilySelect = document.getElementById('font-family');
const backgroundColorInput = document.getElementById('background-color');
const textColorInput = document.getElementById('text-color');
const borderColorInput = document.getElementById('border-color');
const borderStyleInputs = document.querySelectorAll('input[name="border-style"]');
const borderThicknessSlider = document.getElementById('border-thickness');
const borderThicknessValue = document.getElementById('border-thickness-value');
const borderRadiusSlider = document.getElementById('border-radius');
const borderRadiusValue = document.getElementById('border-radius-value');
const fontSizeSlider = document.getElementById('font-size');
const fontSizeValue = document.getElementById('font-size-value');
const fontWeightSlider = document.getElementById('font-weight');
const fontWeightValue = document.getElementById('font-weight-value');
const widthSlider = document.getElementById('width');
const widthValue = document.getElementById('width-value');
const heightSlider = document.getElementById('height');
const heightValue = document.getElementById('height-value');
const hoverBackgroundColorInput = document.getElementById('hover-background-color');
const hoverTextColorInput = document.getElementById('hover-text-color');
const hoverBorderColorInput = document.getElementById('hover-border-color');
const hoverScaleSlider = document.getElementById('hover-scale');
const hoverScaleValue = document.getElementById('hover-scale-value');
const hoverTransitionSlider = document.getElementById('hover-transition');
const hoverTransitionValue = document.getElementById('hover-transition-value');
const copyCssBtn = document.getElementById('copy-css-btn');

// Update Preview Card Color 
backgroundColorInput.addEventListener('input', () => {
  previewCard.style.backgroundColor = backgroundColorInput.value;
});

// Update Copy CSS Button Background 
textColorInput.addEventListener('input', () => {
  copyCssBtn.style.backgroundColor = textColorInput.value;
});

// Update Button's Text
textInput.addEventListener('input', () => {
  if (textInput.value.trim() === '') {
    previewBtn.textContent = 'Click It!'; // Default text if input is empty
  } else {
    previewBtn.textContent = textInput.value;
  }
});

// Update Button's Font
fontFamilySelect.addEventListener('change', () => {
  previewBtn.style.fontFamily = fontFamilySelect.value;
});

// Update Button's Background Color
backgroundColorInput.addEventListener('input', () => {
  previewBtn.style.backgroundColor = backgroundColorInput.value;
});

// Update Button's Text Color
textColorInput.addEventListener('input', () => {
  previewBtn.style.color = textColorInput.value;
})

// Update Button's Border Color
borderColorInput.addEventListener('input', () => {
  previewBtn.style.borderColor = borderColorInput.value;
});

// Update Button's Border Style
borderStyleInputs.forEach(input => {
  input.addEventListener('change', () => {
    if (input.checked) {
      previewBtn.style.borderStyle = input.value;
    }
  });
});

// Update Button's Border Thickness
borderThicknessSlider.addEventListener('input', () => {
  const thickness = borderThicknessSlider.value + 'px';
  previewBtn.style.borderWidth = thickness;
  borderThicknessValue.textContent = thickness;
});

//Update Button's Border Radius
borderRadiusSlider.addEventListener('input', () => {
  const radius = borderRadiusSlider.value + 'px';
  previewBtn.style.borderRadius = radius;
  borderRadiusValue.textContent = radius;
});

// Update Button's Font Size 
fontSizeSlider.addEventListener('input', () => {
  const fontsize = fontSizeSlider.value + 'px';
  previewBtn.style.fontSize = fontsize;
  fontSizeValue.textContent = fontsize;
});

//Update Button's Font Weight 
fontWeightSlider.addEventListener('input', () => {
  const fontweight = fontWeightSlider.value;
  previewBtn.style.fontWeight = fontweight;
  fontWeightValue.textContent = fontweight;
});

// Update Button's Width 
widthSlider.addEventListener('input', () => {
  const width = widthSlider.value + 'px';
  previewBtn.style.width = width;
  widthValue.textContent = width;
});

// Update Button's Height 
heightSlider.addEventListener('input', () => {
  const height = heightSlider.value + 'px';
  previewBtn.style.height = height;
  heightValue.textContent = height;
});

// Update Hover Styles
function updateHoverStyles() {
  const style = document.createElement('style');
  style.textContent = `
    #preview-btn:hover {
      background-color: ${hoverBackgroundColorInput.value || previewBtn.style.backgroundColor} !important;
      color: ${hoverTextColorInput.value || previewBtn.style.color
      } !important;
      border-color: ${hoverBorderColorInput.value || previewBtn.style.borderColor} !important;
      transform: scale(${hoverScaleSlider.value}) !important;
      transition: all ${hoverTransitionSlider.value || 0.3}s ease !important;
    }
  `;

  // Remove Old Hover Styles If They Exist
  const oldStyle = document.getElementById('hover-styles');
  if (oldStyle) {
    oldStyle.remove();
  }

  // Add New Hover Styles
  style.id = 'hover-styles';
  document.head.appendChild(style);
}

// Add Event Listeners For Hover Inputs
hoverBackgroundColorInput.addEventListener('input', updateHoverStyles);
hoverTextColorInput.addEventListener('input', updateHoverStyles);
hoverBorderColorInput.addEventListener('input', updateHoverStyles);

// Update Hover Scale
hoverScaleSlider.addEventListener('input', () => {
  const scale = hoverScaleSlider.value;
  hoverScaleValue.textContent = scale;
  updateHoverStyles();
});

//Update Hover Transition 
hoverTransitionSlider.addEventListener('input', () => {
  const transition = hoverTransitionSlider.value + 's';
  hoverTransitionValue.textContent = transition;
  updateHoverStyles();
});

// Initialize Hover Styles
updateHoverStyles();

// Select All The Sliders
const sliders = document.querySelectorAll('.slider');

// Function To Update The Slider Background Based On The Thumb's Position
sliders.forEach(slider => {
  // Initial update for each slider (to show the color on the left side initially)
  const initialValue = (slider.value - slider.min) / (slider.max - slider.min) * 100;
  slider.style.background = `linear-gradient(to right, #000 ${initialValue}%, #fff ${initialValue}%)`;

  // Update background on input (as the thumb moves)
  slider.addEventListener('input', function() {
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = `linear-gradient(to right, #000 ${value}%, #fff ${value}%)`;
  });
});


// Update Colors Of Button, Slider Thumbs, And Radio Buttons
backgroundColorInput.addEventListener('input', () => {
  const newColor = backgroundColorInput.value || '#ff4b5c';

  // Update preview button
  previewBtn.style.backgroundColor = newColor;

  // Update all slider thumbs and radio buttons
  const newStyle = document.createElement('style');
  newStyle.textContent = `
        .slider::-webkit-slider-thumb {
            background: ${newColor} !important;
        }
        .slider::-moz-range-thumb {
            background: ${newColor} !important;
        }
        input[type="radio"]:checked + label::before {
            background-color: ${newColor} !important;
            border-color: ${newColor} !important;
        }
    `;

  // Remove old style if exists
  const oldStyle = document.getElementById('dynamic-colors');
  if (oldStyle) {
    oldStyle.remove();
  }

  // Add new style
  newStyle.id = 'dynamic-colors';
  document.head.appendChild(newStyle);
});

// Function To Generate CSS Code For The Button
function generateCssCode() {
  const normalStyles = `
  
    /* Update the Class or Id name to match your HTML structure */
    
    button {
      font-size: ${previewBtn.style.fontSize || '28px'};
      font-weight: ${previewBtn.style.fontWeight || '400'};
      font-family: ${previewBtn.style.fontFamily || '"Happy Monkey", sans-serif'};
      width: ${previewBtn.style.width || '160px'};
      height: ${previewBtn.style.height || '64px'};
      background-color: ${backgroundColorInput.value || '#ff4b5c'};
      color: ${textColorInput.value|| '#000000'};
      border: ${previewBtn.style.borderWidth || '4px'} ${previewBtn.style.borderStyle || 'solid'} ${borderColorInput.value || '#000000'};
      border-radius: ${previewBtn.style.borderRadius || '20px'}
      
    }
  `.trim();

  const hoverStyles = `
    button:hover {
      background-color: ${hoverBackgroundColorInput.value ||backgroundColorInput.value|| '#000000'};
      color: ${hoverTextColorInput.value || textColorInput.value||'#ff4b5c'};
      border-color: ${hoverBorderColorInput.value|| borderColorInput.value|| '#ff4b5c'};
      transform: scale(${hoverScaleSlider.value || 1.1});
      transition: all ${hoverTransitionSlider.value + 's'|| '0.3s'} ease;
    }
  `.trim();

  return `${normalStyles}\n\n${hoverStyles}`;
}

// Copy CSS Button Functionality
copyCssBtn.addEventListener('click', () => {
  // Generate the CSS code
  const cssCode = generateCssCode();

  // Create a hidden textarea to copy the CSS
  const tempTextarea = document.createElement('textarea');
  tempTextarea.value = cssCode;
  document.body.appendChild(tempTextarea);

  // Select and copy the content
  tempTextarea.select();
  document.execCommand('copy');

  // Remove the textarea after copying
  document.body.removeChild(tempTextarea);

  // Provide feedback to the user
  copyCssBtn.textContent = 'Copied!';
  setTimeout(() => {
    copyCssBtn.textContent = 'Copy CSS!';
  }, 2000);
});

// Get The Popup And Close Button
const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");

// Show The Popup On Page Load
window.onload = () => {
  popup.style.display = "flex";
};

// Close The Popup When The Button Is Clicked
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

window.onload = () => {
  if (!localStorage.getItem("popupShown")) {
    popup.style.display = "flex";
    localStorage.setItem("popupShown", "true");
  }
};