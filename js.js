function drawLine() {
    const canvas = document.getElementById("drawingCanvas");
    const ctx = canvas.getContext("2d");
  
    const x1 = parseInt(document.getElementById("x1").value);
    const y1 = parseInt(document.getElementById("y1").value);
    const x2 = parseInt(document.getElementById("x2").value);
    const y2 = parseInt(document.getElementById("y2").value);
  
    
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
      alert("Please enter valid coordinates.");
      return;
    }
    // Get references to the slider, line element, and the span for displaying the value
const slider = document.getElementById('lineWidthSlider');
const line = document.getElementById('adjustableLine');
const lineWidthValue = document.getElementById('lineWidthValue');

// Event listener to adjust line width based on slider input
slider.addEventListener('input', function() {
    const lineWidth = slider.value;
    line.style.height = lineWidth + 'px'; // Adjust the height of the line
    lineWidthValue.textContent = lineWidth + 'px'; // Update the text next to the slider
});

   

   
  
    
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
  